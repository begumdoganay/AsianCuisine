// Asian Gastronomy - Comprehensive Menu Data

const menu = [
    // Japanese Dishes
    {
        id: 1,
        title: "Premium Sushi Selection",
        subtitle: "握り寿司",
        cuisine: "japanese",
        category: "mains",
        price: 48,
        image: "./assets/premium.avif",
        description: "A distinguished assortment of premium nigiri featuring seasonal fish selections, masterfully prepared by our expert sushi chef. Served with freshly grated wasabi and house-made soy sauce.",
        tags: ["Signature", "Ocean Fresh"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 2,
        title: "Sakura Tempura",
        subtitle: "桜天ぷら",
        cuisine: "japanese",
        category: "appetizers",
        price: 32,
        image: "./assets/open-fish-sushi-with-rice.jpg",
        description: "Seasonal vegetables and tiger prawns encased in a delicate, crisp batter. Served with warm tentsuyu dipping sauce and freshly grated daikon.",
        tags: ["Crisp", "Refined"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 3,
        title: "Matcha Ceremonial",
        subtitle: "抹茶セレモニアル",
        cuisine: "japanese",
        category: "desserts",
        price: 24,
        image: "./assets/matcha.webp",
        description: "A delicate composition of ceremonial-grade matcha cream, layered with light sponge and adorned with gold leaf. Served with sakura-infused syrup.",
        tags: ["Delicate", "Artisanal"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: true
        }
    },
    {
        id: 9,
        title: "Wagyu Ramen",
        subtitle: "和牛らーめん",
        cuisine: "japanese",
        category: "mains",
        price: 52,
        image: "./assets/ramen-with-meat.jpg",
        description: "A luxurious interpretation of classic ramen. Tender A5 Wagyu beef slices nestled atop rich, 48-hour pork bone broth, accompanied by hand-pulled noodles and a perfectly soft-boiled egg.",
        tags: ["Premium", "Slow-Cooked"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 36,
        title: "Omakase Deluxe",
        subtitle: "おまかせ特選",
        cuisine: "japanese",
        category: "mains",
        price: 128,
        image: "./assets/omakase-platter.jpg",
        description: "The pinnacle of culinary trust. A meticulously curated 12-course journey through Japan's finest seasonal ingredients. Each piece hand-selected by our master chef, featuring rare fish, premium A5 Wagyu, and exquisite preparations.",
        tags: ["Chef's Selection", "Ultimate Experience"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 37,
        title: "Winter Truffle Chawanmushi",
        subtitle: "冬トリュフ茶碗蒸し",
        cuisine: "japanese",
        category: "appetizers",
        price: 48,
        image: "./assets/truffle-chawanmushi.jpg",
        description: "A decadent reimagining of the classic steamed egg custard. Infused with black winter truffle from Périgord, topped with Oscietra caviar, and garnished with micro shiso. A luxurious prelude to your meal.",
        tags: ["Luxurious", "Seasonal"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: true
        }
    },
    {
        id: 18,
        title: "Yuzu Cheesecake",
        subtitle: "柚子チーズケーキ",
        cuisine: "japanese",
        category: "desserts",
        price: 22,
        image: "./assets/yuzu-cheesecake.jpg",
        description: "A delicate Japanese-inspired cheesecake infused with fragrant yuzu citrus, featuring a light, airy texture and a crisp graham cracker base. Garnished with candied yuzu peel and a light matcha dust.",
        tags: ["Citrus", "Elegant"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },

    // Chinese Dishes
    {
        id: 4,
        title: "Imperial Peking Duck",
        subtitle: "北京烤鸭",
        cuisine: "chinese",
        category: "mains",
        price: 88,
        image: "./assets/pekinduck.jpg",
        description: "A royal delicacy prepared following traditional Beijing methods. Our duck is carefully aged, roasted to perfection, and carved tableside. Served with handmade pancakes, spring onions, and our special hoisin sauce.",
        tags: ["Royal Heritage", "Ceremonial"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 5,
        title: "Dim Sum Collection",
        subtitle: "点心拼盘",
        cuisine: "chinese",
        category: "appetizers",
        price: 42,
        image: "./assets/traditional-asian-dumplings-with-herbs.jpg",    
        description: "An exquisite selection of handcrafted dim sum including crystal har gow, black truffle siu mai, and gold leaf-topped abalone dumplings. Served in traditional bamboo steamers.",
        tags: ["Handcrafted", "Heritage"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 11,
        title: "Mapo Tofu",
        subtitle: "麻婆豆腐",
        cuisine: "chinese",
        category: "mains",
        price: 35,
        image: "./assets/spicy-tofu.jpg",
        description: "A bold Sichuan classic featuring silken tofu cubes in a fiery sauce of ground Sichuan peppercorns, chili oil, and fermented broad bean paste. Topped with green onions and served with jasmine rice.",
        tags: ["Spicy", "Regional"],
        dietary: {
            vegetarianOption: true,
            spicy: true,
            glutenFree: false
        }
    },
    {
        id: 12,
        title: "Eight Treasure Rice Pudding",
        subtitle: "八宝饭",
        cuisine: "chinese",
        category: "desserts",
        price: 22,
        image: "./assets/rice-pudding.jpg",
        description: "A festive dessert symbolizing abundance. Glutinous rice studded with eight different candied fruits and nuts, steamed to perfection and drizzled with osmanthus honey.",
        tags: ["Traditional", "Sweet"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 21,
        title: "Golden Phoenix Dumplings",
        subtitle: "金凤饺子",
        cuisine: "chinese",
        category: "appetizers",
        price: 36,
        image: "./assets/golden-dumplings.jpg",
        description: "Delicate dumplings crafted with a luxurious filling of king crab, matsutake mushrooms, and 24-karat gold leaf. Served with a refined black vinegar and ginger reduction.",
        tags: ["Luxurious", "Rare"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 44,
        title: "Imperial Phoenix Dumplings",
        subtitle: "凤凰饺子",
        cuisine: "chinese",
        category: "appetizers",
        price: 52,
        image: "./assets/imperial-dumplings.jpg",
        description: "A luxurious dumpling experience featuring hand-crafted parcels filled with Alaskan king crab, black truffle, and Wagyu beef. Wrapped in a delicate skin tinted with natural vegetable extracts and served with a 20-year aged Shanxi vinegar.",
        tags: ["Rare", "Exquisite"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 45,
        title: "Thousand-Year Egg Reimagined",
        subtitle: "皮蛋新艺",
        cuisine: "chinese",
        category: "appetizers",
        price: 38,
        image: "./assets/modern-century-egg.jpg",
        description: "A contemporary interpretation of the classic preserved egg. Thousand-year egg mousse, served with pickled ginger foam, crispy taro chips, and a delicate century egg consommé. Garnished with micro cilantro and gold leaf.",
        tags: ["Innovative", "Traditional"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: true
        }
    },

    // Thai Dishes
    {
        id: 6,
        title: "Royal Thai Green Curry",
        subtitle: "แกงเขียวหวานรอยัล",
        cuisine: "thai",
        category: "mains",
        price: 36,
        image: "./assets/pork-green-curry-brown-bowl-with-spices-black-cement-background.jpg",
        description: "A refined interpretation of Thailand's beloved curry. Premium coconut milk infused with house-made green curry paste, kaffir lime leaves, and Thai basil. Served with your choice of free-range chicken or wild-caught prawns.",
        tags: ["Aromatic", "Traditional"],
        dietary: {
            vegetarianOption: true,
            spicy: true,
            glutenFree: true
        }
    },
    {
        id: 7,
        title: "Tom Yum Talay",
        subtitle: "ต้มยำทะเล",
        cuisine: "thai",
        category: "appetizers",
        price: 28,
        image: "./assets/boiled-fish-infusion-with-tomatoes-mushrooms-coriander-spring-onion-lemongrass-bowl.jpg",
        description: "A luxurious seafood interpretation of Thailand's iconic hot and sour soup. Featuring Andaman langoustines, scallops, and local seafood in an aromatic broth of lemongrass, galangal, and lime.",
        tags: ["Complex", "Vibrant"],
        dietary: {
            vegetarianOption: false,
            spicy: true,
            glutenFree: true
        }
    },
    {
        id: 23,
        title: "Mango Sticky Rice",
        subtitle: "ข้าวเหนียวมะม่วง",
        cuisine: "thai",
        category: "desserts",
        price: 18,
        image: "./assets/mango-sticky-rice.jpg",
        description: "A beloved Thai dessert featuring perfectly ripe champagne mangoes served alongside glutinous rice cooked in coconut cream, drizzled with salted coconut sauce and toasted sesame seeds.",
        tags: ["Sweet", "Tropical"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: true
        }
    },
    {
        id: 24,
        title: "Papaya Salad",
        subtitle: "ส้มตำ",
        cuisine: "thai",
        category: "appetizers",
        price: 22,
        image: "./assets/papaya-salad.jpg",
        description: "A vibrant Som Tam with shredded green papaya, cherry tomatoes, long beans, and roasted peanuts. Pounded to order with a traditional mortar and pestle, dressed in a fiery lime and chili dressing.",
        tags: ["Spicy", "Fresh"],
        dietary: {
            vegetarianOption: true,
            spicy: true,
            glutenFree: true
        }
    },
    {
        id: 25,
        title: "Royal Massaman Curry",
        subtitle: "มัสมั่นกับข้าว",
        cuisine: "thai",
        category: "mains",
        price: 42,
        image: "./assets/massaman-curry.jpg",
        description: "A rich, complex curry originating from Southern Thailand. Slowly braised Wagyu beef, tender potatoes, and roasted cashews in a luxurious sauce of coconut milk, cardamom, cinnamon, and star anise.",
        tags: ["Royal", "Complex"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: true
        }
    },
    {
        id: 26,
        title: "Coconut Pandan Pudding",
        subtitle: "ขนมหม้อแกง",
        cuisine: "thai",
        category: "desserts",
        price: 20,
        image: "./assets/pandan-coconut-pudding.jpg",
        description: "A silky coconut custard infused with fragrant pandan leaves, topped with caramelized palm sugar and toasted coconut flakes. Served chilled as a refreshing end to your culinary journey.",
        tags: ["Creamy", "Aromatic"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: true
        }
    },
    // Indonesian Dishes
    {
        id: 8,
        title: "Sumatran Beef Rendang",
        subtitle: "Rendang Sapi",
        cuisine: "indonesian",
        category: "mains",
        price: 42,
        image: "./assets/delicious-goulash-ready-dinner.jpg",
        description: "A heritage recipe from West Sumatra. Slow-braised Wagyu beef in a rich coconut milk reduction, infused with an intricate blend of galangal, turmeric, kaffir lime, and traditional Indonesian spices.",
        tags: ["Complex", "Rich"],
        dietary: {
            vegetarianOption: false,
            spicy: true,
            glutenFree: true
        }
    },
    {
        id: 15,
        title: "Gado Gado",
        subtitle: "Salad Sayur",
        cuisine: "indonesian",
        category: "appetizers",
        price: 26,
        image: "./assets/gado-gado.jpg",
        description: "A classic Indonesian vegetable salad featuring blanched and steamed vegetables, tofu, tempeh, and hard-boiled eggs. Dressed with a luxurious peanut sauce made from roasted Java peanuts and traditional spices.",
        tags: ["Vegetarian", "Healthy"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 16,
        title: "Pandan Cake",
        subtitle: "Kue Pandan",
        cuisine: "indonesian",
        category: "desserts",
        price: 20,
        image: "./assets/pandan-cake.jpg",
        description: "A light, airy chiffon cake infused with natural pandan leaf extract, giving it a distinctive green hue and fragrant aroma. Served with coconut cream and caramelized palm sugar syrup.",
        tags: ["Fragrant", "Light"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 27,
        title: "Nasi Goreng Raja",
        subtitle: "Nasi Goreng Kerajaan",
        cuisine: "indonesian",
        category: "mains",
        price: 38,
        image: "./assets/royal-fried-rice.jpg",
        description: "A royal interpretation of Indonesia's beloved fried rice. Prepared with aged Basmati rice, tiger prawns, free-range chicken, and duck egg. Topped with crispy shallots and served with house-made sambal.",
        tags: ["Luxurious", "Signature"],
        dietary: {
            vegetarianOption: false,
            spicy: true,
            glutenFree: false
        }
    },
    {
        id: 28,
        title: "Bakso Istimewa",
        subtitle: "Bola Daging Spesial",
        cuisine: "indonesian",
        category: "appetizers",
        price: 24,
        image: "./assets/indonesian-meatballs.jpg",
        description: "Handcrafted beef meatballs of exceptional quality, made with premium meat and a blend of traditional spices. Served in a rich, aromatic broth with hand-pulled noodles and fresh herbs.",
        tags: ["Street Food", "Comfort"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 29,
        title: "Pisang Goreng Deluxe",
        subtitle: "Pisang Goreng Mewah",
        cuisine: "indonesian",
        category: "desserts",
        price: 16,
        image: "./assets/banana-fritters.jpg",
        description: "A sophisticated take on traditional banana fritters. Caramelized local bananas, dipped in a light, crisp batter and dusted with palm sugar and cinnamon. Served with a quenelle of coconut gelato.",
        tags: ["Sweet", "Crispy"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },

    // Korean Dishes
    {
        id: 30,
        title: "Hansang Royal Bibimbap",
        subtitle: "궁중 비빔밥",
        cuisine: "korean",
        category: "mains",
        price: 45,
        image: "./assets/royal-bibimbap.jpg",
        description: "An imperial interpretation of Korea's iconic mixed rice dish. Served in a heated stone bowl with premium Wagyu beef, seasonal vegetables, and a perfectly prepared egg yolk. Accompanied by an array of house-made banchan and gochujang sauce.",
        tags: ["Royal", "Colorful"],
        dietary: {
            vegetarianOption: true,
            spicy: true,
            glutenFree: false
        }
    },
    {
        id: 31,
        title: "Kimchi Jeon Trilogy",
        subtitle: "김치전 삼총사",
        cuisine: "korean",
        category: "appetizers",
        price: 36,
        image: "./assets/kimchi-pancakes.jpg",
        description: "A sophisticated trio of kimchi pancakes featuring three distinct varieties: traditional napa cabbage kimchi, rare white kimchi, and aged radish kimchi. Served with a nuanced soy and sesame dipping sauce.",
        tags: ["Artisan", "Variety"],
        dietary: {
            vegetarianOption: true,
            spicy: true,
            glutenFree: false
        }
    },
    {
        id: 32,
        title: "Hotteok Fusion",
        subtitle: "호떡 모던",
        cuisine: "korean",
        category: "desserts",
        price: 22,
        image: "./assets/korean-sweet-pancakes.jpg",
        description: "A modern twist on the classic Korean street dessert. Crisp exterior filled with a molten core of dark chocolate, roasted chestnuts, and pine nuts. Dusted with matcha powder and served with a quenelle of black sesame ice cream.",
        tags: ["Innovative", "Street Inspired"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },

    // Vietnamese Dishes
    {
        id: 33,
        title: "Pho Imperial",
        subtitle: "Phở Hoàng Gia",
        cuisine: "vietnamese",
        category: "mains",
        price: 39,
        image: "./assets/premium-pho.jpg",
        description: "An elevated interpretation of Vietnam's beloved noodle soup. 24-hour slow-simmered beef bone broth, hand-pulled rice noodles, and prime Wagyu beef slices. Served with a constellation of fresh herbs, lime, and house-made chili oil.",
        tags: ["Slow-Cooked", "Premium"],
        dietary: {
            vegetarianOption: false,
            spicy: true,
            glutenFree: true
        }
    },
    {
        id: 34,
        title: "Bánh Mì Contemporáneo",
        subtitle: "Bánh Mì Hiện Đại",
        cuisine: "vietnamese",
        category: "appetizers",
        price: 28,
        image: "./assets/gourmet-banh-mi.jpg",
        description: "A sophisticated reimagining of the classic Vietnamese sandwich. House-baked artisan baguette filled with five-spice duck confit, pickled heritage vegetables, fresh cilantro, and truffle-infused aioli.",
        tags: ["Fusion", "Refined"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 35,
        title: "Chè Gourmet",
        subtitle: "Chè Sang Trọng",
        cuisine: "vietnamese",
        category: "desserts",
        price: 20,
        image: "./assets/vietnamese-dessert-soup.jpg",
        description: "A luxurious rendition of the traditional Vietnamese dessert. Layers of black sesame panna cotta, passion fruit gel, coconut foam, and caramelized mung bean crumble. Finished with edible gold leaf.",
        tags: ["Artistic", "Layered"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: true
        }
    },
    // Hardcoded menu data directly in the script
    
    {
        id: 2,
        title: "Sakura Tempura",
        subtitle: "桜天ぷら",
        cuisine: "japanese",
        category: "appetizers",
        price: 32,
        image: "https://image.freepik.com/free-photo/tempura-japanese-traditional-cuisine_1339-5733.jpg",
        description: "Seasonal vegetables and tiger prawns encased in a delicate, crisp batter. Served with warm tentsuyu dipping sauce and freshly grated daikon.",
        tags: ["Crisp", "Refined"],
        dietary: {
            vegetarianOption: true,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 4,
        title: "Imperial Peking Duck",
        subtitle: "北京烤鸭",
        cuisine: "chinese",
        category: "mains",
        price: 88,
        image: "https://image.freepik.com/free-photo/peking-duck-cut-into-pieces-traditional-chinese-dish_123827-21571.jpg",
        description: "A royal delicacy prepared following traditional Beijing methods. Our duck is carefully aged, roasted to perfection, and carved tableside. Served with handmade pancakes, spring onions, and our special hoisin sauce.",
        tags: ["Royal Heritage", "Ceremonial"],
        dietary: {
            vegetarianOption: false,
            spicy: false,
            glutenFree: false
        }
    },
    {
        id: 6,
        title: "Royal Thai Green Curry",
        subtitle: "แกงเขียวหวานรอยัล",
        cuisine: "thai",
        category: "mains",
        price: 36,
        image: "https://image.freepik.com/free-photo/thai-food-green-curry-chicken-with-rice_1150-12579.jpg",
        description: "A refined interpretation of Thailand's beloved curry. Premium coconut milk infused with house-made green curry paste, kaffir lime leaves, and Thai basil. Served with your choice of free-range chicken or wild-caught prawns.",
        tags: ["Aromatic", "Traditional"],
        dietary: {
            vegetarianOption: true,
            spicy: true,
            glutenFree: true
        }
    },
    {
        id: 8,
        title: "Sumatran Beef Rendang",
        subtitle: "Rendang Sapi",
        cuisine: "indonesian",
        category: "mains",
        price: 42,
        image: "https://image.freepik.com/free-photo/beef-rendang-dish-with-rice_1150-12559.jpg",
        description: "A heritage recipe from West Sumatra. Slow-braised Wagyu beef in a rich coconut milk reduction, infused with an intricate blend of galangal, turmeric, kaffir lime, and traditional Indonesian spices.",
        tags: ["Complex", "Rich"],
        dietary: {
            vegetarianOption: false,
            spicy: true,
            glutenFree: true
        }
    },
    {
        id: 30,
        title: "Hansang Royal Bibimbap",
        subtitle: "궁중 비빔밥",
        cuisine: "korean",
        category: "mains",
        price: 45,
        image: "https://image.freepik.com/free-photo/bibimbap-korean-rice-dish_1150-42815.jpg",
        description: "An imperial interpretation of Korea's iconic mixed rice dish. Served in a heated stone bowl with premium Wagyu beef, seasonal vegetables, and a perfectly prepared egg yolk. Accompanied by an array of house-made banchan and gochujang sauce.",
        tags: ["Royal", "Colorful"],
        dietary: {
            vegetarianOption: true,
            spicy: true,
            glutenFree: false
        }
    }
];

// Load menu data immediately
function loadMenuData() {
    // Set the global menu variable
    window.menu = menu;
    
    // Call filter menu to display items
    filterMenu();
}

// Call loadMenuData when the page loads
document.addEventListener('DOMContentLoaded', loadMenuData);
    
export default menu;