import {Breadcrumb, BreadcrumbItem} from '@carbon/react';
import React from "react";

type Props = {
    children?: React.ReactNode[]
};
export function BreadcrumbsBar(props: Props) {
    return (
        <div className="relative z-10 bg-white h-12 mt-12">
            <div className="absolute bottom-0 h-[1px] w-full bg-accent-1"></div>
            <div className="pl-6 pr-4 h-full flex justify-between items-center">
                <Breadcrumb noTrailingSlash>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/">Tools</BreadcrumbItem>
                </Breadcrumb>
                <div className="flex gap-x-2">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
