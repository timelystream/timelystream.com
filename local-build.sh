#!/bin/bash
set -e  # Exit the script if an error happens
set -x

cd $(dirname $0)
base_dir=`pwd`

docker run -it -v ${base_dir}:/timelystream-site -p 3000:3000 --name tmsite timelystream/website bash