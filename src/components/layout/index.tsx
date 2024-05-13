'use client'
import * as React from "react"
import { useTheme } from "next-themes"

export default function SideTopBar(children:any){
    const { setTheme } = useTheme()
    React.useEffect(()=>{ setTheme("dark")},[])
    return(
<div>
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <h1>Top bar</h1>
    </header>
    {children}
</div>
    )
}