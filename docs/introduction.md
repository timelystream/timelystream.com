---
title: Introduction
description:
  Blazar is a relational column-oriented database designed for real-time
  analytics on time series data.
---

Blazar is a relational column-oriented database designed for time series and
event data. It uses SQL with extensions for time series to assist with real-time
analytics. These pages cover core concepts of Blazar, including setup steps,
usage guides, and reference documentation for syntax, APIs and configuration.

## Get Started

This section explains how to install and run Blazar using one of the following
methods:

- [Docker](/docs/get-started/docker) for repeatable, portable and scalable
  installations
- [Binaries](/docs/get-started/binaries) for direct downloads to run on Linux

Once Blazar is running, a guide is provided to
[create your first database](/docs/get-started/first-database).

## Data Import

- [appender](/docs/data-import/appender)
- [csv](/docs/data-import/csv)
- [insert](/docs/data-import/insert)
- [overview](/docs/data-import/overview)
- [parquet](/docs/data-import/parquet)

## Develop

This section describes how to connect to Blazar using a variety of tools and
programming languages through our various network endpoints.

- [profiling](/docs/develop/profiling) to the database through our various
  endpoints. Learn which protocol is best for different use cases.
- [testing](/docs/develop/testing) using the InfluxDB Line Protocol,
  PostgreSQL wire protocol or our HTTP REST API.

## Extensions

This section describes how to connect to Blazar using a variety of tools and
programming languages through our various network endpoints.

- [overview](/docs/extensions/overview) to the database through our various
  endpoints. Learn which protocol is best for different use cases.
- [full text search](/docs/extensions/full-text-search) to the database through our various
  endpoints. Learn which protocol is best for different use cases.
- [json](/docs/extensions/json) using the InfluxDB Line Protocol,
  PostgreSQL wire protocol or our HTTP REST API.

## Guides

### Import
- [csv export](/docs/guides/import/csv-export)
- [csv import](/docs/guides/import/csv-import)
- [http import](/docs/guides/import/http-import)
- [parquet export](/docs/guides/import/parquet-export)
- [parquet import](/docs/guides/import/parquet-import)
- [s3 import](/docs/guides/import/s3-import)

### Meta
- [describe](/docs/guides/meta/describe)
- [explain analyze](/docs/guides/meta/explain-analyze)
- [explain](/docs/guides/meta/explain)
- [list tables](/docs/guides/meta/list-tables)
- [summarize](/docs/guides/meta/summarize)

### Python
- [execute sql](/docs/guides/python/execute-sql)
- [import arrow](/docs/guides/python/import-arrow)
- [export arrow](/docs/guides/python/export-arrow)
- [import pandas](/docs/guides/python/import-pandas)
- [export pandas](/docs/guides/python/export-pandas)
- [ibis](/docs/guides/python/ibis)
- [install](/docs/guides/python/install)
- [jupyter](/docs/guides/python/jupyter)
- [sql on arrow](/docs/guides/python/sql-on-arrow)
- [sql on pandas](/docs/guides/python/sql-on-pandas)

### reference/api
- [postgres](/docs/reference/api/postgres)
- [rest](/docs/reference/api/rest)


### sql

#### data-types
- [overview](/docs/sql/data-types/overview)
- [blob](/docs/sql/data-types/blob)
- [boolean](/docs/sql/data-types/boolean)
- [date](/docs/sql/data-types/date)
- [enum](/docs/sql/data-types/enum)
- [interval](/docs/sql/data-types/interval)
- [list](/docs/sql/data-types/list)
- [map](/docs/sql/data-types/map)
- [numeric](/docs/sql/data-types/numeric)
- [struct](/docs/sql/data-types/struct)
- [text](/docs/sql/data-types/text)
- [timestamp](/docs/sql/data-types/timestamp)
- [timezones](/docs/sql/data-types/timezones)

#### expressions
- [case](/docs/sql/expressions/case)
- [cast](/docs/sql/expressions/cast)
- [collations](/docs/sql/expressions/collations)
- [comparison operators](/docs/sql/expressions/comparison-operators)
- [logical operators](/docs/sql/expressions/logical-operators)
- [subqueries](/docs/sql/expressions/subqueries)

#### functions
- [overview](/docs/sql/functions/overview)
- [blob](/docs/sql/functions/blob)
- [date](/docs/sql/functions/date)
- [datepart](/docs/sql/functions/datepart)
- [nested](/docs/sql/functions/nested)
- [time](/docs/sql/functions/time)
- [utility](/docs/sql/functions/utility)
- [char](/docs/sql/functions/char)
- [dateformat](/docs/sql/functions/dateformat)
- [interval](/docs/sql/functions/interval)
- [numeric](/docs/sql/functions/numeric)
- [pattern matching](/docs/sql/functions/pattern-matching) 
- [timestamp](/docs/sql/functions/timestamp)

#### query syntax
- [filter](/docs/sql/query-syntax/filter)
- [having](/docs/sql/query-syntax/having)
- [sample](/docs/sql/query-syntax/sample)
- [where](/docs/sql/query-syntax/where)
- [with](/docs/sql/query-syntax/with)
- [from](/docs/sql/query-syntax/from)
- [limit](/docs/sql/query-syntax/limit)
- [select](/docs/sql/query-syntax/select)
- [window](/docs/sql/query-syntax/window)
- [groupby](/docs/sql/query-syntax/groupby)
- [orderby](/docs/sql/query-syntax/orderby)
- [unnest](/docs/sql/query-syntax/unnest)
- [grouping sets](/docs/sql/query-syntax/grouping-sets)
- [qualify](/docs/sql/query-syntax/qualify)
- [values](/docs/sql/query-syntax/values)

#### source
- [overview](/docs/sql/source/overview)
- [source-kafka](/docs/sql/source/source-kafka

#### statements
- [alter table](/docs/sql/statements/alter-table)
- [create macro](/docs/sql/statements/create-macro)
- [create sequence](/docs/sql/statements/create-sequence)
- [create view](/docs/sql/statements/create-view)
- [drop](/docs/sql/statements/drop)
- [insert](/docs/sql/statements/insert)
- [update](/docs/sql/statements/update)
- [copy](/docs/sql/statements/copy)
- [create schema](/docs/sql/statements/create-schema)
- [create table](/docs/sql/statements/create-table)
- [delete](/docs/sql/statements/delete)
- [export](/docs/sql/statements/export)
- [select](/docs/sql/statements/select)

- [aggregates](/docs/sql/aggregates)
- [information schema](/docs/sql/information-schema)
- [pragmas](/docs/sql/pragmas)
- [configuration](/docs/sql/configuration)
- [introduction](/docs/sql/introduction)
- [indexes](/docs/sql/indexes)
- [materialized views](/docs/sql/materialized-views)
- [samples](/docs/sql/samples)
- [window functions](/docs/sql/window-functions)

## Troubleshooting

- [faq](/docs/troubleshooting/faq)
- [os error codes](/docs/troubleshooting/os-error-codes)

## Why blazar?
- [why blazar](/docs/why-blazar)