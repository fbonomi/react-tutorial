import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

import HeaderTitle from './HeaderTitle/HeaderTitle';

const Single = React.createClass({

    render() {
        const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);

        return (
            <div>
                <HeaderTitle title="Photo detail" menuItem="photo_grid" />
                <div className="single-photo">
                    <Photo key={i} i={i} post={this.props.posts[i]} {...this.props} />
                    <Comments {...this.props} postId={i} />
                </div>
            </div>
        );
    }
});

export default Single;