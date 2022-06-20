import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);





export default function AnalyticsChart(props) {
    const labels = [];
    const MONTHS = 12;
    const DAYS = 31;
    const endValue = props.isLine ? DAYS : MONTHS
    for (let i = 1; i <= endValue; i++) {
        labels.push(i);
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: props.label + "Chart",
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: props.label,
                data: props.data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    const returnChart = props.isLine ? <Line options={options} data={data} /> : <Bar options={options} data={data} />;
    return returnChart;
} 