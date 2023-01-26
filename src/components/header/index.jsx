import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { styles } from "./styles";

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
