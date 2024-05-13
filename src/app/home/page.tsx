'use client'
import Image from "next/image";
import Layout from "@/components/layout/index"
export default function Home() {
  return (Layout(
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background text-foreground">
     <h2>home page</h2>
    </main>
  ));
}
