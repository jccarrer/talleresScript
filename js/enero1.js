var aqui="";


// function comprobar(esto){
// if(aqui==""){
//     aqui=document.getElementsByTagName("body")[0].innerHTML;}
//     console.log(aqui[0]);
//     var y = document.getElementsByTagName("BODY")[0].innerHTML=aqui.split(esto).join("<b style='background:yellow'>"+esto+"</b>");     
//     console.log(y);
// }


function onoff(){
  var esto = 'poema';
  var currentvalue = document.getElementById('onoff').value;
  aqui=document.getElementsByTagName("body")[0].innerHTML;
  
  if(currentvalue == "Off"){
    
    console.log("holaaa1");
    // comprobar(esto);
    // var y = document.getElementsByTagName("BODY")[0].innerHTML=aqui; 
            document.getElementsByTagName("body")[0].innerHTML=aqui.split(esto).join("<b style='background:white'>"+esto+"</b>"); 
            document.getElementById("onoff").value="On";
                //  console.log(y);
  }else{
    
    console.log("holaaa2");
            document.getElementsByTagName("body")[0].innerHTML=aqui.split(esto).join("<b style='background:yellow'>"+esto+"</b>");     
            document.getElementById("onoff").value="Off";

    
  }
  
  
  
  function onoff(){
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "Off"){
    document.getElementById("onoff").value="On";
  }else{
    document.getElementById("onoff").value="Off";
  }
}
}