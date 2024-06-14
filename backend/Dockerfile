# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.2.0

FROM node:${NODE_VERSION}-alpine

RUN yarn set version 4.2.2

WORKDIR /usr/src/app

ENV NODE_ENV production

# Run the application as a non-root user.

# Copy package.json so that package manager commands can be used.
COPY . .
COPY package.json .
RUN yarn install


# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
# COPY --from=deps /usr/src/app/node_modules ./node_modules
# COPY --from=build /usr/src/app/dist ./dist

RUN yarn build
# Expose the port that the application listens on.
EXPOSE 3000

USER node
# Run the application.
CMD yarn start
