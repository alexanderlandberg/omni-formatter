// --- firstFactorial ---
function firstFactorial(key, parm) {
    if (key.keyCode == 13 && parm.value.length > 0) {
        parm.parentNode.querySelector("p.text").innerHTML = initFunc(parm.value);
    }

    function initFunc(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * initFunc(num - 1);
        }
    }
}

// --- mockingSpongebob ---
function mockingSpongebob(key, parm) {
    if (key.keyCode == 13 && parm.value.length > 0) {
        parm.parentNode.querySelector("p.text").innerHTML = initFunc(parm.value);
    }

    function initFunc(parm) {
        let spongebob = [];
        for (let i = 0; i < parm.length; i++) {
            if (Math.random() > 0.5) {
                spongebob.push(parm.charAt(i).toUpperCase());
            } else {
                spongebob.push(parm.charAt(i).toLowerCase());
            }
        }
        return spongebob.join("");
    }
}


// --- reverseSentence ---
function reverseSentence(key, parm) {
    if (key.keyCode == 13 && parm.value.length > 0) {
        parm.parentNode.querySelector("p.text").innerHTML = initFunc(parm.value);
    }
    function initFunc(parm) {
        return parm.split("").reverse().join().replace(/,/g, '');;
    }
}


// --- reverseSentence ---
function longestWord(key, parm) {
    if (key.keyCode == 13 && parm.value.length > 0) {
        parm.parentNode.querySelector("p.text").innerHTML = initFunc(parm.value);
    }

    function initFunc(parm) {
        parm = parm.trim();
        let arr = parm.split(' ');
        arr.sort(function (a, b) {
            return b.length - a.length
        });
        return arr.shift();
    }
}


// --- SimpleAdding ---
function SimpleAdding(key, parm) {
    if (key.keyCode == 13 && parm.value.length > 0) {
        parm.parentNode.querySelector("p.text").innerHTML = initFunc(Number(parm.value));
    }

    function initFunc(parm) {
        if (parm === 1) {
            return 1;
        } else {
            return parm + initFunc(parm - 1);
        }
    }
}


