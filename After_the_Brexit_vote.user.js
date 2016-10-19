// ==UserScript==
// @name        After the Brexit vote
// @namespace   After the Brexit vote
// @description Adds " after the Brexit vote" to every title on the BBC News UK homepage
// @category    Humor/Satire
// @include     http://www.bbc.co.uk/news
// @version     1
// @grant       none
// ==/UserScript==

// Options

// Context Options
var turn_The_Guardian_into_Mens_Rights_activists = true; // Reserved for future use
var no_vegans = true;
var no_SNP = true;
var no_Corbyn = true;

// Emoji options
var emoji = false;
var keyword = 'Brexit';
var patriotic = true;
var sad = false;
var angry = false;

if (patriotic) {
  var emoji_before_keyword = '🇬🇧'; // TODO: use unicode encoding values
  var emoji_after_keyword = '🍺';
}

if (sad) {
  var emoji_before_keyword = '😢';
  var emoji_after_keyword = '😭';
}
if (angry) {
  var emoji_before_keyword = '🇪🇺';
  var emoji_after_keyword = '😡';
}

// Code

var bbctitle = document.body.getElementsByClassName('title-link__title-text');
var i;
for (i = 0; i < bbctitle.length; i++) {
  if (emoji) {
    bbctitle[i].innerHTML = bbctitle[i].innerHTML + ' after the ' + emoji_before_keyword + ' ' + keyword + ' ' + emoji_after_keyword + ' vote';
  }
  else {
    bbctitle[i].innerHTML = bbctitle[i].innerHTML + ' after the ' + keyword + ' vote';
  }

}
