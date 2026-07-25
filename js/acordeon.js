const acordeonTriggres = document.querySelectorAll('.acordeon .trigger');

acordeonTriggres.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement;
        acordeon.classList.toggle('open');
    });
});