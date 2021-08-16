import React from 'react'
import {Card} from './components/Card'
import title from './assets/title.png'
import { fetchAPI } from './helpers/fetchAPI'

export const App = () => {

    // fetch data from the api
    const gamesData = fetchAPI();
    console.log(gamesData[0])

    return (
        <main>
            <section className="title">
                <img className="title__text" src={title} alt="title"/>
            </section>
            <section className="filter">

            </section>
            <section className="game">
                <Card info={gamesData[0]}/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    )
}
