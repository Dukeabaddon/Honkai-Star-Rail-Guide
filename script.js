const menuCheckbox = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');
menuCheckbox.addEventListener('change', function() {
    sidebar.classList.toggle('active');
});
document.getElementById('show-login').addEventListener('click', function() {
document.querySelector('.popup').classList.add('active');
});

document.querySelector('.popup .close-btn').addEventListener('click', function() {
document.querySelector('.popup').classList.remove('active');
});
document.getElementById('show-signup').addEventListener('click', function() {
document.querySelector('.signpopup').classList.add('active');
});

document.querySelector('.signpopup .close-btn').addEventListener('click', function() {
document.querySelector('.signpopup').classList.remove('active');
});
let loginEmail = "";
let loginPassword = "";
let signupEmail = "";
let signupPassword = "";
let signupRePassword = "";

document.getElementById('email').addEventListener('input', function(event) {
loginEmail = event.target.value;
});

document.getElementById('password').addEventListener('input', function(event) {
loginPassword = event.target.value;
});

document.getElementById('regemail').addEventListener('input', function(event) {
signupEmail = event.target.value;
});

document.getElementById('regpass').addEventListener('input', function(event) {
signupPassword = event.target.value;
});

document.getElementById('re-enterpass').addEventListener('input', function(event) {
signupRePassword = event.target.value;
});


window.addEventListener('click', function(event) {
const loginPopup = document.querySelector('.popup');
const signupPopup = document.querySelector('.signpopup');
const showLoginButton = document.getElementById('show-login');
const showSignupButton = document.getElementById('show-signup');
const otherButtons = document.querySelectorAll('button:not(#show-login):not(#show-signup)');

if (event.target === showLoginButton) {
loginPopup.classList.add('active');
} else if (event.target === showSignupButton) {
signupPopup.classList.add('active');
} else if (!loginPopup.contains(event.target) && !event.target.classList.contains('login')) {
loginPopup.classList.remove('active');
} else if (!signupPopup.contains(event.target) && !event.target.classList.contains('signup')) {
signupPopup.classList.remove('active');
} else if (!Array.from(otherButtons).some(button => button.contains(event.target))) {
loginPopup.classList.remove('active');
signupPopup.classList.remove('active');
}
});
document.querySelector('.popup button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter email address and password.");
    } else {
    }
});
document.querySelector('.signpopup button').addEventListener('click', function() {
    const email = document.getElementById('regemail').value;
    const password = document.getElementById('regpass').value;
    const rePassword = document.getElementById('re-enterpass').value;
    
    if (email.trim() === "" || password.trim() === "" || rePassword.trim() === "") {
        alert("Please enter email address, password, and re-enter password.");
    } else {
        if (password !== rePassword) {
            alert("Passwords do not match.");
        } else {
            // Perform signup action here
        }
    }
});
const downloadPopup = document.getElementById('downloadPopup');
const closeDownloadBtn = downloadPopup.querySelector('.close-btn');

// Function to show the download popup
function showDownloadPopup() {
    downloadPopup.style.display = 'block';
}

function closeDownloadPopup() {
    // Code to close the download popup (presumably hides the popup element)
    document.getElementById('downloadPopup').style.display = 'none'; // Assuming downloadPopup has an id
  
    // Show the close button again (optional)
    document.querySelector('.close-btn').style.display = 'block'; // Or 'inline-block' depending on layout
  }
// Event listener for the close button
closeDownloadBtn.addEventListener('click', closeDownloadPopup)
function showDownloadPopup() {
    document.getElementById('downloadPopup').style.display = 'block';
}

function closeDownloadPopup() {
    document.getElementById('downloadPopup').style.display = 'none';
}