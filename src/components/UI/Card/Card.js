import classes from './Card.module.css'

const Card = props => {
	return <div className = {classes.card}>
		<img src = {props.img} alt = {props.description}/>
		<div className = {classes.description}>
			<span className = {classes.text}>{props.description}</span>
			<span className = {classes.date}>{props.date}</span>
		</div>
	</div>
}

export default Card;