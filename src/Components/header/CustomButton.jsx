import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Wrapper = styled(Box)({
    display: "flex",
    margin: "0 3% 0 auto",
    '& > button, & > p, & > div': {
      marginRight: 40,
      fontSize: 16,
      alignSelf: 'center', // Use alignSelf instead of align-items
    },
  });
  

const Container = styled(Box)({
  display: "flex", // Corrected the syntax
});

const LoginButton = styled(Button)({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  padding: "5px 40px",
  borderRadius: "2px",
  boxShadow: "none",
  fontWeight: 600,
  height: 32,
});

const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;
