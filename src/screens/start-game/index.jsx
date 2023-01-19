import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { styles } from "./styles";

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comenzar juego</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Escribe un numero</Text>
        <TextInput style={styles.input} placeholder="0" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Reiniciar" onPress={() => null} color="#C4C9E9" />
        <Button title="Confirmar" onPress={() => null} color="#97A1D8" />
      </View>
    </View>
  );
};

export default StartGame;
