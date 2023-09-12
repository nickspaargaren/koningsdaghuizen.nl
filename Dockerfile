FROM node:18-alpine
WORKDIR /app
COPY ./ /app
RUN yarn install
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["yarn", "dev"]