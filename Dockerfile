# Base image
FROM node:21-alpine
# Set the working directory
WORKDIR /app
# Copy the package.json and yarn.lock files
COPY package.json ./
# Install dependencies
RUN yarn install
# Copy the source code
COPY . .
# Build the app
RUN yarn build
# Expose the port on which the app will run
EXPOSE 3000
# Start the app
CMD ["yarn", "start"]