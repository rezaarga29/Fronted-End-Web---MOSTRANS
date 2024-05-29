import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";

export default function DetailCharacter() {
  const { id } = useParams();
  const { character, loadingCharacter, errorCharacter, fetchCharacterById } =
    useContext(CharacterContext);

  // Memanggil fetchCharacterById hanya sekali saat komponen dimuat pertama kali
  useEffect(() => {
    fetchCharacterById(id);
  }, []); // Gunakan array dependensi kosong untuk memastikan useEffect hanya dipanggil sekali

  if (loadingCharacter) return <p>Loading...</p>;
  if (errorCharacter) return <p>Error: {errorCharacter.message}</p>;

  return (
    <div className="container mt-5">
      {character && (
        <div
          className="card mx-auto mb-3"
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
                <p className="card-text" style={{ color: "white" }}>
                  Location: {character.location.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
