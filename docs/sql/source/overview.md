---
title: Source Overview
sidebar_label: Overview
---

`CREATE SOURCE` connects Materialize to some data source, and lets you interact with its data as if it were in a SQL table.

### Conceptual framework

Sources represent connections to resources outside Materialize that it can read data from. For more information, see [Key Concepts: Sources](https://timelystream.com/docs/overview/key-concepts/#sources).

### Types of sources

Materialize can connect to many different external sources of data, each with their own requirements. For details about creating sources, view the documentation for the type of data you are trying to load into Materialize:

| Source type                                                  | Avro                                                         | Text/bytes                                                   | Protobuf                                                     | CSV                                                          | JSON                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Kafka                                                        | [Avro + Kafka](https://timelystream.com/docs/sql/source/create-source/avro-kafka) | [Text/bytes + Kafka](https://timelystream.com/docs/sql/source/create-source/text-kafka) | [Protobuf + Kafka](https://timelystream.com/docs/sql/source/create-source/protobuf-kafka) | [CSV + Kafka](https://timelystream.com/docs/sql/source/create-source/csv-kafka) | [JSON + Kafka](https://timelystream.com/docs/sql/source/create-source/json-kafka) |
| Kinesis                                                      | -                                                            | [Text/bytes + Kinesis](https://timelystream.com/docs/sql/source/create-source/text-kinesis) | [Protobuf + Kinesis](https://timelystream.com/docs/sql/source/create-source/protobuf-kinesis) | [CSV + Kinesis](https://timelystream.com/docs/sql/source/create-source/csv-kinesis) | [JSON + Kinesis](https://timelystream.com/docs/sql/source/create-source/json-kinesis) |
| S3                                                           | -                                                            | [Text/bytes + S3](https://timelystream.com/docs/sql/source/create-source/text-s3) | -                                                            | [CSV + S3](https://timelystream.com/docs/sql/source/create-source/csv-s3) | [JSON + S3](https://timelystream.com/docs/sql/source/create-source/json-s3) |
| PubNub                                                       | -                                                            | [Text + PubNub](https://timelystream.com/docs/sql/source/create-source/text-pubnub) | -                                                            | -                                                            | [JSON + PubNub](https://timelystream.com/docs/sql/source/create-source/json-pubnub) |
| Local files                                                  | [Avro + file](https://timelystream.com/docs/sql/source/create-source/avro-file) | [Text/bytes + file](https://timelystream.com/docs/sql/source/create-source/text-file) | -                                                            | [CSV + files](https://timelystream.com/docs/sql/source/create-source/csv-file) | [JSON + file](https://timelystream.com/docs/sql/source/create-source/json-file) |
| [Postgres](https://timelystream.com/docs/sql/source/create-source/postgres) | -                                                            | -                                                            | -                                                            | -                                                            | -                                                            |

Don’t see what you’re looking for? [Let us know on GitHub](https://github.com/timelystream/blazar/issues/new).

### Related pages

- [`CREATE VIEW`](https://timelystream.com/docs/sql/statements/create_view)
- [`SELECT`](https://timelystream.com/docs/sql/statements/select)

[CREATE SOURCE: Kafka](https://timelystream.com/docs/sql/source/source-kafka)