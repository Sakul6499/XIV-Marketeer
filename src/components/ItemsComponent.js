// Components
import ItemComponent from "../components/ItemComponent";

export default function ItemsComponent(args) {
    var items = args['items']

    var count = 0;
    if (items === null) {
        return (
            <>
                <div className="columns is-multiline is-mobile">
                    <div className="card column">
                        <div className="card-content">
                            <p className="title">
                                Loading ...
                            </p>
                            <p className="subtitle">
                                This may take a while based on your browsers performance!
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="columns is-multiline is-mobile">
                    {items.map((item) => <ItemComponent item={item} placement={++count} />)}
                </div>
            </>
        );
    }
}
