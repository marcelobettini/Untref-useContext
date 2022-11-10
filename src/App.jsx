import './App.css';
import Layout from './components/Layout';
function App() {
  return (
    <>
      <Layout>
        <p>Aquí va el contenido pasado a Layout a través de la prop especial 'children'</p>
      </Layout>
    </>
  );
}
export default App;
