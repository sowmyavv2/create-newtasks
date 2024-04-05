
import { useState } from "react";

import Navbar from "./components/Navbar";
import LearningProject from "./components/LearningProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
function App() {

  const [projectsState, setProjectsState] = useState({selectedProjectId: undefined, 
  projects: []});

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId:  null,

      }
    })
  }

  const selectedProj = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = <SelectedProject project={selectedProj}/>;
console.log(projectsState.projects)

  function handleAddProject(projData) {
    setProjectsState( prevState => {

      const newProject = {
        ...projData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects : [...prevState.projects, newProject]
      }
    })
  }


  function handleSelProj(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId:  id,

      }
    })
  }

  if(projectsState.selectedProjectId === null) {
    content = <LearningProject onStartAddProj={handleStartAddProject} onAdd={handleAddProject}/>
  }

  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProj={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Navbar onStartAddProj={handleStartAddProject} projects={projectsState.projects} onSelProj={handleSelProj}/>
      {content}
    </main>
  );
}

export default App;
