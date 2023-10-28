import React,{useState} from "react";
import {useLocation}from "react-router-dom";
function ProductSpecifications(){
    const [products, setproducts] = useState([
        {
            id: 1,
            name: "APPLE iPhone 14 (Midnight, 128 GB)",
            
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }
             
            

        },
        {
            id: 2,
            name: "POCO X5 Pro 5G (Astral Black, 256 GB)  (8 GB RAM)",
            
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }
            


        },
        {
            id: 3,
            name: "POCO X5 Pro 5G (Yellow, 256 GB)  (8 GB RAM)",
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }

        },
        {
            id: 4,
            name: "SAMSUNG Galaxy S21 FE 5G (Graphite, 128 GB)  (8 GB RAM)",
           
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }

            

        },
        {
            id: 5,
            name: "vivo T2 5G (Nitro Blaze, 128 GB)  (8 GB RAM)",
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }
            

        },
        {
            id: 6,
            name: "realme 11 Pro+ 5G (Oasis Green, 256 GB)  (12 GB RAM)",
           
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }

        },
        {
            id: 7,
            name: "REDMI Note 12 5G (Matte Black, 256 GB)  (8 GB RAM)",
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }

        },
        {
            id: 8,
            name: "REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)  (6 GB RAM)",
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }

        },
        {
            id: 9,
            name: "OnePlus 11R 5G (Sonic Black, 256 GB)  (16 GB RAM)",
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }

        },
        {
            id: 10,
            name: "APPLE iPhone 12 Pro Max (Graphite, 128 GB)",
            dspecifications: {
                inTheBox: 'Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Case', 
                ModelNumber:'RMX3762',
                ModelName:'C53',
                Color:'Champion Gold',
                BrowseType:'Smartphones',
                SIMType:"Dual Sim",
                HybridSimSlot:'No',
                Touchscreen:'Yes',
                OTGCompatible:'Yes',
                QuickCharging:'Yes'
            }
        }
    ]);
    const location = useLocation();
    
    const Productid=location.pathname.split('/')[2];
    const selectedproduct = products.find(product => product.id == Productid);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <p>inTheBox</p>
                    <p>ModelNumber</p>
                    <p>ModelName</p>
                    <p>Color</p>
                    <p>BrowseType</p>
                    <p>SIMTypee</p>
                    <p>HybridSimSlot</p>
                    <p>Touchscreen</p>
                    <p>OTGCompatible</p>
                    <p>QuickCharging</p>
                


                </div>
                <div className="col-sm-10">
                    <p>{selectedproduct.dspecifications.inTheBox}</p>
                    <p>{selectedproduct.dspecifications.ModelNumber}</p>
                    <p>{selectedproduct.dspecifications.ModelName}</p>
                    <p>{selectedproduct.dspecifications.Color}</p>
                    <p>{selectedproduct.dspecifications.BrowseType}</p>
                    <p>{selectedproduct.dspecifications.SIMType}</p>
                    <p>{selectedproduct.dspecifications.HybridSimSlot}</p>
                    <p>{selectedproduct.dspecifications.Touchscreen}</p>
                    <p>{selectedproduct.dspecifications.OTGCompatible}</p>
                    <p>{selectedproduct.dspecifications.QuickCharging}</p>
                </div>

            </div>
        </div>
    )
}
export default ProductSpecifications;