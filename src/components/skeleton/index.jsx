import React from 'react';
import './style.scss';

export default function Skeleton({ width, height, borderRadius, marginBottom }) {
    return (
        <div
            className="skeletonCard"
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                marginBottom: marginBottom,
            }}
        ></div>
    );
};
