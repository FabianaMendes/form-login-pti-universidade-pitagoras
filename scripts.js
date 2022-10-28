const form = document.getElementById("form");
const user = document.getElementById("user");
const password = document.getElementById("password");
const welcomePage = document.getElementById("welcome");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        user: user.value,
        password: password.value
    }

    localStorage.setItem('user', JSON.stringify(data));

    fetch("welcome.html", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
        .finally(() => {
            window.open('welcome.html', "_self");
        })
})
