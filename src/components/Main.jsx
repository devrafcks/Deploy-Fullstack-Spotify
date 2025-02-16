import ItemList from "./ItemList";

const Main = () => {
    return (
        <main className="main">
            <ItemList title="Artistas" items={5} />
            <ItemList title="Musicas" items={18} />
        </main>
    );
};

export default Main;
