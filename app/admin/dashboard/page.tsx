import GetMeApi from "@/services/getMe";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
    let nama = '';
    let role = '';

    const response = await GetMeApi();
    if (!response.status) {
        redirect('/admin/dashboard');
    } else {
        nama = response.data?.name || '';
        role = response.data?.user?.role || '';
    }
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage the application.</p>
            <div className="border border-gray-500 rounded-md p-2">
                <div>Nama anda</div>
                <div>{nama}</div>
                <div>role you</div>
                <div>{role}</div>
            </div>
        </div>
    )
}

export default DashboardPage;


