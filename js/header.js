function writeHeader() {
    const headerContent = `
    <header class="header_section">
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="index.html">
          <img src="images/logo.jpg" alt="">
          <span>
            digitalvansh
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="s-1"> </span>
          <span class="s-2"> </span>
          <span class="s-3"> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"> About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="service.html"> Service </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
    `;
  
    document.write(headerContent);
  }

  function returnMyIcon() {
    const myIcon = '<link rel="icon" href="/images/favicon.ico" type="image/x-icon">';
    document.write(myIcon);
  }

  returnMyIcon();