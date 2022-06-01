import clsx from "clsx"
import { differenceInDays, format, formatDistanceToNowStrict } from "date-fns"
import { usePluginData } from "@docusaurus/useGlobalData"
import React, { ReactNode, useEffect, useState } from "react"

import Button from "@theme/Button"
import CodeBlock from "@theme/CodeBlock"
import Layout from "../theme/Layout"

import biCss from "../css/get-blazar/binary.module.css"
import chCss from "../css/get-blazar/changelog.module.css"
import ctCss from "../css/get-blazar/cta.module.css"
import heCss from "../css/get-blazar/help.module.css"
import seCss from "../css/section.module.css"
import { getAssets, getOs, Os, Release } from "../utils"

import customFields from "../config/customFields"

type BinaryProps = Readonly<{
  architecture: boolean
  basis: string
  children?: ReactNode
  detailsGrow: number
  grow: number
  href?: string
  logo: ReactNode
  rt: boolean
  size?: string
  title: string
}>

const Binary = ({
  architecture,
  basis,
  children,
  detailsGrow,
  grow,
  href,
  logo,
  rt,
  size,
  title,
}: BinaryProps) => {
  const hasDetails = Boolean(architecture || rt || size)

  return (
    <section className={clsx(biCss.binary)}>
      <div className={biCss.binary__expand} style={{ flexBasis: basis }} />

      {logo}

      <h3
        className={clsx(biCss.binary__title, {
          [biCss["binary__title--grow"]]: !hasDetails,
        })}
        style={{ flexGrow: grow }}
      >
        {title}
      </h3>

      {hasDetails && (
        <p className={biCss.binary__details} style={{ flexGrow: detailsGrow }}>
          {architecture && (
            <span className={biCss.binary__architecture}>64-bit</span>
          )}

          <span className={biCss.binary__size}>
            {rt && " rt -"}
            {size != null && ` ${size}`}
          </span>
        </p>
      )}

      {href != null && (
        <Button
          className={biCss.binary__download}
          href={href}
          newTab={false}
          variant="tertiary"
        >
          Download
        </Button>
      )}

      {children}
    </section>
  )
}

Binary.defaultProps = {
  architecture: false,
  basis: "auto",
  detailsGrow: 1,
  grow: 0,
  rt: false,
}

const GetQuestdbPage = () => {
  const title = "Download Blazar"
  const description =
    "Download Blazar, an open real-time streaming SQL database for fast ingestion and queries"
  const { release } = usePluginData<{ release: Release }>(
    "fetch-latest-release",
  )
  const [os, setOs] = useState<Os | undefined>()
  const [releaseDate, setReleaseDate] = useState(
    format(new Date(release.published_at), "MMMM M, yyyy"),
  )
  const assets = getAssets(release)

  useEffect(() => {
    const isClient = typeof window !== "undefined"

    if (!isClient) {
      return
    }

    if (differenceInDays(new Date(), new Date(release.published_at)) < 31) {
      setReleaseDate(
        `${formatDistanceToNowStrict(new Date(release.published_at))} ago`,
      )
    }
    setOs(getOs())
  }, [release.published_at])

  const perOs = {
    linux: (
      <Binary
        architecture
        href={assets.linux.href}
        logo={
          <img
            alt="Linux Logo"
            className={biCss.binary__logo}
            height={49}
            src="/img/pages/getBlazar/linux.svg"
            width={42}
          />
        }
        rt
        size={assets.linux.size}
        title="Linux"
      >
        <p className={biCss.binary__docs}>
          <a href="/docs/get-started/binaries#your-operating-system-version">
            Docs
          </a>
        </p>
      </Binary>
    ),
    macos: (
      <Binary
        basis="15px"
        grow={1}
        logo={
          <img
            alt="macOS Logo"
            className={biCss.binary__logo}
            height={49}
            src="/img/pages/getBlazar/macos.svg"
            width={41}
          />
        }
        title="macOS (via Homebrew)"
      >
        <div />

        <CodeBlock className="language-shell">
          {`brew update
brew install blazar`}
        </CodeBlock>

        <p className={biCss.binary__docs}>
          <a href="/docs/get-started/homebrew">Docs</a>
        </p>
      </Binary>
    ),
    windows: (
      <Binary
        architecture
        href={assets.windows.href}
        logo={
          <img
            alt="Windows Logo"
            className={biCss.binary__logo}
            height={49}
            src="/img/pages/getBlazar/windows.svg"
            width={49}
          />
        }
        rt
        size={assets.windows.size}
        title="Windows"
      >
        <p className={biCss.binary__docs}>
          <a href="/docs/get-started/binaries#your-operating-system-version">
            Docs
          </a>
        </p>
      </Binary>
    ),
  }

  useEffect(() => {
    const isClient = typeof window !== "undefined"

    if (!isClient) {
      return
    }

    setOs(getOs())
  }, [])

  return (
    <Layout canonical="/get-blazar" description={description} title={title}>
      <section
        className={clsx(seCss["section--inner"], seCss["section--accent"])}
      >
        <div className={seCss.section__header}>
          <h1
            className={clsx(
              seCss.section__title,
              seCss["section__title--accent"],
            )}
          >
            Download Blazar
          </h1>

          <p
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--accent"],
              "text--center",
            )}
          >
            You can find below download links for the latest version of Blazar (
            {release.name}). Once your download is finished, you can check our
            documentation for <a href="/docs/get-started/docker/">Docker</a>,
            the <a href="/docs/get-started/binaries/">binaries</a> or{" "}
            <a href="/docs/get-started/homebrew/">Homebrew</a> to get started.
          </p>

          <div className={ctCss.cta}>
            <p
              className={clsx(ctCss.cta__details, {
                [ctCss["cta__details--download"]]: os !== "macos",
              })}
            >
              Latest Release:&nbsp;
              <span className={ctCss.cta__version}>{release.name}</span>
              &nbsp;({releaseDate})
            </p>
            {os != null && os !== "macos" && assets[os] && (
              <Button href={assets[os].href} newTab={false}>
                {os}&nbsp;Download
              </Button>
            )}
          </div>

          <div className={chCss.changelog}>
            <a
              className={chCss.changelog__link}
              href={release.html_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              View the changelog
            </a>
            <a
              className={chCss.changelog__link}
              href={`${customFields.githubUrl}/tags`}
              rel="noopener noreferrer"
              target="_blank"
            >
              View previous releases
            </a>
          </div>
        </div>
      </section>

      <div className={seCss["section--flex-wrap"]}>
        <Binary
          basis="40px"
          grow={2.6}
          logo={
            <img
              alt="Docker logo"
              className={biCss.binary__logo}
              height={49}
              src="/img/pages/getBlazar/docker.svg"
              width={69}
            />
          }
          title="Docker"
        >
          <CodeBlock className="language-shell">
            docker run -p 9000:9000 timelystream/blazar
          </CodeBlock>
          <p className={biCss.binary__docs}>
            <a href="/docs/get-started/docker">Docs</a>
          </p>
        </Binary>
        {os != null ? (
          <>
            {perOs[os]}
            {os !== "linux" && perOs.linux}
            {os !== "macos" && perOs.macos}
          </>
        ) : (
          <>
            {perOs.linux}
            {perOs.macos}
          </>
        )}
      </div>

      <div className={heCss.help}>
        <img
          alt="SQL statement in a code editor with an artistic view of the query result shown as a chart and a table"
          className={heCss.help__illustration}
          height={468}
          src="/img/pages/getBlazar/query.svg"
          width={500}
        />

        <div className={heCss.help__text}>
          <h2 className={heCss.help__title}>How does it work</h2>
          <p>
            Blazaris distributed as a single binary. You can download either:
          </p>
          <ul className={heCss.help__list}>
            <li className={heCss.help__bullet}>
              The &quot;rt&quot; version, which does not require any
              dependencies to be installed to run. (~ {assets.linux.size})
            </li>
          </ul>
          <p>
            To find out more about how to use the binaries, please check
            the&nbsp;
            <a href="/docs/get-started/binaries/">dedicated page</a> in our
            documentation.
          </p>
          <p>
            Check out the{" "}
            <a
              href={release.html_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              v{release.name} CHANGELOG
            </a>{" "}
            for information on the latest release.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default GetQuestdbPage
