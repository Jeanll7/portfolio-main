const title = document.querySelector('.typewriter');
typeWriter(title);

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    for (let i = 0; i < textArray.length; i++) {
        setTimeout(() => el.innerHTML += textArray[i], 90 * i);
    }
}