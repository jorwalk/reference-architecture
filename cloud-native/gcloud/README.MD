# Google Cloud

## Bash Profile
If you don't add the gcloud command, into your bash profile you can download the SDK
and add it to your source temporarily.
```
source $HOME/Code/google-cloud-sdk/completion.bash.inc
source $HOME/Code/google-cloud-sdk/path.bash.inc
```

# Cloud SDK
### gcloud container

Create a new cluster and assign it to a zone

`gcloud container clusters create`

```
$ gcloud container clusters create es-cluster --zone us-central1-a
```

```
$ gcloud container clusters create NAME [--additional-zones=ZONE,[ZONE,…]] [--async] [--cluster-ipv4-cidr=CLUSTER_IPV4_CIDR] [--cluster-version=CLUSTER_VERSION] [--disable-addons=[DISABLE_ADDON,…]] [--disk-size=DISK_SIZE] [--enable-autoupgrade] [--no-enable-cloud-logging] [--no-enable-cloud-monitoring] [--image-type=IMAGE_TYPE] [--machine-type=MACHINE_TYPE, -m MACHINE_TYPE] [--max-nodes-per-pool=MAX_NODES_PER_POOL] [--network=NETWORK] [--node-labels=[NODE_LABEL,…]] [--num-nodes=NUM_NODES; default=3] [--subnetwork=SUBNETWORK] [--tags=TAG,[TAG,…]] [--zone=ZONE, -z ZONE] [--enable-autoscaling --max-nodes=MAX_NODES --min-nodes=MIN_NODES] [--password=PASSWORD --no-enable-basic-auth     | --username=USERNAME, -u USERNAME; default="admin"] [--service-account=SERVICE_ACCOUNT     | --no-enable-cloud-endpoints --scopes=[SCOPE,…]; default="gke-default"] [GCLOUD_WIDE_FLAG …]
```
`--enable-cloud-logging`
Automatically send logs from the cluster to the Google Cloud Logging API. Enabled by default, use `--no-enable-cloud-logging` to disable.


`gcloud container clusters delete`


```
gcloud container clusters delete NAME [NAME …] [--async] [--zone=ZONE, -z ZONE] [GCLOUD_WIDE_FLAG …]
```
