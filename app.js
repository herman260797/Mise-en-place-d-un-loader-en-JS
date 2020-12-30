/* declaration de constante */
const box = document.querySelector('.box');
const txt = document.querySelector('.txt');
const loader = document.querySelector('.loader');
/* appel du loader, creation de l'evenement et rechargement de l'api depuis l'url */
window.addEventListener('load' , ( ) =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(reponse => {
        console.log(reponse);
        return reponse.json();

    } )
    .then(data =>{
        console.log(data);
        txt.innerHTML = data.body;
        loader.className += ' hidden';
    })
})