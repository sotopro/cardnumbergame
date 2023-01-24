import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const Game = ({ selectedNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Numero del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button title="Menor" onPress={() => {}} color={colors.primary} />
          <Button title="Mayor" onPress={() => {}} color={colors.primary} />
        </View>
      </Card>
    </View>
  );
};

export default Game;
