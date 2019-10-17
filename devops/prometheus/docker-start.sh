docker run -p 9090:9090   \
    -v ~/Code/reference-architecture/devops/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml    \
    -v ~/Code/reference-architecture/devops/prometheus/prometheus.rules.yml:/etc/prometheus/prometheus.rules.yml    \
    prom/prometheus