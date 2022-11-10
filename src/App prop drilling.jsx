

import './App.css';

function Layout({ user, children }) {
  return (
    <main>
      {children}
      <h1>Soy el componente Layout, papiitas</h1>
      <p>prop drilling: {user}</p>
      <Header user={user} />
    </main>
  );
}

function Header({ user }) {
  return (
    <section className='header'>
      <h3>I'm Groot, no, just joking... I'm Header</h3>
      <p>prop drilling: {user}</p>

      <UserInfo user={user} />
    </section>
  );

}

function UserInfo({ user }) {
  return (
    <section className='info'>
      <h5>Aca táaaaaa</h5>
      <p>{user}</p>
    </section>
  );
}



function App() {
  const user = "Arturo Pérez Reverte";

  return (
    <Layout user={user} >
      <p>Aquí va el contenido pasado a Lauout a través de la prop especial 'children'</p>
    </Layout>


  );
}

export default App;
