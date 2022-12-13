import React from 'react'

function Task() {
    const task = [{ name: "ahmet", surname: "ayse" }, { name: "ahmet", surname: "ayse" }, { name: "ahmet", surname: "ayse" }]
    return (
        <>
            {task.map((key) => (
                <li key={key}>
                    {key.name}
                </li>
            ))}
        </>
    )
}

export default Task