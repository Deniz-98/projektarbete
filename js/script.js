

// Toggle filter options on button click.
//takes all divs inside filter-meny
const filters = document.querySelectorAll('.filter-meny > div');

//adds event listener to each button inside the divs. toggle active class on click

filters.forEach(filter => {
    const button = filter.querySelector('button');
    button.addEventListener('click', () => {
        filter.classList.toggle('active');
    });
});