//dark mode
const chk = document.getElementById('chk')

chk.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
})

// nav
function openNav(){
    document.getElementById("myNav").style.width= '50%';

}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
}