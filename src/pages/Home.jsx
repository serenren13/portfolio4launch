import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>

            <h2>Welcome to my page! I'm Serenity Phillips</h2>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>

        </div>
    )
}