import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/index";
import { colors } from "../../constants";

const GameOver = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>fin de juego</Text>
    </View>
  );
};

export default GameOver;