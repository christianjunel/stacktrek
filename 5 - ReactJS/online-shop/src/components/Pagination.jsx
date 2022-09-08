import "./styles/Pagination.css";

const Pagination = () => {
    return (
        <div className="pagination">
            <a href="/1">&laquo;</a>
            <a href="/2">1</a>
            <a className="active" href="/">2</a>
            <a href="/3">3</a>
            <a href="/4">4</a>
            <a href="/5">5</a>
            <a href="/6">6</a>
            <a href="/7">&raquo;</a>
        </div>
    );
}

export default Pagination;