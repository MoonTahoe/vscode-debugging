# VSCode debugging with a sample Expo App

Debugging Expo with VSCode can be tricky. I found this article helpful : [https://journal.highlandsolutions.com/how-to-debug-react-native-apps-using-expo-and-vscode-c42353b12311](https://journal.highlandsolutions.com/how-to-debug-react-native-apps-using-expo-and-vscode-c42353b12311). What I learned is the order reall matters:

1. Start the expo packager: `npm start`
2. Add the following to your user settings: `"react-native.packager.port": 19001`, this is expo's port
3. With VSCode `React Native Tools` package installed, click debug and create a `React Native` configuration
4. The configuration should `Attach to process`, run the debugger and attach to the process.
5. Open the app in the iOS simulator
6. Select Command + D to open menu and start debugging JS
7. Make sure you stop the debugging in the simulator before stopping the debugger
