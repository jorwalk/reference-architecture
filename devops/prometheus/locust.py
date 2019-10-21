# locust -f locust.py --host=http://localhost
from locust import HttpLocust, TaskSet

def index_8080(l):
    l.client.get(":8080/metrics")

def index_8081(l):
    l.client.get(":8081/metrics")

def index_8082(l):
    l.client.get(":8082/metrics")

class UserBehavior(TaskSet):
    tasks = {
        index_8080: 3,
        index_8081: 2,
        index_8082: 1
    }

class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 5000
    max_wait = 9000