import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { AppState } from "../AppState";
import CarCard from "../components/CarCard";
import NameTag from "../components/NameTag";
import { Cars } from "../models/Cars.js";
import { carsService } from "../services/CarsService";
import Pop from "../utils/Pop";


function HomePage() {
  async function getCars(){
    try {
      await carsService.getCars()
    } catch (error){
      Pop.error(error);
    }
  }

  let cars = (AppState.cars.map(c => {
    return (
      <div className="col-md-4" key={c.id}>
        <CarCard car={c} />
      </div>
    )
  }))
  useEffect(()=>{
    getCars()
  }, [])
  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          {cars}
        </div>
      </div>

      <div>
        <NameTag />
      </div>
    </div>
  )
}
export default observer(HomePage)