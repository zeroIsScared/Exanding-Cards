
const panels = document.querySelectorAll(".Expanding_Cards--panel");
const paragraths = document.querySelectorAll(".Expanding_Cards--paragraph");


const addActiveClass = (e) =>{
    
    panels.forEach(panel => {
        const classList = panel.classList;
        classList.remove('active');
        const h3 = panel.children[0].classList;
        h3.remove('active');

    });
    e.target.children[0].classList.add('active');
    e.target.classList.add('active');
console.log(e.target.classList);
}

panels.forEach(item =>{ 
   
    item.addEventListener('click', addActiveClass);
} );