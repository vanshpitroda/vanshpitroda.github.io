// Function to load the header from header.html and inject it into the placeholder
function loadHeader() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerPlaceholder.innerHTML = xhr.responseText;
    }
  };
  
  xhr.open('GET', 'components/header.html', true);
  xhr.send();
}
// Call the loadHeader function when the page is loaded
window.addEventListener('load', loadHeader);

// For Favicon 
  function returnMyIcon() {
    const myIcon = '<link rel="icon" href="/images/favicon.ico" type="image/x-icon">';
    document.write(myIcon);
  }
  returnMyIcon();