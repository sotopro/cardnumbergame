import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components";

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comenzar juego</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Escribe un numero</Text>
        <TextInput keyboardType="numeric" style={styles.input} placeholder="0" />
        <View style={styles.buttonContainer}>
          <Button title="Reiniciar" onPress={() => null} color="#C4C9E9" />
          <Button title="Confirmar" onPress={() => null} color="#97A1D8" />
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
