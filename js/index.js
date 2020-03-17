// Your code goes here

window.addEventListener("load", function(event) {
    alert("Fasten your seatbelt, you are about to enter the FunBus Zone!");
    });

window.addEventListener('mousedown', function(event) {
    event.target.style.opacity = '0';
});

window.addEventListener('mouseup', function(event) {
    event.target.style.opacity = '1';
})

const homePrevent = document.querySelector('#home');
  homePrevent.addEventListener('click', function(event){
      event.preventDefault();
  });

const divClick = document.querySelector('#divBorder');
  divClick.addEventListener('click', function(event){
    event.currentTarget.style.background = 'aqua';
  });

const button1 = document.querySelector('#btn1');
  button1.addEventListener('click', function(event){
    event.target.style.color = 'black';
    event.stopPropagation();
  });

const button2 = document.querySelector('#btn2');
  button2.addEventListener('mouseover', function(event){
    event.target.style.background = 'black';
  });
  
const button3 = document.querySelector('#btn3');
  button3.addEventListener('dblclick', function(event){
    event.target.style.borderColor = 'red';
  });
  
const img1 = document.querySelector('#img1');
  img1.addEventListener('mouseenter', function(event){
    event.target.style.border = '2px dashed green';
  });
  
  img1.addEventListener('mouseleave', function(event){
    event.target.style.border = 'none';
  });
  
  const img2 = document.querySelector('#img2');
  img2.addEventListener('contextmenu', function(event){
    event.target.style.border = '2px solid yellow';
  }); 

const img4 = document.querySelector('#img4');
  img4.addEventListener('mousedown', function(event){
    event.target.style.opacity = '0';
  });
  
  img4.addEventListener('mouseup', function(event){
    event.target.style.opacity = '1';
  });
  
const p = document.querySelector('p');
  p.addEventListener('copy', function(event){
    event.preventDefault();
    alert('I don\'t think so! Too lazy to type your own paragraph?')
  });
  
