Title:
Code Craft Responsive UI

Description: 
This is a prototypical implementation of responsive product detail page.

Tech Stack:
HTML, CSS, jQuery, Javascript.

Installation & Execution:
1.Pull the code from "https://github.com/nelakkiyaselvan/codeCraft".
2.Place the "codeCraft" folder in htdocs folder of xampp or any apache server such that the path resolves to "/htdocs/codeCraft/index.html"
3.Open the link "//localhost/codeCraft" in browser
4.Load this page in any view such as Desktop, Tablet and Mobile.

Unit testcases:

1.Page loaded as per design. - Pass
2.UI fits perfectly for desktop, tablet and mobile views. - Pass
3.Render the product list from the JSON Object if the product image, name and id available. - Pass
4.Clicking on the procut highlighted with the arrow icon. - Pass
5.Clicking on the product will open the prodcut detail tab with appropriate product details and back button. - Pass
6.Clicking on the product will brought to the top of the page and previous product moved to the end of the list. - Pass 
7.Clicking the toggle button reveals the product details. - Pass
8.The product skus rendered based on the product. - Pass
9.Selecting the sku will enable the feature section. - Pass
10.Deselecting the sku will reset the feature section. - Pass
11.Changing the sku also resets the feature section. - Pass
12.Selecting the mode highlighted with background color and the image/text colors are changed. - Pass
13.Selecting the mode will demonstrate the brightness of the product in intensity section. - Pass
14.Selecting the mode will show the appropriate volume in the intensity section.
15.by clicking the back button remove the product detail tab and bring the user to the inital level. - Pass
16.In mobile & tablet view Portrait and Landscape orientation change handled. - Pass



Notes:
1. All data rendered dynamically and reuse the template for any product list.
2. from test case No.6 - Avoiding the user again seeing the visited product.
3. The duplicate product added in the list used for looping the product list while using the Swiper plugin.
4. Due to busy schedule i can't able to make the product list inner scroll. the page scroll will work fine. 
   *If the product list is large then the user feels scrolling the page continuosly.
5. The intensity / mode section rendered as static. We can added the details in product json and render dynamically.
