---
title: Create my first dataset
description:
  This document shows how to work with Blazar as a time series database by
  generating dummy time series data, insert the data into a table, then querying
  and cleaning up the example data set.
---

The goal of this guide is to explore Blazar's features and to interact with
time series data and assumes you have an instance running. You can find guides
to setup Blazar on the [introduction page](/docs/introduction). In this
tutorial, you will learn how to:

- [Creating a table](#creating-a-table)
- [Inserting data](#inserting-data)
- [Running queries](#running-queries)
- [Deleting tables](#deleting-tables)

As an example, we will look at hypothetical temperature readings from a variety
of sensors.

## Creating a table

The first step is to create tables. One table will contain the metadata of our
sensors, and the other will contain the actual readings (payload data) from
these sensors.

Let's start by creating the `sensors` table:

```blazar-sql
CREATE TABLE sensors (ID LONG, make STRING, city STRING);
```

For more information about this statement, please refer to the
[CREATE TABLE](/docs/sql/statements/create-table) reference documentation.

## Inserting data

Let's populate our `sensors` table with procedurally-generated data:

```blazar-sql title="Insert as SELECT"
INSERT INTO sensors
    SELECT
        x ID, --increasing integer
        rnd_str('Eberle', 'Honeywell', 'Omron', 'United Automation', 'RS Pro') make,
        rnd_str('New York', 'Miami', 'Boston', 'Chicago', 'San Francisco') city
    FROM long_sequence(10000) x
;
```

For more information about insert statements, refer to the
[INSERT](/docs/sql/statements/insert) reference documentation.

## Running queries

Let's select all records from the `readings` table (note that `SELECT * FROM` is
optional in Blazar):

```blazar-sql
readings;
```

Let's also select the `count` of records from `readings`:

```blazar-sql
SELECT count() FROM readings;
```

|count     |
|:---------|
|10,000,000|

and the average reading:

```blazar-sql
SELECT avg(temp) FROM readings;
```

|average        |
|:--------------|
|18.999217780895|

We can now use the `sensors` table alongside the `readings` table to get more
interesting results using a `JOIN`:

```blazar-sql
SELECT *
FROM readings
JOIN(
    SELECT ID sensId, make, city
    FROM sensors)
ON readings.sensorId = sensId;
```

The results should look like the table below:

|ID |ts                         |temp           |sensorId|sensId|make     |city         |
|:--|:--------------------------|:--------------|:-------|:-----|:--------|:------------|
|1  |2019-10-17T00:00:00.000000Z|16.472200460982|3211    |3211  |Omron    |New York     |
|2  |2019-10-17T00:00:00.100000Z|16.598432033599|2319    |2319  |Honeywell|San Francisco|
|3  |2019-10-17T00:00:00.100000Z|20.293681747009|8723    |8723  |Honeywell|New York     |
|4  |2019-10-17T00:00:00.100000Z|20.939263119843|885     |885   |RS Pro   |San Francisco|
|5  |2019-10-17T00:00:00.200000Z|19.336660059029|3200    |3200  |Honeywell|San Francisco|
|6  |2019-10-17T00:00:01.100000Z|20.946643576954|4053    |4053  |Honeywell|Miami        |

```blazar-sql title="Aggregation keyed by city"
SELECT city, max(temp)
FROM readings
JOIN(
    SELECT ID sensId, city
    FROM sensors) a
ON readings.sensorId = a.sensId;
```

The results should look like the table below:

|city         |max            |
|:------------|:--------------|
|New York     |22.999998786398|
|San Francisco|22.999998138348|
|Miami        |22.99999994818 |
|Chicago      |22.999991705861|
|Boston       |22.999999233377|

```blazar-sql title="Aggregation by hourly time buckets"
SELECT ts, city, make, avg(temp)
FROM readings timestamp(ts)
JOIN
    (SELECT ID sensId, city, make
    FROM sensors
    WHERE city='Miami' AND make='Omron') a
ON readings.sensorId = a.sensId
WHERE ts IN '2019-10-21;1d' -- this is an interval between 21-10 and 1 day later
```

The results should look like the table below:

|ts                         |city |make |average        |
|:--------------------------|:----|:----|:--------------|
|2019-10-21T00:00:44.600000Z|Miami|Omron|20.004285872098|
|2019-10-21T00:00:52.400000Z|Miami|Omron|16.68436714013 |
|2019-10-21T00:01:05.400000Z|Miami|Omron|15.243684089291|
|2019-10-21T00:01:06.100000Z|Miami|Omron|17.193984104315|
|2019-10-21T00:01:07.100000Z|Miami|Omron|20.778686822666|
|...                        |...  |...  |...            |

For more information about these statements, please refer to the
[SELECT](/docs/sql/statements/select) and `JOIN`
pages.

## Deleting tables

We can now clean up the demo data by using `DROP TABLE` SQL. Be careful using
this statement as Blazar cannot recover data that is deleted in this way:

```blazar-sql
DROP TABLE readings;
DROP TABLE sensors;
```
