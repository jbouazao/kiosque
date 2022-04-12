import classes from './Footer.module.css'
import minilogo from '../../assets/minilogo.svg'

const Footer = props => {
	return <div className = {classes.footer}>
		<div className = {classes.logoedition}>
			<img className = {classes.logo} src = {minilogo} alt = 'logo'/>
			<p className = {classes.p}>© 2022 | Kiosque Digital</p>
		</div>
		<div className = {classes.terms}>
			<button className = {classes.btn}>Termes et conditions<hr /></button>
			<button className = {classes.btn}>Politique de Confidentialité<hr /></button>
			<button className = {classes.btn}>Notes Légales<hr /></button>
		</div>
	</div>
}

export default Footer;