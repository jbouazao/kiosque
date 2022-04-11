import classes from './Options.module.css'
import {AiFillCar, AiFillHeart} from 'react-icons/ai'
import {FcBusiness} from 'react-icons/fc'
import {BsNewspaper} from 'react-icons/bs'
import {HiDesktopComputer} from 'react-icons/hi'
import {GiKnifeFork, GiPaintBrush} from 'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'
import {FaShapes} from 'react-icons/fa'
import {SiApplemusic} from 'react-icons/si'
import {GiMaterialsScience} from 'react-icons/gi'

const optionsData = [
	{
		text: 'Auto & Moto',
		icon: AiFillCar
	},
	{
		text: 'Affaires et Finances',
		icon: FcBusiness
	},
	{
		text: 'Actualités et Politiques',
		icon: BsNewspaper
	},
	{
		text: 'Informatique et Électronique',
		icon: HiDesktopComputer
	},
	{
		text: 'Alimentation',
		icon: GiKnifeFork
	},
	{
		text: 'Artisanat',
		icon: GiPaintBrush
	},
	{
		text: 'Divertissement et Télévision',
		icon: RiComputerFill
	},
	{
		text: 'Intérêt Général',
		icon: FaShapes
	},
	{
		text: 'Musique',
		icon: SiApplemusic
	},
	{
		text: 'Science et Nature',
		icon: GiMaterialsScience
	},
	{
		text: 'Auto & Moto',
		icon: AiFillCar
	},
	{
		text: 'Affaires et Finances',
		icon: FcBusiness
	},
	{
		text: 'Affaires et Finances',
		icon: FcBusiness
	}
]

const Options = props => {
	return <ul className = {classes.options}>
		{/* {optionsData.map(item =>
			<OptionBtn>{item.text}</OptionBtn>)} */}
			{optionsData.map(item => <li className = {classes.listitem}>
				<item.icon style = {{width: '30px', height: '30px', color: 'grey'}}/>
				{item.text}</li>)}
	</ul>
}

export default Options;