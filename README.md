<h1>WooCommerce Image Fly on Add to Cart</h1>

<p>
A smooth <strong>image fly-to-cart animation</strong> for WooCommerce products.
When a customer clicks <em>Add to Cart</em>, the product image animates and flies
into the mini cart.
</p>

<hr>

<h2>🎥 Demo Video</h2>

<p>
Watch the live demo of the <strong>WooCommerce Image Fly on Add to Cart</strong> animation:
</p>


https://github.com/user-attachments/assets/d0555218-9983-4fb8-b79b-f6f5ef246758


<hr>

<h2>Step 1: Disable Pointer Events (Important)</h2>

<p>
To ensure the <strong>Add to Cart</strong> button works correctly (especially when it contains
<span>, <svg>, or icons), add the following CSS:
</p>

<pre>
/* Disable pointer events on all inner elements (span, svg, icons, etc.) */
.add_to_cart_button *,
.single_add_to_cart_button * {
    pointer-events: none;
}
</pre>

<p>
📌 Go to: <strong>Appearance → Customize → Additional CSS</strong><br>
Paste the CSS above and click <strong>Save</strong>.
</p>

<hr>

<h2>Step 2: Add JavaScript File</h2>

<p>
Upload the file <strong>woocommece-image-fly-on-add-to-cart-min.js</strong> and load it in the
<strong>footer</strong> of your website.
</p>

<p>
After adding the script, initialize it using the code below.
Make sure to <strong>modify the selectors</strong> if your theme structure is different.
</p>

<hr>

<h2>Instance 1: Shop / Product Archive Page</h2>

<pre>
new ms_woo_pd_image_fly({
    miniCartSelector:  '.woocommerce-mini-cart',
    addToCartButton:   'li.product .add_to_cart_button',
    productContainer:  'li.product',
    productImage:      '.attachment-woocommerce_thumbnail',
    animationDuration: 1000,
    animationEasing:   'ease-in-out',
    enableShakeEffect: true,
});
</pre>

<hr>

<h2>Instance 2: Single Product Page</h2>

<p>
The script automatically detects the correct product image selector
based on your gallery layout.
</p>

<pre>
const singleImg = document.querySelector('.flex-active-slide a img')
    ? '.flex-active-slide a img'
    : '.woocommerce-product-gallery__image a img';

new ms_woo_pd_image_fly({
    miniCartSelector:  '.woocommerce-mini-cart',
    addToCartButton:   '.single-product .single_add_to_cart_button',
    productContainer:  '.single-product .product',
    productImage:      singleImg,
    animationDuration: 1000,
    animationEasing:   'ease-in-out',
    enableShakeEffect: true,
    imageStartFromAddToCartOnMobile: true, /* For mobile devices, the image animation starts from the top of the Add to Cart button. You set this option to false, so the initial image position is incorrect, and it doesn’t look good on mobile. */
    mobileBreakpoint: 767,
});
</pre>

<hr>

<h2>Customization</h2>

<ul>
    <li>Update selectors to match your theme structure</li>
    <li>Adjust animation duration and easing</li>
    <li>Enable or disable the cart shake effect</li>
</ul>

<hr>

<h2>Paid Installation Support</h2>

<p>
If you need help installing or customizing this script on your website,
I can do it for you.
</p>

<p>
<strong>Installation Fee:</strong> $50<br>
<strong>Contact:</strong>
<a href="https://api.whatsapp.com/send/?phone=8801831959312" target="_blank">
WhatsApp
</a>
</p>

<hr>

<p>
⭐ If this project helped you, please consider starring the repository!
</p>
