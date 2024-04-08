# Start from a base image.
FROM maven:3.8.1-openjdk-17 as build
# Set the working directory.
WORKDIR /usr/src/app
# Copy the pom.xml file into the Docker image.
COPY pom.xml .
# Download all required dependencies into one layer.
RUN mvn dependency:go-offline -B
# Copy your source code into the Docker image.
COPY src src
# Build the application.
RUN mvn package

# Start stage for the final image
FROM openjdk:17 
# Set the working directory.
WORKDIR /usr/src/app
# Copy the built application and Node.js from the previous stages.
COPY --from=build /usr/src/app/target/*.jar app.jar
# Expose the ports that the application listens on.
EXPOSE 8080
# Run the Java application.
CMD java -jar app.jar
