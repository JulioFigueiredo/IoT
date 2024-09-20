import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

import Card from "@/components/Card";
import { LineChart } from "@/components/dashboard/LineChart";
import DashDataTable from "@/components/dashboard/DataTable";

export default function Home() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-900">
            <Header title="Página inicial" username="Júlio" />
            <main className="p-4 flex-1">
                <div className="grid grid-cols-4 gap-4">

                    <Card bgcolor="bg-green-600" body={""}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div> 
                                <i className='pi pi-clock pr-4 text-2xl'></i>
                                <span className="text-3xl">30s</span>
                            </div>
                            <div className="text-xl pt-2"> Tempo de Ciclo Médio</div>
                        </div>
                    </Card>

                    <Card bgcolor="bg-orange-600" body={""}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div> 
                                <i className='pi pi-cog pr-4 text-2xl'></i>
                                <span className="text-3xl">245</span>
                            </div>
                            <div className="text-xl pt-2"> Peças Produzidas</div>
                        </div>
                    </Card>

                    <Card bgcolor="bg-blue-600" body={""}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div> 
                                <i className='pi pi-exclamation-triangle pr-4 text-2xl'></i>
                                <span className="text-3xl">7,45%</span>
                            </div>
                            <div className="text-xl pt-2"> Taxa de Defeitos</div>
                        </div>
                    </Card>

                    <Card bgcolor="bg-red-600" body={""}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div> 
                                <i className='pi pi-bolt pr-4 text-2xl'></i>
                                <span className="text-3xl">350kWh</span>
                            </div>
                            <div className="text-xl pt-2"> Consumo de Energia</div>
                        </div>
                    </Card>

                    {/* Card Produção vs Defeitos com o Gráfico */}
                  <Card bgcolor="bg-white" header="Produção vs Defeitos" body={""}>
                        <LineChart />
                    </Card>

                    {/* Novo Card Branco com o mesmo Gráfico */}
                    <Card bgcolor="bg-white" header="Produção vs Defeitos - Novo Card" body={""}>
                        <LineChart />
                    </Card>

                      {/* Novo Card Branco com o mesmo Gráfico */}
                      <Card bgcolor="bg-white" header="Produção vs Defeitos - Novo Card" body={""}>
                        <LineChart />
                    </Card>
                  
                    {/* Novo Card Branco com o mesmo Gráfico */}
                    <Card bgcolor="bg-white" header="Produção vs Defeitos - Novo Card" body={""}>
                        <LineChart />
                    </Card>
    
              

                </div>
            </main>
        </div>
    </div>  
);
}

