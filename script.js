// exercice  
const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")


 function firstAction ()  {
   console.log("start")

 }

   function clock() {
     setTimeout(()=> {
   let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" +d.getSeconds())
 },3000);
 
    }
   

 function secondAction () {
    console.log("end")
 }



  firstAction()
  clock()
  secondAction ()

