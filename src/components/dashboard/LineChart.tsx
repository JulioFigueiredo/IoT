'use client'
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

// Componente LineChart
export function LineChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        // Dados atualizados
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Produção',
                    data: [75, 69, 90, 82, 65, 70],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Defeitos',
                    data: [3, 6, 5, 9, 7, 8],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1, // Ajusta a proporção para evitar que o gráfico fique incompleto
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="h-80"> {/* Ajustando a altura do gráfico */}
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    );
}