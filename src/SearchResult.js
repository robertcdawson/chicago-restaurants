import { useState } from 'react';
import './App.scss';

function SearchResult(props) {
  const [showDetail, setShowDetail] = useState(false);

  // Set Google Maps URL from current API result
  const mapAddress = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${props.item.address} ${props.item.city} ${props.item.state} ${props.item.zip}`);
  // Get inspection month, date, and year from current API result
  const [inspectionMonth, inspectionDate, inspectionYear] = new Date(props.item.inspection_date).toLocaleDateString("en-US").split("/");

  const viewRestaurantDetails = (event) => {
    event.preventDefault();
    // Toggle showDetail state variable
    setShowDetail(showDetail => !showDetail);
  };

  let detailsCallToAction = !showDetail ? "view more" : "view less";

  const searchResultClass = !showDetail ? "search-result" : "search-result open";

  return (
    <div key={props.index} className={searchResultClass}>
      <p>{props.item.aka_name} <a href="#" className="show-detail" onClick={viewRestaurantDetails}>({detailsCallToAction})</a></p>
      {showDetail && <div className="detail">
        <p>{props.item.address}</p>
        <p>{props.item.city}, {props.item.state} {props.item.zip}</p>
        <p>Health inspection: {props.item.results} ({inspectionMonth}-{inspectionDate}-{inspectionYear})</p>
        <p>Health violations: {props.item.violations}</p>
        <p><a href={mapAddress} target="_blank" rel="noreferrer">Get directions</a></p>
      </div>}
    </div>
  );
}

export default SearchResult;
