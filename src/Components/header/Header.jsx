import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButton";


const StyledHeader = styled(AppBar)({
  background: "#2874f0",
  height: 55,
});

const Component = styled(Box)({
  marginLeft: "12%",
  lineHeight: 0,
});

const SubHeading = styled(Typography)({
  fontSize: "10px",
  fontStyle: "italic",
});

const PlusImage = styled('img')({
  width: 12,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWWrapper = styled(Box)({
  margin: "0 5% 0 auto",
});

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#ffE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWWrapper>
          <CustomButtons />
        </CustomButtonWWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
