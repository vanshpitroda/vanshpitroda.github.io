function writeServices() {
    const headerContent = `
    <section class="service_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Our Services
        </h2>
        <img src="images/plug.png" alt="">
      </div>

      <div class="service_container">
        <div class="box">
          <div class="img-box">
            <img src="images/s1.png" class="img1" alt="">
          </div>
          <div class="detail-box">
            <h5>
              Website UI Designing
            </h5>
            <p>
              A unique design for your awesome website.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s2.png" class="img1" alt="">
          </div>
          <div class="detail-box">
            <h5>
              Website Development
            </h5>
            <p>
              Both static and dynamic website are going to be ready asap you are ordering them.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s3.png" class="img1" alt="">
          </div>
          <div class="detail-box">
            <h5>
              Brand Logo Designing
            </h5>
            <p>
              We are waiting to design your brand's logo come on and order it fast!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;

    document.write(headerContent);
}