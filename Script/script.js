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
    strings: ['<span style="color:#05EEFF;">Cyber Security </span>', '<span style="color:#05EEFF;"> Developing </span>',
    '<span style="color:#05EEFF;">Networking</span>','<span style="color:#05EEFF;">DevOps</span>','<span style="color:#05EEFF;">Daily Driver</span>'],
    typeSpeed: 120,
    backSpeed :120,
    loop : true
  });