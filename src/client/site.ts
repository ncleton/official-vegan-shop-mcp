import { createPrestashopAdapter } from "./platform.js";

export const adapter = createPrestashopAdapter({
  origin: "https://www.officialveganshop.com",
  hosts: ["www.officialveganshop.com", "officialveganshop.com"],
});
