To stop the cluster, type docker-compose down.
Data volumes will persist, so it’s possible to start the cluster again with the same data using `docker-compose up`.
To destroy the cluster and the data volumes, just type `docker-compose down -v`.

## Inspect status of cluster:
```
curl http://127.0.0.1:9200/_cat/health
```
