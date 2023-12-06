const Bread = document.querySelector("#bread");
const Cake = document.querySelector("#cake");
const Cookie = document.querySelector("#cookie");
const Coffee = document.querySelector("#coffee");
const Btn_bread = document.querySelector("btn-bread");
const Btn_cake = document.querySelector("btn-Cake");
const Btn_cookie = document.querySelector("btn-Cookie");
const Btn_coffee = document.querySelector("btn-Coffee");


Btn_bread.addEventListener('click' , ()=> {
  Bread.style.display = 'flex';
  Cake.style.display= 'none';
  Cookie.style.display='none';
  Coffee.style.display= 'none';
})

Btn_cake.addEventListener('click' , ()=> {
  Cake.style.display = 'block';
  Cake.style.display= 'flex';
  Bread.style.display='none';
  Cookie.style.display='none';
  Coffee.style.display= 'none';
})

Btn_cookie.addEventListener('click' , ()=> {
  Cookie.style.display='block';
  Cookie.style.display='flex';
  Bread.style.display = 'none';
  Cake.style.display= 'none';
  Coffee.style.display= 'none';
})

Btn_coffee.addEventListener('click' , ()=> {
  Coffee.style.display= 'block';
  Coffee.style.display= 'flex';
  Bread.style.display = 'none';
  Cake.style.display= 'none';
  Cookie.style.display='none';
  

})
