import React from "react";
import Navbar from "../components/Navbar";

function MarketPlace() {
  const products = [
    {
      id: 1,
      name: "Kadence rosewood Guitar",
      href: "https://www.amazon.in/Kadence-Frontier-Acoustic-Guitar-Strings/dp/B078GTJP5Y/ref=sr_1_3_sspa?sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      price: "₹4,899",
      imageSrc: "https://m.media-amazon.com/images/I/31GhN+QFm1L.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Yamaha FS80C 25",
      href: "https://www.amazon.in/Ultimate-Concert-Cutaway-Acoustic-Bajaao/dp/B08WHWKKV5/ref=sr_1_5?sr=8-5",
      price: "₹8,899",
      imageSrc: "https://m.media-amazon.com/images/I/51W6k9gCgGL._SX679_.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "YAMAHA F310",
      href: "https://www.amazon.in/Yamaha-F310-6-Strings-Acoustic-Natural/dp/B000RVYW7E/ref=sr_1_6?sr=8-6",
      price: "₹9,441",
      imageSrc:
        "https://m.media-amazon.com/images/I/31Mcm7PpchL._SX300_SY300_QL70_FMwebp_.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Trinity PA 75X",
      href: "https://www.amazon.in/Trinity-PA-75X-61-Keys-Electronic-Keyboard/dp/B08B3X4M38/ref=sr_1_3?sr=8-3",
      price: "₹8,799",
      imageSrc: "https://m.media-amazon.com/images/I/51LcpGtZJBL._SX679_.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Star Musical and Handicraft - Djembe",
      href: "https://www.amazon.in/Star-Musical-Handicraft-Inches-Wooden/dp/B08K7MHWP5/ref=sr_1_2_sspa?sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      price: "₹2,999",
      imageSrc: "https://m.media-amazon.com/images/I/41E8r70T9-L.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 6,
      name: "Remo DJ-0014-32- Djembe",
      href: "https://www.amazon.in/Remo-DJ-0014-32-DJ-0014-32-Djembe/dp/B001SPBHYY/ref=sr_1_12?sr=8-12",
      price: "₹47,181",
      imageSrc: "https://m.media-amazon.com/images/I/61Ie0dUmNbL._SY879_.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 7,
      name: "Casio CTK-3500",
      href: "https://www.amazon.in/Casio-CTK-3500-61-Key-Portable-Keyboard/dp/B06XWRKN6C/ref=sr_1_6?sr=8-6",
      price: "₹10,242",
      imageSrc: "https://m.media-amazon.com/images/I/71y3bYkADWL._SX679_.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
  ];

  return (
    <div className="bg-[#0a183d]">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-[300px] w-[300px] object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
