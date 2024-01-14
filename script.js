// let's write some script for invoice
let totalAmount = 0;

function addItem(){
    const clientName = document.getElementById('clientName').value;
    
    const itemDescription = document.getElementById('itemDescription').value;

    const quantity = parseInt (document.getElementById('quantity').value);

    const price = parseFloat(document.getElementById('price').value);

    if (isNaN(quantity) || isNaN(price)) {
        alert('Please Enter Valid Quantity and Price.');
        return;
    }

    const itemTotal = quantity * price;
    totalAmount += itemTotal;

    const itemContainer = document.getElementById('itmes');
    const newItem = document.getElementById('div');

    newItem.className = 'item';
    newItem.innerHTML= `<span>${itemDescription} x ${quantity}</span>
                       <span>$${itemTotal.toFixed(2)}</span>`;
                    
    itemsContainer.appendChild(newItem);

                updateTotal();
    }
     
    function updateTotal() {
        document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    }

    
function boom(){
    x = document.getElementById('kya').value;
    y = document.getElementById('karu').value;

    z = document.getElementById('mein').innerHTML= x * y;
}