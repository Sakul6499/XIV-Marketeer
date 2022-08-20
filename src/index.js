// React
import * as React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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

        {/* All */}
        <Route path='/all/median_price_hq' element={<BasicItemsPage key='All Items :: Median Price (HQ)' title='All Items :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/median_price_hq.json' />} />
        <Route path="/all/median_price_nq" element={<BasicItemsPage key='All Items :: Median Price (NQ)' title='All Items :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/regular_sale_velocity.json' />} />
        <Route path='/all/regular_sale_velocity' element={<BasicItemsPage key='All Items :: Sale Velocity (HQ + NQ)' title='All Items :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/regular_sale_velocity.json' />} />
        <Route path='/all/hq_sale_velocity' element={<BasicItemsPage key='All Items :: Sale Velocity (HQ)' title='All Items :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/hq_sale_velocity.json' />} />
        <Route path='/all/nq_sale_velocity' element={<BasicItemsPage key='All Items :: Sale Velocity (NQ)' title='All Items :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/nq_sale_velocity.json' />} />

        { /* DoW/DoM */}
        <Route path='/dow_dom/median_price_hq' element={<BasicItemsPage key='DoW/DoM :: Median Price (HQ)' title='DoW/DoM :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/dow_dom_median_price_hq.json' />} />
        <Route path='/dow_dom/median_price_nq' element={<BasicItemsPage key='DoW/DoM :: Median Price (NQ)' title='DoW/DoM :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/dow_dom_regular_sale_velocity.json' />} />
        <Route path='/dow_dom/regular_sale_velocity' element={<BasicItemsPage key='DoW/DoM :: Sale Velocity (HQ + NQ)' title='DoW/DoM :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/dow_dom_regular_sale_velocity.json' />} />
        <Route path='/dow_dom/sale_velocity_hq' element={<BasicItemsPage key='DoW/DoM :: Sale Velocity (HQ)' title='DoW/DoM :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/dow_dom_hq_sale_velocity.json' />} />
        <Route path='/dow_dom/sale_velocity_nq' element={<BasicItemsPage key='DoW/DoM :: Sale Velocity (NQ)' title='DoW/DoM :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/dow_dom_nq_sale_velocity.json' />} />

        { /* DoH/DoL */}
        <Route path='/doh_dol/median_price_hq' element={<BasicItemsPage key='DoH/DoL :: Median Price (HQ)' title='DoH/DoL :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/doh_dol_median_price_hq.json' />} />
        <Route path='/doh_dol/median_price_nq' element={<BasicItemsPage key='DoH/DoL :: Median Price (NQ)' title='DoH/DoL :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/doh_dol_regular_sale_velocity.json' />} />
        <Route path='/doh_dol/regular_sale_velocity' element={<BasicItemsPage key='DoH/DoL :: Sale Velocity (HQ + NQ)' title='DoH/DoL :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/doh_dol_regular_sale_velocity.json' />} />
        <Route path='/doh_dol/sale_velocity_hq' element={<BasicItemsPage key='DoH/DoL :: Sale Velocity (HQ)' title='DoH/DoL :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/doh_dol_hq_sale_velocity.json' />} />
        <Route path='/doh_dol/sale_velocity_nq' element={<BasicItemsPage key='DoH/DoL :: Sale Velocity (NQ)' title='DoH/DoL :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/doh_dol_nq_sale_velocity.json' />} />

        { /* Gear / Accessories */}
        <Route path='/gear_accessories/median_price_hq' element={<BasicItemsPage key='Gear / Accessories :: Median Price (HQ)' title='Gear / Accessories :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gear_accessories_median_price_hq.json' />} />
        <Route path='/gear_accessories/median_price_nq' element={<BasicItemsPage key='Gear / Accessories :: Median Price (NQ)' title='Gear / Accessories :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gear_accessories_regular_sale_velocity.json' />} />
        <Route path='/gear_accessories/regular_sale_velocity' element={<BasicItemsPage key='Gear / Accessories :: Sale Velocity (HQ + NQ)' title='Gear / Accessories :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gear_accessories_regular_sale_velocity.json' />} />
        <Route path='/gear_accessories/sale_velocity_hq' element={<BasicItemsPage key='Gear / Accessories :: Sale Velocity (HQ)' title='Gear / Accessories :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gear_accessories_hq_sale_velocity.json' />} />
        <Route path='/gear_accessories/sale_velocity_nq' element={<BasicItemsPage key='Gear / Accessories :: Sale Velocity (NQ)' title='Gear / Accessories :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gear_accessories_nq_sale_velocity.json' />} />

        { /* Food / Medicine*/}
        <Route path='/food_medicine/median_price_hq' element={<BasicItemsPage key='Food / Medicine :: Median Price (HQ)' title='Food / Medicine :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/food_medicine_median_price_hq.json' />} />
        <Route path='/food_medicine/median_price_nq' element={<BasicItemsPage key='Food / Medicine :: Median Price (NQ)' title='Food / Medicine :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/food_medicine_regular_sale_velocity.json' />} />
        <Route path='/food_medicine/regular_sale_velocity' element={<BasicItemsPage key='Food / Medicine :: Sale Velocity (HQ + NQ)' title='Food / Medicine :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/food_medicine_regular_sale_velocity.json' />} />
        <Route path='/food_medicine/sale_velocity_hq' element={<BasicItemsPage key='Food / Medicine :: Sale Velocity (HQ)' title='Food / Medicine :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/food_medicine_hq_sale_velocity.json' />} />
        <Route path='/food_medicine/sale_velocity_nq' element={<BasicItemsPage key='Food / Medicine :: Sale Velocity (NQ)' title='Food / Medicine :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/food_medicine_nq_sale_velocity.json' />} />

        { /* Crafting Ingredients */}
        <Route path='/crafting_ingredients/median_price_hq' element={<BasicItemsPage key='Crafting Ingredients :: Median Price (HQ)' title='Crafting Ingredients :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/crafting_ingredients_median_price_hq.json' />} />
        <Route path='/crafting_ingredients/median_price_nq' element={<BasicItemsPage key='Crafting Ingredients :: Median Price (NQ)' title='Crafting Ingredients :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/crafting_ingredients_regular_sale_velocity.json' />} />
        <Route path='/crafting_ingredients/regular_sale_velocity' element={<BasicItemsPage key='Crafting Ingredients :: Sale Velocity (HQ + NQ)' title='Crafting Ingredients :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/crafting_ingredients_regular_sale_velocity.json' />} />
        <Route path='/crafting_ingredients/sale_velocity_hq' element={<BasicItemsPage key='Crafting Ingredients :: Sale Velocity (HQ)' title='Crafting Ingredients :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/crafting_ingredients_hq_sale_velocity.json' />} />
        <Route path='/crafting_ingredients/sale_velocity_nq' element={<BasicItemsPage key='Crafting Ingredients :: Sale Velocity (NQ)' title='Crafting Ingredients :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/crafting_ingredients_nq_sale_velocity.json' />} />

        { /* Furniture */}
        <Route path='/furniture/median_price_hq' element={<BasicItemsPage key='Furniture :: Median Price (HQ)' title='Furniture :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/furniture_median_price_hq.json' />} />
        <Route path='/furniture/median_price_nq' element={<BasicItemsPage key='Furniture :: Median Price (NQ)' title='Furniture :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/furniture_regular_sale_velocity.json' />} />
        <Route path='/furniture/regular_sale_velocity' element={<BasicItemsPage key='Furniture :: Sale Velocity (HQ + NQ)' title='Furniture :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/furniture_regular_sale_velocity.json' />} />
        <Route path='/furniture/sale_velocity_hq' element={<BasicItemsPage key='Furniture :: Sale Velocity (HQ)' title='Furniture :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/furniture_hq_sale_velocity.json' />} />
        <Route path='/furniture/sale_velocity_nq' element={<BasicItemsPage key='Furniture :: Sale Velocity (NQ)' title='Furniture :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/furniture_nq_sale_velocity.json' />} />

        { /* Gardening */}
        <Route path='/gardening/median_price_hq' element={<BasicItemsPage key='Gardening :: Median Price (HQ)' title='Gardening :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gardening_median_price_hq.json' />} />
        <Route path='/gardening/median_price_nq' element={<BasicItemsPage key='Gardening :: Median Price (NQ)' title='Gardening :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gardening_regular_sale_velocity.json' />} />
        <Route path='/gardening/regular_sale_velocity' element={<BasicItemsPage key='Gardening :: Sale Velocity (HQ + NQ)' title='Gardening :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gardening_regular_sale_velocity.json' />} />
        <Route path='/gardening/sale_velocity_hq' element={<BasicItemsPage key='Gardening :: Sale Velocity (HQ)' title='Gardening :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gardening_hq_sale_velocity.json' />} />
        <Route path='/gardening/sale_velocity_nq' element={<BasicItemsPage key='Gardening :: Sale Velocity (NQ)' title='Gardening :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/gardening_nq_sale_velocity.json' />} />

        { /* Materia */}
        <Route path='/materia/median_price_hq' element={<BasicItemsPage key='Materia :: Median Price (HQ)' title='Materia :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/materia_median_price_hq.json' />} />
        <Route path='/materia/median_price_nq' element={<BasicItemsPage key='Materia :: Median Price (NQ)' title='Materia :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/materia_regular_sale_velocity.json' />} />
        <Route path='/materia/regular_sale_velocity' element={<BasicItemsPage key='Materia :: Sale Velocity (HQ + NQ)' title='Materia :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/materia_regular_sale_velocity.json' />} />
        <Route path='/materia/sale_velocity_hq' element={<BasicItemsPage key='Materia :: Sale Velocity (HQ)' title='Materia :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/materia_hq_sale_velocity.json' />} />
        <Route path='/materia/sale_velocity_nq' element={<BasicItemsPage key='Materia :: Sale Velocity (NQ)' title='Materia :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/materia_nq_sale_velocity.json' />} />

        { /* Airship/Submarines */}
        <Route path='/airship_submarine/median_price_hq' element={<BasicItemsPage key='Airship/Submarines :: Median Price (HQ)' title='Airship/Submarines :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/airship_submarine_median_price_hq.json' />} />
        <Route path='/airship_submarine/median_price_nq' element={<BasicItemsPage key='Airship/Submarines :: Median Price (NQ)' title='Airship/Submarines :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/airship_submarine_regular_sale_velocity.json' />} />
        <Route path='/airship_submarine/regular_sale_velocity' element={<BasicItemsPage key='Airship/Submarines :: Sale Velocity (HQ + NQ)' title='Airship/Submarines :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/airship_submarine_regular_sale_velocity.json' />} />
        <Route path='/airship_submarine/sale_velocity_hq' element={<BasicItemsPage key='Airship/Submarines :: Sale Velocity (HQ)' title='Airship/Submarines :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/airship_submarine_hq_sale_velocity.json' />} />
        <Route path='/airship_submarine/sale_velocity_nq' element={<BasicItemsPage key='Airship/Submarines :: Sale Velocity (NQ)' title='Airship/Submarines :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/airship_submarine_nq_sale_velocity.json' />} />

        { /* Orchestrion Rolls */}
        <Route path='/orchestrion_rolls/median_price_hq' element={<BasicItemsPage key='Orchestrion Rolls :: Median Price (HQ)' title='Orchestrion Rolls :: Median Price (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/orchestrion_rolls_median_price_hq.json' />} />
        <Route path='/orchestrion_rolls/median_price_nq' element={<BasicItemsPage key='Orchestrion Rolls :: Median Price (NQ)' title='Orchestrion Rolls :: Median Price (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/orchestrion_rolls_regular_sale_velocity.json' />} />
        <Route path='/orchestrion_rolls/regular_sale_velocity' element={<BasicItemsPage key='Orchestrion Rolls :: Sale Velocity (HQ + NQ)' title='Orchestrion Rolls :: Sale Velocity (HQ + NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/orchestrion_rolls_regular_sale_velocity.json' />} />
        <Route path='/orchestrion_rolls/sale_velocity_hq' element={<BasicItemsPage key='Orchestrion Rolls :: Sale Velocity (HQ)' title='Orchestrion Rolls :: Sale Velocity (HQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/orchestrion_rolls_hq_sale_velocity.json' />} />
        <Route path='/orchestrion_rolls/sale_velocity_nq' element={<BasicItemsPage key='Orchestrion Rolls :: Sale Velocity (NQ)' title='Orchestrion Rolls :: Sale Velocity (NQ)' query_url='https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/orchestrion_rolls_nq_sale_velocity.json' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
