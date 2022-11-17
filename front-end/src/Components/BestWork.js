import React from 'react';
import logo from '../Assets/riego.jpg';
import img2 from '../Assets/riego2.jpg';
import img3 from '../Assets/lechuga1.jpg';
import img4 from '../Assets/lechuga2.jpg';
import img5 from '../Assets/riegoSensor.jpg';
import img6 from '../Assets/estadistica.jpg';
import '../Styles/BestWork.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Button, Modal, Form } from "react-bootstrap";

const BestWork = () => {
    return (
      <>
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={logo} class="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Best Work</h3>
                <p>
                  We are a company that helps make it easier for your irrigation
                  to be more manageable.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={img2} class="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Irrigation maintenance</h3>
                <p>Ease of irrigation.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Romaine lettuce</h3>
                <p>
                  It is a variety with a wide, elongated and upright trunk. Its
                  leaves are dark green and are grouped loosely around a trunk,
                  without forming a true bud. Hearts: they are small-stemmed
                  lettuces that form a head similar to that of cabbage.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Irrigation system control</h1>
              <p class="lead text-muted">
                The elements likely to improve the automation of irrigation
                networks and, therefore, regulate and control flows, the times
                and other features are many and varied. The equipment that forms
                part of the irrigation installations offer great advantages:
                <br />
                <br />
                <ul>
                  <li>
                    Greater accuracy and security in the control of the
                    installation.
                  </li>
                  <li>Error-free mechanized operations.</li>
                  <li>Labor reduction.</li>
                  <li>Recording of data for later analysis.</li>
                  <li>Easy to handle it.</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
        
        {/* <div class="b-example-divider"></div> */}

        <section class=" py-4 my-0">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4" key={""}>
                <div class="card my-3">
                  <div class="card-thumbnail">
                    <img src={img4} class="img-fluid" alt="thumbnail" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Ball lettuce</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">Description</h5>
                    <p class="card-text">
                      Romaine lettuce, Romaine lettuce, cos, Italian, orejona or
                      escarole (often called simply Romaine or Cos) (scientific
                      name Lactuca sativa L. var. longifolia) is a variety of
                      lettuce that grows with a long head and has a robust,
                      elongated leaves with a robust central nerve.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4" key={""}>
                <div class="card my-3">
                  <div class="card-thumbnail">
                    <img src={img5} class="img-fluid" alt="thumbnail" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Technology for irrigation</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">Description</h5>
                    <p class="card-text">
                      It has irrigation technology with the use of the oxygen
                      sensor.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button type="button" class="btn btn-info">
                        Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4" key={""}>
                <div class="card my-3">
                  <div class="card-thumbnail">
                    <img src={img6} class="img-fluid" alt="thumbnail" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Irrigation statistics.</h5>
                    <p class="card-text"></p>
                    <h5 class="card-title">Description</h5>
                    <p class="card-text">
                      It has a record of your irrigation showing it through
                      statistics.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Button as={Link} variant="info" to="/Graf">
                        See irrigation statistics
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="b-example-divider"></div>
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom  pb-3 mb-3">
              <a class="nav-link px-2 text-muted" href="https://twitter.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <li class="nav-item">
                <a
                  class="nav-link px-2 text-muted"
                  href="https://www.facebook.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
              <li class="nav-item">
                <p class="nav-link px-2 text-muted">
                  BestWork1@gmail.com
                </p>
              </li>
              <li class="nav-item">
                <p class="nav-link px-2 text-muted">9612618230</p>
              </li>
            </ul>
            <p class="text-center text-muted">
              &copy; 2022 Company BestWork, Inc
            </p>
          </footer>
        </div>
      </>
    );
} 
export default BestWork;