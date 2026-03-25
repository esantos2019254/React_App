
import { useState, useEffect } from "react"

export const Contador = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("El componente se renderizo")
    }, [contador])


    return (
        <div>
            <h2>useEffect: ejemplo</h2>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>
                Cambiar estado
            </button>
        </div>
    )
}

/*
export const Hijo = ({ mensaje }) => {
    return (
        <>
            <h3>Mensaje del padre: {mensaje}</h3>
        </>
    )

import { useState } from "react"

export const Contador = () => {

    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador, setContador] = useState(0);

  )
}
*/
