import { AppState } from "../AppState"
import { Cars } from "../models/Cars"
import { api } from "./AxiosService"

class CarsService {
    async getCars() {
        AppState.cars = []
        const res = await api.get('auth/api/cars')
        AppState.cars = res.data.map(cars => new Cars(cars))
    }



}
export const carsService = new CarsService()