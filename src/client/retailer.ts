// Fichier généré par generate.mjs à partir de retailers/official-vegan-shop/spec.json. Ne pas modifier ici.
export interface ScopeField { key: string; env: string; description: string; example: string; pattern?: string }
export const RETAILER: {
  id: string; slug: string; version: string; label: string; origin: string; entryUrl: string; loginUrl: string; signupUrl: string;
  platform: string; fulfillment: ReadonlyArray<"delivery" | "click_and_collect">; accountRequired: boolean;
  scopeFields: ReadonlyArray<ScopeField>;
} = {
  "id": "official-vegan-shop",
  "slug": "official_vegan_shop",
  "version": "0.1.0",
  "label": "Official Vegan Shop",
  "origin": "https://www.officialveganshop.com",
  "entryUrl": "https://www.officialveganshop.com/",
  "loginUrl": "https://www.officialveganshop.com/connexion",
  "signupUrl": "https://www.officialveganshop.com/connexion?create_account=1",
  "platform": "prestashop",
  "fulfillment": [
    "delivery"
  ],
  "accountRequired": false,
  "scopeFields": []
};
