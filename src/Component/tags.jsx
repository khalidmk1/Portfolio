import React from 'react'

const Tags = () => {
    const Frameworks = ['JavaScript', 'HTML/CSS', 'React', 'Github/Git', 'Bootstrap CSS', 'Laravel', 'Java', 'JQuery',
        'SQL', 'Python'];
    const  Learning = ['Flutter' , 'Machine Learning' , 'Tailwind' , 'Next.js']

    return (
        <div  className='tools'>
            <h2><i className="fa-solid fa-face-smile-wink"></i> Languages/Frameworks</h2>
            {Frameworks.map((element, index) => (
                    <span key={index}>{element}</span>
               
            ))}
            <h2><i className="fa-solid fa-face-smile"></i> Learning</h2>
            {Learning.map((element, index) => (
                    <span key={index}>{element}</span>
               
            ))}
        </div>
    );


}

export default Tags;