const cardContainer = document.querySelectorAll('.cardSpace');
let result = drawSeq(); //random set of cards
let prevChose = ['nothing'];
let counter = 0;


for(let i = 0; i<cardContainer.length; i++) { 

    let img = document.createElement('img');
    img.src = cardDeck[result[i]].face__src;
    cardContainer[i].appendChild(img);
    cardContainer[i].addEventListener('click', () => {
       
        counter++
        img.src = cardDeck[result[i]].src;
        if(prevChose[0] === cardDeck[result[i]].id && prevChose[1] !== cardContainer[i]) {
                cardContainer[i].innerHTML = '';
                prevChose[1].innerHTML = '';

        } else if(counter%2 ===0 && prevChose[1] !== cardContainer[i]) {
                let container = prevChose[1]
                setTimeout(() => {
                    img.src = cardDeck[result[i]].face__src; 
                    container.firstChild.src = './img/faceSide.png';
                },1000)


        }

            prevChose = [cardDeck[result[i]].id, cardContainer[i] ]
    })

}





function drawSeq() {
    let arr = [];
    for(let i = 0; i<cardContainer.length/2;i++) {
        let random = Math.floor(Math.random() * cardDeck.length );
        !arr.includes(random) ? arr.push(random, random) : i--;
        
    } 
    arr.sort(() => .5 - Math.random() );
    return arr
}