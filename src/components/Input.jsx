import { useState } from "react"

export default function Input() {

    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([])

    function addItem() {
        if (!newItem) {
            alert("Enter an item")
            return
        }
        const item = {
            id: Math.floor(Math.random() * 10000),
            value: newItem
        }
        setItems(prevState => [...prevState, item])
        setNewItem("")
    }

    function deleteItem(e) {
        e.target.parentNode.remove()
    }

    return (
        <div>
            <div className="form-elements">
                <input type="text"
                    placeholder="What needs to be done?"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
                <button onClick={addItem} >Add</button>
            </div>
            <ul>
                {items.map(item => {
                    return (
                        <li key={item.id}>{item.value} <button onClick={deleteItem}>X</button></li>
                    )
                })}
            </ul>
        </div>
    )
}