    import { Fragment } from "react";
    import { Link } from 'react-router-dom';

    const Footer=(props)=>{
        return (
            <Fragment>
            <footer class="  bg-slate-300 p-12 font-serif  ">
                    <h1 className="text-4xl font-bold  text-center">CodeColage</h1>
                <ul class="navigation max-w-[90vw] flex flex-wrap justify-center items-center relative mx-auto py-8">
            
            <input type="checkbox" id="check" />

            <span class="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                    <li><Link to='/' className=" text-xl list-none no-underline text-gray-800 ">Home</Link></li>
                        <li><Link to='/product' className=" text-xl list-none no-underline text-gray-800 ">Lessons</Link></li>
                        <li><Link to='/fashion' className=" text-xl list-none no-underline text-gray-800 " >Quiz</Link></li>
                        <li><Link to='/contact' className=" text-xl list-none no-underline text-gray-800 ">Contact Us</Link></li>

                <label for="check" class="close-menu">X</label>
            </span>

            <label for="check" className="open-menu">Menu</label>
        </ul>
        <div className="flex flex-row justify-center gap-10">
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class= "bg-cyan-700 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                </button>
                <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class=" bg-black mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                </button>

                <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="bg-blue-500 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                </button>
        </div>
            

    </footer>
            </Fragment>
        )
    }
    export default Footer 