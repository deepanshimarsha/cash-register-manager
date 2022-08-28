var inputBill = document.querySelector("#input-bill")
var inputCash = document.querySelector("#input-cash")
var btnCheck = document.querySelector(".btn-check")
var errorMsg = document.querySelector("#error-message")
var noteTableCell = document.querySelectorAll(".no-of-notes")

var availableNotes = [2000,500,100,20,10,5,1]

function clickHandler(){
    errorMsg.style.display ="none"
    if (inputBill.value > 0){
        if(inputCash.value >= inputBill.value){
            console.log(inputBill.value, inputCash.value)
            const balAmt = inputCash.value - inputBill.value
            calculateChange(balAmt)
        }else{
            console.log(inputBill.value, inputCash.value)
           showMessage("Cash given should be greater or equal than bill amount ")
        }

    }else{
        showMessage("Bill amount should be greater than zero")
    }
}

function hideMessage(message){
    errorMsg.style.display = "none";
}

function showMessage(message){
    errorMsg.style.display = "block"
    errorMsg.innerText = message
}

function calculateChange(amt){

    
    for (let i=0 ; i < availableNotes.length ; i++){
        const numOfNotes =  Math.trunc(
            amt / availableNotes[i]
        )
        amt = amt%availableNotes[i]
        noteTableCell[i].innerText = numOfNotes
    }
}


btnCheck.addEventListener("click", clickHandler)