function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


const bookingForm = document.getElementById("bookingForm");

const bookingMessage = document.getElementById("bookingMessage");


bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    bookingMessage.textContent =
        "✅ Booking request submitted successfully!";

    bookingMessage.style.color = "green";

    bookingForm.reset();

});