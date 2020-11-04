import React from 'react';
import './post-list-item.css';
import { Component } from 'react';
import Image from '../Image/Image';


export default class PostListItem extends Component {


    onLike() {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    render() {
        const { label, onDelete, onToggleLiked, like, imgUrl } = this.props
        let classNames = "app-list-item d-flex justify-content-between"
        if (like) {
            classNames += " like"
        }

        return (

            <div className={classNames}>
                <Image imgUrl={imgUrl} />
                <span
                    className=" app-list-item-label "
                >
                    <p className="textContent">{label}</p>
                </span>
                <div className=" buttonsGroup">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleLiked}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                    <button
                        type="button" className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>

                </div>
            </div>
        )
    }
}

