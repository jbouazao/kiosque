import classes from './Button.module.css'
import cx from 'classnames'

const Button = props => {
	return <button className = {cx(
		props.className,
		classes.button,
		{
			[classes.fill]: props.variant === 'fill',
			[classes.outline]: props.variant === 'outline',
		}
	)}>
		{props.children}
	</button>
}

export default Button;