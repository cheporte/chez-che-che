import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import RestaurantButton from "@components/RestaurantButton";
import DishCard from "@components/Menu/DishCard";
import { starters, mains, desserts, drinks } from "@data/menuData";

import '@styles/pages/category.sass';

const MenuCategory: React.FC = () => {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [sortedMenu, setSortedMenu] = useState<any[]>(menuItems);

    const category = useLocation().pathname.split("/").pop() || "all";

    const sortMenuAscended = (menu: any[]) => {
        const sorted = [...menu].sort((a, b) => a.price - b.price);
        setSortedMenu(sorted);
    }

    const sortMenuDescended = (menu: any[]) => {
        const sorted = [...menu].sort((a, b) => b.price - a.price);
        setSortedMenu(sorted);
    }

    useEffect(() => {
        switch (category) {
            case "starters":
                setMenuItems(starters);
                break;
            case "mains":
                setMenuItems(mains);
                break;
            case "desserts":
                setMenuItems(desserts);
                break;
            case "drinks":
                setMenuItems(drinks);
                break;
            default:
                setMenuItems([]);
                break;
        }
    }, [category]);

    useEffect(() => {
        setSortedMenu(menuItems);
    }, [menuItems]);

    return (
        <>
            <Link to='/chez-che-che/menu'>
                <RestaurantButton className='back-btn' variant='ghost' size='md'>
                    Back to Menu
                </RestaurantButton>
            </Link>
            <div className='menu-category'>        
                <h1 className='menu-category__header'>
                    Let's take a look at {category}
                </h1>
                <div className='menu-category__menu-actions'>
                    <RestaurantButton onclick={() => sortMenuAscended(sortedMenu)} variant='primary' size='lg'>
                        Sort By Price Asc.
                    </RestaurantButton>
                    <RestaurantButton onclick={() => sortMenuDescended(sortedMenu)} variant='primary' size='lg'>
                        Sort By Price Desc.
                    </RestaurantButton>
                </div>
                <div className='menu-category__dishes'>
                    {sortedMenu.map((item, index) => (
                        <DishCard
                            key={index}
                            imageUrl={item.imageUrl}
                            name={item.name}
                            price={item.price}
                            ingredients={item.ingredients}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenuCategory;