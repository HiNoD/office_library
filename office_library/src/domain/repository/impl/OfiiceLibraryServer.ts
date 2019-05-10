import axios, {AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

class OfficeLibraryServer {
  public BASE_URL = 'https://localhost:5001/api/OfficeLib';

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const axiosPromise = axios.get(`${this.BASE_URL}${url}`, config);
    return this.handleServerResponse(axiosPromise);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const axiosPromise = axios.delete(`${this.BASE_URL}${url}`, config);
    return this.handleServerResponse(axiosPromise);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const axiosPromise = axios.post(`${this.BASE_URL}${url}`, data, config);
    return this.handleServerResponse(axiosPromise);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const axiosPromise = axios.put(`${this.BASE_URL}${url}`, data, config);
    return this.handleServerResponse(axiosPromise);
  }

  private async handleServerResponse<T = any>(axiosPromise: AxiosPromise<T>): Promise<T> {
    return axiosPromise
      .then((response: AxiosResponse) => {
        return response.data;
      }, (error: AxiosError) => {
        return error;
      });
  }
}
export default new OfficeLibraryServer();