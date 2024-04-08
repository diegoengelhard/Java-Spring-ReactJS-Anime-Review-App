# Script to create Prisma client boot application docker image

# Start from a base image.
FROM node:20.0

# Set the working directory.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the Docker image.
COPY package*.json ./

# Install specific version of npm
RUN npm install -g npm@9.6.6

# Install all dependencies.
RUN npm install

# # Install Prisma and Prisma Client
# RUN npm install -D prisma
# RUN npm install @prisma/client

# Copy the .env file into the Docker image.
COPY .env ./

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5555

# Run the Prisma migrations and start Prisma Studio.
CMD npx prisma migrate dev && npx prisma studio