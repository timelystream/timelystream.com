---
title: Blazar 0.8 Release Highlights
author: xnge
author_title: Blazar Engineering
author_url: https://github.com/xnge
author_image_url: https://avatars.githubusercontent.com/xnge
description: Blazar 0.8 Release Highlights
keywords: [Blazar, release, performance, database, sql]
tags: [release, team]
---

import Banner from "@theme/Banner"
import Screenshot from "@theme/Screenshot"

<Banner
  alt="Blazar 0.8 Release Highlights"
  height={800}
  src="/img/blog/2022-05-20/blog-cover.png"
  width={900}
/>

In May 2022, **Blazar 0.8** was released, which is based on our product design 
and focuses on _functionality and connectivity_ to external data sources. 
Here is an overview of the changes in the latest and greatest version.


May 2022 brings **Blazar 0.8**, a release focused on _performance and usability_ based on the vital feedback of our
[user community](https://slack.questdb.io/) and [customers](https://questdb.io/customers/). Here's a roundup of changes
that have just landed in the latest, greatest version yet.

<!-- truncate -->

## Connecting to external data sources

Sources represent connections to resources outside Blazar that it can read data from.
`CREATE SOURCE` connects Blazar to some data source, and lets you interact with its data as if it were in a SQL table.
For more information, see Key Concepts: [Sources](https://{@domain@}/docs/sql/source/overview)

```blazar-sql
CREATE SOURCE csv_source (foo, bar, baz)
FROM KAFKA BROKER 'localhost:9092' TOPIC 'data'
FORMAT CSV WITH 3 COLUMNS;
```
Will create the metadata for source in Blazar:
1. You can query the external data by executing a SELECT statement.
2. You can create a materialized view to ingest the external data into Blazar.

## MATERIALIZED VIEW

Creates a `MATERIALIZED VIEW`, 
which lets you retrieve incrementally updated results of a `SELECT` query very quickly. 
Despite the simplicity of creating a materialize view, 
it’s Materialize’s most powerful feature.

`CREATE MATERIALIZED VIEW` computes and maintains the results of a `SELECT` query in Blazar. 
For more information, see Key Concepts: [Materialized views](https://{@domain@}/docs/sql/materialized-views).

```blazar-sql
CREATE MATERIALIZED VIEW mv_source
AS
  SELECT * FROM csv_source;
```

## View Analysis

1. Once the materialized view is created, all the data that exists in the source will be ingested into the materialized view.
2. By using rich SQL statements on the materialized view, the external data can be analyzed.
