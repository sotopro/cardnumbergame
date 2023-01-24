import { useState } from "react";
import { View } from "react-native";

import { Header } from "./components";
import { StartGame, Game } from "./screens";
import { styles } from "./styles";

const App = () => {
  const [userNumber, setUserNumber] = useState(null);

  const onHandleStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const Content = () =>
    userNumber ? (
      <Game selectedNumber={userNumber} />
    ) : (
      <StartGame onHandleStarGame={onHandleStarGame} />
    );
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      <Content />
    </View>
  );
};

export default App;
