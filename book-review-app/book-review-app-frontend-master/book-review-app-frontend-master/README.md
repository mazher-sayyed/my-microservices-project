# Book Review App - Frontend

        This is the React frontend for the Book Review App.

        ## Setup

        1. Install dependencies:
           ```bash
           npm ci
           ```
        2. Start the development server:
           ```bash
           npm start
           ```
        3. To build the project:
           ```bash
           npm run build
           ```

        ## Deployment

        The frontend is Dockerized and will be deployed via Jenkins.

        ## CI/CD

        - `Jenkinsfile` handles the entire deployment pipeline.
        - `Jenkinsfile.ci` is used for continuous integration.
        - `Jenkinsfile.deploy` is used for deployment.

        ## Docker

        To build and run the Docker container:
        ```bash
        docker build -t book-review-frontend .
        docker run -p 3000:3000 book-review-frontend
        ```