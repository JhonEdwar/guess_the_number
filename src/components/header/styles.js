import { StyleSheet,Dimensions, StatusBar } from "react-native";
import { colors } from "../../constants";

const {width,height}=Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.primary,
    height: height*0.15,
    justifyContent: "center",
    alignItems: "center",
    margingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize:20,
    fontFamily:"IBMPlexSans-BoldItalic",
    color: colors.white ,
  },
});
