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
import MedianPriceHQ from "./pages/MedianPriceHQ";
import MedianPriceNQ from "./pages/MedianPriceNQ";

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
        <Route path="/median_price_hq" element={<MedianPriceHQ />} />
        <Route path="/median_price_nq" element={<MedianPriceNQ />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
