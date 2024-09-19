import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Perfomance {
    id: number;
    step: string;
    cycletime: string;
    quantity: number;
    rating: string;
    energy: string;
}

export default function DashDataTable() {
    const [performance, setPerfomance] = useState<Perfomance[]>([]);

    useEffect(() => {
        const data: Perfomance[] = [
            {   id: 1, step: "Produção", cycletime: "5s", quantity: 10, rating: "5%", energy: "5 Wh",},
            { id: 2, step: "Produção", cycletime: "6s", quantity: 12, rating: "6%", energy: "6 Wh" },
            { id: 3, step: "Montagem", cycletime: "7s", quantity: 18, rating: "7%", energy: "7 Wh" },
            { id: 4, step: "Teste", cycletime: "8s", quantity: 14, rating: "8%", energy: "8 Wh" },
            { id: 5, step: "Inspeção", cycletime: "9s", quantity: 22, rating: "9%", energy: "9 Wh" },
            { id: 6, step: "Embalagem", cycletime: "10s", quantity: 26, rating: "10%", energy: "10 Wh" },
            { id: 7, step: "Envio", cycletime: "11s", quantity: 32, rating: "11%", energy: "11 Wh" },
            { id: 8, step: "Reparo", cycletime: "12s", quantity: 9, rating: "5%", energy: "5 Wh" },
            { id: 9, step: "Retrabalho", cycletime: "13s", quantity: 6, rating: "4%", energy: "4 Wh" },
            { id: 10, step: "Finalização", cycletime: "14s", quantity: 38, rating: "12%", energy: "13 Wh" }      
        ];

        setPerfomance(data);
    }, []);

    return (
        <div className="card">
            <DataTable value={performance} tableStyle={{ minWidth: '50rem' }}>

                <Column field="id" header="Id"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="step" header="Step"></Column>
                <Column field="rating" header="Rating"></Column>
                <Column field="Energy" header="Energy"></Column>
            </DataTable>
        </div>
    );
}