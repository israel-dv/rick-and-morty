import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Characters } from "../../screens/Characters";
import { Episodes } from "../../screens/Episodes";
import { Locations } from "../../screens/Locations";
import { styleNavigator } from "./TabStyles";

const Tab = createBottomTabNavigator();

export const TabNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator screenOptions={styleNavigator}>
      <Tab.Screen component={Characters} name="Characters" />
      <Tab.Screen component={Locations} name="Locations" />
      <Tab.Screen component={Episodes} name="Episodes" />
    </Tab.Navigator>
  );
};
