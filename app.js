const cardContainer = document.querySelectorAll('.cardSpace');

cardContainer.forEach(e => {
    let img = document.createElement('img');
    let result = drawSeq();

})


function drawSeq() {
    let arr = [];
    for(let i = 0; i<cardContainer.length-1; i++) {
        let random = Math.floor(Math.random()* cardDeck.length-1);
        console.log(random)

    }
}