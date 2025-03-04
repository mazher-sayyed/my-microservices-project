FROM node:14

WORKDIR /app
COPY app/ /app/

RUN npm install
RUN npm run build

EXPOSE 80
CMD ["npm", "start"]

