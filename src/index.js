import { View } from "react-native";

import { Header } from "./components";
import { styles } from "./styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
    </View>
  );
};

export default App;
