function valor(){
    const prod = document.querySelector('#produto').value;
    const ul = document.querySelector('#lista')
    ul.innerHTML += `<li>${prod}</li>`
}