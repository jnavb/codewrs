function maxPow(pow) {
    return Math.pow(2, Math.ceil(Math.log2(pow)));
}

function sum(a, b) {
    return parseInt(((b - a + 1) * (a + b)) / 2);
}

function elderAge(m, n, l, t) {
    if (m > n)[m, n] = [n, m];

    var [maxM, maxN] = [maxPow(m), maxPow(n)];

    if (m == 0 || n == 0 || l > maxN)
        return 0;

    if (maxM == maxN)
        return (sum(1, maxN - 1 - l) * (m + n - maxN) + elderAge(maxN - n, maxM - m, l, t)) % t;


    if (maxM < maxN) {
        maxM = parseInt(maxN / 2);
        var aux = sum(1, maxN - 1 - l) * m - (maxN - n) * sum(Math.max(0, maxM - l), maxN - 1 - l);
        if (l <= maxM)
            aux += (maxM - l) * (maxM - m) * (maxN - n) + elderAge(maxM - m, maxN - n, 0, t);
        else
            aux += elderAge(maxM - m, maxN - n, l - maxM, t);

        if (aux >= 0)
            return aux % t;
        else
            return t + (aux % t);
    }
}
