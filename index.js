const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}
function cleardisplay(){
    display.value = ""
}
function calculate(){
    
    try{
    display.value = eval(display.value)
    }
    catch(error){
    display.value = "error";
    setTimeout(function() {
        display.value = ""
    }, 1000);
    }
}
function Opencontactinfo(){
    window.open ("Contacts.html")
}