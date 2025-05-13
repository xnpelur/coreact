import { createElement } from "@/runtime/jsx-runtime";
import { useState } from "@/runtime/hooks/state";
import { useEffect } from "@/runtime/hooks/effect";

export function EffectResult() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (num: number) => {
        return num.toString().padStart(2, "0");
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());

    const date = time.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-mono font-bold tracking-wider text-gray-900">
                <span> {hours}</span>
                <span className="text-gray-500 animate-pulse">:</span>
                <span>{minutes}</span>
                <span className="text-gray-500 animate-pulse">:</span>
                <span className="text-gray-800">{seconds}</span>
            </div>
            <div className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest">
                {date}
            </div>
        </div>
    );
}
