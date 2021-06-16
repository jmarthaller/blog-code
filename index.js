

const mostFrequentAppearance = array => {
let mostFrequent = 1;
let occurrence = 0;
let item;
for (let i = 0; i < array.length; i++) {
for (let j = i; j < array.length; j++) {
if (array[i] === array[j]) {
occurrence++;}
 if (mostFrequent < occurrence) {
    mostFrequent = occurrence;
item = array[i];
                                }
        }
        occurrence = 0;
    }
return item;
}

console.log(mostFrequentAppearance([1, 2, 3, 3, 3, 4]))



