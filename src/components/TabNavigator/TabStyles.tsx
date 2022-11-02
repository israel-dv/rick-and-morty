import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { THEME_COLORS } from "../../utils/constants/theme";

enum TapOptions {
  Characters = "Characters",
  Episodes = "Episodes",
  Locations = "Locations",
}

type StyleIconProps = {
  focused: boolean;
  route: any;
};

const styleIcon = ({ focused, route }: StyleIconProps): React.ReactElement => {
  const color = focused
    ? THEME_COLORS.textPrimaryColor
    : THEME_COLORS.textSecondaryColor;
  const size = focused ? 24 : 20;

  switch (route.name) {
    case TapOptions.Characters:
      return <Fontisto name="persons" size={size} color={color} />;
    case TapOptions.Locations:
      return <Ionicons name="earth" size={size} color={color} />;
    case TapOptions.Episodes:
      return (
        <MaterialCommunityIcons name="movie-open" size={size} color={color} />
      );
    default:
      return <Fontisto name="persons" size={size} color={color} />;
  }
};

const styleLabel = ({ focused, route }: StyleIconProps) => {
  return (
    <Text
      style={{
        color: focused
          ? THEME_COLORS.textPrimaryColor
          : THEME_COLORS.textSecondaryColor,
        fontSize: 12,
      }}
    >
      {route.name}
    </Text>
  );
};

export const styleNavigator = (routeProps: any): BottomTabNavigationOptions => {
  const { route } = routeProps;
  return {
    tabBarIcon: ({ focused }) => styleIcon({ focused, route }),
    tabBarLabel: ({ focused }) => styleLabel({ focused, route }),
    tabBarStyle: {
      backgroundColor: THEME_COLORS.secondaryBackground,
    },
    headerShown: false,
  };
};
