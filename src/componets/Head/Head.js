import classes from './Head.module.css';
import { Link } from 'react-router-dom';
import MainTitle from './MainTitle';
const Head = (props) => {
    return (
        <div className={classes.head}>
            <nav class="bg-slate-300 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 font-serif">
      <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
      <li class="logo" >
        <h3 class="font-bold  text-4xl hover:text-red-700">CodeCollage</h3>
      </li>
      <input type="checkbox" id="check" />

      <span class="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
      <li><Link to='/' className=" text-xl list-none no-underline  hover:text-red-700" >Home</Link></li>
                <li><Link to='/Lesson' className=" text-xl list-none no-underline hover:text-red-700 ">Lessons</Link></li>
                <li><Link to='/fashion' className=" text-xl list-none no-underline hover:text-red-700">Quiz</Link></li>
                <li><Link to='/contact' className=" text-xl list-none no-underline hover:text-red-700">Contact Us</Link></li>

        <label for="check" class="close-menu">X</label>
      </span>

      <label for="check" className="open-menu">Menu</label>
    </ul>
  </nav>
  
    <MainTitle/>
            
    
        </div>
    )
}
export default Head;