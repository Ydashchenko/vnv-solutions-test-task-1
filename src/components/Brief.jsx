import '../styles/brief.css'
import { Fade } from "react-awesome-reveal";

export default function Brief() {
    return (
        <div id='brief'>
            <Fade direction='left' duration={1000}>
            <div className='brief-container'>
                <h3 className='component-heading'>/ BRIEF</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Fill Now</button>
            </div>
            </Fade>
        </div>
    )
}