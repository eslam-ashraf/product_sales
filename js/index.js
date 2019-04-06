
var products = [];
if( localStorage.getItem("mo3taz") == null)
    {
        products = [];
    }
else
    {
 products = JSON.parse(localStorage.getItem("mo3taz"));
        
    }

var categories = ["mobiles" , "smart" , "sports" , "general"];
var inputs = document.getElementsByTagName("input")

var temp = ""
for(var i=0; i <categories.length ; i++)
    {
        temp +="<option value='"+categories[i]+"'>"+categories[i]+"</option>";
    }
document.getElementById("productCategory").innerHTML = temp;



function addProduct()
{

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productImag = document.getElementById("productSale");

    
    var product = {name:productName.value ,price:productPrice.value , cat: productCategory.value , image :productImag.value }
  
    products.push(product)
    displayData();
    //clearForm();
   
localStorage.setItem("mo3taz" ,  JSON.stringify(products));

}


function clearForm()
{
    for(var i=0; i<inputs.length ;i++)
        {
            inputs[i].value = '';
        }
}


function displayData()
{
    var tableBody = document.getElementById("tableBody");

    var cont = "";
    for(var i=0;i<products.length ; i++)
    {
        cont += "<tr><td>"+products[i].name+"</td><td>"+products[i].price+"</td><td>"+products[i].cat+"</td><td>"+products[i].image+"</td></tr>"
    }


    tableBody.innerHTML  = cont;

}


displayData();


function toggleForm()
{
   var form = document.getElementById("form-container");
   var btnToggle = document.getElementById("btnToggle")    
    if( form.style.display == "none")
        {
            form.style.display = "block"
btnToggle.innerHTML="<i class='fas fa-arrow-alt-circle-up'></i>"    
        }
    else
        {
            form.style.display = "none"
btnToggle.innerHTML="<i class='fas fa-arrow-alt-circle-down'></i>"    
            
            
        }   
}

