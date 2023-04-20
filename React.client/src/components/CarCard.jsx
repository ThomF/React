import React from 'react';
import  PropTypes  from "prop-types";
import { AppState } from '../AppState';
import { Cars } from '../models/Cars';


export default function CarCard({car}) {

    // function setActiveCar(){
    //     AppState.cars = car
    // }

    return (

        <div className="card">
            <img src={car.imgUrl} alt="" />
        </div>
    )

}

CarCard.propTypes = {
    car: PropTypes.instanceOf(Cars)
}