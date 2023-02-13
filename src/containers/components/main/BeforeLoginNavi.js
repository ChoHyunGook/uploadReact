import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import NaviNormalService from "../services/naviNomalService";
import BeforeLoginService from "../services/BeforeLoginService";



export default function BeforeLoginNavi(){

    return(
        <>
            <div style={{paddingBottom:80}}>
            <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <div style={{ display:"flex"}}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        height:'80px',
                                        paddingLeft:20
                                    }}
                                >
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             marginTop: 15,
                                             display:'flex',
                                             alignItems: "center",
                                             width:"250px",

                                         }}/>
                                </Typography>
                            </div>
                        <div style={{paddingLeft:750, display:"flex"}}>
                            <NaviNormalService />
                            <BeforeLoginService />
                        </div>
                    </Toolbar>
            </AppBar>
            </div>
        </>
    )
}