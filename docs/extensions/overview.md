---
layout: docu
title: Extensions
selected: Documentation/Extensions
---
Blazar has a number of extensions available for use. Not all of them are included by default in every distribution, but Blazar has a mechanism that allows for remote installation.

## Available extensions
 * excel
 * [full text search](./full-text-search) (named fts)
 * httpfs
 * icu
 * [json](./json)
 * parquet
 * substrait
 * tpch
 * tpcds
 * visualizer

## Remote installation

If a given extensions is not available with your distribution, you can do the following to make it available.

```sql
INSTALL 'fts';
LOAD 'fts';
```

<!--
TODO: How to check which extensions have been loaded or are available

https://github.com/timelystream/blazar/search?q=loaded_extensions
-->
