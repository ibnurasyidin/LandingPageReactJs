import React, {useEffect} from 'react';
import FeaturedImage from "./FeaturedImage";
import {Link} from '@reach/router';
import {sanitize} from "../../utils/functions";
import Moment from 'react-moment';
import axios from 'axios';
import renderHTML from 'react-render-html';

import clientConfig from "client-config";


export const Post = (props) => {

    this.state = {
        loading: false,
        posts: [],
        error: ''
    };

    const {post} = props;


   /* createMarkup = ( data ) => ({
        __html: data
    });*/

   /* useEffect(()=>
    {

        const wordPressSiteURL = clientConfig.siteUrl;
        this.setState({loading: true}, () => {
            axios.get(`${wordPressSiteURL}/wp-json/wp/v2/posts/`)
                .then(res => {
                    if (200 === res.status) {
                        if (res.data.length) {
                            this.setState({loading: false, posts: res.data});
                        } else {
                            this.setState({loading: false, error: 'No Posts Found'});
                        }
                    }

                })
                .catch(err => this.setState({loading: false, error: err}));
        })
    },)*/

   /* render()
    {
        const {loading, posts, error} = this.state;*/
        return (
          /*  <React.Fragment>
                { error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }*/
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <div>
                        {post.attachment_image.img_sizes ?
                            <FeaturedImage title={post.title} image={post.attachment_image}/> : ''}
                    </div>
                    <div className="card-body">
                        <div className="post-meta">
                            <div className="post-date">
                                <span>{post.date}</span>
                            </div>
                            {post.categories.length ? (
                                <div className="post-category">
                                    {
                                        post.categories.map((category, index) => {
                                            return (
                                                // If its not the last item.
                                                index !== (post.categories.length - 1) ?
                                                    <Link to={`category/${category.term_id}`}
                                                          key={category.term_id}>{category.name}, </Link>
                                                    :
                                                    <Link to={`category/${category.term_id}`}
                                                          key={category.term_id}>{category.name}</Link>
                                            );
                                        })
                                    }
                                </div>
                            ) : ''}
                        </div>
                        {post.title ? <Link to={`/post/${post.id}`} className="h4">{post.title}</Link> : ''}
                        {post.title ? <p className="post-excerpt mt-4"
                                         dangerouslySetInnerHTML={{__html: sanitize(post.excerpt)}}/> : ''}
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit
                                </button>
                            </div>
                            <div className="card-footer">
                                <Moment fromNow>{post.date}</Moment>
                                <Link to={`/post/${post.id}`} className="btn btn-secondary float-right"
                                      style={{textDecoration: 'none'}}>
                                    Read More...
                                </Link>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

            /*</React.Fragment>*/
        )
    }
 /*   ;
}*/
