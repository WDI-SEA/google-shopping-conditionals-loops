# Google Shopping
## Conditionals and Loops


Use the product search result in your file to check the following:

1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. How many are there? Where else is this count information stored in the search results?

2.) Find all items with a `backorder` availability in `inventories`.

3.) Find all items with more than one image link.

4.) Find all `canon` products in the items (careful with case sensitivity).

5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".

6.) Print all the products with their **brand**, **price**, and a **image link**

##Hints

* We'll be dealing with large JSON objects quite frequently throughout the course. Use a Chrome extension such as [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) in order to easily collapse arrays and objects during this assignment. Once the extension is installed, access the JSON file via Github by going to **producs.json**, then clicking **Raw** right above the file.
* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #5
* Documentation
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
