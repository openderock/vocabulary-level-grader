const vocabulary = require('vocabulary-list-statistics');
const extract = require('extract-lemmatized-nonstop-words');
const { sum, max } = require('lodash');

const wordsTable = new Map();
vocabulary.forEach(item => {
    wordsTable.set(item.word, item);
});
/**
 * 
 * @param {String} text 
 */
function grade(text) {
    const tokens = extract(text, []);
    const output = {
        meta: {},
        words: new Map(),
    };
    let ranks = [];
    tokens.forEach(token => {
        const vocabulary = wordsTable.get(token.vocabulary);
        if (!vocabulary) {
            ranks.push(0);
            return;
        }
        // if (token.pos == 'NN' && vocabulary.rank > 5000) return;// It's proper noun
        ranks.push(vocabulary.rank);
        output.words.set(vocabulary.word, (output.words.get(vocabulary.word) || 0) + 1);
    });
    // Arithmetic mean of vocabulary ranks of the text.
    output.meta.words = tokens.length;
    output.meta.mean = sum(ranks) / tokens.length;
    output.meta.max = max(ranks);
    // Based on https://languagelearning.stackexchange.com/a/3065
    output.meta.levels = {
        A1: ranks.filter(rank => rank <= 600).length * 100 / ranks.length,
        A2: ranks.filter(rank => rank <= 1200).length * 100 / ranks.length,
        B1: ranks.filter(rank => rank <= 2500).length * 100 / ranks.length,
        B2: ranks.filter(rank => rank <= 5000).length * 100 / ranks.length,
        C1: ranks.filter(rank => rank <= 10000).length * 100 / ranks.length,
        C2: ranks.filter(rank => rank <= 20000).length * 100 / ranks.length,
    };
    output.meta.grade = 'C2';
    for (const level in output.meta.levels) {
        if (output.meta.levels[level] >= 90) {
            output.meta.grade = level;
            break;
        }
    }
    // output.meta.grade = output.meta.levels.C2 < 90 ? 'C2' : Object.keys(output.meta.levels)[Object.values(output.meta.levels).indexOf(100)];
    output.words = [...output.words].sort((a, b) => a[1] <= b[1] ? 1 : -1);
    return output;
}

module.exports = grade;