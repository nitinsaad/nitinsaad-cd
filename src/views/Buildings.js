import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuildingList, getFilterList } from '../apis/api';
import { fetchBuildingsApis, fetchFiltersApis } from '../redux/actions/buildingAction';
import Filters from '../components/Filters'
import Navbar from '../components/Navbar';
const Buildings = () => {
    const dispatch = useDispatch();
    const { data: allBuildings } = useSelector(state => state.buildings);
    const [priceFilters, setPriceFilters] = useState([]);
    const [floorFilters, setFloorFilters] = useState([]);
    const [bedRoomFilter, setBedroomFilter] = useState([]);
    const [groomFilter, setGroomFilter] = useState([]);
    const [buildings, setBuildings] = useState(allBuildings ? allBuildings : []);

    useEffect(() => {
        getBuildings();
        getFilters();
    }, []);
    useEffect(() => {
        if (allBuildings) {
            setBuildings(allBuildings)
        }
    }, [allBuildings])


    const filterData = () => {
         let filterBuilding = [];
        let buidlings = allBuildings;
        const selectedFloors = floorFilters.filter(x => x.isChecked).map(item => item.filter);
        const selectedBedrooms = bedRoomFilter.filter(x => x.isChecked).map(item => item.filter);
        const selectedGrooms = groomFilter.filter(x => x.isChecked).map(item => item.filter);
        const selectedPrices = priceFilters.filter(x => x.isChecked).map(item => item.filter);

        buidlings.forEach(element => {
            let x = element.floor.split('.')[0];
            if (selectedFloors.includes(x)) {
                filterBuilding.push(element);
            }            
        });
        buidlings.forEach(element => {
            let x = element.bedroom.split('+')[0];
            if (selectedBedrooms.includes(x)) {
                filterBuilding.push(element);
            }            
        });        
        buidlings.forEach(element=>{
            let x = Number(element.price);
            selectedPrices.forEach(item=>{
                let amts = item.split('-')
                let fromAmt = Number(amts[0]);
                let toAmt = Number(amts[1]);
                if(x>=fromAmt && x<=toAmt)
                {
                    filterBuilding.push(element);
                }
            })
        })       
        buidlings.forEach(element=>{
            let x = Number(element.grossm2);
            selectedGrooms.forEach(item=>{                
                let groom = item.split('-')
                let fromGroom = Number(groom[0]);
                let toGroom = Number(groom[1]);
                if(x>=fromGroom && x<=toGroom)
                {
                    filterBuilding.push(element);
                }
            })
        })      

        const uniqueArr = filterBuilding.filter((v, i, a) => a.findIndex(t => (t.uniqueID === v.uniqueID)) === i);
        setBuildings(uniqueArr);        
    }

    const getBuildings = () => {
        getBuildingList().then(item => {
            dispatch(fetchBuildingsApis(item.data))
        })
    }
    const getFilters = () => {
        getFilterList().then(item => {
            dispatch(fetchFiltersApis(item.data))
            makeNewFilter(item)
        })
    }
    const makeNewFilter = (item) => {
        let newPriceFilter = [];
        let newBedroomsFilter = [];
        let newFloorsFilter = [];
        let newGroomsFilter = [];
        let priceFilter = item.data.prices;
        let bedroomFilter = item.data.bedroom;
        let floorFilter = item.data.floor;
        let groomFilter = item.data.grossm2;
        if (priceFilter) {
            for (let i = 0; i < priceFilter.length; i++) {
                newPriceFilter.push({ filter: priceFilter[i], isChecked: false })
            }
            setPriceFilters(newPriceFilter)

        }
        if (bedroomFilter) {
            for (let i = 0; i < bedroomFilter.length; i++) {
                newBedroomsFilter.push({ filter: bedroomFilter[i], isChecked: false })
            }
            setBedroomFilter(newBedroomsFilter);
        }
        if (floorFilter) {
            for (let i = 0; i < floorFilter.length; i++) {
                newFloorsFilter.push({ filter: floorFilter[i], isChecked: false })
            }
            setFloorFilters(newFloorsFilter)
        }
        if (groomFilter) {
            for (let i = 0; i < groomFilter.length; i++) {
                newGroomsFilter.push({ filter: groomFilter[i], isChecked: false })
            }
            setGroomFilter(newGroomsFilter);
        }
    }

    return (
        <div className="container">
            <Navbar />
            <div className="row">
                <div className="col-sm-3">
                    {
                        <Filters
                            PriceFilter={priceFilters}
                            setPriceFilters={setPriceFilters}
                            floorFilters={floorFilters}
                            setFloorFilters={setFloorFilters}
                            setBedroomFilter={setBedroomFilter}
                            bedRoomFilter={bedRoomFilter}
                            setGroomFilter={setGroomFilter}
                            groomFilter={groomFilter}
                            applyFilter={filterData}
                        />
                    }
                </div>
                <div className="col-sm-9">
                    <div className="row mt-5">
                        {
                            buildings && buildings.map((item) => (
                                <div className="col-sm-4" key={item.uniqueID}>
                                    <div className="card my-2">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <p className="card-text"> {item.bedroom}</p>
                                                <p className="card-text"> {item.price}</p>
                                                <p className="card-text"> {item.floor}</p>
                                                <p className="card-text"> {item.grossm2}</p>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Buildings
