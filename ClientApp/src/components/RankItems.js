import React, { useState, useEffect } from "react";

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
        <main>
            {
                (items != null) ? items.map((item) => <h3>{item.title}</h3>) : <div>Loading...</div>
            }
        </main>
  )
}

export default RankItems