
// UTILITY FILE UPLOAD KYC SECTION
let fileInput = document.getElementById("utilityBill");
let fileLabel = document.getElementById("fileLabel");

fileInput.addEventListener("change", () => {
    if(fileInput.files.length > 0) {
        let fileName = fileInput.files[0].name;

        fileLabel.textContent = fileName;
    } 
    else {
        fileLabel.textContent = "Upload Utility Bill";
    }
});


// KYC YEAR UPDATE
let currentYears = new Date().getFullYear();
let mobileYear = new Date().getFullYear();

let currentYear = new Date().getFullYear();
document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = currentYear;
});

document.getElementById("kycYear").textContent = currentYears;
document.getElementById("kycYear1").textContent = mobileYear;




document.addEventListener("DOMContentLoaded", function () {
    const homeAddress = document.getElementById("homeAddress");
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const utilityBill = document.getElementById("utilityBill");
    const dateOfBirth = document.querySelector("input[type='date']");
    const gender = document.getElementById("gender");
    const occupation = document.getElementById("occupation");
    const kycBtn = document.querySelector(".kyc_btn");

    const kycRightContent = document.getElementById("kycRightContent");
    const kycVerifyContainer = document.getElementById("kycVerifyContainer");

    // Function to check if all fields are filled out
    function checkFormCompletion() {
        if (
            homeAddress.value.trim() !== "" &&
            country.value !== "" &&
            city.value !== "" &&
            utilityBill.files.length > 0 &&
            dateOfBirth.value !== "" &&
            gender.value !== "" &&
            occupation.value.trim() !== ""
        ) {
            kycBtn.disabled = false; 
        } else {
            kycBtn.disabled = true; 
        }
    }

    // Add event listeners to all form fields to detect changes
    homeAddress.addEventListener("input", checkFormCompletion);
    country.addEventListener("change", checkFormCompletion);
    city.addEventListener("change", checkFormCompletion);
    utilityBill.addEventListener("change", checkFormCompletion);
    dateOfBirth.addEventListener("change", checkFormCompletion);
    gender.addEventListener("change", checkFormCompletion);
    occupation.addEventListener("input", checkFormCompletion);

    // Initial check in case the form is prefilled
    checkFormCompletion();

    // Add the event listener to the button
    kycBtn.addEventListener("click", function (event) {
        // Prevent form submission
        event.preventDefault();

        // Hide 'kycRightContent' and show 'kycVerifyContainer' only if the button is enabled
        if (!kycBtn.disabled) {
            kycRightContent.style.display = "none";
            kycVerifyContainer.style.display = "block";
        }
    });
});
