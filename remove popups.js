// Instagram Signup/Login and Image Re-Linker via the MutationObserver API
// Video Tutorial URL: https://youtu.be/KWWGC2TbT70

// FUNCTION: Checks for presence of signup footer and modal, then removes them if they're on the page.
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
    allCookies.forEach(cook => {
        console.log("Removing: ");
        console.log(cook);
        cook.remove();
    })
}

//tries to remove *pop-div* popups
function popupCheck2() {
    const allCookies = document.querySelectorAll('[id*=pop-div]')
    console.log("Removing: ");
    allCookies.forEach(cook => {
        console.log(cook);
        cook.remove();
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

tryThisFunction(loginCheck);
tryThisFunction(popupCheck);
tryThisFunction(popupCheck2);
tryThisFunction(removeLastPopupDiv);
tryThisFunction(removeHiddenFromBody);
tryThisFunction(removeAllPresentationDiv);