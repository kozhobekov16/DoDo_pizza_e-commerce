import React, {useState} from 'react'
import './scss/app.scss'
import {Header} from './components'
import {Home, Cart, NotFound} from './pages'
import {Route, Routes} from 'react-router-dom'

function App() {
    const items = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const sortItem = ['популярности', 'цене', 'алфавиту']
    return (
        <div className="wrapper">
            <div className="header">
                <Header/>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<Home items={items} sortItem={sortItem}/>
                    }
                />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App