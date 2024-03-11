import { Navbar, FSection, DynamicInfo} from "./subcomponents/Hpcomponents"
import "../stylesheets/App.css"

function Homepage() {
    return (
        <div className="Gcontainer">
            <Navbar/>
            <FSection/>
            <DynamicInfo/>
        </div>
    );
}

export default Homepage;