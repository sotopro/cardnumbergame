import React from "react";
import { View, Text, Image, Button } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/index";
import { colors } from "../../constants";

const GameOver = ({ rounds, selectedNumber, onHandleRestartGame }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image
          source={{
            uri: "https://mystickermania.com/cdn/stickers/noob-pack/game-over-glitch-effect-512x512.png",
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Rondas: {rounds}</Text>
        <Text style={styles.text}>Numero seleccionado: {selectedNumber}</Text>
        <Button title="Reiniciar juego" onPress={onHandleRestartGame} color={colors.primary} />
      </Card>
    </View>
  );
};

export default GameOver;
