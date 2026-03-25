
import { Hijo } from "./Hijo";

export const Padre = () => {
  return (
    <>
        <h2>Componente Padre</h2>
        <Hijo mensaje = "Hola desde el padre" />
    </>
  )
}
