// Function to load the header from header.html and inject it into the placeholder
function loadSliderSection() {
    const headerPlaceholder = document.getElementById('slider-section-placeholder');
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        headerPlaceholder.innerHTML = xhr.responseText;
      }
    };
    
    xhr.open('GET', 'components/slider_section.html', true);
    xhr.send();
  }
  
  // Call the loadHeader function when the page is loaded
  window.addEventListener('load', loadSliderSection);