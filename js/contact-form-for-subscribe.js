const form = document.getElementById("contact-form-formspree-for-subscribe");

// function formValidity() {
//     return document.querySelector('input-data__form-text').value !== '';
// }

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("contact-form-status-for-subscribe");
    // if (!formValidity()) {
    //     return status.innerText = 'Oops! There was a problem submitting your form';
    // }
    const data = new FormData(event.target);
    const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
    } else {
        status.innerHTML = "Oops! There was a problem submitting your form";
    }
}
form.addEventListener("submit", handleSubmit);