import React from 'react'
import {Card} from './components/Card'
import title from './assets/title.png'
import { useFetchAPI } from './helpers/useFetchAPI'
import { useState } from 'react'
import { Filter } from './components/Filter'

export const App = () => {

    const defData = {
        title       : "",
        image       : "",
        normalPrice : "",
        salePrice   : "",
        savings     : "",
        metacritic  : ""
    }

    let defState = []
    for (let i = 0; i < 5; i++){
        defState.push(defData)
    }

    const [data, setData] = useState(defState);
    const [filter, setFilter] = useState("Deal Rating");

    // fetch data from the api
    useFetchAPI(setData, filter);

    return (
        <main>
            <section className="title">
                <img className="title__text" src={title} alt="title"/>
            </section>
            <section className="filter">
                <Filter setFilter={setFilter}/>
            </section>
            <section className="game">
                {
                    data.map((value, idx) => {
                        return <Card info={value} key={idx}/>
                    })
                }
            </section>
        </main>
    )
}
