# Minikube

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

## Installation

- kubectl
- docker (for Mac)
- minikube
- virtualbox

### macOS
``` shell
$ brew update && brew install kubectl && brew cask install docker minikube virtualbox
```

## Verify
``` shell
$ docker --version                # Docker version 17.09.1-ce, build 19e2cf6
$ docker-compose --version        # docker-compose version 1.17.1, build 6d101fb
$ docker-machine --version        # docker-machine version 0.13.0, build  9ba6da9
$ minikube version                # minikube version: v0.23.0
$ kubectl version --client        # Client Version: version.Info{Major:"1", Minor:"8", GitVersion:"v1.8.3",
```

## Start
``` shell
$ minikube delete && minikube start --cpus 4 --memory 8192 --kubernetes-version v1.8.0 --bootstrapper kubeadm
```

Start with more memory and cpu's

```shell
$ minikube stop && minikube start --cpus 4 --memory 8192
```

Use kubeadm as localkube is being depricated.

This will build and start a lightweight local cluster, consisting of a master, etcd, Docker and a single node.
Minikube will also create a “minikube” context, and set it to default in kubectl. To switch back to this context later, run this command: `kubectl config use-context minikube`.

## Dashboard
```shell
$ minikube dashboard

http://192.168.99.100:30000/#!/overview?namespace=default
```

## List Minikube Addons
```shell
$ minikube addons list
- storage-provisioner: enabled
- kube-dns: enabled
- registry: disabled
- registry-creds: disabled
- addon-manager: enabled
- dashboard: disabled
- default-storageclass: enabled
- coredns: disabled
- heapster: disabled
- efk: disabled
- ingress: disabled
```

Enable/Disable

```
minikube addons enable heapster
```
## Kubectl

Return a list of all the pods in the cluster

```shell
$ kubectl get pods --all-namespaces
```

# Reset everything
```shell
$ minikube stop;
$ minikube delete; sudo rm -rf ~/.minikube; sudo rm -rf ~/.kube

$ brew uninstall kubectl;
$ brew cask uninstall docker virtualbox minikube;
```
