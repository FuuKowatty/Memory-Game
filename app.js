const cardContainer = document.querySelectorAll('.cardSpace');
let result = drawSeq(); //random set of cards
let prevChose = [];
let counter = 0;
let v;

for(let i = 0; i<cardContainer.length; i++) { 



    let img = document.createElement('img');
    img.src = cardDeck[result[i]].face__src;
    cardContainer[i].appendChild(img);

    cardContainer[i].addEventListener('click', moveCard)
       
        function moveCard() {
        counter++;           

        img.src = cardDeck[result[i]].src;
        let prevValueContainer = prevChose[1]

        if(prevChose[0] === cardDeck[result[i]].id && prevValueContainer !== cardContainer[i]) {
            setTimeout(() => {
                cardContainer[i].innerHTML = ''; //win
                prevValueContainer.innerHTML = '';
            }, 500)
        } else if(counter%2 ===0 && prevValueContainer !== cardContainer[i]) { //lost

                setTimeout(() => {
                    img.src = cardDeck[result[i]].face__src; 
                    prevValueContainer.firstChild.src = './img/faceSide.png';
                },500)
        }
            prevChose = [cardDeck[result[i]].id, cardContainer[i] ];

    }
    

    
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