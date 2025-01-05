import './Home.css';
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurants } from '../State/Restaurant/Action';
import { findCart } from '../State/Cart/Action';
import {useEffect} from "react";

export const Home = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant } = useSelector(store => store);

    useEffect(() => {
        dispatch(getAllRestaurants(jwt));
        dispatch(findCart(jwt));
    }, [jwt]);

    return (
        <section className='pb-10'>
            <div className='banner relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-6xl font-bold py-5'>My Food App</p>
                    <p className='text-gray-300 text-xl lg:text-4xl'>Taste the convenience!</p>
                </div>
                <div className='cover absolute top-0 left-0 right-0' />
                <div className='fade-out' />
            </div>
            <div className='p-10 lg:py-10 lg:px-20'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
                <MultiItemCarousel />
            </div>
            <div className='px-5 lg:px-20 pt-10'>
                <h1 className='text-2xl font-semibold text-gray-400 py-8'>
                    Order From Our Handpicked Favourites
                </h1>
                <div className='flex flex-wrap items-center justify-around gap-5'>
                    {restaurant.restaurants?.map((item) => (
                        <RestaurantCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
