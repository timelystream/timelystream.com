---
title: Get started with Blazar from the binaries
sidebar_label: Binaries
description:
  How to install and launch Blazar from the binaries which are available on the
  Get Blazar page.
---

import CodeBlock from "@theme/CodeBlock"
import InterpolateReleaseData from "../../src/components/InterpolateReleaseData"

This page describes how to install and use Blazar via binaries. Blazar comes
with a script `blazar.sh` for Linux/FreeBSD.

## Download

You can find the latest binaries on the [Get Blazar](/get-blazar) page. The
release notes are on our [GitHub release]({@githubUrl@}/releases) page.

## Prerequisites

### "Any (no JVM)" version

The file is named:

<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`blazar-${release.name}-bin.tar.gz`}
      </CodeBlock>
    )
  }}
/>

This binary is approximately 4MB.

#### Java 11

When using this binary you will need to have Java 11 installed locally. You can
check which version is already installed on your system with:

```shell
java -version
```

If you do not already have Java installed, download and install the package for
your operating system. We support:

- AdoptOpenJDK
- Amazon Corretto
- OpenJDK
- Oracle Java

Other Java distributions are most likely working but we are not running tests on
them.

#### `JAVA_HOME`

The environment variable `JAVA_HOME` needs to be set to your JDK's installation
folder.

### Your operating system version

The file is named:

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<Tabs defaultValue="linux" values={[
  { label: "Linux", value: "linux" },
  { label: "FreeBSD", value: "bsd" },
  { label: "Windows", value: "windows" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="linux">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`blazar-${release.name}-rt-linux-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


<TabItem value="bsd">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`blazar-${release.name}-rt-freebsd-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


<TabItem value="windows">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`blazar-${release.name}-rt-windows-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


</Tabs>


This binary weights around 20MB, this depends on your operating system.

When using this binary, you do not need anything on your machine, the Java
runtime is packaged directly with Blazar.

## Extract the tarball

<!-- prettier-ignore-start -->

<Tabs defaultValue="any" values={[
  { label: "Any (no JVM)", value: "any" },
  { label: "Linux", value: "linux" },
  { label: "FreeBSD", value: "bsd" },
  { label: "Windows", value: "windows" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="any">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`tar -xvf blazar-${release.name}-bin.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


<TabItem value="linux">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`tar -xvf blazar-${release.name}-rt-linux-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


<TabItem value="bsd">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`tar -xvf blazar-${release.name}-rt-freebsd-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


<TabItem value="windows">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`tar -xvf blazar-${release.name}-rt-windows-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


</Tabs>


## Next steps

Once you extracted the tarball, you are ready to use Blazar. Navigate to our
[command-line options](/docs/reference/command-line-options) page to learn more
about its usage.
