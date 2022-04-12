import classes from './SearchBar.module.css'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = props => {
	return <div className = {classes.searchbar}>
		<AiOutlineSearch style = {{width: '30px', height: '30px', color: 'grey'}}/>
		<input className = {classes.input} placeholder = 'Rechercher une Publication'/>
	</div>
}

export default SearchBar;