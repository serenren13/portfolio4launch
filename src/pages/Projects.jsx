import ProjectCard from "../components/ProjectCard"

export default function Projects() {
    return (
        <div>
            <ProjectCard
                title="TicTacToe"
                content="Project through Launch"
                link="https://github.com/serenren13/TicTacToe"
            />,
            <ProjectCard
                title="Countdown1"
                content="Project through Launch"
                link="https://github.com/serenren13/Countdown1"
            />,
            <ProjectCard
                title="Countdown2"
                content="Project through Launch"
                link="https://github.com/serenren13/Countdown2"
            />
        </div>
    )
}