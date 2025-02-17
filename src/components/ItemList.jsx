import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem";
import PropTypes from "prop-types";

const ItemList = ({ title, items, itemsArray = [], path, idPath }) => {
    
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const finalItems = isHome ? items : Infinity 


    return (
        <div className="item-list">
            {/* Cabeçalho */}
            <section className="item-list__header">
                <h2 className="item-list__title">{title} populares</h2>
                {isHome ? (<Link className="item-list__link" to={path}>
                    Mostrar mais
                </Link>): (<></>)}

            </section>

            {/* Lista de Itens */}
            <div className="item-list__container">
                {itemsArray.slice(0, finalItems).map((currObj) => (
                    <SingleItem idPath={idPath} {...currObj} key={currObj.id || `${title}-${Math.random()}`} />
                ))}
            </div>
        </div>
    );
};

ItemList.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
    itemsArray: PropTypes.arrayOf(PropTypes.object),
    path: PropTypes.string.isRequired,
    idPath: PropTypes.string.isRequired,
};

export default ItemList;
