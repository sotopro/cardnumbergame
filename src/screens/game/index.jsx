import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";

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

const Game = ({ selectedNumber, onHandleGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === selectedNumber) onHandleGameOver(rounds);
  }, [currentGuess, selectedNumber, onHandleGameOver]);

  const onHandleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("No mientas!", "Sabes que eso es incorrecto...", [
        { text: "Perdon!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds((rounds) => rounds + 1);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Numero del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button title="Menor" onPress={() => onHandleNextGuess("lower")} color={colors.primary} />
          <Button
            title="Mayor"
            onPress={() => onHandleNextGuess("greater")}
            color={colors.primary}
          />
        </View>
      </Card>
    </View>
  );
};

export default Game;
