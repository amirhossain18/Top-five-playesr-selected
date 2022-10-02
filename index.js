
// ------------------- get player name from list &&  set top five

const palyerName= document.getElementsByClassName('player-btn')
for(player of palyerName){
    // console.log(player);
        player.addEventListener("click", function (event) {
         const playerNameText= event.target.parentNode.childNodes[3].innerText;
         const playerbutton= event.target.parentNode.childNodes[7];
         const setfieldName = document.getElementById('top-list');        
         const playerNumber =(setfieldName.childNodes.length)
      
                 if(playerNumber >4){
                      alert('You cannot select more than five')
                         return;   
                 }
           const li = document.createElement('li');
           li.innerText=playerNameText;
           setfieldName.appendChild(li);
           playerbutton.setAttribute("disabled", true)    
           playerbutton.style.backgroundColor='gray'
          
    })
}

// ------------------------------------------calculate player const
const totalPlayercostBtn= document.getElementById('player-cost-btn')
totalPlayercostBtn.addEventListener('click', function (event) {
  const playerCostFieldID= document.getElementById('per-player-cost-field');
  const perPlayerCost = playerCostFieldID.value
  const setfieldName = document.getElementById('top-list');
  const playerNumber =setfieldName.childNodes.length
  const playercost= playerNumber *  perPlayerCost
  const setPlayerCost= document.getElementById('total-player-cost')
  setPlayerCost.innerText= playercost
    
 
})


   //  -----------------------------------call total cost function
document.getElementById('Calculate-Total-Cost').addEventListener ("click", function() {
    totalCost()
})