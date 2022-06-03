import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [age, agePlus] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mon âge est : {age}</Text>
      <Button
        style={styles.btn}
        onPress={() => {agePlus(age + 1)}}
        title="Fais moi viellir..."
      />
      <Button
        style={styles.btn}
        onPress={() => {agePlus(age - 1)}}
        title="Fais moi rajeunir..."
      />
      <Button
        style={styles.btn}
        onPress={() => {agePlus(0)}}
        title="Fais moi naître"
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom : 100
  },
  btn: {
    width : 250,
    marginBottom : 50
  }

});