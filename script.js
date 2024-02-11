const buttonMenu = document.querySelector('.menu-btn');

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
});

buttonMenu.addEventListener('click', () => {
    if () {
    
    }
});