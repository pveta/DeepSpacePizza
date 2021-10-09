

//queryselectall menuTabs then for every menuTab get price tab then use id tab as key for price

var prices = document.querySelectorAll(".price");
var quantities = document.querySelectorAll(".quantity");
var names = document.querySelectorAll(".itemName");

var cart = document.getElementById("cart");
var totalText = document.getElementById("total");
var total = 0.0;


function addItem(n){
	let itemP = document.createElement("p");
	itemP.innerHTML = names[n].innerHTML + " &euro;" + prices[n].innerHTML;
	cart.append(itemP);

	quantities[n].innerHTML = parseInt(quantities[n].innerHTML) + 1;

	total += parseFloat(prices[n].innerHTML);

	totalText.innerHTML = total;
}