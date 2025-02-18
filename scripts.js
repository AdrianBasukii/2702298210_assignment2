document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingOutput = document.getElementById('selected-rating');

    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', addHover);
        star.addEventListener('mouseout', removeHover);
    });

    function setRating(e) {
        const value = e.target.getAttribute('data-value');
        ratingOutput.textContent = value;
        stars.forEach(star => {
            const starValue = star.getAttribute('data-value');
            if (starValue <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    function addHover(e) {
        const value = e.target.getAttribute('data-value');
        stars.forEach(star => {
            const starValue = star.getAttribute('data-value');
            if (starValue <= value) {
                star.classList.add('hover');
            } else {
                star.classList.remove('hover');
            }
        });
    }

    function removeHover(e) {
        stars.forEach(star => {
            star.classList.remove('hover');
        });
    }
});