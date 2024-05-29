import React, { createContext, useState, useEffect, useCallback } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const CharacterContext = createContext();

const CHARACTERS_QUERY = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`;

const CHARACTER_BY_ID_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

const CharacterProvider = ({ children }) => {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const [loadingCharacter, setLoadingCharacter] = useState(false);
  const [errorCharacter, setErrorCharacter] = useState(null);
  const [locations, setLocations] = useState(() => {
    const savedLocations = localStorage.getItem("locations");
    return savedLocations ? JSON.parse(savedLocations) : {};
  });
  const [fetchCharacter, { data: characterData }] = useLazyQuery(
    CHARACTER_BY_ID_QUERY
  );

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  useEffect(() => {
    if (characterData) {
      setCharacter(characterData.character);
    }
  }, [characterData]);

  const fetchCharacterById = useCallback(
    (id) => {
      setLoadingCharacter(true);
      fetchCharacter({ variables: { id } })
        .then(() => setLoadingCharacter(false))
        .catch((error) => {
          setErrorCharacter(error);
          setLoadingCharacter(false);
        });
    },
    [fetchCharacter]
  );

  const assignCharacterToLocation = useCallback((character, locationName) => {
    setLocations((prevLocations) => {
      const newLocations = { ...prevLocations };
      if (!newLocations[locationName]) {
        newLocations[locationName] = [];
      }
      if (
        !newLocations[locationName].some((char) => char.id === character.id)
      ) {
        Object.keys(newLocations).forEach((loc) => {
          newLocations[loc] = newLocations[loc].filter(
            (char) => char.id !== character.id
          );
        });
        newLocations[locationName].push(character);
      }
      localStorage.setItem("locations", JSON.stringify(newLocations));
      return newLocations;
    });
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        character,
        loading,
        error,
        loadingCharacter,
        errorCharacter,
        fetchCharacterById,
        assignCharacterToLocation,
        locations,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };
