import classes from './Contact.module.css';
import mailsvg from '../../assets/mail.svg'
import Button from '../Button/Button';
import mailspaper from '../../assets/mailspaper.svg'

const Contact = props => {
	return <div className = {classes.contactwrapper}>
		<div className = {classes.contact}>
			<img style = {{width: '150px', height: '150px'}} src = {mailsvg} alt = 'mail'/>
			<div className = {classes.descinput}>
				<div>
					<h4>Restez au courant</h4>
					<p className = {classes.p}>Recevez les dernières nouvelles sur vos sujets favoris</p>
				</div>
				<div className = {classes.inputbtn}>
					<input className = {classes.input} placeholder = "E-mail"/>
					<Button variant = 'fill' className = {classes.btn}>S'inscrire</Button>
				</div>
			</div>
			<img src = {mailspaper} alt = 'mails' className = {classes.mailspaper}/>
		</div>
	</div>
}

export default Contact;