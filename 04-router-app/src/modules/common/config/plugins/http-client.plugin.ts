import axios, { type AxiosRequestConfig } from "axios";

export class HTTPClient {

    public static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await axios.get<T>(url, config);
        return response.data;
    }

    // TODO: post - put - patch
}