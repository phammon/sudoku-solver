import React, { Component } from 'react';
import logo from './logo.svg';
import Sudoku from './Sudoku'
import './App.css';

export default class App extends Component {
sudoku(puzzle) {
let nums = [1,2,3,4,5,6,7,8,9];

//getter functions
function getRow(rowNum, puzzle) {
  let row = puzzle[rowNum];
  return row;
}

function getColumn(colNum, puzzle) {
  let col =  puzzle.map(function(value, index) {
     return value[colNum];
  });
   return col;
}
//squares are returned from Top to Bottom
function getSquare(col1, col2, col3, square) {
 let squareArr = []
  if(square === 1) {
   squareArr.push(col1.slice(0, 3)) 
   squareArr.push(col2.slice(0, 3))
   squareArr.push(col3.slice(0, 3));
   squareArr.join().split(",");
 }else if(square === 2) {
   squareArr.push(col1.slice(3, 6)) 
   squareArr.push(col2.slice(3, 6))
   squareArr.push(col3.slice(3, 6));
   squareArr.join().split(",");
 }else if(square === 3) {
   squareArr.push(col1.slice(6, 9)) 
   squareArr.push(col2.slice(6, 9))
   squareArr.push(col3.slice(6, 9));
   squareArr.join().split(",");
 }else if(square === 4) {
   squareArr.push(col1.slice(0, 3)) 
   squareArr.push(col2.slice(0, 3))
   squareArr.push(col3.slice(0, 3));
   squareArr.join().split(",");
 }else if(square === 5) {
   squareArr.push(col1.slice(3, 6)) 
   squareArr.push(col2.slice(3, 6))
   squareArr.push(col3.slice(3, 6));
   squareArr.join().split(",");
 }else if(square === 6) {
   squareArr.push(col1.slice(6, 9)) 
   squareArr.push(col2.slice(6, 9))
   squareArr.push(col3.slice(6, 9));
   squareArr.join().split(",");
 }else if(square === 7) {
   squareArr.squarepush(col1.slice(0, 3)) 
   squareArr.push(col2.slice(0, 3))
   squareArr.push(col3.slice(0, 3));
   squareArr.join().split(",");
 }else if(square === 8) {
   squareArr.push(col1.slice(3, 6)) 
   squareArr.push(col2.slice(3, 6))
   squareArr.push(col3.slice(3, 6));
   squareArr.join().split(",");
 }else if(square === 9) {
   squareArr.push(col1.slice(6, 9)) 
   squareArr.push(col2.slice(6, 9))
   squareArr.push(col3.slice(6, 9));
   squareArr.join().split(",");
 }
 //convert array of strings to array of ints
 square = squareArr.map(Number);
 return square;
}

  //let sumOfColumn = getColumn.reduce((total, value) => total + value);
  //let sumOfSquare = getSquare.reduce((total,value) => total + value);
  function checkCol(col) {
    if(sumOfColumn !== 45) {
      //see missing numbers and make a guess
     }
    }
  function checkRow(row) {
    if(sumOfRow !== 45) {
      //see missing numbers and make a guess
    }
  }
  function checkSquare(square) {
    if(sumOfSquare !== 45) {
      //see missing numbers and make a guess
    }
  }
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sudoku</h1>
        </header>
        <p className="App-intro"> Whats going on?
        </p>
        <Sudoku />
      </div>
    );
  }
}



