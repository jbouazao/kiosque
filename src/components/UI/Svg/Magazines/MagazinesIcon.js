import classes from './MagazinesIcon.module.css'

const MagazinesIcon = props => {
	return <div className = {classes.magazinesicon}>
		<svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="2" y="2" width="46" height="56" rx="6" stroke="#fff" stroke-width="4" />
			<rect x="9" y="9" width="32" height="42" rx="1" stroke="#fff" stroke-width="2" />
			<rect x="12" y="42" width="22" height="2" rx="1" fill="#fff" />
			<rect x="12" y="46" width="12" height="2" rx="1" fill="#fff" />
			<circle cx="25" cy="24" r="9" stroke="#fff" stroke-width="2" />
		</svg>
	</div>
}

export default MagazinesIcon;