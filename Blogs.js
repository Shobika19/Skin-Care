import cr1 from './images/cr1.webp';
import cr2 from './images/cr2.webp';
import cr3 from './images/cr3.webp';
import cr4 from './images/cr4.webp';
import cr5 from './images/cr5.webp';
import r1 from './images/r1.avif';
import r2 from './images/r2.avif';
import r3 from './images/r3.avif'
import r4 from './images/r4.avif'
import r5 from './images/r5.avif'
import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import p4 from './images/p4.webp';
import p5 from './images/p5.webp';
import p6 from './images/p6.webp';
import p7 from './images/p7.webp';
import p8 from './images/p8.webp';
import b1 from './images/b1.webp'
import b2 from './images/b2.webp'
import b3 from './images/b3.webp'
import b4 from './images/b4.webp'
import b5 from './images/b5.webp'

const Blogs = () => {
    return (
      <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cr1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={cr2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={cr3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={cr4} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={cr5} className="d-block w-100" alt="Slide 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r1} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Clean ingredients</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r2} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Result Oriented</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r3} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Ayurveda Inspired</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r4} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}} >Cruelty Free</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r5} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Gain Profits</p>
        </div>
      </div>
      <div className='eight'>
        <div className="card" style={{ width: '350px' }} id="pink">
          <img src={p1} className="card-img-top" alt="Product"  />
          <div className="card-body">
            <h5 className="card-title">Gheesutra</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p2} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Kumkumadi oil</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p3} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Restorative skin Elixir</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p4} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p5} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p6} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p7} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p8} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="mt-4"> {/* Added some margin-top for spacing */}
        <h1>Shop by wellness concern</h1>
      </div><br></br>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='row g-3'>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b1} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Healthy Hair</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b2} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Muscle Joints</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b3} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Rested Feet</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='row g-3'>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b4} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Peaceful sleep</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b5} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">stress Relief</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b2} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Muscle joints</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden text-white">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <footer className="text-center text-lg-start text-black" style={{ backgroundColor: 'lightsalmon' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration: 'underline' }}>
                                Shop Name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration: 'underline' }}>Products</h6>
                            <p><a className="text-black" href="#">MDBootstrap</a></p>
                            <p><a className="text-black" href="#">MDWordPress</a></p>
                            <p><a className="text-black" href="#">BrandFlow</a></p>
                            <p><a className="text-black" href="#">Bootstrap Angular</a></p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration: 'underline' }}>
                                Useful Links
                            </h6>
                            <p><a className="text-black" href="#">Your Account</a></p>
                            <p><a className="text-black" href="#">Become an Affiliate</a></p>
                            <p><a className="text-black" href="#">Shipping Rates</a></p>
                            <p><a className="text-black" href="#">Help</a></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration: 'underline' }}>Contact</h6>
                            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="p-3">
                                © 2024 Copyright:
                                <a className="text-white" href="https://mdbootstrap.com/">MDFShankara.com</a>
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                                <i class="fab fa-google"></i>
                            </a>
                            <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

    </div>


    )
  };
  
  export default Blogs;



