docker build -t galatole1/multi-client:latest -t galatole1/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t galatole1/multi-server:latest -t galatole1/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t galatole1/multi-worker:latest -t galatole1/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push galatole1/multi-client:latest
docker push galatole1/multi-server:latest
docker push galatole1/multi-worker:latest

docker push galatole1/multi-client:$SHA
docker push galatole1/multi-server:$SHA
docker push galatole1/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=galatole1/multi-server:$SHA
kubectl set image deployments/client-deployment client=galatole1/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=galatole1/multi-worker:$SHA  