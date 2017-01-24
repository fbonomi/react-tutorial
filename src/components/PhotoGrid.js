import React from 'react';
import Photo from './Photo';
import HeaderTitle from './HeaderTitle/HeaderTitle';

const PhotoGrid = React.createClass({

    componentDidMount() {
        this.props.setPage('photo_grid');
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.refs.item.value);
    },

    render() {
        return (
            <div>
                <HeaderTitle title="Photo grid" menuItem="photo_grid" />
                <div className="photo-grid">
                    {this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}
                </div>
            </div>
        );
    }
});

export default PhotoGrid;