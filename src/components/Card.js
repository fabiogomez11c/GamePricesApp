import React from 'react'

export const Card = ({info}) => {
    const metaLink = "https://www.metacritic.com"
    return (
        <div className="game__card">
            <img className="game__image" alt="game__image" src={info && info.image}/>
            <h2 className="card__title">{info && info.title}</h2>
            <span className="deal">
                <p className="deal__info">{`Deal: $${info && info.salePrice}`}</p>
                <p className="deal__info deal__info--offer">{`Before: $${info && info.normalPrice}`}</p>
            </span>
            <span className="review">
                {
                    info && info.metacritic !== null
                    ? <a href={metaLink + info.metacritic} className="review__button">Check the reviews</a>
                    : <p className="review__button">There isn't a review</p>
                }
            </span>
        </div>
    )
}
