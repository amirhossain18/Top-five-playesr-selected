// ---------------create function of get name and set name
function playerNameget(playerbtnID){
    const playerNameID= document.getElementById(playerbtnID);
    const playerName=playerNameID.innerText;
    console.log(playerName);
    const toplist= document.getElementById('top-list')
    const li =document.createElement('li');
    li.innerText= playerName;
    toplist.appendChild(li);
    const item= document.getElementById('top-list')
  const selectedPlayerNum=(item.childElementCount);
}


// -------------------- create disabled function
function disabledee(id){
    const btn= document.getElementById(id)
    btn.disabled = true;
    btn.style.backgroundColor='gray';
}
// -------------------- 
function totalPlayerCost(){
   
      const playerCostFieldID= document.getElementById('per-player-cost-field');
      const playerCostFieldString= playerCostFieldID.value
      const perPlayerCost= parseFloat(playerCostFieldString);
       const item= document.getElementById('top-list')
       const selectedPlayerNum=(item.childElementCount);
       const totalPlayerCost= selectedPlayerNum* perPlayerCost
    //    console.log( totalPlayerCost)
    const setfield= document.getElementById('total-player-cost')
       setfield.innerText= totalPlayerCost
}


function totalCost(){
    const playerCost= document.getElementById('total-player-cost')
    const playerCostString= playerCost.innerText;
    const playerCostll= parseInt(playerCostString);
  const totalExpanseID= document.getElementById('total-expense')
  const managerCostID= document.getElementById('manegar-field');
  const managerCostString= managerCostID.value
  const managerCost= parseInt(managerCostString)
  const coachCostID= document.getElementById('coach-field');
  const coachCostString= coachCostID.value
  const coachCost=  parseInt(coachCostString);
  console.log( playerCostll)
  const allEveryCost=  playerCostll+coachCost+managerCost;
   totalExpanseID.innerText=allEveryCost;
}
