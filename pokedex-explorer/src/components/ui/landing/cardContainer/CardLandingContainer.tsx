import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function CardLandingContainer({ children }: Props) {
return (
    <ul
        className="grid grid-rows-3 gap-5
        lg:grid-rows-1 lg:grid-cols-3 lg:gap-4
    ">
        {children}
    </ul>
);
}