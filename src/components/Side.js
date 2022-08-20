import { Link } from "react-router-dom";

function Side() {
    return (
        <>
            <aside className="menu ml-2 mt-2">
                <p className="menu-label is-size-4">XIV Marketeer</p>
                <p className="menu-label">Server: Spriggan</p>
                <p className="menu-label">Config</p>
                <ul className="menu-list">
                    <li key='side_category_groups'><Link to="/category_groups">Category Groups</Link></li>
                    <li key='side_category_names'><Link to="/category_names">Category Names</Link></li>
                    <li key='side_item_category_ids'><Link to="/item_category_ids">Item Category Ids</Link></li>
                    <li key='side_item_names'><Link to="/item_names">Item Names</Link></li>
                </ul>
                <p className="menu-label">All items</p>
                <ul className="menu-list">
                    <li key='side_median_price_hq'><Link to='/all/median_price_hq'>Median Price (HQ)</Link></li>
                    <li key='side_median_price_nq'><Link to='/all/median_price_nq'>Median Price (NQ)</Link></li>
                    <li key='side_regular_sale_velocity'><Link to='/all/regular_sale_velocity'>Sale Velocity (NQ+HQ)</Link></li>
                    <li key='side_hq_sale_velocity'><Link to='/all/hq_sale_velocity'>Sale Velocity (HQ)</Link></li>
                    <li key='side_nq_sale_velocity'><Link to='/all/nq_sale_velocity'>Sale Velocity (NQ)</Link></li>
                </ul>
                <p className="menu-label">DoW/DoM</p><ul className="menu-list">
                    <li key='side_dow_dom_median_price_hq'>
                        <Link to='/dow_dom/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_dow_dom_median_price_nq'>
                        <Link to='/dow_dom/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_dow_dom_regular_sale_velocity'>
                        <Link to='/dow_dom/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_dow_dom_sale_velocity_hq'>
                        <Link to='/dow_dom/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_dow_dom_sale_velocity_nq'>
                        <Link to='/dow_dom/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">DoH/DoL</p><ul className="menu-list">
                    <li key='side_doh_dol_median_price_hq'>
                        <Link to='/doh_dol/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_doh_dol_median_price_nq'>
                        <Link to='/doh_dol/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_doh_dol_regular_sale_velocity'>
                        <Link to='/doh_dol/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_doh_dol_sale_velocity_hq'>
                        <Link to='/doh_dol/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_doh_dol_sale_velocity_nq'>
                        <Link to='/doh_dol/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Gear/Accessories</p><ul className="menu-list">
                    <li key='side_gear_accessories_median_price_hq'>
                        <Link to='/gear_accessories/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_gear_accessories_median_price_nq'>
                        <Link to='/gear_accessories/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_gear_accessories_regular_sale_velocity'>
                        <Link to='/gear_accessories/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_gear_accessories_sale_velocity_hq'>
                        <Link to='/gear_accessories/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_gear_accessories_sale_velocity_nq'>
                        <Link to='/gear_accessories/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Food/Medicine</p><ul className="menu-list">
                    <li key='side_food_medicine_median_price_hq'>
                        <Link to='/food_medicine/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_food_medicine_median_price_nq'>
                        <Link to='/food_medicine/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_food_medicine_regular_sale_velocity'>
                        <Link to='/food_medicine/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_food_medicine_sale_velocity_hq'>
                        <Link to='/food_medicine/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_food_medicine_sale_velocity_nq'>
                        <Link to='/food_medicine/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Crafting Ingredients</p><ul className="menu-list">
                    <li key='side_crafting_ingredients_median_price_hq'>
                        <Link to='/crafting_ingredients/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_crafting_ingredients_median_price'>
                        <Link to='/crafting_ingredients/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_crafting_ingredients_regular_sale_velocity'>
                        <Link to='/crafting_ingredients/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_crafting_ingredients_sale_velocity_hq'>
                        <Link to='/crafting_ingredients/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_crafting_ingredients_sale_velocity'>
                        <Link to='/crafting_ingredients/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Furniture</p><ul className="menu-list">
                    <li key='side_furniture_median_price_hq'>
                        <Link to='/furniture/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_furniture_median_price_nq'>
                        <Link to='/furniture/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_furniture_regular_sale_velocity'>
                        <Link to='/furniture/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_furniture_sale_velocity_hq'>
                        <Link to='/furniture/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_furniture_sale_velocity_nq'>
                        <Link to='/furniture/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Gardening</p><ul className="menu-list">
                    <li key='side_gardening_median_price_hq'>
                        <Link to='/gardening/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_gardening_median_price_nq'>
                        <Link to='/gardening/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_gardening_regular_sale_velocity'>
                        <Link to='/gardening/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_gardening_sale_velocity_hq'>
                        <Link to='/gardening/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_gardening_sale_velocity_nq'>
                        <Link to='/gardening/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Materia</p><ul className="menu-list">
                    <li key='side_materia_median_price_hq'>
                        <Link to='/materia/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_materia_median_price_nq'>
                        <Link to='/materia/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_materia_regular_sale_velocity'>
                        <Link to='/materia/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_materia_sale_velocity_hq'>
                        <Link to='/materia/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_materia_sale_velocity_nq'>
                        <Link to='/materia/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Airship/Submarine</p><ul className="menu-list">
                    <li key='side_airship_submarine_median_price_hq'>
                        <Link to='/airship_submarine/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_airship_submarine_median_price_nq'>
                        <Link to='/airship_submarine/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_airship_submarine_regular_sale_velocity'>
                        <Link to='/airship_submarine/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_airship_submarine_sale_velocity_hq'>
                        <Link to='/airship_submarine/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_airship_submarine_velocity_nq'>
                        <Link to='/airship_submarine/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Orchestrion Rolls</p><ul className="menu-list">
                    <li key='side_orchestrion_rolls_median_price_hq'>
                        <Link to='/orchestrion_rolls/median_price_hq'>
                            Median Price (HQ)
                        </Link>
                    </li>
                    <li key='side_orchestrion_rolls_median_price_nq'>
                        <Link to='/orchestrion_rolls/median_price_nq'>
                            Median Price (NQ)
                        </Link>
                    </li>
                    <li key='side_orchestrion_rolls_regular_sale_velocity'>
                        <Link to='/orchestrion_rolls/regular_sale_velocity'>
                            Sale Velocity (NQ+HQ)
                        </Link>
                    </li>
                    <li key='side_orchestrion_rolls_sale_velocity_hq'>
                        <Link to='/orchestrion_rolls/sale_velocity_hq'>
                            Sale Velocity (HQ)
                        </Link>
                    </li>
                    <li key='side_orchestrion_rolls_sale_velocity_nq'>
                        <Link to='/orchestrion_rolls/sale_velocity_nq'>
                            Sale Velocity (NQ)
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
}
export default Side;
