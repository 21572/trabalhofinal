

 $.getJSON("API.json",function(API){

 document.getElementById("precos").innerHTML=API.promo[0].promo;

document.getElementById("precos1").innerHTML=API.promo[1].promo;	

 console.log(API.promo[0].promo);
});
