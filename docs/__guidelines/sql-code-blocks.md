---
title: SQL code blocks
---

### Checklist

- [ ] Use the `blazar-sql` language
- [ ] Keywords are uppercase
- [ ] Types are uppercase
- [ ] Column names are camelCase
- [ ] Table names are camelCase
- [ ] Function names are lowercase
- [ ] Statements finish with `;`

### Formatting

- Always write explicit `SELECT * FROM table` instead of `table` with the
  exception of pages describing the shorthand expression.
- `timestamp` is not a valid column name. Neither are any type or function
  names.
- Char returns are allowed either (1) after a `,` (2) after a `SQL keyword` (3)
  after opening or closing a bracket `(`,`)`

### Examples

```blazar-sql
SELECT * FROM tableName;
```

```blazar-sql
SELECT columnName, min(columnName) FROM tableName;
```

```blazar-sql
CREATE TABLE tableName(columnName TYPE, columnName TYPE) timestamp(columnName) PARTITION BY DAY;
```

```blazar-sql
SELECT cast(columnName AS INT) FROM tableName;
```

```blazar-sql
SELECT columnName, min(columnName)
FROM tableName
WHERE columnName > 3;
```

```blazar-sql
SELECT
columnName,
min(columnName),
max(columnName)
FROM table WHERE columnName > 3;
```

```blazar-sql
CREATE TABLE tableName AS(
...
);
```
