let menuLateralBtn = document.querySelectorAll('.btn-menu-lateral')
let menuLateral = document.getElementById('menu-lateral');
let screemBlackMenu = document.getElementById('menu-screen-black');

const menuLateralRetraer = () =>{
  menuLateral.classList.toggle('active')
  screemBlackMenu.classList.toggle('active')
};

menuLateralBtn.forEach(element => {
    element.addEventListener('click', menuLateralRetraer)
});

screemBlackMenu.addEventListener('click', menuLateralRetraer)

document.querySelectorAll('.btn-menu-lateral, .nav__btn').forEach(function(e) {
    // function sonidoHover() {
    //     var soundHover = new Audio("../Assets/Sound/Hover - l Sound.wav");
    //     soundHover.play();
    // }
    
    // e.addEventListener('mouseover', sonidoHover)

    function sonidoClick() {
        var soundHover = new Audio('../assets/s/sound/sound-interfaz4.mp3');
        soundHover.play();
    }

    e.addEventListener('click', sonidoClick)
})