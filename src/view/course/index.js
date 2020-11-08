import React from 'react'
import Frame from '../../common/component/frame'
import "../../common/css/course.css"
function Course() {
    return (
        <Frame>
            <div className="class_box">
                <h2><span>Timetable</span></h2>
                <table className="timetable">
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Time</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="weekdays" rowSpan="2">MON</td>
                            <td className="center">9:00-11:30</td>
                            <td className="content_td">Subject 1</td>
                        </tr>
                        <tr>
                            <td className="center">13:00-15:30</td>
                            <td className="content_td">Subject 2</td>
                        </tr>
                        <tr>
                            <td className="week2" rowSpan="2">TUE</td>
                            <td className="center">9:00-11:30</td>
                            <td className="content_td">Subject 3</td>
                        </tr>
                        <tr>
                            <td className="center">13:00-15:30</td>
                            <td className="content_td">Subject 4</td>
                        </tr>
                        <tr>
                            <td className="week3" rowSpan="2">WED</td>
                            <td className="center">9:00-11:30</td>
                            <td className="content_td">Subject 5</td>
                        </tr>
                        <tr>
                            <td className="center">13:00-15:30</td>
                            <td className="content_td">Subject 6</td>
                        </tr>
                        <tr>
                            <td className="week4" rowSpan="2">THU</td>
                            <td className="center">9:00-11:30</td>
                            <td className="content_td">Subject 7</td>
                        </tr>
                        <tr>
                            <td className="center">13:00-15:30</td>
                            <td className="content_td">Subject 8</td>
                        </tr>
                        <tr className="single">
                            <td className="center week5">FRI</td>
                            <td className="center">All day</td>
                            <td className="content_td">Subject 9</td>
                        </tr>
                        <tr className="single">
                            <td className="center week6">WEND</td>
                            <td className="center" colSpan="2">Have a fun</td>
                        </tr>
                    </tbody>
                </table>
                <p className="more_message">
                    More info: <span href="#">www.google.com</span>
                </p>
            </div>
            <footer id="footer">
                <div className="link clearfix">
                    <span>Alex.shi2957@gmail.com</span>
                    <span>+61-12345678</span>
                </div>
                <nav className="foot_nav clearfix">
                    <span>Home</span>
                    <span>Course</span>
                    <span>Student work</span>
                    <span>About us</span>
                    <span>Message</span>
                    <span>FAQ</span>
                </nav>
                <p className="copyright">&copy;Copyright</p>
            </footer>
        </Frame>
    );
}

export default Course;
