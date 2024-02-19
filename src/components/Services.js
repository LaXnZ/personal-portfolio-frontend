import React from "react";

const Services = () => {
  return (
    <div class="section" id="services">
      <div class="container rows">
        <div class="tab">
          <button
            class="tablinks"
            onclick="openCity(event, 'London')"
            id="defaultOpen"
          >
            services
          </button>
          <button class="tablinks" onclick="openCity(event, 'Paris')">
            technologies
          </button>
          <button class="tablinks" onclick="openCity(event, 'Tokyo')">
            industry
          </button>
        </div>
      </div>
      <div class="container rows">
        <div class="tabcontent" id="London">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img
                    src="https://image.flaticon.com/icons/svg/426/426487.svg"
                    alt="Web Development"
                  />
                </div>
                <div class="sectionWords">
                  <h4>Web Development</h4>
                  <p>
                    Expand your business outreach by capitalizing on web
                    development services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img
                    src="./assets/images/img2.svg"
                    alt="Mobile Development"
                  />
                </div>
                <div class="sectionWords">
                  <h4>Mobile Development</h4>
                  <p>
                    Optimize smart ways to deal with the customers.Hire skilled
                    mobile app developer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img3.png" alt="PWA development" />
                </div>
                <div class="sectionWords">
                  <h4>PWA development</h4>
                  <p>
                    Progressive Web Apps, it can be said that this is a new
                    technology for interacting with the target audience.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img
                    src="./assets/images/img6.svg"
                    alt="Cross-Platform App"
                  />
                </div>
                <div class="sectionWords">
                  <h4>Cross-Platform App</h4>
                  <p>
                    Using React Native and flutter to build single app that
                    performs on both Android and iOS.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img4.svg" alt="UX/UI Designs" />
                </div>
                <div class="sectionWords">
                  <h4>UX/UI Designs</h4>
                  <p>
                    intuitive, user-friendly products for the success of your
                    business to create a human-friendly visual language.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img5.svg" alt="Digital Marketing" />
                </div>
                <div class="sectionWords">
                  <h4>Digital Marketing</h4>
                  <p>
                    Data-driven strategies maximize lifecycle value by align
                    your technology and marketing execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tabcontent" id="Paris">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img7.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Mobile Development</h4>
                  <ul>
                    <li>Flutter Framework</li>
                    <li>Android Apps</li>
                    <li>React Native</li>
                    <li>Ionic Framework</li>
                    <li>Xamarin Framework</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img8.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>UX/UI Designs</h4>
                  <ul>
                    <li>Sketch</li>
                    <li>Figma</li>
                    <li>Flinto</li>
                    <li>Adobe XD</li>
                    <li>Blender</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img9.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Web Development</h4>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJs</li>
                    <li>Jquery</li>
                    <li>JSON</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img10.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>E-commerce</h4>
                  <ul>
                    <li>Shopify</li>
                    <li>WooCommerce</li>
                    <li>Drubal</li>
                    <li>Magento</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img11.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Server Side</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>PHP</li>
                    <li>Express.js Framework</li>
                    <li>Laravel Framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tabcontent" id="Tokyo">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img12.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Construction</h4>
                  <p>
                    Advanced software solutions that take Construction into the
                    Digital Era.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img13.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Healthcare</h4>
                  <p>
                    Patient-friendly software that empowers healthcare industry
                    workers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img14.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Retail & ECommerce</h4>
                  <p>
                    Engaging and exciting software solutions for modern retail.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img15.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>FinTech</h4>
                  <p>
                    Meet the demands of modern customers in speed and security
                    with scalable financial technology
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img16.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Travel & Hospitality</h4>
                  <p>
                    Extend the comfort of your resort with practical software
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="./assets/images/img17.svg" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Logistics</h4>
                  <p>
                    Use all the latest tech available to make your logistics run
                    like clockwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
