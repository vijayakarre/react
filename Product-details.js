import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function ProductDetails() {
    const [products, setproducts] = useState([
        {
            id: 1,
            name: "APPLE iPhone 14 (Midnight, 128 GB)",
            price: 69999,
            specifications: [
                "128 GB ROM",
                "15.49 cm (6.1 inch) Super Retina XDR Display",
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip, 6 Core Processor Processor"
            ],
            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 2,
            name: "POCO X5 Pro 5G (Astral Black, 256 GB)  (8 GB RAM)",
            price: 21999,
            specifications: [
                "8 GB RAM | 256 GB ROM",
                "16.94 cm (6.67 inch) Full HD+ Display",
                "108MP + 8MP + 2MP | 16MP Front Camera",
                "5000 mAh Battery",
                "Qualcomm Snapdragon 778G Processor"
            ],
            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],


        },
        {
            id: 3,
            name: "POCO X5 Pro 5G (Yellow, 256 GB)  (8 GB RAM)",
            price: 21999,
            specifications: [
                "8 GB RAM | 256 GB ROM",
                "16.94 cm (6.67 inch) Full HD+ Display",
                "108MP + 8MP + 2MP | 16MP Front Camera",
                "5000 mAh Battery",
                "Qualcomm Snapdragon 778G Processor"
            ],
            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 4,
            name: "SAMSUNG Galaxy S21 FE 5G (Graphite, 128 GB)  (8 GB RAM)",
            price: 39999,
            specifications: [
                "8 GB RAM | 128 GB ROM",
                "16.26 cm (6.4 inch) Full HD+ Display",
                "12MP + 12MP + 8MP (OIS) | 32MP Front Camera",
                "4500 mAh Lithium-ion Battery"
            ],

            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 5,
            name: "vivo T2 5G (Nitro Blaze, 128 GB)  (8 GB RAM)",
            price: 20999,
            specifications: [
                "8 GB RAM | 128 GB ROM",
                "16.21 cm (6.38 inch) Full HD+ Display",
                "64 MP (OIS) + 2MP | 16MP Front Camera",
                "4500 mAh Battery",
                "Snapdragon 695 Processor",

            ],
            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 6,
            name: "realme 11 Pro+ 5G (Oasis Green, 256 GB)  (12 GB RAM)",
            price: 29989,
            specifications: [
                "12 GB RAM | 256 GB ROM",
                "17.02 cm (6.7 inch) Full HD+ Display",
                "200MP (OIS) + 8MP + 2MP | 32MP Front Camera",
                "5000 mAh Battery",
                "Dimensity 7050 Processor"
            ],
            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 7,
            name: "REDMI Note 12 5G (Matte Black, 256 GB)  (8 GB RAM)",
            price: 20999,
            specifications: [
                "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB",
                "16.94 cm (6.67 inch) Full HD+ AMOLED Display",
                "48MP + 8MP + 2MP | 13MP Front Camera",
                "5000 mAh Battery",
                "Qualcomm Snapdragon 4 Gen 1 Processor",

            ],
            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 8,
            name: "REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)  (6 GB RAM)",
            price: 23999,
            specifications: [
                "6 GB RAM | 128 GB ROM",
                "16.94 cm (6.67 inch) Full HD+ AMOLED Display",
                "50MP (OIS) + 8MP + 2MP | 16MP Front Camera",
                "5000 mAh Lithium Polymer Battery",
                "Mediatek Dimensity 1080 Processor"
            ],

            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 9,
            name: "OnePlus 11R 5G (Sonic Black, 256 GB)  (16 GB RAM)",
            price: 44585,
            specifications: [
                "16 GB RAM | 256 GB ROM",
                "17.02 cm (6.7 inch) Display",
                "50MP Rear Camera",
                "5000 mAh Battery",

            ],
            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        },
        {
            id: 10,
            name: "APPLE iPhone 12 Pro Max (Graphite, 128 GB)",
            price: 95599,
            specifications: [
                "128 GB ROM",
                "17.02 cm (6.7 inch) Super Retina XDR Display",
                "12MP + 12MP + 12MP | 12MP Front Camera",
                "A14 Bionic Chip with Next Generation Neural Engine Processor",
                "Ceramic Shield | Industry-leading IP68 Water Resistance",
                "All Screen OLED Display",
                "LiDAR Scanner for Improved AR Experiences, Night Mode Portraits",

            ],

            imgUrl: [

                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70",
                "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70"

            ],

        }
    ]);
    const [searchParams, setsearchParams] = useSearchParams();
    console.log(searchParams.get('name'), searchParams.get('price'));

    const params = useParams();
    console.log(params)
    const { Productid } = params;
    console.log(params)
    const selectedproduct = products.find(product => product.id == Productid);
    console.log(selectedproduct)
    const [selectedImgUrl, setSelectedImgUrl] = useState(selectedproduct.imgUrl[0]);
    const selectedImg = (img) => {
        setSelectedImgUrl(img)

    }

    return (
        <div className="container">
            <div className='row'>
                <div className="col-sm-2">
                    {selectedproduct.imgUrl.map((img => (
                        <div className="border-text-center my-2" style={{ width: '100px' }}>
                            <img src={img} width='70px' className="my-2" style={{ cursor: 'pointer' }} onClick={() => selectedImg(img)} />
                        </div>
                    )))}
                </div>
                <div className="col-sm-10">
                    <div className='row my-5'>
                        <div className='col-sm-4'>
                            <img src={selectedImgUrl} width="250px" />

                        </div>
                        <div className='col-sm-8'>
                            <h4 style={{ cursor: "pointer" }}>{selectedproduct.name}</h4>
                            <ul className="ms-4">
                                {selectedproduct.specifications.map(specification => (
                                    <li key={specification}>{specification}</li>
                                ))}
                            </ul>
                            <div className='col-sm-2 ms-4'>
                                <h3 >{selectedproduct.price}</h3>
                                <button className="btn btn-warning" onClick={() => {
                                    alert("Successfully Added To Cart");
                                }}>Add to Cart</button>
                            </div>

                            <nav className="navbar navbar-expand-lg navbar-light my-2 py-2">

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item1">
                                            <Link className="nav-link" to={`/Product-detail/${Productid}/Description`}><h5>Description</h5></Link>
                                        </li>
                                        <li className="nav-item1">
                                            <Link className="nav-link" to={`/Product-detail/${Productid}/Specifications`}><h5>Specifications</h5></Link>
                                        </li>
                                        <li className="nav-item1">
                                            <Link className="nav-link" to={`/Product-detail/${Productid}/Reviews`} ><h5>Reviews</h5></Link>
                                        </li>


                                    </ul>
                                </div>
                            </nav>




                            <div>

                                <Outlet />
                            </div>

                        </div>


                    </div>
                </div>



            </div>
        </div>
    )
}
export default ProductDetails;

