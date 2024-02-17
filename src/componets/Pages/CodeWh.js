import { Fragment } from "react";

const CodeWh=(peops)=>{
    return (
        <Fragment>
            <div className="flex flex-col justify-center items-center text-pretty  p-12 ">
            
            <h1 className="text-red-700 p-12 text-2xl md:text-5xl font-bold text-cneter ">
            Why is Coding Important?
            </h1>
            <p className="text-pretty text-sm md:text-xl text-center leading-10">
            Computers don’t understand the languages we humans speak. So, for you as a human to communicate with computers, you need to learn a coding language, or better put, a programming language.

The primary type of code computers understand is binary. Binary consists of only 0s and 1s, with 0 meaning off and 1 meaning on.

Computers understand these 0s and 1s because they are made by combing thousands of transistors – solid state off and on switches.

The 0s of binary tell the transistors to switch off and the 1s tell the transistors to switch on. When thousands of these transistors work through the help of binary, then you are able to communicate with computers and get them to do something for you.

The downside of binary is that working with it to switch on and off the thousands of transistors in a computer by hand would take ages. So other low-level and high level programming languages were created to make these tasks easier for programmers.
            </p>
            </div>
            
        </Fragment>
    )
}
export default CodeWh