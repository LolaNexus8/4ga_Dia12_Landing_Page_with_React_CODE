import React from "react";
export function Jumbotron(props) {
	return (
		<div className="container mt-3">
			<div className="jumbotron">
				<h1 className="display-4">¡Hola mundo! Soy Lola.</h1>
				<p className="lead">
					Esto es un ejercicio para hacer una Landing Page con React.
					Esto es un ejercicio para hacer una Landing Page con React.
					Esto es un ejercicio para hacer una Landing Page con React.
					Esto es un ejercicio para hacer una Landing Page con React.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to
					space content out within the larger container. It uses
					utility classNamees for typography and spacing to space
					content out within the larger container. It uses utility
					classNamees for typography and spacing to space content out
					within the larger container. It uses utility classNamees for
					typography and spacing to space content out within the
					larger container.
				</p>
				<a className="btn btn-warning btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</div>
	);
}
