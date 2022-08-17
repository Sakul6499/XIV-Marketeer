
class Item {
    
    name;
    item_id;
    category;
    category_id;
    average_price_nq;
    average_price_hq;
    median_price_nq;
    median_price_hq;
    regular_sale_velocity;
    nq_sale_velocity;
    hq_sale_velocity;
    garland_tools_url;
    universalis_url;

    constructor(name, item_id, category, category_id, average_price_nq, average_price_hq, median_price_nq, median_price_hq, regular_sale_velocity, nq_sale_velocity, hq_sale_velocity, garland_tools_url, universalis_url) {
        this.name = name;
        this.item_id = item_id;
        this.category = category;
        this.category_id = category_id;
        this.average_price_nq = average_price_nq;
        this.average_price_hq = average_price_hq;
        this.median_price_nq = median_price_nq;
        this.median_price_hq = median_price_hq;
        this.regular_sale_velocity = regular_sale_velocity;
        this.nq_sale_velocity = nq_sale_velocity;
        this.hq_sale_velocity = hq_sale_velocity;
        this.garland_tools_url = garland_tools_url;
        this.universalis_url = universalis_url;
    }

    static FromJSON(json) {
        return Object.assign(new Item(), json);
    }

    getMarketPosition() {
        return this.market_position;
    }

    getName() {
        return this.name;
    }

    getItemId() {
        return this.item_id;
    }

    getCategory() {
        return this.category;
    }

    getCategoryId() {
        return this.category_id;
    }

    getAveragePriceNq() {
        return this.average_price_nq;
    }

    getAveragePriceHq() {
        return this.average_price_hq;
    }

    getMedianPriceNq() {
        return this.median_price_nq;
    }

    getMedianPriceHq() {
        return this.median_price_hq;
    }

    getRegularSaleVelocity() {
        return this.regular_sale_velocity;
    }

    getNqSaleVelocity() {
        return this.nq_sale_velocity;
    }

    getHqSaleVelocity() {
        return this.hq_sale_velocity;
    }

    getGarlandToolsUrl() {
        return this.garland_tools_url;
    }

    getUniversalisUrl() {
        return this.universalis_url;
    }

    toJSON() {
        return JSON.stringify(this, null, 4);
    }

    toString() {
        return `Name: ${this.getName()}\n` +
            `ItemId: ${this.getItemId()}\n` +
            `Category: ${this.getCategory()}\n` +
            `CategoryId: ${this.getCategoryId()}\n` +
            `AveragePriceNq: ${this.getAveragePriceNq()}\n` +
            `AveragePriceHq: ${this.getAveragePriceHq()}\n` +
            `MedianPriceNq: ${this.getMedianPriceNq()}\n` +
            `MedianPriceHq: ${this.getMedianPriceHq()}\n` +
            `RegularSaleVelocity: ${this.getRegularSaleVelocity()}\n` +
            `NqSaleVelocity: ${this.getNqSaleVelocity()}\n` +
            `HqSaleVelocity: ${this.getHqSaleVelocity()}\n` +
            `GarlandToolsUrl: ${this.getGarlandToolsUrl()}\n` +
            `UniversalisUrl: ${this.getUniversalisUrl()}\n`;
    }
}
export default Item;
