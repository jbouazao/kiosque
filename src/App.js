import Layout from './Layout/Layout';
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import Options from './components/Options/Options';
import './App.css';
import SliderNewsPaper from './components/SliderNewsPaper/SliderNewsPaper';
import download from './assets/publications/download.jpg'
import download1 from './assets/publications/download1.jpg'
import download2 from './assets/publications/download2.jpg'
import download3 from './assets/publications/download3.jpg'
import download4 from './assets/publications/download4.jpg'
import NavSection from './components/NavSection/NavSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/Sidebar';

const DUMMY_DATA = [
	{
		id: 1,
		description: 'Innovantmag',
		image: download,
		date: '29 Septembre 2021'
	},
	{
		id: 2,
		description: 'Finances News',
		image: download1,
		date: '6 October 2021'
	},
	{
		id: 3,
		description: 'Al Bayane',
		image: download2,
		date: '21 Mai 2021'
	},
	{
		id: 4,
		description: 'Aujourd\'hui le Maroc',
		image: download3,
		date: '7 Mai 2021'
	},
	{
		id: 5,
		description: 'La Nouvelle Tribune',
		image: download4,
		date: '15 Avril 2021'
	},
]

function App() {
  return (
    <Layout>
			<Header />
			<Cover />
			<Options />
			<SliderNewsPaper title = 'En Vedette' data = {DUMMY_DATA}/>
			<SliderNewsPaper title = 'Journaux' data = {DUMMY_DATA}/>
			<SliderNewsPaper title = 'Magazines' data = {DUMMY_DATA}/>
			<NavSection />
			<Contact />
			<Footer />
			<SideBar />
    </Layout>
  );
}

export default App;
