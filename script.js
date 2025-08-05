
    const eyes = document.querySelectorAll('.eye');

    document.addEventListener('mousemove', (e) => {
      eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        const radius = rect.width / 2 - pupil.offsetWidth / 2 - 4;

        const pupilX = radius * Math.cos(angle);
        const pupilY = radius * Math.sin(angle);

        pupil.style.left = `${pupilX + rect.width / 2 - pupil.offsetWidth / 2}px`;
        pupil.style.top = `${pupilY + rect.height / 2 - pupil.offsetHeight / 2}px`;
      });
    });
 