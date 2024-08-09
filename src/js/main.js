var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:true,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }
});

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.play-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            const audioElement = document.getElementById(audioId);

            document.querySelectorAll('audio').forEach(audio => {
                if (audio !== audioElement) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });

            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        });
    });
});

document.querySelectorAll('.category h2').forEach(category => {
    category.addEventListener('click', () => {
        const content = category.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        category.classList.toggle('active');
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        question.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu');
    const navbarLinks = document.querySelector('.navegacao');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});

