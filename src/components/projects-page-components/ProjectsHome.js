import Footer from "../Footer"
import TalkABout from "../common/TalkAbout"
import ProjectContainer from "./ProjectContainer"
import ProjectPage from "./ProjectsPage"

function ProjectsHome(){
    return(
        <div>
            <ProjectPage/>
            <div>
           <ProjectContainer/>
         <TalkABout/>
           <Footer/>
        </div>
        </div>
    )
}
export default ProjectsHome