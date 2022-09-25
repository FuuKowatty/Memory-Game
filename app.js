const cardContainer = document.querySelectorAll('.cardSpace');
let result = drawSeq(); //random set of cards
let counter = 0;
let prevChose = [];

cardContainer.forEach((e,i) => {
    const {id, name,src,face__src} = cardDeck[ result[i] ];
    setImages(i, face__src);
    cardContent(i, src, id, face__src);
})




function drawSeq() {
    let arr = [];
    for(let i = 0; i<cardContainer.length/2;i++) {
        let random = Math.floor(Math.random() * cardDeck.length );
        !arr.includes(random) ? arr.push(random, random) : i--;
        
    } 
    arr.sort(() => .5 - Math.random() );
    return arr
}

function setImages(i, face__src) {
    let img = document.createElement('img');
    img.src = face__src
    cardContainer[i].appendChild(img);
}


function cardContent(i, src, id, face__src ) {

    cardContainer[i].addEventListener('click', seeCard);

        function seeCard(e) {
            let el = e.currentTarget; 
            let prevChoseContainer = prevChose[1]
            el.firstChild.src = src;

            if(el !== prevChose[1]) {
                counter++
            }

            if(el === prevChose[1]) return
            if(counter%2===0) { //every second click it will be decided about win 
                if(id === prevChose[0]) {
                    winPair(el, prevChoseContainer)
                } else {
                    lostPair(el, face__src, prevChoseContainer)
                }
            }

            counter%2===1 ? prevChose = [id, el] : prevChose = [];
            
        }


}

function winPair(e, prevEl) {
    setTimeout( () => {
        e.innerHTML = '';
        prevEl.innerHTML = '';
    },400)
}

function lostPair(e, face__src, prevEl) {
    setTimeout( () => {
        prevEl.firstChild.src = face__src
        e.firstChild.src = face__src;
    },400)

}

