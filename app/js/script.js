//mobile menu
let menu = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let navBtn = document.querySelector('.nav__btn');


navBtn.addEventListener('click', function(){
        menu.classList.toggle('mobile-menu'); 

      /*   if(menu.classList.contains('hidden')){
                menu.classList.remove('hidden');
                menu.classList.add('mobile-menu');
               
            }else if(menu.classList.contains('mobile-menu')){
                menu.classList.remove('mobile-menu');
                menu.classList.add('hidden');
                
            } */
        
});