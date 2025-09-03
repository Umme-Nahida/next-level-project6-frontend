
import {  ChartArea} from "../chart/ChartArea";
import { ChartBar } from "../chart/ChartBar";
import { Piechart } from "../chart/Piechart";

const Analytics = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-medium mb-10">Admin Analytics Data</h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-6 gap-4">
                <div className="lg:col-span-2">
                    <Piechart />
                </div>

                <div className="lg:col-span-4">
                    <ChartBar/>
                </div>
            </div>

            {/* analytics all rides */}
            <div className="mt-5 max-h-[300px]">
                <ChartArea></ChartArea>
                {/* <RideStatsCards></RideStatsCards> */}

            </div>
        </div>
    );
};

export default Analytics;