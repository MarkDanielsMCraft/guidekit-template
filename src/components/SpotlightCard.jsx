import { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(99, 102, 241, 0.15)" }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const ref = useRef(null);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={twMerge(
                "group relative border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 overflow-hidden rounded-3xl",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};
