import { useState } from "react";
import Filter from "../../components/Filter/Filter.tsx";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import Layout from "../Layout/Layout.tsx";
import { products, categories, getStockMessage } from "../../data/products";
import Section from "../../components/Section/Section.tsx";
import "./Products.css";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [cart, setCart] = useState<number[]>([]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    console.log(`Producto ${productId} añadido al carrito`);
  };

  const filteredProducts =
    activeFilter === "Todos"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <Layout>
      <Section centered>
        <div className="products__header">
          <Filter
            title="Nuestros Productos"
            filters={categories}
            defaultFilter="Todos"
            onFilterChange={handleFilterChange}
          />

          <button
            className="products__cart-button"
            aria-label="Carrito de compras"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cart.length > 0 && (
              <span className="products__cart-badge">{cart.length}</span>
            )}
          </button>
        </div>

        <div className="products__list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.image}
              statement={getStockMessage(product.stock)}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
