# API Microservice
- Create
- Read
- Update
- Delete

# Languages
- C#
- NodeJS
- Python
- Java

# Unit Tests
# Load Balance
# Integration Test

# Database
- SQL
- NoSQL

# The Twelve Factors
In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:

- Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
- Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
- Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
- Minimize divergence between development and production, enabling continuous deployment for maximum agility;
- And can scale up without significant changes to tooling, architecture, or development practices.

The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

## I. Codebase
One codebase tracked in revision control, many deploys
- GitHub
- BitBucket
- GitLab (hosted/self)
- GCP Source Repository
- Azure Repos
- AWS Code Commit


## II. Dependencies
Explicitly declare and isolate dependencies
- requirement.txt
- package.json
- NuGet
- Ant/Maven/Gradle


## III. Config
Store config in the environment
- .env
- [A Design Pattern for Configuration Management in Python](https://www.hackerearth.com/practice/notes/samarthbhargav/a-design-pattern-for-configuration-management-in-python/)

## IV. Backing services
Treat backing services as attached resources

## V. Build, release, run
Strictly separate build and run stages
- GCP Cloud Build
- Azure DevOps
- Jenkins
- Circle CI
- AWS CodeBuild

## VI. Processes
Execute the app as one or more stateless processes
- Kubernetes
- AWS Lambda
- GCP Cloud Function
- EC2
- Compute Engine
- Azure Serverless

## VII. Port binding
Export services via port binding

## VIII. Concurrency
Scale out via the process model

## IX. Disposability
Maximize robustness with fast startup and graceful shutdown

## X. Dev/prod parity
Keep development, staging, and production as similar as possible

## XI. Logs
Treat logs as event streams
- Stack Driver
- FluentD

## XII. Admin processes
Run admin/management tasks as one-off processes
