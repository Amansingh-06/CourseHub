import React from "react";
import { useState } from "react";
import "./component/Card.css"
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify"





function Card(props) {

    let likedcard = props.likedcard;
    let setlikedcard = props.setlikedcard
    let course = props.course



    // const [liked, notliked] = useState(false)
    function handlelike() {
       
        if (likedcard.includes(course.id)) {
            setlikedcard((prev) => prev.filter((cid) => cid != course.id));
            toast.warning("DISLIKED THE COURSE")
        } else {
            if (likedcard.length == 0) {
                setlikedcard([course.id])
            } else {
                setlikedcard((prev)=>[...prev,course.id])
            }
            toast.success("COURSE LIKED")
       }
        
    }
    return (
        <div className="main">
            <div className="Imageholder">
                <img src={course.image.url} alt="" className="img" />
            </div>
            <div className="Titleholder">
                <h4 className="title">{course.title}</h4>
                <button className="likedbtn" onClick={handlelike}>{
                    likedcard.includes(course.id) ? (<FcLike />) : (<FcLikePlaceholder />)
                }</button>
            </div>
            <div className="Discriptionholder"><p>{props.course.description}</p></div>
          
            
        </div>
    )
}

export default Card;