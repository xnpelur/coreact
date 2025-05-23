import { createElement } from "@/runtime/jsx-runtime";

export function Logo({ className }: { className?: string }) {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="-10.5 -10.5 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={className}
        >
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" stroke-width="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(45)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(90)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(135)"></ellipse>
            </g>
        </svg>
    );
}
