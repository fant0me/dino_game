var character = document.getElementById('character');
var block = document.getElementById('block');
var counter = 0;
function jump() {
    if (character.classList != 'animate') {
        character.classList.toggle('animate');
    }
    setTimeout(function () {
        character.classList.toggle('animate');
        counter++;
    }, 500);
}
var checkDead = setInterval(function () {
    var characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue('top'),
    );
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue('left'),
    );
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('GAME OVER. Score is: ' + counter);
    }
}, 10);

document.addEventListener('keypress', checkKeypress, false);
function checkKeypress(key) {
    if (key.keyCode == '32') {
        jump();
    }
}
