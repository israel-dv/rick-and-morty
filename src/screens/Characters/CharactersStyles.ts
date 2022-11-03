import { StyleSheet } from "react-native";

import { THEME_COLORS } from "../../utils/constants/theme";

export const charactersStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: THEME_COLORS.primaryBackgorund,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
