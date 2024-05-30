import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";

export default function CharacterList() {
  const { characters, loading, error } = useContext(CharacterContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mt-5">
      <h1 className="my-4 text-center" style={{ fontSize: "5vw" }}>
        List Character
      </h1>
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {characters.map((character) => (
          <div key={character.id} className="col">
            <Link
              to={`/character/${character.id}`}
              className="card-link text-decoration-none"
            >
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
