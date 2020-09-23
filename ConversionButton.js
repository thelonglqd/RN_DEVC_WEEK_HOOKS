import React from "react";

import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function ConversionButton(props) {
  const { handlePress, from, to, highlighted } = props;

  let fromFlag = from === "vnd" ? "🇻🇳 VND" : "🇺🇸 USD";
  let toFlag = to === "vnd" ? "🇻🇳 VND" : "🇺🇸 USD";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          highlighted
            ? [styles.button, { backgroundColor: "lightblue" }]
            : styles.button
        }
        onPress={() => handlePress(from, to)}
      >
        <Text>
          {fromFlag} to {toFlag}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 25,
    width: 150,
    height: 50,
    borderWidth: 2,
    borderColor: "lightblue",
  },
});
