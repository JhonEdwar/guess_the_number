import { StyleSheet } from "react-native";

import { colors } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical:20,
  },
  content: {
    width:"75%",
    height:200,
    alignItems:"center",
    justifyContent:"space-around", 
  },
  title: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
    paddingVertical: 20,
    fontFamily:"IBMPlexSans-Regular",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
