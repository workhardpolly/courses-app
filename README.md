# Here is LMS System with basic functions

Requirements to run the project:

- NodeJS
- Docker

## To start the app:

1. Navigate to server folder in your terminal and run 'npm install' command
2. Build the container with command $> docker build -t courses-app-server:1.0 .
3. Proceed to client folder and run 'npm install' command
4. Build the container with command $> docker build -t courses-app-client:1.0 .
5. Navigate to project root folder and run $> docker-compose -f project.yaml up

### Default settings:

To change default settings you should:

- Check .env file in the server folder
- Edit the project.yaml file
