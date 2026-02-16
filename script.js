// ===== Select event handler =====
const deviceSelect = document.getElementById("device");
const extraOption = document.getElementById("extraOption");

deviceSelect.addEventListener("change", function () {
    if (deviceSelect.value === "other") {
        extraOption.classList.remove("hidden");
    } else {
        extraOption.classList.add("hidden");
    }
});

// ===== Enter key handler =====
const nameInput = document.getElementById("name");

nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        alert("Enter key was pressed!");
    }
});
