export default function ItemComponent(args) {
    var item = args['item']
    var placement = args['placement']

    return (
        <>
            <div className="card column is-one-third mb-4">
                <div className="card-content">
                    <p className="title is-size-4">
                        {(placement === 1 && ("1st place")) || (placement === 2 && ("2nd place")) || (placement === 3 && ("3rd place")) || (placement + "th place")}
                    </p>
                    <p className="subtitle is-size-6">
                        <p>{item.getName()} (#{item.getItemId()})</p>
                        Category: {item.getCategory()} (#{item.getCategoryId()})
                    </p>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div>Average Price (NQ): {item.getAveragePriceNq().toFixed(2)}</div>
                        <div>Average Price (HQ): {item.getAveragePriceHq().toFixed(2)}</div>
                        <div>Median Price (NQ): {item.getMedianPriceNq().toFixed(2)}</div>
                        <div>Median Price (HQ): {item.getMedianPriceHq().toFixed(2)}</div>
                        <div>Sale Velocity (HQ & NQ): {item.getRegularSaleVelocity().toFixed(2)}</div>
                        <div>Sale Velocity (NQ): {item.getNqSaleVelocity().toFixed(2)}</div>
                        <div>Sale Velocity (NQ): {item.getHqSaleVelocity().toFixed(2)}</div>
                    </div>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                        <span>
                            <a href={item.getGarlandToolsUrl()} className='is-size-6' target="_blank" rel="noreferrer">GarlandTools</a>
                        </span>
                    </p>
                    <p className="card-footer-item">
                        <span>
                            <a href={item.getUniversalisUrl()} className='is-size-6' target="_blank" rel="noreferrer">Universalis</a>
                        </span>
                    </p>
                </footer>
            </div>
        </>
    );
}
