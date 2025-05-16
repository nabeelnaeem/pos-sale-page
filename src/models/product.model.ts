export interface IProduct {
    id: string,
    displayId: number,
    name: string,
    barcode: string,
    landingCost: number,
    sellingRate: number,
    stockQuantity: number,
    discount: number
}

export class Product {
    static productList: IProduct[] = [
        {
            id: "7be6fa0e-8c94-4221-a357-8971d77a6b26",
            displayId: 1001,
            name: "Coca-Cola 500ml",
            barcode: "8907953674801",
            landingCost: 900,
            sellingRate: 1000,
            stockQuantity: 209,
            discount: 100
        },
        {
            id: "23186c98-7b60-410d-9810-05eaf135a511",
            displayId: 1002,
            name: "Pepsi 1L",
            barcode: "8903384246318",
            landingCost: 700, sellingRate: 1100, stockQuantity: 209, discount: 100
        },
        {
            id: "c11b6bf3-b494-479c-8183-2fa4470508f9",
            displayId: 1003,
            name: "Sprite 500ml",
            barcode: "8909014982477",
            "landingCost": 700, "sellingRate": 1600, "stockQuantity": 313, "discount": 200
        },
        {
            id: "3a69b4ac-0d86-4752-bf50-664c5d845d34",
            displayId: 1004,
            name: "Thumbs Up 1L",
            barcode: "8906718593211",
            "landingCost": 400, "sellingRate": 800, "stockQuantity": 66, "discount": 200
        },
        {
            id: "0f5fc5ba-1eb8-4264-ae5f-a551829f94c5",
            displayId: 1005,
            name: "Fanta 500ml",
            barcode: "8903641466827",
            "landingCost": 300, "sellingRate": 1100, "stockQuantity": 235, "discount": 300
        },
        {
            id: "bd1e7265-6627-49d4-a390-499b76512183",
            displayId: 1006,
            name: "Parle-G Biscuits 80g",
            barcode: "8906135275720",
            "landingCost": 200, "sellingRate": 800, "stockQuantity": 78, "discount": 400
        },
        {
            id: "2e2214e9-f5b6-4e05-8814-2c07f63ea505",
            displayId: 1007,
            name: "Oreo Cookies 120g",
            barcode: "8901733239998",
            "landingCost": 600, "sellingRate": 1500, "stockQuantity": 5, "discount": 500
        },
        {
            id: "f813bf60-90c4-42cb-8f99-879403986359",
            displayId: 1008,
            name: "Marie Gold 100g",
            barcode: "8907513780572",
            "landingCost": 900, "sellingRate": 1700, "stockQuantity": 343, "discount": 700
        },
        {
            id: "0a3ff854-1a32-4cc8-9ba6-9f325d77dfc6",
            displayId: 1009,
            name: "Hide & Seek 150g",
            barcode: "8906916270493",
            "landingCost": 700, "sellingRate": 1400, "stockQuantity": 167, "discount": 500
        },
        {
            id: "d521fa86-9eab-48d3-aefe-4f2b7a7e7b2e",
            displayId: 1010,
            name: "Bourbon 120g",
            barcode: "8902574715945",
            "landingCost": 700, "sellingRate": 1400, "stockQuantity": 167, "discount": 500
        },
        {
            id: "4b87bd88-df78-46f1-a734-a09c4f3c013a",
            displayId: 1011,
            name: "Colgate Toothpaste 100g",
            barcode: "8902556648692",
            "landingCost": 500, "sellingRate": 1000, "stockQuantity": 337, "discount": 100
        },
        {
            id: "66ba6942-55b0-46ec-9848-0c56390d8a1e",
            displayId: 1012,
            name: "Pepsodent Toothpaste 150g",
            barcode: "8902939839745",
            "landingCost": 300, "sellingRate": 1000, "stockQuantity": 121, "discount": 200
        },
        {
            id: "44d1ca62-b169-457e-965c-e5022c0e5ebf",
            displayId: 1013,
            name: "Sensodyne 100g",
            barcode: "8907082045758",
            "landingCost": 300, "sellingRate": 900, "stockQuantity": 418, "discount": 300
        },
        {
            id: "50fa06b7-2339-4668-911a-ce462e46f011",
            displayId: 1014,
            name: "Close-Up 120g",
            barcode: "8908918450930",
            "landingCost": 300, "sellingRate": 900, "stockQuantity": 497, "discount": 300
        },
        {
            id: "40a00e3e-56de-41b9-b2f8-ba866dfe48c5",
            displayId: 1015,
            name: "Vicco Vajradanti 100g",
            barcode: "8904181736998",
            "landingCost": 600, "sellingRate": 1100, "stockQuantity": 362, "discount": 200
        },
        {
            id: "5fff6554-01a8-4607-9e04-af81ddba85a5",
            displayId: 1016,
            name: "Dettol Handwash 200ml",
            barcode: "8902834845458",
            "landingCost": 500, "sellingRate": 1400, "stockQuantity": 390, "discount": 500
        },
        {
            id: "61b4493f-8981-4338-96df-8523b2b20a7d",
            displayId: 1017,
            name: "Lifebuoy Handwash 215ml",
            barcode: "8905635155050",
            "landingCost": 400, "sellingRate": 1000, "stockQuantity": 248, "discount": 200
        },
        {
            id: "cdbac819-2295-49b6-9aaf-1e9fca35b22a",
            displayId: 1018,
            name: "Savlon Handwash 200ml",
            barcode: "8902302013209",
            "landingCost": 200, "sellingRate": 900, "stockQuantity": 282, "discount": 300
        }, {
            id: "458aa197-333b-4634-9784-48bfe9005a5a",
            displayId: 1019,
            name: "Palmolive Handwash 250ml",
            barcode: "8901986993001",
            "landingCost": 100, "sellingRate": 900, "stockQuantity": 328, "discount": 400
        }, {
            id: "8effcf3c-595a-4627-911b-8f5d9ea099f0",
            displayId: 1020,
            name: "Godrej Protekt 250ml",
            barcode: "8908425808038",
            "landingCost": 600, "sellingRate": 1300, "stockQuantity": 430, "discount": 300
        }, {
            id: "e9118c88-5f26-42a9-bc3e-37c920e5c810",
            displayId: 1021,
            name: "Samsung Galaxy A15",
            barcode: "8906145756853",
            "landingCost": 200, "sellingRate": 1000, "stockQuantity": 326, "discount": 200
        }, {
            id: "5bd3532b-02c6-470d-9e1e-0a3d5192976b",
            displayId: 1022,
            name: "Redmi Note 13",
            barcode: "8906382221346",
            "landingCost": 600, "sellingRate": 1600, "stockQuantity": 99, "discount": 700
        },
        {
            displayId: 1023,
            id: "f502f190-a583-4f62-965d-e61e9376d042",
            name: "Realme Narzo 60",
            barcode: "8908059129462",
            "landingCost": 400, "sellingRate": 1100, "stockQuantity": 33, "discount": 300
        }, {
            id: "a96b4785-6498-4b13-9869-34539ceaccfb",
            displayId: 1024,
            name: "iPhone 13",
            barcode: "8901035737247",
            "landingCost": 500, "sellingRate": 1300, "stockQuantity": 285, "discount": 300
        }, {
            id: "5a64b06a-8f67-40c9-9d3a-46652e5c0c5a",
            displayId: 1025,
            name: "OnePlus Nord CE 3",
            barcode: "8902045709753",
            "landingCost": 700, "sellingRate": 1700, "stockQuantity": 340, "discount": 500
        }, {
            id: "860162a3-0b58-4759-a0ad-9f899139d17f",
            displayId: 1026,
            name: "Maggi Noodles 70g",
            barcode: "8904450092010",
            "landingCost": 100.5, "sellingRate": 700.5, "stockQuantity": 342, "discount": 300.5
        },
        {
            id: "3766323d-89c7-4c49-82ec-c999fc055343",
            displayId: 1027,
            name: "Top Ramen 70g",
            barcode: "8902170564511",
            "landingCost": 400.5, "sellingRate": 900.5, "stockQuantity": 187, "discount": 200.5
        }, {
            id: "f901b7b6-d75e-49bc-9dad-8d4a57262ffd",
            displayId: 1028,
            name: "Yippee Noodles 85g",
            barcode: "8903770953016",
            "landingCost": 500.5, "sellingRate": 1200.5, "stockQuantity": 91, "discount": 400.5
        }, {
            id: "8f58421b-c672-4abd-99ce-25f4de6a9922",
            displayId: 1029,
            name: "Knorr Soup 50g",
            barcode: "8904130589652",
            "landingCost": 200.5, "sellingRate": 800.5, "stockQuantity": 66, "discount": 300.5
        }, {
            id: "da791f68-ada2-4235-8d7d-db92b845e237",
            displayId: 1030,
            name: "Ching's Schezwan Noodles 60g",
            barcode: "8902517404936",
            "landingCost": 300.5, "sellingRate": 1000.5, "stockQuantity": 401, "discount": 200.5
        },
        {
            id: "0b7a0aba-b477-445b-971e-3e60af153d63",
            displayId: 1031,
            name: "Amul Milk 500ml",
            barcode: "8908733982364",
            "landingCost": 600.5, "sellingRate": 1300.5, "stockQuantity": 114, "discount": 500.5
        }, {
            id: "38ca0df7-591f-458c-aaf2-e2a0a4151b1a",
            displayId: 1032,
            name: "Mother Dairy Milk 1L",
            barcode: "8903177672742",
            "landingCost": 700.5, "sellingRate": 1400.5, "stockQuantity": 298, "discount": 400.5
        },
        {
            id: "eaae39bd-db8d-46b2-ba59-0bb309122568",
            displayId: 1033,
            name: "Nandini Milk 500ml",
            barcode: "8908148833614",
            "landingCost": 400.5, "sellingRate": 1100.5, "stockQuantity": 75, "discount": 200.5
        }, {
            id: "a4bf0472-ffe3-4a3a-b61a-247b54613c98",
            displayId: 1034,
            name: "Aavin Milk 1L",
            barcode: "8901668316126",
            "landingCost": 300.5, "sellingRate": 900.5, "stockQuantity": 239, "discount": 300.5
        }, {
            id: "e618655c-9c9d-4045-ac88-3c1b0e079c5a",
            displayId: 1035,
            name: "Heritage Milk 1L",
            barcode: "8901812195178",
            "landingCost": 500.5, "sellingRate": 1500.5, "stockQuantity": 481, "discount": 600.5
        },
        {
            id: "5f524b1f-5a71-4763-8aca-d4ffa6f08709",
            displayId: 1036,
            name: "Fortune Rice Bran Oil 1L",
            barcode: "8906150484097",
            "landingCost": 200.5, "sellingRate": 1000.5, "stockQuantity": 136, "discount": 400.5
        }, {
            id: "95e8d168-8f28-4295-b63f-4e1e18aafc4a",
            displayId: 1037,
            name: "Sundrop Sunflower Oil 1L",
            barcode: "8901419174350",
            "landingCost": 600.5, "sellingRate": 1600.5, "stockQuantity": 45, "discount": 500.5
        },
        {
            id: "72a8ec34-d333-4fdc-b2a9-014d49daaac3",
            displayId: 1038,
            name: "Dhara Mustard Oil 1L",
            barcode: "8904423347718",
            "landingCost": 100.5, "sellingRate": 900.5, "stockQuantity": 323, "discount": 300.5
        }, {
            id: "c75d3374-a00b-4dc4-8a58-667c57465e30",
            displayId: 1039,
            name: "Gemini Oil 1L",
            barcode: "8909097727703",
            "landingCost": 700.5, "sellingRate": 1700.5, "stockQuantity": 258, "discount": 600.5
        }, {
            id: "55a38898-069d-4333-bb80-6ffe6a2e65a0",
            displayId: 1040,
            name: "Nature Fresh Oil 1L",
            barcode: "8907248298893",
            "landingCost": 300.5, "sellingRate": 1200.5, "stockQuantity": 152, "discount": 400.5
        },
        {
            id: "10df17ef-99e3-4b17-8031-0103071553ff",
            displayId: 1041,
            name: "Tata Salt 1kg",
            barcode: "8907168373543",
            "landingCost": 400.5, "sellingRate": 1300.5, "stockQuantity": 407, "discount": 300.5
        }, {
            id: "214192dc-d999-480f-afd6-baa8fae8e64a",
            displayId: 1042,
            name: "Aashirvaad Atta 5kg",
            barcode: "8903960963668",
            "landingCost": 500.5, "sellingRate": 1400.5, "stockQuantity": 368, "discount": 500.5
        }, {
            id: "47da9f2f-a07b-4396-85da-113ea4e179fe",
            displayId: 1043,
            name: "India Gate Basmati Rice 1kg",
            barcode: "8908594173682",
            "landingCost": 100.5, "sellingRate": 800.5, "stockQuantity": 182, "discount": 200.5
        },
        {
            id: "c70405a7-409b-4b70-8111-1c62208e4ed1",
            displayId: 1044,
            name: "Kohinoor Rice 1kg",
            barcode: "8908542655792",
            "landingCost": 200.5, "sellingRate": 1100.5, "stockQuantity": 311, "discount": 300.5
        }, {
            id: "11a7c1f8-f266-4b13-9f3f-4b20a8bd1bf9",
            displayId: 1045,
            name: "Patanjali Dalia 500g",
            barcode: "8905511338680",
            "landingCost": 600.5, "sellingRate": 1500.5, "stockQuantity": 98, "discount": 400.5
        }, {
            id: "d3aee31a-345f-44ff-8a94-f57def756961",
            displayId: 1046,
            name: "Lux Soap 100g",
            barcode: "8901939985951",
            "landingCost": 300, "sellingRate": 1000, "stockQuantity": 462, "discount": 400
        },
        {
            id: "567d9fda-830d-4001-b6c7-88cced1ae1e1",
            displayId: 1047,
            name: "Liril Soap 125g",
            barcode: "8907583487499",
            "landingCost": 400, "sellingRate": 800, "stockQuantity": 273, "discount": 100
        }, {
            id: "b40f9b16-0b33-46e7-999e-d6e857e5c64b",
            displayId: 1048,
            name: "Dove Soap 100g",
            barcode: "8902157481508",
            "landingCost": 500, "sellingRate": 1200, "stockQuantity": 441, "discount": 300
        }, {
            id: "67c3b912-6606-4eab-8d05-cf75c232014b",
            displayId: 1049,
            name: "Pears Soap 125g",
            barcode: "8907768518665",
            "landingCost": 700, "sellingRate": 1500, "stockQuantity": 388, "discount": 500
        },
        {
            id: "5252e28f-06c3-4913-b77e-3f6895c325dd",
            displayId: 1050,
            name: "Mysore Sandal Soap 100g",
            barcode: "8901008797633",
            "landingCost": 300, "sellingRate": 1100, "stockQuantity": 187, "discount": 300
        }
    ]
}