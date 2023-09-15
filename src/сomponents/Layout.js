import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "../сomponents/Header/Header";
import { Loader } from "../сomponents/Loader/Loader";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />} >
        <Outlet />
      </Suspense>
    </>
  );
};
