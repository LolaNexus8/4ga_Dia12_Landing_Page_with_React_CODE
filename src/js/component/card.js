import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card text-center">
			<img
				src={props.urlImg}
				className="card-img-top"
				alt="Imagenes random."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.textCard}</p>
			</div>
			<div className="card-footer">
				<a
					// target="_blank"
					href={props.buttonCard}
					className="btn btn-primary">
					{props.textButtonCard}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	urlImg: PropTypes.string,
	title: PropTypes.string,
	textCard: PropTypes.string,
	buttonCard: PropTypes.string,
	textButtonCard: PropTypes.string
};
