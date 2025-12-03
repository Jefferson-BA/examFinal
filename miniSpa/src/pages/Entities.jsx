import { useEffect } from "react";
import { useAppStore } from "../store/store";
import CardList from "../components/CardList";
import { serviceapi } from "../services/serviceapi";

export default function Entities() {
  const { products, setProducts, page, setPage, limit } = useAppStore();

  useEffect(() => {
    serviceapi().then((data) => setProducts(data));
  }, []);

  const start = (page - 1) * limit;
  const end = start + limit;
  const current = products.slice(start, end);

  return (
    <>
      <h2 className="mb-4">Listado de Productos</h2>

      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-secondary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span>Página {page}</span>

        <button
          className="btn btn-secondary"
          disabled={end >= products.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      <CardList items={current} />
    </>
  );
}
