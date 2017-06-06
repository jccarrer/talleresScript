function myFunction() {
    create();
    //document.getElementById("a").style.backgroundColor = "#ff0000";
    //*********************************************************************************
    // var x = document.getElementsByTagName("P");// selecciona todas las etiquetas <p>
    //     var i;
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.backgroundColor = "yellow";
    //     }//https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp
    //*********************************************************************************
  
  
  //***codigo del prof**  
        // var li = document.getElementsByTagName("P");
        // console.log(li);
        // for(let p of li){
        //     p.classList.add('highlight');
        // }
  //*********************  
    
    
    
    
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
         document.getElementById("a").innerHTML = "Show";
    } else {
        x.style.display = 'none';
        document.getElementById("a").innerHTML = "Hide";
    }
    
    
}


function ocultar(){
document.getElementById('myDIV').style.display = 'none';
var arrayp = document.getElementsByTagName('p');
console.log(arrayp);
//arrayp.setAttribute('style','{background:#ccc;}');
//console.log(arrayp);
//document.getElementsByTagName('p').style.backgroundColor = '#FF0000';
 //document.getElementsByTagName('p').style.backgroundColor = '#FF0000';
 

}



    function create() {
        // createElement
        // var elementNode = document.createElement('p');
        

        var body = document.getElementsByTagName("body").item(0);
        
        
         var existencia = document.getElementById('hermano');

        
         if(existencia===null){
             
                             
            var hermano = document.createElement('p');  
            hermano.setAttribute('id','hermano');
            
            //body.appendChild(hermano);
            document.body.insertBefore(hermano, document.body.childNodes[4]); // Lo insertas al inicio del body        
            
            var bloqueHermano=document.getElementById("hermano");
            //bloqueHermano.appendChild();
            

        }
        
        

         var y = document.getElementById('foto');

        
         if(y===null){
             
                             
                 var imagen = document.createElement('img');  
                 imagen.setAttribute('src','../images/hola.jpg');
                 imagen.setAttribute('id','foto');
                 bloqueHermano.appendChild(imagen);
         }else{
             
                if (y.style.display === 'none') {
                    y.style.display = 'block';
                     document.getElementById("a").innerHTML = "Show";
                } else {
                    y.style.display = 'none';
                    document.getElementById("a").innerHTML = "Hide";
                }
                 
            
             
         }                 






    }//http://mialtoweb.es/modificar-html-con-javascript/
    
    
    
    
    
    
function printDOM(node,prefix){//me permite ver como estan las etiquetas en consola
    console.log(prefix + node.nodeName);
    for(let i=0;i< node.childNodes.length;i++){
        printDOM(node.childNodes[i] , prefix+' ')
        
    }
    //document.getElementById('p').style.backgroundColor="#e9e9e9"; 
    
}

printDOM(document, '')










//https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript
function highlight(text)
{
    var inputText = document.getElementById("inputText")
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if ( index >= 0 )
    { 
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML ;
    }
    
    

}



