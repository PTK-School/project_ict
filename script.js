document.addEventListener("DOMContentLoaded", function() {
    const menuTrigger = document.getElementById("menuTrigger");
    const popupMenu = document.getElementById("popupMenu");
    const closeButton = document.getElementById("closeButton");

    // Function to open the menu
    function openMenu() {
        popupMenu.style.display = "block"; // Show the menu
        popupMenu.style.opacity = 1; // Make it visible
    }

    // Function to close the menu
    function closeMenu() {
        popupMenu.style.opacity = 0; // Start hiding it
        setTimeout(() => {
            popupMenu.style.display = "none"; // Hide the menu after opacity transition
        }, 300); // Match the transition duration in the CSS
    }

    // When the trigger is clicked, open the menu
    menuTrigger.addEventListener("click", function() {
        console.log("Menu Trigger Clicked");
        openMenu();
    });

    // When the close button is clicked, close the menu
    closeButton.addEventListener("click", function() {
        console.log("Close Button Clicked");
        closeMenu();
    });

    document.addEventListener("DOMContentLoaded", function() {
        const menuTrigger = document.getElementById("menuTrigger");
        const popupMenu = document.getElementById("popupMenu");
        const closeButton = document.getElementById("closeButton");
    
        // Function to open the menu
        function openMenu() {
            popupMenu.style.display = "block"; // Show the menu
            popupMenu.style.opacity = 1; // Make it visible
        }
    
        // Function to close the menu
        function closeMenu() {
            popupMenu.style.opacity = 0; // Start hiding it
            setTimeout(() => {
                popupMenu.style.display = "none"; // Hide the menu after opacity transition
            }, 300); // Match the transition duration in the CSS
        }
    
        // When the trigger is clicked, open the menu
        menuTrigger.addEventListener("click", function() {
            console.log("Menu Trigger Clicked");
            openMenu();
        });
    
        // When the close button is clicked, close the menu
        closeButton.addEventListener("click", function() {
            console.log("Close Button Clicked");
            closeMenu();
        });
    });
    
});
