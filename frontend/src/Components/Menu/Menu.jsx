import MenuItem from './MenuItem';
import data from "./MenuData.js";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Menu () {
    /*
    const menuitems = [
        {
            _id: "001",
            name: "Burger",
            price: 12.00,
            source: "https://dbijapkm3o6fj.cloudfront.net/resources/9715,1004,1,6,4,0,600,450/-4604-/20161116210200/the-ultimate-guide-to-sydney-s-best-burgers.jpeg"
        },
        {
            _id: "002",
            name: "Spaghetti",
            price: 15.00,
            source: "https://www.thespruceeats.com/thmb/oxzAQ4AIJu1fq8LA_lt1-ejoyNs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/meat-sauce-spaghetti-2500-56dc8ae53df78c5ba053531b.jpg"
        },
        {
            _id: "003",
            name: "Ice Cream",
            price: 5.00,
            source: "https://www.thespruceeats.com/thmb/KyWpKNdzCXtBXiA96QlJaAU05c0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg"
        }
    ];
    */

    const [backendmenuitems, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/menu");
            setProducts(data);
        };
        fetchData();
    }, []);

    if (backendmenuitems.length === 0) return (
        <ul className='list-group'>
            <h1>Nothing loaded from backend - make sure the backend server is live and the correct port number it is hosted on matches the port number in frontend/package.json proxy</h1>
        </ul>
    )
    else return (
        /*
		<ul className='list-group'>
			{menuitems.map((item) => (
				<MenuItem id={item._id} title={item.name} price={item.price} imagesource={item.source} />
			))}
		</ul>
        <ul className='list-group'>
        {data.menuitems.map((item) => (
            <MenuItem id={item._id} title={item.name} price={item.price} imagesource={item.source} />
        ))}
        </ul>
        <ul className='list-group'>
        {data.menuitems.map((item) => (
            <MenuItem id={item._id} title={item.name} price={item.price} imagesource={item.source} />
        ))}
        </ul>
        */
        <ul className='list-group'>
        {backendmenuitems.MenuItems.map((item) => (
            <MenuItem id={item._id} title={item.name} price={item.price} imagesource={item.source} />
        ))}
        </ul>
        
        
    ) ;
    
}

export default Menu;