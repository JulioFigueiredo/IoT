import Sidebar from "../page";
import React from "react";
import Header from "@/components/Header";


export default function Users() {
  return (
    <div className="flex-1">
    <Sidebar />
    <main className="flex-1 p-4">
    <Header title = "Página Incial" username="Júlio"/>
            <h1>Usuários</h1>
        </main> 
    </div>
  );
}