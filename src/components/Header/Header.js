import classes from './Header.module.css';
import sidebarbutton from '../../assets/image.svg'
import Logo from '../Logo/Logo';
import optionsheader from '../../assets/optionsheader.svg'
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import flagmar from '../../assets/flagmar.png'
import {AiOutlineCaretDown} from 'react-icons/ai'

const Header = props => {
	return <header className = {classes.header}>
		<div className = {classes.sidebarsearchmenu}>
			<img style = {{width: '20px', height: '30px'}} src = {sidebarbutton} />
			<Logo />
			<SearchBar />
			<img src = {optionsheader} style = {{height: '20px'}}/>
		</div>
		<div className = {classes.actions}>
			<Button variant = 'outline'>Connexion</Button>
			<Button variant = 'fill'>S'inscrire</Button>
			<div className = {classes.countryselector}>
				<img src = {flagmar} style = {{width: '25px', height: '17px'}}/>
				<AiOutlineCaretDown style = {{width: '10px'}}/>
			</div>
		</div>
	</header>
}

export default Header;