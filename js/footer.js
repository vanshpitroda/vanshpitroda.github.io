function writeFooter() {
    const headerContent = `
    <section class="info_section layout_padding">
    <div class="container">
      <div class="info_contact">
        <div class="row">
          <div class="col-md-4">
            <a href="">
              <img src="images/location-white.png" alt="">
              <span>
                Vejalpur Ahmedabad, Gujarat
              </span>
            </a>
          </div>
          <div class="col-md-4">
            <a href="">
              <img src="images/telephone-white.png" alt="">
              <span>
                Call : +91 7096197750
              </span>
            </a>
          </div>
          <div class="col-md-4">
            <a href="">
              <img src="images/envelope-white.png" alt="">
              <span>
                officialvanshmistry@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-lg-9">
          <div class="info_form">
            <form action="">
              <input type="text" placeholder="Enter your email">
              <button>
                subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-4 col-lg-3">
          <div class="info_social">
            <div>
              <a href="https://www.facebook.com/profile.php?id=100081779717862">
                <img src="images/fb.png" alt="">
              </a>
            </div>
            <div>
              <a href="https://twitter.com/vanshyoo">
                <img src="images/twitter.png" alt="">
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/vansh-mistry-251a37246/">
                <img src="images/linkedin.png" alt="">
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/vanshyoo/">
                <img src="images/instagram.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    <footer class="container-fluid footer_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-9 mx-auto">
          <p>
            &copy; 2023 All Rights Reserved By
            <a href="https://digitalvansh.me/">Vansh Mistry</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
    `;
  
    // Write the header content to the current document
    document.write(headerContent);
  }
  