import { Fragment } from "react";
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer=(props)=>{
    return (
        <Fragment>
            <div className={classes.footer}>
             <div>
                 <h1 className=" font-bold text-3xl text-center">CodeCollage</h1>
                 <ul className="flex flex-row justify-center gap-10 pt-12 ">
                <li><Link to='/' className="font-bold text-xl list-none no-underline">Home</Link></li>
                <li><Link to='/product' className="font-bold text-xl list-none no-underline ">Lessons</Link></li>
                <li><Link to='/fashion' className="font-bold text-xl list-none no-underline">Quiz</Link></li>
                <li><Link to='/contact' className="font-bold text-xl list-none no-underline">Contact Us</Link></li>
            </ul>
             </div>


            </div>

        </Fragment>
    )
}
export default Footer 