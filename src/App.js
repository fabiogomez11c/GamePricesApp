import React from 'react'
import {Card} from './components/Card'
import title from './assets/title.png'

export const App = () => {
    return (
        <main>
            <section className="title">
                <img className="title__text" src={title} alt="title"/>
            </section>
            <section className="filter">

            </section>
            <section className="games">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    )
}
