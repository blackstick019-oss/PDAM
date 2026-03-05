"use client";
import { BASE_API_URL } from "@/global";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = `${BASE_API_URL}/admins/`
        const payload = JSON.stringify({ name, phone, username, password })
        try {
            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                    'app-key': '664f0786900d002d9a67e11aebc58a9efd5939a1'
                },
            })
            const data = response.data
            if (data.success) {
                toast(data.message, { hideProgressBar: true, containerId: `toastRegister`, type: "success", autoClose: 2000 })
                setTimeout(() => router.replace('/admin/login'), 1000)
            } else {
                toast(data.message, { hideProgressBar: true, containerId: `toastRegister`, type: "warning" })
            }
        } catch (error) {
            toast(`Something wrong`, { hideProgressBar: true, containerId: `toastRegister`, type: "error" })
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer containerId={`toastRegister`} />
            <div className="w-3/6 p-8 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Admin Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input onChange={e => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                        <input onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border border-gray-300 rounded" type="text" id="phone" name="phone" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border border-gray-300 rounded" type="text" id="username" name="username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded" type="password" id="password" name="password" />
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Register</button>
                </form>
                <div>
                    <p className="mt-4 text-center text-gray-600">Already have an account? <Link href="/admin/login" className="text-blue-500 hover:underline">Login here</Link></p>
                </div>
            </div>
        </div>
    )
};
export default RegisterPage;