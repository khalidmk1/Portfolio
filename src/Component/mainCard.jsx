import React from 'react';
import Card from './project_card';

const MainComponent = () => {
    // Sample data for cards
    const cardData = [
        {
            link: 'https://github.com/khalidmk1/beldilook_v_web.git',
            git_link: 'https://github.com/khalidmk1/beldilook_v_web.git',
            image: './project_img/Capture.jpg',
            title: 'beldilook',
            soutitle: 'Boostrap, Laravel, Css, Jquery',
            description: 'This platform offers a straightforward approach to kickstarting your sales. Create an account, make a one-time payment to activate your seller status, and start selling by adding products. Include up to five photos and a detailed description. Have full control over pricing, receive prompt payment upon sales, and benefit from our delivery service for a seamless online sales experience.',
        },
        {
            link: 'https://github.com/khalidmk1/E_classe_last_v.git',
            git_link: 'https://github.com/khalidmk1/E_classe_last_v.git',
            image: './project_img/khalid.electroniqueclasse.com.png',
            title: 'E-classe',
            soutitle: 'Laravel, Jquery, Css, Boostrap, Api, Figma',
            description: 'This e-learning platform provides a user-friendly experience for individuals seeking education. Users authenticate their accounts and then explore available professors. Upon selecting a professor, they can participate in one-on-one video call sessions for personalized classes. The platform seamlessly connects learners with educators, offering a dynamic and interactive environment for effective online learning.',
        },
        {
            link: 'https://github.com/khalidmk1/eventa.git',
            https: 'https://github.com/khalidmk1/eventa.git',
            image: './project_img/SALON FESTIF.png',
            title: 'Eventa',
            soutitle: 'Laravel, Jquery, Css, Boostrap, Figma',
            description: 'Introducing an innovative event creation platform where organizers can effortlessly create and manage events. Participants on the platform can easily browse and engage in these events. Each event comes equipped with a unique QR code for hassle-free entry. ',
        },
    ];

    return (

        <div className="row row-cols-1 row-cols-md-2 g-4">
            {cardData.map((card, index) => (
                <div className="col-12">
                    <Card key={index} {...card} />
                </div>
            ))}
        </div>


    );
};

export default MainComponent;
