# Message broker
From Wikipedia, the free encyclopedia

![Sequence diagram for depicting the Message Broker pattern](https://en.wikipedia.org/wiki/Message_broker#/media/File:Message_Broker.png)

Sequence diagram for depicting the Message Broker pattern

In computer programming, a message broker is an intermediary program module that translates a message from the formal messaging protocol of the sender to the formal messaging protocol of the receiver. Message brokers are elements in telecommunication or computer networks where software applications communicate by exchanging formally-defined messages. Message brokers are a building block of message-oriented middleware.



## Pattern
A message broker is an architectural pattern for message validation, transformation and routing. It mediates communication amongst applications, minimizing the mutual awareness that applications should have of each other in order to be able to exchange messages, effectively implementing decoupling.

The purpose of a broker is to take incoming messages from applications and perform some action on them. The following are examples of actions that might be taken in by the broker:

* Route messages to one or more destinations
* Transform messages to an alternative representation
* Perform message aggregation, decomposing messages into multiple messages and sending them to their destination, then recomposing the responses into one message to return to the user
* Interact with an external repository to augment a message or store it
* Invoke Web services to retrieve data
* Respond to events or errors
* Provide content and topic-based message routing using the publish–subscribe pattern

## Broker functionality
Some messaging functions do not require an intermediary message broker. For example, end-point objects can take the roles of publisher and subscriber, as in the observer design pattern. Message brokers are used to decouple end-points and/or meet specific non-functional requirements and/or facilitate reuse of intermediary functions. For example, a message broker may be used to manage a workload queue or message queue for multiple receivers, providing reliable storage, guaranteed message delivery and perhaps transaction management.

### List of message broker software
* Amazon Web Services (AWS) [Simple Queue Service](https://en.wikipedia.org/wiki/Amazon_Simple_Queue_Service) (SQS)
* [Apache ActiveMQ](https://en.wikipedia.org/wiki/Apache_ActiveMQ)
* [Apache Kafka](https://en.wikipedia.org/wiki/Apache_Kafka)
* Apache Qpid
* Apache RocketMQ
* Celery
* Cloverleaf (E-Novation Lifeline)
* Comverse Message Broker (Comverse Technology)
* Enduro/X Transactional Message Queue (TMQ)
* Financial Fusion Message Broker (Sybase)
* Fuse Message Broker (enterprise ActiveMQ)
* Gearman
* HornetQ (Red Hat)
* IBM Integration Bus
* IBM Message Queues / IBM WebSphere MQ
* JBoss Messaging (JBoss)
* JORAM
* Microsoft Azure Service Bus (Microsoft)
* Microsoft BizTalk Server (Microsoft)
* NATS (MIT Open Source License, written in Go)
* Open Message Queue
* Oracle Message Broker (Oracle Corporation)
* QDB (Apache License 2.0, supports message replay by timestamp)
* RabbitMQ (Mozilla Public License, written in Erlang)
* Redis An open source, in-memory data structure store, used as a database, cache and message broker.
* SAP PI (SAP AG)
* Solace Systems Message Router
* Spread Toolkit
* Tarantool, a NoSQL database, with a set of stored procedures for message queues
* WSO2 Message Broker

### See also
[Publish–subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
[Message-oriented middleware](https://en.wikipedia.org/wiki/Message-oriented_middleware)
