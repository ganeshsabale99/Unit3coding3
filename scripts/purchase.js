let cartdata  = JSON.parse(localStorage.getItem("purchase")) || [];


console.log(cartdata);


cartdata.map(function(elem){
    let box = document.createElement("div");
    let name = document.createElement("p");
    name.innerText=elem.name;
    let image = document.createElement("img");
    image.src=elem.image;
    let price = document.createElement("p");
    price.innerText=elem.price;
    
    box.append(image,name,price)
    document.getElementById("purchased_vouchers").append(box);

})
