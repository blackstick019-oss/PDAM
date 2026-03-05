'use server'
import { GetCustomerApi } from "@/services/customer";
const CustomerPage = async() => {
    const response = await GetCustomerApi();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Customer Page</h1>
            <p>Welcome to the customer page!</p>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="">
                        <th className="border border-gray-300 p-2">Customer Number</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Phone</th>
                        <th className="border border-gray-300 p-2">Address</th>
                        <th className="border border-gray-300 p-2">Service Name</th>
                        <th className="border border-gray-300 p-2">Username</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {response.data && response.data.map((customer) => (
                        <tr key={customer.id}>
                            <td className="border border-gray-300 p-2">{customer.customer_number}</td>
                            <td className="border border-gray-300 p-2">{customer.name}</td>
                            <td className="border border-gray-300 p-2">{customer.phone}</td>
                            <td className="border border-gray-300 p-2">{customer.address}</td>
                            <td className="border border-gray-300 p-2">{customer.service.name}</td>
                            <td className="border border-gray-300 p-2">{customer.user.username}</td>
                            <td className="border border-gray-300 p-2">
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default CustomerPage
