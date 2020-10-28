import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<div className="container mt-3">
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					erat nisl, sollicitudin viverra scelerisque at, consequat
					eget leo. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Sed erat nisl, sollicitudin viverra scelerisque at,
					consequat eget leo.
				</p>
				<a
					className="btn btn-warning btn-lg"
					// target="_blank"
					href={props.urlJumbutton}
					role="button">
					Call to action!
				</a>
			</div>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	urlJumbutton: PropTypes.string
};
