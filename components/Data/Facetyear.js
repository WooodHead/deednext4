import { MultiList } from "@appbaseio/reactivesearch";

function FacetYear(props) {
  const sensorName = "yearSensor";
  const sensorsList = (array, name) => {
    array.splice(array.indexOf(name), 1);
    return array;
  };

  return (
    <MultiList
      style={{ padding: "10px" }}
      componentId="yearSensor"
      dataField="deedDate.year"
      size={20}
      sortBy="desc"
      queryFormat="or"
      showCheckbox
      showSearch={false}
      react={{
        and: props.sensors
      }}
      showFilter
      showCount={true}
      filterLabel="Year"
      URLParams={false}
    />
  );
}

export default FacetYear;
