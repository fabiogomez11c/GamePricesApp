
export const fetchAPI = async () => {
    let game = [];

    const resp = await fetch("https://www.cheapshark.com/api/1.0/deals");
    const data = await resp.json();
    for (let i = 0; i <= 5; i++){
        game.push({
            title       : data[i].title,
            image       : data[i].thumb,
            normalPrice : data[i].normalPrice,
            salePrice   : data[i].salePrice,
            savings     : data[i].savings,
            }
        )
    }
    console.log(game[0])
    return game
}