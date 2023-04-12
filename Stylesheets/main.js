let menuOpen = document.getElementById('menuOpen');
let menuClose = document.getElementById('menuClose');
let transparentBackground = document.getElementById('transparentBackground');

menuOpen.addEventListener('click',()=>
{
    transparentBackground.style.display = 'block';
    transparentBackground.style.opacity ='1';
})
menuClose.addEventListener('click', () =>
{
    transparentBackground.style.display = 'none';
    transparentBackground.style.opacity ='0';
})
