
import { Link, useLocation } from "react-router-dom"
import "./cardDetails.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
const ProjectDetils = () => {
    const { state } = useLocation()
    console.log(state)
    return (
        <div className="project-details-container">
            <Navbar />

            <div className="image">
                <img src={state?.imgsrc} alt="" />
            </div>
            <div className="detailstext">
                <h2>{state?.title}</h2>
                <p>{state?.text.slice(0, 300)}</p>
                <p>{state?.text.slice(300, 600)}</p>
                <p>{state?.text.slice(600, 5000)}</p>
            </div>
            {/* <div className="technology">
                <h3>{state?.tec}</h3>
            </div> */}
            <Footer />
        </div>
    )
}

export default ProjectDetils