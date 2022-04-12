import classes from './NavSection.module.css'
import Newspapericon from '../UI/Svg/Newspapericon'
import MagazinesIcon from '../UI/Svg/Magazines/MagazinesIcon'

const NavSection = props => {
	return <div className = {classes.navsection}>
		<div className = {classes.bigbutton}>
			<div className = {classes.titledesc}>
				<h3 className = {classes.title}>{props.title}Journaux</h3>
				<p>{props.paragraph}Suivez l'actualité avec une large sélection de journaux</p>
			</div>
			<div className = {classes.icon}>
				<Newspapericon />
			</div>
		</div>
		<div className = {classes.bigbutton}>
			<div className = {classes.titledesc}>
				<h3 className = {classes.title}>{props.title}Magazines</h3>
				<p>{props.paragraph}Adapté à tous les lecteurs, restez à jour avec les dernières actualités.</p>
			</div>
			<div className = {classes.icon}>
				<MagazinesIcon />
			</div>
		</div>
	</div>
}

export default NavSection