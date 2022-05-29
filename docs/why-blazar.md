---
title: Why Blazar
description: Here, we try to explain what goals Blazar has and why and how we try to achieve those goals through technical means. 
---

There are many database management systems (DBMS) out there. But there is [no one-size-fits all database system](http://cs.brown.edu/research/db/publications/fits_all.pdf). All take different trade-offs to better adjust to specific use cases. Blazar is no different. Here, we try to explain what goals Blazar has and why and how we try to achieve those goals through technical means. To start with, Blazar is a [relational (table-oriented) DBMS](https://en.wikipedia.org/wiki/Relational_database) that supports the [Structured Query Language (SQL)](https://en.wikipedia.org/wiki/SQL).

## Traditional OLAP Systems
To better understand the characteristics of blazar systems, we first need to understand the traditional also known as online analytical processing (OLAP), these workloads are characterized by complex, relatively long-running queries, for example, aggregation of entire tables or joins between several large tables. oLAP requires data to be imported in batches, little support for table data updates, table fields lack primary and foreign key constraints, and no transactional capabilities. There are often two major problems with time delays and inaccuracy of data.
blazar was developed with the goal of accommodating scenarios that require **real-time** and **accurate** data analysis.

## Fast Analytical Queries
Blazar is designed to support **analytical query workloads**, also known as [Online analytical processing (OLAP)](https://en.wikipedia.org/wiki/Online_analytical_processing). These workloads are characterized by complex, relatively long-running queries that process significant portions of the stored dataset, for example aggregations over entire tables or joins between several large tables. Changes to the data are expected to be rather large-scale as well, with several rows being appended, or large portions of tables being changed or added at the same time. 

To efficiently support this workload, it is critical to reduce the amount of CPU cycles that are expended per individual value. The state of the art in data management to achieve this are either [vectorized or just-in-time query execution engines](https://www.vldb.org/pvldb/vol11/p2209-kersten.pdf). Blazar contains a **columnar-vectorized query execution engine**, where queries are still interpreted, but a large batch of values (a "vector") are processed in one operation. This greatly reduces overhead present in traditional systems such as PostgreSQL, MySQL or SQLite which process each row sequentially. Vectorized query execution leads to far better performance in OLAP queries.

## Simple Operation
Blazar has **no external dependencies**, neither for compilation nor during run-time. For releases, the entire source tree of Blazar is compiled into one executor files. This greatly simplifies deployment and integration in other build processes. For building, all that is required to build Blazar is a working C++17 compiler. 

Blazar has excellent performance and can support running in **docker containers**, **EC2**, or **physical hardware servers**.

## Feature-Rich
Blazar provides serious data management features. There is extensive support for **complex queries** in SQL with a large function library, window functions etc. Blazar provides **transactional guarantees** (ACID properties) through our custom, bulk-optimized [Multi-Version Concurrency Control (MVCC)](https://en.wikipedia.org/wiki/Multiversion_concurrency_control). Data can be reliably stored in files. Blazar supports secondary indexes to speed up queries trying to find a single table entry. 

## Thorough Testing
Blazar is intensively tested using [Continuous Integration](https://github.com/timelystream/blazar/actions). Blazar's test suite currently contains millions of queries, and includes queries adapted from the test suites of SQLite, PostgreSQL and MonetDB. Tests are repeated on a wide variety of platforms and compilers. Every pull request is checked against the full test setup and only merged if it passes. 

In addition to this test suite, we run various tests that stress Blazar under heavy loads. We run the [TPC-H](http://www.tpc.org/tpch/) and [TPC-DS](http://www.tpc.org/tpcds/) benchmarks, and run various tests where Blazar is used by many clients in parallel.

## Free & Open Source License
This is why Blazar is released under the very permissive [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0). Blazar is Open Source, the entire source code is freely available on GitHub. We invite contributions from anyone provided they adhere to our [Code of Conduct](../).

## Standing on the Shoulders of Giants
Blazar uses some components from various Open-Source projects and draws inspiration from scientific publications. We are very greatful for this. Here is an overview:

* **Execution engine:** The vectorized execution engine is inspired by the paper [MonetDB/X100: Hyper-Pipelining Query Execution](http://cidrdb.org/cidr2005/papers/P19.pdf) by Peter Boncz, Marcin Zukowski and Niels Nes.
* **Optimizer:** Blazar's optimizer draws inspiration from the papers [Dynamic programming strikes back](https://15721.courses.cs.cmu.edu/spring2020/papers/20-optimizer2/p539-moerkotte.pdf) by Guido Moerkotte and Thomas Neumann as well as [Unnesting Arbitrary Queries](http://www.btw-2015.de/res/proceedings/Hauptband/Wiss/Neumann-Unnesting_Arbitrary_Querie.pdf) by Thomas Neumann and Alfons Kemper.
* **Concurrency control:** Our MVCC implementation is inspired by the paper [Fast Serializable Multi-Version Concurrency Control for Main-Memory Database Systems](https://db.in.tum.de/~muehlbau/papers/mvcc.pdf) by Thomas Neumann, Tobias Mühlbauer and Alfons Kemper.
* **Secondary Indexes:** Blazar has support for secondary indexes based on the paper [The Adaptive Radix Tree: ARTful Indexing for Main-Memory Databases](https://db.in.tum.de/~leis/papers/ART.pdf) by Viktor Leis, Alfons Kemper and Thomas Neumann.
* **SQL Window Functions:** Blazar's window functions implementation uses Segment Tree Aggregation as described in the paper "Efficient Processing of Window Functions in Analytical SQL Queries" by Viktor Leis, Kan Kundhikanjana, Alfons Kemper and Thomas Neumann.
* **SQL Parser:** We use the PostgreSQL parser that was [repackaged as a stand-alone library](https://github.com/lfittl/libpg_query). The translation to our own parse tree is inspired by [Peloton](https://pelotondb.io).
* **Shell:** We use the [SQLite shell](https://sqlite.org/cli.html) to work with Blazar.
* **Regular Expressions:** Blazar uses Google's [RE2](https://github.com/google/re2) regular expression engine.
* **String Formatting:** Blazar uses the [fmt](https://github.com/fmtlib/fmt) string formatting library.
* **UTF Wrangling:** Blazar uses the [utf8proc](https://juliastrings.github.io/utf8proc/) library to check and normalize UTF8. 
* **Test Framework:** Blazar uses the [Catch2](https://github.com/catchorg/Catch2) unit test framework.
* **Test Cases:** We use the [SQL Logic Tests from SQLite](https://www.sqlite.org/sqllogictest/doc/trunk/about.wiki) to test Blazar.
* **Result Validation:** [Manuel Rigger](https://www.manuelrigger.at) used his excellent [SQLancer](https://github.com/sqlancer/sqlancer) tool to verify Blazar result correctness.
* **Query fuzzing:** We use [SQLsmith](https://github.com/anse1/sqlsmith) to generate random queries for additional testing.
