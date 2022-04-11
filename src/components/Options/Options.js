import Slider from 'react-slick'
import classes from './Options.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillCar, AiFillHeart } from 'react-icons/ai'
import { FcBusiness } from 'react-icons/fc'
import { BsNewspaper } from 'react-icons/bs'
import { HiDesktopComputer } from 'react-icons/hi'
import { GiKnifeFork, GiPaintBrush } from 'react-icons/gi'
import { RiComputerFill } from 'react-icons/ri'
import { FaShapes } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'
import { GiMaterialsScience } from 'react-icons/gi'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

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

const Arrow = (props) => {
	return (
		<div className={classes.prevarrow} onClick = {props.onClick}>
			{props.direction === 'left' ? <BsArrowLeftCircleFill/> : <BsArrowRightCircleFill/>}
			{console.log(props)}
		</div>
	);
}

const settings = {
	speed: 500,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	prevArrow: <Arrow direction = 'left'/>,
	nextArrow: <Arrow direction = 'right'/>
};

const Options = props => {
	return (
		<Slider {...settings} className={classes.options}>
			{optionsData.map(item =>
				<div className={classes.listitem}>
					<item.icon style={{ width: '30px', height: '30px', color: 'grey' }} />
					{item.text}</div>
			)}
		</Slider>
	)
}

export default Options;