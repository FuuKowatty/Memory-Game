const cardContainer = document.querySelectorAll('.cardSpace');
let result = drawSeq(); //random set of cards
// for(let i = 0; i<cardContainer.length; i++) {
//     let img = document.createElement('img');
//     img.src = cardDeck[i].face__src;
//     cardContainer[i].appendChild(img)
// }
console.log(result)




function drawSeq() {
    let arr = [];
    for(let i = 0; i<cardContainer.length;i++) {
        let random = Math.floor(Math.random() * cardDeck.length );
        if(!arr.includes(random) ) {
            arr.push(random, random)
        }
        arr.sort(() => .5 - Math.random() );
    } return arr
}