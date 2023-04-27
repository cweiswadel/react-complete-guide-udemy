import React from 'react';
import './Card.css';

const Card = (props) => {
	const classes = "card " + props.className; // any outside class names are updating this wrapping card component
	return <div className={classes}>{props.children}</div>;
}

export default Card;
