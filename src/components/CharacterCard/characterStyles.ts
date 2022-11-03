import { StyleSheet } from "react-native";
import { THEME_COLORS } from "../../utils/constants/theme";

export const characterStyles = StyleSheet.create({
  image: {
    height: "100%",
    position: "relative",
    width: "100%",
  },
  card: {
    borderWidth: 2,
    borderColor: THEME_COLORS.borderColor,
    borderRadius: 12,
    height: 180,
    marginVertical: 10,
    marginRight: 20,
    overflow: "hidden",
    width: "100%",
  },
  cardInfoContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    bottom: 0,
    display: "flex",
    height: 70,
    paddingVertical: 10,
    position: "absolute",
    right: 0,
    width: "100%",
  },
  cardTextName: {
    textAlign: "center",
    color: "white",
    fontFamily: "Signika-Regular",
    fontSize: 18,
    textShadowColor: "orange",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  cardTextInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cardTextInfo: {
    color: "rgb(189, 188, 180)",
    fontFamily: "Sen-Regular",
    fontSize: 16,
    fontWeight: "600",
  },
});
