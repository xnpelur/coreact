import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Link } from "@runtime/router";

export function NotFoundPage(): VirtualNode {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go Back to Home</Link>
        </div>
    );
}
