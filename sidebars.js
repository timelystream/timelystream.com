let guidelines

if (process.env.NODE_ENV === "development") {
  guidelines = {
    label: "Guidelines (DEV ONLY)",
    type: "category",
    items: [
      {
        type: "category",
        label: "Templates",
        items: [
          "__guidelines/template/guide",
          "__guidelines/template/function",
          "__guidelines/template/sql",
        ],
      },
      "__guidelines/naming-convention",
      "__guidelines/content-hierarchy",
      "__guidelines/lexicon",
      "__guidelines/markdown",
      "__guidelines/sql-code-blocks",
      "__guidelines/influences",
    ],
  }
}

module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Get Started",
      type: "category",
      items: [
        "get-started/first-database",
        "get-started/docker",
        "get-started/binaries",
      ],
    },
    {
      label: "Guides",
      type: "category",
      items: [
        "guides/index",
        {
          label: "Import",
          type: "category",
          items: [
            "guides/import/csv-export",
            "guides/import/csv-import",
            "guides/import/parquet-export",
            "guides/import/parquet-import",
            "guides/import/query-parquet",
            "guides/import/http-import",
            "guides/import/s3-import",
          ],
        },
        {
          label: "Meta",
          type: "category",
          items: [
            "guides/meta/describe",
            "guides/meta/explain-analyze",
            "guides/meta/explain",
            "guides/meta/list-tables",
            "guides/meta/summarize",
          ],
        },
        {
          label: "Python",
          type: "category",
          items: [
            "guides/python/execute-sql",
            "guides/python/export-arrow",
            "guides/python/export-pandas",
            "guides/python/ibis",
            "guides/python/import-arrow",
            "guides/python/import-pandas",
            "guides/python/install",
            "guides/python/jupyter",
            "guides/python/sql-on-arrow",
            "guides/python/sql-on-pandas",
          ],
        },
      ],
    },
    {
      label: "Data Import",
      type: "category",
      items: [
        "data-import/overview",
        "data-import/appender",
        "data-import/csv",
        "data-import/insert",
        "data-import/parquet",
      ],
    },
    {
      label: "sql",
      type: "category",
      items: [
        "sql/introduction",
        {
          type: "category",
          label: "Statements",
          items: [
            "sql/statements/alter-table",
            "sql/statements/copy",
            "sql/statements/create-macro",
            "sql/statements/create-schema",
            "sql/statements/create-sequence",
            "sql/statements/create-table",
            "sql/statements/create-view",
            "sql/statements/delete",
            "sql/statements/drop",
            "sql/statements/export",
            "sql/statements/insert",
            "sql/statements/select",
            "sql/statements/update",
          ]
        },
        {
          type: "category",
          label: "Query Syntax",
          items: [
            "sql/query-syntax/filter",
            "sql/query-syntax/from",
            "sql/query-syntax/groupby",
            "sql/query-syntax/grouping-sets",
            "sql/query-syntax/having",
            "sql/query-syntax/limit",
            "sql/query-syntax/orderby",
            "sql/query-syntax/qualify",
            "sql/query-syntax/sample",
            "sql/query-syntax/select",
            "sql/query-syntax/unnest",
            "sql/query-syntax/values",
            "sql/query-syntax/where",
            "sql/query-syntax/window",
            "sql/query-syntax/with",
          ]
        },
        {
          type: "category",
          label: "Data Type",
          items: [
            "sql/data-types/blob",
            "sql/data-types/boolean",
            "sql/data-types/date",
            "sql/data-types/enum",
            "sql/data-types/interval",
            "sql/data-types/list",
            "sql/data-types/map",
            "sql/data-types/numeric",
            "sql/data-types/struct",
            "sql/data-types/text",
            "sql/data-types/timestamp",
            "sql/data-types/timezones",
          ]
        },
        {
          type: "category",
          label: "Expressions",
          items: [
            "sql/expressions/case",
            "sql/expressions/cast",
            "sql/expressions/collations",
            "sql/expressions/comparison-operators",
            "sql/expressions/logical-operators",
            "sql/expressions/subqueries",
          ]
        },
        {
          type: "category",
          label: "Source",
          items: [
            "sql/source/overview",
            "sql/source/source-kafka",
          ]
        },
        "sql/materialized-views",
        {
          type: "category",
          label: "Functions",
          items: [
            "sql/functions/blob",
            "sql/functions/char",
            "sql/functions/date",
            "sql/functions/dateformat",
            "sql/functions/datepart",
            "sql/functions/interval",
            "sql/functions/nested",
            "sql/functions/numeric",
            "sql/functions/pattern-matching",
            "sql/functions/time",
            "sql/functions/timestamp",
            "sql/functions/utility",
          ]
        },
        "sql/aggregates",
        "sql/configuration",
        "sql/indexes",
        "sql/information-schema",
        "sql/introduction",
        "sql/pragmas",
        "sql/samples",
        "sql/window-functions",
      ],
    },
    {
      label: "Reference",
      type: "category",
      items: [
        {
          label: "api",
          type: "category",
          items: [
            "reference/api/postgres",
            "reference/api/rest",
          ],
        },
        "reference/command-line-options",
        "reference/configuration",
      ],
    },
    {
      label: "Extensions",
      type: "category",
      items: [
        "extensions/overview",
        "extensions/full-text-search",
        "extensions/json",
      ],
    },
    {
      label: "Deployment",
      type: "category",
      items: [
        "develop/testing",
        "develop/profiling",
      ],
    },
    {
      label: "Troubleshooting",
      type: "category",
      items: [
        "troubleshooting/faq",
        "troubleshooting/os-error-codes"
      ],
    },
    {
      label: "Tutorials",
      type: 'link',
      href: '/tutorial',
    },
    {
      id: "why-blazar",
      type: "doc",
    },
  ].filter(Boolean),
}
