import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

import HeaderTitle from './HeaderTitle/HeaderTitle';

const Single = React.createClass({

    componentDidMount() {
        this.props.setPage('photo_grid', 'Photo detail');
    },

    render() {
        const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);

        return (
            <div>
                <div className="single-photo">
                    <Photo key={i} i={i} post={this.props.posts[i]} {...this.props} />
                    <Comments {...this.props} postId={i} />
                </div>
            </div>
        );
    }
});

export default Single;