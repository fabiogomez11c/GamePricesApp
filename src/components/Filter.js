import React, { useState } from 'react'

export const Filter = ({setFilter}) => {

    const [activated, setActivated] = useState(false);

    if (activated){
        return (
            <div className="filter__section">
                <button className="filter__btn" onClick={() => {setFilter("Deal Rating");setActivated(false);}}>
                    Deal Rating
                </button>
                <button className="filter__btn" onClick={() => {setFilter("Title");setActivated(false);}}>
                    Title
                </button>
                <button className="filter__btn" onClick={() => {setFilter("Savings");setActivated(false);}}>
                    Savings
                </button>
                <button className="filter__btn" onClick={() => {setFilter("Metacritic");setActivated(false);}}>
                    Metacritic
                </button>
            </div>
        )
    } else {
        return (
            <div className="filter__section">
                <button className="filter__btn" onClick={() => {setFilter("Deal Rating"); setActivated(true);}}>
                    Order By
                </button>
            </div>
        )
    }
}

