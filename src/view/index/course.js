import React from 'react';
export default function Course(){
    return (
    <ul className="content_list clearfix">
        <li className="pop_li">
            <div className="popular">Popular</div>
            <h3 className="list_title">
            HTML5 &amp; CSS3 Course 
                <span>Build Awesome Websites</span> 
            </h3>
            <p className="price">FREE</p>
            <div className="txt">
                <p>Learn HTML5 and CSS3 by creating 3 amazing and well designed websites</p>
                <span className="signUp">Apply Now</span>
            </div>
        </li>
        <li className="month_li">
            <h3 className="list_title">Modern JavaScript From The Beginning</h3>
            <p className="price">$30.99</p>
            <div className="txt">
                <p>Learn and build projects with pure JavaScript (No frameworks or libraries)</p>
                <span className="signUp">Apply Now</span>
            </div>
        </li>
        <li className="month_li">
            <h3 className="list_title">The Advanced Web Developer Bootcamp</h3>
            <p className="price">$21.99</p>
            <div className="txt">
                <p>Learn React 16, Redux, ES2015, Testing, CSS Flexbox, Animations, AJAX, and more!</p>
                <span className="signUp">Apply Now</span>
            </div>
        </li>
        <li className="pop_li">
            <div className="popular">Popular</div>
            <h3 className="list_title">JavaScript:<span>The Advanced Concepts</span> </h3>
            <p className="price">$52.99</p>
            <div className="txt">
                <p>Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers</p>
                <span className="signUp">Apply Now</span>
            </div>
        </li>
    </ul>
    );
};