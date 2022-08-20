// React
import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Stylesheet
import "./index.css";

// Pages
import Home from "./pages/Home";

// Config
import CategoryGroups from "./pages/CategoryGroups"
import CategoryNames from "./pages/CategoryNames"
import ItemCategoryIds from "./pages/ItemCategoryIds"
import ItemNames from "./pages/ItemNames"

// General
import BasicItemsPage from "./pages/BasicItemsPage";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Config */}
        <Route path="/category_groups" element={<CategoryGroups />} />
        <Route path="/category_names" element={<CategoryNames />} />
        <Route path="/item_category_ids" element={<ItemCategoryIds />} />
        <Route path="/item_names" element={<ItemNames />} />
        {/* General */}
        <Route path="/median_price_hq" element={<BasicItemsPage title="Median Price (HQ)" query_url="https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/median_price_hq.json" />} />
        <Route path="/median_price_nq" element={<BasicItemsPage title="Median Price (NQ)" query_url="https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/median_price_nq.json" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
