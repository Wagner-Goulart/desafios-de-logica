function kangaroo(x1, v1, x2, v2) {

    if (v1 <= v2 || (x2 - x1) % (v1 - v2) !== 0) {
        return "NO";
    } else {
        return "YES";
    }

}

console.log(kangaroo(0,3,4,2))