FROM node:7.7.2

ENV PROJECT_PATH /app

RUN apt-get update && apt-get install -y curl nginx apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

COPY docker/default.conf /etc/nginx/sites-available/default

RUN mkdir -p $PROJECT_PATH
WORKDIR $PROJECT_PATH

COPY package.json .
RUN yarn install

COPY . $PROJECT_PATH

RUN yarn webpack -p

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
