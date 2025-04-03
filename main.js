let bill = 0
let tipPerecentage = 0
let numberOfPeople = 0
let buttonSelected = null


let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()

}

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople)

function receiveNumberOfPeople(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentage(value){
    
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
    }
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    tipPerecentage = value/100

    customTipInput = document.querySelector("#custom-tip")
    customTipInput.value = ""
    

    calculate()
}
function receiveCustomTipPercentage(){
    let customTipInput = document.querySelector("#custom-tip")
    tipPerecentage = customTipInput.valueAsNumber / 100

    if(buttonSelected !== null){
     buttonSelected.classList.remove("button-selected")
    buttonSelected = null
    }


    calculate()
    
}


function calculate(){
    if(bill !== 0 && tipPerecentage !== 0 && numberOfPeople !== 0){
        let tipAmountStrong = document.querySelector(".amount strong")

        let tipAmountPerson = (bill * tipPerecentage)/numberOfPeople

        tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")
        let total = (bill / numberOfPeople) + tipAmountPerson

        totalStrong.innerText = `$${total.toFixed(2)}`
    }
    else {
        console.log("Ainda não é possível calcular")
    }
}

function reset(){
    billInput.value = ""
    numberOfPeopleInput.value = ""
    bill = 0
    numberOfPeople = 0
       
    
    removeClassButtonSelected()
    document.querySelector("#custom-tip").value = ""
    tipPerecentage = 0
    document.querySelector(".amount strong").innerText = "$0.00"
    document.querySelector(".total strong").innerText = "0.00"
}

function removeClassButtonSelected(){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}