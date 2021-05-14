import React from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
import Loader from "../loader.gif";
import renderHTML from 'react-render-html';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import clientConfig from '../client-config';
import ExamplesNavbar from "./Navbars/ExamplesNavbar";
import Footer from "../views/index-sections/Footer";
import DarkFooter from "./Footers/DarkFooter";

class Homeo extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			posts: [],
			error: ''
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	componentDidMount() {
		const wordPressSiteURL = clientConfig.siteUrl;

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts/` )
				.then( res => {
					if ( 200 === res.status ) {
						if ( res.data.length ) {
							this.setState( { loading: false, posts: res.data } );
						} else {
							this.setState( { loading: false, error: 'No Posts Found' } );
						}
					}

				} )
				.catch( err => this.setState( { loading: false, error: err } ) );
		} )
	}

	render() {

		const { loading, posts, error } = this.state;

		return(
			<React.Fragment>
				<ExamplesNavbar/>
				{/*<Navbar/>*/}
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ posts.length ? (
					<div className="mt-5 posts-container">
						{ posts.map( post => (
							<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
								<div className="card-header">
									<Link to={`/post/${post.id}`} className="text-secondary font-weight-bold" style={{ textDecoration: 'none' }}>
										{renderHTML( post.title.rendered )}
									</Link>
								</div>
								<div className="card-body">
									<div className="card-text post-content">{ renderHTML( post.excerpt.rendered ) }</div>
								</div>
								<div className="card-footer">
									<Moment fromNow >{post.date}</Moment>
									<Link to={`/post/${post.id}`} className="btn btn-secondary float-right" style={{ textDecoration: 'none' }}>
										Read More...
									</Link>
								</div>
							</div>
						) ) }
					</div>
				) : '' }
				{ loading && <img className="loader" src={Loader} alt="Loader"/> }

				<div className="wrapper">
					<div className="main">
						<Footer/>
					</div>
					<DarkFooter/>
				</div>
			</React.Fragment>

		);

	}
}

export default Homeo;
