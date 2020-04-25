import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from "./src/Screens/indexScreen";
import React from "react";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/Screens/showScreen";
import CreateScreen from "./src/Screens/createScreen";
import EditScreen from "./src/Screens/editScreen";

const navigator = createStackNavigator(
  {
    index: indexScreen, //first are route configuration object
    Show: ShowScreen,
    create: CreateScreen,
    edit: EditScreen,
  },
  {
    initialRouteName: "index", //second are configuration option for stack navigator
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

//wrapping into our own custom component
export default () => {
  return (
    <Provider>
      <App></App>
    </Provider>
  );
};
