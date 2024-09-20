import Sidebar from "@/components/Sidebar";
import React from "react";
import Header from "@/components/Header";


export default function Sensors() {
    return (
        <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
        <Header title = "Usuários" username="Júlio"/>
            <h1>Usuários</h1>
        </main> 
    </div>
    )
}