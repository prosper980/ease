# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.2.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine

RUN yarn set version 4.2.2

WORKDIR /usr/src/app

COPY package.json .
COPY . .
RUN yarn install

RUN yarn build


# Expose the port that the application listens on.
EXPOSE 4173

# Use production node environment by default.
ENV NODE_ENV production

# Run the application as a non-root user.
#USER node

# Run the application.
CMD yarn preview
