document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateForm(name, email, message)) {
        // Form is valid, proceed with submission
        console.log('Form submitted successfully');
        contactForm.reset(); // Clear the form
    } else {
        // Form is invalid, show an error message
        console.log('Please fill in all fields correctly');
    }
});

function validateForm(name, email, message) {
    if (name === '' || email === '' || message === '') {
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return false;
    }

    return true;
}