window.onload = function() {
    var title = document.getElementById("pageTitle");
    var img = document.createElement("img");
    img.src = "./imgs/logos/exodia-cyan.png";
    img.alt = "Logo";
    img.style.marginLeft = "5px"; // Adjust margin as needed
    title.appendChild(img);
};



/*header span*/

var typed = new Typed('.auto-type', {
    strings: ['<span style="color:#05EEFF;">Hackers </span>', '<span style="color:#05EEFF;"> Developers </span>',
    '<span style="color:#05EEFF;">Network engineers</span>','<span style="color:#05EEFF;">Programmers</span>'],
    typeSpeed: 120,
    backSpeed :120,
    loop : true
  });