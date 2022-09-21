const cardContainer = document.querySelectorAll('.cardSpace');
let result = drawSeq(); //random set of cards
console.log(result.length)
for(let i = 0; i<cardContainer.length; i++) {
    let img = document.createElement('img');
    img.src = cardDeck[result[i]].face__src;
    cardContainer[i].appendChild(img);
    cardContainer[i].addEventListener('click', () => {
        img.src = cardDeck[result[i]].src;
    })

}





function drawSeq() {
    let arr = [];
    for(let i = 0; i<cardContainer.length/2;i++) {
        let random = Math.floor(Math.random() * cardDeck.length );
        if(!arr.includes(random) ) {
            arr.push(random, random)
        } else {
            i--;
        }
        
    } 
    arr.sort(() => .5 - Math.random() );
    return arr
}