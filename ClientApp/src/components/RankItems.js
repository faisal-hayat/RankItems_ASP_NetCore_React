// imports
import React, { useState, useEffect } from "react";
import MovieImageArr from "./MovieImages";


function RankItems() {
    const [items, setItems] = useState([]);
    const dataType = 1;
    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((result) => {
                return result.json();
            })
            .then(data => {
                setItems(data)
            })
    }, []);
    return (
        <div className="items-not-ranked">
            <main>
                {
                    ((items != null) ? items.map((item) =>
                        <div className="unranked-cell">
                            <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.ImageId)?.image} />)
                        </div>
                    
                        : <div>Loading...</div>
                    )}
            </main>
        </div>
  )
}

export default RankItems