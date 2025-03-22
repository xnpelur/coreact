import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Link } from "@runtime/router";

export function About(): VirtualNode {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page of our application.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
