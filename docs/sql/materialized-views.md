---
title: Materialized Views
sidebar_label: Materialized Views
---

## Materialized Views

Materialized views embed a query like a traditional SQL view, 
but—unlike a SQL view—compute and incrementally update the results of the embedded query. 
This lets users read from materialized views and receive fresh answers with incredibly low latencies.

Materialize accomplishes incremental updates by creating a set of persistent transformations—known 
as a “dataflow”—that represent the query’s output. 

As new data comes in from sources, it’s fed into materialized views that query the source. 
Materialize then incrementally updates the materialized view’s output by understanding what has changed in the data, 
based on the source’s envelope. Any changes to a view’s output is then propagated to materialized views that query it, 
and the process repeats.

When reading from a materialized view, Materialize can return the full result set of the data stream.
