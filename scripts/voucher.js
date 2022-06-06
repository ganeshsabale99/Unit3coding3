

const url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res[0].vouchers);
    append(res[0].vouchers)
})

 let addtocartarr=JSON.parse(localStorage.getItem("purchase")) || [];

function append(vouchers){
    vouchers.map(function(elem){
        let box = document.createElement("div");
        let name = document.createElement("p");
        name.innerText=elem.name;
        let image = document.createElement("img");
        image.src=elem.image;
        let price = document.createElement("p");
        price.innerText=elem.price;
        let btn = document.createElement("button");
        btn.setAttribute("class","buy_voucher")
        btn.innerText="Buy";
        btn.addEventListener("click",function(){
            addtocart(elem);
        })
        box.append(image,name,price,btn)
        document.getElementById("voucher_list").append(box);

    })

}



function addtocart(elem){
    addtocartarr.push(elem);
    if(0<=0)
{
    alert("Hurray! purchase successful")
}
else{
    alert("Sorry! insufficient balance");
}
    localStorage.setItem("purchase",JSON.stringify( addtocartarr));
}

