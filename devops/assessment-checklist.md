# Monitoring 
As stated in the monitoring metrics and log diagnostics
## Health
- [ ] SERVICE traces the execution of the user request.
- [ ] SERVICE log exceptions, faults, and warnings. 
- [ ] SERVICE has endpoint health monitoring enabled.
- [ ] SERVICE ambient performance information: CPU utilization or I/O activity.
- [ ] DASH displays the rate of requests. 
- [ ] DASH displays the response times of requests.
- [ ] DASH displays the volume of data flowing into and out of the SERVICE.
## Availability
- [ ] SERVICE exposes one or more health endpoints, testing access to functional areas.
- [ ] SERVICE monitoring system can ping endpoint, on schedule to collect success/fail results.
- [ ] SERVICE timeouts, network connectivity failures, connection retry attempts are timestamped. 
- [ ] DASH immediate availability of the SERVICE.
- [ ] DASH availability failure rates of the SERVICE.
- [ ] DASH display a historical view of failure rates of the SERVICE across any specified period.
- [ ] DASH displays the reasons for unavailability of SERVICE. 
## Performance
- [ ] SERVICE memory utilization.
- [ ] SERVICE number of threads.
- [ ] SERVICE CPU processing time.
- [ ] SERVICE request queue length.
- [ ] SERVICE disk or network I/O rates and errors.
- [ ] SERVICE number of bytes written or read.
- [ ] SERVICE middleware indicators, such as queue length.
- [ ] DASH displays the response rates for user requests.
- [ ] DASH displays the number of concurrent user requests.
- [ ] DASH displays the volume of network traffic.
- [ ] DASH displays the rates at which business transactions are being completed.
- [ ] DASH displays the average processing time for requests.
- [ ] DASH displays the number of concurrent users versus request latency times. 
- [ ] DASH displays the number of concurrent users versus the average response time.
- [ ] DASH displays the volume of requests versus the number of processing errors.
## Security
- [ ] SERVICE logs all sign-in attempts, whether they fail or succeed.
- [ ] SERVICE logs all operations, the details of resources accessed by an authenticated user.
- [ ] SERVICE logs when a user ends a session and signs out.
- [ ] ALERT when attempted intrusions by an unauthenticated entity.
- [ ] ALERT when attempts by entities to perform operations on data without granted access.
- [ ] ALERT when the system, or some part, is under attack from outside or inside. 
- [ ] ALERT when account makes repeated failed sign-in attempts within a specified period.
- [ ] ALERT when authenticated account tries to access a prohibited resource. 
- [ ] ALERT when a large number of unauthenticated or unauthorized requests occur.
## SLA
- [ ] SYSTEM performs endpoint monitoring.
- [ ] SYSTEM catches logging exceptions, faults, and warnings.
- [ ] SYSTEM traces the execution of user requests.
- [ ] SYSTEM monitoring the availability of any third-party services in uses.
- [ ] SYSTEM uses performance metrics and counters.
- [ ] DASH calculates the total number of user requests during a specified period and determine the success and failure rate of these requests.
- [ ] DASH combines the response times of user requests to generate an overall view of system response times.
- [ ] DASH displays the progress of user requests to break down the overall response time of a request into the response times of the individual work items in that request.
- [ ] DASH displays the overall availability of the system as a percentage of uptime for any specific period.
- [ ] DASH displays the percentage time availability of the individual components and services in the system. 
## Auditing
- [ ] SYSTEM has the security system that manages user authentication.
- [ ] SYSTEM traces logs that record user activity.
- [ ] SYSTEM has security logs that track all identifiable and unidentifiable network requests.
## Usage
- [ ] SYSTEM has tracing for user activity.
- [ ] SYSTEM captures performance counters that measure the utilization for each resource.
- [ ] SYSTEM monitors the resource consumption by each user.
- [ ] DASH displays the number of requests that are processed by each subsystem and directed to each resource.
- [ ] DASH displays the work that each user is performing.
- [ ] DASH displays the volume of data storage that each user occupies.
- [ ] DASH displays the resources that each user is accessing.
