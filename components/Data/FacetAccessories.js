import {
  DataSearch,
  MultiList,
  MultiDropdownList
} from "@appbaseio/reactivesearch";

const FacetAccessories = props => {
  const newArray = (arr, index) => {
    return arr.slice(0, index).concat(arr.slice(index + 1));
  };
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <MultiList
          style={{ padding: "10px" }}
          componentId={props.party + "SexSensor"}
          dataField={props.party + ".sex.keyword"}
          size={10}
          sortBy="desc"
          showCheckbox
          react={{
            and: newArray(
              props.sensors,
              props.sensors.indexOf(props.party + "SexSensor")
            )
          }}
          showSearch={false}
          showFilter
          showCount={true}
          filterLabel={props.party + " Sex"}
          URLParams={false}
          title="Sex"
        />
        <DataSearch
          style={{ padding: "10px" }}
          componentId={props.party + "NameSensor"}
          dataField={[
            props.party + ".firstName",
            props.party + ".patronyme",
            props.party + ".lastName"
          ]}
          queryFormat="and"
          placeholder={"Search for " + props.party + " name"}
          autosuggest={true}
          react={{
            and: newArray(
              props.sensors,
              props.sensors.indexOf(props.party + "NameSensor")
            )
          }}
          filterLabel={props.party + " name"}
          URLParams={false}
          title="Name"
        />
        <DataSearch
          style={{ padding: "10px" }}
          componentId={props.party + "SocialStatusSensor"}
          dataField={[props.party + ".socialStatus"]}
          queryFormat="and"
          placeholder={"Search for " + props.party + " social status"}
          autosuggest={true}
          react={{
            and: newArray(
              props.sensors,
              props.sensors.indexOf(props.party + "SocialStatusSensor")
            )
          }}
          filterLabel={props.party + " social status"}
          URLParams={false}
          title="Social Status"
        />
        <MultiDropdownList
          style={{ padding: "10px" }}
          componentId={props.party + "GeogrStatusSensor"}
          dataField={props.party + ".geogrStatus.keyword"}
          showCheckbox
          showSearch={true}
          react={{
            and: newArray(
              props.sensors,
              props.sensors.indexOf(props.party + "GeogrStatusSensor")
            )
          }}
          placeholder={"Search for " + props.party + " geogr status"}
          showFilter
          showCount={true}
          filterLabel={props.party + " geogr status"}
          URLParams={false}
          title="Geogr Status"
        />
      </div>
    </>
  );
};

export default FacetAccessories;
