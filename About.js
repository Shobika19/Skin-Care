import cr1 from './images/cr1.webp';
import cr2 from './images/cr2.webp';
import cr3 from './images/cr3.webp';
import cr4 from './images/cr4.webp';
import cr5 from './images/cr5.webp';
import about1 from './images/about1.avif';
import ab2 from './images/ab2.avif';
import ab3 from './images/ab3.avif';
import ab4 from './images/ab4.avif';
import about from './images/about.webp'
import './about.css';
import r2 from './images/r2.avif';
import about2 from './images/about2.webp';
import about3 from './images/about3.webp';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

const About = () => {
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
            <div className="picture">
                <div className="flex" style={{ width: '150px' }}>
                    <img src={about1} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <p className="flex-text">Penetrates into the skin into a deepest layer</p>
                    </div>
                </div>


                <div className="flex" style={{ width: '150px' }}>
                    <img src={ab2} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <p className="flex-text">Penetrates into the skin into a deepest layer</p>
                    </div>
                </div>
                <div className="flex" style={{ width: '150px' }}>
                    <img src={ab3} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <p className="flex-text">Penetrates into the skin into a deepest layer</p>
                    </div>
                </div>
                <div className="flex" style={{ width: '150px' }}>
                    <img src={ab4} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <p className="flex-text">Penetrates into the skin into a deepest layer</p>
                    </div>
                </div>
                <div className="flex" style={{ width: '150px', marginTop: '50px' }}>
                    <img src={r2} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <p className="flex-text" style={{ fontSize: '17px' }}>Penetrates into the skin into a deepest layer</p>
                    </div>
                </div>

                {/* Sections */}
                <div className="container my-5">
                    <h1 className="mb-4">Wild Crafted & Organic Ingredients</h1>
                    <hr></hr>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img src={about} className="img-fluid" alt="Wild Crafted & Organic Ingredients" />
                        </div>
                        <div className="col-md-6">
                            <p className="fs-4">
                                Shankara sources all natural ingredients in a responsible manner.<br />
                                Shankara is a natural line that sources (ALL OF THE)<br />
                                best natural ingredients in a responsible manner.<br />
                                Shankara is not a chemical or a chemical-based line.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <h1 className="mb-4">Our Formulation</h1>
                    <hr></hr>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p className="fs-4">
                                Shankara sources all natural ingredients in a responsible manner.<br />
                                Shankara is a natural line that sources (ALL OF THE)<br />
                                best natural ingredients in a responsible manner.<br />
                                Shankara is not a chemical or a chemical-based line.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={about2} className="img-fluid" alt="Our Formulation" />
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <h1 className="mb-4">Our Products</h1>
                    <hr></hr>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img src={about3} className="img-fluid" alt="Our Products" />
                        </div>
                        <div className="col-md-6">
                            <p className="fs-4">
                                Shankara sources all natural ingredients in a responsible manner.<br />
                                Shankara is a natural line that sources (ALL OF THE)<br />
                                best natural ingredients in a responsible manner.<br />
                                Shankara is not a chemical or a chemical-based line.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
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
}
export default About;