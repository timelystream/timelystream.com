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
        "get-started/docker",
        "get-started/binaries",
        "get-started/homebrew",
        "get-started/first-database",
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
      label: "Deployment",
      type: "category",
      items: [
        "deployment/aws-official-ami",
        "deployment/kubernetes",
        "deployment/google-cloud-platform",
        "deployment/digitalocean",
      ],
    },
    {
      label: "Operations",
      type: "category",
      items: [
        "operations/capacity-planning",
        "operations/data-retention",
        "operations/health-monitoring",
        "operations/backup",
      ],
    },
    {
      label: "Third-party Tools",
      type: "category",
      items: [
        "third-party-tools/prometheus",
        "third-party-tools/grafana",
        "third-party-tools/kafka",
        "third-party-tools/telegraf",
      ],
    },
    {
      label: "Concepts",
      type: "category",
      items: [
        "concept/storage-model",
        "concept/designated-timestamp",
        "concept/sql-extensions",
        "concept/jit-compiler",
        "concept/partitions",
        "concept/symbol",
        "concept/indexes",
        "concept/geohashes",
        "concept/root-directory-structure",
      ],
    },
    {
      label: "Reference",
      type: "category",
      items: [
        {
          type: "category",
          label: "API",
          items: [
            "reference/api/rest",
            "reference/api/postgres",
            {
              type: "category",
              label: "InfluxDB Line Protocol",
              items: [
                "reference/api/ilp/overview",
                "reference/api/ilp/columnset-types",
                "reference/api/ilp/tcp-receiver",
                "reference/api/ilp/udp-receiver",
                "reference/api/ilp/authenticate",
              ]
            },
            "reference/api/java-embedded",
          ],
        },
        "reference/command-line-options",
        {
          id: "reference/configuration",
          type: "doc",
        },
        "reference/sql/datatypes",
        {
          type: "category",
          label: "Functions",
          items: [
            "reference/function/aggregation",
            "reference/function/boolean",
            "reference/function/conditional",
            "reference/function/date-time",
            "reference/function/meta",
            "reference/function/numeric",
            "reference/function/random-value-generator",
            "reference/function/row-generator",
            "reference/function/spatial",
            "reference/function/text",
            "reference/function/timestamp-generator",
            "reference/function/timestamp",
          ],
        },
        {
          type: "category",
          label: "Operators",
          items: [
            "reference/operators/bitwise",
            "reference/operators/spatial",
          ],
        },
        {
          type: "category",
          label: "SQL",
          items: [
            "concept/sql-execution-order",
            {
              type: "category",
              label: "ALTER TABLE",
              items: [
                "reference/sql/alter-table-add-column",
                "reference/sql/alter-table-alter-column-add-index",
                "reference/sql/alter-table-rename-column",
                "reference/sql/alter-table-drop-column",
                "reference/sql/alter-table-attach-partition",
                "reference/sql/alter-table-drop-partition",
                "reference/sql/alter-table-set-param",
              ],
            },
            "reference/sql/backup",
            "reference/sql/case",
            "reference/sql/cast",
            "reference/sql/copy",
            "reference/sql/create-table",
            "reference/sql/distinct",
            "reference/sql/except-intersect",
            "reference/sql/fill",
            "reference/sql/drop",
            "reference/sql/group-by",
            "reference/sql/insert",
            "reference/sql/join",
            "reference/sql/latest-on",
            "reference/sql/limit",
            "reference/sql/order-by",
            "reference/sql/rename",
            "reference/sql/sample-by",
            "reference/sql/select",
            "reference/sql/show",
            "reference/sql/snapshot",
            "reference/sql/truncate",
            "reference/sql/union",
            "reference/sql/vacuum-partitions",
            "reference/sql/where",
            "reference/sql/with",
          ],
        }
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
            "sql/statements/alter_table",
            "sql/statements/copy",
            "sql/statements/create_macro",
            "sql/statements/create_schema",
            "sql/statements/create_sequence",
            "sql/statements/create_table",
            "sql/statements/create_view",
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
      label: "Develop",
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
