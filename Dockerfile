# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .


# Define build arguments
ARG VITE_APP_NEWS_API_KEY
ARG VITE_APP_GUARDIAN_API_KEY
ARG VITE_APP_NY_TIMES_API_KEY

# Set environment variables
ENV VITE_APP_NEWS_API_KEY=$VITE_APP_NEWS_API_KEY
ENV VITE_APP_GUARDIAN_API_KEY=$VITE_APP_GUARDIAN_API_KEY
ENV VITE_APP_NY_TIMES_API_KEY=$VITE_APP_NY_TIMES_API_KEY

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["npm", "run", "start"]
