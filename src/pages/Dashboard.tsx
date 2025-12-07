import { useState } from "react";
import Sidebar from "../components/layout/Dashboard/SlideBar";
import Overview from "../components/layout/Dashboard/sections/Overview";
import Orders from "../components/layout/Dashboard/Orders";
import UserProfilePage from "../components/layout/Dashboard/sections/UserProfilePage";
import Settings from "../components/layout/Dashboard/sections/Settings";
import Category from "../components/layout/Dashboard/sections/Category";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  const [section, setSection] = useState("overview");

  return (
    <>
    <Helmet>
      <title>Dashboard | Vilma Plantas</title>
    </Helmet>
    <div className="flex min-h-screen bg-(--color-background) text-(--color-text)">
      
      <Sidebar section={section} setSection={setSection} />

      <main className="flex-1 p-10">
        {section === "overview" && <Overview />}
        {section === "orders" && <Orders />}
        {section === "profile" && <UserProfilePage />}
        {section === "settings" && <Settings />}
        {section === "categories" && <Category />}
      </main>
    </div>
    </>
  );
}
