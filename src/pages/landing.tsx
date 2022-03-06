import React, {FC} from 'react'
import Header from '../components/Header';
import Options from '../components/options';
import Reccomended from '../components/Recommended'

const Landing:FC = () => {
    return(
        <div>
            <Header/>
            <Options/>
           <Reccomended/>
        </div>
    )
}

export default Landing