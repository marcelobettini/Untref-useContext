import { useContext } from "react";
import { UserContext } from "../UserContext";
export default function UserInfo() {
  const { user, setUser } = useContext(UserContext);
  const elflaco = () => {
    setUser(prev => prev = "Julio Cortázar");
  };
  return (
    <section className='info'>
      <h5>Aca táaaaaa soy UserInfo</h5>
      <p>Yo sí necesito conocer a: {user} </p>
      <button onClick={elflaco}>Uno de acá</button>
    </section>
  );
}