import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../сomponents/Layout";
import { Container } from "./App.styled";
import { ThemeProvider } from "@mui/material";
import theme from "../helpers/muiTheme"


const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
};
