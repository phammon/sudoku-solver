import React, { Component } from 'react';
import logo from './logo.svg';
import Sudoku from './Sudoku'
import './App.css';

export default class App extends Component {
sudoku(puzzle) {
let nums = [1,2,3,4,5,6,7,8,9];
var newPuzzle = puzzle.map(function (nested) {
    return nested.map(function (element) {
        if(element < 1) {
          
        }else{
          return element;
        }
    });
});
let column0 = puzzle.map(function(value,index) { return value[0]; });
let column1 = puzzle.map(function(value,index) { return value[1]; });
let column2 = puzzle.map(function(value,index) { return value[2]; });
let column3 = puzzle.map(function(value,index) { return value[3]; });
let column4 = puzzle.map(function(value,index) { return value[4]; });
let column5 = puzzle.map(function(value,index) { return value[5]; });
let column6 = puzzle.map(function(value,index) { return value[6]; });
let column7 = puzzle.map(function(value,index) { return value[7]; });
let column8 = puzzle.map(function(value,index) { return value[8]; });

//squares are returned from left to right
function getSquare(col1, col2, col3, square) {
 let squareArr = []
  if(square === 1) {
   squareArr.push(col1.slice(0, 3)) 
   squareArr.push(col2.slice(0, 3))
   squareArr.push(col3.slice(0, 3));
   return squareArr.join().split(",");
 }else if(square === 2) {
   squareArr.push(col1.slice(3, 6)) 
   squareArr.push(col2.slice(3, 6))
   squareArr.push(col3.slice(3, 6));
   return squareArr.join().split(",");
 }else if(square === 3) {
   squareArr.push(col1.slice(6, 9)) 
   squareArr.push(col2.slice(6, 9))
   squareArr.push(col3.slice(6, 9));
   return squareArr.join().split(",");
 }else if(square === 4) {
   squareArr.push(col1.slice(0, 3)) 
   squareArr.push(col2.slice(0, 3))
   squareArr.push(col3.slice(0, 3));
   return squareArr.join().split(",");
 }else if(square === 5) {
   squareArr.push(col1.slice(3, 6)) 
   squareArr.push(col2.slice(3, 6))
   squareArr.push(col3.slice(3, 6));
   return squareArr.join().split(",");
 }else if(square === 6) {
   squareArr.push(col1.slice(6, 9)) 
   squareArr.push(col2.slice(6, 9))
   squareArr.push(col3.slice(6, 9));
   return squareArr.join().split(",");
 }else if(square === 7) {
   squareArr.squarepush(col1.slice(0, 3)) 
   squareArr.push(col2.slice(0, 3))
   squareArr.push(col3.slice(0, 3));
   return squareArr.join().split(",");
 }else if(square === 8) {
   squareArr.push(col1.slice(3, 6)) 
   squareArr.push(col2.slice(3, 6))
   squareArr.push(col3.slice(3, 6));
   return squareArr.join().split(",");
 }else if(square === 9) {
   squareArr.push(col1.slice(6, 9)) 
   squareArr.push(col2.slice(6, 9))
   squareArr.push(col3.slice(6, 9));
   return squareArr.join().split(",");
 }
}
//convert array of strings to array of integers
let square = getSquare(column0,column1,column2, 1).map(Number);

function fillSquareWithCorrectInts(col, row, square) {
  let sumOfColumn = col.reduce((total, value) => total + value);
  let sumOfRow = row.reduce((total, value) => total + value);
  let sumOfSquare = square.reduce((total,value) => total + value);
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



