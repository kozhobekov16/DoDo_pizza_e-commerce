import React, {useEffect, useState} from 'react'
import PropTypes from "proptypes";
import './scss/app.scss'
import {Header} from './components'
import {Home, Cart, NotFound} from './pages'
import {Route, Routes} from 'react-router-dom'

function App() {
    const items = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const sortItem = ['популярности', 'цене', 'алфавиту']
    const [data, setData] = useState([])
    useEffect(async () => {
        const fetchData = await fetch('http://localhost:3001/dataBase.json')
        const resp = await fetchData.json()
        setData(resp.pizzas)
    }, [])

    return (
        <div className="wrapper">
            <div className="header">
                <Header/>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<Home
                        items={items}
                        sortItem={sortItem}
                        data={data}
                    />
                    }
                />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

Home.propTypes = {
    data: PropTypes.array,
    items: PropTypes.array.isRequired,
    sortItem: PropTypes.array.isRequired
}

Home.defaultProps = {
    data: ''
}

export default App