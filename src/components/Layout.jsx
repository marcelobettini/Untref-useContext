import { useContext } from "react";
import { UserContext } from "../UserContext";
import Header from "./Header";
export default function Layout({ children }) {
  const { user } = useContext(UserContext);
  return (
    <main>
      {children}
      <h1>Soy el componente Layout, papiitas</h1>
      <p>No hay prop drilling, user nunca pasa por este componente</p>
      <p>Peeero, igual llega desde CTX: {user}</p>
      <Header />
    </main>
  );
}
