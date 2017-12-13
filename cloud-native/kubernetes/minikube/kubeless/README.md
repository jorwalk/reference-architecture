

## NO RBAC:
kubectl create ns kubeless
curl -sL https://github.com/kubeless/kubeless/releases/download/v0.3.1/kubeless-v0.3.1.yaml | kubectl create -f -


kubectl --namespace=<insert-namespace-name-here> get pods
