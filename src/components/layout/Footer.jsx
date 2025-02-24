export const Footer = () => {
    return (
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            {/* <img src="./images/logo.png" alt="logo" /> */}
            <h4>MovieFlix</h4>
            <p>
            Welcome to MovieFlix, your go-to destination for the best movies, 
            TV shows, <br/>and entertainment. Explore unlimited content and enjoy seamless streaming.
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div className="content_2">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Terms & Conditions</a>
            <a href="#"> Privacy Policy</a>
            <a href="#">Accessibility</a>
            
          </div>
          <div className="content_3">
            <h4>Contact Us</h4>
            <a href="" target="_blank">
            📧 Email: support@MovieFlix.com
            </a>
            <a href="" target="_blank">
            📞 Phone: +91 123456789
            </a>
            <a href="" target="_blank">
            📍 Address: HBTU,Kanpur
            </a>
          </div>
          <div className="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              Be the first to know about new
              <br />
              arrivals, events &promos!
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
      </footer>
    );
  };