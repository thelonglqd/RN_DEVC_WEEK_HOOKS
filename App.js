import React, { useState, userEffect, useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Constants from "expo-constants";

import ConversionButton from "./ConversionButton";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("vnd");
  const [toCurrency, setToCurrency] = useState("usd");
  const [currentCurrencyValue, setCurrentCurrencyValue] = useState("");
  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState("");

  const calculate = () => {
    fromCurrency === "vnd"
      ? setConvertedCurrencyValue((currentCurrencyValue / 23000).toFixed(2))
      : setConvertedCurrencyValue(currentCurrencyValue * 23000);
    // ? this.setState({
    //     convertedCurrencyValue: (currentCurrencyValue / 23000).toFixed(2),
    //   })
    // : this.setState({
    //     convertedCurrencyValue: currentCurrencyValue * 23000,
    //   });
  };

  useEffect(calculate);

  const setConversionCurrencies = (from, to) => {
    setFromCurrency(from);
    setToCurrency(to);
    // this.setState(
    //   {
    //     fromCurrency: from,
    //     toCurrency: to,
    //   },
    //   () => this.calculate()
    // );
  };

  const handleTextChange = (currentCurrencyValue) => {
    setCurrentCurrencyValue(currentCurrencyValue);
    // this.setState({ currentCurrencyValue }, () => this.calculate());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>
        Please enter the valie of the currency you want to convert
      </Text>
      <TextInput
        onChangeText={handleTextChange}
        placeholder="100,000,000 VND"
        style={styles.inputMoney}
        keyboardType="number-pad"
        autoFocus
      />
      <ConversionButton
        highlighted={fromCurrency === "vnd" ? true : false}
        handlePress={setConversionCurrencies}
        from="vnd"
        to="usd"
      />
      <ConversionButton
        highlighted={fromCurrency === "usd" ? true : false}
        handlePress={setConversionCurrencies}
        from="usd"
        to="vnd"
      />

      <View style={styles.resultContainer}>
        <Text style={styles.currentCurrencyText}>Current Currency</Text>
        <Text style={styles.currentCurrencyValue}>
          {fromCurrency === "vnd"
            ? `₫ ${currentCurrencyValue}`
            : `$ ${currentCurrencyValue}`}
        </Text>
        <Text style={styles.convertedCurrencyText}>Conversion Currency</Text>
        <Text style={styles.convertedCurrencyValue}>
          {toCurrency === "usd"
            ? `$ ${convertedCurrencyValue}`
            : `₫ ${convertedCurrencyValue}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    marginTop: Constants.statusBarHeight,
  },
  resultContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  instruction: {
    fontSize: 18,
  },
  inputMoney: {
    marginTop: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: "lightblue",
    height: 60,
    fontSize: 30,
  },
  currentCurrencyText: {
    fontSize: 20,
  },
  convertedCurrencyText: {
    fontSize: 20,
  },
  currentCurrencyValue: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },
  convertedCurrencyValue: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },
});
