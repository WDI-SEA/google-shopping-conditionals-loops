# Google Shopping - Conditionals and Loops

We'll be using a file represented as **JSON** for this assignment. JSON is a standard for formatting data, and it's a common format you'll see throughout your web development career. Even more important will be parsing JSON.

##Getting Started
* Fork and clone this repository to your computer
* Look in the starter file, called `google_shopping.js`. We'll be using Node to read the JSON file and access it as a JavaScript object
* Run the file by typing `node google_shopping.js` into the console. If you get items printing out, you're ready to start on the assignment.

##Requirements

Use the product search result in your file to find the following results. Note that you may want to comment out your solutions as you solve them, to avoid a mess of output in the terminal.

1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. How many are there? Where else is this count information stored in the search results?

2.) Find all items with a `backorder` availability in `inventories`.

3.) Find all items with more than one image link.

4.) Find all `canon` products in the items (careful with case sensitivity).

5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".

6.) Print all the products with their **brand**, **price**, and a **image link**

##Hints

* We'll be dealing with large JSON objects quite frequently throughout the course. Use a Chrome extension such as [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) in order to easily collapse arrays and objects during this assignment. Once the extension is installed, access the JSON file via Github by going to **products.json**, then clicking **Raw** right above the file.
* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #5
* Documentation
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
