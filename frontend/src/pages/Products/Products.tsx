import Filter from "../../components/Filter/Filter.tsx";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import Layout from "../Layout/Layout.tsx";

export default function Products() {
  const handleFilterChange = (productID: number) => {
    console.log(`Producto seleccionado ID: ${productID}`);
    // Aquí iría la lógica de reserva (modal, navegación, etc.)
  };

  // const filteredProductos =
  //   activeFilter === "Todos"
  //     ? productosForSection
  //     : productosForSection.filter(
  //         (producto) => producto.type === activeFilter
  //       );
  return (
    <Layout>
      <Filter
        title="Nuestros Productos"
        filters={[
          "Todos",
          "Champus",
          "Acondicionadores",
          "Tratamientos",
          "Styling",
        ]}
        defaultFilter="Todos"
        onFilterChange={handleFilterChange}
      />

      <ProductCard title="hola" description="adios" price={20} />
      {/* <Grid>
        
      </Grid> */}
    </Layout>
  );
}
