import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const App = () => {
  const [guess, setGuess] = useState('');
  const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    const numericGuess = parseInt(guess, 10);
    if (isNaN(numericGuess)) {
      Alert.alert('Invalid input', 'Please enter a number');
      return;
    }

    if (numericGuess < numberToGuess) {
      setFeedback('Too low!');
    } else if (numericGuess > numberToGuess) {
      setFeedback('Too high!');
    } else {
      setFeedback('Correct!');
    }
  };

  const handleReset = () => {
    setGuess('');
    setNumberToGuess(Math.floor(Math.random() * 100) + 1);
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guessing Game</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        value={guess}
        onChangeText={setGuess}
        keyboardType="numeric"
      />
      <Button title="Submit Guess" onPress={handleGuess} />
      <Text style={styles.feedback}>{feedback}</Text>
      {feedback === 'Correct!' && (
        <Button title="Play Again" onPress={handleReset} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
  },
  feedback: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default App;
