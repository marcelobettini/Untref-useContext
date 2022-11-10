import UserInfo from "./UserInfo";
export default function Header() {
  return (
    <section className='header'>
      <h3>I'm Groot, no, just joking... I'm Header</h3>
      <p>No hay prop drilling, user nunca pasa por este componente</p>
      <UserInfo />
    </section>
  );
}