import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  Alert
} from "react-native";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gerarNovaFrase = () => {
  var frases = Array();
  frases[0] = "aa";
  frases[1] = "bb";
  frases[2] = "cc";
  frases[3] = "dd";
  frases[4] = "ee";

  var numeroAleatorio = getRandomInt(0, frases.length - 1);

  Alert.alert(frases[numeroAleatorio]);
};

export default class appFrasesDoDia extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./assets/logo.png")} />
        <TouchableOpacity style={styles.button} onPress={gerarNovaFrase}>
          <Text style={styles.buttonText}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#538530",

    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

AppRegistry.registerComponent("appFrasesDoDia", () => appFrasesDoDia);
