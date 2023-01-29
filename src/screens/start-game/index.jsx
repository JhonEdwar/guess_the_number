import { View, Text, TextInput, Button } from "react-native";

import { styles } from "./styles";
import {Card} from "../../components/index";

const startGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Comenzar juego </Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}> Escriba un número </Text>
        <TextInput keyboardType="numeric" style={styles.input} placeholder="0" />

        <View style={styles.buttonContainer}>
          <Button title="Reiniciar" onPress={() => null} color="#C6B4B0" />
          <Button title="Confirmar" onPress={() => null} color="#f18805" />
        </View>
      </Card>
    </View>
  );
};

export default startGame;
