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

  /* eventlisener to community*/ 

  // JavaScript to scroll to section
// JavaScript to scroll to section
// JavaScript to scroll to section
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.go-commun');

    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetSection = document.querySelector(".commun svg"); // Get the target section by its ID
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
 
            for(var i=0;i<4;i++)
            {
            document.querySelectorAll(".icon-cy")[i].classList.add('flashing');
            }
            // Remove flashing animation class after 1 second
            

        });
    });
});

// JavaScript to scroll to section and add flash animation
