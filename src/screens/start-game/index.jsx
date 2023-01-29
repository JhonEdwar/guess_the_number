import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Card, NumberContainer } from "../../components/index";
import { colors } from "../../constants/index";

const startGame = () => {
  const [enterValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const onHandlerChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };
  const onHandleReset = (text) => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const onHandleConfirm = () => {
    const chosenNumber = parseInt(enterValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Numbero invalido", "El numero tiene que estar entre 1 y 99", [
        { text: "Entendido", style: "destructive", onPress: onHandleReset },
      ]);
    }else{
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('')
    }
  };

  const onHandleStartGame=()=>null

  const Confirmed=()=>confirmed?(
    <Card style={styles.confirmedContainer}>
      <Text style={styles.confirmedTitle}>Número Seleccionado</Text>
      <NumberContainer number={selectedNumber}/>
      <Button title="Iniciar juego" onPress={onHandleStartGame} color={colors.primary}/>
    </Card>
    ):null

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
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
            onChangeText={(text) => onHandlerChange(text)}
            maxLength={2}
          />

          <View style={styles.buttonContainer}>
            <Button title="Reiniciar" onPress={onHandleReset} color={colors.secondary} />
            <Button title="Confirmar" onPress={onHandleConfirm} color={colors.primary} />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default startGame;
