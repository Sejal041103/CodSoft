function display(value){
    document.getElementById("result").value+=value
  }
  function myFunction(event) {
             if (event.key == '0' || event.key == '1'
                 || event.key == '2' || event.key == '3'
                 || event.key == '4' || event.key == '5'
                 || event.key == '6' || event.key == '7'
                 || event.key == '8' || event.key == '9'
                 || event.key == '+' || event.key == '-'
                 || event.key == '*' || event.key == '/')
                 document.getElementById("result").value += event.key;
               }
  
  
                 //  var cal = document.getElementById("calc");
                 // cal.onkeyup = function (event) {
                 //   if (event.keyCode === 13) {
                 //     console.log("Enter");
                 //     let p = document.getElementById("result").value
                 //     console.log(p);
                 //     calculate();
                 //   }
                 // }
  
                 function calculate(){
                   let p=document.getElementById("result").value
                   // if(p=" "){
                   //  document.getElementById("result").value= "ERROR"
                   // }
                   // else{
                   let q=math.evaluate(p)
                   document.getElementById("result").value=q
                 // }
                 }
                 function ClearScreen(){
                   document.getElementById("result").value=" "
                 }
                 function back(){
                   var b = document.getElementById("result").value;
                   scr = b.substring(0, b.length - 1);
                   document.getElementById("result").value = scr;
                 }
  