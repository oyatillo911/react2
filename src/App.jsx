
import './App.css'

function App() {


  return (
    <>
      <header>
        <nav className="nav_top">
          <div className="container">
            <div className='nav_info'>
              <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <u>ShopNow</u></p>
            </div>
            <div className="nav_lang">
              <span>English</span>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </nav>
        <nav className="nav_bottom">
          <div className="container">
            <div className="nav_logo">
              <img src="/imgs/nav_logo.svg" alt="" />
            </div>
            <ul className="links">
              <li><a href="">Home</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Sign Up</a></li>
            </ul>
            <div className="nav_input">
              <div className="search_input">
                <input type="search" placeholder='What are you looking for?' />
                <div className="search_input_icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="nav_icon">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-user"></i>
              </div>
            </div>
          </div>
          <hr />
        </nav>
        <div className="hero">
          <div className="container">
            <div className="hero_info">
              <p>Account /
                Gaming
                Product /
                <span> Havic HV G-92 Gamepad</span>
              </p>
            </div>
            <div className="hero_box">
              <div className="H-logo">

                <div className="logo_cards">
                  <div className="heroCards">
                    <img src="/imgs/heorCards.svg" alt="" />
                  </div>
                  <div className="heroCards">
                    <img src="/imgs/heroCards2.svg" alt="" />
                  </div>
                  <div className="heroCards">
                    <img src="/imgs/heroCards3.svg" alt="" />
                  </div>
                  <div className="heroCards">
                    <img src="/imgs/heroCards4.svg" alt="" />
                  </div>
                </div>
                <div className="heroMain_cards">
                  <img src="/imgs/heroMain_logo.svg" alt="" />
                </div>
              </div>
              <div className="H-info">
                <div className="multi">
                  <h2>Havic HV G-92 Gamepad</h2>
                  <div className="stars">
                    <img src="/imgs/rating.svg" alt="" />
                    <span>(150 Reviews)</span>
                    <div className="stock">
                    </div>
                    <span className='Nstock' >In Stock</span>
                  </div>
                  <h4>$192.00</h4>
                  <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                </div>
                <hr />
                <div className="color">
                  <span>Colours:</span>
                  <div className="color_input">
                    <input name='group' type="radio" />
                    <input name='group' id='input2' type="radio" />
                  </div>
                </div>
                <div className="size">
                  <span>Size:</span>
                  <div className="size_btn">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                  </div>
                </div>
                <div className="buy_box">
                  <div className="buy_number">
                    <button>-</button>
                    <div className="son">
                      <span>2</span>
                    </div>
                    <button>+</button>
                  </div>
                  <div className="buy_now">
                    <button>Buy Now</button>
                  </div>
                  <div className="buy_heart">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div className="delivery">
                  <div className="delivery_2">
                    <div className="icon_deliver">
                      <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div className="free_delivery">
                      <h4>Free Delivery</h4>
                      <u>Enter your postal code for Delivery Availability</u>
                    </div>
                  </div>
                  <hr />
                  <div className="return">
                    <div className="icon_return">
                      <i class="fa-solid fa-arrow-rotate-left"></i>
                    </div>
                    <div className="return_delivery">
                      <h4>Return Delivery</h4>
                      <span>Free 30 Days Delivery Returns.<u> Details</u></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="container">
          <div className="footer_cards">
            <div className="F-info">
              <h2>Exclusive</h2>
              <h4>Subscribe</h4>
              <span>Get 10% off your first order</span>
            </div>
            <div className="footer_input">
              <input type="email" placeholder='Enter your email' />
              <div className="send_icon">
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
          <div className="footer_cards">
            <div className="F-info">
              <h2>Support</h2>
            </div>
            <div className="F-title">
              <p className='sarani'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          <div className="footer_cards">
            <div className="F-info">
              <h2>Account</h2>
            </div>
            <div className="F-title">
              <ul>
                <li><a href="">My Account</a></li>
                <li><a href="">Login / Register</a></li>
                <li><a href="">Cart</a></li>
                <li><a href="">Wishlist</a></li>
                <li><a href="">Shop</a></li>
              </ul>
            </div>
          </div>
          <div className="footer_cards">
            <div className="F-info">
              <h2>Quick Link</h2>
            </div>
            <div className="F-title">
              <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms Of Use</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>
           <div className="footer_cards">
            <div className="F-info">
              <h2>Download App</h2>
            </div>
            <span>Save $3 with App New User Only</span>
            <div className="qr_cards">
              <div className="qr-code">
                <img src="/imgs/qr-code.svg" alt="" />
              </div>
              <div className="dow">
                <div className="google">
                  <img src="/imgs/google.svg" alt="" />
                </div>
                <div className="apple">
                  <img src="/imgs/apple.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="F-cards-icon">
              <div className="face">
              <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className="face">
              <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="face">
              <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="face">
              <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
           </div>
        </div>
      </footer>
    </>
  )
}

export default App
