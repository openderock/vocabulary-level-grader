# Vocabulary Level Grader
Analyzes the given text and determines what's the vocabulary level based on CEFR levels.

## Features
- Calculates [Arithmetic mean](https://en.wikipedia.org/wiki/Arithmetic_mean) of vocabulary ranks of the text.
- Calculates Maximum of vocabulary ranks of the text.
- Grades text vocabulary level based on [CEFR levels](https://www.fluentin3months.com/cefr-levels/)

## Install
Using Yarn:
```
yarn add vocabulary-level-grader
```
Using NPM:
```
npm i --save vocabulary-level-grader
```

## Usage
```javascript
const grade = require('vocabulary-level-grader');

const result = grade(`
    It was the hunter's first time outside Montana.
    He woke, stricken still with the hours-old vision of ascending through rose-lit cumulus,
    of houses and barns like specks deep in the snowed-in valleys,
    all the scrolling country below looking December—brown and black hills streaked with snow,
    flashes of iced-over lakes,
    the long braids of a river gleaming at the bottom of a canyon.
    Above the wing the sky had deepened to a blue so pure he knew it would bring tears to his eyes if he looked long enough.
`);

console.log(result);
```
logs:
```javascript
{
    "meta": {
        "words": 59,
        "grade": "C2",
        "mean": 2004.7796610169491,
        "max": 9874,
        "levels": {
            "A1": 35.714285714285715,
            "A2": 42.857142857142854,
            "B1": 53.57142857142857,
            "B2": 71.42857142857143,
            "C1": 85.71428571428571,
            "C2": 100
        }
    },
    "words": [
        ["with", 2],
        ["snow", 2],
        ["look", 2],
        ["long", 2],
        ["december", 1],
        ["enough", 1],
        ["hill", 1],
        ["hunter", 1],
        ["streak", 1],
        ["still", 1],
        ["flash", 1],
        ["hour", 1],
        ["ice", 1],
        ["vision", 1],
        ["over", 1],
        ["through", 1],
        ["lake", 1],
        ["lit", 1],
        ["time", 1],
        ["barn", 1],
        ["braid", 1],
        ["deep", 1],
        ["river", 1],
        ["valley", 1],
        ["gleam", 1],
        ["scroll", 1],
        ["bottom", 1],
        ["below", 1],
        ["canyon", 1],
        ["first", 1],
        ["above", 1],
        ["black", 1],
        ["wing", 1],
        ["old", 1],
        ["sky", 1],
        ["rose", 1],
        ["deepen", 1],
        ["like", 1],
        ["blue", 1],
        ["all", 1],
        ["pure", 1],
        ["outside", 1],
        ["stricken", 1],
        ["eye", 1],
        ["tear", 1],
        ["bring", 1],
        ["knew", 1],
        ["ascend", 1],
        ["brown", 1],
        ["country", 1],
        ["woke", 1],
        ["house", 1]
    ]
}
```

## Reference
- https://languagelearning.stackexchange.com/a/3065
