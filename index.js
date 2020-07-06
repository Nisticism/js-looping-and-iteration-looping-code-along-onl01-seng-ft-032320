// Code your solutions in this file


function writeCards(names) {
    const cards = []
    for (let i = 0; i < names.length; i++) {

        cards.push('Thank you, ' + names[i] + ', for the wonderful surprise gift!');
    }
    return cards;
}

function countDown(number) {
    let i = 0;
    while (i <= number) {
      console.log(number - i);
      i++;
    }
}
