import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login Screen</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Email"
            placeholderTextColor="white"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput secureTextEntry={true}
            style={styles.inputText}
            placeholder="Enter Your password"
            placeholderTextColor="white"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput secureTextEntry={true}
            style={styles.inputText}
            placeholder="Enter Your Phone Number"
            placeholderTextColor="white"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}
          >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginTop: 120,
    marginBottom: 50,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    padding: 20
  },
  forgot: {
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
  loginText: {
    color: "white",
    fontSize: 20,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
});
