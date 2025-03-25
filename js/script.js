/* let cross = document.querySelector(".cross-img").style.display = "none"

 document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle('sidebargo')
    if (document.querySelector(".sidebar").classList.contains('sidebargo')) {
        document.querySelector(".ham-img").style.display = "inline"
        document.querySelector(".cross-img").style.display = "none"
    }else{
         document.querySelector(".ham-img").style.display = "none"
        document.querySelector(".cross-img").style.display = "inline"
    }
 }); 

console.log("komal");
 */



// Cache elements to avoid repeated queries
const crossImg = document.querySelector(".cross-img");
const hamImg = document.querySelector(".ham-img");
const sidebar = document.querySelector(".sidebar");

// Ensure elements exist before modifying
if (crossImg && hamImg && sidebar) {
  // Initially hide the cross image
  crossImg.style.display = "none";

  // Add event listener to the hamburger button
  document.querySelector(".ham").addEventListener("click", () => {
    // Toggle the sidebar class
    sidebar.classList.toggle('sidebargo');

    // Check if sidebar has the 'sidebargo' class
    if (sidebar.classList.contains('sidebargo')) {
      hamImg.style.display = "inline";  // Show hamburger image
      crossImg.style.display = "none";  // Hide cross image
    } else {
      hamImg.style.display = "none";  // Hide hamburger image
     setTimeout(() => {
        crossImg.style.display = "inline";
     }, 700);  // Show cross image
    }
  });
}

console.log("komal");

