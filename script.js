// 1. Select the elements using the DOM
const themeBtn = document.getElementById('theme-btn');
const themeStatus = document.getElementById('theme-status');
const body = document.body;
const heading = document.getElementById('heading');

// 2. Define the toggle function
themeBtn.addEventListener('click', () => {
    
    // Check if we are currently in Light Mode
    if (themeStatus.innerText === "Light Mode") {
        
        // Change to Dark Theme
        body.style.backgroundColor = "black";
        body.style.color = "white";
        body.style.fontFamily = "'Courier New', Courier, monospace";
        
        // Update the status text
        themeStatus.innerText = "Dark Mode";
        
    } else {
        
        // Change back to Light Theme
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.fontFamily = "Arial, sans-serif";
        
        // Update the status text
        themeStatus.innerText = "Light Mode";
    }
});
