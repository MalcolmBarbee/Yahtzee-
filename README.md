# Yahtzee!
React based Yahtzee game <br>
The Classic click, score, and shout game

## Installation

NPM INSTALL <br>
NPM START

## Usage

```javascript
import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Rules

Roll a die to see who starts. Play continues clockwise.

![2019-09-04 10 21 11 (1)](https://user-images.githubusercontent.com/43822080/64263816-4a97fb00-cefe-11e9-8610-7220bf4efff5.gif)

Roll dice to get the highest score after all 13 rounds.

### Gameplay

Roll up to 3 times each turn to rack up the best possible score.

Decide which dice combo you're going for.

After each turn, write your score in one empty box on the score card.

### Scoring

3 of a kind: you must have at least three of the same die faces.

4 of a kind: you must have at least four of the same die faces.

Full house: you have both a 3 of a kind, and a pair and give 25 points.

Small Straight: 4 consecutive faces and give 40 points.

Large Straight: 5 consecutive faces and give 30 points.

Chance: the sum of all your die faces.

Yahtzee: you must have at least five of the same die faces and score 50 points.

## Examples

![2019-09-04 10 27 57 (1)](https://user-images.githubusercontent.com/43822080/64264525-72d42980-ceff-11e9-8e3d-b79c46f503bb.gif)
