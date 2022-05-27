import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Highlight from "../components/Highlight"
import React, { useCallback, useEffect, useState } from "react"
import Customers from "../components/Customers"
import customFields from "../config/customFields"

import Button from "@theme/Button"
import Chevron from "@theme/Chevron"
import Layout from "../theme/Layout"
import useWindowWidth from "@theme/useWindowWidth"
import SvgImage from "../components/SvgImage"
import ActionCard from "../components/ActionCard"
import Subscribe from "../components/Subscribe"

import doCss from "../css/index/docker.module.css"
import feCss from "../css/index/feature.module.css"
import flCss from "../css/index/flashy.module.css"
import inCss from "../css/index/integration.module.css"
import juCss from "../css/index/jumbotron.module.css"
import meCss from "../css/index/menu.module.css"
import shCss from "../css/index/showcase.module.css"
import usCss from "../css/index/usp.module.css"
import footerCss from "../css/index/footer.module.css"
import prCss from "../css/property.module.css"
import seCss from "../css/section.module.css"

import QuestDBLogo from "../assets/img/questdb.svg"
import PgLogo from "../assets/img/pages/index/integrations/pg.svg"
import GrafanaLogo from "../assets/img/pages/index/integrations/grafana.svg"
import KafkaLogo from "../assets/img/pages/index/integrations/kafka.svg"
import PythonLogo from "../assets/img/pages/index/integrations/python.svg"
import PandasLogo from "../assets/img/pages/index/integrations/pandas.svg"
import TableauLogo from "../assets/img/pages/index/integrations/tableau.svg"
import DockerLogo from "../assets/img/pages/index/docker.svg"
import FossIcon from "../assets/img/pages/index/foss.svg"
import SubscribeIcon from "../assets/img/pages/index/subscribeIcon.svg"
import SearchTimeIcon from "../assets/img/pages/index/searchTime.svg"
import SliceTimeIcon from "../assets/img/pages/index/sliceTime.svg"
import NavigateTimeIcon from "../assets/img/pages/index/navigateTime.svg"
import MergeTimeIcon from "../assets/img/pages/index/mergeTime.svg"

const FeatureTabs = () => {
  const [opened, setOpened] = useState<"digital" | "realtime" | "integration">(
    "digital",
  )
  const handleClickIs = useCallback(() => {
    setOpened("digital")
  }, [])
  const handleClickGoodFor = useCallback(() => {
    setOpened("realtime")
  }, [])
  const handleClickIsNot = useCallback(() => {
    setOpened("integration")
  }, [])

  return (
    <section className={clsx(seCss.section, seCss["section--odd"])}>
      <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
        <h2
          className={clsx(
            seCss.section__title,
            seCss["section__title--wide"],
            "text--center",
          )}
        >
          Why Blazar?
        </h2>

        <div
          className={clsx(
            seCss.section__footer,
            seCss["section__footer--feature-tabs"],
          )}
        >
          <div className={meCss.menu__list}>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIs}
              size="small"
              variant={opened === "digital" ? "primary" : "tertiary"}
            >
              Simplicity
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickGoodFor}
              size="small"
              variant={opened === "realtime" ? "primary" : "tertiary"}
            >
              Performance
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIsNot}
              size="small"
              variant={opened === "integration" ? "primary" : "tertiary"}
            >
              Open Source
            </Button>
          </div>

          <div className={meCss.menu__content}>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "digital",
              })}
            >
              <p className={prCss.property}>Query with SQL</p>
              <p className={prCss.property}>Interactive web console</p>
              <p className={prCss.property}>Deploy via Docker or binaries</p>
              <p className={prCss.property}>Postgres protocols</p>
              <p className={prCss.property}>Cloud-native or on-premises</p>
            </div>

            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "realtime",
              })}
            >
              <p className={prCss.property}>Real-time streaming</p>
              <p className={prCss.property}>Optimized SQL queries</p>
              <p className={prCss.property}>High-throughput ingestion</p>
              <p className={prCss.property}>Lower infrastructure costs</p>
              <p className={prCss.property}>Less operational complexity</p>
            </div>

            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "integration",
              })}
            >
              <p className={prCss.property}>Apache License 2.0</p>
              <p className={prCss.property}>Transparent development</p>
              <p className={prCss.property}>Thriving developer community</p>
              <p className={prCss.property}>Popular open source integrations</p>
              <p className={prCss.property}>Extensive open source experience</p>
              <p className={prCss.property}>
                Multiple Apache foundation members
              </p>
            </div>

            <Button
              className={meCss.menu__cta}
              to="https://github.com/questdb/questdb#try-questdb"
            >
              Get Started &gt;
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const integrations: Array<{
  label: string
  image: React.ElementType
  title: string
}> = [
  { image: PgLogo, title: "Postgres logo", label: "Postgres" },
  { image: GrafanaLogo, title: "Grafana logo", label: "Grafana" },
  { image: KafkaLogo, title: "Kafka logo", label: "Kafka" },
  { image: PythonLogo, title: "Python logo", label: "Python" },
  { image: PandasLogo, title: "Pandas logo", label: "Pandas" },
  { image: TableauLogo, title: "Tableau logo", label: "Tableau" },
]

const Integration = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--inner"],
      seCss["section--center"],
    )}
  >
    <h2
      className={clsx(
        seCss.section__title,
        seCss["section__title--wide"],
        "text--center",
      )}
    >
      Integration with the tools you love
    </h2>

    <div className={inCss.integration}>
      {integrations.map(({ label, image, title }, index: number) => {
        const Image = image
        return (
          <div key={index} className={inCss.integration__item}>
            <SvgImage image={<Image />} title={title} />
            {label}
          </div>
        )
      })}
    </div>
  </section>
)

const Top = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <section
      className={clsx(seCss["section--inner"], seCss["section--slim--accent"])}
    >
      <div className={juCss.jumbotron}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
          )}
        >
          Build fast and accurate data products
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
          )}
        >
          {siteConfig.tagline}
        </p>

        <div className={juCss.jumbotron__cta}>
          <Button className={juCss.jumbotron__link} href={customFields.demoUrl}>
            Get Started
          </Button>
          <Button
            className={clsx(
              juCss.jumbotron__link,
              juCss["jumbotron__cta--github"],
            )}
            href="/cloud"
            icon={
              <SvgImage
                image={<QuestDBLogo width="32" height="32" />}
                title="Blazar Demo"
              />
            }
            variant="secondary"
          >
            Try a demo
          </Button>
        </div>
        <p className={juCss.jumbotron__description}>
          Understand Blazar in 5 minutes by playing!
        </p>
      </div>

      <div className={doCss.docker}>
        <pre className={doCss.docker__inner}>
          <code className={doCss.docker__code}>
            {`docker pull timelystream/blazar
docker run -p 9000:9000 timelystream/blazar`}
          </code>
          <a
            href={customFields.dockerUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SvgImage
              image={<DockerLogo className={doCss.docker__icon} />}
              title="Docker"
            />
          </a>
        </pre>
      </div>
    </section>
  )
}

const Usp = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={seCss["section--inner"]}>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <img
            alt="Speedometer"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/rawPower.svg"
            width={176}
          />

          <h2 className={usCss.usp__title}>Built for performance</h2>

          <p className={usCss.usp__description}>C++ high performance</p>
          <p className={usCss.usp__description}>Column-based storage</p>
          <p className={usCss.usp__description}>ART-Tree memory index</p>
          <p className={usCss.usp__description}>SIMD-optimized analytics</p>
          <p className={usCss.usp__description}>Vectorized query execution</p>
        </div>
      </div>

      <div className={clsx(usCss.usp, usCss["usp--wide"])}>
        <div className={usCss.usp__inner}>
          <img
            alt="A code editor with a chart that shows the result of the query"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/easyToUse.svg"
            width={205}
          />

          <h2 className={usCss.usp__title}>Optimized for real-time</h2>

          <p className={usCss.usp__description}>Low latency</p>
          <p className={usCss.usp__description}>High throughput</p>
          <p className={usCss.usp__description}>Strong consistency</p>
          <p className={usCss.usp__description}>Support for transactions</p>
          <p className={usCss.usp__description}>Incremental checkpointing</p>
        </div>
      </div>

      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <img
            alt="A code editor containing a SQL statement"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/featureRich.svg"
            width={176}
          />

          <h2 className={usCss.usp__title}>Implemented with SQL</h2>

          <p className={usCss.usp__description}>Postgres compatibility</p>
          <p className={usCss.usp__description}>Built-in SQL optimizer</p>
          <p className={usCss.usp__description}>Aggregations and Join</p>
          <p className={usCss.usp__description}>Streaming source and sink</p>
          <p className={usCss.usp__description}>
            Incremental materialized view
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Cards = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
      <h3
        className={clsx(
          seCss.section__title,
          feCss["section__title--wide"],
          "text--center",
        )}
      >
        Why real-time streaming?
      </h3>

      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--feature-cards"],
        )}
      >
        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>
            DevOps, monitoring and observability
          </h3>
          <p className={feCss.feature__content}>
            Analyze CPU, memory and storage metrics from your infrastructure and
            get real-time visibility into your entire stack.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Financial market data</h3>
          <p className={feCss.feature__content}>
            Analyze market tick data to identify historical trends, find
            correlations and analyze trades in real-time. Build aggregated views
            across multiple venues and efficiently compute live order books.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Network traffic analysis</h3>
          <p className={feCss.feature__content}>
            Collects Flow or other network traffic metadata to run analytics and
            detect anomalies in real-time.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Connected devices</h3>
          <p className={feCss.feature__content}>
            Capture, store and respond to sensor data and telemetry at any
            resolution in industrial or machine-to-machine applications.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Application metrics</h3>
          <p className={feCss.feature__content}>
            Empower application developers and UX teams to track and visualize
            user behavior data, API calls, data latency, and other application
            events in real-time.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>
            Machine learning with time-series data
          </h3>
          <p className={feCss.feature__content}>
            Use Blazar with popular Python frameworks and tools for leveraging
            anomaly detection algorithms, machine learning libraries,
            statistical analysis with Pandas, or Jupyter notebooks.
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Console = () => {
  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--inner"],
        seCss["section--center"],
      )}
    >
      <h2
        className={clsx(
          seCss.section__title,
          seCss["section__title--wide"],
          "text--center",
        )}
      >
        Interactive Console
      </h2>
      <p
        className={clsx(
          seCss.section__subtitle,
          seCss["section__subtitle--narrow"],
          "text--center",
        )}
      >
        Interactive console to import data (drag and drop) and start querying
        right away. Check our{" "}
        <a href="/docs/develop/web-console">Web Console documentation</a> to get
        started.
      </p>

      <img
        alt="Artistic view of Blazar's Web Console split in 3 components: the navigation tree, the SQL code editor and data displayed as a chart"
        className={seCss.section__illustration}
        height={467}
        src="/img/pages/index/console.svg"
        width={600}
      />

      <div className={footerCss.cards}>
        <ActionCard
          icon={<FossIcon />}
          title="Join our developer community"
          description="Blazar is open source. Follow us on Twitter, star our GitHub repo, and join our developer community on Slack!"
        >
          <a
            className={flCss.flashy__link}
            href={customFields.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to GitHub&nbsp;&nbsp;&gt;
          </a>
          <a className={flCss.flashy__link} href={customFields.slackUrl}>
            Join Slack&nbsp;&nbsp;&gt;
          </a>
        </ActionCard>

        <ActionCard
          title="Subscribe to our newsletter"
          description="Stay up to date with all things Blazar"
          icon={<SubscribeIcon />}
          skin="primary"
        >
          <Subscribe
            placeholder="Email address"
            submitButtonVariant="tertiary"
            provider="newsletter"
          />
        </ActionCard>
      </div>
    </section>
  )
}

const S = [3, 1, 6, 10]
const M = [3, 0, 4, 8]
const L = [4, 0, 4, 8]

const getTopByIndex = (m: number[], index: 1 | 2 | 3 | 4): number => {
  const scale = {
    1: 25 * (m[0] ?? 0),
    2: -25 * (m[1] ?? 0),
    3: -25 * (m[2] ?? 0),
    4: -25 * (m[3] ?? 0),
  }

  return scale[index] ?? 0
}

const sourceQuery = `CREATE SOURCE csv_source (foo, bar, baz)
FROM KAFKA BROKER 'localhost:9092' TOPIC 'data'
FORMAT CSV WITH 3 COLUMNS;`

const matviewQuery = `CREATE MATERIALIZED VIEW mv_source_by_baz
AS
  SELECT sum(csv.foo) AS foo_sum, csv.bar
  FROM csv_source AS csv
  GROUP BY csv.baz;`

const sinkQuery = `CREATE SINK quotes_sink
FROM mv_source_by_baz
INTO KAFKA BROKER 'localhost' TOPIC 'quotes-sink'
FORMAT JSON;`

const ansiQuery = `SELECT l_returnflag, SUM(l_quantity) AS sum_qty, 
  COUNT(*) AS count_order
FROM lineitem
WHERE l_shipdate <= date'1998-12-01' - interval '90' day
GROUP BY l_returnflag, l_linestatus
ORDER BY l_returnflag, l_linestatus;`

type Index = 1 | 2 | 3 | 4

const QueryScroller = () => {
  const [top, setTop] = useState(S)
  const [index, setIndex] = useState<Index>(2)
  const windowWidth = useWindowWidth()
  const handleClick1 = useCallback(() => {
    setIndex(1)
  }, [])
  const handleClick2 = useCallback(() => {
    setIndex(2)
  }, [])
  const handleClick3 = useCallback(() => {
    setIndex(3)
  }, [])
  const handleClick4 = useCallback(() => {
    setIndex(4)
  }, [])
  const handleUpClick = useCallback(() => {
    setIndex(Math.max(index - 1, 1) as Index)
  }, [index])
  const handleDownClick = useCallback(() => {
    setIndex(Math.min(index + 1, 4) as Index)
  }, [index])

  useEffect(() => {
    if (windowWidth != null && windowWidth < 622) {
      setTop(S)
      return
    }

    if (windowWidth != null && windowWidth < 800) {
      setTop(M)
      return
    }

    setTop(L)
  }, [windowWidth])

  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--inner"],
        seCss["section--center"],
        seCss["section--showcase"],
      )}
    >
      <h2
        className={clsx(
          seCss.section__title,
          seCss["section__title--wide"],
          "text--center",
        )}
      >
        Augmented SQL for real-time
      </h2>

      <p
        className={clsx(
          seCss.section__subtitle,
          seCss["section__subtitle--narrow"],
          "text--center",
        )}
      >
        Blazar enhances ANSI SQL by adding timestamp extensions to data to
        manipulate real-time streaming data
      </p>

      <div className={shCss.showcase}>
        <div className={shCss.showcase__inner}>
          <div
            className={clsx(shCss.showcase__chevron)}
            onClick={handleUpClick}
            style={{ visibility: index === 1 ? "hidden" : "visible" }}
          >
            <Chevron />
          </div>
          <div className={clsx(shCss.showcase__left)}>
            <div
              className={clsx(
                shCss.showcase__offset,
                shCss[`showcase__${index}`],
              )}
              style={{ top: getTopByIndex(top, index) }}
            >
              <Highlight code={sourceQuery} />
              <Highlight code={`-- Search time\n${sourceQuery}`} />
              <Highlight code={matviewQuery} />
              <Highlight code={`-- Slice time\n${matviewQuery}`} />
              <Highlight code={sinkQuery} />
              <Highlight code={`-- Navigate time\n${sinkQuery}`} />
              <Highlight code={ansiQuery} />
              <Highlight code={`-- Merge time\n${ansiQuery}`} />
            </div>
          </div>
          <div
            className={clsx(
              shCss.showcase__chevron,
              shCss["showcase__chevron--bottom"],
            )}
            onClick={handleDownClick}
            style={{ visibility: index === 4 ? "hidden" : "visible" }}
          >
            <Chevron />
          </div>
          <div className={shCss.showcase__right}>
            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 1,
              })}
              onClick={handleClick1}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<SliceTimeIcon className={shCss.showcase__icon} />}
                  title="Magnifying glass icon"
                />
                Source
              </h3>
              <p className={shCss.showcase__description}>
                Read data from message queues, files, sockets.
              </p>
            </div>

            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 2,
              })}
              onClick={handleClick2}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<MergeTimeIcon className={shCss.showcase__icon} />}
                  title="Knife icon"
                />
                Materialized view
              </h3>
              <p className={shCss.showcase__description}>
                Retrieve incrementally updated results of a ”SELECT” query.
              </p>
            </div>

            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 3,
              })}
              onClick={handleClick3}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<NavigateTimeIcon className={shCss.showcase__icon} />}
                  title="Indication arrow icon"
                />
                Sink
              </h3>
              <p className={shCss.showcase__description}>
                Sends data from Materialize to an external sink.
              </p>
            </div>
            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 4,
              })}
              onClick={handleClick4}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<SearchTimeIcon className={shCss.showcase__icon} />}
                  title="Two overlapping squares"
                />
                ANSI SQL
              </h3>
              <p className={shCss.showcase__description}>
                Support ”TPCH” and ”TPCDS” benchmarking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => (
  <Layout
    canonical=""
    description={customFields.description}
    title="Blazar｜ Real-time streaming data, fast & accurate"
    replaceTitle
  >
    <Top />
    <Customers nbElements={6} />
    <Usp />
    <Integration />
    <FeatureTabs />
    <QueryScroller />
    <Cards />
    <Console />
  </Layout>
)

export default Home
