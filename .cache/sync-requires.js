
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/macbookpro/Documents/gatsby-shopify-demo/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/macbookpro/Documents/gatsby-shopify-demo/src/pages/404.jsx")),
  "component---src-pages-cart-jsx": preferDefault(require("/Users/macbookpro/Documents/gatsby-shopify-demo/src/pages/cart.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/macbookpro/Documents/gatsby-shopify-demo/src/pages/index.jsx")),
  "component---src-pages-products-shopify-product-product-type-shopify-product-handle-jsx": preferDefault(require("/Users/macbookpro/Documents/gatsby-shopify-demo/src/pages/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}.jsx")),
  "component---src-pages-search-jsx": preferDefault(require("/Users/macbookpro/Documents/gatsby-shopify-demo/src/pages/search.jsx"))
}

