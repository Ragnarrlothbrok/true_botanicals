if(document.body.clientWidth<1300){
    document.getElementById("responsive-swiper").classList.add("mySwiper");
}
else {
    document.getElementById("responsive-swiper").classList.remove("mySwiper");
}

window.onresize(function(){
    if(document.body.clientWidth<1300){
        document.getElementById("responsive-swiper").classList.add("mySwiper");
    }
    else {
        document.getElementById("responsive-swiper").classList.remove("mySwiper");
    }
});

