let menuOpen = document.getElementById('menuOpen');
let menuClose = document.getElementById('menuClose');
let transparentBackground = document.getElementById('transparentBackground');
let filterSelect = document.getElementById('filterSelect');
console.log(menuOpen);

menuOpen.addEventListener('click', function()
{
    transparentBackground.style.display = "block";
})

menuClose.addEventListener('click', function()
{
    transparentBackground.style.display = "none";
})

  