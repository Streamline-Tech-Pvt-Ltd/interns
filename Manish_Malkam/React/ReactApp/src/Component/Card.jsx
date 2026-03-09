import React from 'react'
//import ProfilePhoto from '../assets/profilephoto.jpeg'

const Card = (props) => {
    return(
         <div class='card'>
             <h2><img src="/public/Logo.png" class="logo"/>{props.company}</h2>
             <p class='photo'><img src="/public/Profilephoto.jpeg" alt="photo"/></p>
             <h2 class='name'>{props.name}</h2>
             <h4 class='desg'>{props.designation}</h4>
             <h4 class='ID'>{props.IDno}</h4>
             <p class='signt'><p style={{ marginTop: "7px" }}>M. Malkam</p></p>
         </div>

        //in asset folder img example
        // <div className="profilephoto">
        //     <img src={ProfilePhoto} alt="Profile Photo" />
        // </div>

    
    )
}
export default Card