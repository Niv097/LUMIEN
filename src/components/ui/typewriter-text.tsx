"use client";

import { useEffect, useState, useMemo } from "react";

interface TextSegment {
    text: string;
    className?: string;
    br?: boolean; // New line after this segment
}

interface SequentialTypewriterProps {
    segments: TextSegment[];
    speed?: number;
    delay?: number;
    className?: string;
    cursorClassName?: string;
}

export function SequentialTypewriter({
    segments,
    speed = 50,
    delay = 500,
    className = "",
    cursorClassName = "",
}: SequentialTypewriterProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // Calculate total characters to know when we are done
    const totalSegments = segments.length;

    useEffect(() => {
        const startTimeout = setTimeout(() => setIsStarted(true), delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted || isComplete) return;

        const currentSegment = segments[currentTextIndex];

        if (currentCharIndex < currentSegment.text.length) {
            const timeout = setTimeout(() => {
                setCurrentCharIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            // Finished a segment
            if (currentTextIndex < totalSegments - 1) {
                // Move to next segment immediately or after a tiny pause? Use a small pause for natural feel
                const timeout = setTimeout(() => {
                    setCurrentTextIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                setIsComplete(true);
            }
        }
    }, [isStarted, currentTextIndex, currentCharIndex, segments, speed, totalSegments, isComplete]);

    return (
        <div className={className}>
            {segments.map((segment, sIndex) => {
                if (sIndex > currentTextIndex) return null;

                const isCurrent = sIndex === currentTextIndex;
                const textToShow = isCurrent
                    ? segment.text.slice(0, currentCharIndex)
                    : segment.text;

                return (
                    <span key={sIndex}>
                        <span className={segment.className}>
                            {textToShow}
                        </span>
                        {isCurrent && !isComplete && (
                            <span className={`typewriter-cursor ${cursorClassName}`}>|</span>
                        )}
                        {segment.br && <br />}
                    </span>
                );
            })}
        </div>
    );
}
