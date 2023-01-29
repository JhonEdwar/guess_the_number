import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";


const NumberContainer = ({number}) => {
  return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    );
};

export default NumberContainer;