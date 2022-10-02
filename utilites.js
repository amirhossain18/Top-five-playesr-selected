
function totalCost(){
    const playerCostBtn= document.getElementById('total-player-cost')
    const playerCostString= playerCostBtn.innerText;
    const playerCostall= parseInt(playerCostString);
  const totalExpanseID= document.getElementById('total-expense')
  const managerCostID= document.getElementById('manegar-field');
  const managerCostString= managerCostID.value
  const managerCost= parseInt(managerCostString)
  const coachCostID= document.getElementById('coach-field');
  const coachCostString= coachCostID.value
  const coachCost=  parseInt(coachCostString);
  const allEveryCost=  playerCostall+coachCost+managerCost;
   totalExpanseID.innerText=allEveryCost;
}
