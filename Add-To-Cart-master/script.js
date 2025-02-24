var cartItems=[];
var isTotalHidden=true;
var Beef_Biryani={

	name:"Beef Biryani",
	price:140,

}
var cheicken_biryani={
	name: "chicken_biryani",
	price:120

}

function addToCart(item){
	cartItems.push(item);

	document.getElementById("itemCounter").innerHTML=cartItems.length;
	console.log(cartItems);
	showTotal();


}
function clickCart(){
	isTotalHidden = !isTotalHidden;
	showTotal();
}

function showTotal(){
	var orderTotal=document.getElementById("orderTotal");
	orderTotal.innerHTML="";


	if(isTotalHidden === false){
		var total=0;
		for (var i = 0; i < cartItems.length; i++) {
			total += cartItems[i].price;
		}
		orderTotal.innerHTML += "Total: $" + total;
	}
}




