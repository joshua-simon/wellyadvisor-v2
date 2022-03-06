import React, {FC} from 'react'
import Header from '../components/Header'
import VenueDetails from '../components/venue-page/VenueDetails'
import MidSection from '../components/venue-page/MidSection';
import ReviewSection from '../components/venue-page/ReviewSection';

const Venue:FC = () => {
    return(
        <div>
             <Header/>
            <VenueDetails />
            <MidSection />
            <ReviewSection/>
        </div>
    )
}

export default Venue