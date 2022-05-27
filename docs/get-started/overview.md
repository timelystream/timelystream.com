---
title: Get started with Blazar via Homebrew (macOS)
sidebar_label: Overview
description:
  A short guide for getting started with installing and running Blazar via
  Homebrew on macOS.
---

Each software release of Blazar is distributed via the
[Homebrew](https://brew.sh/) package manager.

## Install Homebrew

Users who already have Homebrew installed may skip this section and proceed to
[Install Blazar](#install-blazar). Otherwise, Homebrew can be installed by
running the official
[installation script](https://github.com/Homebrew/install/blob/master/install.sh)
via bash:

```shell
/bin/bash -c \
"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Install Blazar

To install Blazar via Homebrew, run the following command:

```shell
brew install blazar
```

On macOS, the root directory of Blazar including
[server configuration](/docs/reference/configuration) files are located in the
following directory:

```bash
/usr/local/var/blazar
├── conf
├── db
├── log
└── public
```

## Uninstall Blazar

To remove Blazar, use Homebrew's `uninstall` command:

```shell
blazar uninstall
```

## Troubleshooting Homebrew issues

It's recommended to first run `update` before trying to install packages or
diagnose errors:

```shell
brew update
```

Homebrew comes with a basic diagnostic command which can help find
inconsistencies with system settings and permissions. This command will exit
with a non-zero status if any potential problems are found:

```shell
brew doctor
```

## Next steps

Once you installed the Blazar with Homebrew, you can navigate to our
[command-line options](/docs/reference/command-line-options) page to learn more
about its usage.
