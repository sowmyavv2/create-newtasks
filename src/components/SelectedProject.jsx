export default function SelectedProject({project}) {

    return(
        <div className="w-[35rem] mt-16"> 
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div>
                <h1>{project.title}</h1>
                <button>Delete</button>
                </div>
                <p>{project.date}</p>
                <p>{project.datdesce}</p>
            </header>
        </div>
    )

}