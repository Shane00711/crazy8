FROM node:15.13-alpine
WORKDIR /crazy-8/backend
# ENV PATH="./node_modules/.bin:$PATH"
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "start"]