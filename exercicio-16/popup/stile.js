const openBtn = document.querySelector('.open-popup');
const popUp = document.querySelector('.popup-wrap');
const closeBtn = document.querySelector('.btn-close');

openBtn.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.backgroundColor = 'rgba(0,0,0,0.5)';
})

popUp.addEventListener('click', (evt) => {
    const classnameOfClicckedElement = evt.target.classList[0];
    const eventList = ['btn-close','know-more','popup-wrap'];
    const someEvent = eventList.some((evt) => evt === classnameOfClicckedElement);

    if(someEvent) {
        popUp.style.display = 'none';
    }
    
})