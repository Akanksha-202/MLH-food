import navbar from './components/navbar.js';
let header = document.getElementById('header');
header.innerHTML = navbar();



var count = localStorage.getItem(Number("wallet")) || [];
 
document.getElementById('add').addEventListener('click', function(){
    
    let amount = document.getElementById("amount").value;
    
    count =Number(amount);
    let x = localStorage.getItem("wallet");

    if(x ==null){
    Number(x=0)
    }
    let sum = Number(x) + Number(amount);
    count = sum;
    localStorage.setItem("wallet", count);
    document.getElementById('amount').value = "";
    window.location.reload();
    
})


let showMoney = () => {
  
    let money = localStorage.getItem('wallet');
    document.getElementsByClassName('showMoney')[0].innerHTML = money;
}
showMoney ();
