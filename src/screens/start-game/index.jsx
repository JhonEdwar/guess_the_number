import React,{useState} from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import {colors} from '../../constants/index'

import { styles } from "./styles";
import {Card} from "../../components/index";

const startGame = () => {
  const [enterValue, setEnteredValue]=useState('')
  
  const onHandlerChange=(text)=>{
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      <Text style={styles.title}> Comenzar juego </Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}> Escriba un número </Text>
        <TextInput 
          value={enterValue} 
          keyboardType="numeric" 
          style={styles.input} 
          placeholder="0" 
          onChangeText={(text)=>onHandlerChange(text)}
          />

        <View style={styles.buttonContainer}>
          <Button title="Reiniciar" onPress={() => null} color={colors.secondary}  />
          <Button title="Confirmar" onPress={() => null} color={colors.primary} />
        </View>
      </Card>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default startGame;
