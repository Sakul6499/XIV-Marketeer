import { Link } from "react-router-dom";

function Side() {
    return (
        <>
            <aside className="menu ml-2 mt-2">
                <p className="menu-label is-size-4">XIV Marketeer</p>
                <p className="menu-label">Config</p>
                <ul className="menu-list">
                    <li><Link to="/category_groups">Category Groups</Link></li>
                    <li><Link to="/category_names">Category Names</Link></li>
                    <li><Link to="/item_category_ids">Item Category Ids</Link></li>
                    <li><Link to="/item_names">Item Names</Link></li>
                </ul>
                <p className="menu-label">All items</p>
                <ul className="menu-list">
                    <li><Link to="/median_price_hq">Median Price (HQ)</Link></li>
                    <li><Link to="/median_price_nq">Median Price (NQ)</Link></li>
                </ul>
            </aside>
        </>
    );
}
export default Side;
