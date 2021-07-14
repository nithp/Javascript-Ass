let cards=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpUu9V6R0ThfLlOthCNl-_Qb9X9bHKQCT8w&usqp=CAU",//each card
        value:1,        //to check if same 
        status:"closed" //by default closed
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpUu9V6R0ThfLlOthCNl-_Qb9X9bHKQCT8w&usqp=CAU",
        value:1,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZXd2ltoQEutTc45P9BXGw8fmSiLFQN9Y1g&usqp=CAU",
        value:2,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZXd2ltoQEutTc45P9BXGw8fmSiLFQN9Y1g&usqp=CAU",
        value:2,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdEEYcHnWd9jw9sGtFLiJEPqxGz-rNDDqOg&usqp=CAU",
        value:3,
        status:"closed"

    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdEEYcHnWd9jw9sGtFLiJEPqxGz-rNDDqOg&usqp=CAU",
        value:3,
        status:"closed"

    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhyHCu6WN_eemazLB3YTPLEjBOzmroA_-mA&usqp=CAU",
        value:4,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhyHCu6WN_eemazLB3YTPLEjBOzmroA_-mA&usqp=CAU",
        value:4,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9eUQQat22DzSUkV0yUGNtUYH9HhkrWZweQ&usqp=CAU",
        value:5,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9eUQQat22DzSUkV0yUGNtUYH9HhkrWZweQ&usqp=CAU",
        value:5,
        status:"closed"
    },

  
]




// durnsten shuffling algorithm 

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));   //my element is already i, so I want to swap it with something greater so i+1
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            //alert("game over");
            location.reload();

        }
        
    }

    displayCards(cards);

}













