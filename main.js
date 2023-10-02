const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};
buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});
function downloadFile() {
    // Create a temporary anchor element
    var link = document.createElement("a");
    link.style.display = "none";
    
    // Set the URL of the file you want to download
    link.href = "Vansh_Mistry_Resume.pdf";
    
    // Set the file name for the download
    link.download = "Vansh_Mistry_Resume.pdf";
    
    // Add the anchor element to the document body
    document.body.appendChild(link);
    
    // Trigger the click event to start the download
    link.click();
    
    // Clean up the temporary anchor element
    document.body.removeChild(link);
  }