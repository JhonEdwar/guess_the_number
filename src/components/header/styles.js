import { StyleSheet } from "react-native";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.primary,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize:20,
    fontFamily:"IBMPlexSans-BoldItalic",
    color: colors.white ,
  },
});
