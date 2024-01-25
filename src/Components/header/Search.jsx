import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)({
  background: "#fff",
  width: "38%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
});

const InputSearchBase = styled(InputBase)({
  paddingLeft: "20px",
  width: "100%",
});

const SearchIconWrapper = styled(Box)({
  color: "blue",
  padding: "5px",  // corrected the syntax error here
  display: "flex",
});

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
