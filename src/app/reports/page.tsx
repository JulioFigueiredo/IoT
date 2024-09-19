import Sidebar from "@/components/Sidebar";
import React from "react";
import Header from "@/components/Header";


export default function Reports() {
    return (
        <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
        <Header title = "Reports" username="Júlio"/>
            <h1>Relatórios</h1>
        </main> 
    </div>
    )
}