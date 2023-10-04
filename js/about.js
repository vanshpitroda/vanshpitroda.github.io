// Function to load the header from header.html and inject it into the placeholder
function loadAbout() {
  const headerPlaceholder = document.getElementById('about-placeholder');
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerPlaceholder.innerHTML = xhr.responseText;
    }
  };
  
  xhr.open('GET', 'components/about.html', true);
  xhr.send();
}

// Call the loadHeader function when the page is loaded
window.addEventListener('load', loadAbout);