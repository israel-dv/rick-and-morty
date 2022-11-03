import { StyleSheet } from "react-native";
import { THEME_COLORS } from "../../utils/constants/theme";

export const characterStyles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: THEME_COLORS.borderColor,
    borderRadius: 12,
    width: "100%",
    height: 180,
    marginVertical: 10,
    marginRight: 20,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    overflow: "hidden",
  },
  image: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
});
