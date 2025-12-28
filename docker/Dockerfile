FROM node:24-alpine3.20
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --no-package-lock

# Bundle app source
COPY app /usr/src/app
EXPOSE 5173
CMD ["npm", "run", "start"]