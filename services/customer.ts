import { APP_KEY, BASE_API_URL } from '@/global';
import { getServerCookie } from '@/lib/server-cookie';
import { Customer } from '@/types/customer';
import axios from 'axios';
type ResponseData = {
    status: boolean
    message: string
    data?: Customer[]
}
export const GetCustomerApi = async (): Promise<ResponseData> => {
    try {
        const token = await getServerCookie("token");
        const response = await axios.get(`${BASE_API_URL}/customers?page=1&quantity=10&search=`, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-key': 'da90760feb89bf96e5ac0f1029fc370c9f4597ba',
                'authorization': `Bearer ${token}`
            },
        });
        const data = response.data;
        return {
            status: true,
            message: "Customer data fetched successfully",
            data: data.data
        };
    } catch (error) {
        return {
            status: false,
            message: "Failed to fetch customer data",
        };
    }   
} 
