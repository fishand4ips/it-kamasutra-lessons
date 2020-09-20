import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.flaticon.com/svg/static/icons/svg/924/924874.svg' alt='post logo'/>
                {props.message}
                <div>
                    <span>{props.likeCount} like</span>
                </div>
            </div>
        </div>
    );
};

export default Post;