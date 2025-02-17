function sendSOS() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            fetch(`http://localhost:8080/api/sos`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ latitude: lat, longitude: lon })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("sos-status").innerText = "SOS Alert Sent!";
            });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

document.getElementById("volunteer-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    fetch("http://localhost:8080/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("volunteer-status").innerText = "Successfully Registered!";
    });
});

function donate() {
    fetch("http://localhost:8080/api/donations", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("donation-amount").innerText = data.totalDonations;
        });
}
