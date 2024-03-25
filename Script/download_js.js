

/* section selection */ 

$("#normal-ed").click(function (){

    $(".active").fadeOut(1000);
    $("#normal-cont").fadeIn(1000);
    
    
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

