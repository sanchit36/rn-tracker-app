import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SigninScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SigninScreen</Text>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({});

export default SigninScreen;
