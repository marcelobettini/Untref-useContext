import './App.css';
import { useState } from 'react';
import { UserContext } from './UserContext';
import Layout from './components/Layout';
function App() {
  const [user, setUser] = useState("Ernest Hemingway");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <p>Aquí va el contenido pasado a Layout a través de la prop especial 'children'</p>
        </Layout>
      </UserContext.Provider>
    </>
  );
}
export default App;
