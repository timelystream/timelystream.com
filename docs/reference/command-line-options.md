---
title: Command-line options
description: Command-line options reference documentation.
---

Blazar may be started, stopped and passed configuration options from the command line.

## Options

The following sections describe the options that may be passed to Blazar when
starting the server from the command line.

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<Tabs defaultValue="nix" 
values={[ 
  { label: "Linux/FreeBSD", value: "nix" }, 
  { label: "macOS (Homebrew)", value: "macos" }, 
]}>

<!-- prettier-ignore-end -->

<TabItem value="nix">

```shell
./blazar.sh [start|stop|status] [-d dir] [-f] [-t tag]
```

</TabItem>
<TabItem value="macos">

```shell
blazar [start|stop|status] [-d dir] [-f] [-t tag]
```

</TabItem>
</Tabs>


### Start

`start` - starts Blazar as a service.

| Option | Description                                                                                                                                                                                                          |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-d`   | Expects a `dir` directory value which is a folder that will be used as Blazar's root directory. For more information and the default values, see the [default root](#default-root-directory) section below.         |
| `-t`   | Expects a `tag` string value which will be as a tag for the service. This option allows users to run several Blazar services and manage them separately. If this option is omitted, the default tag will be `blazar`. |
| `-f`   | Force re-deploying the Web Console. Without this option, the Web Console is cached and deployed only when missing.                                                                                                   |
| `-j`   | **Windows only!** This option allows to specify a path to `JAVA_HOME`.                                                                                                                                               |

:::info

When running multiple Blazar services, a tag must be used to disambiguate
between services for `start` and `stop` commands. There will be conflicting
ports and root directories if only the tag flag is specified when starting
multiple services. Each new service should have its own config file or should
be started with separate port and root directory options.

:::

:::info

When running Blazar as Windows service you can check status in both:
- Windows Event Viewer - look for events with "Blazar" source in Windows Logs | Application .
- service log file - `$dataDir\log\service-%Y-%m-%dT%H-%M-%S.txt` (default is `C:\Windows\System32\qdbroot\log\service-%Y-%m-%dT%H-%M-%S.txt` )

:::

<!-- prettier-ignore-start -->


<Tabs defaultValue="nix" 
values={[ 
  { label: "Linux/FreeBSD", value: "nix" }, 
  { label: "macOS (Homebrew)", value: "macos" }, 
]}>

<!-- prettier-ignore-end -->

<TabItem value="nix">

```shell
./blazar.sh start [-d dir] [-f] [-t tag]
```

</TabItem>
<TabItem value="macos">

```shell
blazar start [-d dir] [-f] [-t tag]
```

</TabItem>
</Tabs>


#### Default root directory

By default, Blazar's [root directory](/docs/concept/root-directory-structure)
will be the following:

<!-- prettier-ignore-start -->

<Tabs defaultValue="nix" values={[
  { label: "Linux/FreeBSD", value: "nix" },
  { label: "macOS (Homebrew)", value: "macos" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="nix">

```shell
$HOME/.blazar
```

</TabItem>
<TabItem value="macos">

```shell
/usr/local/var/blazar
```

</TabItem>
</Tabs>


### Stop

`stop` - stops a service.

| Option | Description                                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------------------------ |
| `-t`   | Expects a `tag` string value which to stop a service by tag. If this is omitted, the default tag will be `blazar` |

<!-- prettier-ignore-start -->

<Tabs defaultValue="nix" values={[
  { label: "Linux/FreeBSD", value: "nix" },
  { label: "macOS (Homebrew)", value: "macos" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="nix">

```shell
./blazar.sh stop
```

</TabItem>
<TabItem value="macos">

```shell
blazar stop
```

</TabItem>
</Tabs>


### Status

`status` - shows the status for a service.

| Option | Description                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------- |
| `-t`   | Expects a `tag` string value which to stop a service by tag. If this is omitted, the default will be `blazar` |

<!-- prettier-ignore-start -->

<Tabs defaultValue="nix" values={[
  { label: "Linux/FreeBSD", value: "nix" },
  { label: "macOS (Homebrew)", value: "macos" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="nix">

```shell
./blazar.sh status
```

</TabItem>
<TabItem value="macos">

```shell
blazar status
```

</TabItem>
</Tabs>
