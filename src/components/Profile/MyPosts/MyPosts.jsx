import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../../utils/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likeCount={p.likeCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newPostText" validate={[required, maxLength10, minLength2]}
                       placeholder="input..."/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

AddNewPostForm = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm);

export default MyPosts;