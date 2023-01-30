import { StyleSheet } from "react-native";
import {colors} from '../../constants/index'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 20,
    color:colors.text,
    fontFamily:"IBMPlexSans-Regular",
  },
  inputContainer: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  label: {
    fontSize: 15,
    paddingVertical: 5,
    textAlign: "center",
    fontFamily:"IBMPlexSans-BoldItalic",
  },
  input: {
    width: "100%",
    maxWidth: 40,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
    
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  confirmedContainer: {
    width: "75%",
    height: 180,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  confirmedTitle:{
    fontSize:16,
    fontFamily:"IBMPlexSans-BoldItalic",
    }
});
