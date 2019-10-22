# Prometheus
- [Monitoring With Prometheus Sample](https://www.prometheusbook.com/MonitoringWithPrometheus_sample.pdf)

# Running Prometheus via Docker
It’s also easy to run Prometheus in Docker. There’s a Docker image provided by
the Prometheus team available on the Docker Hub. You can execute it with the
docker command.
```
$ docker run -p 9090:9090 prom/prometheus
```

You can take a number of approaches here—for example, you could mount a configuration file
into the container.
> Listing 1.18: Mounting a configuration file into the Docker container

```
$ docker run -p 9090:9090   \
    -v ~/Code/reference-architecture/devops/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml    \
    -v ~/Code/reference-architecture/devops/prometheus/prometheus.rules.yml:/etc/prometheus/prometheus.rules.yml    \ 
    prom/prometheus
```

## Starting up some sample targets
Let us make this more interesting and start some example targets for Prometheus to scrape.

The Go client library includes an example which exports fictional RPC latencies for three services with different latency distributions.

Ensure you have the Go compiler installed and have a working Go build environment (with correct GOPATH) set up.

Download the Go client library for Prometheus and run three of these example processes:

```
# Fetch the client library code and compile example.
git clone https://github.com/prometheus/client_golang.git
cd client_golang/examples/random
go get -d
go build

# Start 3 example targets in separate terminals:
./random -listen-address=:8080
./random -listen-address=:8081
./random -listen-address=:8082
```

Restart Prometheus with the new configuration and verify that a new time series with the metric name 
`job_service:rpc_durations_seconds_count:avg_rate5m` is now available by querying it through the expression browser or graphing it.

```
rate(promhttp_metric_handler_requests_total[5m])
```


## Load Testing
```
locust -f locust.py --host=http://localhost
```

# Grafana
## Installing using Docker

```
$ docker run \
  -d \
  -p 3000:3000 \
  --name=grafana \
  -e "GF_SERVER_ROOT_URL=http://grafana.server.name" \
  -e "GF_SECURITY_ADMIN_PASSWORD=secret" \
  grafana/grafana
```


