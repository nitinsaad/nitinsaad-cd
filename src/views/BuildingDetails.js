import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BuildingDetails = () => {

    const { id: BuildingID } = useParams();
    const { data: allBuildings } = useSelector(state => state.buildings);
    const [details, setDetails] = useState({});

    useEffect(() => {
        if (allBuildings && allBuildings.length > 0) {
            const data = allBuildings.filter(x => x.uniqueID == BuildingID)[0];
            setDetails(data)
        }
    }, [BuildingID, allBuildings])

    return (
        <div className="container">
            <Navbar />
            <h3> Details
                of {BuildingID}
            </h3>

            <p className="card-text">Bedrooms -  {details.bedroom}</p>
            <p className="card-text"> price -  {details.price}</p>
            <p className="card-text">floor - {details.floor}</p>
            <p className="card-text">groom -  {details.grossm2}</p>
        </div>
    )
}

export default BuildingDetails
