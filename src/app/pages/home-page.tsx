import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Link } from "@runtime/router";

export function HomePage(): VirtualNode {
    return (
        <div>
            <h1 className="text-4xl m-4 text-cyan-600">Home Page</h1>
            <h2 className="hover:dark:md:text-red-400">Test</h2>
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
                    <li>
                        <Link to="/landing">Landing</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
