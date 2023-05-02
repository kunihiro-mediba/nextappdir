"use client";

import { useState } from "react";

export function Counter(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount((prev) => prev + 1)} className="text-red bg-gray-100 p-1 ml-2">
                Add
            </button>
        </div>
    );
}
