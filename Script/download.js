var ID = 1;

/* Onclick selection */ 

/* Home-edtion*/ 

$("#Home-ed").click(function (){
    if (ID == 1) {
    } else {
        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#Home-ed-cont").fadeIn(1000);
            $("#Home-ed-cont").addClass("active");
            ID = 1;
        });
    }
});

/* Predator-edtion*/ 

$("#Predator-ed").click(function (){
    if (ID == 2) {
    } else {
      
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#predator-ed-cont").fadeIn(1000,)
        $('#predator-ed-cont').addClass("active");
        $('#predator-ed-cont').removeClass("disactive");
         ID = 2;

        });
    }
});

/* Wireless-ed */

$("#Wireless-ed").click(function (){
    if (ID == 3) {
    } else {
      
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#wireless-ed-cont").fadeIn(1000,)
        $('#wireless-ed-cont').addClass("active");
        $('#wireless-ed-cont').removeClass("disactive");
         ID = 3;
        });
    }
});

/* Dark-ed*/
$("#Dark-ed").click(function (){
    if (ID == 4) {
    } else {
      
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#Dark-ed-cont").fadeIn(1000,)
        $('#Dark-ed-cont').addClass("active");
        $('#Dark-ed-cont').removeClass("disactive");
         ID = 4;
        });
    }
});


/* ARM-ed*/
$("#ARM-ed").click(function (){
    if (ID == 5) {
    } else {
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#ARM-ed-cont").fadeIn(1000,)
        $('#ARM-ed-cont').addClass("active");
        $('#ARM-ed-cont').removeClass("disactive");
         ID = 5;
        });
    }
});
























document.querySelector(".Archive").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/archive/","_blank");
});



/* Home Download Links */ 

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





/* Acer-predator Download Links */ 

document.querySelector("#onedrive-Predator").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/predator/", "_blank");

});

/* Acer-predator-downlaod*/ 
document.querySelector("#google-drive-Predator").addEventListener("click", function() {
window.open("https://drive.google.com/drive/folders/1RHyGWLOTf4mtoVpHpGzNOJRZ8UnZI2PR?usp=sharing", "_blank");

});

/* Acer-predator*/ 
document.querySelector("#torrent-Predator").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});







/* wireless Download Links */ 

document.querySelector("#onedrive-Wireless").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/wireless/", "_blank");

});

/* Wireless-downlaod*/ 
document.querySelector("#google-drive-Wireless").addEventListener("click", function() {
window.open("https://omansh.vercel.app/ExodiaOS/latest/wireless/", "_blank");

});

/* Wireless-predator*/ 
document.querySelector("#torrent-Wireless").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});













