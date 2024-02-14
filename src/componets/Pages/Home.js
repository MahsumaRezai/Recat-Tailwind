import { Fragment } from "react";
import CodeDef from "./CodeDef";
import CodeWh from "./CodeWh";
import CodeUse from "./CodeUse";
import CodeWeb from "./CodeWeb";

const Home=(peops)=>{
    return (
        <Fragment>
            <div className="flex flex-col justify-center items-center text-pretty  p-12 bg-gray-100 ">
            <CodeDef/>
            <CodeWh/>
            <CodeUse/>
            <CodeWeb/>
            

            
           
            </div>
            
        </Fragment>
    )
}
export default Home