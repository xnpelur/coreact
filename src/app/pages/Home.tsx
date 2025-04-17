import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Link } from "@runtime/router";

export function Home(): VirtualNode {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to our application!</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/controlled-input">
                            Go to Controlled Input
                        </Link>
                    </li>
                    <li>
                        <Link to="/counter">Go to Counter</Link>
                    </li>
                    <li>
                        <Link to="/user/123">User Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
