import InputAdornment from "@material-ui/core/InputAdornment";
import { Input } from "@material-ui/core";
import { BiSearchAlt } from "react-icons/bi";

const HomeSearch = ({onChange}) => {
    return (
        <Input style={{width:"615px",marginLeft:"35px"}}
        placeholder='Search by title or author'
        startAdornment={
          <InputAdornment position="start">
            <BiSearchAlt />
          </InputAdornment>
        }
        onChange={onChange}
      />
    );   
};

export default HomeSearch;