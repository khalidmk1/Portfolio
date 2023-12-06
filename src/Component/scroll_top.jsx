import React, { useEffect } from 'react';

const Scroll = () => {
    useEffect(() => {
        //Get the button
        let mybutton = document.getElementById("btn-back-to-top");

        // When the user scrolls down 20px from the top of the document, show the button
        const scrollFunction = () => {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };

        // When the user clicks on the button, scroll to the top of the document
        const backToTop = () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

        window.onscroll = function () {
            scrollFunction();
        };

        // Attach click event after the component has mounted
        mybutton.addEventListener("click", backToTop);

        // Cleanup the event listener when the component unmounts
        return () => {
            mybutton.removeEventListener("click", backToTop);
        };
    }, []); // Empty dependency array ensures that the effect runs only once after the initial render

    return (
        <button type="button" className="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default Scroll;
