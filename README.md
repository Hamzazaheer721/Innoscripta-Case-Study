# Case Study Documentation - Innoscripta

## Environment Setup

- To configure the environment, create a `.env` file in the root directory of the project with the following content:
  ```sh
      VITE_APP_NEWS_API_KEY = f800bf4a17b94f819b6c314b8405e77d
      VITE_APP_GUARDIAN_API_KEY=bee60063-c330-493e-875e-6629fc0e8bd2
      VITE_APP_NY_TIMES_API_KEY=18gD8RKMiPAGp4LqQNi41StpW0kNrpe1
      

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

4. **Deployment Information**:
   - The app is deployed on [Netlify](https://peppy-selkie-8360f6.netlify.app/).
   - **Note**: Due to CORS restrictions imposed by API providers on the hosted link, APIs may not work as expected.
