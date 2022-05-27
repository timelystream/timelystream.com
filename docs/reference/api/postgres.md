---
title: Postgres
description: Postgres compatibility reference documentation.
---

Blazar supports the Postgres wire protocol. As a result, Blazar is capable of
running most of Postgres queries. This means that you can use your favorite
Postgres client or driver with Blazar, at no extra cost.

The storage model used by Postgres is fundamentally different to the one used by
Blazar. Some features that exists for Postgres do not apply to Blazar.

## Compatibility

### List of supported features

- Querying (all types expect `BLOB`)
- Prepared statements with bind parameters (check for specific libraries
  [below](/docs/reference/api/postgres#libraries--programmatic-clients))
- `INSERT` statements with bind parameters (same)
- DDL execution
- Batch inserts with `JDBC`
- Plain authentication

Examples which demonstrate how to use Postgres clients in a number of different
languages can be found on the following pages:

- [Insert data](/docs/develop/insert-data#postgresql-wire-protocol)
  demonstrates how to use the parameterized queries and prepared statements to
  insert data.
- [Query data](/docs/develop/query-data#postgresql-wire-protocol) shows how to
  run queries against tables.

### List of unsupported features

- SSL
- Remote file upload (`COPY` from `stdin`)
- `UPDATE` and `DELETE` statements
- `BLOB` transfer
