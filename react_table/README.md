## Task
Using React (JSX is optional), display the YouTube channels found in `js/main.js` in an HTML table. 
When a user clicks a table heading, the data should be sorted based on which column heading was clicked 
(e.g. clicking the "Views" heading should sort by views descending). 
Finally, add a search box and allow users to filter the result set as they type.

## Notes
Feel free to install any other JS/CSS libraries you'd like \*, but React is a requirement

## Bonus
Move the YouTube data into an external file, use AJAX & Promises to provide state for your React component.

\* Other than the JSX transformer, no transpilers are allowed (Coffee/TypeScript/etc)

## Daniel Overstreet comments
I left the formatting of the fields in the data variable intact in the table rendering. 
So, dates are in that format with the T's and Z's. Displaying the URLs in the table might 
not be necessary. I could have put them in an anchor around the titles. 

Click the column headers to toggle between sorting by that column descending/ascending. 

For the search bar, I made the design choice to remove the filter text onBlur so that the user would not 
have to manually delete it to remove it. This has two effects: The user can sort a column
then search and have the results in that sorted order, but the user cannot search and
then sort the results by column. The onBlur kicks in when the user clicks the column after searching.

Another design choice was to make search case-insensitive and start the search at the beginning of titles. 

I wanted to post the completion of the Task before moving to the Bonus.

*Bonus added: main_bonus.js
I updated index.html to use this js file
