const letterImage = document.getElementById('letterImage');
const content = document.getElementById('content');
const backGround = document.getElementById('bg');



letterImage.addEventListener('click', () => {
    content.style.display = 'block';
});

function myFunction() {
    content.style.display = 'none';
}