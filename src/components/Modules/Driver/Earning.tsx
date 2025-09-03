import { DriverBarChart } from "../chart/DriverBarChart";
import { DriverPieChart } from "../chart/DriverPieChart";


const Earning = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-2xl font-medium mb-10">Driver Earning Analytics Data</h1>
                <div className="grid sm:grid-cols-1 lg:grid-cols-6 gap-4">
                    <div className="lg:col-span-2">
                      <DriverPieChart/>
                    </div>

                    <div className="lg:col-span-4">
                        <DriverBarChart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earning;