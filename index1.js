let total = 0;
let discount = 1;
function prod1(hope) {
    const PutTheValue = document.getElementById('setting');
    const liName = hope.childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = liName;
    PutTheValue.appendChild(li);

    const price = hope.childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText = total;


    const d = document.getElementById('btn1');
    if (total > 0) {
        d.removeAttribute("disabled");
    }
    const h = document.getElementById('btn2');
    if (total >= 200) {
        h.removeAttribute("disabled");



    }
    document.getElementById('btn2').addEventListener('click', function () {
        const ma = document.getElementById('hex1');
        if(ma.value ==='SELL200'){
        const discount = total * 0.2;
        const m = discount.toFixed(2);
        const discountPrice = document.getElementById('dicount-price');
        discountPrice.innerText = m;
        const total2 = total - m;
        const myDiscount = document.getElementById('total2');
        myDiscount.innerText = total2;
    }else{
        return 
    }


    })
    // document.getElementById('btn3').addEventListener('click',function(){
    //     total . innerText ='';
    //     discount . innerText = '';
    //     total2 . innerText = '';
    // } )






}