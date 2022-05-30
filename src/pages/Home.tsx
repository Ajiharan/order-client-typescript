import React from "react";
import ImageContainer from "../components/ImageContainer";
import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import OrderView from "../components/OrderView";
import { CustomThemeProvider } from "../core/theme/CustomThemeProvider";
import ErrorBoundary from "../core/util/Error/ErrorBoundary";

const Home = () => {
  return (
    <div className="home-page-container">
      <Navbar />
      <ImageContainer />
      <CustomThemeProvider>
        <OrderForm />
      </CustomThemeProvider>

      <ErrorBoundary>
        <OrderView />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
