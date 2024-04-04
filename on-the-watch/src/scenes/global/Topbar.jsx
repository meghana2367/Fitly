import {Box, IconButton, useTheme} from "@mui/material"
import {useContext} from "react";
import {ColorModeContext, tokens} from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search"

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return( 
    <Box display = "flex" justifyContent="space-between" p={2}>
        {/*Search Bar*/}
        <Box
            display="flex" 
            backgroundColor = {colors.primary[400]} 
            borderRadius="3px"
            sx={{m:"15px"}}>
                <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
                <IconButton type = "button" sx={{p: 1}}>
                    <SearchIcon />
                </IconButton>
        </Box>
        <IconButton sx={{display:"flex"}}></IconButton>
    </Box>
    );
}
export default Topbar;