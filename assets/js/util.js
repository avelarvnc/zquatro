function navControl()
{
    var menu = document.getElementById("nav-menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        entry.target.classList.remove('hidden');
        entry.target.classList.remove('show');
        menu.style.display = "flex";
      }
}



const myObserver = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
    // else
    // {
    //   entry.target.classList.remove('show')
    // }
  })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))