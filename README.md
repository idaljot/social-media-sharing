# Social media shortlink (Rebrandly) sharing
These JS files can be used to grab the url of a page, shorten it, and share it to a social media platform like:
* Twitter
* Linkedin
* Email or
* Copy to clipboard

## Insert HTML
Except `copy to clipboard`, following HTML code can be used:
```
<button onclick="share-<social-media-name>();">SHORT AND SHARE</button>
```
and for `copy to clipboard`, following code can be used:
```
<button onclick="copyFunction(this);">Short</button>
<i style="position:absolute; "></i>
```
Where `i` tag would display the <i>Copied!</i> message.

## Insert CSS
To get social-media icons, you can use [Fontawesome](https://fontawesome.com/).
