const greatPolitician = ['Winston Churchill', 'Joseph Stalin', 'Margareth Thatcher', 'Alexander the Great', 'Theodor Rousevelt', 'Ronald Reigan', 'Napoleon'];
const realm = ['Politics', 'Education', 'Religion', 'Family', 'Love', 'Retirement'];
const sentences = ['total failure', 'complete nonsense', 'hot potato', 'cruel thing', 'mess'];

const randomFunc = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const displayGreatSentence = () => {
    console.log(`${randomFunc(greatPolitician)} once said: "${randomFunc(realm)} is ${randomFunc(sentences)}"`);
}

displayGreatSentence();
displayGreatSentence();
displayGreatSentence();