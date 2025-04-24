# Backend: Node.js (Express)
FROM node:18

WORKDIR /app
COPY . .

RUN npm install

# Make sure the backend uses PORT from env or defaults to 8080
ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]
