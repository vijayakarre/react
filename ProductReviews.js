import React,{useState} from "react";
import {useLocation}from "react-router-dom";
function ProductReviews(){
    const [products, setproducts] = useState([
        {
            id: 1,
        reviews:[
        {
            rating:4,
            name:"Great product",
            desc:"Camara quality superb.....Quick charging Display (ok).."
        },
        {
            rating:5,
            name:"Terrific purchase",
            desc:"Working good"
        },
        {
            rating:5,
            name:"Mind-blowing purchase",
            desc:"Amazing camera 💗💗💗💗"
        },
        {
            rating:4,
            name:"Wonderful",
            desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
        },
        {
            rating:4,
            name:"Perfect product!",
            desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
        }

            
    ]
             
            

        },
        {
            id: 2,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
           
            


        },
        {
            id: 3,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
           

        },
        {
            id: 4,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
            

            

        },
        {
            id: 5,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
            
            

        },
        {
            id: 6,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
            

        },
        {
            id: 7,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
            

        },
        {
            id: 8,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
           

        },
        {
            id: 9,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
            

        },
        {
            id: 10,
            reviews:[
                {
                    rating:4,
                    name:"Great product",
                    desc:"Camara quality superb.....Quick charging Display (ok).."
                },
                {
                    rating:5,
                    name:"Terrific purchase",
                    desc:"Working good"
                },
                {
                    rating:5,
                    name:"Mind-blowing purchase",
                    desc:"Amazing camera 💗💗💗💗"
                },
                {
                    rating:4,
                    name:"Wonderful",
                    desc:"Very nice design...very good camera...but 4g phone and not FHD display..for the price its very good..."
                },
                {
                    rating:4,
                    name:"Perfect product!",
                    desc:"Very beautiful phone and model🫶🫶🫶I like this mobile"
                }
        
                    
            ]
            
        }
    ]);
    const location = useLocation();
    
    const Productid=location.pathname.split('/')[2];
    const selectedproduct = products.find(product => product.id == Productid);


    return (
        <div className="container">
           {selectedproduct && selectedproduct.reviews.map(rating => (
                <div className="row border px-2 py-3 my-2" >
                    <div className="col-sm-9">
                        <h6>{rating.rating}</h6>
                        <h6>{rating.name}</h6>
                        <p>{rating.desc}</p>
                    </div>
                </div>
                ))}
                </div>
    
    )

}
export default ProductReviews;