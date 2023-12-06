// File: TabsContainer.js
import React, { useState } from 'react';
import Tab from './tab';
import TextAnimation from './text_animation';
import MainComponent from './mainCard';
import Tags from './tags';




const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container py-4">
      <div className="row ">
        <div className="col-md-3 position-fix">
          <div className="nav flex-column fix-nav nav-pills nav-pills-custom " id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Tab id={0} iconClass="fa-house"  label="Home" activeTab={activeTab} changeTab={changeTab} />
            <Tab id={1} iconClass="fa-address-card" label="About" activeTab={activeTab} changeTab={changeTab} />
            <Tab id={2} iconClass="fa fa-diagram-project" label="Projets" activeTab={activeTab} changeTab={changeTab} />
            <Tab id={3} iconClass="fa fa-envelope" label="Contact Me" activeTab={activeTab} changeTab={changeTab} />
          </div>
        </div>

        <div className="tab-content col-md-9" id="v-pills-tabContent">
          <div className={`tab-pane fade shadow rounded text-light ${activeTab === 0 ? 'show active' : ''} p-5`} id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
            <h1 className="font-italic mb-4 text-center">Hey, I'm Khalid Makadmi</h1>
            <p className="font-italic  mb-2 text-light  text-center"><TextAnimation /></p>
            <p className='text-profile'>
              junior full stack development with an analytical mind and an effective approach to problems. I provide companies with my skills and my thirst for learning and development.</p>
            <p className="text-center"><button className='btn-Contact'>Contact Me</button></p>
          </div>


          <div className={`tab-pane fade shadow rounded text-light ${activeTab === 1 ? 'show active' : ''} p-5`} id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"  tabindex="0">
            <h4 className="font-italic mb-4 text-center">About</h4>
            <div className="font-italic  mb-2 text-light">
              <div className="row">
                <div className="col col-lg-6 col-xl-6 col-md-12 col-sm-12">Greetings! I'm an enthusiastic web developer with a versatile skill set, specializing in full-stack development. My expertise spans both front-end and back-end development, and I'm actively seeking opportunities to grow in both domains.
                  Currently on the lookout for full-stack roles, I'm eager to connect and discuss potential collaborations. Engaged in diverse projects to refine my skills, I'm particularly focused on specific tech stacks and frameworks.
                  Outside of work, I have a passion for collecting figures, enjoy watching shows, delve into UI/UX designs, and maintain a healthy workout routine.
                  Feel free to reach out if you're interested in exploring collaboration possibilities. Looking forward to connecting!</div>
                <div className="col col-lg-6 col-xl-6 col-md-12 col-sm-12">
                  <Tags/>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-pane fade shadow rounded text-light ${activeTab === 2 ? 'show active' : ''} p-5`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <h4 className="font-italic mb-4 text-center">Projects</h4>
            <MainComponent />
          </div>

          <div className={`tab-pane fade shadow rounded text-light ${activeTab === 3 ? 'show active' : ''} p-5`} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            <h4 className="font-italic mb-4 text-center">Contact Me</h4>
            <h5 className='text-center contact_conatine'>
              Hey, send me an email if you want to connect! Additionally, you can find me on <a href="https://www.linkedin.com/in/khalid-mkadmi-1a3178203/">LinkedIn</a> , shoot a message if you have to! <i className="fa-regular fa-envelope"></i>
              <a href="https://mail.google.com/mail/u/1/#inbox"> mkadmikh12@gmail.com</a>
            </h5>
          </div>
        </div>
      </div>
      
    </div>

  );
};

export default TabsContainer;
