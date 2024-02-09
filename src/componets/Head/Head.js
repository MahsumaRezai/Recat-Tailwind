import classes from './Head.module.css';
import { Link } from 'react-router-dom';
import headimg from '../img/head.png'
const Head = (props) => {
    return (
        <div className={classes.head}>
            <ul className="flex flex-row justify-center gap-10 pt-12">
                <li><Link to='/' className="font-bold text-xl list-none no-underline">Home</Link></li>
                <li><Link to='/about' className="font-bold text-xl list-none no-underline">About</Link></li>
                <li><Link to='/product' className="font-bold text-xl list-none no-underline ">Product</Link></li>
                <li><Link to='/fashion' className="font-bold text-xl list-none no-underline">Fahsion</Link></li>
                <li><Link to='/new' className="font-bold text-xl list-none no-underline">News</Link></li>
                <li><Link to='/contact' className="font-bold text-xl list-none no-underline">Contact Us</Link></li>
            </ul>
            <div className={classes.logo}>
                <img src={headimg} alt="name" className="h-12"/>
                <h1 className="text-red-700 font-bold text-3xl">CodeCollage</h1>
            </div>


        </div>
    )
}
export default Head;