const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    alert('Przycisk został kliknięty - JS działa poprawnie.')
    document.body.style.backgroundColor = 'blue';
})