import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";

export default function DetailCharacter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    character,
    loadingCharacter,
    errorCharacter,
    fetchCharacterById,
    assignCharacterToLocation,
  } = useContext(CharacterContext);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    fetchCharacterById(id);
  }, [id, fetchCharacterById]);

  const handleAssign = () => {
    if (locationName.trim()) {
      assignCharacterToLocation(character, locationName);
      setLocationName("");
      navigate("/location");
    }
  };

  if (loadingCharacter) return <p>Loading...</p>;
  if (errorCharacter) return <p>Error: {errorCharacter.message}</p>;

  return (
    <div className="container mt-5">
      <h1 className="my-4 text-center" style={{ fontSize: "5vw" }}>
        Character Detail
      </h1>
      {character && (
        <div
          className="card mx-auto mb-3 border border-light"
          style={{
            maxWidth: "540px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="row g-0">
            <div className="col-md-4 text-center mx-auto">
              <img
                src={character.image}
                className="img-fluid rounded-start"
                alt={character.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "white" }}>
                  {character.name}
                </h5>
                <p className="card-text" style={{ color: "white" }}>
                  Status: {character.status}
                </p>
                <p className="card-text" style={{ color: "white" }}>
                  Species: {character.species}
                </p>
                {character.type && (
                  <p className="card-text" style={{ color: "white" }}>
                    Type: {character.type}
                  </p>
                )}
                <p className="card-text" style={{ color: "white" }}>
                  Gender: {character.gender}
                </p>
                <p className="card-text" style={{ color: "white" }}>
                  Origin: {character.origin.name}
                </p>
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Enter location name"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    className="form-control"
                  />
                  <button
                    onClick={handleAssign}
                    className="btn btn-primary mt-2"
                  >
                    Assign to Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
