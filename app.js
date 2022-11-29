//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//event listener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
})

//function calculate
function calculate(){
    
    let buttonText = this.innerText;
    if(buttonText === "C"){
        output.innerText = "";
        result.innerText = "0";
        return;
    }

    if(buttonText === "DEL"){
        output.textContent = output.textContent.substring(0,output.textContent.length-1);
        return
    }

    if(buttonText === "="){
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwords";
        output.style.animationFillMode = "forwords";
    }

    else{

        output.textContent += buttonText;
        return;
    }
}