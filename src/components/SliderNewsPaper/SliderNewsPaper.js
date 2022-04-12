import classes from './SliderNewsPaper.module.css'
import Card from '../UI/Card/Card'



const SliderNewsPaper = props => {
	return <div className = {classes.sliderwrapper}>
		<div className = {classes.sliderheader}>
			<h4 className = {classes.title}>{props.title}</h4>
			<button className = {classes.voirtoutbtn}>VOIR TOUT<hr style = {{border: '1px solid #ea754f'}}/></button>
		</div>
		<div className = {classes.hr}></div>
		<ul className = {classes.slider}>
			{props.data.map(item => {return (
				<li key = {item.id} className = {classes.listitem}>
					<Card
						img = {item.image}
						description = {item.description}
						date = {item.date}/>
				</li>
			)})}
		</ul>
	</div>
}

export default SliderNewsPaper;