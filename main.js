const train1 = document.querySelector('#Train1');
const train2 = document.querySelector('#Train2');
const scrollArea = document.querySelector('.scroll-container');
const lottie = document.querySelector('.lottie');

updateTrains();
window.addEventListener('scroll', updateTrains);

function updateTrains() {
    const DISTANCE = 3500;
    const OFFSET = 0.5;

    const maxScroll = scrollArea.clientHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    const position = 1 - currentScroll / maxScroll;

    const train1Position = Math.max(0, position - OFFSET);
    const train2Position = position;

    const train1Coords = positionToCoords(train1Position, DISTANCE);
    const train2Coords = positionToCoords(train2Position, DISTANCE);

    train1.style.transform = `translate(-${train1Coords.x}px, ${train1Coords.y}px)`;
    train2.style.transform = `translate(${train2Coords.x}px, -${train2Coords.y}px)`;

    if (position != 1) {
        lottie.style.display = 'none';
    } else {
        lottie.style.display = 'block';
    }
}

function positionToCoords(position, distance) {
    const x = position * distance;
    return {
        x,
        y: x * 0.57735026919,
    }
}