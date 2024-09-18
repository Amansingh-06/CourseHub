import "./Filter.css"
function Filter(props) {
    let filterdata = props.filterData;
    let category = props.category;
    let setcategory = props.setcategory


    function handleclick(category) {
        setcategory(category)
    }


    return (
        < div className="btnbox">
            <div className="storebtn">
            {filterdata.map((data, index) => (
                <button className="btn" key={index} onClick={()=>handleclick(data.title)}>{data.title}</button>
            ))}
            </div>
        </div>
    );
}

export default Filter;
