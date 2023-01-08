import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img src="https://ru.sputnik.kg/sharing_snippet/1040598617.png?1534078980"/>
            </div>
            <div className={s.discriptionBlock}>
                ava + discription-block
            </div>
        </div>

    );
}


export default ProfileInfo;