FROM node:latest

COPY myapp .

RUN npm install
RUN chmod 777 index.js
EXPOSE 10000
CMD ["node", "index.js"]
