const letterImage = document.getElementById('letterImage');
const content = document.getElementById('content');
const backGround = document.getElementById('bg');


const btnPlay = document.getElementById("btnPlay");
const video = document.getElementById("video");

var flag = false;
// btnPlay.addEventListener("click", function() {
//     video.style.display = "block";
//     btnPlay.style.display = "none";
// });

btnPlay.addEventListener("click", function() {
    flag = !flag;
    if (flag == true) {
        btnPlay.textContent = "ấn là ẩn video đóoooo";
        video.style.display = "block";
    } else {
        btnPlay.textContent = "ấn vào đây điiiiii";
        video.style.display = "none";
    }
});



letterImage.addEventListener('click', () => {
    content.style.display = 'block';
});

function myFunction() {
    content.style.display = 'none';
}