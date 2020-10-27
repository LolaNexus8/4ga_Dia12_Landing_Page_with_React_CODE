import React from "react";
export function Card(props) {
	return (
		<div className="d-flex justify-content-center">
			<div className="card">
				<img
					src="https://picsum.photos/500/350"
					className="card-img-top"
					alt="imagenes Random"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card&apos;s content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
