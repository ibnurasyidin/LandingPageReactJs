import React from 'react';
import FeaturedImage from "./FeaturedImage";
import { Link } from '@reach/router';
import { sanitize } from "../../utils/functions";

export const Post = ( props ) => {

	const { post } = props;

	return (

						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								{/*<svg className="bd-placeholder-img card-img-top" width="100%" height="225"
									 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
									 focusable="false" role="img" aria-label="Placeholder: Thumbnail">*/}
									 <div  width="225" height="225">
									{ post.attachment_image.img_sizes ? <FeaturedImage title={ post.title } image={ post.attachment_image }/> : '' }
									 </div>
								{/*</svg>*/}
								<div className="card-body">
									{ post.title ? <Link to={`/post/${ post.id }`} className="h4">{ post.title }</Link> : '' }
									{ post.title ? <p className="post-excerpt mt-4" dangerouslySetInnerHTML={{__html: sanitize( post.excerpt )}}/> : '' }
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-outline-secondary">View
											</button>
											<button type="button" className="btn btn-sm btn-outline-secondary">Edit
											</button>
										</div>
										<small className="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>



	)
};
