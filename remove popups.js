// Instagram Signup/Login and Image Re-Linker via the MutationObserver API
// Video Tutorial URL: https://youtu.be/KWWGC2TbT70

// each function will try to remove the popups

// tries to remove Instagram popups
function loginCheck() {
	const body = document.querySelector('body');
    const hasModal = body.lastElementChild.getAttribute('role') === 'presentation' ? true : false;
    const footer = [...document.querySelectorAll('nav > div')].pop().firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild;

    if (footer) {
    	footer.remove();
    }
    
    if (hasModal) {
        body.lastElementChild.remove();
    }
}

// set the scroll bar visible
function removeHiddenFromBody() {
    const body = document.querySelector('body');
    const isHidden = body.style.overflow === 'hidden';
    if (isHidden) {
        body.style.overflow = 'visible';
    }
}

// tries to remove *cookie-dialog* popups
function popupCheck() {
    const allCookies = document.querySelectorAll('[id*=cookie-dialog]')
    allCookies.forEach(cookie => {
        console.log("Removing: ");
        console.log(cookie);
        cookie.remove();
    })
}

//tries to remove *pop-div* popups
function popupCheck2() {
    const allCookies = document.querySelectorAll('[id*=pop-div]')
    console.log("Removing: ");
    allCookies.forEach(cookie => {
        console.log(cookie);
        cookie.remove();
    })
}

// tries to remove last div if it contains Campaign word
function removeLastPopupDiv() {
    const body = document.querySelector('body');
    var removedEl = true;
    while  (removedEl) {
        var lastEl = body.lastElementChild;
        if (lastEl.className.match(".*Campaign.*") !== null){ 
            console.log("Removing:");
            console.log(lastEl);
            lastEl.remove();
        } else {
            removedEl = false;
        }
    }
}

// tries to consent-popup
function removeConsentPopup() {
    const divsToRemove = document.querySelectorAll('[class*=consent-popup]')
    var removedEl = true;
    console.log("Removing: ");
    divsToRemove.forEach(div => {
        console.log(div);
        div.remove();
    })
}

function tryThisFunction(greatFunction) {
    try {
        greatFunction();
    } catch (error) {
      console.error(error);
    }
}

function removeAllPresentationDiv() {
    const allPresentations  = document.querySelectorAll('[role=presentation]');
    allPresentations.forEach(el => {if (el.tagName == 'DIV') el.remove()});
}   

function removeqcCmp2Container() {
    const body = document.querySelector('body');
    const firstEl = body.firstElementChild;
    const hasQc = firstEl.id === "qc-cmp2-container" || (firstEl.className.match(".*qc-cmp2-container.*") !== null);
    if (hasQc) {
        firstEl.remove()
    }
}    

// tries to remove onetrus
function popupCheck3() {
    const allCookies = document.querySelectorAll('[id*=onetrust-consent]')
    console.log("Removing: ");
    allCookies.forEach(cookie => {
        console.log(cookie);
        cookie.remove();
    })
}

// tries to remove cookie
function popupCheck4() {
    const allCookies = document.querySelectorAll('[id*=cookie]')
    console.log("Removing: ");
    allCookies.forEach(cookie => {
        console.log(cookie);
        cookie.remove();
    })
}

function removeBlur() {
    const body = document.querySelector('body');
    var prefix = "blur";
    var classes = body.className.split(" ").filter(function(c) {
        return c.lastIndexOf(prefix) === -1;
    });
    body.className = classes.join(" ").trim();
}

function removeGdpr() {
    const allIdsCookies = document.querySelectorAll('[id*=gdpr]');
    const allClassCookies = document.querySelectorAll('[class*=gdpr]');
    console.log("Removing: ");
    allIdsCookies.forEach(cookie => {
        console.log(cookie);
        cookie.remove();
    })
    allClassCookies.forEach(cookie => {
        console.log(cookie);
        cookie.remove();
    })
}

function removeAnything() {
    tryThisFunction(loginCheck);
    tryThisFunction(popupCheck);
    tryThisFunction(popupCheck2);
    tryThisFunction(popupCheck3);
    tryThisFunction(popupCheck4);
    tryThisFunction(removeLastPopupDiv);
    tryThisFunction(removeConsentPopup);
    tryThisFunction(removeHiddenFromBody);
    tryThisFunction(removeAllPresentationDiv);
    tryThisFunction(removeqcCmp2Container);
    tryThisFunction(removeBlur);
    tryThisFunction(removeGdpr);
}

function mutationsCallback(mutations) {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            console.log("Child changed in body");
            removeAnything();
        } 
    });
}

const body = document.querySelector('body');
const popupOberver = new MutationObserver(mutationsCallback);
popupOberver.observe(body, { childList: true });

removeAnything();

