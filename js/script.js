window.devicePixelRatio;

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}




  

    

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwQudbg9EA-yJZadOjvpZbefH8SUO6PtvjmO-nGtfDXbg3L--qdxzHAD8sh1qLC2P8wTw/exec';
  const form = document.forms['google-sheets']
   form.addEventListener('submit', e => {
    e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Form Submitted!', response))
    .catch(error => console.log('Error!', error.message))
     

    // if(name = " "){
    //     if(phonenumer =" "){
    //         if(email = " "){
    //             alert('Error, fill the left field');
    //         }
    //     }
    //  }
    
    })