# Case Study Documentation

## Environment Setup

- **.env File**: The app requires an `.env` file to be set up as all the keys are stored there for security.

## Running the App with Docker

1. **Install Docker**:
   - Ensure Docker is installed on your machine. If you are using Docker Desktop, it should be running, and you should be logged in.

2. **Build and Run the App**:
   - Run the following command in your terminal:

     ```sh
     docker compose up --build
     ```

   - This command will:
     - Build the Docker image.
     - Install dependencies.
     - Run the Vite app.

3. **Access the App**:
   - The app will be available at [http://localhost:8080/](http://localhost:8080/).
