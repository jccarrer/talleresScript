

var jsonObject ={
    "objeto": [
                { "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, 
                { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, 
                { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, 
                { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, 
                { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, 
                { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, 
                { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, 
                { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, 
                { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, 
                { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, 
                { "Name" : "North/South", "City" : "London", "Country" : "UK" }, 
                { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, 
                { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, 
                { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, 
                { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, 
                { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, 
                { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }
                ]
};

for (var i=0; i< jsonObject.objeto.length; i++){//17
  console.log(JSON.stringify(jsonObject.objeto[i]));
   console.log('origen viaje: ' + jsonObject.objeto[i].Name);
 
}


function myFunction() {
    for (var i=0; i< jsonObject.objeto.length; i++){
var node = document.createElement("tr");                
var node2 = document.createElement("td");
var textnode = document.createTextNode(JSON.stringify(jsonObject.objeto[i]));         
node2.appendChild(textnode);
node.appendChild(node2);                              
document.getElementById("myList").appendChild(node); 
        //  console.log(JSON.stringify(jsonObject.objeto[i]));
        //  console.log('origen viaje: ' + jsonObject.objeto[i].Name);
 
    }
     
}        


function OrdenarPorNombreDescendente(x,y) {
	return ((x.Country == y.Country) ? 0 : ((x.Country > y.Country) ? 1 : -1 ));
}
jsonObject.objeto.sort(OrdenarPorNombreDescendente);
document.write("<br/><b>Ordenar por Nombre descendente de Pais</b><br/>");
mostrarArray();
function mostrarArray()
{
    document.write('<table id="myList0" border="1">');


	for(var n=0;n<jsonObject.objeto.length;n++){
	    document.write('<tr>');	
		document.write('<td>'+jsonObject.objeto[n].Name+' '+jsonObject.objeto[n].City+' '+jsonObject.objeto[n].Country+'</td>');
		document.write('</tr>');	
	}
	
document.write('</table>');	
}


        
        
// var node = document.createElement("tr");                
// var node2 = document.createElement("td");
// var textnode = document.createTextNode("prueba");         
// node2.appendChild(textnode);
// node.appendChild(node2);                              
// document.getElementById("myList").appendChild(node);        
        

