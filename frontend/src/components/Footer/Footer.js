
export default function Footer() {
  return (
    <div className="main-footer">
      <div>
        <a href='/'>
          <img className="block lg:hidden h-8 w-auto" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1636235242/sportsBook/SportsbookMemes_Web_v2__0_1x_vovnuc.png" alt="" />
          <img className="hidden lg:block h-15 w-auto" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1636235242/sportsBook/SportsbookMemes_Web_v2__0_1x_vovnuc.png" alt="" />
        </a>
      </div>
      <div>
        <div className="company-follow">
          <h1 className="footer-headers">Company</h1>
          <div>
            <div>
              <a href='/'><h1 className="footer-links">About</h1></a>
            </div>
            <div>
              <a href='/'><h1 className="footer-links">Contact</h1></a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="footer-headers">Follow Us</h1>
          <div className="social-links">
            <h5>Facebook</h5>
            <h5>Instagram</h5>
          </div>
        </div>
      </div>
      <div>
        <h1 className="footer-headers">Community</h1>
          <div>
            <div>
              <a href='/'><h1 className="footer-links">Memes</h1></a>
            </div>
            <div>
              <a href='/'><h1 className="footer-links">Upcoming Games</h1></a>
            </div>
            <div>
              <a href='/'><h1 className="footer-links">Predictions</h1></a>
            </div>
          </div>
      </div>
      <div>
        <div>
          <h1 className="footer-headers">Legal</h1>
            <div>
              <div>
                <a href='/'><h1 className="footer-links">Lorem</h1></a>
              </div>
              <div>
                <a href='/'><h1 className="footer-links">Ipsum</h1></a>
              </div>
              <div>
                <a href='/'><h1 className="footer-links">Dolor</h1></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
