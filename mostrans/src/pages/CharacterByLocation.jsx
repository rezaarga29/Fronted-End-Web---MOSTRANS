import React, { useContext, useState } from "react";
import { CharacterContext } from "../context/CharacterContext";

export default function CharacterByLocation() {
  const { locations } = useContext(CharacterContext);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="container mt-5">
      <h1 className="my-4 text-center" style={{ fontSize: "5vw" }}>
        Characters by Location
      </h1>
      <div className="list-group my-4 d-flex flex-wrap">
        {Object.keys(locations).map((locationName) => (
          <button
            key={locationName}
            className="list-group-item list-group-item-action"
            style={{ flex: "1 0 45%", margin: "0.5rem" }}
            onClick={() => setSelectedLocation(locationName)}
          >
            {locationName}
          </button>
        ))}
      </div>
      {selectedLocation && (
        <div>
          <h2 className="text-center mb-4">{selectedLocation}</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {locations[selectedLocation].map((character) => (
              <div key={character.id} className="col">
                <div
                  className="card h-100 border border-light"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                >
                  <img
                    src={character.image}
                    className="card-img-top"
                    alt={character.name}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-center"
                      style={{ color: "white", fontSize: "2.5vw" }}
                    >
                      {character.name}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
