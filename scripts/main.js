

let arr= JSON.parse(localStorage.getItem("user"))||[];

function Myfunc1(name,email,address,wallet){
    this.name=name,
    this.email=email,
    this.address=address,
    this.amount=wallet
};

function Myfunc(){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let wallet = document.querySelector("#amount").value;
    

    let p1 = new Myfunc1(name,email,address,wallet);
    
    arr.push(p1);
    console.log(arr);
    localStorage.setItem("user",JSON.stringify(arr));
    window.location.href="index.html";
}