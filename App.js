import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import MineField from './src/components/MineField';
import params from './src/params';
import Field from './src/components/Field';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
} from './src/functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getCollumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getCollumnsAmount();
    const rows = params.getRowsAmount();

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    };
  };


  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row,column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeu!!', 'f')
    }

    if(won){
      Alert.alert('Ganhou!!!', 'você venceu')
    }

    this.setState({ board, lost, won})
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
        <Text style={styles.sectionTitle}>
          Tamanho da grade: {params.getRowsAmount()}x
          {params.getCollumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField}></MineField>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
