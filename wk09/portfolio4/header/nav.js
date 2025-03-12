const{ AppBar, Toolbar, Typography, Button, Menu, MenuItem } = MaterialUI;
const { useState } = React;




//Navbar Component

function Navbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    //Open nd close handlers for the dropdown menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="nav1" sx={{ flexGrow:1 }}>
                    Nathan Deanon
                </Typography>
                    <Button color="inherit" href="http://nad.csevg.com/wk09/portfolio4/index.html">Home</Button>

                    <Button color="inherit" onClick={handleMenuOpen}>
                    Projects &#9660;
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        

                        <MenuItem onClick={handleMenuClose} component="a" href="http://nad.csevg.com/wk09/portfolio4/projects.html"> All Projects </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="http://nad.csevg.com/wk09/portfolio4/GameDex.html"> GameDex </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="http://nad.csevg.com/wk09/portfolio4/ImpossibleHangman.html"> Impossible Hangman </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="http://nad.csevg.com/wk09/portfolio4/ObjectDectection.html"> Object Dectection </MenuItem>

                    </Menu>

                    <Button color="inherit" href="http://nad.csevg.com/wk09/portfolio4/about.html">About Me</Button>
            </Toolbar>
        </AppBar>
    );
}

window.Navbar = Navbar; //Expose Navbar globally
