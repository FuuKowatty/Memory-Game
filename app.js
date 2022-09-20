const cardContainer = document.querySelectorAll('.cardSpace');
console.log('length tablicy ' + cardDeck.length)
let result = drawSeq();
cardContainer.forEach(e => {
    let img = document.createElement('img');


})


function drawSeq() {
    let arr = [];
    for(let i = 0; i<cardContainer.length-1; i++) {
        let random = Math.floor(Math.random() * cardDeck.length );
        console.log(random)

    }
}