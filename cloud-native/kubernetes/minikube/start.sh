#!/bin/bash
# sh start.sh
# minikube delete &&
minikube start --cpus 4 --memory 8192 --kubernetes-version v1.8.0 --bootstrapper kubeadm
