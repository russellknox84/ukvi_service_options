FROM node

ENV USER spon
ENV GROUP spon
ENV NAME spon-ui

ARG VERSION

WORKDIR /usr/source/app

RUN groupadd -r ${GROUP} && \
    useradd -r -g ${USER} ${GROUP} -d /usr/source/app && \
    mkdir -p /usr/source/app && \
    chown -R ${USER}:${GROUP} /usr/source/app

COPY . /usr/source/app

RUN npm --loglevel warn install
COPY . /app
RUN npm rebuild node-sass
RUN npm --loglevel warn run postinstall
RUN npm run test:ci

RUN chmod a+x /usr/source/app/run.sh

EXPOSE 8000

USER spon

ENTRYPOINT /usr/source/app/run.sh