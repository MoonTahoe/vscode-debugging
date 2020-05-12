# Node App with Webpack Build

In this branch we've updated the repository's `launch.json` file to run the debugger using `nodemon`. We are also able to load local environment variables inside of the `.env` file using `dotenv` with the debug process. That was accomplised by adding `"runtimeArgs": ["--require=dotenv/config"]`to the `launch.json` config as well.

## Goals

- [x] Node
  - [x] Basic Node App
  - [x] Apollo Server App w/environment
  - [x] Node App with Webpack Build
- [ ] React
  - [ ] Create React App
- [ ] React Native
  - [ ] Debug Expo Device
- [ ] Gatsby
  - [ ] Static Build Process
  - [ ] Static Site Runtime
