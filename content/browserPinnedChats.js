"use strict";

function openChatWindow() {
  var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var container = window.document.getElementById("pinnedchats");

  var box = window.document.createElementNS(XUL_NS, "hbox");
  box.setAttribute("mousethrough", "never");
  box.setAttribute("open", "true")

  var browser = window.document.createElementNS(XUL_NS, "browser");
  browser.setAttribute("flex", "1")
  browser.setAttribute("src", "resource://browserpinnedchats/content/demo.htm")
  box.appendChild(browser);
  browser.addEventListener("DOMContentLoaded", function injector() {
    browser.contentWindow.toggle = function() {
      if (box.getAttribute("open") == "true") {
        box.removeAttribute("open");
      } else {
        box.setAttribute("open", "true");
      }
    }
    browser.contentWindow.closeChat = function() {
      window.setTimeout(function () { container.removeChild(box); }, 100);
    }
  }, true);
  container.appendChild(box);
}

function removePinnedChat() {

}
