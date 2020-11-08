import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getWorks from '../../store/action/getWorks'
import img1 from "../../common/images/tab/img1.jpeg"
import img2 from "../../common/images/tab/img2.jpeg"
import img3 from "../../common/images/tab/img3.jpeg"
import img4 from "../../common/images/tab/img4.jpeg"
import Tab from '../../common/component/tab'
import "../../common/css/index.css"
import Course from './course'
import Instructor from './instructor'
import Features from './features'
import Works from './works'
import Frame from '../../common/component/frame'

let imgData = [
    img1,
    img2,
    img3,
    img4
];

function Index(props) {
    function getWorksData() {
        return props.dispatch((getWorks()))
    }

    useEffect(() => {
        getWorksData();
    }, [])

    return (
        <Frame
            pullUp={true}
            getData={getWorksData}
        >
            <div >
                <Tab
                    data={imgData}
                    render={(data) => {
                        return <img src={data} alt="" />
                    }}
                />
                <section className="index_content">
                    <Course />
                    <Instructor />
                    <Features />
                    <Works {...props} />
                </section>
            </div>
        </Frame>
    );
}

export default connect(res => ({ ...res }))(Index);
