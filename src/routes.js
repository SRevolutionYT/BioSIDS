import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/home/home";
import Options from "./pages/options/options";
import Camera from "./pages/camera/camera";
import Result from "./pages/Result/result";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Options" component={Options} />
        <AppStack.Screen name="Camera" component={Camera} />
        <AppStack.Screen name="Result" component={Result} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
