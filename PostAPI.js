import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function PostData() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onFetchLoginRecords();
  }, []);

  const onFetchLoginRecords = async () => {
    var data = {
      email: email,
      password: password,
    };
    try {
      let response = await fetch(
        "https://webhook.site/85c34f53-dd05-4778-829e-c4fa444672fc",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        alert("authenticated successfully!!!");
      }
    } catch (errors) {
      alert(errors);
    }
  };

  return (
    <View style={loginStyles.container}>
      <TextInput
        style={loginStyles.textInput}
        placeholder="Email Address"
        keyboardType="email-address"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={loginStyles.textInput}
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Submit"
        color="#841584"
        onPress={() => onFetchLoginRecords()}
      />
    </View>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#F5FCFF",
  },
  textInput: {
    height: 40,
    textAlign: "center",
    borderWidth: 1,
    width: "80%",
  },
  buttonSubmit: {
    color: "#841584",
  },
});
