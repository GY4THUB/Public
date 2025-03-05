let display = document.getElementById("display");
let result = document.getElementById("result");

function submitBtn() {
    
    let text = ["Yes", "No", "Absolutely Not", "Probably Yes", "Maybe", "Don't ask me that", "Try again later", "I don't know", "100%", "Slightly Yes"];
    
    let random = Math.floor(Math.random() * text.length);
    
    if(display.value){
    
    result.style.color = "aliceblue";
    result.classList.remove("color");
    
    setTimeout(() => {
    result.style.color = "#252525";
        result.textContent = text[random];
    }, 1000);
    } else{
        
        result.classList.add("color");
        result.style.color = "aliceblue";
        result.textContent = "Please ask something."
        
    }
    
    
    
}