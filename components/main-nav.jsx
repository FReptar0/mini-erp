import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
    className,
    ...props
}) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <p className="text-3xl font-large text-muted-foreground">Gummies Hot</p>

            {/* <Link
                href="/examples/dashboard"
                className="text-sm font-medium transition-colors hover:text-cyan-600"
            >
                Overview
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-600"
            >
                Customers
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-600"
            >
                Products
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-600"
            >
                Settings
            </Link> */}
        </nav>
    )
}