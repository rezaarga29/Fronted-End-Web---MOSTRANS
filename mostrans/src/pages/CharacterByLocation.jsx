import React, { useContext, useState } from "react";
import { CharacterContext } from "../context/CharacterContext";

export default function CharacterByLocation() {
  const { locations } = useContext(CharacterContext);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Characters by Location</h1>
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
          <h2 className="text-center">{selectedLocation}</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {locations[selectedLocation].map((character) => (
              <div key={character.id} className="col">
                <div className="card h-100">
                  <img
                    src={character.image}
                    className="card-img-top"
                    alt={character.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
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
