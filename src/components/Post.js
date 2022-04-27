import React from "react";


export default function Post(props){
    return (
        <section className="post--grid-container">
            <img src={props.item.imageUrl} alt={props.item.title} className="post--image" />
            <div className="post--list">
                <div className="post--header">
                    <img src="../images/pinpoint.png" alt="Pinpoint" className="post--header-img"/>
                    <p className="post--location">{props.item.location}</p>
                    <a href="#">View on Google Maps</a>
                </div>
                <h1 className="post--title">{props.item.title}</h1>
                <h4 className="post--date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="post--description">{props.item.description}</p>
            </div>

        </section>
    )
}