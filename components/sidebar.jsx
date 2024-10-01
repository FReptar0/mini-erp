import { Button } from "@/components/ui/button";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
                <ul>
                    <li className="mb-4">
                        <Button className="w-full">Overview</Button>
                    </li>
                    <li className="mb-4">
                        <Button className="w-full">Analytics</Button>
                    </li>
                    <li className="mb-4">
                        <Button className="w-full">Settings</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
