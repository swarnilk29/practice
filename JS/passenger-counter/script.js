let newCount = document.getElementById("count")
let newSave = document.getElementById("save-el")

let count = 0

function increment(){
    count += 1
    // let newVal = count
    newCount.innerText = count
    // console.log (newVal)
}


function save() {
    let saveInfo = count + "-"
    // newSave.innerText += saveInfo  ref = mdn
    newSave.textContent += saveInfo
    countEl.textContent = 0 //after save it sets back count to 0
    count = 0

    console.log(count)
}
