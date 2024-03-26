var key = 0;
var locker =0;
/* Onclick selection */ 

$("#Home-ed").click(function (){
    
    
    if(locker==key)
    {}
    else{
    $(".active").fadeOut(1000);
    $(".active").addClass("disactive");
    $("#Home-ed-cont").removeClass("re-posetion");
    $(".active").removeClass("active");
    $("#Home-ed-cont").fadeIn(1000);
    $("#Home-ed-cont").addClass("active");
    }
})




$("#Predator-ed").click(function (){
    
    if()
    {}
    $(".active").fadeOut(1000);
    $("#predator-ed-cont").fadeIn(3000);
    $("#predator-ed-cont").removeClass("re-posetion");
    $("#predator-ed-cont").removeClass("disactive");
})



































/* Download Links */ 

document.querySelector("#onedrive-home").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/home/", "_blank");

});

/* Header -downlaod*/ 
document.querySelector("#google-drive-home").addEventListener("click", function() {
window.open("https://drive.google.com/drive/folders/1R5bZhI8yGfr9Z3Xq_QWnUIK1qvh42a2_?usp=sharing", "_blank");

});

/* Header-wiki*/ 
document.querySelector("#torrent-home").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});

