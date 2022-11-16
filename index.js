let numberOfPeople=document.querySelector("#numberOfPeople");
let bill=document.querySelector("#bill");
let tipAmountContainer=document.querySelector("#tipAmountContainer")
let totalContainer=document.querySelector("#totalContainer")
let buttonContainer=document.querySelector(".buttonsContainer");
let customButton=document.querySelector("#customButton");
let tipButtonList=document.querySelectorAll(".tipButton");
let reset=document.querySelector("#reset");

let peopleError=document.querySelector("#peopleError");
let billError=document.querySelector("#billError");


numberOfPeople.addEventListener("keydown",tipCalculus);
bill.addEventListener("keydown",tipCalculus);
buttonContainer.addEventListener("click",tipCalculus);
customButton.addEventListener("keydown",tipCalculus);


buttonContainer.addEventListener("click",getTip);

reset.addEventListener("click", resetData)

let tip=0

function getTip(eventTip) {

    
    if (eventTip.target.classList.value=="tipButton") {
        tip=eventTip.target.value
        customButton.value=""
        for (tipButton of tipButtonList) {
            if (tipButton==eventTip.target) {
                tipButton.classList.add("activeTipButton");
                tipButton.classList.remove("tipButton");
            }
            else {
                tipButton.classList.add("tipButton");
                tipButton.classList.remove("activeTipButton");
            }
        }
        
    }

    else if (eventTip.target.id=="customButton") {
        
        for (tipButton of tipButtonList) {
            tipButton.classList.add("tipButton");
            tipButton.classList.remove("activeTipButton");
        }

        customButton.value=""
        tip=0
        customButton.addEventListener("keydown",getCustomTip);

        function getCustomTip() {

            setTimeout(function() {
                tip=customButton.value/100;
            },0)

        }
    }
}



function tipCalculus() {
    
    setTimeout(
        
        function() {

            reset.classList.add("resetButton");
            reset.classList.remove("inactiveResetButton");
            
            peopleError.classList.remove("error");
            peopleError.classList.add("inactive");
            numberOfPeople.classList.remove("errorInput");

            billError.classList.remove("error");
            billError.classList.add("inactive");
            bill.classList.remove("errorInput");

            tipError.classList.remove("error");
            tipError.classList.add("inactive");
            customButton.classList.remove("errorInput");

            n=numberOfPeople.value;
            b=bill.value;

        
            if (parseInt(n)==0) {
                tipAmountContainer.innerText="$0.00";
                totalContainer.innerText="$0.00";

                peopleError.classList.add("error");
                peopleError.classList.remove("inactive");
                
                if (n>0) {
                    peopleError.innerText="Can´t be decimal"
                }

                else {
                    peopleError.innerText="Can´t be zero"
                }
                


                numberOfPeople.classList.add("errorInput");
            }
            
            else if (n<0) {
                tipAmountContainer.innerText="$0.00";
                totalContainer.innerText="$0.00";

                peopleError.classList.add("error");
                peopleError.classList.remove("inactive");
                peopleError.innerText="Can´t be negative"

                numberOfPeople.classList.add("errorInput");
                
            }
            
            else if (n!=parseInt(n)) {
                tipAmountContainer.innerText="$0.00";
                totalContainer.innerText="$0.00";

                if (n!="") {
                    peopleError.classList.add("error");
                    peopleError.classList.remove("inactive");
                    peopleError.innerText="Can´t be decimal"
    
                    numberOfPeople.classList.add("errorInput");

                }
                
                
            }


            else if (n=="" || b=="") {
                tipAmountContainer.innerText="$0.00";
                totalContainer.innerText="$0.00";
            }
            
            else {
                tipAmount=(b/n)*tip;
                total=(b/n)*(parseFloat(tip)+1);


                tipAmountContainer.innerText="$"+tipAmount.toFixed(2);
                totalContainer.innerText="$"+total.toFixed(2);

            } 


            if (b<0) {
                tipAmountContainer.innerText="$0.00";
                totalContainer.innerText="$0.00";

                billError.classList.add("error");
                billError.classList.remove("inactive");
                billError.innerText="Can´t be negative"

                bill.classList.add("errorInput");        

            }

            if (tip<0) {
                tipAmountContainer.innerText="$0.00";
                totalContainer.innerText="$0.00";

                tipError.classList.add("error");
                tipError.classList.remove("inactive");
                tipError.innerText="Can´t be negative"

                customButton.classList.add("errorInput");           

            }
        }
        
        ,1)
}    


function resetData() {

    reset.classList.remove("resetButton");
    reset.classList.add("inactiveResetButton");

    tip=0
    for (tipButton of tipButtonList) {
        tipButton.classList.add("tipButton");
        tipButton.classList.remove("activeTipButton");
    }
    numberOfPeople.value=""
    bill.value=""
    customButton.value=""
    tipAmountContainer.innerText="$0.00";
    totalContainer.innerText="$0.00";
}