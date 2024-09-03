import { Link } from 'react-router-dom';
import Png from '@/assets/flower.png';
import Jpg from '@/assets/flowers.jpg';
import Svg from '@/assets/balloon.svg';

const App = () => {
	return (
		<div>
			Hello world!!
			<div>
				<img src={Png} width={500} alt={'Png'} />
				<img src={Jpg} width={500} alt={'Jpg'} />
				<img src={Svg} width={500} alt={'Svg'} />
			</div>
			<Link to={'/about'}>About</Link>
			<Link to={'/shop'}>Shop</Link>
		</div>
	)
}

export default App;