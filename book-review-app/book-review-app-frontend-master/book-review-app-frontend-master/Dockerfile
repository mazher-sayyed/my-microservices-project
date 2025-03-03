# Stage 1: Build the React app
FROM node:20.11.1-slim AS builder

# Set working directory
WORKDIR /react-ui

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install 

# Copy source files
COPY . .

# Enable legacy OpenSSL provider to fix Webpack error
ENV NODE_OPTIONS="--openssl-legacy-provider"

# Build the project
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:latest

# Copy the built React app from the builder stage
COPY --from=builder /react-ui/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port externally
EXPOSE 3013

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
