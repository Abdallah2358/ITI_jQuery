function gal(img, next = 2, path = './Images/', ext = '.jpg') {
    var timerId;
    var newSource = function (current) {
        img.src = path + current + ext;
    }
    this.next = function (start,last) {
        if (next < last) {
            console.log(next);
            newSource(next++);
        } else {
            next = start
        }
    }
    this.prev = function (start,last) {
        if (next > start) {
            next--;
            newSource(next)
        } else {
            next = last
        }
    }
    this.ss = function (start, end) {
        timerId = setInterval(function () {
            if (next == end) {
                next = start;
                next(last)
            } else {
                next(last)
            }
        }, 1000)
    }
    this.stop = function () {
        clearInterval(timerId);
    }
}

