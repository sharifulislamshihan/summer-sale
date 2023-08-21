let total = 0;
let discountPrice = 0;
let discountAmount = 0;

function handleClickBtn(target){

    // making list of the products
    const productListContainer = document.getElementById('product-list');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const list = document.createElement('li');
    list.innerText = itemName;
    productListContainer.appendChild(list);

    // calculating total price
    const priceString = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const price = parseFloat(priceString);
    total = parseFloat(total) + parseFloat(price);
    const priceTotal = total.toFixed(2);
    
    // make purchase button enable
    const purchaseBtn = document.getElementById('purchase-btn')
    if(priceTotal>0){
        purchaseBtn.disabled = false;
    }
    else{
        purchaseBtn.disabled = true;
    }

    // making cupon button enable
    const cuponBtn = document.getElementById('cupon-btn')
    if(priceTotal>= 200){
        cuponBtn.disabled = false;
    }
    else{
        cuponBtn.disabled = true;
    }

    document.getElementById('total-price').innerText = priceTotal;
    const grandTotal = parseFloat(priceTotal).toFixed(2);
    document.getElementById('grand-total').innerText = grandTotal;

    document.getElementById('cupon-btn').addEventListener('click', function(){
        const cuponInputTextString = document.getElementById('cupon-input');
        const cuponInputText = cuponInputTextString.value;
        const cuponInput = cuponInputText.toLowerCase();
        // calculating discount price
        //20% off
        const discountAmount = parseFloat(total * (20/100)).toFixed(2);
        if(cuponInput === "sell200"){
            document.getElementById('discount-price').innerText = discountAmount;
            const grandTotal = parseFloat(total) - parseFloat(discountAmount);
                // grand total
            document.getElementById('grand-total').innerText = grandTotal;
            cuponInputTextString.value = '';
        }
    }) 
    
        // back to home

        document.getElementById('home-btn').addEventListener('click', function(){
            window.location.href = 'index.html';
        })
}