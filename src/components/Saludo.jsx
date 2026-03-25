
export const Saludo = (props) => {
  return (
    <div>
        <h2>hola, soy {props.nombre} {props.apellido}</h2>
        <p>Tengo {props.edad} años</p>
    </div>
  )
}
