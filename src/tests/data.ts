import type { Captured } from "./fake-browser.js";

export const captured: Captured = {
  "query": "tofu",
  "productUrl": "https://www.officialveganshop.com/creveganettes-lord-of-tofu-150g-8885.html",
  "expected": {
    "productId": "8885:0",
    "name": "Tofu de Creveganettes - 150g",
    "price": 3.95
  },
  "searchRaw": [
    {
      "id_product": "8885",
      "id_product_attribute": "0",
      "name": "Tofu de Creveganettes - 150g",
      "url": "https://www.officialveganshop.com/creveganettes-lord-of-tofu-150g-8885.html",
      "price": "3,95 €",
      "regular_price": null,
      "unit_price": null,
      "brand": null,
      "flags": [],
      "button": "absent",
      "availability": "https://schema.org/InStock"
    },
    {
      "id_product": "10623",
      "id_product_attribute": "0",
      "name": "Presse à Tofu",
      "url": "https://www.officialveganshop.com/presse-tofu-tofubud-10623.html",
      "price": "29,95 €",
      "regular_price": null,
      "unit_price": null,
      "brand": null,
      "flags": [
        "product-flag out Victime de son succès"
      ],
      "button": "absent",
      "availability": "https://schema.org/OutOfStock"
    },
    {
      "id_product": "8886",
      "id_product_attribute": "0",
      "name": "Filet Atlantik-Tofu - 150g",
      "url": "https://www.officialveganshop.com/fauxmon-lord-of-tofu-150g-8886.html",
      "price": "3,85 €",
      "regular_price": null,
      "unit_price": null,
      "brand": null,
      "flags": [],
      "button": "absent",
      "availability": "https://schema.org/InStock"
    }
  ],
  "productRaw": {
    "info": {
      "name": "Tofu de Creveganettes - 150g",
      "sku": null,
      "gtin": "4260019320537",
      "brand": "LORD OF TOFU",
      "description": " Le tofu de creveganettes Lord of Tofu : une spécialité vegan et bio à base de tofu pour vos recettes aux saveurs de la mer !  \n  Ce produit est une alternative à la crevette. De par sa composition, il ne pourra en aucun cas remplacer avec exactitude les propriétés intrinsèques, nutritionnelles ou organoleptiques du crustacé conventionnel.  ",
      "price": "3.95",
      "availability": "https://schema.org/InStock"
    },
    "id_product": "8885",
    "id_product_attribute": "0",
    "data_quantity": null,
    "button": "absent",
    "ingredients": "Kits",
    "nutrition": [],
    "url": "https://www.officialveganshop.com/creveganettes-lord-of-tofu-150g-8885.html",
    "unit_price": null
  },
  "cartEmpty": {
    "total_text": "0,00 €",
    "products": []
  },
  "cartFilled": {
    "quantity": 2,
    "raw": {
      "total_text": "7,90 €",
      "products": [
        {
          "id_product": "8885",
          "id_product_attribute": "0",
          "name": "Tofu de Creveganettes - 150g",
          "quantity": "2",
          "unit_price": 3.95,
          "line_total": 7.9,
          "available_quantity": null
        }
      ]
    }
  }
};
