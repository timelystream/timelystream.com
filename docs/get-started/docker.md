---
title: Get started with Blazar via Docker
sidebar_label: Docker
description:
  Guide showing how to use Blazar with Docker. This also covers how to import
  data as well as persistence.
---

Blazar has images for both Linux/macOS and Windows on
[Docker Hub]({@dockerUrl@}).

## Install Docker

Before we start, you will need to install Docker. You can find guides for your
platform on the [official documentation](https://docs.docker.com/get-docker/).

## Blazar image

Once Docker is installed, you will need to pull Blazar's image from
[Docker Hub]({@dockerUrl@}) and create a container. You can do both in one
command using `docker run`:

```shell
docker run -p 9000:9000 \
 -p 9009:9009 \
 -p 8812:8812 \
 -p 9003:9003 \
 timelystream/blazar
```

### Options

| Argument | Description                 |
| -------- | --------------------------- |
| `-p`     | Port to publish to the host |
| `-v`     | To bind mount a volume      |

#### -v volumes

The Blazar root_directory will be in
the following location:

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<Tabs defaultValue="linux" values={[
  { label: "Linux", value: "linux" },
  { label: "Windows", value: "windows" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="linux">


```shell
/root/.blazar
```

</TabItem>


<TabItem value="windows">


```shell
C:\blazar
```

</TabItem>


</Tabs>


## Container status

You can check the status of your container with **docker ps**. It also lists the
ports we published:

```shell
docker ps
```

```shell title="Result"
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES
dd363939f261        timelystream/blazar     "/bin/blazar -m io…"   3 seconds ago       Up 2 seconds        8812/tcp, 9000/tcp   frosty_gauss
```

## Importing data and sending queries

Now that Blazar is running, you can start interacting with it:

- If you published the port `9000`, you can follow our
  [REST](/docs/reference/api/rest) page
- If you published the port `8812`, follow our
  [Postgres](/docs/reference/api/postgres) page

## Data persistence

### Mounting a volume

Volumes can be mounted to the Blazar Docker container so that data may be
persisted or server configuration settings may be passed to an instance. The
following example demonstrated how to mount the current directory to a Blazar
container using the `-v` flag in a Docker `run` command:

```bash
docker run -p 9000:9000 \
 -p 9009:9009 \
 -p 8812:8812 \
 -p 9003:9003 \
 -v "$(pwd):/root/.blazar/" timelystream/blazar
```

The current directory will then have data persisted to disk for convenient
migration or backups:

```bash title="Current directory contents"
├── conf
│   └── server.conf
├── db
└── public
```

For details on passing Blazar server settings to a Docker container, see the
[Docker section](/docs/reference/configuration#docker) of the server
configuration documentation.

### Writing logs to disk

When mounting a volume to a Docker container, a logging configuration file may
be provided in the container located at `/conf/log.conf`:

```bash title="Current directory contents"
└── conf
    ├── log.conf
    └── server.conf
```

For example, a file with the following contents can be created:

```shell title="./conf/log.conf"
# list of configured writers
writers=file,stdout,http.min

# file writer
w.file.class=io.blazar.log.LogFileWriter
w.file.location=blazar-docker.log
w.file.level=INFO,ERROR,DEBUG

# stdout
w.stdout.class=io.blazar.log.LogConsoleWriter
w.stdout.level=INFO

# min http server, used monitoring
w.http.min.class=io.blazar.log.LogConsoleWriter
w.http.min.level=ERROR
w.http.min.scope=http-min-server
```

The current directory can be mounted:

```shell title="Mounting the current directory to a Blazar container"
docker run -p 9000:9000 \
 -p 9009:9009 \
 -p 8812:8812 \
 -p 9003:9003 \
 -v "$(pwd):/root/.blazar/" timelystream/blazar
```

The container logs will be written to disk using the logging level and file name
provided in the `conf/log.conf` file, in this case in `./blazar-docker.log`:

```shell title="Current directory tree"
├── conf
│  ├── log.conf
│  └── server.conf
├── db
│  ├── table1
│  └── table2
├── public
│  ├── ui / assets
│  ├── ...
│  └── version.txt
└── blazar-docker.log
```

For more information on logging, see the
[configuration reference documentation](/docs/reference/configuration#logging).

### Restart an existing container

Running the following command will create a new container for the Blazar image:

```shell
docker run -p 9000:9000 \
 -p 9009:9009 \
 -p 8812:8812 \
 -p 9003:9003 \
 timelystream/blazar
```

By giving the container a name with `--name container_name`, we have an easy way
to refer to the container created by run later on:

```shell
docker run -p 9000:9000 \
 -p 9009:9009 \
 -p 8812:8812 \
 -p 9003:9003 \
 --name docker_blazar \
 timelystream/blazar
```

If we want to re-use this container and its data after it has been stopped, we
can use the following commands:

```shell
# bring the container up
docker start docker_blazar
# shut the container down
docker stop docker_blazar
```

Alternatively, users can obtain a running container's ID with 'docker ps' and
restart it using the
[UUID short identifier](https://docs.docker.com/engine/reference/run/#name---name):

```shell title="Starting a container by ID"
docker start dd363939f261
```
