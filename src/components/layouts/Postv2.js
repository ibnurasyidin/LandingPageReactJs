import React from 'react';
import FeaturedImage from "./FeaturedImage";
import { Link } from '@reach/router';
import { sanitize } from "../../utils/functions";

export const Post = ( props ) => {

	const { post } = props;

	return (
		<div className="row no-gutters">
			<div className="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
			<div className="col-6 col-md-4">.col-6 .col-md-4</div>
		</div>
	)
};
