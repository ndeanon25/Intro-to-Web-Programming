const { useState } = React;
const StarRating = ({ maxStars = 5}) => {
    const [rating,setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(null);

    const handleMouseEnter = (index) => setHoveredStar(index);
    const handleMouseLeave = () => setHoveredStar(null);
    const handleClick = (index) => setRating(index);

    return (
        <div style = {{ display: "flex" }}>
            {Array.from({ length: maxStars }).map((_, index) => {
                const starIndex = index + 1;
                const isFilled = starIndex <= (hoveredStar || rating);

                return(
                    <i
                    key={index}
                    className = {`${isFilled ? "fas" : "far"} fa-star cursor-pointer`}
                    style = {{
                         fontSize: "32px",
                        color: isFilled ? "gold" : "gray",
                        cursor: "pointer",
                    }}
                        onMouseEnter = {() => handleMouseEnter(starIndex)}
                        onMouseLeave = {handleMouseLeave}
                        onClick = {() => handleClick(starIndex)}
                    />
                    
                );
            })}
            </div>
    );
};

ReactDOM.render(<StarRating />, document.getElementById("star-container"));
