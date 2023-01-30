

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEl)

let count=0
function increment(){
    count +=1
    // document.getElementById("count-el").innerText = 5
    countEl.textContent=count
    return count
}
function save(){
    let saves=count +"  -  "
    saveEl.textContent +=saves
   countEl.textContent=0
   count=0
    

}
