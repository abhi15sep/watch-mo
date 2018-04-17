import React from "react";

const Recommendations = props => (
	<div className="col-md-4">
		<section className="pt-4 recommendations">
			<h4 className="mb-4">Similar Movies</h4>
			<ul className="row">{props.list}</ul>
		</section>
	</div>
);

export default Recommendations;