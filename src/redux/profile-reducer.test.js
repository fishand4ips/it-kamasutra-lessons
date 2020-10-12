import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It is my first post', likeCount: 20},
        {id: 3, message: 'It is my second post', likeCount: 40},
        {id: 4, message: 'It is my third post', likeCount: 30}
    ],
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("alexander");

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator("alexander");

    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("alexander");
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't decrement if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});