

// ---------------------get player name and set order list use function



document.getElementById('btn-sakib').addEventListener("click", function() {
    const sakib= playerNameget('player-sakib')
    disabledee('btn-sakib')
 })


document.getElementById('btn-tamim').addEventListener("click", function() {
     const tamim= playerNameget('player-tamim');
     disabledee('btn-tamim')    
 })
 document.getElementById('btn-fiz').addEventListener("click", function() {
     const MusTafiz= playerNameget('player-fiz')
     disabledee('btn-fiz')
   
 })
 document.getElementById('btn-mahmudullah').addEventListener("click", function() {
     const Mahmudullah= playerNameget('player-mahmudullah')
     disabledee('btn-mahmudullah')
 })
 document.getElementById('btn-mas').addEventListener("click", function() {
     const Masrafi= playerNameget('player-mas')
     disabledee('btn-mas')
 })
 document.getElementById('btn-rubel').addEventListener("click", function() {
     const Rubel= playerNameget('player-rubel')
     disabledee('btn-rubel')
 })
 document.getElementById('btn-sabbir').addEventListener("click", function() {
     const sabbir= playerNameget('player-sabbir')
     disabledee('btn-sabbir')
 })
 
 document.getElementById('btn-sommo').addEventListener("click", function() {
     const sommo= playerNameget('player-sommo')
     disabledee('btn-sommo')
 })
 
 document.getElementById('btn-musi').addEventListener("click", function() {
     const Musfiq= playerNameget('player-musi')
     disabledee('btn-musi')
 })
// ----------------------------- calcualate total player cost by using function

 document.getElementById('player-cost-btn').addEventListener ("click", function() {
    totalPlayerCost()

})

//  -----------------------------------calculate total cost function
document.getElementById('Calculate-Total-Cost').addEventListener ("click", function() {
    totalCost()
})
