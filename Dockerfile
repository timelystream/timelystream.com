FROM node:16.13.0

WORKDIR /timelystream.com
EXPOSE 3000

RUN yarn install

# Build docker command
# docker build -t timelystream/website .