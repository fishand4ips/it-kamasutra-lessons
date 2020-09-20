import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    alt='img'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descript
            </div>
        </div>
    );
};

export default ProfileInfo;