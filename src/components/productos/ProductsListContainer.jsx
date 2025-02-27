import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductListItem from "./ProductListItem";
import Loading from "../Loading";

const ProductosListContainer = ({ productos, loading, categories }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: { xs: "100%", md: "60%" } }}>
        {loading ? (
          <Loading />
        ) : (
          <Grid
            container
            spacing={2}
            columns={2}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            {productos?.map((item) => (
              <Grid key={item.id} xs={1}>
                <ProductListItem
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  thumbnail={item.thumbnail}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default ProductosListContainer;
