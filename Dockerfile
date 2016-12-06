FROM node:6

ENV GHOSTWRITER_APP_URL=http://application:8888
ENV GHOSTWRITER_SERVICE_URL=http://ghostwriter:8888

RUN mkdir -p /app
WORKDIR /app

COPY ./src               /app/src
COPY ./.babelrc          /app/.babelrc
COPY ./browserslist      /app/browserslist
COPY ./package.json      /app/package.json
COPY ./webpack.config.js /app/webpack.config.js

RUN npm install
RUN npm run build

RUN rm -r -f /app/src

CMD [ "npm", "start", "--", "-p", "8888" ]

EXPOSE 8888
