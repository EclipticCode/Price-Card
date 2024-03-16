import React from 'react'
import Cardone from './components/Cardone';
import Cardtwo from './components/Cardtwo'
import Cardthree from './components/Cardthree'
import './App.css'



const App = () => {
    return (
        <div id="cards">
            <Cardone
                heading="FREE"
                dollar="0"
                rowOne="Single User"
                rowTwo="50GB Storage"
                rowThree="Unlimited Public Projects"
                rowFour="Community Access"
                rowFive="Unlimited Private Projects"
                rowSix="Dedicated Phone Support"
                rowSeven="Free Subdomain"
                rowEight="Monthly Status Reports" 
            />
            <Cardtwo
                heading="PLUS"
                dollar="9"
                rowOne="5 Users"
                rowTwo="50GB Storage"
                rowThree="Unlimited Public Projects"
                rowFour="Community Access"
                rowFive="Unlimited Private Projects"
                rowSix="Dedicated Phone Support"
                rowSeven="Free Subdomain"
                rowEight="Monthly Status Reports" 
            />
            <Cardthree
                heading="PRO"
                dollar="49"
                rowOne="Unlimited User"
                rowTwo="50GB Storage"
                rowThree="Unlimited Public Projects"
                rowFour="Community Access"
                rowFive="Unlimited Private Projects"
                rowSix="Dedicated Phone Support"
                rowSeven="Free Subdomain"
                rowEight="Monthly Status Reports" 
            />
        </div>
    )
}


export default App;
