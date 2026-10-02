import Makefile from "./Makefile/Makefile";
import ConfigWeb from "./ConfigWeb/ConfigWeb";

function Config({make = false}: {make?: boolean})
{
    return (
    <>
        {make && (<Makefile />)}
        {!make && (<ConfigWeb />)}
    </>
    );
}

export default Config;