import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Link, useParams } from "@runtime/router";

export function UserProfilePage(): VirtualNode {
    const params = useParams();
    const userId = params.id || "unknown";

    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {userId}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
