import React from 'react'
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
function Rated() {
    return (
        <div>
                <div className='Rate'>

                <div className='rate1'> 
                    <div className="star">
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                    </div>
                    <h4>Rated 5 Stars in Reviews</h4>
                </div>
                <div className='rate2'> 
                <div className="star2">
                       <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                </div>
                <h4>Rated 5 Stars in Report Guru</h4>
                </div>
                <div className='rate3'>
                    <div className="star3">
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                        <StarRateRoundedIcon />
                    </div>
                     <h4>Rated 5 Stars in BestTech</h4>
                     </div>
            </div>
        </div>
    )
}

export default Rated
