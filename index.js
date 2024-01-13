
const scriptURL = 'https://script.google.com/macros/s/AKfycbwu5-gliHT9IfnXhC4eefA5bYXYH81OkxXkAOm6rK9KqVE2hbVDgREoYuELN7QyvxREKA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Thank You For Subscribing!";
        setTimeout(function(){
            msg.innerHTML=""
           
        },5000);
        form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})
