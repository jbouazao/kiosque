import classes from './OptionBtn.module.css'

const OptionBtn = props => {
	<li className = {classes.button}>
		{props.children}
	</li>
}

export default OptionBtn;