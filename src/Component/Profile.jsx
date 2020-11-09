import { Avatar } from '@material-ui/core'
import React from 'react'
import './profile.css'

function Profile({profile,avatar,status,paragraph, className}) {
    console.log(profile);
    return (
        <div>
            <div className={className}>
            <div className="profile">
                <Avatar src={avatar} />
                <div className="status">
                    <h4>{profile}</h4>
                    <p>{status}</p>
                </div>
            </div>
            <p>{paragraph}</p>
            </div>
            </div>
    )
}

export default Profile
