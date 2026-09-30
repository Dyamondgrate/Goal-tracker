import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

// Home screen: type a goal, tap Add, see it in the list.
export default function HomeScreen() {
  // What the user is currently typing in the input box.
  const [newTitle, setNewTitle] = useState('');

  // All saved goals (each one is just a string for now).
  const [goals, setGoals] = useState<string[]>([]);

  // Save the typed text as a new goal, then clear the input.
  function addGoal() {
    const title = newTitle.trim();

    // Ignore empty / whitespace-only input.
    if (title.length === 0) return;

    setGoals([...goals, title]);
    setNewTitle('');
  }

  return (
    <View style={styles.container}>
      {/* App header */}
      <Text style={styles.title}>My Goal Tracker</Text>

      {/* Where the user types a new goal */}
      <TextInput
        style={styles.input}
        placeholder="Add a new goal"
        value={newTitle}
        onChangeText={setNewTitle}
      />

      {/* Button that runs addGoal */}
      <Pressable onPress={addGoal}>
        <Text>Add Goal</Text>
      </Pressable>

      {/* One line of text per saved goal */}
      {goals.map((goal) => (
        <Text key={goal}>{goal}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 64 },
  title: { fontSize: 32, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});
