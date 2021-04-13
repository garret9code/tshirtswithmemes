window.addEventListener('load', () =>{
    /*const params = (new URL(document.locatation)).searchParams;
    const size = params.get('size');
    const color = params.get('color');
    const gender = params.get('gender');*/

    const size = localStorage.getItem('SIZE');
    const color = localStorage.getItem('COLOR');
    const gender = localStorage.getItem('GENDER');
    const quantity = localStorage.getItem('QUANTITY');
    const total = localStorage.getItem('TOTAL');
    const grandtotal = localStorage.getItem('Est Total');

    document.getElementById('psize').innerHTML = size;
    document.getElementById('pcolor').innerHTML = color;
    document.getElementById('pgender').innerHTML = gender;
    document.getElementById('pquantity').innerHTML = quantity;
    document.getElementById('pprice').innerHTML = total;
    document.getElementById('subtotal').innerHTML = total;
    document.getElementById('totalprice').innerHTML = total;
    document.getElementById('gtotal').innerHTML = grandtotal;
    document.getElementById('grandtotal').innerHTML = grandtotal;

})




