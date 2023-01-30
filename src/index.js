import { View } from "react-native";
import React, {useState} from "react";
import { Header } from "./components";
import { StartGame, Game } from "./screens";
import { styles } from "./styles";

const App = () => {
  const[userNumber,setUserNumber]=useState(null)

  const onHandleStartGame=(selectedNumber)=>{
    setUserNumber(selectedNumber)
  }
  const Content=()=>userNumber? (<Game selectedNumber={userNumber} />) : (<StartGame onHandleStartGame={onHandleStartGame} /> )


  return (
    <View style={styles.container}>
      <Header title="adivina el número" />
      <Content />
    </View>
  );
};

export default App;
