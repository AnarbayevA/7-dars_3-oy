var elMoney = document.querySelector(".form__selector")
var elNumber = document.querySelector(".form__number")
var elForm = document.querySelector(".form")
var elBtn = document.querySelector(".form__btn")
var elHeader = document.querySelector(".header")

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    console.log(elNumber.value);
    var result
    
    if(elMoney.value === "usd"){
        result = elNumber.value * 10950;
        console.log(result);
        alert(result + " So'm")
    }

    else if(elMoney.value ==="rub"){
        result = elNumber.value * 145;
        console.log(result);
        alert(result + " So'm")
    }

    else if(elMoney.value ==="evro"){
        result = elNumber.value * 11200;
        console.log(result);
        alert(result + " So'm")
    }
})
