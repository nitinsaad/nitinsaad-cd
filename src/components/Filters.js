import React from 'react';

const Filters = ({
    PriceFilter,
    setPriceFilters,
    floorFilters,
    setFloorFilters,
    setBedroomFilter,
    bedRoomFilter,
    setGroomFilter,
    groomFilter,
    applyFilter }) => {  

    const handleChange_Floor = (e) => {
        let filter = [...floorFilters];
        let value = e.target.value;
        let ff = filter.filter(x => x.filter === value)[0]
        let Index = filter.indexOf(ff);
        filter[Index].isChecked = filter[Index].isChecked ? false : true;
        setFloorFilters(filter)
    }
    const handleChange_Bedroom = (e) => {
        let filter = [...bedRoomFilter];
        let value = e.target.value;
        let ff = filter.filter(x => x.filter === value)[0]
        let Index = filter.indexOf(ff);
        filter[Index].isChecked = filter[Index].isChecked ? false : true;
        setBedroomFilter(filter)
    }
    const handleChange_Groom = (e) => {
        let filter = [...groomFilter];
        let value = e.target.value;
        let ff = filter.filter(x => x.filter === value)[0]
        let Index = filter.indexOf(ff);
        filter[Index].isChecked = filter[Index].isChecked ? false : true;
        setGroomFilter(filter)
    }
    const handleChange_price = (e) => {
        let filter = [...PriceFilter];
        let value = e.target.value;
        let ff = filter.filter(x => x.filter === value)[0]
        let Index = filter.indexOf(ff);
        filter[Index].isChecked = filter[Index].isChecked ? false : true;
        setPriceFilters(filter)
    }
    return (
        <div className="row my-5">
            <div className="col">
                <h4 className="border-bottom" style={{float:'left'}}>Filters</h4>
                <button style={{float:'right'}} onClick={applyFilter}>Apply Filter</button>
            </div>           
            <div className="col-sm-12 my-2">
                <label htmlFor="name">Prices</label>
                <div>
                    {
                        PriceFilter && PriceFilter.map((item, index) => (
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.filter}
                                    onChange={(e) => handleChange_price(e)}
                                />
                                {item.filter}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="col-sm-12 my-2">
                <label htmlFor="name">Floor</label>
                <div>
                    {
                        floorFilters && floorFilters.map(item => (
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.filter}
                                    checked={floorFilters.isChecked}
                                    onChange={(e) => handleChange_Floor(e)}
                                />
                                {item.filter}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="col-sm-12 my-2">
                <label htmlFor="name">Bedroom</label>
                <div>
                    {
                        bedRoomFilter && bedRoomFilter.map(item => (
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.filter}
                                    onChange={(e) => handleChange_Bedroom(e)}
                                />
                                {item.filter}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="col-sm-12 my-2">
                <label htmlFor="name">Groom</label>
                <div>
                    {
                        groomFilter && groomFilter.map(item => (
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.filter}
                                    onChange={(e) => handleChange_Groom(e)}
                                />
                                {item.filter}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Filters
