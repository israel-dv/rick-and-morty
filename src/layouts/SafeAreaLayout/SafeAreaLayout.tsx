import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, ViewStyle } from "react-native";
import { THEME_COLORS } from "../../utils/constants/theme";

type SafeAreaLayoutProps = {
  children: React.ReactNode;
  style?: ViewStyle | null;
};

export const SafeAreaLayout = ({
  children,
  style,
}: SafeAreaLayoutProps): React.ReactElement => {
  return <SafeAreaView style={{ ...style }}>{children}</SafeAreaView>;
};
