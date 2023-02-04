import { ActivityIndicator, View } from "react-native";
import {useFonts} from 'expo-font'
import React, {useState} from "react";
import { Header } from "./components";
import { StartGame, Game } from "./screens";
import { styles } from "./styles";
import { colors } from "./constants/index";

const App = () => {
  const[loaded]=useFonts({
    "IBMPlexSans-Regular": require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    "IBMPlexSans-BoldItalic": require("../assets/fonts/IBMPlexSans-BoldItalic.ttf"),
    "IBMPlexSans-Bold": require("../assets/fonts/IBMPlexSans-Bold.ttf"),
    "IBMPlexSans-Italic": require("../assets/fonts/IBMPlexSans-Italic.ttf"),
    "IBMPlexSans-Medium": require("../assets/fonts/IBMPlexSans-Medium.ttf"),

  })
  const[userNumber,setUserNumber]=useState(null)
  const[gessRounds,setGessRounds]=useState(0)

  const onHandleStartGame=(selectedNumber)=>{
    setUserNumber(selectedNumber)
  }

  const onHandleGameOver=(rounds)=>{
    setGessRounds(rounds)
  }


  const Content=()=>userNumber? (<Game selectedNumber={userNumber} onHandleGameOver={onHandleGameOver} />) : (<StartGame onHandleStartGame={onHandleStartGame} /> )

if(!loaded){
  return(
    <View style={styles.containerLoader}>
    <ActivityIndicator size="large" color={colors.primary}/>
     </View>
  )
}
  return (
    <View style={styles.container}>
      <Header title="adivina el número" />
      <Content />
    </View>
  );
};

export default App;
