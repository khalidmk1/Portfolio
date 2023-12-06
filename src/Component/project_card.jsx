import React from 'react';

const Card = ({ link, git_link ,image, soutitle , title, description }) => {
    return (
        <div className="card project_card">
            <div className='card img_card p-4'>
                <a href={link}>
                    <img src={image} className="card-img-top"
                        alt="Hollywood Sign on The Hill" />
                </a>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="card-title">{title}</h3>
                    <a href={git_link}>
                    <i className="fa-brands fa-github github_icon"></i>
                    </a>
                    
                </div>
                <h5 className='soutitle'>{soutitle}</h5>
                <p className="card-text text-description">
                    {description && description.slice(0, 300)}
                </p>
            </div>
        </div>





    );
};

export default Card;
