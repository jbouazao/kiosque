import Layout from './Layout/Layout';
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import Options from './components/Options/Options';
import './App.css';

function App() {
  return (
    <Layout>
			<Header />
			<Cover />
			<Options />
    </Layout>
  );
}

export default App;
