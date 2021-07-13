// ==UserScript==
// @name         Roblox Developer Expansion
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Adds many new features more useful for developers than players, and removes the player-oriented aspects (or just the useless ones).
// @author       Ty_Scripts
// @match        https://www.roblox.com/*
// @match        https://devforum.roblox.com/*
// @icon         https://www.google.com/s2/favicons?domain=roblox.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var i;
    var j;
    // DevForum leftbar button
    var left = document.getElementsByClassName("left-col-list");
    var dfanchor = document.getElementById("nav-home");
    if (dfanchor) {
        dfanchor.href = "https://devforum.roblox.com";
        var dfdiv = document.createElement("DIV");
        dfanchor.appendChild(dfdiv);
        var dfdivspan = document.createElement("SPAN");
        dfdivspan.classList.add("icon-nav-message");
        dfdiv.appendChild(dfdivspan);
        var dfspan = document.createElement("SPAN");
        dfspan.innerHTML = "DevForum";
        dfspan.classList.add("font-header-2");
        dfspan.classList.add("dynamic-ellipsis-item");
        dfanchor.appendChild(dfspan);
        dfanchor.removeChild(dfanchor.children[1]);
        dfanchor.removeChild(dfanchor.children[0]);
    };
    // social media icons and other words to change
    function myF() {
        var textpar = document.getElementsByClassName("cooked");
        if (textpar) {
            for (i = 0; i < textpar.length; i++) {
                for (j = 0; j < textpar[i].children.length; j++) {
                    var text = textpar[i].children[j].innerHTML;
                    // twitter
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/twitter /gi, "<img src=https://www.google.com/s2/favicons?domain=twitter.com> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/twitter,/gi, "<img src=https://www.google.com/s2/favicons?domain=twitter.com> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/twitter-/gi, "<img src=https://www.google.com/s2/favicons?domain=twitter.com> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/twitter!/gi, "<img src=https://www.google.com/s2/favicons?domain=twitter.com> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/twitter:/gi, "<img src=https://www.google.com/s2/favicons?domain=twitter.com> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    // discord
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/discord /gi, "<img src=https://www.google.com/s2/favicons?domain=discord.gg> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/discord,/gi, "<img src=https://www.google.com/s2/favicons?domain=discord.gg> ,");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/discord-/gi, "<img src=https://www.google.com/s2/favicons?domain=discord.gg> -");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/discord!/gi, "<img src=https://www.google.com/s2/favicons?domain=discord.gg> !");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/discord:/gi, "<img src=https://www.google.com/s2/favicons?domain=discord.gg> :");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    // youtube
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/youtube /gi, "<img src=https://www.google.com/s2/favicons?domain=youtube.com> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/youtube,/gi, "<img src=https://www.google.com/s2/favicons?domain=youtube.com> ,");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/youtube-/gi, "<img src=https://www.google.com/s2/favicons?domain=youtube.com> -");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/youtube!/gi, "<img src=https://www.google.com/s2/favicons?domain=youtube.com> !");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/youtube:/gi, "<img src=https://www.google.com/s2/favicons?domain=youtube.com> :");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    // devforum;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforum /gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforum,/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ,");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforum-/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> -");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforum!/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> !");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforum:/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> :");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/dev forum /gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/dev forum,/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ,");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/dev forum-/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> -");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/dev forum!/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> !");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/dev forum:/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> :");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/developer forum /gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/developer forum,/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ,");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/developer forum-/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> -");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/developer forum!/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> !");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/developer forum:/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> :");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforums /gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforums,/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> ,");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforums-/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> -");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforums!/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> !");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/devforums:/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/uploads/default/optimized/4X/3/7/4/374b2f132433065f2087b88c43080aba75c21aff_2_32x32.svg> :");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    // replaces a n n o y i n g words (well actually lol isn't annoying but gotta love cowboy hat guy)
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/bruh/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/images/emoji/twitter/yawning_face.png?v=9>");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/yolo/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/images/emoji/twitter/nerd_face.png?v=9>");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/lol/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/images/emoji/twitter/cowboy_hat_face.png?v=9>");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                    document.getElementsByClassName("cooked")[i].children[j].innerHTML = text.replace(/lmao/gi, "<img src=https://doy2mn9upadnk.cloudfront.net/images/emoji/twitter/face_with_hand_over_mouth.png?v=9>");
                    text = document.getElementsByClassName("cooked")[i].children[j].innerHTML;
                };
            };
        };
    };
    console.log("we made it here");
    setInterval(function(){
        myF();
        console.log("Runs!");
    }, 3000);
})();
