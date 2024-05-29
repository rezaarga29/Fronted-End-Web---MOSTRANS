import React, { createContext, useEffect, useState } from "react";
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
  query getCharacterById($id: ID!) {
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
  const {
    loading: loadingCharacters,
    error: errorCharacters,
    data: dataCharacters,
  } = useQuery(CHARACTERS_QUERY);
  const [
    getCharacterById,
    { loading: loadingCharacter, error: errorCharacter, data: dataCharacter },
  ] = useLazyQuery(CHARACTER_BY_ID_QUERY);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (dataCharacters) {
      setCharacters(dataCharacters.characters.results);
    }
  }, [dataCharacters]);

  useEffect(() => {
    if (dataCharacter) {
      setCharacter(dataCharacter.character);
    }
  }, [dataCharacter]);

  const fetchCharacterById = (id) => {
    getCharacterById({ variables: { id } });
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        character,
        loadingCharacters,
        errorCharacters,
        loadingCharacter,
        errorCharacter,
        fetchCharacterById,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };
