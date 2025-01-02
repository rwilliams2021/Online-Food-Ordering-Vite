import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from "@mui/material/colors";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { findCart } from "../State/Cart/Action";
import {useEffect} from "react";

/**
 * Renders a Navbar component with a heading "Navbar".
 *
 * @return {JSX.Element} The Navbar component.
 */
export const Navbar = () => {
    const { auth, cart } = useSelector(store => store)
    const jwt = localStorage.getItem("jwt")
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findCart(jwt))
    }, [jwt])

    const handleAvatarClick = () => {
        if (auth.user?.role === "CUSTOMER") {
            navigate("/my-profile")
        } else if (auth.user?.role === "RESTAURANT_OWNER") {
            navigate("/admin/restaurant")
        } else {
            throw new Error("Invalid user role")
        }
    }
    return (
        <Box sx={{ zIndex: 100 }} className='px-4 md:px-0 sticky w-full top-0 z-50 py-4 md:py-10 bg-pink lg:px-20 flex items-center justify-between relative'>
            <div className="container cursor-pointer flex items-center justify-between">
                <div onClick={() => navigate("/")} style={{ cursor: "pointer" }} className='logo-text font-semibold text-gray-300 text-base lg:text-2xl list-none'>
                    <p className="pt-3 text-white font-borel text-lg font-bold">Restaurant Delivery</p>
                </div>
                <div className='md:hidden flex items-center'>
                    <div onClick={
                        () => {
                            const mobMenu = document.querySelector(".mob-menu__container")
                            mobMenu.classList.toggle("hidden")
                        }
                    } className='mobMenu__icon leading-none'><span class="material-symbols-outlined">menu</span>
                    </div>
                </div>
                <div className='mob-menu__container md:hidden absolute hidden top-full left-0 items-start px-4 lg:space-x-10 flex flex-col py-4 bg-[#333333] w-full'>
                    <div>
                        <IconButton>
                            <SearchIcon sx={{ fontSize: "1.5rem" }} />
                        </IconButton>
                    </div>
                    <div>
                        {
                            auth.user ?
                                (
                                    <Avatar style={{ cursor: "pointer" }} onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user?.fullname[0].toUpperCase()}</Avatar>
                                )
                                :
                                (
                                    <IconButton onClick={() => navigate("/account/login")}>
                                        <Person />
                                    </IconButton>
                                )
                        }
                    </div>
                    <div>
                        <IconButton onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
                            <Badge color='primary' badgeContent={cart.cart?.items.length}>
                                <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='items-center space-x-2 lg:space-x-10 hidden md:flex'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div>
                    {
                        auth.user ?
                            (
                                <Avatar style={{ cursor: "pointer" }} onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user?.fullname[0].toUpperCase()}</Avatar>
                            )
                            :
                            (
                                <IconButton onClick={() => navigate("/account/login")}>
                                    <Person />
                                </IconButton>
                            )
                    }
                </div>
                <div>
                    <IconButton onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
                        <Badge color='primary' badgeContent={cart.cart?.items.length}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    );
};
