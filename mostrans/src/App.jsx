import React from "react";
import { ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterProvider } from "./context/CharacterContext";

import Layout from "./components/Layout";
import CharacterList from "./pages/CharacterList";
import DetailCharacter from "./pages/DetailCharacter";
import CharacterByLocation from "./pages/CharacterByLocation";
import client from "./config/apolloConnection";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CharacterList />,
      },
      {
        path: "/character/:id",
        element: <DetailCharacter />,
      },
      {
        path: "/location",
        element: <CharacterByLocation />,
      },
    ],
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <CharacterProvider>
        <RouterProvider router={router} />
      </CharacterProvider>
    </ApolloProvider>
  );
}

export default App;
