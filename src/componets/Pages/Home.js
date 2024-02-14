import { Fragment } from "react";
import CodeDef from "./CodeDef";
import CodeWh from "./CodeWh";
import CodeUse from "./CodeUse";

const Home=(peops)=>{
    return (
        <Fragment>
            <div className="flex flex-col justify-center items-center text-pretty  p-12 bg-gray-100 ">
            <CodeDef/>
            <CodeWh/>
            <CodeUse/>

            
           
            </div>
            
        </Fragment>
    )
}
export default Home