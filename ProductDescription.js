import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function ProductDescription() {
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

            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm,the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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
            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]


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
            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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

            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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
            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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
            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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
            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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

            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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
            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

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

            description: [{
                title: '120 Hz Boundless Display0',
                description: "With a bezel as narrow as 1 mm, the Realme 10 Pro 5G enables you to enjoy a screen that has no borders. Additionally, the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a large screen size with a significantly compact frame, while the 120 Hz refresh rate offers you an excellent user experience. Additionally, substantially enhanced screen durability is ensured by using double-reinforced glass.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/59d21b290db1481d964b1f579e06793f_184cd1cb96f_image.jpeg?q=90"
            },
            {
                title: "108 MP ProLight Camera",
                description: "The Realme 10 Pro 5G can boost your creativity since it has a 108 MP ProLight Camera. This smartphone offers you outstanding photography and filmmaking skills thanks to innovative technology like HyperShot Imaging Architecture, which enables parallel processing of photos, and Super Group Portrait mode, which makes each face in a portrait seem distinct.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ac1eeb0df3714668b2928ac4c7952329_184cd1cd486_image.jpeg?q=90"

            },
            {
                title: "Snapdragon 695 5G Chipset",
                description: 'The Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is made using an immaculate 6 nm production technique, making this phone power-efficient. Additionally, it gives you the ability to use two 5G SIMs and improved frame rates for improved gaming.',
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/896f24503d97424b8c3548868acda799_184cd1cf270_image.jpeg?q=90"

            },
            {
                title: "5000 mAh Massive Battery",
                description: "The Realme 10 Pro 5G is equipped with a large 5000 mAh battery that supports all-day gaming and binge-watching sessions, so you can bid adieu to battery concerns. Additionally, the battery provides up to 34 hours of talk time, 20 hours of streaming video, and an astounding 48 hours of music playback.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/81e07b2d344145ff8227f6151bc90ce5_184cd1d0f51_image.jpeg?q=90"

            },
            {
                title: "Hyperspace Design",
                description: "The Realme 10 Pro 5G, which has been inspired by a hyperspace tunnel, presents a fresh perspective in design so that you can flaunt your style wherever you go.",
                img: "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/1200d8d41e36447a913fee24065eb3d2_184cd1d2c5e_image.jpeg?q=90"

            }

            ]

        }
    ]);
    const location = useLocation();

    const Productid = location.pathname.split('/')[2];
    const selectedproduct = products.find(product => product.id == Productid);
    return (
        <div className="container-fluid">
            { selectedproduct.description.map(description => (
                <div className="row border p-3 rounded-4 m-3">
                    <div className="col-sm-9">
                        <p>{description.title}</p>
                        <p>{description.description}</p>
                    </div>
                    <div className="col-sm-3">
                        <img src={description.img} style={{width:'130px'}}/>

                    </div>



                </div>



            ))}

        </div>
    )
}
export default ProductDescription;