import React from 'react'

export const Card = () => {
    return (
        <div className="game__card">
            <img className="game__image" alt="game__image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/290300/capsule_sm_120.jpg?t=1586291149"/>
            <h2 className="card__title">Game title</h2>
            <span className="deal">
                <p className="deal__info">Deal: $40.00</p>
                <p className="deal__info deal__info--offer">Deal: $40.00</p>
            </span>
            <span className="review">
                <a href="#" className="review__button">Check the reviews</a>
            </span>
        </div>
    )
}
