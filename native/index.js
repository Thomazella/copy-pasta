import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";
import { logbox } from "./src/config/log";
// import { dsn } from './src/config/sentry'
import * as Sentry from "@sentry/react-native";

logbox && require("react-native").unstable_enableLogBox();

// eslint-disable-next-line
console.disableYellowBox = true

Sentry.init({ dsn });
AppRegistry.registerComponent(appName, () => App);
