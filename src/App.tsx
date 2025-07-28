import { Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/404";
import AboutUs from "./pages/who-we-are/AboutUs";
import CareersPage from "./pages/who-we-are/CareersPage";
import ContactPage from "./pages/resources/ContactPage";
import CookiePolicy from "./pages/policies/CookiePolicy";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import OurMission from "./pages/our-priorities/OurMission";
import { useEffect } from "react";
import { analytics } from "./firebaseConfig";
import { logEvent } from "firebase/analytics";
import UnityLaunchVehicle from "./pages/our-priorities/UnityLaunchVehicle";

function App() {
    const location = useLocation();

    useEffect(() => {
        if (process.env.REACT_APP_ENV === "production") {
            logEvent(analytics, "page_view", {
                page_path: location.pathname,
                page_title: document.title,
                page_location: window.location.href
            });
        }
    }, [location]);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <IndexPage />
                }
            />
            <Route
                path="/about-us"
                element={
                    <AboutUs />
                }
            />
            <Route
                path="/careers"
                element={
                    <CareersPage />
                }
            />
            <Route 
                path="/our-mission"
                element={
                    <OurMission />
                }
            />
            <Route 
                path="/unity-launch-vehicle"
                element={
                    <UnityLaunchVehicle />
                }
            />
            <Route
                path="/contact-us"
                element={
                    <ContactPage />
                }
            />
            <Route
                path="/cookies"
                element={
                    <CookiePolicy />
                }
            />
            <Route
                path="/privacy-policy"
                element={
                    <PrivacyPolicy />
                }
            />
            <Route
                path="*"
                element={
                    <NotFoundPage />
                }
            />
        </Routes>
    );
}

export default App;