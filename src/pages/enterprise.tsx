import clsx from "clsx"
import React from "react"

// import Chevron from "@theme/Chevron"
import Layout from "../theme/Layout"
import Subscribe from "../components/Subscribe"
// import useResizeObserver from "@theme/useResizeObserver"

// import clCss from "../css/enterprise/cloud.module.css"
import caCss from "../css/enterprise/card.module.css"
import ilCss from "../css/enterprise/illustration.module.css"
import peCss from "../css/enterprise/performance.module.css"
import prCss from "../css/property.module.css"
import seCss from "../css/section.module.css"
import style from "../css/enterprise/style.module.css"

const Enterprise = () => {
  const title = "Blazar Enterprise"
  const description =
    "The real-time streaming analytics database for organizations on premise."

  return (
    <Layout canonical="/enterprise" description={description} title={title}>
      <section className={seCss["section--inner"]}>
        <div className={seCss.section__header}>
          <h1
            className={clsx(
              seCss.section__title,
              seCss["section__title--accent"],
            )}
          >
            Blazar Enterprise
          </h1>

          <p
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--accent"],
              "text--center",
            )}
          >
            The real-time analytics database for organizations on premise.
          </p>

          <Subscribe
            placeholder="Work Email"
            submitButtonText="Contact Us"
            provider="enterprise"
            className={style.subscribe}
          />

          <img
            alt="Artistic view of the console with sub-queries"
            className={ilCss.illustration}
            height={394}
            src="/img/pages/enterprise/banner.svg"
            width={900}
          />
        </div>
      </section>

      <section className={seCss["section--flex-wrap"]}>
        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Chat icon"
              height={52}
              src="/img/pages/enterprise/chat.svg"
              width={62}
            />
          </div>
          <h2 className={caCss.card__title}>Support</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Enterprise support: 24x7 technical support from high-quality
              engineers via phone, chat, and email
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              On demand training
            </li>
          </ul>
        </div>

        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Rocket icon"
              height={56}
              src="/img/pages/enterprise/rocket.svg"
              width={56}
            />
          </div>
          <h2 className={caCss.card__title}>Unlimited scale</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
              High throughput replication
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Horizontal scalability (high-performance clusters, sharding)
            </li>
          </ul>
        </div>

        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Cog icon"
              height={48}
              src="/img/pages/enterprise/cog.svg"
              width={45}
            />
          </div>
          <h2 className={caCss.card__title}>Management</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Automation
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Database monitoring
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Analytics and visualization
            </li>
          </ul>
        </div>

        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Lock icon"
              height={58}
              src="/img/pages/enterprise/lock.svg"
              width={42}
            />
          </div>
          <h2 className={caCss.card__title}>Security and authentication</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Advanced security
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Access control
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Authentication
            </li>
          </ul>
        </div>
      </section>

      <section className={seCss["section--inner"]}>
        <div className={peCss.performance__left}>
          <h2 className={peCss.performance__title}>Superior performance</h2>
          <p className={peCss.performance__item}>
            <span className={peCss.performance__bullet} />
            Fast ingestion - O(1) complexity, heavy parallelization, out of
            order inserts
          </p>
          <p
            className={clsx(
              peCss.performance__item,
              peCss["performance__item--important"],
            )}
          >
            Downsize your instance, reduce hardware costs
          </p>
          <p className={peCss.performance__item}>
            <span className={peCss.performance__bullet} />
            SIMD accelerated SQL queries for lightning fast data retrieval
          </p>
          <p
            className={clsx(
              peCss.performance__item,
              peCss["performance__item--important"],
            )}
          >
            Real-time analytics, correlate events over time
          </p>
        </div>
        <div className={peCss.performance__right}>
          <img
            alt="Charts showing the performance improvments when using Blazar"
            height={411}
            src="/img/pages/enterprise/performance.svg"
            width={661}
          />
        </div>
      </section>
    </Layout>
  )
}

export default Enterprise
