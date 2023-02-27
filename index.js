const YESBTN = document.querySelector('#YESBTN');

YESBTN.addEventListener('click',function () {
    alert('YA SABIA QUE NO TE PODIAS RESISTIR AMI UWU')
});

const NOBTN = document.querySelector('#NOBTN');
NOBTN.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NOBTN.style.setProperty('top',randomY+'%');
    NOBTN.style.setProperty('left',randomX+'%');
    NOTBN.style.setProperty('transform',`translate (-${randomX}%,-${randomY}%)`);
})
