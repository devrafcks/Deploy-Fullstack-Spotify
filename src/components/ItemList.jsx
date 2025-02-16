import SingleItem from "./SingleItem";
import PropTypes from 'prop-types';

const ItemList = ({ title, items }) => {
    return (
        <div className="item-list">
            <section className="item-list__header">
            <h2 className="item-list__title">{title} populares</h2>
            <a className="item-list__link" href="/">
                Mostrar mais
            </a>
            </section>

            <div className="item-list__container">
                {Array(items)
                    .fill(null)
                    .map((_, index) => (
                    <SingleItem key={`${title}-${index}`} />
                ))}
            </div>

        </div>
    );
};

ItemList.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
};

export default ItemList;



