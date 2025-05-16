export interface ICustomer {
    id: string,
    displayId: number,
    name: string,
    contactNumber: string,
    email: string,
    address: string,
}

export class Customer implements ICustomer {
    id!: string;
    displayId!: number;
    name!: string;
    contactNumber!: string;
    email!: string;
    address!: string;

    static customerList: ICustomer[] = [
        {
            id: "17e8e906-cafa-47f0-c759-08dd857b2ec3",
            displayId: 53,
            name: "Counter Sale",
            contactNumber: "111111111",
            email: "counter@sale.com",
            address: "not available"
        },
        {
            id: "efe59c84-46a7-4163-dd75-08dd7ff1e7b0",
            displayId: 51,
            name: "Muhammad Nabeel Naeem",
            contactNumber: "555-545-8899",
            email: "nabeel@mail.com",
            address: "Pass"
        },
        {
            id: "fd16f4be-1c16-4118-9fd5-ea8f1eeb2980",
            displayId: 49,
            name: "Hazel Morgan",
            contactNumber: "555-545-8899",
            email: "hazel.morgan@example.com",
            address: "456 Fir Rd, Cincinnati, OH"
        },
        {
            id: "3b093654-1851-4987-9e45-93deaf34f4df",
            displayId: 48,
            name: "Isaac Cook",
            contactNumber: "555-434-7788",
            email: "isaac.cook@example.com",
            address: "345 Maple Ct, Grand Rapids, MI"
        },
        {
            id: "2aaf7b15-e625-4f3d-9eed-5786db9dc566",
            displayId: 47,
            name: "Nora Reed",
            contactNumber: "555-323-6677",
            email: "nora.reed@example.com",
            address: "234 Elm Ave, Columbia, SC"
        },
        {
            id: "bd0b5359-3b1b-4fe1-a626-e4b539d15ae4",
            displayId: 46,
            name: "Levi Rogers",
            contactNumber: "555-212-5566",
            email: "levi.rogers@example.com",
            address: "123 Walnut St, Jackson, MS"
        },
        {
            id: "5022a2f2-ad72-40e2-8fa9-e0c09e84642d",
            displayId: 45,
            name: "Riley Morris",
            contactNumber: "555-101-4455",
            email: "riley.morris@example.com",
            address: "901 Cedar Dr, Madison, WI"
        },
        {
            id: "083b2776-3aa3-4659-8c29-b54a2b2d3470",
            displayId: 44,
            name: "Jayden Sanchez",
            contactNumber: "555-989-3344",
            email: "jayden.sanchez@example.com",
            address: "890 Poplar Ln, Boise, ID"
        },
        {
            id: "90ca25fa-3f20-4969-bb9d-b89fecf30c57",
            displayId: 43,
            name: "Penelope Stewart",
            contactNumber: "555-878-2233",
            email: "penelope.stewart@example.com",
            address: "789 Beech Blvd, Tampa, FL"
        },
        {
            id: "ae92805e-9a03-4f11-921e-bd1fe7000fe3",
            displayId: 42,
            name: "Carter Collins",
            contactNumber: "555-767-1122",
            email: "carter.collins@example.com",
            address: "678 Spruce St, Sacramento, CA"
        },
        {
            id: "b741a56b-4ff4-4e09-be36-2b27532e3153",
            displayId: 41,
            name: "Layla Edwards",
            contactNumber: "555-656-0011",
            email: "layla.edwards@example.com",
            address: "567 Ash Ave, Baltimore, MD"
        },
        {
            id: "0776bf14-ebb7-4089-8e91-b6085facff20",
            displayId: 40,
            name: "Gabriel Evans",
            contactNumber: "555-545-9900",
            email: "gabriel.evans@example.com",
            address: "456 Hazel Dr, Pittsburgh, PA"
        },
        {
            id: "ff7c3d1c-71cc-48d8-919b-7e4a66e40537",
            displayId: 39,
            name: "Hannah Parker",
            contactNumber: "555-434-8899",
            email: "hannah.parker@example.com",
            address: "345 Cottonwood Ct, Cleveland, OH"
        },
        {
            id: "ca09c62b-cade-42a9-85ba-ec152797c772",
            displayId: 38,
            name: "Wyatt Campbell",
            contactNumber: "555-323-7788",
            email: "wyatt.campbell@example.com",
            address: "234 Ginkgo Rd, Minneapolis, MN"
        },
        {
            id: "4c0d68e6-1ccd-4678-b603-d4f53a6afa26",
            displayId: 37,
            name: "Zoey Phillips",
            contactNumber: "555-212-6677",
            email: "zoey.phillips@example.com",
            address: "123 Apple St, St. Louis, MO"
        },
        {
            id: "a2ed1f2c-5c26-4461-80e3-ea30b1f8ef9e",
            displayId: 36,
            name: "Owen Turner",
            contactNumber: "555-101-5566",
            email: "owen.turner@example.com",
            address: "909 Dogwood St, Tampa, FL"
        },
        {
            id: "c61a98bc-874d-4e5c-94f6-5396157e4425",
            displayId: 35,
            name: "Lily Roberts",
            contactNumber: "555-990-4455",
            email: "lily.roberts@example.com",
            address: "808 Redwood Blvd, Wichita, KS"
        },
        {
            id: "0a4d6473-abd9-415b-88ec-e35deb5e71c9",
            displayId: 34,
            name: "Samuel Perez",
            contactNumber: "555-889-3344",
            email: "samuel.perez@example.com",
            address: "707 Ashwood Ln, Rochester, NY"
        },
        {
            id: "bfa77578-7380-42a8-a6e7-efbc5f548767",
            displayId: 33,
            name: "Victoria Mitchell",
            contactNumber: "555-778-2233",
            email: "victoria.mitchell@example.com",
            address: "606 Cypress Rd, Charleston, SC"
        },
        {
            id: "a9d7966b-c274-4558-883a-d246c09a20ae",
            displayId: 32,
            name: "Joseph Carter",
            contactNumber: "555-667-1122",
            email: "joseph.carter@example.com",
            address: "505 Holly Dr, Anchorage, AK"
        },
        {
            id: "042cdcbb-01d7-4d67-b8d9-6b8f1eb9af62",
            displayId: 31,
            name: "Chloe Nelson",
            contactNumber: "555-443-8899",
            email: "chloe.nelson@example.com",
            address: "404 Olive St, Birmingham, AL"
        },
        {
            id: "a3f130e3-1f80-4ca9-9db8-6be325adcc6d",
            displayId: 30,
            name: "Matthew Baker",
            contactNumber: "555-112-7766",
            email: "matthew.baker@example.com",
            address: "303 Hawthorn Ct, Richmond, VA"
        },
        {
            id: "37fea3e4-77cb-4ee0-b931-24593f734826",
            displayId: 29,
            name: "Grace Adams",
            contactNumber: "555-998-3345",
            email: "grace.adams@example.com",
            address: "202 Juniper Blvd, Fresno, CA"
        },
        {
            id: "51dc0e51-66f3-4d9e-8fca-eb3a55868ede",
            displayId: 28,
            name: "David Green",
            contactNumber: "555-887-2212",
            email: "david.green@example.com",
            address: "101 Acacia Ave, Little Rock, AR"
        },
        {
            id: "6da62862-d7b1-42a6-9edb-3b57a3a98ef6",
            displayId: 27,
            name: "Aria Scott",
            contactNumber: "555-776-0099",
            email: "aria.scott@example.com",
            address: "901 Mapleleaf Rd, Baton Rouge, LA"
        },
        {
            id: "889dc38f-c511-4f08-b7bb-825dcfa856ab",
            displayId: 26,
            name: "Sebastian Hill",
            contactNumber: "555-665-9988",
            email: "sebastian.hill@example.com",
            address: "890 Ironwood St, Albuquerque, NM"
        },
        {
            id: "57c4f1cd-0a4b-4d1a-8cf5-cc17b0d39daa",
            displayId: 25,
            name: "Scarlett Lopez",
            contactNumber: "555-554-8877",
            email: "scarlett.lopez@example.com",
            address: "789 Ash Ct, Des Moines, IA"
        },
        {
            id: "ccb15249-3113-49d2-88cc-23b2171f7e31",
            displayId: 24,
            name: "Jackson Wright",
            contactNumber: "555-334-7766",
            email: "jackson.wright@example.com",
            address: "678 Palm Dr, Omaha, NE"
        },
        {
            id: "4932d0e9-4037-45d1-9f26-068e25374b20",
            displayId: 23,
            name: "Abigail King",
            contactNumber: "555-112-5566",
            email: "abigail.king@example.com",
            address: "567 Chestnut Ln, Raleigh, NC"
        },
        {
            id: "013e5c0d-f961-4ae9-b27e-e6290b500ae0",
            displayId: 22,
            name: "Logan Hernandez",
            contactNumber: "555-667-3344",
            email: "logan.hernandez@example.com",
            address: "456 Spruce Ave, Las Vegas, NV"
        },
        {
            id: "a15e4887-0d8c-4867-adc1-67ae6ce56600",
            displayId: 21,
            name: "Ella Young",
            contactNumber: "555-443-2211",
            email: "ella.young@example.com",
            address: "345 Cottonwood Blvd, Boise, ID"
        },
        {
            id: "1c39faf2-8a4f-46de-ad63-020d64be9014",
            displayId: 20,
            name: "Daniel Allen",
            contactNumber: "555-112-3344",
            email: "daniel.allen@example.com",
            address: "234 Hickory Rd, Tulsa, OK"
        },
        {
            id: "02c2d4c6-7e1e-4b1e-8a69-a5c5b7846e72",
            displayId: 19,
            name: "Harper Hall",
            contactNumber: "555-889-3322",
            email: "harper.hall@example.com",
            address: "123 Beech St, Salt Lake City, UT"
        },
        {
            id: "4ecec57b-fbd4-4dd9-920f-e5b31796d95a",
            displayId: 18,
            name: "Michael Walker",
            contactNumber: "555-231-4545",
            email: "michael.walker@example.com",
            address: "999 Alder Ct, Kansas City, MO"
        },
        {
            id: "70f9f367-6a2b-4975-8d63-0f1f24d6e38a",
            displayId: 17,
            name: "Charlotte Robinson",
            contactNumber: "555-321-7001",
            email: "charlotte.robinson@example.com",
            address: "888 Willow Dr, Indianapolis, IN"
        },
        {
            id: "bfbf7abc-8889-4068-9e12-241d39c31d69",
            displayId: 16,
            name: "Alexander Lewis",
            contactNumber: "555-102-9087",
            email: "alex.lewis@example.com",
            address: "777 Magnolia Ln, Atlanta, GA"
        },
        {
            id: "79edcb92-1ffc-41b7-a1c0-cfbdfa0a9b9a",
            displayId: 15,
            name: "Evelyn Clark",
            contactNumber: "555-909-1122",
            email: "evelyn.clark@example.com",
            address: "666 Dogwood Rd, Columbus, OH"
        },
        {
            id: "503d9f16-67aa-4fd7-a39c-f8b4fea3faef",
            displayId: 14,
            name: "Henry Harris",
            contactNumber: "555-654-3456",
            email: "henry.harris@example.com",
            address: "555 Sequoia St, Miami, FL"
        },
        {
            id: "9e596f98-4e0f-4ed4-8345-782ca4a326a9",
            displayId: 13,
            name: "Amelia Lee",
            contactNumber: "555-321-9876",
            email: "amelia.lee@example.com",
            address: "444 Redwood Blvd, Nashville, TN"
        },
        {
            id: "aeae329d-efdb-44f2-bc38-e499d293255d",
            displayId: 12,
            name: "Lucas Thomas",
            contactNumber: "555-998-7654",
            email: "lucas.thomas@example.com",
            address: "333 Sycamore Ave, Boston, MA"
        },
        {
            id: "1e921441-a717-4f6e-82ed-03806e225f59",
            displayId: 11,
            name: "Mia Anderson",
            contactNumber: "555-432-1231",
            email: "mia.anderson@example.com",
            address: "222 Poplar St, Seattle, WA"
        },
        {
            id: "287aa1f7-8504-463f-9705-256ba472e7ee",
            displayId: 10,
            name: "Benjamin Taylor",
            contactNumber: "555-776-8899",
            email: "benjamin.taylor@example.com",
            address: "111 Fir Ct, Charlotte, NC"
        },
        {
            id: "e23f37a7-46f3-46a5-a0a2-979854cadf43",
            displayId: 9,
            name: "Isabella Miller",
            contactNumber: "555-109-2234",
            email: "isabella.miller@example.com",
            address: "910 Aspen Way, Tampa, FL"
        },
        {
            id: "8a0b8143-31c4-44ba-bbec-bfe374605ac7",
            displayId: 8,
            name: "James Garcia",
            contactNumber: "555-812-1123",
            email: "james.garcia@example.com",
            address: "678 Cherry Blvd, Phoenix, AZ"
        },
        {
            id: "9ab60990-9a74-4c06-b062-d9cd9fcc6570",
            displayId: 7,
            name: "Sophia Wilson",
            contactNumber: "555-404-0001",
            email: "sophia.wilson@example.com",
            address: "345 Walnut Ave, Portland, OR"
        },
        {
            id: "9044aad6-8aa8-4e04-89be-05e9af10a958",
            displayId: 6,
            name: "William Brown",
            contactNumber: "555-777-9988",
            email: "william.brown@example.com",
            address: "213 Birch St, Austin, TX"
        },
        {
            id: "fbd211ee-ec0a-499a-a159-5af57cfd4a70",
            displayId: 5,
            name: "Ava Davis",
            contactNumber: "555-601-3333",
            email: "ava.davis@example.com",
            address: "321 Cedar Ln, Denver, CO"
        },
        {
            id: "1c89b08a-2e6a-4199-ab24-4a55d32a56ae",
            displayId: 4,
            name: "Noah Smith",
            contactNumber: "555-842-1122",
            email: "noah.smith@example.com",
            address: "102 Maple Rd, Albany, NY"
        },
        {
            id: "087f8875-42df-4eee-b129-93749ade64c9",
            displayId: 3,
            name: "Emma Thompson",
            contactNumber: "555-995-7812",
            email: "emma.thompson@example.com",
            address: "789 Pine Dr, Madison, WI"
        },
        {
            id: "36ac7c65-5e56-4019-bad4-9bf4e43d5677",
            displayId: 2,
            name: "Liam Johnson",
            contactNumber: "555-220-2345",
            email: "liam.johnson@example.com",
            address: "456 Oak Ave, Riverside, CA"
        },
        {
            id: "8bb752b9-4e01-4a71-8885-2486b20ba847",
            displayId: 1,
            name: "Olivia Martinez",
            contactNumber: "555-310-5671",
            email: "olivia.martinez@example.com",
            address: "123 Elm St, Springfield, IL"
        }
    ]

}

