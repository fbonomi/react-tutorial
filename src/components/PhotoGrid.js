import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({

    componentDidMount() {
        this.props.setPage('photo_grid', 'Photo grid');
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.refs.item.value);
    },

    render() {
        return (
            <div>
                <div className="photo-grid">
                    {this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}
                </div>
            </div>
        );
    }
});

export default PhotoGrid;