import React from 'react';
import img1 from '../Assets/54950.jpg';
import img2 from '../Assets/riegoSensor.jpg';
import '../Styles/AboutUs.css';

const AboutUs = () => {
    return (
      <div>
        <h1 class="display-4 fw-bold">BestWork</h1>
        <div class="px-4 py-5 my-5 text-center">
          <img
            class="d-block mx-auto mb-4"
            src={img1}
            alt=""
          />
          <h1 class="display-6 fw-bold">Mission</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt,
              urna proin lacinia eu montes platea mauris. Nunc proin at conubia
              nam donec hendrerit dictumst rutrum augue ad, massa enim netus leo
              platea ultrices dapibus rhoncus hac, eleifend ligula tempus
              fermentum himenaeos curabitur venenatis felis aenean. Nec augue
              facilisi quis curabitur elementum platea natoque eros placerat,
              senectus egestas pellentesque risus euismod magna fermentum mus,
              ullamcorper nascetur sed ultrices congue lectus pharetra bibendum.
            </p>
            {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div> */}
          </div>
        </div>

        <div class="b-example-divider"></div>

        <div class="px-4 pt-5 my-5 text-center border-bottom">
          <h1 class="display-6 fw-bold">Vision</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis,
              est cubilia metus litora proin habitant phasellus, nascetur
              imperdiet tempus egestas vehicula inceptos torquent. Parturient
              iaculis ut cras felis faucibus lacinia accumsan purus etiam
              sociosqu porta tellus, phasellus mus proin imperdiet venenatis
              conubia sollicitudin ullamcorper dis aenean. Nec mollis interdum
              sollicitudin nostra cras nullam tincidunt luctus etiam, platea
              commodo ornare in mus phasellus pulvinar suscipit, porttitor
              convallis cursus habitant pellentesque sociis torquent nunc.
              Himenaeos consequat sociis aenean mattis lobortis condimentum
              sodales sem, metus cubilia hendrerit facilisis tincidunt facilisi
              tristique neque, auctor ante accumsan imperdiet ac sagittis porta.
              Maecenas neque orci eu lacinia vulputate primis in felis, sem
              netus euismod taciti magnis morbi placerat dignissim, curae magna
              imperdiet est posuere conubia eros. Justo urna pretium enim
              senectus pellentesque orci conubia congue, ullamcorper gravida
              nulla fusce neque sagittis vitae, taciti class dictum varius vel
              aliquam purus.
            </p>
          </div>
          <div class="overflow-hidden">
            <div class="container px-5">
              <img
                src={img2}
                class="img-fluid border rounded-3 shadow-lg mb-4"
                alt=''
              />
            </div>
          </div>
        </div>

        {/* <div class="b-example-divider"></div> */}
      </div>
    );
}

export default AboutUs;
