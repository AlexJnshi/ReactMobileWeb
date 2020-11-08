import React from 'react';

export default function Works(props) {
    let { data, loadEnd, loading } = props.works;
    return (
        <div className="works">
            <h3>Student works</h3>
            <ul className="works_list clearfix">
                {data.map(item => (
                    <li key={item.id}>
                            <img src={item.icon} className="work_a" alt=""/>
                            <span className="wrork_txt clearfix work_a">
                                <strong className="work_a">{item.title}</strong>
                                <span className="work_a">
                                    <em className="work_a">{item.message}</em>
                                    <em className="work_a">{item.good}</em>
                                </span>
                            </span>
                    </li>
                ))}
            </ul>
            <span className="more">{loadEnd ? "No more content" : (loading ? "Loading" : "slide up to load more")}</span>
        </div>
    );
};