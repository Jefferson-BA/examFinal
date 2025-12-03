import { useEffect } from "react";
import CardList from "../components/CardList";
import { serviceapi } from "../services/serviceapi";
import { useAppStore } from "../store/store";

export default function Home() {
  const { products, setProducts } = useAppStore();

  useEffect(() => {
    serviceapi("maybelline").then((data) => {
      setProducts(data.slice(0, 6)); 
    });
  }, []);

  return (
    <>
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Bienvenido a Makeup Store</h1>
        <p className="lead">Explora productos increíbles</p>
        <img
          src="https://i.imgur.com/UdZQZ3L.jpeg"
          className="img-fluid rounded shadow mt-3"
          style={{ maxHeight: "300px" }}
        />
      </div>

      <CardList items={products} />
    </>
  );
}
