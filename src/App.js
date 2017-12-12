import React, { Component } from 'react';
import logo from './logo.svg';
import Sudoku from './Sudoku'
import './App.css';

export default class App extends Component {
function sudoku(puzzle) {
let nums = [1,2,3,4,5,6,7,8,9];

function buildArrayOfGuesses(row, col, square) {
  let numsToTry = [];
  let theRowArr = getRow(row, puzzle);
  numsToTry.push(findMissingNum(theRowArr));
  let theColArr = getColumn(col, puzzle);
  numsToTry.push(findMissingNum(theColArr));
  let theSquareArr = getSquare(square);
  numsToTry.push(findMissingNum(theSquareArr));
  //join array of arrays into one array
  let mergedArr = [].concat.apply([], numsToTry);
  //remove duplicates using filter
  let filteredArr = mergedArr.filter(function(num, pos, arr) {
    return arr.indexOf(num) == pos;
    })
   return filteredArr;
}
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
function getSquare(square) {
 let squareArr = []
  if(square === 1) {
   squareArr.push(getColumn(0,puzzle).slice(0, 3)) 
   squareArr.push(getColumn(1,puzzle).slice(0, 3))
   squareArr.push(getColumn(2,puzzle).slice(0, 3));
   squareArr.join().split(",");
 }else if(square === 2) {
   squareArr.push(getColumn(0,puzzle).slice(3, 6)) 
   squareArr.push(getColumn(1,puzzle).slice(3, 6))
   squareArr.push(getColumn(2,puzzle).slice(3, 6));
   squareArr.join().split(",");
 }else if(square === 3) {
   squareArr.push(getColumn(0,puzzle).slice(6, 9)) 
   squareArr.push(getColumn(1,puzzle).slice(6, 9))
   squareArr.push(getColumn(2,puzzle).slice(6, 9));
   squareArr.join().split(",");
 }else if(square === 4) {
   squareArr.push(getColumn(3,puzzle).slice(0, 3)) 
   squareArr.push(getColumn(4,puzzle).slice(0, 3))
   squareArr.push(getColumn(5,puzzle).slice(0, 3));
   squareArr.join().split(",");
 }else if(square === 5) {
   squareArr.push(getColumn(3,puzzle).slice(3, 6)) 
   squareArr.push(getColumn(4,puzzle).slice(3, 6)) 
   squareArr.push(getColumn(5,puzzle).slice(3, 6)) 
   squareArr.join().split(",");
 }else if(square === 6) {
   squareArr.push(getColumn(3,puzzle).slice(6, 9)) 
   squareArr.push(getColumn(4,puzzle).slice(6, 9)) 
   squareArr.push(getColumn(5,puzzle).slice(6, 9)) 
   squareArr.join().split(",");
 }else if(square === 7) {
   squareArr.push(getColumn(6,puzzle).slice(0, 3)) 
   squareArr.push(getColumn(7,puzzle).slice(0, 3)) 
   squareArr.push(getColumn(8,puzzle).slice(0, 3)) 
   squareArr.join().split(",");
 }else if(square === 8) {
   squareArr.push(getColumn(6,puzzle).slice(3, 6)) 
   squareArr.push(getColumn(7,puzzle).slice(3, 6)) 
   squareArr.push(getColumn(8,puzzle).slice(3, 6)) 
   squareArr.join().split(",");
 }else if(square === 9) {
   squareArr.push(getColumn(6,puzzle).slice(6, 9)) 
   squareArr.push(getColumn(7,puzzle).slice(6, 9)) 
   squareArr.push(getColumn(8,puzzle).slice(6, 9)) 
   squareArr.join().split(",");
 }
 //convert array of strings to array of ints
 let mergedArr = [].concat.apply([], squareArr);
 return mergedArr;
}
  
  function checkCol(col) {
    if(findTotal(col) !== 45) {
      //see missing numbers and make a guess
      }
    }
  function checkRow(row) {
    if(findTotal(row) !== 45) {
      //see missing numbers and make a guess
    }
  }
  function checkSquare(square) {
    if(findTotal(square) !== 45) {
      //see missing numbers and make a guess
    }
  }
  function findTotal(arr) {
    let total = arr.reduce(function(sum,num) {
      return sum + num;
    });
    return total;
  }
 //finds what numbers are missing in any array
  function findMissingNum(arr) {
    let missing = [];
    let arrLength = Math.max.apply(Math, arr);
    let newArr = arr.filter(function(num) {
      if(num !== 0) {
        return num;
      }
    });
    for(let i = 0; i < arrLength; i++) {
      if(arr.indexOf(i) < 0) {
        missing.push(i);
      }
    }
    return missing;
  }
  //store function calls in variables to use in makeGuess
}//end main

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



