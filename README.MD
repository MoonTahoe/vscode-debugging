## Apollo Server and Nodemon

In this branch we've updated the repository's `launch.json` file to run the debugger using `nodemon`. We are also able to load local environment variables inside of the `.env` file using `dotenv` with the debug process. That was accomplised by adding `"runtimeArgs": ["--require=dotenv/config"]`to the `launch.json` config as well.
