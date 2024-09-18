import { useEffect, useState } from "react";
import Card from "../Card";
import "../component/cards.css"

function Cards(props) {
    let courses = props.courses;
    let category = props.category;

    const [likedcard, setlikedcard] = useState([]);
    function getcourses() {
        if (category === "All") {
            let allcourses = []
            Object.values(courses).forEach(array => {
            
                
                array.forEach(courseData => {
                    allcourses.push(courseData)
                })
            })
           
            return allcourses
            
        } else {
            
            return courses[category]
        }
    }

    

    return (
        <div className="Cards">
            <div className="Card">
            {getcourses().map((course) => (
                <Card key={course.id} course={course}
                    likedcard={likedcard}
                    setlikedcard={ setlikedcard} />
            ))}
            </div>
        </div>
    );
}









export default Cards;