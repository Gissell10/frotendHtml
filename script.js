const buttons= document.querySelectorAll('#btn');

buttons.forEach(btn=>{
    btn.addEventListener('click', function(){
        const itemName= this.parentElement.querySelector('.name').textContent;
        const li = document.createElement('li');
        li.textContent = itemName;
        document.getElementById('cart').appendChild(li)

    });
})
