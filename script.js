 var number = 0
 console.log("number",number)
 var result = 0;
 var el = document.getElementById("number")
// valor actual
function getNumber(){
 number =   Number(document.getElementById("number").innerText)
}

 function increase(){
    getNumber()
    console.log("b", number)
    result = number + 1;
    console.log("result", result)
    // return result;
    setNumber()
    colors()
 }
//  introduce el resultado actual
function setNumber(){
document.getElementById("number").innerText = result
} 
function decrease(){
    getNumber()
    console.log("valor", number)
    result = number - 1;
    console.log("resta", result)
    setNumber()
    colors()
}
function reset(){
    result = 0;
    setNumber()
    colors()
}

// change number color
function colors(){
    if(result == 0){
        el.style.color = "#9129dd";
    }
    
    else if(result > 0){
        el.style.color = "green"
    }
    else if(result < 0){
        el.style.color = "red"
    }
}
 
