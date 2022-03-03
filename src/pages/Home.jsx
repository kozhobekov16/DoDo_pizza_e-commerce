import React from 'react'
import {Categories, Sort, Pizza} from "../components";
function Home({items, sortItem}) {
    return(
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        items={items}
                    />
                    <Sort sortItem={sortItem}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    <Pizza/>
                </div>
            </div>
        </div>
    )
}
export default Home