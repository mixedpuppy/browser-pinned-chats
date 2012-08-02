"use strict";

function openChatWindow() {
  var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var container = window.document.getElementById("pinnedchats");

  var browser = window.document.createElementNS(XUL_NS, "chatbrowser");
  browser.setAttribute("open", "true");
  browser.setAttribute("src", "resource://browserpinnedchats/content/demo.htm");
  container.appendChild(browser);
}

function removePinnedChat() {

}
