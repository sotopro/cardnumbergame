import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { styles } from "./styles";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants";

export const StartGame = ({ onHandleStarGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [seletedNumber, setSelectedNumber] = useState(null);

  const onHandlerChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const onHandleReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const onHandleConfirm = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Numero invalido", "El numero tiene que estar entre en 1 y el 99", [
        { text: "Entendido", style: "destructive", onPress: onHandleReset },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue("");
    }
  };

  const onHandleStartGame = () => {
    onHandleStarGame(seletedNumber);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Numero seleccionado</Text>
        <NumberContainer number={seletedNumber} />
        <Button title="Iniciar juego" onPress={onHandleStartGame} color={colors.primary} />
      </Card>
    ) : null;

  return (
    <KeyboardAvoidingView
      style={styles.containterScroll}
      behavior={Platform.OS === "ios" ? "height" : "padding"}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <ScrollView style={styles.containterScroll}>
          <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
              <Text style={styles.label}>Escribe un numero</Text>
              <TextInput
                value={enteredValue}
                keyboardType="numeric"
                style={styles.input}
                placeholder="0"
                onChangeText={onHandlerChange}
                maxLength={2}
              />
              <View style={styles.buttonContainer}>
                <Button title="Reiniciar" onPress={onHandleReset} color={colors.secondary} />
                <Button title="Confirmar" onPress={onHandleConfirm} color={colors.primary} />
              </View>
            </Card>
            <Confirmed />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
