import React,{useState} from 'react'
import people from '../image/IMG_20200315_113241_6.jpg'
 import jidenna from '../image/Michael.jpg'
 import me from '../image/Toby.jpg'
import Profile from './Profile'
import './state.css'

function State() {

    const [state,setState] = useState(
        [
        
            {   
                id: 1,
                className: 'statusone',
                profile: "Samuel Mbah",
                avatar: people,
                status:"verified buyer",
                paragraph: `We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, 
                but we also received it in time.
                Excellent!` 
            },
            {
                id: 2,
                className: 'statustwo',
                profile: "Michael Jidenna",
                avatar: jidenna,
                status:"verified buyer",
                paragraph: `"Customer service is always excellent 
                and very quick turn around. Completely
                delighted with the simplicity of 
                the purchase and the speed of delivery."`,
            },
            {
                id: 3,
                className: 'statusthree',
                profile: "Okoro Tobechi",
                 avatar: me,
                status:"verified buyer",
                paragraph:`   "Put an order with this company 
                and can only praise them for the very high
                standard. Will definitely use them again and 
                recommend them to everyone!"`,
            },
        ]
    )
    console.log(state)
    return (
        
        <div className='sam'>
           {state && state?.map((item) => {
           return <Profile key={item.id} className={item.className} profile={item.profile} avatar={item.avatar} status={item.status} paragraph={item.paragraph}/>})} 
        </div>
    )
}

export default State
