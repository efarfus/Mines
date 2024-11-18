import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import params from './src/params'
import Field from './src/components/Field'



function App(): React.JSX.Element {

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
      <Text style={styles.sectionTitle}>Tamanho da grade: {params.getRowsAmount()}x{params.getCollumnsAmount()}</Text>
      <Field></Field>
      <Field opened></Field>
      <Field opened nearMines={1}></Field>
      <Field opened nearMines={2}></Field>
      <Field opened nearMines={3}></Field>
      <Field opened nearMines={4}></Field>
      <Field opened nearMines={5}></Field>
      <Field opened nearMines={6}></Field>
      <Field opened nearMines={7}></Field>
      <Field opened nearMines={8}></Field>
      <Field mined ></Field>
      <Field mined opened></Field>
      <Field mined opened exploded></Field>
      <Field flagged></Field>
      <Field flagged opened></Field>


    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
