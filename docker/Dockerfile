FROM node:14-alpine
COPY package.json /data/
WORKDIR /data/
RUN npm install
ENV PATH /data/node_modules/.bin:$PATH
COPY . /data/app/
WORKDIR /data/app/src

CMD ["tail", "-f", "/dev/null"]
