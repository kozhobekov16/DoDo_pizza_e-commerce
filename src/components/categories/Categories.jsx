import React, {useState} from 'react'

function Categories({items}) {
    const [active, setActive] = useState(0)
    const handleActive = (index) => {
        setActive(index)
    }
    return (
        <div className="categories">
            <ul>
                {items.map((elem, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => handleActive(index)}
                            className={active === index ? 'active' : active}
                        >
                            {elem}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories