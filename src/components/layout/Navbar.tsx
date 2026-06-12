import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
    <header>
        <div>
            <Link to="/">
                <Dumbbell/>
                <span>GymAI</span>
            </Link>
        </div>
    </header>)
}