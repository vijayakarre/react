import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css'
function Products() {
    let [products, setproducts] = useState([
        {
            id:1,
            name: "APPLE iPhone 14 (Midnight, 128 GB)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
            price: 69999,
            specifications: [
                "128 GB ROM",
                "15.49 cm (6.1 inch) Super Retina XDR Display",
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip, 6 Core Processor Processor"
            ],
            averagerating: 4.2
        },
        {
            id:2,
            name: "POCO X5 Pro 5G (Astral Black, 256 GB)  (8 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/x/j/-original-imagmkjfhzjhfhhe.jpeg?q=70",
            price: 21999,
            specifications: [
                "8 GB RAM | 256 GB ROM",
                "16.94 cm (6.67 inch) Full HD+ Display",
                "108MP + 8MP + 2MP | 16MP Front Camera",
                "5000 mAh Battery",
                "Qualcomm Snapdragon 778G Processor"
            ],
            averagerating: 4.3

        },
        {
            id:3,
            name: "POCO X5 Pro 5G (Yellow, 256 GB)  (8 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/s/8/-original-imagmkjf9wqjurgf.jpeg?q=70",
            price: 21999,
            specifications: [
                "8 GB RAM | 256 GB ROM",
                "16.94 cm (6.67 inch) Full HD+ Display",
                "108MP + 8MP + 2MP | 16MP Front Camera",
                "5000 mAh Battery",
                "Qualcomm Snapdragon 778G Processor"
            ],
            averagerating: 4.3
        },
        {
            id:4,
            name: "SAMSUNG Galaxy S21 FE 5G (Graphite, 128 GB)  (8 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/kzrbiq80/mobile/h/x/n/galaxy-s21-fe-5g-sm-g990ezaiinu-samsung-original-imagbpfzbrnueypq.jpeg?q=70",
            price: 39999,
            specifications: [
                "8 GB RAM | 128 GB ROM",
                "16.26 cm (6.4 inch) Full HD+ Display",
                "12MP + 12MP + 8MP (OIS) | 32MP Front Camera",
                "4500 mAh Lithium-ion Battery"
            ],
            averagerating: 4.3
        },
        {
            id:5,
            name: "vivo T2 5G (Nitro Blaze, 128 GB)  (8 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70",
            price: 20999,
            specifications: [
                "8 GB RAM | 128 GB ROM",
                "16.21 cm (6.38 inch) Full HD+ Display",
                "64 MP (OIS) + 2MP | 16MP Front Camera",
                "4500 mAh Battery",
                "Snapdragon 695 Processor",

            ],
            averagerating: 4.4
        },
        {
            id:6,
            name: "realme 11 Pro+ 5G (Oasis Green, 256 GB)  (12 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/x/v/-original-imagqadf2awzzmyf.jpeg?q=70",
            price: 29989,
            specifications: [
                "12 GB RAM | 256 GB ROM",
                "17.02 cm (6.7 inch) Full HD+ Display",
                "200MP (OIS) + 8MP + 2MP | 32MP Front Camera",
                "5000 mAh Battery",
                "Dimensity 7050 Processor"
            ],
            averagerating: 4.3
        },
        {
            id:7,
            name: "REDMI Note 12 5G (Matte Black, 256 GB)  (8 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/9/8/-original-imagpgsg2hvvtcef.jpeg?q=70",
            price: 20999,
            specifications: [
                "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB",
                "16.94 cm (6.67 inch) Full HD+ AMOLED Display",
                "48MP + 8MP + 2MP | 13MP Front Camera",
                "5000 mAh Battery",
                "Qualcomm Snapdragon 4 Gen 1 Processor",

            ],
            averagerating: 4.1
        },
        {
            id:8,
            name: "REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)  (6 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70",
            price: 23999,
            specifications: [
                "6 GB RAM | 128 GB ROM",
                "16.94 cm (6.67 inch) Full HD+ AMOLED Display",
                "50MP (OIS) + 8MP + 2MP | 16MP Front Camera",
                "5000 mAh Lithium Polymer Battery",
                "Mediatek Dimensity 1080 Processor"
            ],
            averagerating: 4.2
        },
        {
            id:9,
            name: "OnePlus 11R 5G (Sonic Black, 256 GB)  (16 GB RAM)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/x/a/11r-5g-5011102525-oneplus-original-imagn3afeqfr6acy.jpeg?q=70",
            price: 44585,
            specifications: [
                "16 GB RAM | 256 GB ROM",
                "17.02 cm (6.7 inch) Display",
                "50MP Rear Camera",
                "5000 mAh Battery",

            ],
            averagerating: 4.5
        },
        {
            id:10,
            name: "APPLE iPhone 12 Pro Max (Graphite, 128 GB)",
            imgsrc: "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/5/z/w/apple-iphone-12-pro-max-dummyapplefsn-original-imafwgcy7ugz3y2z.jpeg?q=70",
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
            averagerating: 4.5
        }
    ])

    const sortproducts = (mode) => {
        if (mode === 'lowToHigh') {
            const sortedData = products.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                } else if (a.price > b.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setproducts([...sortedData]);
        } else {
            const sortedData = products.sort((a, b) => {
                if (a.price < b.price) {
                    return 1;
                } else if (a.price > b.price) {
                    return -1;
                } else {
                    return 0;
                }
            });
            setproducts([...sortedData]);
        }
    }

    return (

        <div>
            <div className="container-fluid  p-0">

                <nav className="navbar navbar-expand-sm bg-dark navbar-light  my-4 sticky-top ">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav div">
                        
                            <a className="nav-item1 nav-link" style={{ cursor: 'pointer' }} onClick={() => sortproducts('lowToHigh')} ><strong>Price--Low to High</strong></a>
                            <a className="nav-item1 nav-link " style={{ cursor: 'pointer' }} onClick={() => sortproducts('highToLow')} ><strong>Price--High to Low</strong></a>
                        </div>
                    </div>
                </nav>
            <div>
                <div className="container">
                        {products.map((product) => (
                            <div className="row my-4 py-3 border bottom" key={product.name}>
                                <div className="col-sm-3">
                                    <img src={product.imgsrc} width="200px" height="260px" />
                                </div>
                                <div className="col-sm-7">
                                    <h4 style={{cursor:"pointer"}}><Link to={`/Product-detail/${product.id}?name=${product.name}?price=${product.price}`}>{product.name}</Link></h4>
                                    <ul className="ms-4">
                                        {product.specifications.map(specification => (
                                            <li key={specification}>{specification}</li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="col-sm-2">
                                    <h4>{product.price}</h4>
                                    <button className="btn btn-warning">Add to Cart</button>


                                </div>

                            </div>
                        ))}

                    </div>
                </div>


            </div>
        </div>

    )
}
export default Products;