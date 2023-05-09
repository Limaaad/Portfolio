import TypeIt from "typeit";
 
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".typing", {
        speed: 200,
        strings: "bodypiercer"
    }).go()
})


 $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
});