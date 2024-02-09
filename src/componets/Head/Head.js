import classes from './Head.module.css';
import { Link } from 'react-router-dom'
const Head = (props) => {
    return (
        <div className={classes.head}>
            <ul>
                <li><Link to='/' className={classes.link}>Home</Link></li>
                <li><Link to='/about' className={classes.link}>About</Link></li>
                <li><Link to='/product' className={classes.link}>Product</Link></li>
                <li><Link to='/fashion' className={classes.link}>Fahsion</Link></li>
                <li><Link to='/new' className={classes.link}>News</Link></li>
                <li><Link to='/contact' className={classes.link}>Contact Us</Link></li>
            </ul>


        </div>
    )
}
export default Head;