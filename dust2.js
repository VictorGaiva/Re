/*
 Copyright(C) 2011 ha55ii, http://dan-ball.jp/
 The games source code use is prohibition.
*/
var aa = 0,
    h = 512,
    ba = 430,
    da, ea = 0,
    fa = 45,
    Flag_1 = false,
    ha = 4,
    ia = 2 * ha,
    ja = 2 * ha,
    ka = ia,
    la = ja,
    na = new Vector2D,
    oa = 2,
    pa = 0,
    qa = 2,
    ra = 0,
    sa = 0,
    ta = 0,
    ua = 0,
    va = 0,
    wa = 0,
    xa = 0,
    ya = 0,
    Flag_2 = true,
    Aa = 0,
    Ba = 0,
    Da = 0,
    Ea = 0,
    Fa = 0,
    Ga = 0,
    Ha = 8,
    Ia = 8,
    Ja = 8,
    Ka = 8,
    La = new Int8Array(138880),
    Ma = new Int8Array(138880),
    Na = new Int32Array(500),
    Oa = new Int32Array(500),
    Pa = new Int32Array(500),
    Qa = new Int32Array(500),
    Ra = new Int8Array(500),
    Sa = 0,
    Ta = 0,
    Ua = -1,
    Va = 0,
    Wa = 0,
    Xa = -1,
    Ya = 29,
    k = new Uint8Array(Ya + 277760 + 7E3),
    Za = 0,
    $a, ab = [0, 0, 0, 0, 0, 0, 0, 0],
    Flag_3 = true,
    cb = 0,
    db = "",
    eb = 0,
    fb = "",
    gb = 0,
    hb = "",
    ib = 0,
    jb = 0,
    kb = 0,
    lb = 0,
    mb = 0,
    nb = 0,
    ob = 0,
    qb = new Image_2D,
    rb = "",
    sb = "",
    tb = new Image_2D,
    vb, wb, xb = 0,
    yb = 0,
    zb = 0,
    Fonts_Array = ["sans-serif", "serif", "monospace", "setFont ->"],
    Fonts_Modifier = ["PLAIN", "BOLD", "ITALIC", "BOLD&ITALIC"],
    Fonts_Sizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
    Db = new Int32Array(289 * h),
    Eb = new Image_2D,
    Fb = 1,
    Gb = 2,
    Hb = 3,
    Ib = 0,
    l = 1,
    Jb = 2,
    Kb = 3,
    p = 4,
    Lb = 0,
    Mb = 1,
    Nb = 2,
    Pb = 3,
    Qb = 4,
    Rb = 5,
    q = 6,
    r = 7,
    Sb = 8,
    Tb = 9,
    Ub = 10,
    Vb = 11,
    Wb = 12,
    Xb = 13,
    Yb = 14,
    $b = 15,
    ac = 16,
    bc = 17,
    cc = 18,
    dc = 19,
    ec = 20,
    fc = 21,
    gc = 22,
    hc = 23,
    ic = 24,
    jc = 25,
    kc = 26,
    lc = 27,
    mc = 28,
    nc = 29,
    oc = 30,
    pc = 31,
    qc = 32,
    rc = 33,
    sc = 34,
    tc = 35,
    uc = 36,
    vc = 37,
    wc = 38,
    xc = 39,
    yc = 40,
    zc = 41,
    Ac = 42,
    Bc = 43,
    Cc = 44,
    Dc = 45,
    Ec = 46,
    Fc = 47,
    Gc = 48,
    Hc = 49,
    Ic = 50,
    Jc = 51,
    Kc = 52,
    Lc = 40,
    Mc = [5, 6, 7, 8, 10, 1, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 50, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Nc = [5, 6, 7, 8, 10, 0, 12, 13, 0, 0, 16, 0, 18, 19, 20, 21, 23, 24, 25, 7, 27, 28, 0, 0, 31, 32, 33, 0, 35, 0, 38, 39, 40, 41, 0, 43, 0, 0, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Oc = [5, 6, 7, 8, 10, 1, 11, 13, 0, 15, 16, 0, 18, 19,
        20, 21, 23, 24, 25, 0, 27, 28, 29, 0, 31, 32, 33, 0, 35, 0, 38, 39, 40, 41, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    Pc = [0, 6, 7, 8, 10, 1, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 50, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    s = [0, 8421631, 6316128, 4210752, 12632256, 15908203, 4210943, 16728128, 9486400, 8409120, 11567184, 13684991, 16777215, 16728224, 9465872, 16750950, 8400928, 16777164, 16764006, 6697728, 8421504, 16737843,
        14737632, 8388736, 4486912, 12615872, 16752672, 13408665, 15790320, 16776992, 4210752, 6710784, 13369344, 13434624, 47872, 16777215, 3381759, 65793, 8417360, 13158, 11184810, 16763955, 4469538, 13421772, 13107, 15908203, 15908203, 15908203, 15908203, 9465872, 3355443, 6706500, 6702131, 0
    ],
    Qc = Array(s.length),
    Rc = [0, 0, 0, 0, 0, 0, 0, 5E3, 500, 500, 0, -1E3, -500, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 0, 0, 0, 1500, 4E3, 500, 0, 2E3, 0, 0, 5500, 0, 500, 0, 0, 0, 2E3, 2E3, 0, 3E3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 0],
    Sc = [
        [],
        [6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128,
            6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128
        ],
        [0, 0, 0, 0, 0, 4210752, 4210752, 0, 0, 4210752, 4210752, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 12632256, 12632256, 0, 0, 12632256, 12632256, 0, 0, 0, 0, 0],
        []
    ],
    Tc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.*".split(""),
    Uc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 62, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 0, 0, 0, 0, 0, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0
    ];
window.GameSave = Vc;

function Vc(a) {
    if (0 == a.length || 0 != cb) return "";
    Wc();
    Xc(1);
    for (var c = a = 0; c < db.length; c++) a += db.charCodeAt(c) * ((c & 15) + 1);
    return a = db + Tc[a & 63]
}
var Yc = "";
window.GameLoad = Zc;

function Zc(a) {
    if (5 < a.length) {
        for (var c = 0, b = 0; b < a.length - 1; b++) c += a.charCodeAt(b) * ((b & 15) + 1);
        if ((c & 63) != Uc[a.charCodeAt(a.length - 1)]) return -1;
        Yc = a.substring(0, a.length - 1);
        return 0
    }
    0 == a.length && 0 != Yc.length && (db = Yc, Yc = "", $c(1), ad());
    return -1
}
var bd = 0,
    cd = 0;

function dd(a) {
    var c, b;
    0 > oa && 9 < oa && (v = null);
    0 == a ? b = cd : cd = b = ed(1024);
    b += (ea | 1) * (b & 15 | 1);
    b += (fa | 1) * (b & 15 | 1);
    b += (oa | 1) * (b & 15 | 1);
    b += (qa | 1) * (b & 15 | 1);
    b += (ra | 1) * (b & 15 | 1);
    b += (va | 1) * (b & 15 | 1);
    b += (wa | 1) * (b & 15 | 1);
    b += (xa | 1) * (b & 15 | 1);
    b += (Aa | 1) * (b & 15 | 1);
    b += (Xa | 1) * (b & 15 | 1);
    b += (Ya | 1) * (b & 15 | 1);
    for (c = 0; c < $a.length; c++) b += ($a.charCodeAt(c) | 1) * (b & 15 | 1);
    for (c = 0; 8 > c; c++) b += (ab[c] | 1) * (b & 15 | 1);
    b += (Flag_3 ? 1 : 2) * (b & 15 | 1);
    b += (cb | 1) * (b & 15 | 1);
    b += (jb | 1) * (b & 15 | 1);
    b += (kb | 1) * (b & 15 | 1);
    b += (lb | 1) * (b & 15 | 1);
    b += (mb | 1) * (b & 15 | 1);
    0 == a ? bd != (b ^ 16777215) &&
        (v = null) : bd = b ^ 16777215
}

function Wc() {
    var a, c, b, d, e;
    for (a = Ya + 277760 + 7E3 - 1; 0 <= a; a--) k[a] = 0;
    for (b = 0; 280 > b; b++)
        for (c = 0; 496 > c; c++) d = ((b >> 2) + 2) * w + (c >> 2) + 2, e = Ya + 496 * b + c, 0 != x[d] && (x[d] == Fb ? k[e] = Nb : x[d] == Gb ? k[e] = Pb : x[d] == Hb && (k[e] = Qb));
    for (a = 0; a < fd; a++) d = a * gd, c = ~~y[d + 4].x - 8, b = ~~y[d + 4].y - 8, 0 > c || 496 <= c ? hd(a--) : 0 > b || 280 <= b ? hd(a--) : (c = c >> 2 << 2, b = b >> 2 << 2, e = Ya + 496 * b + c, 0 != k[e] ? hd(a--) : z[a] == id ? (k[e] = Dc, k[e + 138880] = jd[a]) : z[a] == kd ? (k[e] = Ec, k[e + 138880] = jd[a]) : z[a] == ld ? (k[e] = Fc, k[e + 138880] = 0) : z[a] == ld + 1 ? (k[e] = Fc, k[e + 138880] = 0) : z[a] == md ? (k[e] =
        Hc, k[e + 138880] = 0) : hd(a--));
    for (a = 0; a < nd; a++) 0 != A[a] && (c = ~~B[a].x - 8, b = ~~B[a].y - 8, 0 > c || 496 <= c ? od(a) : 0 > b || 280 <= b ? od(a) : (e = Ya + 496 * b + c, 0 != k[e] ? od(a) : (k[e] = Gc, k[e + 138880] = A[a])));
    for (a = p; a < pd; a++) c = ~~C[a].x - 8, b = ~~C[a].y - 8, 0 > c || 496 <= c ? qd(a--) : 0 > b || 280 <= b ? qd(a--) : D[a] == gc && E[a] != s[gc] ? qd(a--) : (e = Ya + 496 * b + c, 0 != k[e] ? qd(a--) : (k[e] = D[a], D[a] == Mb ? k[e + 138880] = G[a] : D[a] == $b ? k[e + 138880] = G[a] & 255 : D[a] == Kc && (k[e + 138880] = G[a] & 1)));
    Za = Ya + 138880;
    d = Ya;
    for (e = Ya + 138880; d < e; d++)
        if (k[d] == Mb || k[d] == $b || k[d] == Dc || k[d] == Ec ||
            k[d] == Fc || k[d] == Gc || k[d] == Hc || k[d] == Kc) k[Za++] = k[d + 138880];
    for (a = 0; a < rd; a++) k[Za] = sd[a], 0 == td[a] ? (k[Za + 1 * rd] = H[ud[a]] >> 16 & 255, k[Za + 2 * rd] = H[ud[a]] >> 8 & 255, k[Za + 3 * rd] = H[ud[a]] & 255) : 1 == td[a] ? (c = ~~y[ud[a] * gd + 4].x, b = ~~y[ud[a] * gd + 4].y, c = c >> 2 << 2, b = b >> 2 << 2, e = 0 + 512 * b + c, k[Za + 1 * rd] = e >> 16 & 255, k[Za + 2 * rd] = e >> 8 & 255, k[Za + 3 * rd] = e & 255) : 2 == td[a] && (c = ~~B[ud[a]].x, b = ~~B[ud[a]].y, e = 0 + 512 * b + c, k[Za + 1 * rd] = e >> 16 & 255, k[Za + 2 * rd] = e >> 8 & 255, k[Za + 3 * rd] = e & 255), 0 == vd[a] ? (k[Za + 4 * rd] = H[wd[a]] >> 16 & 255, k[Za + 5 * rd] = H[wd[a]] >> 8 & 255, k[Za +
        6 * rd] = H[wd[a]] & 255) : 1 == vd[a] ? (c = ~~y[wd[a] * gd + 4].x, b = ~~y[wd[a] * gd + 4].y, c = c >> 2 << 2, b = b >> 2 << 2, e = 0 + 512 * b + c, k[Za + 4 * rd] = e >> 16 & 255, k[Za + 5 * rd] = e >> 8 & 255, k[Za + 6 * rd] = e & 255) : 2 == vd[a] && (c = ~~B[wd[a]].x, b = ~~B[wd[a]].y, e = 0 + 512 * b + c, k[Za + 4 * rd] = e >> 16 & 255, k[Za + 5 * rd] = e >> 8 & 255, k[Za + 6 * rd] = e & 255), Za++;
    Za += 6 * rd;
    nb = mb
}

function Xc(a) {
    var c, b;
    if (0 == a) {
        var d = new Uint8Array(8680),
            e = new Uint8Array(768),
            f, g;
        for (c = 0; c < d.length; c++) d[c] = 0;
        for (c = 0; c < nd; c++) 0 != A[c] && (f = ~~B[c].x - 8, g = ~~B[c].y - 8, 0 > f || 496 <= f || 0 > g || 280 <= g || (f >>= 2, g >>= 2, d[124 * g + f] = Gc));
        for (g = c = 0; 280 > g; g += 4)
            for (f = 0; 496 > f; f += 4) 0 == d[c] && (b = Ya + 496 * g + f, 0 == k[b] && (b += 497), d[c] = k[b]), 12 == qa ? d[c] != r && d[c] != fc && d[c] != kc && d[c] != nc && d[c] != qc && d[c] != zc && (d[c] = 0) : 14 == qa && (d[c] = 0 == d[c] ? Wb : 0), c++;
        g = s;
        10 == qa && (g = Qc);
        f = new Int32Array(256);
        for (c = 0; 256 > c; c++) f[c] = 0;
        for (c = 0; c < d.length; c++) f[d[c]]++;
        var m = ib = 0;
        for (b = 0; 256 > b; b++)
            if (0 != f[b]) {
                e[ib++] = g[b] >> 16 & 255;
                e[ib++] = g[b] >> 8 & 255;
                e[ib++] = g[b] & 255;
                for (c = 0; c < d.length; c++) d[c] == b && (d[c] = m);
                m++
            }
        16 == qa && (e[0] = (s[Mc[ea]] >> 16 & 255) + (s[Mc[fa]] >> 16 & 255) >> 1 & 255, e[1] = (s[Mc[ea]] >> 8 & 255) + (s[Mc[fa]] >> 8 & 255) >> 1 & 255, e[2] = (s[Mc[ea]] & 255) + (s[Mc[fa]] & 255) >> 1 & 255);
        fb = "";
        gb = d.length;
        for (c = 0; c < gb;) {
            b = d[c++];
            for (f = 0; c < gb && 255 != f && b == d[c]; c++) f++;
            fb += String.fromCharCode(b);
            fb += String.fromCharCode(f)
        }
        gb = fb.length;
        fb = window.btoa(fb);
        hb = "";
        for (c = 0; c < ib; c++) hb += String.fromCharCode(e[c]);
        hb = window.btoa(hb)
    }
    b = 0;
    k[b++] = 0;
    k[b++] = 0;
    for (c = k[b++] = 0; 8 > c; c++) k[b++] = ab[c];
    k[b++] = nb & 255;
    k[b++] = nb >> 8;
    k[b++] = Mc[ea];
    k[b++] = Mc[fa];
    k[b++] = oa;
    k[b++] = qa;
    k[b++] = wa;
    k[b++] = xa;
    k[b++] = Flag_2 ? 0 : 1;
    k[b++] = ya;
    for (c = 0; 8 > c; c++) k[b++] = 0;
    if (0 == a)
        for (ob = 0, c = Ya; c < Ya + 138880; c++) 0 < k[c] && (ob += c & 255);
    b = 0;
    for (c = 3; c < Za; c++) b = 128 > k[c] ? b + k[c] * ((c & 15) + 1) : b + (k[c] - 256) * ((c & 15) + 1);
    k[1] = b & 255;
    k[2] = b >> 8 & 255;
    e = [];
    for (c = d = 0; c < Za;) {
        b = k[c++];
        for (f = 0; c < Za && 255 != f && b == k[c]; c++) f++;
        e[d++] = b;
        e[d++] = f
    }
    if (1 == a) {
        var n = [],
            t = 0;
        f = Array(4096);
        g = 1;
        for (c = 0; c < d;) {
            var m = 0,
                u = 1;
            if (c < d - 1)
                for (var F = 1; F < g; F++)
                    if (f[F].length == u) {
                        for (b = 0; b < u && f[F][b] == e[c + b]; b++);
                        if (b == u && (m = F, u++, c + u >= d)) break
                    }
            n[t++] = m >> 8;
            n[t++] = m & 255;
            n[t++] = e[c + u - 1];
            if (4096 > g) {
                f[g] = Array(u);
                for (b = 0; b < u; b++) f[g][b] = e[c + b];
                g++
            }
            c += u
        }
    }
    0 == a ? (a = e, eb = d) : (a = n, eb = t);
    db = "";
    for (c = 0; c < eb; c++) db += String.fromCharCode(a[c]);
    db = window.btoa(db)
}

function $c(a) {
    var c, b = window.atob(db),
        d = [];
    eb = b.length;
    for (c = 0; c < eb; c++) d[c] = b.charCodeAt(c);
    if (1 == a) {
        var b = [],
            e = 0,
            f = Array(4096),
            g = 1;
        for (c = 0; c < eb;) {
            var m = 0,
                n = 1,
                m = d[c++] << 8,
                m = m + d[c++];
            if (0 < m) {
                for (a = 0; a < f[m].length; a++) b[e++] = f[m][a];
                n = 1 + f[m].length
            }
            b[e++] = d[c++];
            if (4096 > g) {
                f[g] = Array(n);
                for (a = 0; a < n; a++) f[g][a] = b[e - n + a];
                g++
            }
        }
        d = b;
        eb = e
    }
    for (c = Za = 0; c < eb;)
        for (b = d[c++], e = d[c++], k[Za++] = b, a = 0; a < e; a++) k[Za++] = b;
    if (0 != Za) {
        d = 0;
        for (c = 3; c < Za; c++) d = 128 > k[c] ? d + k[c] * ((c & 15) + 1) : d + (k[c] - 256) * ((c & 15) + 1);
        if (k[1] != (d & 255)) Za =
            0;
        else if (k[2] != (d >> 8 & 255)) Za = 0;
        else {
            a = 0;
            a++;
            a++;
            a++;
            for (c = 0; 8 > c; c++) k[a++] != ab[c] && (jb = 2, lb = 6);
            nb = k[a++];
            nb += k[a++] << 8;
            if (0 != k[a])
                for (c = 0; c < Mc.length; c++) k[a] == Mc[c] && (ea = c);
            a++;
            if (0 != k[a])
                for (c = 0; c < Mc.length; c++) k[a] == Mc[c] && (fa = c);
            a++;
            oa = k[a++];
            qa = k[a++];
            wa = k[a++];
            xa = k[a++];
            Flag_2 = 0 == k[a++] ? true : false;
            ya = k[a++]
        }
    }
}

function ad() {
    var a, c, b, d, e;
    xd(1);
    if (0 != Za) {
        e = Ya + 138880;
        b = 8;
        for (d = Ya; 288 > b; b++)
            for (c = 8; 504 > c; c++, d++) 0 != k[d] && (k[d] == Nb ? (x[(b >> 2) * w + (c >> 2)] = Fb, I[b * h + c] = Jb) : k[d] == Pb ? (x[(b >> 2) * w + (c >> 2)] = Gb, I[b * h + c] = Jb) : k[d] == Qb ? (x[(b >> 2) * w + (c >> 2)] = Hb, I[b * h + c] = Jb) : k[d] == Dc ? yd(c, b, Dc, k[e++]) : k[d] == Ec ? yd(c, b, Ec, k[e++]) : k[d] == Fc ? (yd(c, b, Fc, 0), e++) : k[d] == Gc ? zd(c, b, k[e++]) : k[d] == Hc ? (yd(c, b, Hc, 0), e++) : (a = Ad(c, b, k[d], 0), k[d] == Mb ? (J[a].x = 0.01 * Math.cos(k[e] * ONE_PI / 32), J[a].y = 0.01 * -Math.sin(k[e] * ONE_PI / 32), G[a] = k[e], e++, I[b * h + c] = l) :
                k[d] == $b ? G[a] = k[e++] : k[d] == Kc && (G[a] = k[e++], E[a] = 0 == G[a] ? 6702131 : 3359829)));
        Cd();
        c = new Vector2D;
        var f;
        for (a = p; a < pd; a++) f = p + Math.floor(Math.random() * (pd - p)), c.set(C[a]), C[a].set(C[f]), C[f].set(c), c.set(J[a]), J[a].set(J[f]), J[f].set(c), b = D[a], D[a] = D[f], D[f] = b, b = G[a], G[a] = G[f], G[f] = b, b = E[a], E[a] = E[f], E[f] = b, b = H[a], H[a] = H[f], H[f] = b, I[H[a]] = D[a] == Mb ? l : a, I[H[f]] = D[f] == Mb ? l : f;
        f = Math.floor((Za - e) / 7);
        for (a = e; a < e + f; a++) {
            c = (k[a + 1 * f] & 255) << 16 | (k[a + 2 * f] & 255) << 8 | k[a + 3 * f] & 255;
            b = (k[a + 4 * f] & 255) << 16 | (k[a + 5 * f] & 255) << 8 | k[a + 6 * f] & 255;
            var g = 0,
                m = d = 0,
                n = 0;
            d = Ya + 496 * ((c >> 9) - 8) + ((c & 511) - 8);
            g = k[d] == Dc ? 1 : k[d] == Ec ? 1 : k[d] == Fc ? 1 : k[d] == Gc ? 2 : 0;
            d = Ya + 496 * ((b >> 9) - 8) + ((b & 511) - 8);
            d = k[d] == Dc ? 1 : k[d] == Ec ? 1 : k[d] == Fc ? 1 : k[d] == Gc ? 2 : 0;
            0 == g ? m = I[c] : 1 == g ? m = Dd(c) : 2 == g && (m = Ed(c));
            0 == d ? n = I[b] : 1 == d ? n = Dd(b) : 2 == d && (n = Ed(b));
            Fd(g, d, m, n, k[a + 0 * f])
        }
        mb = nb
    }
}
window.fff = Gd;

function Gd() {
    var a, c, b;
    for (a = 0; 138880 > a; a++) La[a] = 0, Ma[a] = 0;
    for (a = 0; a < pd; a++) c = ~~C[a].x - 8, b = ~~C[a].y - 8, 0 > c || 496 <= c || 0 > b || 280 <= b || (c = 496 * b + c, La[c] = D[a], D[a] == Mb ? Ma[c] = G[a] : D[a] == $b ? Ma[c] = G[a] & 255 : D[a] == Kc && (Ma[c] = G[a] & 1));
    Ha > Ja && (c = Ha, Ha = Ja, Ja = c);
    Ia > Ka && (b = Ia, Ia = Ka, Ka = b);
    for (a = Sa = 0; a < rd && 500 > Sa; a++) 0 != td[a] || 0 != vd[a] || ~~C[ud[a]].x < Ha || Ja < ~~C[ud[a]].x || ~~C[ud[a]].y < Ia || Ka < ~~C[ud[a]].y || ~~C[wd[a]].x < Ha || Ja < ~~C[wd[a]].x || ~~C[wd[a]].y < Ia || Ka < ~~C[wd[a]].y || (Na[Sa] = ~~C[ud[a]].x - Ha, Oa[Sa] = ~~C[ud[a]].y - Ia,
        Pa[Sa] = ~~C[wd[a]].x - Ha, Qa[Sa] = ~~C[wd[a]].y - Ia, Ra[Sa] = sd[a], Sa++)
}
window.fff = Hd;

function Hd() {
    var a, c, b, d, e = ia - Math.floor((Ja - Ha) / 2) - Ha,
        f = ja - Math.floor((Ka - Ia) / 2) - Ia;
    for (b = Ia - 8; b <= Ka - 8; b++)
        if (!(0 > f + b || 280 <= f + b))
            for (c = Ha - 8; c <= Ja - 8; c++) 0 > e + c || 496 <= e + c || (d = 496 * b + c, 0 != La[d] && I[(f + b + 8) * h + (e + c + 8)] == Ib && (a = Ad(e + c + 8, f + b + 8, La[d], 0), 0 <= a && (La[d] == Mb ? (J[a].x = 0.01 * Math.cos(Ma[d] * ONE_PI / 32), J[a].y = 0.01 * -Math.sin(Ma[d] * ONE_PI / 32), G[a] = Ma[d], I[(f + b + 8) * h + (e + c + 8)] = l) : La[d] == $b ? G[a] = Ma[d] : La[d] == Kc && (G[a] = Ma[d], E[a] = 0 == G[a] ? 6702131 : 3359829))));
    e = ia - Math.floor((Ja - Ha) / 2);
    f = ja - Math.floor((Ka - Ia) / 2);
    for (a = 0; a < Sa; a++) 8 > e + Na[a] || 504 <= e + Na[a] ||
        8 > f + Oa[a] || 288 <= f + Oa[a] || 8 > e + Pa[a] || 504 <= e + Pa[a] || 8 > f + Qa[a] || 288 <= f + Qa[a] || (c = I[(f + Oa[a]) * h + e + Na[a]], b = I[(f + Qa[a]) * h + e + Pa[a]], c >= p && b >= p && c != b && 255 != (Id[c] & 255) && 255 != (Id[b] & 255) && Fd(0, 0, c, b, Ra[a]))
}

function Jd(a, c, b, d) {
    for (var e = a;;)
        if (D[I[e]] == c) L(I[e], b, d, s[b]), e--;
        else break;
    e++;
    for (var f = a + 1;;)
        if (D[I[f]] == c) L(I[f], b, d, s[b]), f++;
        else break;
    f--;
    for (a = e; a <= f; a++) D[I[a - h]] == c && Jd(a - h, c, b, d), D[I[a + h]] == c && Jd(a + h, c, b, d)
}
var Kd = 0;

function Ld(a, c, b) {
    if (0 == Kd) {
        $a = null != a ? a : "";
        for (a = 0; 8 > a && a < $a.length; a++) ab[a] = $a.charCodeAt(a);
        Flag_3 = 0 == c ? true : false;
        cb = null != b ? b : 0;
        Md("DAN-BALL.jp (C) 2011 ha55ii");
        HTML_Canvas.width = h;
        HTML_Canvas.height = ba;
        HTML_Canvas.width = 496;
        HTML_Canvas.height = 422;
        for (c = 0; 256 > c; c++) Pd[c] = false, Qd[c] = false, Rd[c] = false, Sd[c] = false, Td[c] = false, Ud[c] = false, Vd[c] = 0, Wd[c] = 0;
        for (c = 0; 10 > c; c++) Vd[48 + c] = 48 + c;
        for (c = 0; 9 > c; c++) Wd[49 + c] = 33 + c;
        for (c = 0; 4 > c; c++) Vd[37 + c] = 37 + c;
        for (c = 0; 4 > c; c++) Wd[37 + c] = 37 + c;
        Vd[13] = Wd[13] = 13;
        Vd[16] = Wd[16] = 16;
        Vd[17] = Wd[17] = 17;
        Vd[18] = Wd[18] = 18;
        Vd[32] = Wd[32] = 32;
        Vd[186] = 58;
        Wd[186] = 42;
        Vd[187] = 59;
        Wd[187] = 43;
        Vd[188] = 44;
        Wd[188] = 60;
        Vd[189] = 45;
        Wd[189] = 61;
        Vd[190] = 46;
        Wd[190] = 62;
        Vd[191] = 47;
        Wd[191] = 63;
        Vd[192] = 64;
        Wd[192] = 96;
        Vd[219] = 91;
        Wd[219] = 123;
        Vd[220] = 92;
        Wd[220] = 124;
        Vd[221] = 93;
        Wd[221] = 125;
        Vd[222] = 94;
        Wd[222] = 126;
        Vd[226] = 92;
        Wd[226] = 95;
        Vd[58] = 58;
        Wd[58] = 42;
        Vd[59] = 59;
        Wd[59] = 43;
        Vd[173] = 45;
        Wd[173] = 61;
        Vd[64] = 64;
        Wd[64] = 96;
        Vd[160] = 94;
        Wd[160] = 126;
        for (c = 0; 1024 > c; c++) Xd[c] = c / 1024;
        for (c = 0; 1024 > c; c++) b = Math.floor(1024 * Math.random()), a = Xd[c], Xd[c] = Xd[b], Xd[b] = a;
        Yd = Math.floor(1024 * Math.random()) & 1023;
        Rnd_Odd = Math.floor(512 * Math.random()) | 1;
        for (c = 0; c < h * ba; c++) v[c] = 0;
        for (c = 0; c < h * ba * 4; c++) $d[c] = 255;
        N.m("font.gif", 8, 12);
        ae() ? Kd-- : Kd++
    }
    if (1 == Kd) {
        c = N.l;
        if (0 == c.j && c.c.complete) {
            be--;
            b = c.c.width;
            a = c.c.height;
            if (0 == b || 0 == a) throw delete c.c, c.file = "", ce;
            var d = document.createElement("canvas");
            d.width = b;
            d.height = a;
            d = d.getContext("2d");
            d.drawImage(c.c, 0, 0);
            d = d.getImageData(0, 0, b, a).data;
            ge(c, b, a);
            b = 0;
            for (a = d.length; b < a; b += 4) c.a[b >> 2] = 0 == d[b + 3] ? -1 : d[b + 0] << 16 | d[b + 1] << 8 | d[b + 2];
            delete c.c;
            c.j = 1
        }
        0 != be ? setTimeout(Ld, ie()) : Kd++
    }
    if (2 == Kd) {
        0 == $a.length ? (jb = 2, lb = 1) : 0 != cb && (jb =
            2, lb = 3);
        xd(0);
        Wc();

        if( 0 < cb ){
            c = "/score/dust3.php?a=";
            c += cb;
            Make_HTTP_Request(c, "");
            if ( 1 == Request_Status && "ok" == Request_Buffer[0]){
                db = Request_Buffer[1];
                $c(0);
                if(0 < Za){
                    ad();
                    kb = 1;
                }
                else
                    kb = 2;
            }
            else{
                va = 1;
            }
        }
        dd(1);
        for (a = 0; a < s.length; a++) c = Math.floor((2989 * (s[a] >> 16 & 255) + 5866 * (s[a] >> 8 & 255) + 1145 * (s[a] & 255)) / 1E4), Qc[a] = c << 16 | c << 8 | c;
        ne(0, 0, h, ba, 4210752);
        O(N, 13, 291, "POWDER", 15908203, 0);
        O(N, 13, 305, "WATER", 4210943, 0);
        O(N, 13, 319, "FIRE", 16728128, 0);
        O(N, 13, 333, "SEED", 9486400, 0);
        oe(13, 347, "G-POWDER", -1, 0, -2);
        oe(13, 347, "G-POWDER", 11567184, -1, -2);
        oe(13, 361, "FAN", 8421631, 0, -1);
        O(N, 13, 375, "ICE", 13684991, 0);
        O(N, 13, 389, "S-BALL", 16728224, 0);
        O(N, 13, 403, "CLONE", 9465872, 0);
        oe(68, 291, "F-WORKS", 16750950, 0, -1);
        O(N, 68, 305, "OIL", 8400928, 0);
        O(N, 68, 319, "C-4", 16777164, 0);
        O(N, 68, 333, "SAND", 16764006, 0);
        O(N, 68, 347, "MUD", 6697728, 0);
        O(N, 68, 361, "STONE", 8421504, 0);
        O(N, 68, 375, "LAVA", 16737843, 0);
        O(N, 68, 389, "VIRUS", 8388736, 0);
        O(N, 68, 403, "NITRO", 4486912, 0);
        O(N, 123, 291, "ANT", 12615872, 0);
        O(N, 123, 305, "TORCH", 16752672, 0);
        O(N, 123, 319, "GAS", 13408665, 0);
        O(N, 123, 333, "SOAPY",
            15790320, 0);
        oe(123, 347, "THUNDER", 16776992, 0, -1);
        O(N, 123, 361, "METAL", 4210752, 0);
        O(N, 123, 375, "BOMB", 6710784, 0);
        O(N, 123, 389, "LASER", 13369344, 0);
        O(N, 123, 403, "ACID", 13434624, 0);
        O(N, 178, 291, "VINE", 47872, 0);
        O(N, 178, 305, "SALT", 16777215, 0);
        O(N, 178, 319, "GLASS", 4210752, 0);
        O(N, 178, 333, "BIRD", 8417360, 0);
        O(N, 178, 347, "FISH", 13158, 0);
        oe(178, 361, "MERCURY", 11184810, 0, -1);
        O(N, 178, 375, "SPARK", 16763955, 0);
        O(N, 178, 389, "FUSE", 4469538, 0);
        O(N, 178, 403, "CLOUD", 13421772, 0);
        O(N, 233, 291, "PUMP", 13107, 0);
        oe(233, 305, "CRYSTAL", 3355443,
            0, -1);
        O(N, 233, 319, "JBOMB", 6706500, 0);
        oe(233, 333, "Conveyer", -1, 0, -2);
        oe(233, 333, "Conv    ", 6702131, -1, -2);
        oe(233, 333, "    eyer", 3359829, -1, -2);
        O(N, 288, 291, "WIND", 8421631, 0);
        oe(288, 305, "CYCLONE", 8421631, 0, -1);
        O(N, 288, 319, "DRAG", 16777215, 0);
        O(N, 288, 347, "PLAYER", 15908203, 0);
        oe(288, 361, "FIGHTER", 15908203, 0, -1);
        O(N, 288, 375, "BALL", 15908203, 0);
        O(N, 288, 389, "CREATE", 9465872, 0);
        O(N, 343, 291, "BLOCK", 8421504, 0);
        O(N, 343, 305, "ERASE", 8421504, 0);
        O(N, 343, 319, "CLEAR", 16777215, 0);
        O(N, 343, 333, "BH", 0, 8421504);
        O(N, 343, 347,
            "WH", 4210752, 12632256);
        oe(343, 403, "MiniMap", 16752800, 0, -1);
        O(N, 398, 305, "TEXT", 16777215, 0);
        oe(397, 319, "Copy", -1, 0, -2);
        oe(397, 319, "Copy", 16777215, -1, -2);
        oe(421, 319, "Paste", -1, 0, -3);
        oe(421, 319, "Paste", 16777215, -1, -3);
        oe(398, 333, "PEN", 16777215, 0, -1);
        oe(398, 347, "PEN-S ", 16777215, 0, -1);
        oe(398, 361, "SCALE", 16777215, 0, -1);
        oe(398, 375, "|", 16777215, 0, -1);
        oe(398, 389, "SPEEDx", 16777215, 0, -1);
        oe(397, 403, "Start", -1, 0, -3);
        oe(397, 403, "Start", 16777215, -1, -3);
        oe(423, 403, "Stop", -1, 0, -2);
        oe(423, 403, "Stop", 16777215, -1, -2);
        O(N, 453, 291, "UPLOAD", 16752800, 0);
        O(N, 453, 305, "SAVE", 16752800, 0);
        O(N, 453, 319, "LOAD", 16752800, 0);
        O(N, 453, 347, "G-", -1, 0);
        oe(453, 361, "SIDE-", -1, 0, -3);
        oe(453, 361, "SIDE-", 16777215, -1, -3);
        oe(453, 375, "BG-", -1, 0, -2);
        oe(453, 375, "BG-", 16777215, -1, -2);
        O(N, 453, 389, "GRID", 8388608, 0);
        O(N, 453, 403, "RESET", 16777215, 0);
        O(N, 69, 417, "x    y", -1, 0);
        O(N, 153, 417, "dot", -1, 0);
        O(N, 230, 417, "j", -1, 0);
        O(N, 285, 417, "DAN-BALL.jp (C) 2011 ha55ii", -1, 0);
        ge(Eb, h, ba);
        for (a = 0; a < h * ba; a++) Eb.a[a] = v[a] & 16777215;
        for (c = h * ba - 1; 0 <= c; c--) v[c] = 0;
        pe()
    }
}

function xd(a) {
    var c, b, d;
    for (d = b = 0; b < qe; b++)
        for (c = 0; c < w; c++, d++) x[d] = 0, P[d] = 0, Q[d] = 0, re[d] = 0, se[d] = 0, te[d] = 0;
    Cd();
    pd = p;
    for (c = 0; c < 296 * h; c++) I[c] = Ib;
    for (b = 0; 296 > b; b++)
        for (c = 0; c < h; c++) ue[b * h + c] = 8 > c || h - 8 <= c || 8 > b || 288 <= b ? false : true, R[b * h + c] = (b >> 2) * w + (c >> 2);
    D[0] = Lb;
    D[1] = Mb;
    D[2] = Nb;
    D[3] = Gc;
    rd = 0;
    ve = 64;
    for (c = fd = 0; c < we * gd; c++) xe[c] = 0;
    for (c = 0; c < we; c++) z[c] = 0;
    for (c = 0; c < we; c++) ye[c] = 0;
    for (c = 0; c < we; c++) jd[c] = 0;
    for (c = 0; c < we; c++) ze[c] = 0;
    for (c = 0; c < we; c++) Ae[c] = 0;
    for (c = 0; c < nd; c++) A[c] = 0;
    for (c = 0; c < nd; c++) S[c] = 0;
    for (c = 0; c <
        nd; c++) Be[c] = 0;
    for (c = 0; c < nd; c++) Ce[c] = 0;
    if (0 == a) {
        for (a = 2; a < De; a++) x[2 * w + a] = Fb;
        for (a = 2; a < De; a++) x[(qe - 3) * w + a] = Fb;
        for (c = 2; c < Ee; c++) x[c * w + 2] = Fb;
        for (c = 2; c < Ee; c++) x[c * w + w - 3] = Fb
    }
    for (c = 8; 288 > c; c++)
        for (a = 8; 504 > a; a++) x[(c >> 2) * w + (a >> 2)] >= Fb && (I[c * h + a] = Jb);
    mb = 0
}
window.fff = Fe;

function Fe() {
    if (0 < Ge) Ge++;
    else {
        var a, c, b, d, e, f, g;
        d = new Vector2D;
        dd(0);
        Vc("");
        Zc("");
        280 <= He && Ie && false == Flag_1 ? Flag_1 = true : 280 > He && Ie && true == Flag_1 && (Flag_1 = false);
        Ie && 0 == Xa && (Pd[48] ? oa = 0 : Pd[49] ? oa = 1 : Pd[50] ? oa = 2 : Pd[51] ? oa = 3 : Pd[52] ? oa = 4 : Pd[53] ? oa = 5 : Pd[54] ? oa = 6 : Pd[55] ? oa = 7 : Pd[56] ? oa = 8 : Pd[57] ? oa = 9 : Pd[32] ? va = Je(va + 1, 1) : Pd[10] || Pd[13] ? va = 1 : Pd[108] ? (ad(), pa = -10) : Pd[106] && (Va = Je(Va + 1, 3)));
        f = 13;
        g = 291;
        if (Ke(f - 4 - 8, g - 1 - 8, 495, 126) && Flag_1 && 0 == Xa)
            if (e = Math.floor((Le - (f - 4 - 8)) / 55), c = Math.floor((He - (g - 1 - 8)) / 14), c = 9 * e + c, 5 == c) Me ? (5 == ea && (Fa = Je(Fa + 8, 56)), ea = c) : Ne && (5 ==
                fa && (Fa = Je(Fa - 8, 56)), fa = c);
            else if (40 != c && 41 != c && 42 != c && 43 != c && 44 != c && 48 != c)
            if (53 == c) Me ? (53 == ea && (Ta = Je(Ta + 1, 5)), ea = c) : Ne && (53 == fa && (Ta = Je(Ta - 1, 5)), fa = c);
            else if (59 != c && 60 != c && 61 != c)
            if (62 == c) Wa = Je(Wa + Oe, 1);
            else if (63 != c)
            if (65 == c) Me && (65 == ea && (Ga = 1 - Ga), ea = c), Ne && (65 == fa && (Ga = 1 - Ga), fa = c);
            else if (66 == c) Aa = Je(Aa + Oe, 3);
        else if (67 == c) oa = Je(oa + Oe, 9);
        else if (68 == c) {
            if (0 == ra && (Me || Ne))
                for (b = 288 * h - 1; 4096 <= b; b--) Eb.a[b] = v[b];
            Me ? (68 == ea && 4 > ra ? (ra++, sa += 496 >> ra >> 1, ta += 280 >> ra >> 1) : 68 == ea && (ra = 0), ea = c) : Ne && (68 ==
                fa && 0 < ra ? (sa -= 496 >> ra >> 1, ta -= 280 >> ra >> 1, ra--) : 68 == fa && (ra = 4, sa += 248 - (496 >> ra >> 1) - 1, ta += 140 - (280 >> ra >> 1) - 2), fa = c);
            sa = Pe(sa, 0, 496 - (496 >> ra));
            ta = Pe(ta, 0, 280 - [280, 140, 70, 35, 18][ra]);
            if (0 == ra && (Me || Ne))
                for (b = 288 * h - 1; 4096 <= b; b--) v[b] = Eb.a[b]
        } else if (69 == c) ua = Je(ua + Oe, 1);
        else if (70 == c) wa = Je(wa + Oe, 3);
        else if (71 == c) va = Je(va + Oe, 1);
        else if (72 == c) 0 != Oe && (Xa = 1);
        else if (73 == c) {
            if (Me || Ne) Wc(), pa = 10
        } else if (74 == c) 0 != Oe && (ad(), pa = -10);
        else if (75 != c)
            if (76 == c) {
                if (0 != Oe) {
                    Flag_2 = Flag_2 ? false : true;
                    for (b = 288 * h - 1; 4096 <= b; b--) Qe[b] +=
                        Flag_2 ? 1 : -1;
                    Re = 1;
                    Se()
                }
            } else if (77 == c) {
            if (xa = Je(xa + Oe, 1), 0 != Oe)
                if (0 == xa) {
                    for (a = 2; a < De; a++) P[128 + a] = 0, P[9216 + a] = 0, Q[128 + a] = 0, Q[9216 + a] = 0, re[128 + a] = 0, re[9216 + a] = 0, se[128 + a] = 0, se[9216 + a] = 0, te[128 + a] = 0, te[9216 + a] = 0;
                    for (c = 256; c < Ee << 7; c += w) P[c + 1] = 0, P[c + De] = 0, Q[c + 1] = 0, Q[c + De] = 0, re[c + 1] = 0, re[c + De] = 0, se[c + 1] = 0, se[c + De] = 0, te[c + 1] = 0, te[c + De] = 0
                } else if (1 == xa) {
                for (a = 2; a < De; a++) P[128 + a] = P[9088 + a], P[9216 + a] = P[256 + a], Q[128 + a] = Q[9088 + a], Q[9216 + a] = Q[256 + a], re[128 + a] = re[9088 + a], re[9216 + a] = re[256 + a], se[128 + a] = se[9088 + a],
                    se[9216 + a] = se[256 + a], te[128 + a] = te[9088 + a], te[9216 + a] = te[256 + a];
                for (c = 256; c < Ee << 7; c += w) P[c + 1] = P[c + De - 1], P[c + De] = P[c + 2], Q[c + 1] = Q[c + De - 1], Q[c + De] = Q[c + 2], re[c + 1] = re[c + De - 1], re[c + De] = re[c + 2], se[c + 1] = se[c + De - 1], se[c + De] = se[c + 2], te[c + 1] = te[c + De - 1], te[c + De] = te[c + 2]
            }
        } else if (78 == c) {
            if (qa = Je(qa + Oe, 16), 0 != Oe)
                for (a = 0; a < Db.length; a++) Db[a] = 0
        } else 79 == c ? ya = Je(ya + Oe, 9) : 80 == c ? 0 != Oe && xd(0) : Me ? ea = c : Ne && (fa = c);
        if (!Flag_1 && 0 == Xa) {
            ka = ia;
            la = ja;
            ia = Pe(Le + 2 * ha, 2 * ha, ha * (w - 2) - 1);
            ja = Pe(He + 2 * ha, 2 * ha, ha * (qe - 2) - 1);
            0 < ra && (ia = 2 * ha + Math.floor(sa) +
                (Le >> ra), ja = 2 * ha + Math.floor(ta) + (He >> ra), ia = Pe(ia, 2 * ha, ha * (w - 2) - 1), ja = Pe(ja, 2 * ha, ha * (qe - 2) - 1));
            if (1 == Aa)
                if (Me || Ne) Da = ia, Ea = ja;
                else {
                    if (Te || Ue) ka = Da, la = Ea
                }
            else if (2 == Aa && (Ve || We)) {
                if (Me || Ne) Ba = 0;
                0 == Ba && (Get_Module(ia - ka) > Get_Module(ja - la) ? Ba = 1 : Get_Module(ia - ka) < Get_Module(ja - la) ? Ba = 2 : (ia = ka, ja = la));
                1 == Ba ? ja = la : 2 == Ba && (ia = ka)
            }
            Set_XY(d, ia, ja);
            Set_XY(na, ka - 5 * na.x, la - 5 * na.y);
            c = na;
            e = 5;
            b = a = 0.5;
            Ye(Ze, d, c);
            e -= Get_Unitary_Vector(Ze);
            a *= e;
            b *= e;
            d.x += Ze.x * a;
            d.y += Ze.y * a;
            c.x -= Ze.x * b;
            c.y -= Ze.y * b;
            Ye(na, d, na);
            Get_Unitary_Vector(na);
            af(0);
            af(1);
            if (Me || Ne) mb = Pe(mb + 1, 0, 65535)
        }
        dd(1);
        c = [1, 2, 4, 8];
        for (d =
            0; d < c[wa] && (1 != va || Ie && 0 == Xa && Pd[10] | Pd[13]); d++) bf++, cf(), df(), ef(), ff(), gf();
        if (0 != ra && 0 != ua)
            for (b = 288 * h - 1; 4096 <= b; b--) v[b] = Eb.a[b];
        hf();
        if (0 != ra) {
            for (b = 288 * h - 1; 4096 <= b; b--) Eb.a[b] = v[b];
            e = 8 + Math.floor(sa);
            c = 8 + Math.floor(ta);
            3 >= ra ? jf(8, 280, e, c, 280 >> ra) : 4 == ra && (jf(8, 272, e, c, 17), jf(280, 8, e, c + 17, 1))
        }
        d = h * ba;
        for (b = 288 * h; b < d; b++) v[b] = Eb.a[b];
        if (Ke(f - 4 - 8, g - 1 - 8, 495, 126) && Flag_1 && 0 == Xa)
            for (e = Math.floor((Le - (f - 4 - 8)) / 55), c = Math.floor((He - (g - 1 - 8)) / 14), d = f - 4 + 55 * e, a = g - 1 + 14 * c, c = 55, e = 13, c = d + c > h ? h : ~~(d + c), e = a + e > ba ? ba : ~~(a + e), d = 0 > d ? 0 : ~~d, a = (0 > a ? 0 : ~~a) *
                h + d, b = h - (c - d), c = a + c - d, e *= h; a < e; a += b, c += h)
                for (; a < c; a++) 4210752 == (v[a] & 16777215) && (v[a] = 4194304);
        Flag_1 && kf(8, 288, 504, 288, 6684672);
        oe(f + 0 - 2, g + 70, "    " + Math.floor(360 * Fa / 64) + "'", 8421631, 0, -1);
        oe(f + 275, g + 112, "JOINT-n J-left J-right J-scale J-none J-blind".split(" ")[Ta], 15908203, 0, -1);
        1 == Wa && oe(f + 330, g + 112, "MiniMap", 16777215, 16711680, -1);
        0 == Ga ? oe(f + 385 - 1, g + 28, "Copy", 16728128, -1, -2) : oe(f + 385 + 23, g + 28, "Paste", 16728128, -1, -3);
        c = ["free", "line", "lock", "paint"];
        3 > Aa ? oe(f + 385 + 1, g + 42, "   " + c[Aa], 16777215, 0, -1) : oe(f + 385 + 4,
            g + 42, "   " + c[Aa], 16777215, 0, -2);
        oe(f + 385, g + 56, "      " + oa, 16777215, 0, -1);
        oe(f + 385, g + 70, "      " + ["x1", "x2", "x4", "x8", "16"][ra], 16777215, 0, -2);
        oe(f + 385, g + 84, " " + ["normal", "exact"][ua], 16777215, 0, -1);
        oe(f + 385, g + 98, "       " + (1 << wa), 16777215, 0, -2);
        0 == va ? oe(f + 385 - 1, g + 112, "Start", 16728128, -1, -3) : oe(f + 385 + 25, g + 112, "Stop", 16728128, -1, -2);
        2 == jb && O(N, f + 440, g + 0, "UPLOAD", 5259328, 3158064);
        0 < pa && (pa--, 1 < pa && O(N, f + 440, g + 14, "SAVE", 16777215, 16711680));
        0 > pa && (pa++, -1 > pa && O(N, f + 440, g + 28, "LOAD", 16777215, 16711680));
        O(N, f + 440, g + 56, Flag_2 ? "  on" : "  off", -1, 0);
        c = ["OFF", "LOOP"];
        oe(f + 440 + 25, g + 70, c[xa], -1, 0, -2);
        oe(f + 440 + 25, g + 70, c[xa], 16777215, -1, -2);
        c = "non air line blur g-map shade aura light toon mesh gray track dark TG silet mosaic color ".split(" ");
        15 == qa ? (oe(f + 440 + 3, g + 84, "   " + c[qa], -1, 0, -3), oe(f + 440 + 3, g + 84, "   " + c[qa], 16777215, -1, -3)) : (oe(f + 440, g + 84, "   " + c[qa], -1, 0, -2), oe(f + 440, g + 84, "   " + c[qa], 16777215, -1, -2));
        O(N, f + 440, g + 98, "     " + ya, 8388608, 0);
        ne(f - 4 + 55 * Math.floor(ea / 9), g + 1 + ea % 9 * 14, 3, 4, 16711680);
        ne(f - 4 + 55 * Math.floor(fa / 9), g +
            6 + fa % 9 * 14, 3, 4, 255);
        O(N, f + 56, g + 126, " " + (ia - 8), -1, 0);
        O(N, f + 56, g + 126, "      " + (ja - 8), -1, 0);
        O(N, f + 140, g + 126, "   " + (lf - pd), -1, 0);
        0 == Va ? O(N, f + 217, g + 126, " " + rd, -1, 0) : 1 == Va ? O(N, f + 217, g + 126, " " + rd, -1, 14540253) : 2 == Va ? O(N, f + 217, g + 126, " " + rd, -1, 2236962) : 3 == Va && O(N, f + 217, g + 126, " " + rd, 0, -1);
        f += 0;
        g += 126;
        O(N, f, g, mf + "fps", -1, 0);
        1 == aa && (O(N, f + 48, g + 0, of +"sl", 16777215, 0), O(N, f + 96, g + 0, pf + "aps", 16777215, 0));
        if (1 == Wa) {
            f = 13;
            g = 291;
            166 > Le && Flag_1 && (f = 178);
            ne(f, g, 124, 70, 0);
            for (b = a = 0; a < fd; a++, b += gd) e = Math.floor(y[b + 4].x) - 8, c = Math.floor(y[b + 4].y) - 8,
                0 > e || 496 <= e || 0 > c || 280 <= c || (e >>= 2, c >>= 2, d = 512 * (g + c) + (f + e), z[a] == id ? v[d] = Dc : z[a] == kd ? v[d] = Ec : z[a] == ld ? v[d] = Fc : z[a] == ld + 1 ? v[d] = Fc : z[a] == md && (v[d] = Hc));
            for (a = 0; a < nd; a++) 0 != A[a] && (e = Math.floor(B[a].x) - 8, c = Math.floor(B[a].y) - 8, 0 > e || 496 <= e || 0 > c || 280 <= c || (e >>= 2, c >>= 2, d = 512 * (g + c) + (f + e), v[d] = Gc));
            for (c = 0; 70 > c; c++)
                for (e = 0; 124 > e; e++) b = (c + 2) * w + (e + 2), d = 2048 * (c + 2) + 4 * (e + 2), a = v[512 * (g + c) + (f + e)], 0 == a && (x[b] == Fb ? a = Nb : x[b] == Gb ? a = Pb : x[b] == Hb ? a = Qb : (a = D[I[d]], a == Gc && (a = 0), 0 == a && (a = D[I[d + 512 + 1]]), a == Gc && (a = 0))), d = s, 10 == qa ? d = Qc : 12 == qa ? a !=
                    r && a != fc && a != kc && a != nc && a != qc && a != zc && (a = 0) : 14 == qa && (a = 0 == a ? Wb : 0), v[512 * (g + c) + (f + e)] = d[a], 16 == qa && 0 == a && (d = (s[Mc[ea]] & 255) + (s[Mc[fa]] & 255) >> 1, v[512 * (g + c) + (f + e)] = (s[Mc[ea]] >> 16 & 255) + (s[Mc[fa]] >> 16 & 255) >> 1 << 16 | (s[Mc[ea]] >> 8 & 255) + (s[Mc[fa]] >> 8 & 255) >> 1 << 8 | d)
        }
        dd(0); - 1 == Xa && Xa++;
        1 == kb ? (Flag_3 ? qf(qb, "\u30af\u30ea\u30c3\u30af\u3067\u518d\u751f\u3001\uff2c\uff2f\uff21\uff24\u3067\u518d\u30b9\u30bf\u30fc\u30c8") : qf(qb, "Click to play, LOAD to restart."), kb = 0, Xa = 10) : 2 == kb && (Flag_3 ? qf(qb, "\u30a8\u30e9\u30fc") : qf(qb, "Error"),
            kb = 0, Xa = 10);
        1 == Xa && (ra = 0, 0 == jb && (g = "/score/dust3.php?a=", g += $a, g += rf + (Flag_3 ? "0" : "1"), Make_HTTP_Request(g, ""), 1 == Request_Status && "ok" == Request_Buffer[0] ? jb = 1 : (jb = 2, lb = "err1" == Request_Buffer[0] ? 1 : "err2" == Request_Buffer[0] ? 2 : "err3" == Request_Buffer[0] ? 3 : "err4" == Request_Buffer[0] ? 4 : "err5" == Request_Buffer[0] ? 5 : 0)), Xa++);
        if (2 == Xa) 1 == jb ? 10 > mb ? Flag_3 ? qf(qb, "\u3082\u3046\u5c11\u3057\u4f5c\u308a\u8fbc\u3093\u3067\u4e0b\u3055\u3044\u3002") : qf(qb, "Please carefully created.") : Flag_3 ? qf(qb, "\u30bf\u30a4\u30c8\u30eb\u3092\u8a18\u5165\u3057\u3066\uff2f\uff2b\u3092\u62bc\u3057\u3066\u4e0b\u3055\u3044") :
            qf(qb, "Enter the title and click OK.") : 2 == jb && (Flag_3 ? 1 == lb ? qf(qb, "\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059") : 2 == lb ? qf(qb, "1\u65e5\u306b1\u56de\u306e\u307f\u3067\u3059") : 3 == lb ? qf(qb, "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30c7\u30fc\u30bf") : 4 == lb ? qf(qb, "\u904e\u53bb12\u6642\u9593\u306e\u4f5c\u54c1\u6570\u304c50\u4ef6\u306b\u9054\u3057\u305f\u70ba\uff71\uff6f\uff8c\uff9f\u51fa\u6765\u307e\u305b\u3093") : 5 == lb ? qf(qb, "\u8a00\u8a9e\u30a8\u30e9\u30fc") : 6 == lb ? qf(qb, "\u4f5c\u8005\u306e\u307f\u3067\u3059") :
                qf(qb, "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u51fa\u6765\u307e\u305b\u3093") : 1 == lb ? qf(qb, "User registration is required.") : 2 == lb ? qf(qb, "1 time in 1 days only.") : 3 == lb ? qf(qb, "Download data.") : 4 == lb ? qf(qb, "Reached 50 posts in 12 hours. Cannot upload.") : 5 == lb ? qf(qb, "Language error.") : 6 == lb ? qf(qb, "Author only.") : qf(qb, "Cannot upload.")), Xa++;
        else if (3 == Xa) {
            ne(96, 100, 320, 100, 8421504);
            sf(256, 114, "UPLOAD", 16752800);
            tf(135);
            if (1 == jb && 10 <= mb && (ne(140, 150, 232, 16, 16777215), uf(139, 149, 234, 0), Ke(132, 142, 232, 16) &&
                    (uf(139, 149, 234, 16711680), Te && (g = vf("Text", rb), null != g && (rb = g))), qf(tb, rb), wf(tb, 141, 150, 230, 16, 230, 16, 0), d = Ke(200, 172, 16, 12), sf(216, 186, "OK", d ? 16711680 : 16777215), d && Te))
                if (2 > rb.length) Flag_3 ? qf(qb, "\u30bf\u30a4\u30c8\u30eb\u3092\uff12\u6587\u5b57\u4ee5\u4e0a\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") : qf(qb, "The title must be longer than 2 characters.");
                else {
                    g = rb;
                    f = 0;
                    c = g.length;
                    for (d = 0; d < c; d++) e = g.charCodeAt(d), f = 0 <= e && 128 >= e || 65377 <= e && 65439 >= e ? f + 1 : f + 2;
                    20 < f ? Flag_3 ? qf(qb, "\u30bf\u30a4\u30c8\u30eb\u3092\uff11\uff10\u6587\u5b57\u4ee5\u4e0b\u3067\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") :
                        qf(qb, "The title must be shorter than 20 characters.") : Xa++
                }
            d = Ke(264, 172, 48, 12);
            sf(296, 186, "CANCEL", d ? 16711680 : 16777215);
            d && Te && (Xa = 5)
        } else if (4 == Xa) {
            rb = encodeURIComponent(rb);
            if (0 == rb.length) {
                Xa = 3;
                Flag_3 ? qf(qb, "\u30a8\u30e9\u30fc") : qf(qb, "Error");
                dd(1);
                return
            }
            Wc();
            Xc(0);
            g = "/score/dust3.php?a=";
            g += $a;
            g += rf + (Flag_3 ? "0" : "1");
            g += xf + eb;
            g += yf + gb;
            g += zf + ib;
            g += Af + nb;
            g += Bf + ob;
            g += Cf + rb;
            f = "i=" + db;
            f += Ff + fb;
            f += Gf + hb;
            Make_HTTP_Request(g, f);
            jb = 2;
            Xa++
        } else if (5 == Xa) Xa = 0;
        else if (10 == Xa)
            if (ne(128,
                    288, 256, 70, 6291456), ne(132, 292, 248, 62, 6316128), sf(256, 302, "DOWNLOAD", 16752800), tf(323), 248 > Le ? (sf(226, 345, "START", 16711680), sf(286, 345, "STOP", 16777215)) : (sf(226, 345, "START", 16777215), sf(286, 345, "STOP", 16711680)), Te) Xa = 0, va = 248 > Le ? 0 : 1;
            else {
                if (Rd[37] || Rd[39]) Xa = 0, va = Rd[37] ? 0 : 1
            }
        else if (20 == Xa) rb = "", Xa++;
        else if (21 == Xa) {
            ne(136, 289, 240, 99, 8421504);
            ne(140, 297, 232, 16, 16777215);
            uf(139, 296, 234, 0);
            Ke(132, 289, 232, 16) && (uf(139, 296, 234, 16711680), Te && (g = vf("Text", rb), null != g && (rb = g)));
            O(N, 141, 300, rb.substr(0, 28),
                16777215, 0);
            3 == xb && (ne(288, 320, 84, 16, 16777215), uf(287, 319, 86, 0), Ke(280, 312, 84, 16) && (uf(287, 319, 86, 16711680), Te && (g = vf("setFont", sb), null != g && (sb = g))), O(N, 289, 323, sb.substr(0, 10), 16777215, 0));
            a = -1;
            128 <= Le && 268 > Le && 314 <= He && 362 > He && (a = Math.floor((He - 314) / 16), 0 == a && 0 != Oe && (xb = Je(xb + Oe, 5)), 1 == a && 0 != Oe && (yb = Je(yb + Oe, 3)), 2 == a && 0 != Oe && (zb = Je(zb + Oe, 10)));
            O(N, 140, 322, "font :" + Fonts_Array[xb], 0 == a ? 16711680 : 16777215, 0);
            O(N, 140, 338, "style:" + Fonts_Modifier[yb], 1 == a ? 16711680 : 16777215, 0);
            O(N, 140, 354, "size :" + Fonts_Sizes[zb], 2 == a ? 16711680 : 16777215, 0);
            a = -1;
            128 <= Le && 368 > Le && 362 <= He && 380 > He && (a = 248 > Le ? 0 : 1, Me && (0 == a ? Xa++ : Xa = 23));
            O(N, 206, 372, "OK", 0 == a ? 16711680 : 16777215, 0);
            O(N, 256, 372, "CANCEL", 1 == a ? 16711680 : 16777215, 0);
            g = Fonts_Array[xb];
            3 == xb && (g = sb);
            Hf(tb, rb, g, yb, Fonts_Sizes[zb]);
            g = Rb;
            0 != Mc[ea] ? g = Mc[ea] : 0 != Mc[fa] && (g = Mc[fa]);
            if (g == vc || g == Nb || g == Pb || g == Qb) g = Rb;
            wf(tb, vb, wb, tb.f, 128, tb.f, 128, s[g])
        } else if (22 == Xa) {
            //Bad word replace
            g = "sex gay fuck suck crap shit dick penis bitch ** \u30bb\u30c3\u30af\u30b9 \u30a8\u30c3\u30c1 \u3061\u3093\u3053 \u30c1\u30f3\u30b3 \u307e\u3093\u3053 \u30de\u30f3\u30b3 \u539f\u7206 \u539f\u5b50\u7206 \u6838 \u88ab\u7206 \u6b7b \u6bba \u7968 \u8a55 \u62cd\u624b \u4eba\u6c17 \u53c2\u52a0 \u30a2\u30f3\u30b1\u30fc\u30c8 \u524a\u9664 \u6d88\u53bb ttp www. .com .jp".split(" ");
            f = "";
            for (a = 0; a < rb.length; a++) c = rb[a], " " != c && "\u3000" != c && (f += c);
            f = f.toLowerCase();
            for (a = 0; a < g.length && !(0 <= f.indexOf(g[a])); a++);
            if (a != g.length) {
                Xa = 23;
                return
            }
            g = Fonts_Array[xb];
            3 == xb && (g = sb);
            Hf(tb, rb, g, yb, Fonts_Sizes[zb]);
            g = Rb;
            0 != Mc[ea] ? g = Mc[ea] : 0 != Mc[fa] && (g = Mc[fa]);
            if (g == vc || g == Nb || g == Pb || g == Qb) g = Rb;
            for (c = 0; 128 > c && !(288 <= wb + c); c++)
                for (e = 0; 496 > e && !(504 <= vb + e); e++) - 1 != tb.a[c * tb.b + e] && I[(wb + c) * h + (vb + e)] == Ib && (b = Ad(vb + e, wb + c, g, 0), 0 <= b && g == Mb && (J[b].x = 0.01 * Math.cos(Fa * ONE_PI / 32), J[b].y = 0.01 * -Math.sin(Fa * ONE_PI / 32), G[b] = Fa, I[(wb +
                    c) * h + (vb + e)] = l));
            Xa++
        } else 23 == Xa && (Xa = 0);
        dd(1)
    }
}

function af(a) {
    var c, b, d, e, f;
    e = new Vector2D;
    var g = 0 == a ? ea : fa,
        m = 0 == a ? Me : Ne;
    b = 0 == a ? Te : Ue;
    f = 0 == a ? Ve : We;
    if (g < Lc) {
        if (1 == Aa && (f = 0 == a ? Te : Ue), f) {
            var m = ia - ka,
                n = ja - la;
            if (!(1 >= oa && 1 == va && 1 >= ra && 0 == m && 0 == n && 3 != Aa)) {
                var t = If(If(Get_Module(m), Get_Module(n)), 1),
                    m = Math.floor((m << 8) / t),
                    n = Math.floor((n << 8) / t),
                    u = (ka << 8) + 127,
                    F = (la << 8) + 127;
                for (c = 0; c <= t; c++, u += m, F += n) {
                    var M = oa + 0,
                        $ = (u >> 8) - M;
                    b = (F >> 8) - M;
                    var Ca = $ + 2 * M,
                        Ob = b + 2 * M;
                    8 > $ && ($ = 8);
                    8 > b && (b = 8);
                    Ca > h - 8 - 1 && (Ca = h - 8 - 1);
                    287 < Ob && (Ob = 287);
                    d = b * h + $;
                    var Zb = h - (Ca - $ + 1);
                    for (f = b; f <= Ob; f++, d += Zb)
                        for (e = $; e <= Ca; e++, d++)
                            if (!(M *
                                    M + 1 < (e - (u >> 8)) * (e - (u >> 8)) + (f - (F >> 8)) * (f - (F >> 8))))
                                if (3 == Aa) {
                                    b = 0 != Mc[g] ? Mc[g] : Rb;
                                    var ub = 0;
                                    b != Mb && (b == $b ? ub = 0 != Nc[ea] ? Nc[ea] : 0 != Nc[fa] ? Nc[fa] : Rb : b == qc ? (ub = Math.floor(8 * Jf(na) / TWO_PI + 0.5) & 7, ub += 1) : b == Kc && (ub = 0 == a ? 0 : 1), I[d] >= p && D[I[d]] != b && Jd(d, D[I[d]], b, ub))
                                } else I[d] == Ib && (ub = Mc[g], (0 == a && We && fa < Lc || 1 == a && Ve && ea < Lc) && Lf(0.5) && (ub = Mc[0 == a ? fa : ea]), b = Ad(e, f, ub, 0), 0 > b || (ub == Mb ? (J[b].x = 0.01 * Math.cos(Fa * ONE_PI / 32), J[b].y = 0.01 * -Math.sin(Fa * ONE_PI / 32), G[b] = Fa, I[d] = l) : ub == $b ? G[b] = 0 != Nc[ea] ? Nc[ea] : 0 != Nc[fa] ? Nc[fa] : Rb : ub == qc ? (ub = Math.floor(8 *
                                    Jf(na) / TWO_PI + 0.5) & 7, G[b] = ub + 1) : ub == Kc && (G[b] = 0 == a ? 0 : 1, E[b] = 0 == a ? 6702131 : 3359829)))
                }
            }
        }
    } else if (45 == g) b = (ja >> 2) * w + (ia >> 2), f && 0 == x[b] && (P[b] += na.x * (oa + 1), Q[b] += na.y * (oa + 1), Set_XY(e, P[b], Q[b]), 10 < Get_Magnitude(e) && 1 == va && (Get_Unitary_Vector(e), P[b] = 10 * e.x, Q[b] = 10 * e.y));
    else if (46 == g) f && (b = (ja >> 2) * w + (ia >> 2), d = oa + 1, 0 == a ? (0 == x[b - w] && (P[b - w] += d, Q[b - w] += d), 0 == x[b + 1] && (P[b + 1] -= d, Q[b + 1] += d), 0 == x[b + w] && (P[b + w] -= d, Q[b + w] -= d), 0 == x[b - 1] && (P[b - 1] += d, Q[b - 1] -= d), 0 == x[b - w + 1] && (P[b - w + 1] += d, Q[b - w + 1] += d), 0 == x[b + w + 1] && (P[b + w + 1] -= d, Q[b + w + 1] += d), 0 == x[b + w -
        1] && (P[b + w - 1] -= d, Q[b + w - 1] -= d), 0 == x[b - w - 1] && (P[b - w - 1] += d, Q[b - w - 1] -= d)) : (0 == x[b - w] && (P[b - w] -= d, Q[b - w] += d), 0 == x[b - 1] && (P[b - 1] += d, Q[b - 1] += d), 0 == x[b + w] && (P[b + w] += d, Q[b + w] -= d), 0 == x[b + 1] && (P[b + 1] -= d, Q[b + 1] -= d), 0 == x[b - w - 1] && (P[b - w - 1] -= d, Q[b - w - 1] += d), 0 == x[b + w - 1] && (P[b + w - 1] += d, Q[b + w - 1] += d), 0 == x[b + w + 1] && (P[b + w + 1] += d, Q[b + w + 1] -= d), 0 == x[b - w + 1] && (P[b - w + 1] -= d, Q[b - w + 1] -= d)));
    else if (49 == g || 50 == g || 52 == g) {
        if (e = ia >> 2 << 2, f = ja >> 2 << 2, b = (ja >> 2 << 7) + (ia >> 2), m && 0 == x[b])
            if (49 == g) {
                b = Dc;
                for (a = 0; a < fd; a++) z[a] == id && (b = Ec);
                d = 0 !=
                    Oc[ea] ? Oc[ea] : 0 != Oc[fa] ? Oc[fa] : 0;
                yd(e, f, b, d)
            } else 50 == g ? yd(e, f, Fc, 0) : 52 == g && yd(e, f, Hc, 0)
    } else if (51 == g) b = (ja >> 2 << 7) + (ia >> 2), m && 0 == x[b] && (d = 0 != Pc[ea] ? Pc[ea] : 0 != Pc[fa] ? Pc[fa] : Rb, zd(ia, ja, d));
    else if (53 == g) {
        if (m) {
            g = [0, -1, -512, 1, 512, -513, -511, 513, 511, -2, -1024, 2, 1024, 510, -514, -1025, -1023, -510, 514, 1025, 1023, -3, -1026, -1536, -1022, 3, 1026, 1536, 1022, 509, -515, -1537, -1535, -509, 515, 1537, 1535];
            u = t = n = m = 0;
            b = ja * h + ia;
            for (a = 0; 37 > a; a++)
                if (e = Dd(b + g[a]), f = Ed(b + g[a]), -1 != e ? (n = 1, u = e, 255 == (Ae[e] & 255) && (e = -1)) : -1 != f ? (n = 2, u =
                        f, e = 0, 255 == (Ce[f] & 255) && (e = -1)) : I[b + g[a]] >= p && (n = 0, u = I[b + g[a]], e = 0, 255 == (Id[I[b + g[a]]] & 255) && (e = -1)), -1 != e) {
                    -1 == Ua ? Ua = b + g[a] : (e = Dd(Ua), f = Ed(Ua), -1 != e ? (m = 1, t = e, 255 == (Ae[e] & 255) && (e = -1)) : -1 != f ? (m = 2, t = f, e = 0, 255 == (Ce[f] & 255) && (e = -1)) : I[Ua] >= p && (m = 0, t = I[Ua], e = 0, 255 == (Id[I[Ua]] & 255) && (e = -1)), -1 != e && b + g[a] != Ua && Fd(m, n, t, u, Ta), Ua = -1);
                    break
                }
            37 == a && (Ua = -1)
        }
    } else if (54 == g || 55 == g || 56 == g || 57 == g || 58 == g) {
        if (1 == Aa && (f = 0 == a ? Te : Ue), f) {
            c = oa;
            56 != g && 0 == oa && (c = 1);
            m = Math.floor(ia / ha) - Math.floor(ka / ha);
            n = Math.floor(ja / ha) - Math.floor(la / ha);
            t = If(If(Get_Module(m), Get_Module(n)),
                1);
            m = Math.floor((m << 8) / t);
            n = Math.floor((n << 8) / t);
            u = (Math.floor(ka / ha) << 8) - 127;
            F = (Math.floor(la / ha) << 8) - 127;
            for (a = 0; a <= t; a++, u += m, F += n)
                for (d = (u >> 8) - Math.floor(c / 2), M = (F >> 8) - Math.floor(c / 2), $ = d + c / 2 + 0.5, Ca = M + c / 2 + 0.5, f = M; f <= M + c; f++)
                    for (e = d; e <= d + c; e++) 2 > e || De <= e || 2 > f || Ee <= f || (e - $) * (e - $) + (f - Ca) * (f - Ca) > Math.floor(c * c / 4) || (b = f * w + e, 54 == g ? 0 == x[b] && (x[b] = Fb, P[b] = Q[b] = re[b] = se[b] = te[b] = 0) : 55 == g ? (x[b] == Gb ? Nf(e, f, -1) : x[b] == Hb && Nf(e, f, 1), x[b] = -2) : 56 == g ? 0 == x[b] && (x[b] = -2, P[b] = Q[b] = re[b] = se[b] = te[b] = 0) : 57 == g ? 0 == x[b] && (x[b] = Gb, P[b] = Q[b] = re[b] = se[b] = te[b] = 0, Nf(e, f, 1)) : 58 == g && 0 ==
                        x[b] && (x[b] = Hb, P[b] = Q[b] = re[b] = se[b] = te[b] = 0, Nf(e, f, -1)));
            Se();
            if (56 == g && 0 == oa)
                for (m = ia - ka, n = ja - la, t = If(If(Get_Module(m), Get_Module(n)), 1), m = Math.floor((m << 8) / t), n = Math.floor((n << 8) / t), u = (ka << 8) + 127, F = (la << 8) + 127, a = 0; a <= t; a++, u += m, F += n)
                    for (b = p; b < pd; b++) u >> 8 == Math.floor(C[b].x) && F >> 8 == Math.floor(C[b].y) && qd(b--);
            if (54 == g || 56 == g || 57 == g || 58 == g)
                for (a = p; a < pd; a++) 0 != x[(C[a].y >> 2) * w + (C[a].x >> 2)] && qd(a--);
            if (54 == g || 55 == g || 57 == g || 58 == g) {
                for (a = 0; a < fd; a++)
                    if (z[a] == id || z[a] == kd || z[a] == ld || z[a] == ld + 1 || z[a] == md)
                        for (c = 4; 6 > c; c++)
                            if (b = (y[a * gd + c].y >> 2 << 7) + (y[a * gd + c].x >>
                                    2), 0 != x[b]) {
                                hd(a--);
                                break
                            }
                for (a = 0; a < nd; a++)
                    if (0 != A[a] && (b = (B[a].y >> 2 << 7) + (B[a].x >> 2), 0 != x[b])) {
                        b = (B[a].y << 9) + Math.floor(B[a].x);
                        for (c = 0; 21 > c; c++) I[b + Of[c]] == Kb && (I[b + Of[c]] = Ib);
                        od(a)
                    }
            }
            if (55 == g || 56 == g)
                for (f = 2; f <= Ee; f++)
                    for (e = 2; e <= De; e++) b = f * w + e, -2 == x[b] && (x[b] = 0);
            b = 8 * h + 8;
            for (f = 8; 288 > f; f++, b += 16)
                for (e = 8; 504 > e; e++, b++) d = (f >> 2) * w + (e >> 2), 0 == x[d] && I[b] == Jb ? I[b] = Ib : x[d] >= Fb && (I[b] = Jb)
        }
    } else 64 == g ? (vb = ia, wb = ja - 14, m && (Xa = 20)) : 65 == g ? m ? 0 == Ga ? (Ha = Ja = ia, Ia = Ka = ja) : 1 == va && 1 >= ra && Ha == Ja && Ia == Ka || Hd() : b && 0 == Ga ? Gd() : f && 0 ==
        Ga && (Ja = ia, Ka = ja) : 68 == g && f && (sa -= (Le - Pf) / (1 << ra), ta -= (He - Qf) / (1 << ra), sa = Pe(sa, 0, 496 - (496 >> ra)), ta = Pe(ta, 0, 280 - [280, 140, 70, 35, 18][ra]))
}
window.fff = hf;

function hf() {
    var a, c, b, d, e, f, g, m, n, t = new Vector2D,
        u = [1, 1, 1, h - 3, 1, 1, 1, h - 3, 1, 1, 1, h - 3, 1, 1, 1, h - 3];
    if (0 == qa)
        for (a = 288 * h; 4096 < a; a--) v[a] = 0;
    else if (1 == qa || 2 == qa)
        for (b = 2, d = 258; b < Ee; b++, d += 4)
            for (c = 2; c < De; c++, d++) 0 == x[d] && (g = 0 < te[d] ? Math.floor(Rf(10 * te[d], 96)) : 0, m = 0 > te[d] ? Math.floor(Rf(-10 * te[d], 96)) : 0, ne(c << 2, b << 2, ha, ha, 0 | g << 8 | m));
    else if (3 == qa)
        for (a = 288 * h; 4096 < a; a--) 0 == x[R[a]] && (f = 230 * (v[a] >> 16 & 255) >> 8, g = 230 * (v[a] >> 8 & 255) >> 8, m = 230 * (v[a] & 255) >> 8, v[a] = f << 16 | g << 8 | m);
    else if (4 == qa)
        for (d = 4104, b = 8; 288 > b; b++, d += 16)
            for (c = 8; 504 > c; c++, d++) t.x =
                U[d + (503 == c ? 0 : 1)] - U[d - (8 == c ? 0 : 1)], t.y = V[d + (287 == b ? 0 : 512)] - V[d - (8 == b ? 0 : 512)], f = Math.floor(512 * (t.x + t.y)), v[d] = 0 >= f ? Rf(-f, 255) : Rf(f, 255) << 8;
    else if (5 == qa) {
        for (b = 8; 288 > b; b++) {
            d = (b << 9) + 8;
            for (c = 8; 503 > c; c++, d++) f = (v[d] >> 16 & 255) + (v[d + 1] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d + 1] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d + 1] & 255) >> 1, v[d] = f << 16 | g << 8 | m;
            for (c = 503; 8 < c; c--, d--) f = (v[d] >> 16 & 255) + (v[d - 1] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d - 1] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d - 1] & 255) >> 1, v[d] = f << 16 | g << 8 | m
        }
        for (c = 8; 504 > c; c++) {
            d = 4096 + c;
            for (b = 8; 287 > b; b++,
                d += h) f = (v[d] >> 16 & 255) + (v[d + h] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d + h] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d + h] & 255) >> 1, v[d] = f << 16 | g << 8 | m;
            for (b = 287; 8 < b; b--, d -= h) f = (v[d] >> 16 & 255) + (v[d - h] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d - h] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d - h] & 255) >> 1, v[d] = f << 16 | g << 8 | m
        }
    } else if (6 == qa) {
        var F, M, $;
        b = 2;
        for (d = 258; b < Ee; b++, d += 4)
            for (c = 2; c < De; c++, d++)
                if (m = Get_Module(P[d]), f = Get_Module(Q[d]), 0 != m || 0 != f)
                    for (g = 1 / (m + f), n = Math.floor(m * g * 258), F = Math.floor(f * g * 258), M = 0 > P[d] ? -1 : 1, $ = 0 > Q[d] ? -h : h, e = (b << 11) + (c << 2), a = 0; 16 > a; a++) f = (Db[e + M] >> 16 & 255) + ((v[e] >>
                        16 & 255) * n >> 8), 255 < f && (f = 255), g = (Db[e + M] >> 8 & 255) + ((v[e] >> 8 & 255) * n >> 8), 255 < g && (g = 255), m = (Db[e + M] & 255) + ((v[e] & 255) * n >> 8), 255 < m && (m = 255), Db[e + M] = f << 16 | g << 8 | m, f = (Db[e + $] >> 16 & 255) + ((v[e] >> 16 & 255) * F >> 8), 255 < f && (f = 255), g = (Db[e + $] >> 8 & 255) + ((v[e] >> 8 & 255) * F >> 8), 255 < g && (g = 255), m = (Db[e + $] & 255) + ((v[e] & 255) * F >> 8), 255 < m && (m = 255), Db[e + $] = f << 16 | g << 8 | m, e += u[a];
        for (a = 288 * h; 4096 < a; a--) 0 == x[R[a]] && (v[a] = Db[a], Db[a] = 0)
    } else if (7 == qa)
        for (a = 288 * h; 4096 < a; a--) 0 == x[R[a]] && (f = 220 * (v[a] >> 16 & 255) >> 8, g = 220 * (v[a] >> 8 & 255) >> 8, m = 220 *
            (v[a] & 255) >> 8, v[a] = f << 16 | g << 8 | m);
    else if (8 == qa) {
        for (a = 289 * h; 3584 < a; a--) I[a] == Jb ? v[a] = 6316128 : I[a] == Kb ? v[a] = 0 : I[a] == l ? v[a] = 8421631 : I[a] == Ib ? v[a] = I[a + 1] >= p ? E[I[a + 1]] : I[a - 1] >= p ? E[I[a - 1]] : I[a + h] >= p ? E[I[a + h]] : I[a - h] >= p ? E[I[a - h]] : I[a + h + 1] >= p ? E[I[a + h + 1]] : I[a + h - 1] >= p ? E[I[a + h - 1]] : I[a - h + 1] >= p ? E[I[a - h + 1]] : I[a - h - 1] >= p ? E[I[a - h - 1]] : 0 : I[a] >= p && (v[a] = E[I[a]]);
        for (a = 288 * h; 4096 < a; a--) 0 == v[a] && (0 != v[a + 1] && 15658734 != v[a + 1] ? v[a] = 15658734 : 0 != v[a - 1] && 15658734 != v[a - 1] ? v[a] = 15658734 : 0 != v[a + h] && 15658734 != v[a + h] ? v[a] = 15658734 :
            0 != v[a - h] && 15658734 != v[a - h] && (v[a] = 15658734))
    } else if (9 == qa)
        for (a = 288 * h; 4096 <= a; a--) v[a] = 0;
    else if (10 == qa)
        for (b = 2, d = 258; b < Ee; b++, d += 4)
            for (c = 2; c < De; c++, d++) 0 == x[d] && (f = 0, 0 < te[d] && (f = Math.floor(Rf(10 * te[d], 72))), 0 > te[d] && (f = Math.floor(Rf(-10 * te[d], 24))), ne(c << 2, b << 2, ha, ha, f << 16 | f << 8 | f));
    else if (11 == qa)
        for (b = 2, d = 258; b < Ee; b++, d += 4)
            for (c = 2; c < De; c++, d++) {
                if (0 == x[d] && (n = 256 - Math.floor(Rf(Get_Module(te[d]), 32)), 256 != n))
                    for (e = (b << 11) + (c << 2), a = 0; 16 > a; a++) f = (v[e] >> 16 & 255) * n >> 8, g = (v[e] >> 8 & 255) * n >> 8, m = (v[e] & 255) * n >> 8, v[e] = f << 16 | g << 8 | m, e += u[a]
            } else if (12 ==
                qa)
                for (a = 288 * h; 4096 < a; a--) v[a] = 0, Db[a] = I[a] < p ? Math.floor(8 * Db[a] / 9) : D[I[a]] == r ? 25500 : D[I[a]] == fc ? 25500 : D[I[a]] == kc ? 255E3 : D[I[a]] == nc ? 255E3 : D[I[a]] == qc ? 25500 : D[I[a]] == vc && E[I[a]] == s[nc] ? 255E3 : D[I[a]] == zc ? 25500 : D[I[a]] == Ic && 0 != G[I[a]] ? 255E3 : Math.floor(8 * Db[a] / 9);
            else if (13 == qa) {
        for (a = 0; a < pd; a++) Db[H[a]] = Rc[D[a]];
        for (b = 8; 288 > b; b++) {
            d = (b << 9) + 8;
            for (c = 8; 503 > c; c++, d++) Db[d] = Db[d + 1] = Db[d] + Db[d + 1] >> 1;
            for (c = 503; 8 < c; c--, d--) Db[d] = Db[d - 1] = Db[d] + Db[d - 1] >> 1
        }
        for (c = 8; 504 > c; c++) {
            d = 4096 + c;
            for (b = 8; 287 > b; b++, d += h) Db[d] = Db[d + h] = Db[d] +
                Db[d + h] >> 1;
            for (b = 287; 8 < b; b--, d -= h) Db[d] = Db[d - h] = Db[d] + Db[d - h] >> 1
        }
        for (a = 288 * h; 4096 < a; a--) n = Db[a], 0 > n ? (f = -n >> 3, g = 0, m = -n >> 2) : 1024 > n ? (g = f = 0, m = n >> 2) : 2048 > n ? (f = 0, g = n - 1024 >> 2, m = 255) : 3072 > n ? (f = 0, g = 255, m = 255 - (n - 2048 >> 2)) : 4096 > n ? (f = n - 3072 >> 2, g = 255, m = 0) : 6144 > n ? (f = 255, g = 255 - (n - 4096 >> 3), m = 0) : (f = 255, g = n - 6144 >> 3, 255 < g && (g = 255), m = n - 6144 >> 3, 255 < m && (m = 255)), v[a] = f << 16 | g << 8 | m
    } else if (15 == qa)
        for (a = 288 * h; 4096 < a; a--) v[a] = 0;
    else if (16 == qa)
        for (f = (s[Mc[ea]] >> 16 & 255) + (s[Mc[fa]] >> 16 & 255) >> 1, g = (s[Mc[ea]] >> 8 & 255) + (s[Mc[fa]] >>
                8 & 255) >> 1, m = (s[Mc[ea]] & 255) + (s[Mc[fa]] & 255) >> 1, d = 0 | f << 16 | g << 8 | m, a = 288 * h; 4096 < a; a--) v[a] = d;
    b = 2;
    for (d = 258; b < Ee; b++, d += 4)
        for (c = 2; c < De; c++, d++)
            if (0 != x[d])
                for (e = (b << 11) + (c << 2), a = 0; 16 > a; a++) v[e] = Sc[x[d]][a], e += u[a];
    if (2 == qa)
        for (b = 2, d = 258; b < Ee; b++, d += 4)
            for (c = 2; c < De; c++, d++) 0 == x[d] && (Set_XY(t, P[d], Q[d]), f = Math.floor(10 * Get_Unitary_Vector(t)), 2 > f || (48 < f && (f = 48), a = (c << 2) + 2, n = (b << 2) + 2, kf(a, n, a + t.x * f, n + t.y * f, 0 | f << 17)));
    else if (9 == qa)
        for (b = 2, d = 258; b < Ee; b++, d += 4)
            for (c = 2; c < De; c++, d++) 0 == x[d] && (Set_XY(t, P[d], Q[d]), a = Get_Magnitude(t), 0.2 > a || (g = Math.floor(Rf(16 * a, 80)),
                f = 0, 0 < te[d] && (f = Math.floor(Rf(te[d] * a, 80))), m = 0, 0 > te[d] && (m = Math.floor(Rf(-te[d] * a, 80))), a = (c << 2) + 5 * P[d], n = (b << 2) + 5 * Q[d], e = (c + 1 << 2) + 5 * P[d + 1], F = (b << 2) + 5 * Q[d + 1], kf(a, n, e, F, f << 16 | g << 8 | m), e = (c << 2) + 5 * P[d + w], F = (b + 1 << 2) + 5 * Q[d + w], kf(a, n, e, F, f << 16 | g << 8 | m)));
    else if (14 == qa)
        for (a = 288 * h; 4096 < a; a--) I[a] == Ib ? (f = 255 - (255 - (v[a] >> 16 & 255) >> 1), g = 255 - (255 - (v[a] >> 8 & 255) >> 1), m = 255 - (255 - (v[a] & 255) >> 1), v[a] = f << 16 | g << 8 | m) : I[a] < Kb && (v[a] = 0);
    if (2 <= ya) {
        c = [0, 0, 124, 62, 32, 20, 16, 12, 8, 4];
        t = [0, 0, 70, 35, 32, 20, 16, 12, 8, 4];
        g = [0, 0, 0, 0, -8, 8, 8, -4, 0, 0];
        f = [0,
            0, 0, 0, 12, 0, -4, -4, 0, 0
        ];
        for (a = 0; 496 > a; a += c[ya])
            for (b = 0, d = 8 * h + 8 + a + g[ya]; 280 > b; b++, d += h) 6316128 != v[d] && (v[d] = 3355443);
        for (a = 0; 280 > a; a += t[ya])
            for (c = 0, d = (8 + a + f[ya]) * h + 8; 496 > c; c++, d++) 6316128 != v[d] && (v[d] = 3355443)
    }
    if (1 <= ya) {
        b = 0;
        for (d = 8 * h + 256; 280 > b; b++, d += h) 6316128 != v[d] && (v[d] = 4194304);
        c = 0;
        for (d = 148 * h + 8; 496 > c; c++, d++) 6316128 != v[d] && (v[d] = 4194304)
    }
    if (7 == qa)
        for (a = p; a < pd; a++) f = ((E[a] & 16711680) >> 18) + (v[H[a]] >> 16 & 255), 255 < f && (f = 255), g = ((E[a] & 65280) >> 10) + (v[H[a]] >> 8 & 255), 255 < g && (g = 255), m = ((E[a] & 255) >> 2) + (v[H[a]] &
            255), 255 < m && (m = 255), v[H[a]] = f << 16 | g << 8 | m;
    else if (8 != qa)
        if (10 == qa)
            for (a = p; a < pd; a++) v[H[a]] = Qc[D[a]];
        else if (14 == qa)
        for (a = p; a < pd; a++) f = (v[H[a]] >> 16 & 255) - (255 - (E[a] >> 16 & 255) + 10), 0 > f && (f = 0), g = (v[H[a]] >> 8 & 255) - (255 - (E[a] >> 8 & 255) + 10), 0 > g && (g = 0), m = (v[H[a]] & 255) - (255 - (E[a] & 255) + 10), 0 > m && (m = 0), v[H[a]] = f << 16 | g << 8 | m;
    else if (16 == qa)
        for (a = p; a < pd; a++) v[H[a]] = v[H[a]] == E[a] ? 0 : E[a];
    else
        for (a = p; a < pd; a++) v[H[a]] = E[a];
    Sf();
    Tf();
    Uf();
    if (12 == qa) {
        for (b = 8; 288 > b; b++) {
            d = (b << 9) + 8;
            for (c = 8; 503 > c; c++, d++) Db[d] = Db[d] + Db[d + 1] >>
                1;
            for (c = 503; 8 < c; c--, d--) Db[d] = Db[d] + Db[d - 1] >> 1
        }
        for (c = 8; 504 > c; c++) {
            d = 4096 + c;
            for (b = 8; 287 > b; b++, d += h) Db[d] = Db[d] + Db[d + h] >> 1;
            for (b = 287; 8 < b; b--, d -= h) Db[d] = Db[d] + Db[d - h] >> 1
        }
        for (a = 288 * h; 4096 < a; a--) 1 > Db[a] ? v[a] = 0 : (n = Rf(Db[a], 255), f = (v[a] >> 16 & 255) * n >> 8, g = (v[a] >> 8 & 255) * n >> 8, m = (v[a] & 255) * n >> 8, v[a] = f << 16 | g << 8 | m)
    } else if (15 == qa)
        for (b = 2, d = 258; b < Ee; b++, d += 4)
            for (c = 2; c < De; c++, d++) {
                n = m = g = f = 0;
                e = (b << 11) + (c << 2);
                for (a = 0; 16 > a; a++) 0 != v[e] && (f += v[e] >> 16 & 255, g += v[e] >> 8 & 255, m += v[e] & 255, n++), e += u[a];
                if (0 != n)
                    for (f = Math.floor(f / n), g = Math.floor(g /
                            n), m = Math.floor(m / n), e = (b << 11) + (c << 2), a = 0; 16 > a; a++) v[e] = 3 > a || 4 == a || 8 == a ? Rf(f + 48, 255) << 16 | Rf(g + 48, 255) << 8 | Rf(m + 48, 255) : 12 < a || 7 == a || 11 == a ? If(f - 32, 0) << 16 | If(g - 32, 0) << 8 | If(m - 32, 0) : f << 16 | g << 8 | m, e += u[a]
            }
    Vf()
}
var Wf = [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3],
    Xf = [
        [],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4
        ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3,
            3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4
        ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4
        ]
    ];
window.fff = Vf;

function Vf() {
    var a, c, b, d, e, f = false;
    if (54 == ea || 55 == ea || 56 == ea || 57 == ea || 58 == ea) f = true;
    var g = false;
    if (54 == fa || 55 == fa || 56 == fa || 57 == fa || 58 == fa) g = true;
    if (!Flag_1 && 0 == Xa) {
        if (f || g) {
            var m = oa;
            f && 56 != ea && 0 == oa && (m = 1);
            g && 56 != fa && 0 == oa && (m = 1);
            e = 4210752;
            f && (e |= 16711680);
            g && (e |= 255);
            b = (ja >> 2) - Math.floor(m / 2);
            c = ((ia >> 2) - Math.floor(m / 2) + Wf[m]) * ha;
            b = (b + 0) * ha;
            for (a = 0; a < Xf[m].length; a++) d = Pe(b, 0, 288) * h + Pe(c, 0, h - 1), v[d] = e, 1 == Xf[m][a] && c++, 2 == Xf[m][a] && b++, 3 == Xf[m][a] && c--, 4 == Xf[m][a] && b--
        }
        if (45 == ea || 45 == fa || 25 == ea || 25 == fa) {
            e = 4210752;
            if (45 == ea || 25 ==
                ea) e |= 16711680;
            if (45 == fa || 25 == fa) e |= 255;
            kf(ia + 0.5, ja + 0.5, ia + 0.5 + 30 * na.x, ja + 0.5 + 30 * na.y, e)
        }
        if (5 == ea || 5 == fa) e = 4210752, 5 == ea && (e |= 16711680), 5 == fa && (e |= 255), kf(ia + 0.5, ja + 0.5, ia + 0.5 + 20 * Math.cos(Fa * ONE_PI / 32), ja + 0.5 - 20 * Math.sin(Fa * ONE_PI / 32), e);
        1 == Aa && (Ve && (ea < Lc || f) || We && (fa < Lc || g)) && kf(Da, Ea, ia, ja, 16711680);
        if (64 == ea || 64 == fa) e = 4210752, 64 == ea && (e |= 16711680), 64 == fa && (e |= 255), kf(vb, wb, vb, wb + 13, e), kf(vb, wb, vb + 200, wb, e), kf(vb, wb + 13, vb + 200, wb + 13, e);
        if (65 == ea || 65 == fa)
            if (0 == Ga) {
                if (65 == ea && Ve || 65 == fa && We) kf(Ha, Ia, Ja,
                    Ia, 16761024), kf(Ha, Ka, Ja, Ka, 16761024), kf(Ha, Ia, Ha, Ka, 16761024), kf(Ja, Ia, Ja, Ka, 16761024)
            } else c = ia - Math.floor((Ja - Ha) / 2), b = ja - Math.floor((Ka - Ia) / 2), e = Ja - Ha, a = Ka - Ia, kf(c, b, c + e, b, 12632319), kf(c, b + a, c + e, b + a, 12632319), kf(c, b, c, b + a, 12632319), kf(c + e, b, c + e, b + a, 12632319);
        if (53 == ea || 53 == fa) {
            e = 4210752;
            53 == ea && (e |= 16711680);
            53 == fa && (e |= 255);
            f = [0, -1, -512, 1, 512, -513, -511, 513, 511, -2, -1024, 2, 1024, 510, -514, -1025, -1023, -510, 514, 1025, 1023, -3, -1026, -1536, -1022, 3, 1026, 1536, 1022, 509, -515, -1537, -1535, -509, 515, 1537, 1535];
            c = ia;
            b = ja;
            d = ja * h +
                ia;
            for (a = 0; 37 > a; a++)
                if (-1 != Dd(d + f[a]) || -1 != Ed(d + f[a]) || I[d + f[a]] >= p) {
                    c = d + f[a] & 511;
                    b = Math.floor((d + f[a]) / 512);
                    break
                } - 1 != Ua ? kf(Ua & 511, Ua / 512, c, b, e) : kf(c, b, ia, ja, e)
        }
    }
}
var Yf = 0.01,
    Zf = 1 / Yf,
    w = 128,
    qe = 74,
    De = w - 2,
    Ee = qe - 2,
    x = new Int8Array(qe * w),
    $f = new Float32Array(qe * w),
    ag = new Float32Array(qe * w),
    bg = new Float32Array(qe * w),
    cg = new Float32Array(qe * w),
    P = $f,
    Q = ag,
    re = bg,
    se = cg,
    te = new Float32Array(qe * w);
window.fff = cf;

function cf() {
    var a, c, b, d, e, f, g;
    if (1 == xa) {
        for (a = 2; a < De; a++) P[128 + a] = P[9088 + a], P[9216 + a] = P[256 + a], Q[128 + a] = Q[9088 + a], Q[9216 + a] = Q[256 + a];
        for (b = 256; b < Ee << 7; b += w) P[b + 1] = P[b + De - 1], P[b + De] = P[b + 2], Q[b + 1] = Q[b + De - 1], Q[b + De] = Q[b + 2]
    }
    b = 2;
    f = 258;
    for (g = f + 124; b < Ee; b++, f += 4, g += w)
        for (; f < g; f++) 1 <= x[f] || (te[f] *= 0.9, te[f] -= (P[f + 1] - P[f - 1] + Q[f + w] - Q[f - w]) * Zf);
    for (a = 0; 2 > a; a++) {
        b = 2;
        for (f = 257; b < Ee; b++, f += 128) {
            1 == xa && (te[f + 125] = 0.5 * (te[f] + te[f + 1]));
            for (c = 1; c < De; c++, f++) 1 <= x[f] || 1 <= x[f + 1] || (te[f] = 0.5 * (te[f] + te[f + 1]));
            for (c = De; 2 <=
                c; c--, f--) 1 <= x[f] || 1 <= x[f - 1] || (te[f] = 0.5 * (te[f] + te[f - 1]))
        }
        c = 2;
        for (f = 130; c < De; c++, f++) {
            for (b = 1; b < Ee; b++, f += 128) 1 <= x[f] || 1 <= x[f + w] || (te[f] = 0.5 * (te[f] + te[f + w]));
            for (b = Ee; 2 <= b; b--, f -= 128) 1 <= x[f] || 1 <= x[f - w] || (te[f] = 0.5 * (te[f] + te[f - w]))
        }
    }
    if (1 == xa) {
        for (a = 2; a < De; a++) te[128 + a] = te[9088 + a], te[9216 + a] = te[256 + a];
        for (b = 256; b < Ee << 7; b += w) te[b + 1] = te[b + De - 1], te[b + De] = te[b + 2]
    }
    var m, n, t, u, F, M;
    b = 2;
    f = 258;
    for (g = f + 124; b < Ee; b++, f += 4, g += w)
        for (; f < g; f++) 1 <= x[f] || (a = f + 1, c = f - 1, d = f + w, e = f - w, m = 3 * Get_Module(P[f]), n = 3 * Get_Module(Q[f]), t = 6 * P[f] * (P[a] -
                P[c]) + m * (2 * P[f] - P[a] - P[c]), u = 6 * Q[f] * (P[d] - P[e]) + n * (2 * P[f] - P[d] - P[e]), F = (1 <= x[a] ? te[f] : te[a]) - (1 <= x[c] ? te[f] : te[c]), M = P[a] + P[c] - 2 * P[f], M += P[d] + P[e] - 2 * P[f], t = Pe(t + u + F, -10, 10), re[f] = P[f] + Yf * (-t + M), t = 6 * P[f] * (Q[a] - Q[c]) + m * (2 * Q[f] - Q[a] - Q[c]), u = 6 * Q[f] * (Q[d] - Q[e]) + n * (2 * Q[f] - Q[d] - Q[e]), F = (1 <= x[d] ? te[f] : te[d]) - (1 <= x[e] ? te[f] : te[e]), M = Q[a] + Q[c] - 2 * Q[f], M += Q[d] + Q[e] - 2 * Q[f], t = Pe(t + u + F, -10, 10), se[f] = Q[f] + Yf * (-t + M), 1 <= x[c] && 0 > re[f] && (re[f] *= 0.9), 1 <= x[a] && 0 < re[f] && (re[f] *= 0.9), 1 <= x[e] && 0 > se[f] && (se[f] *= 0.9), 1 <= x[d] &&
            0 < se[f] && (se[f] *= 0.9));
    f = P;
    P = re;
    re = f;
    f = Q;
    Q = se;
    se = f
}
var dg = new Float32Array(296 * h),
    Qe = new Float32Array(296 * h),
    U = new Float32Array(296 * h),
    V = new Float32Array(296 * h),
    Re = 0;

function eg() {
    var a, c, b, d = new Vector2D,
        e;
    for (b = c = 0; 280 > c; c++, b += 16)
        for (a = 0; 496 > a; a++, b++) d.x = -0.5 - a, d.y = -0.5 - c, e = Get_Unitary_Vector(d) + 16, e = 100 / (e * e), U[b] = d.x * e, V[b] = d.y * e
}

function gg(a, c) {
    var b, d, e, f;
    e = 4104;
    f = (c - 8 - 1 << 9) + (a - 8 - 1);
    for (d = 8; d < c; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) dg[e] -= U[f], Qe[e] -= V[f];
        for (f++; 504 > b; b++, e++, f++) dg[e] += U[f], Qe[e] -= V[f];
        f += a + a - 1025
    }
    for (f += 512; 288 > d; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) dg[e] -= U[f], Qe[e] += V[f];
        for (f++; 504 > b; b++, e++, f++) dg[e] += U[f], Qe[e] += V[f];
        f += a + a - 1
    }
}

function hg(a, c) {
    var b, d, e, f;
    e = 4104;
    f = (c - 8 - 1 << 9) + (a - 8 - 1);
    for (d = 8; d < c; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) dg[e] += U[f], Qe[e] += V[f];
        for (f++; 504 > b; b++, e++, f++) dg[e] -= U[f], Qe[e] += V[f];
        f += a + a - 1025
    }
    for (f += 512; 288 > d; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) dg[e] += U[f], Qe[e] -= V[f];
        for (f++; 504 > b; b++, e++, f++) dg[e] -= U[f], Qe[e] -= V[f];
        f += a + a - 1
    }
}

function Cd() {
    var a, c, b;
    for (b = 296 * h - 1; 0 <= b; b--) dg[b] = 0, Qe[b] = Flag_2 ? 1 : 0;
    eg();
    c = 10;
    for (b = 258; 288 > c; c += 4, b += 4)
        for (a = 10; 504 > a; a += 4, b++) {
            if (x[b] == Gb) gg(a, c);
            else if (x[b] == Hb) hg(a, c);
            else continue;
            Re++;
            0 == (Re & 63) && (ne(12, 12, 80, 12, 0), O(N, 12, 12, "G-MAP " + Re, 0, 6316128))
        }
    Re = 1;
    Se()
}

function Nf(a, c, b) {
    0 == Re && eg();
    a = (a << 2) + 2;
    c = (c << 2) + 2;
    0 < b ? gg(a, c) : hg(a, c);
    Re++;
    0 == (Re & 127) && (ne(12, 12, 80, 12, 0), O(N, 12, 12, "G-MAP " + Re, 0, 6316128))
}

function Se() {
    if (0 != Re) {
        Re = 0;
        var a;
        if (false == Flag_2) {
            for (a = qe * w - 1; 0 <= a && x[a] != Gb && x[a] != Hb; a--);
            if (-1 == a)
                for (a = 296 * h - 1; 0 <= a; a--) dg[a] = 0, Qe[a] = 0
        }
        var c = new Vector2D;
        for (a = 288 * h - 1; 4096 <= a; a--) Set_XY(c, dg[a], Qe[a]), Get_Unitary_Vector(c), U[a] = c.x, V[a] = c.y
    }
}
var rd = 0,
    ig = 999,
    ve = 64,
    td = new Int32Array(ig),
    vd = new Int32Array(ig),
    ud = new Int32Array(ig),
    wd = new Int32Array(ig),
    jg = new Float32Array(ig),
    sd = new Int8Array(ig),
    kg = [16773360, 16777200, 15794160, 15794175, 15790335, 16773375];

function Fd(a, c, b, d, e) {
    if (rd >= ig) return -1;
    var f = null,
        g = null,
        m = false,
        n = false;
    0 == a ? (f = C[b], D[b] == mc && (m = true)) : 1 == a ? f = y[b * gd + 1] : 2 == a && (f = B[b]);
    0 == c ? (g = C[d], D[d] == mc && (n = true)) : 1 == c ? g = y[d * gd + 1] : 2 == c && (g = B[d]);
    m && (G[b] = 1);
    n && (G[d] = 1);
    m ? f = 4 : (m = ~~g.x - ~~f.x, f = ~~g.y - ~~f.y, f = Math.sqrt(m * m + f * f));
    td[rd] = a;
    vd[rd] = c;
    ud[rd] = b;
    wd[rd] = d;
    jg[rd] = f;
    sd[rd] = e;
    0 == a && Id[b]++;
    0 == c && Id[d]++;
    1 == a && Ae[b]++;
    1 == c && Ae[d]++;
    2 == a && Ce[b]++;
    2 == c && Ce[d]++;
    rd++;
    return rd - 1
}

function lg(a, c) {
    for (var b = 0; b < rd; b++)
        if (td[b] == a && ud[b] == c || vd[b] == a && wd[b] == c) 0 == td[b] && D[ud[b]] == mc && (G[ud[b]] = 2), 0 == vd[b] && D[wd[b]] == mc && (G[wd[b]] = 2), rd--, 0 == td[b] && Id[ud[b]]--, 0 == vd[b] && Id[wd[b]]--, 1 == td[b] && Ae[ud[b]]--, 1 == vd[b] && Ae[wd[b]]--, 2 == td[b] && Ce[ud[b]]--, 2 == vd[b] && Ce[wd[b]]--, td[b] = td[rd], vd[b] = vd[rd], ud[b] = ud[rd], wd[b] = wd[rd], jg[b] = jg[rd], sd[b] = sd[rd], b--
}

function mg(a, c, b) {
    for (var d = 0; d < rd; d++) td[d] == a && ud[d] == c && (ud[d] = b), vd[d] == a && wd[d] == c && (wd[d] = b)
}
window.fff = ef;

function ef() {
    var a = new Vector2D,
        c, b = null,
        d = null,
        e = null,
        f = null,
        g = 1,
        m = 1;
    c = false;
    ve++;
    for (var n = 0; n < rd; n++) {
        c = false;
        0 == td[n] ? (b = C[ud[n]], e = J[ud[n]], g = Id[ud[n]] & 255, D[ud[n]] == mc && (c = true)) : 1 == td[n] ? (b = y[ud[n] * gd + 1], e = y[ud[n] * gd + 1], g = Ae[ud[n]] & 255) : 2 == td[n] && (b = B[ud[n]], e = W[ud[n]], g = Ce[ud[n]] & 255);
        0 == vd[n] ? (d = C[wd[n]], f = J[wd[n]], m = Id[wd[n]] & 255) : 1 == vd[n] ? (d = y[wd[n] * gd + 1], f = y[wd[n] * gd + 1], m = Ae[wd[n]] & 255) : 2 == vd[n] && (d = B[wd[n]], f = W[wd[n]], m = Ce[wd[n]] & 255);
        c && (Ye(a, C[wd[n]], C[ud[n]]), Rotate_Clockwise(a), Get_Unitary_Vector(a), Scale_Vect(a, 0.1), J[ud[n]].add(a),
            J[wd[n]].add(a));
        if (1 == sd[n]) Ye(a, d, b), Rotate_Clockwise(a), Get_Unitary_Vector(a), Scale_Vect(a, 0.1), e.sub(a), f.add(a);
        else if (2 == sd[n]) Ye(a, d, b), Rotate_Clockwise(a), Get_Unitary_Vector(a), Scale_Vect(a, 0.1), e.add(a), f.sub(a);
        else if (4 == sd[n]) continue;
        Ye(a, d, b);
        c || (1 != vd[n] && a.add(f), 1 != td[n] && a.sub(e));
        c = Get_Unitary_Vector(a);
        if (0 != c) {
            if (3 == sd[n]) {
                var t = ve & 255;
                128 <= t && (t = 256 - t);
                c = 0.5 * (jg[n] * (0.5 + t / 128) - c)
            } else c = 0.5 * (jg[n] - c);
            e.x -= a.x * c / (0.5 * g + 0.5);
            e.y -= a.y * c / (0.5 * g + 0.5);
            f.x += a.x * c / (0.5 * m + 0.5);
            f.y += a.y * c / (0.5 * m + 0.5);
            1 == td[n] && (e.x = Pe(e.x, 4, 508), e.y = Pe(e.y, 4, 292));
            1 == vd[n] && (f.x = Pe(f.x, 4, 508),
                f.y = Pe(f.y, 4, 292))
        }
    }
}
window.fff = Sf;

function Sf() {
    for (var a, c, b, d = null, e = null, f = 0, g = 0, m = 0; m < rd; m++) 0 == td[m] ? (d = C[ud[m]], f = E[ud[m]]) : 1 == td[m] ? (d = y[ud[m] * gd + 1], f = 16769198) : 2 == td[m] && (d = B[ud[m]], f = s[A[ud[m]]]), 0 == vd[m] ? (e = C[wd[m]], g = E[wd[m]]) : 1 == vd[m] ? (e = y[wd[m] * gd + 1], g = 16769198) : 2 == vd[m] && (e = B[wd[m]], g = s[A[wd[m]]]), a = (f >> 16 & 255) + (g >> 16 & 255) >> 1, c = (f >> 8 & 255) + (g >> 8 & 255) >> 1, b = (f & 255) + (g & 255) >> 1, 0 != Va ? 1 == Va ? kf(d.x, d.y, e.x, e.y, 14540253) : 2 == Va && kf(d.x, d.y, e.x, e.y, 2236962) : 5 != sd[m] && (10 == qa ? (a = Math.floor((2989 * a + 5866 * c + 1145 * b) / 1E4), kf(d.x, d.y, e.x, e.y,
        a << 16 | a << 8 | a)) : 14 == qa ? kf(d.x, d.y, e.x, e.y, 0) : kf(d.x, d.y, e.x, e.y, a << 16 | c << 8 | b))
}
var pd = p,
    lf = p + 4E4,
    C = Array(lf);
for (da = 0; da < lf; da++) C[da] = new Vector2D;
var J = Array(lf);
for (da = 0; da < lf; da++) J[da] = new Vector2D;
var D = new Int8Array(lf),
    G = new Int32Array(lf),
    E = new Int32Array(lf),
    I = new Int32Array(296 * h),
    H = new Int32Array(lf),
    ue = Array(296 * h),
    R = new Int16Array(296 * h),
    Id = new Uint8Array(lf),
    X = [0, 0, 0, 0, 0, 1, 2, 3, 1, 4, 1, 4, 1, 1, 4, 1, 2, 4, 1, 2, 1, 3, 0, 1, 2, 1, 3, 5, 2, 3, 4, 1, 3, 2, 4, 1, 2, 4, 5, 5, 1, 3, 4, 5, 4, 0, 0, 0, 0, 0, 4, 1, 4],
    pg = [0, 0, 0, 0, 0, 10, 25, 5, 20, 25, 20, 40, 10, 20, 0, 20, 25, 100, 40, 40, 50, 50, 0, 10, 100, 10, 25, 5, 25, 0, 10, 10, 5, 0, 25, 10, 25, 0, 10, 10, 50, 5, 50, 5, 0, 0, 0, 0, 0, 0, 0, 10, 25],
    qg = [0, 0, 0.9, 0.9, 0.9, 0.2, 0, 0, 0.2, 0.7, 0.2, 0.8, 0.2, 0, 0.2, 0.5, 0, 0.5, 0.3, 0, 0.9,
        0.2, 0, 0, 0, 0.3, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0.8, 0.2, 0, 0.9, 0.1, 0.1, 0.9, 0.9, 0.5, 0, 0.9, 0, 0, 0, 0, 0, 0.9, 0.9, 0.9
    ],
    rg = [0, 0, 0.9, 0.9, 0.9, 0.2, 0, 0, 0.2, 0.7, 0.2, 1, 0.2, 0, 0.2, 0.5, 0, 0.5, 0.3, 0, 0.9, 0.2, 0, 0, 0, 0.3, 0, 0, 1, 0, 0.9, 0.9, 0, 0, 0.2, 0.2, 0, 0.5, 0.1, 0.1, 0.9, 0.9, 0.5, 0, 0.9, 0, 0, 0, 0, 0, 0.9, 0.9, 0.9],
    sg = [512, -1, -512, 1],
    tg = [0, -1, 0, 1],
    ug = [1, 0, -1, 0],
    vg = [-513, -512, -511, 1, 513, 512, 511, -1],
    wg = [-0.7, 0, 0.7, 1, 0.7, 0, -0.7, -1],
    xg = [-0.7, -1, -0.7, 0, 0.7, 1, 0.7, 0],
    yg = [-1, 0, 1, 1, 1, 0, -1, -1],
    zg = [-1, -1, -1, 0, 1, 1, 1, 0],
    Ag = [-1025, -1024, -1023, -514, -513, -512, -511, -510, -2, -1, 1, 2, 510, 511, 512, 513, 514, 1023, 1024, 1025],
    Bg = [-2049, -2048, -2047, -1539, -1538, -1537, -1536, -1535, -1534, -1533, -1027, -1026, -1025, -1024, -1023, -1022, -1021, -516, -515, -514, -513, -512, -511, -510, -509, -508, -4, -3, -2, -1, 1, 2, 3, 4, 508, 509, 510, 511, 512, 513, 514, 515, 516, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 2047, 2048, 2049],
    Cg = [1, 1, 0, -1, -1, -1, 0, 1],
    Dg = [0, -1, -1, -1, 0, 1, 1, 1],
    Eg = [1, -511, -512, -513, -1, 511, 512, 513],
    Fg = [-4096, -3587, -3585, -3583, -3581, -3076, -3074, -3072, -3070, -3068, -2565, -2563, -2561, -2559, -2557, -2555, -2054, -2052, -2050, -2048, -2046, -2044, -2042, -1543, -1541, -1539, -1537, -1535, -1533, -1531, -1529, -1030, -1028, -1026, -1024, -1022, -1020, -1018, -519, -517, -515, -513, -511, -509, -507, -505, -8, -6, -4, -2, 0, 2, 4, 6, 8, 505, 507, 509, 511, 513, 515, 517, 519, 1018, 1020, 1022, 1024, 1026, 1028, 1030, 1529, 1531, 1533, 1535, 1537, 1539, 1541, 1543, 2042, 2044, 2046, 2048, 2050, 2052, 2054, 2555, 2557, 2559, 2561, 2563, 2565, 3068, 3070, 3072, 3074, 3076, 3581, 3583, 3585, 3587, 4096];

function L(a, c, b, d) {
    D[a] == mc && lg(0, a);
    D[a] = c;
    G[a] = b;
    E[a] = d
}

function Gg(a, c) {
    L(a, c, 0, s[c])
}

function Ad(a, c, b, d) {
    if (pd >= lf || 7 > a || 505 <= a || 7 > c || 289 <= c) return -1;
    Set_XY(C[pd], a + 0.5, c + 0.5);
    Set_XY(J[pd], 0, 0);
    D[pd] = b;
    G[pd] = d;
    E[pd] = s[b];
    H[pd] = ~~c * h + ~~a;
    I[H[pd]] = pd;
    Id[pd] = 0;
    pd++;
    return pd - 1
}

function qd(a) {
    if (pd != p) {
        I[H[a]] = Ib;
        pd--;
        for (var c = 0; c < Hg; c++) Ig[c] == a ? (Hg--, Ig[c] = Ig[Hg]) : Ig[c] == pd && (Ig[c] = a);
        lg(0, a);
        pd != a && (C[a].set(C[pd]), J[a].set(J[pd]), D[a] = D[pd], G[a] = G[pd], E[a] = E[pd], Id[a] = Id[pd], H[a] = H[pd], mg(0, pd, a), I[H[a]] = D[a] == Mb ? l : a)
    }
}
var Jg = 1781,
    Hg = 0,
    Ig = new Int32Array(Jg);

function Kg(a, c) {
    var b;
    b = C[a].x;
    C[a].x = C[c].x;
    C[c].x = b;
    b = C[a].y;
    C[a].y = C[c].y;
    C[c].y = b;
    b = I[H[a]];
    I[H[a]] = I[H[c]];
    I[H[c]] = b;
    b = H[a];
    H[a] = H[c];
    H[c] = b
}

function Lg(a, c, b) {
    I[H[a]] = Ib;
    Set_XY(C[a], c, b);
    H[a] = (b << 9) + ~~c;
    I[H[a]] = a
}

function Mg(a, c) {
    I[H[a]] = Ib;
    var b = Get_Magnitude(c);
    3.8 < b && Scale_Vect(c, 3.8 / b);
    b = (C[a].y << 9) + ~~(C[a].x + c.x);
    I[b] <= l && (C[a].x += c.x);
    b = (C[a].y + c.y << 9) + ~~C[a].x;
    I[b] <= l && (C[a].y += c.y);
    H[a] = (C[a].y << 9) + ~~C[a].x;
    I[H[a]] = a
}
var Ng = new Vector2D,
    Og = new Vector2D,
    Pg = new Vector2D;

function Qg(a, c) {
    var b = Get_Magnitude(c);
    3.8 < b && Scale_Vect(c, 3.8 / b);
    Set_XY(Pg, U[H[a]], V[H[a]]);
    var b = c.x * Pg.x + c.y * Pg.y,
        d = Og,
        e = Pg;
    d.x = e.x * b;
    d.y = e.y * b;
    Ye(Ng, c, Og);
    b = (C[a].y + Og.y << 9) + ~~(C[a].x + Og.x);
    I[b] <= l && C[a].add(Og);
    b = (C[a].y + Ng.y << 9) + ~~(C[a].x + Ng.x);
    I[b] <= l && C[a].add(Ng);
    H[a] = (C[a].y << 9) + ~~C[a].x;
    I[H[a]] = a
}
var Rg = [0, 0, 0, 0, 0, 0.05, 0.1, -0.1, 0.1, 0.1, 0.1, 0.1, 0.05, 0.1, 0, 0.1, 0.1, 0.2, 0.1, 0.1, 0.2, 0.4, 0, 0.05, 0.2, 0.3, 0.1, -0.1, 0.1, 0, 0.4, 0.4, 0, 0.2, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.4, 0.1, 0.05, -0.1, 0.4, 0, 0, 0, 0, 0, 0.2, 0.08, 0.2],
    Sg = [0, 0, 0, 0, 0, 0.1, 0, 0.5, 0.2, 0.2, 0.1, 0.2, 0, 0.9, 0, 0.1, 0, 0.2, 0.2, 0, 0.2, 0, 0, 0.1, 0, 0, 0.2, 0.1, 0, 0, 0.2, 0.2, 0, 0, 0, 0.1, 0, 0.2, 0, 0, 0, 0.9, 0.1, 0.1, 0.2, 0, 0, 0, 0, 0, 0.2, 0.05, 0.2],
    Tg = [0, 0, 0, 0, 0, 0.5, 0.95, 1, 0.5, 0.5, 0.5, 1, 0.95, 0.1, 0, 0.5, 1, 0.8, 0.8, 0.95, 0.8, 0.1, 0, 0.5, 0.95, 0.5, 0.5, 1, 1, 0, 0.8, 0.8, 0, 0.95, 0.5, 0.5, 0.95, 0.8, 1, 0.5,
        0.95, 0.8, 0.5, 1, 0.8, 0, 0, 0, 0, 0, 0.8, 0.95, 0.5
    ];

function Ug(a, c) {
    J[a].x += U[H[a]] * Rg[D[a]];
    J[a].y += V[H[a]] * Rg[D[a]];
    c.set(J[a]);
    c.x += P[R[H[a]]];
    c.y += Q[R[H[a]]];
    I[H[a]] = Ib;
    var b = Math.floor(Get_Magnitude(c) / 4) + 2;
    Scale_Vect(c, 1 / b);
    for (var d = 0, e; d < b; d++) e = (C[a].y << 9) + ~~(C[a].x + c.x), 4 > C[a].x + c.x || 508 <= C[a].x + c.x || (I[e] <= l ? C[a].x += c.x : (J[a].y *= Tg[D[a]], J[a].x *= -Sg[D[a]], c.x *= -Sg[D[a]])), e = (C[a].y + c.y << 9) + ~~C[a].x, 4 > C[a].y + c.y || 292 <= C[a].y + c.y || (I[e] <= l ? C[a].y += c.y : (J[a].x *= Tg[D[a]], J[a].y *= -Sg[D[a]], c.y *= -Sg[D[a]]));
    H[a] = (C[a].y << 9) + ~~C[a].x;
    I[H[a]] = a
}
window.fff = df;

function df() {
    var a, c = new Vector2D;
    if (!Flag_1 && 0 == Xa) {
        if (47 == ea && Me || 47 == fa && Ne) {
            a = new Vector2D;
            Hg = 0;
            for (var b = p; b < pd && !(Jg <= Hg); b++) D[b] != Mb && (a.x = ia - Math.floor(C[b].x), a.y = ja - Math.floor(C[b].y), Get_Squared_Magnitude(a) < oa * oa * 7 + 1 && (Ig[Hg++] = b))
        }
        if (47 == ea && Ve || 47 == fa && We)
            for (b = 0; b < Hg; b++) J[Ig[b]].x += 0.1 * (ia - C[Ig[b]].x), J[Ig[b]].y += 0.1 * (ja - C[Ig[b]].y);
        else Hg = 0
    }
    for (a = p; a < pd; a++) a = D[a] <= ac ? a - Wg(a, c) : D[a] <= lc ? a - Xg(a, c) : D[a] <= sc ? a - Yg(a, c) : D[a] <= Cc ? a - Zg(a, c) : a - $g(a, c);
    if (1 > xa)
        for (a = p; a < pd; a++) ue[H[a]] || qd(a--);
    else if (1 == xa)
        for (a = p; a < pd; a++)
            if (!ue[H[a]]) {
                a: {
                    for (c =
                        0; c < rd; c++)
                        if (0 == td[c] && ud[c] == a || 0 == vd[c] && wd[c] == a) {
                            c = true;
                            break a
                        }
                    c = false
                }
                c ? qd(a--) : 8 > C[a].x ? (c = H[a] + 496, I[c] <= l && 8 <= C[a].y && 288 > C[a].y ? (C[a].x += 496, I[H[a]] = Ib, H[a] = c, I[c] = a) : qd(a--)) : 504 <= C[a].x ? (c = H[a] - 496, I[c] <= l && 8 <= C[a].y && 288 > C[a].y ? (C[a].x -= 496, I[H[a]] = Ib, H[a] = c, I[c] = a) : qd(a--)) : 8 > C[a].y ? (c = H[a] + 280 * h, I[c] <= l ? (C[a].y += 280, I[H[a]] = Ib, H[a] = c, I[c] = a) : qd(a--)) : 288 <= C[a].y && (c = H[a] - 280 * h, I[c] <= l ? (C[a].y -= 280, I[H[a]] = Ib, H[a] = c, I[c] = a) : qd(a--))
            }
}
window.fff = Wg;

function Wg(a, c) {
    var b, d, e, f, g, m, n, t;
    if (D[a] == Rb)
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = ah(0.4);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.7), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
    else if (D[a] == q) {
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            b = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[b]] >= Nb ? (b = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[b] <= l && (d = bh(0.1, 0.2), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), b = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[b] <= l &&
                (d = bh(0.1, 0.2), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = ah(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Mg(a, c) : Qg(a, c)
        } else Ug(a, c);
        d = ed(8);
        b = I[H[a] + vg[d]];
        1 == X[D[b]] && D[b] != ec || D[b] == dc || D[b] == ic || D[b] == mc || D[b] == uc ? Lf(0.2) && 0.3 >= U[H[a]] * wg[d] + V[H[a]] * xg[d] && Kg(a, b) : D[b] == Vb && Lf(0.5) && L(a, Vb, 0, s[Vb]);
        d = ed(20);
        b = I[H[a] + Ag[d]];
        if (D[b] == cc) return L(b, dc, 0, s[dc]), qd(a),
            1
    } else if (D[a] == r) {
        if (0 == Id[a]) {
            if (1 != G[a] && Lf(0.05) || 1 == G[a] && Lf(0.2)) return qd(a), 1;
            d = ah(0.03);
            P[R[H[a]]] -= U[H[a]] * d;
            Q[R[H[a]]] -= V[H[a]] * d;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = bh(-0.5, 0.5);
            c.x += V[H[a]] * d;
            c.y -= U[H[a]] * d;
            2 == G[a] && (Scale_Vect(J[a], 0.9), c.add(J[a]));
            Mg(a, c)
        } else Ug(a, c);
        d = ed(20);
        b = I[H[a] + Ag[d]];
        if (b >= p)
            if (D[b] == Rb) L(b, r, 0, s[r]);
            else {
                if (D[b] == q || D[b] == uc) return qd(a), 1;
                D[b] == Sb ? Lf(0.5) && L(b, r, 0, s[r]) : D[b] == Wb ? L(b, q, 0, s[q]) : D[b] == sc && L(b, r, 0, s[r])
            }
    } else if (D[a] == Sb)
        if (0 == G[a]) {
            if (0 == Id[a]) {
                Set_XY(c, P[R[H[a]]],
                    Q[R[H[a]]]);
                d = ah(0.6);
                c.x += U[H[a]] * d;
                c.y += V[H[a]] * d;
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.8), c.add(J[a]);
                Mg(a, c)
            } else Ug(a, c);
            if (1E3 > lf - pd) return 0;
            b = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[b]] == Rb && (G[a] = 1);
            D[I[b]] == sc && (G[a] = 2);
            D[I[b]] == cc && (G[a] = 3);
            D[I[b]] == Tb && (G[a] = (G[I[b]] & 15) + 1)
        } else if (1 == G[a] || 2 == G[a]) {
        if (Set_XY(c, ~~C[a].x + 0.5, ~~C[a].y + 0.5), d = 1 == G[a] ? ah(1) : 1, c.x -= U[H[a]] * d, c.y -= V[H[a]] * d, d = ed(3) - 1, c.x += V[H[a]] * d, c.y -= U[H[a]] * d, b = I[(c.y << 9) + Math.floor(c.x)], b <= l && I[(c.y + V[H[a]] <<
                9) + Math.floor(c.x + U[H[a]])] <= l && (e = ~~C[a].x, f = ~~C[a].y, Lg(a, ~~c.x, ~~c.y), Ad(e, f, Tb, G[a] - 1)), Lf(0.05)) return qd(a), 1
    } else {
        if (3 <= G[a] && 5 >= G[a]) {
            Set_XY(c, ~~C[a].x + 0.5, ~~C[a].y + 0.5);
            if (3 == G[a]) {
                if (Lf(0.1) && (e = Math.floor(c.x - V[H[a]]), f = Math.floor(c.y + U[H[a]]), I[(f << 9) + e] <= l && Ad(e, f, Sb, 4)), Lf(0.1) && (e = Math.floor(c.x + V[H[a]]), f = Math.floor(c.y - U[H[a]]), I[(f << 9) + e] <= l && Ad(e, f, Sb, 5)), Lf(0.05)) return qd(a), 1
            } else if (4 == G[a]) {
                if (c.x -= V[H[a]], c.y += U[H[a]], Lf(0.15)) return qd(a), 1
            } else if (5 == G[a] && (c.x += V[H[a]], c.y -= U[H[a]], Lf(0.15))) return qd(a), 1;
            c.x -= U[H[a]];
            c.y -= V[H[a]];
            b = I[(c.y << 9) + ~~c.x];
            if (b <= l) {
                if (I[(c.y + U[H[a]] << 9) + Math.floor(c.x - V[H[a]])] > l || I[(c.y - U[H[a]] << 9) + Math.floor(c.x + V[H[a]])] > l) return 0;
                e = ~~C[a].x;
                f = ~~C[a].y;
                Lg(a, ~~c.x, ~~c.y);
                Ad(e, f, Tb, 2)
            }
        }
    } else if (D[a] == Tb) {
        if (0 == Id[a]) {
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.3), c.set(J[a]), Mg(a, c)
        } else Ug(a, c);
        if (16 > G[a])
            if (d = ed(20), b = D[I[H[a] + Ag[d]]], b == r) Lf(0.5) && (G[a] |= 16);
            else if (b == fc) G[a] |= 16;
        else {
            if (b == q) {
                if (1E3 > lf - pd) return 0;
                d = ed(8);
                I[H[a] + vg[d]] <= l && Lf(0.05) && Ad(~~C[a].x + yg[d], ~~C[a].y +
                    zg[d], Sb, 0)
            }
        } else g = Rb, 0 == (G[a] & 15) && (g = Rb), 1 == (G[a] & 15) && (g = sc), 2 == (G[a] & 15) && (g = cc), d = ed(8), b = D[I[H[a] + vg[d]]], b <= l ? Lf(0.3) && Ad(~~C[a].x + yg[d], ~~C[a].y + zg[d], r, 1) : b == q && L(a, g, 0, s[g]), Lf(0.005) && L(a, g, 0, s[g])
    } else if (D[a] == Ub) {
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = ah(0.8);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.8), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        d = ed(20);
        b = D[I[H[a] + Ag[d]]];
        if (3 != X[b]) return 0;
        n = ~~C[a].x;
        t = ~~C[a].y;
        d = If(n - 8, 8);
        b = If(t - 8,
            8);
        g = Rf(n + 8, 503);
        m = Rf(t + 8, 287);
        for (f = b; f <= m; f++)
            for (e = d; e <= g; e++) 64 < (e - n) * (e - n) + (f - t) * (f - t) || (b = (f + t >> 1 << 9) + (e + n >> 1), 1 <= x[R[b]] || (b = I[(f << 9) + e], b >= p && D[b] != Ub && (D[b] == ec && L(b, cc, 0, s[cc]), J[b].x += e - n, J[b].y += f - t)));
        n = Pe(n, 12, 499);
        t = Pe(t, 12, 283);
        d = (t >> 2 << 7) + (n >> 2);
        0 == x[b = d - w - 1] && (P[b] -= 0.4, Q[b] -= 0.4);
        0 == x[b = d - w] && (Q[b] -= 0.5);
        0 == x[b = d - w + 1] && (P[b] += 0.4, Q[b] -= 0.4);
        0 == x[b = d - 1] && (P[b] -= 0.5);
        0 == x[b = d + 1] && (P[b] += 0.5);
        0 == x[b = d + w - 1] && (P[b] -= 0.4, Q[b] += 0.4);
        0 == x[b = d + w] && (Q[b] += 0.5);
        0 == x[b = d + w + 1] && (P[b] += 0.4, Q[b] +=
            0.4);
        L(a, r, 0, s[r])
    } else if (D[a] == Mb) Lf(0.9) && (P[R[H[a]]] += J[a].x, Q[R[H[a]]] += J[a].y), I[H[a]] == Ib && (I[H[a]] = l);
    else if (D[a] == Vb) 0 == Id[a] ? (Set_XY(c, P[R[H[a]]], Q[R[H[a]]]), 1 < Get_Squared_Magnitude(c) && Lf(0.5) && L(a, Wb, 0, s[Wb])) : Ug(a, c), d = ed(20), b = D[I[H[a] + Ag[d]]], 3 == X[b] && L(a, q, 0, s[q]);
    else if (D[a] == Wb) {
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = ah(0.3);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.7), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        d = ed(8);
        b = I[H[a] + vg[d]];
        b >= p && D[b] != Tb && D[b] !=
            Wb && D[b] != Yb && D[b] != sc && D[b] != Bc && (D[b] == Vb ? L(a, Vb, 0, s[Vb]) : Lf(0.1) && L(a, q, 0, s[q]))
    } else if (D[a] == Xb) 0 == Id[a] ? (J[a].x += 0.05 * P[R[H[a]]], J[a].y += 0.05 * Q[R[H[a]]], J[a].x += 0.01 * U[H[a]], J[a].y += 0.01 * V[H[a]], Scale_Vect(J[a], 0.999), c.set(J[a]), I[H[a]] = Ib, b = Get_Magnitude(c), 3.8 < b && Scale_Vect(c, 3.8 / b), b = I[(C[a].y << 9) + Math.floor(C[a].x + c.x)], b <= l ? C[a].x += c.x : 2 == X[D[b]] ? (J[b].x -= J[a].x, J[a].x *= 0.9, C[b].x = C[a].x, C[a].x += c.x, H[b] = H[a], I[H[a]] = b) : D[b] == r ? Kg(a, b) : D[b] == Xb ? (d = 0.9 * J[a].x, J[a].x = 0.9 * J[b].x, J[b].x = d) : (J[a].x *= -qg[D[b]], J[a].y *= rg[D[b]]),
        H[a] = (C[a].y << 9) + Math.floor(C[a].x), I[H[a]] = Ib, b = I[(C[a].y + c.y << 9) + Math.floor(C[a].x)], b <= l ? C[a].y += c.y : 2 == X[D[b]] ? (J[b].y -= J[a].y, J[a].y *= 0.9, C[b].y = C[a].y, C[a].y += c.y, H[b] = H[a], I[H[a]] = b) : D[b] == r ? Kg(a, b) : D[b] == Xb ? 0 < J[a].y ? (d = 0.45 * J[a].y, J[a].y = -d, J[a].y += J[b].y, J[b].y = d) : (d = 0.45 * J[b].y, J[b].y = -d, J[b].y += J[a].y, J[a].y = d) : (J[a].y *= -qg[D[b]], J[a].x *= rg[D[b]]), H[a] = (C[a].y << 9) + Math.floor(C[a].x), I[H[a]] = a) : Ug(a, c);
    else if (D[a] == Yb)
        if (0 != Id[a] && Set_XY(J[a], 0, 0), 0 == G[a]) d = ed(20), b = I[H[a] + Ag[d]], b >= p && (G[a] = D[b] == Yb ? G[b] : D[b]);
        else {
            if (1E3 >
                lf - pd) return 0;
            d = ed(8);
            I[H[a] + vg[d]] <= l && Lf(0.1) && Ad(~~C[a].x + yg[d], ~~C[a].y + zg[d], G[a], 0)
        }
    if (D[a] == $b) {
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = ah(0.8);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        0 == (G[a] & 255) && (G[a] = 0 != Nc[ea] ? Nc[ea] : 0 != Nc[fa] ? Nc[fa] : Rb);
        if (256 > G[a]) d = ed(8), b = I[H[a] + vg[d]], 3 == X[D[b]] && (G[a] += 256);
        else if (512 > G[a]) J[a].x = 50 * -U[H[a]], J[a].y = 50 * -V[H[a]], G[a] += 256;
        else {
            if (12800 > G[a]) return G[a] +=
                256, 0;
            if (Lf(0.95)) return 0;
            if (1E3 > lf - pd) return qd(a), 1;
            for (d = 0; 8 > d; d++) b = I[H[a] + vg[d]], b <= l && (b = Ad(~~C[a].x + yg[d], ~~C[a].y + zg[d], G[a] & 255, 0), 0 <= b && (J[b].x += 20 * wg[d], J[b].y += 20 * xg[d]));
            qd(a);
            return 1
        }
    } else if (D[a] == ac) {
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            b = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[b]] >= Nb ? (b = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[b] <= l && (d = bh(0.1, 0.2), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), b = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[b] <= l && (d = bh(0.1, 0.2), J[a].x += V[H[a]] *
                d, J[a].y -= U[H[a]] * d), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = ah(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Mg(a, c) : Qg(a, c)
        } else Ug(a, c);
        d = ed(8);
        b = I[H[a] + vg[d]];
        1 == X[D[b]] && D[b] != ec || D[b] == q || D[b] == dc || D[b] == ic || D[b] == uc ? Lf(0.2) && 0.3 >= U[H[a]] * wg[d] + V[H[a]] * xg[d] && Kg(a, b) : 3 == X[D[b]] && (G[a] = 1);
        if (1 == G[a] && (d = ed(8), I[H[a] + vg[d]] <= l && Ad(~~C[a].x + yg[d], ~~C[a].y + zg[d], r, 0), Lf(0.1))) return qd(a), 1
    }
    return 0
}
window.fff = Xg;

function Xg(a, c) {
    var b, d, e, f, g, m, n, t, u;
    if (D[a] == bc)
        if (0 != Id[a] && Ug(a, c), 0 == G[a]) e = ed(8), b = I[H[a] + vg[e]], 3 == X[D[b]] && (G[a] = 1);
        else {
            for (d = 0; 8 > d; d++) b = I[H[a] + vg[d]], D[b] == bc && (G[b] = 1);
            var F = 8;
            t = ~~C[a].x;
            u = ~~C[a].y;
            e = If(t - F, 8);
            d = If(u - F, 8);
            m = Rf(t + F, 503);
            n = Rf(u + F, 287);
            for (g = d; g <= n; g++)
                for (f = e; f <= m; f++) F * F < (f - t) * (f - t) + (g - u) * (g - u) || (d = (g + u >> 1 << 9) + (f + t >> 1), 1 <= x[R[d]] || (b = I[(g << 9) + f], b >= p && (D[b] == ec && L(b, cc, 0, s[cc]), J[b].x += f - t, J[b].y += g - u)));
            t = Pe(t, 12, 499);
            u = Pe(u, 12, 283);
            e = (u >> 2 << 7) + (t >> 2);
            0 == x[d = e - w - 1] &&
                (P[d] -= 0.08, Q[d] -= 0.08);
            0 == x[d = e - w] && (Q[d] -= 0.1);
            0 == x[d = e - w + 1] && (P[d] += 0.1, Q[d] -= 0.08);
            0 == x[d = e - 1] && (P[d] -= 0.1);
            0 == x[d = e + 1] && (P[d] += 0.1);
            0 == x[d = e + w - 1] && (P[d] -= 0.08, Q[d] += 0.08);
            0 == x[d = e + w] && (Q[d] += 0.1);
            0 == x[d = e + w + 1] && (P[d] += 0.08, Q[d] += 0.08);
            qd(a);
            return 1
        }
    else if (D[a] == cc)
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = ah(1);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.8), c.add(J[a]);
            b = ~~C[a].x + 0.5;
            e = ~~C[a].y + 0.5;
            d = (e + V[H[a]] << 9) + Math.floor(b + U[H[a]]);
            D[I[d]] >= Nb && (Lf(0.5) ? (d = (e + V[H[a]] + U[H[a]] << 9) + Math.floor(b + U[H[a]] - V[H[a]]), I[d] <= l && (c.x -= 0.5 * V[H[a]], c.y += 0.5 * U[H[a]])) : (d = (e + V[H[a]] - U[H[a]] << 9) + Math.floor(b + U[H[a]] + V[H[a]]), I[d] <= l && (c.x += 0.5 * V[H[a]], c.y -= 0.5 * U[H[a]])));
            Mg(a, c)
        } else Ug(a, c);
    else if (D[a] == dc) {
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[d]] >= Nb ? (d = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[d] <= l && (d = ah(0.05), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), d = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[d] <= l && (d =
                ah(0.05), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = ah(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Mg(a, c) : Qg(a, c)
        } else Ug(a, c);
        e = ed(8);
        b = I[H[a] + vg[e]];
        1 == X[D[b]] && D[b] != ec ? Lf(0.2) && 0.3 >= U[H[a]] * wg[e] + V[H[a]] * xg[e] && Kg(a, b) : 3 == X[D[b]] && L(a, cc, 0, s[cc])
    } else if (D[a] == ec)
        if (0 == Id[a]) {
            J[a].x += 0.05 * P[R[H[a]]];
            J[a].y += 0.05 * Q[R[H[a]]];
            d = ah(0.12);
            J[a].x += U[H[a]] * d;
            J[a].y +=
                V[H[a]] * d;
            Scale_Vect(J[a], 0.95);
            c.set(J[a]);
            d = Get_Magnitude(c);
            3.8 < d && Scale_Vect(c, 3.8 / d);
            I[H[a]] = Ib;
            b = I[(C[a].y << 9) + Math.floor(C[a].x + c.x)];
            if (b <= l) C[a].x += c.x;
            else if (2 == X[D[b]] || D[b] == fc) J[b].x -= J[a].x, J[a].x *= 0.5, C[b].x = C[a].x, C[a].x += c.x, H[b] = H[a], I[H[a]] = b;
            else {
                if (D[b] == Rb || D[b] == Sb || D[b] == Ub || D[b] == $b || D[b] == jc) J[b].x += ah(J[a].x);
                J[a].x *= 0.5
            }
            H[a] = (C[a].y << 9) + ~~C[a].x;
            I[H[a]] = Ib;
            b = I[(C[a].y + c.y << 9) + Math.floor(C[a].x)];
            if (b <= l) C[a].y += c.y;
            else if (2 == X[D[b]] || D[b] == fc) J[b].y -= J[a].y, J[a].y *= 0.5, C[b].y = C[a].y, C[a].y += c.y, H[b] = H[a], I[H[a]] =
                b;
            else {
                if (D[b] == Rb || D[b] == Sb || D[b] == Ub || D[b] == $b || D[b] == jc) J[b].y += ah(J[a].y);
                J[a].y *= 0.5
            }
            H[a] = (C[a].y << 9) + ~~C[a].x;
            I[H[a]] = a
        } else Ug(a, c);
    else if (D[a] == fc) {
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, 0.1 * P[R[H[a]]], 0.1 * Q[R[H[a]]]);
            d = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[d]] >= Nb ? (d = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[d] <= l && (d = ah(0.1), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), d = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[d] <= l && (d = ah(0.1), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = ah(2), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Mg(a, c) : Qg(a, c)
        } else Ug(a, c);
        e = ed(20);
        b = I[H[a] + Ag[e]];
        b >= p && (D[b] == Rb ? L(b, r, 0, s[r]) : D[b] == q || D[b] == mc ? (L(a, ec, 0, s[ec]), L(b, gc, 10, s[gc])) : D[b] == Sb ? L(b, r, 0, s[r]) : D[b] == Xb ? L(b, r, 0, s[r]) : D[b] == cc ? Lf(0.05) && L(b, fc, 0, s[fc]) : D[b] == ec ? J[b].x += bh(-0.1, 0.1) : D[b] == sc ? L(b, r, 0, s[r]) : D[b] == uc ? (L(a, ec, 0, s[ec]), L(b, tc, 0, s[tc])) : D[b] == vc ? Lf(0.5) && L(b, fc, 0, s[fc]) : D[b] ==
            yc && Lf(0.01) && L(b, fc, 0, s[fc]))
    } else if (D[a] == gc) {
        if (1 > ah(G[a])) return qd(a), 1;
        c.set(J[a]);
        Scale_Vect(J[a], 0.7);
        Mg(a, c)
    } else if (D[a] == hc) {
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = ah(0.4);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.7), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        e = ed(8);
        b = I[H[a] + vg[e]];
        0 == G[a] ? b >= p && D[b] != hc && (G[a] = D[b]) : 4096 >= G[a] ? (b >= p && (D[b] == hc && 0 != G[b] || L(b, hc, G[a] & 255, s[hc])), G[a] += 256) : (G[a] += 256, 24576 <= G[a] && L(a, G[a] & 255, 0, s[G[a] & 255]))
    } else if (D[a] ==
        ic) {
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[d]] >= Nb ? (d = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[d] <= l && (d = bh(0.1, 0.2), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), d = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[d] <= l && (d = bh(0.1, 0.2), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = ah(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Mg(a,
                c) : Qg(a, c)
        } else Ug(a, c);
        e = ed(8);
        b = I[H[a] + vg[e]];
        1 == X[D[b]] && D[b] != ec || D[b] == dc ? Lf(0.2) && 0.3 >= U[H[a]] * wg[e] + V[H[a]] * xg[e] && Kg(a, b) : 3 == X[D[b]] && (G[a] = 1);
        if (0 == G[a] && 10 > Get_Magnitude(J[a])) return 0;
        F = 8;
        t = ~~C[a].x;
        u = ~~C[a].y;
        e = If(t - F, 8);
        d = If(u - F, 8);
        m = Rf(t + F, 503);
        n = Rf(u + F, 287);
        for (g = d; g <= n; g++)
            for (f = e; f <= m; f++) F * F < (f - t) * (f - t) + (g - u) * (g - u) || (d = (g + u >> 1 << 9) + (f + t >> 1), 1 <= x[R[d]] || (b = I[(g << 9) + f], b >= p && (D[b] == ec && L(b, cc, 0, s[cc]), J[b].x += f - t, J[b].y += g - u)));
        t = Pe(t, 12, 499);
        u = Pe(u, 12, 283);
        e = (u >> 2 << 7) + (t >> 2);
        0 == x[d = e - w - 1] && (P[d] -=
            0.4, Q[d] -= 0.4);
        0 == x[d = e - w] && (Q[d] -= 0.5);
        0 == x[d = e - w + 1] && (P[d] += 0.4, Q[d] -= 0.4);
        0 == x[d = e - 1] && (P[d] -= 0.5);
        0 == x[d = e + 1] && (P[d] += 0.5);
        0 == x[d = e + w - 1] && (P[d] -= 0.4, Q[d] += 0.4);
        0 == x[d = e + w] && (Q[d] += 0.5);
        0 == x[d = e + w + 1] && (P[d] += 0.4, Q[d] += 0.4);
        L(a, r, 0, s[r])
    } else if (D[a] == jc) {
        e = ed(8);
        b = I[H[a] + vg[e]];
        if (3 == X[D[b]]) return L(a, r, 0, s[r]), 0;
        if (0 == G[a]) {
            if (0 == Id[a]) {
                Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
                d = ah(0.5);
                c.x += U[H[a]] * d;
                c.y += V[H[a]] * d;
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
                Mg(a, c)
            } else Ug(a,
                c);
            e = ed(4);
            b = I[H[a] + sg[e]];
            4 == X[D[b]] && D[b] != Yb && D[b] != Kc && (G[a] = D[b] << 2 | e)
        } else {
            if (1E3 > lf - pd) return 0;
            e = G[a] & 3;
            d = H[a] + sg[e];
            b = I[d];
            if (b <= l) G[a] = G[a] & 16777212 | e + 1 & 3, Ad(d & 511, d >> 9, jc, G[a]), L(a, G[a] >> 2, 0, s[G[a] >> 2]);
            else {
                if (b >= p) return D[b] == G[a] >> 2 && (G[a] = G[a] & 16777212 | e - 1 & 3), L(b, jc, G[a], s[jc]), qd(a), 1;
                G[a] = G[a] & 16777212 | e + 1 & 3
            }
        }
    } else if (D[a] == kc) {
        if (0 != Id[a] && Ug(a, c), e = ed(20), b = I[H[a] + Ag[e]], b >= p)
            if (D[b] == Rb) L(b, r, 0, s[r]);
            else {
                if (D[b] == q || D[b] == mc || D[b] == uc) return qd(a), 1;
                D[b] == Sb ? L(b, r, 0, s[r]) : D[b] ==
                    Tb ? L(b, kc, 0, s[kc]) : D[b] == Xb ? L(b, r, 0, s[r]) : D[b] == sc && L(b, r, 0, s[r])
            }
    } else if (D[a] == lc) {
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            d = ah(-0.1);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        e = ed(4);
        b = I[H[a] + sg[e]];
        1 == X[D[b]] || 2 == X[D[b]] ? 0.3 >= U[H[a]] * tg[e] + V[H[a]] * ug[e] && Kg(a, b) : D[b] == lc && (J[a].x += bh(-0.6, 0.6), J[a].y += bh(-0.6, 0.6));
        if (0 == G[a]) {
            if (e = ed(20), b = I[H[a] + Ag[e]], 3 != X[D[b]]) return 0
        } else if (2 > G[a]) return G[a]++, 0;
        F = 8;
        t = ~~C[a].x;
        u = ~~C[a].y;
        e = If(t - F, 8);
        d = If(u - F, 8);
        m = Rf(t + F, 503);
        n = Rf(u + F, 287);
        for (g = d; g <= n; g++)
            for (f = e; f <= m; f++) F * F < (f - t) * (f - t) + (g - u) * (g - u) || (d = (g + u >> 1 << 9) + (f + t >> 1), 1 <= x[R[d]] || (b = I[(g << 9) + f], D[b] == lc && (G[b] = 1), b <= l && Lf(0.02) && Ad(f, g, r, 0)));
        L(a, r, 0, s[r])
    }
    return 0
}
window.fff = Yg;

function Yg(a, c) {
    var b, d, e, f, g, m, n, t, u, F;
    if (D[a] == mc)
        if (0 == G[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            f = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[f]] >= Nb ? (f = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[f] <= l && (e = bh(0.1, 0.2), J[a].x -= V[H[a]] * e, J[a].y += U[H[a]] * e), f = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[f] <= l && (e = bh(0.1, 0.2), J[a].x += V[H[a]] * e, J[a].y -= U[H[a]] * e), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (e = ah(1.5), c.x += U[H[a]] * e, c.y += V[H[a]] * e);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 <
                J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            E[a] = s[mc];
            if (10 < Get_Squared_Magnitude(c) && 3 <= ig - rd) {
                for (d = e = 0; 60 > d; d++) b = I[H[a] + Bg[d]], D[b] == mc && 0 == G[b] && e++;
                if (2 <= e) {
                    e = a;
                    for (d = 0; 60 > d && !(b = I[H[a] + Bg[d]], D[b] == mc && 0 == G[b] && (Fd(0, 0, e, b, 0), e = b, 1 >= ig - rd)); d++);
                    Fd(0, 0, e, a, 0)
                }
            }
            0 == V[H[a]] ? Mg(a, c) : Qg(a, c);
            e = ed(8);
            b = I[H[a] + vg[e]];
            if (1 == X[D[b]] && D[b] != ec || D[b] == dc || D[b] == ic || D[b] == uc) Lf(0.2) && 0.3 >= U[H[a]] * wg[e] + V[H[a]] * xg[e] && Kg(a, b);
            else if (D[b] == Vb) Lf(0.5) && L(a, Vb, 0, s[Vb]);
            else if (D[b] == ac) return L(b, gc, 0, s[D[b]]), qd(a), 1
        } else Set_XY(c, P[R[H[a]]],
            Q[R[H[a]]]), Scale_Vect(J[a], 0.9), c.add(J[a]), Mg(a, c), E[a] == s[mc] && (E[a] = kg[ed(6)]), e = ed(8), b = I[H[a] + vg[e]], D[b] == mc && 0 == G[b] ? Lf(0.2) && 0.3 >= U[H[a]] * wg[e] + V[H[a]] * xg[e] && Kg(a, b) : Jb <= b && D[b] != mc && (lg(0, a), G[a] = 0), 2 == G[a] && (lg(0, a), G[a] = 0);
    else if (D[a] == nc)
        if (e = G[a] >> 12, n = G[a] >> 10 & 3, b = G[a] & 1023, 0 == b && (b = R[H[a]] % 1E3), b = 73 * b % 955 + 44, 0 == n ? (n = b % 3, 0 == n ? (g = -1, n = d = 1) : 1 == n ? (d = g = 1, n = 3) : (g = 0, d = 1, n = 0)) : 1 == n ? 0 == (b & 1) ? (g = -1, n = d = 1) : (g = 0, d = 1, n = 0) : 0 == (b & 1) ? (d = g = 1, n = 3) : (g = 0, d = 1, n = 0), 1 == e ? (m = g, g = -d, d = m) : 2 == e ? (g = -g, d = -d) : 3 == e &&
            (m = g, g = d, d = -m), n = e << 12 | n << 10 | b, f = (C[a].y + d << 9) + Math.floor(C[a].x + g), b = I[f], b <= l) I[H[a]] = Ib, C[a].x += g, C[a].y += d, G[a] = n, H[a] = f, I[H[a]] = a;
        else if (D[b] == nc) {
        if (G[b] != n) return qd(a), 1
    } else {
        if (D[b] == oc) return L(b, oc, e + 1, s[nc]), qd(a), 1;
        if (D[b] == yc) return L(b, yc, e + 1, s[nc]), qd(a), 1;
        if (D[b] == Ic) return 0 == G[b] && (G[b] = 1), qd(a), 1;
        if (D[b] == Bc) Kg(a, b);
        else {
            if (p <= b) {
                var M = 4;
                t = ~~C[a].x;
                u = ~~C[a].y;
                e = If(t - M, 8);
                f = If(u - M, 8);
                m = Rf(t + M, 503);
                n = Rf(u + M, 287);
                var $ = t + bh(-0.5, 0.5),
                    Ca = u + bh(-0.5, 0.5);
                for (d = f; d <= n; d++)
                    for (g = e; g <= m; g++) M *
                        M < (g - t) * (g - t) + (d - u) * (d - u) || (b = I[(d << 9) + g], b >= p && D[b] != nc && (D[b] == Vb ? L(b, Wb, 0, s[Wb]) : D[b] == $b && 256 > G[b] ? G[b] += 512 : D[b] == ac && (G[b] = 1), J[b].x -= 2 * (g - $), J[b].y -= 2 * (d - Ca)))
            }
            qd(a);
            return 1
        }
    } else if (D[a] == oc)
        if (0 != Id[a] && Ug(a, c), 0 == G[a]) e = ed(20), b = I[H[a] + Ag[e]], D[b] == q ? Lf(0.02) && L(a, Rb, 0, s[Rb]) : D[b] == fc && Lf(0.02) && L(a, fc, 0, s[fc]);
        else {
            e = ed(4);
            b = I[H[a] + sg[e]];
            D[b] == Vb ? L(b, q, 0, s[q]) : D[b] == $b && 256 > G[b] && (G[b] += 256);
            e = G[a] - 1;
            for (d = 0; 4 > d; d++)
                if (2 != d)
                    if (b = I[H[a] + sg[e + d & 3]], D[b] == oc) {
                        0 == G[b] ? (Kg(a, b), G[a] = (e + d &
                            3) + 1) : L(a, oc, 0, s[oc]);
                        break
                    } else if (D[b] == yc) {
                L(b, yc, (e + d & 3) + 1, s[nc]);
                L(a, oc, 0, s[oc]);
                break
            } else D[b] == vc && 0 == G[b] ? L(b, vc, 2, s[nc]) : D[b] == Ic && 0 == G[b] && (G[b] = 1);
            4 == d && (I[H[a] + sg[e]] <= l && Ad(~~C[a].x + tg[e], ~~C[a].y + ug[e], nc, e << 12), L(a, oc, 0, s[oc]))
        }
    if (D[a] == pc) {
        0 == Id[a] ? (Set_XY(c, P[R[H[a]]], Q[R[H[a]]]), J[a].x += 0.05 * U[H[a]], J[a].y += 0.05 * V[H[a]], (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) && Scale_Vect(J[a], 0.95), c.add(J[a]), Mg(a, c)) : Ug(a, c);
        if (0 != G[a]) {
            if (Lf(0.95)) return 0;
            if (G[a] == Vb) L(a, Wb, 0, s[Wb]);
            else if (G[a] ==
                Tb) L(a, Rb, 0, s[Rb]);
            else if (G[a] == ec) L(a, cc, 0, s[cc]);
            else if (G[a] == sc) L(a, Rb, 0, s[Rb]);
            else if (G[a] == ic) L(a, r, 1, s[r]);
            else if (G[a] == kc) L(a, r, 1, s[r]);
            else if (G[a] == mc) L(a, gc, 10, s[gc]);
            else if (G[a] == oc) L(a, oc, 0, s[oc]);
            else if (G[a] == vc) L(a, ec, 0, s[ec]);
            else if (G[a] == Cc) L(a, zc, 0, s[zc]);
            else if (G[a] == Jc) L(a, zc, 1, s[zc]);
            else return qd(a), 1;
            return 0
        }
        e = ed(8);
        b = I[H[a] + vg[e]];
        if (b < p || D[b] == pc || D[b] == Yb) return 0;
        F = D[b];
        M = 8;
        t = ~~C[a].x;
        u = ~~C[a].y;
        e = If(t - M, 8);
        f = If(u - M, 8);
        m = Rf(t + M, 503);
        n = Rf(u + M, 287);
        $ = t + bh(-0.5, 0.5);
        Ca = u + bh(-0.5, 0.5);
        Set_XY(c, 0, 0);
        for (d = f; d <= n; d++)
            for (g = e; g <= m; g++) M * M < (g - t) * (g - t) + (d - u) * (d - u) || (b = I[(d << 9) + g], p <= b && D[b] != pc && (c.x += $ - g, c.y += Ca - d));
        Get_Unitary_Vector(c);
        for (d = f; d <= n; d++)
            for (g = e; g <= m; g++) M * M < (g - t) * (g - t) + (d - u) * (d - u) || (f = (d + u >> 1 << 9) + (g + t >> 1), 1 <= x[R[f]] || (b = I[(d << 9) + g], p <= b && D[b] != Yb && (J[b].x += c.x + ($ - g), J[b].y += c.y + (Ca - d), D[b] == pc && 0 != G[b] || L(b, pc, F, s[pc]))))
    } else if (D[a] == qc) {
        e = G[a] & 15;
        g = G[a] >> 4 & 15;
        n = G[a] >> 8 & 255;
        g++;
        if (1 == g) return G[a] = n << 8 | g << 4 | e, 0;
        if (12 < g) return n == vc ? L(a, vc, 0, s[vc]) : n == Ic ? L(a, Ic, 0, E[a]) :
            qd(a), 1;
        if (8 < g) return G[a] = n << 8 | g << 4 | e, 0;
        if (0 == e)
            if (M = I[H[a] + Eg[0]], D[M] == qc && (M = 0), b = I[H[a] + Eg[1]], D[b] == qc && (b = 0), d = I[H[a] + Eg[2]], D[d] == qc && (d = 0), f = I[H[a] + Eg[3]], D[f] == qc && (f = 0), m = I[H[a] + Eg[4]], D[m] == qc && (m = 0), t = I[H[a] + Eg[5]], D[t] == qc && (t = 0), u = I[H[a] + Eg[6]], D[u] == qc && (u = 0), F = I[H[a] + Eg[7]], D[F] == qc && (F = 0), 1 <= f && 1 <= m && 1 <= t) e = 1;
            else if (1 <= t && 1 <= u && 1 <= F) e = 3;
        else if (1 <= F && 1 <= M && 1 <= b) e = 5;
        else if (1 <= b && 1 <= d && 1 <= f) e = 7;
        else if (1 <= t) e = 2;
        else if (1 <= F) e = 4;
        else if (1 <= b) e = 6;
        else if (1 <= f) e = 8;
        else return G[a] =
            160 | e, 0;
        e -= 1;
        b = I[H[a] + Eg[e]];
        if (p <= b)
            if (D[b] == qc)
                for (d = 2; 4 >= d; d++) {
                    if (b = I[H[a] + Eg[e] * d], D[b] != qc) {
                        if (b <= l) {
                            if (1E3 > lf - pd) break;
                            f = Ad(~~C[a].x + Cg[e] * d, ~~C[a].y + Dg[e] * d, qc, e + 1);
                            0 <= f && (E[f] = E[a])
                        }
                        break
                    }
                } else if (D[b] == oc || D[b] == yc) {
                    b = I[H[a] + Eg[e + 1 & 7]];
                    D[b] != oc && D[b] != yc && (b = 0);
                    d = I[H[a] + Eg[e + 2 & 7]];
                    D[d] != oc && D[d] != yc && (d = 0);
                    f = I[H[a] + Eg[e + 3 & 7]];
                    D[f] != oc && D[f] != yc && (f = 0);
                    m = I[H[a] + Eg[e + 4 & 7]];
                    D[m] != oc && D[m] != yc && (m = 0);
                    t = I[H[a] + Eg[e + 5 & 7]];
                    D[t] != oc && D[t] != yc && (t = 0);
                    u = I[H[a] + Eg[e + 6 & 7]];
                    D[u] != oc && D[u] != yc && (u = 0);
                    F = I[H[a] + Eg[e + 7 & 7]];
                    D[F] != oc && D[F] != yc && (F = 0);
                    M = I[H[a] + Eg[e] + Eg[e + 1 & 7]];
                    D[M] != oc && D[M] != yc && (M = 0);
                    $ = I[H[a] + Eg[e] + Eg[e + 2 & 7]];
                    D[$] != oc && D[$] != yc && ($ = 0);
                    Ca = I[H[a] + Eg[e] + Eg[e + 3 & 7]];
                    D[Ca] != oc && D[Ca] != yc && (Ca = 0);
                    var Ob = I[H[a] + Eg[e] + Eg[e + 5 & 7]];
                    D[Ob] != oc && D[Ob] != yc && (Ob = 0);
                    var Zb = I[H[a] + Eg[e] + Eg[e + 6 & 7]];
                    D[Zb] != oc && D[Zb] != yc && (Zb = 0);
                    var ub = I[H[a] + Eg[e] + Eg[e + 7 & 7]];
                    D[ub] != oc && D[ub] != yc && (ub = 0);
                    if (0 == (e & 1)) 1 <= t && 1 <= u && 1 > b && 1 > d ? e = e + 1 & 7 : 1 <= d && 1 <= f && 1 > F && 1 > u ? e = e - 1 & 7 : 1 <= b && 1 <= u && 1 > d && 1 > f && 1 > t ? e = e + 3 & 7 : 1 <= M && 1 <= Zb &&
                        1 > $ && 1 > Ca && 1 > Ob ? e = e + 3 & 7 : 1 <= d && 1 <= F && 1 > f && 1 > t && 1 > u ? e = e - 3 & 7 : 1 <= $ && 1 <= ub && 1 > Ca && 1 > Ob && 1 > Zb ? e = e - 3 & 7 : 1 <= u && 1 > b && 1 > d && 1 > t ? e = e + 2 & 7 : 1 <= d && 1 > f && 1 > t && 1 > u && (e = e - 2 & 7);
                    else {
                        var Df = I[H[a] + Eg[e] + Eg[e + 2 & 7] + Eg[e + 3 & 7]];
                        D[Df] != oc && D[Df] != yc && (Df = 0);
                        var Ef = I[H[a] + Eg[e] + Eg[e + 6 & 7] + Eg[e + 5 & 7]];
                        D[Ef] != oc && D[Ef] != yc && (Ef = 0);
                        1 <= F && 1 <= t && 1 > b && 1 > m ? e = e + 1 & 7 : 1 <= b && 1 <= f && 1 > m && 1 > F ? e = e - 1 & 7 : 1 <= b && 1 <= u && 1 <= F && 1 > d && 1 > t ? e = e + 3 & 7 : 1 <= M && 1 <= Zb && 1 > $ && 1 > Ca && 1 > Ob ? e = e + 3 & 7 : 1 <= $ && 1 <= Ob && 1 > Ca && 1 > Df ? e = e + 3 & 7 : 1 <= b && 1 <= d && 1 <= F && 1 > f && 1 > u ? e = e - 3 & 7 : 1 <= $ &&
                            1 <= ub && 1 > Ca && 1 > Ob && 1 > Zb ? e = e - 3 & 7 : 1 <= Ca && 1 <= Zb && 1 > Ob && 1 > Ef ? e = e - 3 & 7 : 1 <= F && 1 > b ? e = e + 2 & 7 : 1 <= b && 1 > F && (e = e - 2 & 7)
                    }
                } else D[b] == Rb || D[b] == Sb || D[b] == Tb || D[b] == Xb || D[b] == jc || D[b] == sc ? L(b, r, 0, s[r]) : D[b] == q || D[b] == ac || D[b] == mc || D[b] == rc || D[b] == uc || D[b] == Bc ? L(b, qc, e + 1, s[qc]) : D[b] == vc ? L(b, qc, vc << 8 | e + 1, s[qc]) : D[b] == Ic && L(b, qc, Ic << 8 | e + 1, E[b]);
        else b <= l && !(1E3 > lf - pd) && (f = Ad(~~C[a].x + Cg[e], ~~C[a].y + Dg[e], qc, e + 1), 0 <= f && (E[f] = E[a]));
        G[a] = n << 8 | g << 4 | e + 1
    } else if (D[a] == rc) {
        if (100 <= G[a]) return qd(a), 1;
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            f = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[f]] >= Nb ? (f = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[f] <= l && (e = ah(0.2), J[a].x -= V[H[a]] * e, J[a].y += U[H[a]] * e), f = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[f] <= l && (e = ah(0.2), J[a].x += V[H[a]] * e, J[a].y -= U[H[a]] * e), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (e = ah(1.5), c.x += U[H[a]] * e, c.y += V[H[a]] * e);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Mg(a, c) : Qg(a, c)
        } else Ug(a, c);
        e = ed(8);
        b = I[H[a] +
            vg[e]];
        0 != pg[D[b]] && Lf(0.2) && (G[a] = Pe(G[a] + pg[D[b]], 0, 100), L(b, rc, 100, s[D[b]]))
    } else if (D[a] == sc)
        if (0 == Id[a]) {
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.3), c.set(J[a]), Mg(a, c);
            if (1E3 > lf - pd) return 0;
            if (0 == G[a] && (e = ed(8), b = I[H[a] + vg[e]], b <= l))
                for (d = 0; 8 > d; d++)
                    if (b = I[H[a] + vg[e] + vg[d]], p <= b && D[b] != sc && D[b] != jc) {
                        Lf(0.5) && Ad(~~C[a].x + yg[e], ~~C[a].y + zg[e], sc, 0);
                        break
                    }
            1 >= G[a] && ($ = ~~C[a].x + 0.5 + U[H[a]], Ca = ~~C[a].y + 0.5 + V[H[a]], I[(Ca << 9) + Math.floor($)] <= l && I[(Ca + V[H[a]] << 9) + Math.floor($ + U[H[a]])] <= l && I[(Ca +
                U[H[a]] << 9) + Math.floor($ - V[H[a]])] <= l && I[(Ca - U[H[a]] << 9) + Math.floor($ + V[H[a]])] <= l && Lf(0.2) && Ad(~~$, ~~Ca, sc, 1));
            1 == G[a] && Lf(0.04) && (G[a] = 2)
        } else Ug(a, c);
    return 0
}
window.fff = Zg;

function Zg(a, c) {
    var b, d, e, f;
    if (D[a] == tc) {
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            b = ah(0.5);
            c.x += U[H[a]] * b;
            c.y += V[H[a]] * b;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.7), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        e = ed(8);
        b = I[H[a] + vg[e]];
        if (D[b] == q) return L(b, uc, 0, s[uc]), qd(a), 1;
        if (D[b] == fc && Lf(0.2)) return qd(a), 1
    } else if (D[a] == uc) {
        if (0 == Id[a]) {
            I[H[a]] = Ib;
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            f = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
            D[I[f]] >= Nb ? (f = (C[a].y + U[H[a]] << 9) + Math.floor(C[a].x - V[H[a]]), I[f] <= l && (b = bh(0.1,
                0.2), J[a].x -= V[H[a]] * b, J[a].y += U[H[a]] * b), f = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[f] <= l && (b = bh(0.1, 0.2), J[a].x += V[H[a]] * b, J[a].y -= U[H[a]] * b), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (b = ah(1.5), c.x += U[H[a]] * b, c.y += V[H[a]] * b);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Mg(a, c) : Qg(a, c)
        } else Ug(a, c);
        e = ed(20);
        b = I[H[a] + Ag[e]];
        D[b] != Sb && D[b] != Tb && D[b] != oc || L(b, Rb, 0, s[Rb]);
        e = ed(8);
        b = I[H[a] + vg[e]];
        1 == X[D[b]] && D[b] != ec || D[b] == dc || D[b] == ic ? Lf(0.2) &&
            0.3 >= U[H[a]] * wg[e] + V[H[a]] * xg[e] && Kg(a, b) : D[b] == sc && L(b, Rb, 0, s[Rb])
    } else if (D[a] == vc)
        if (0 == G[a]) 1 < Get_Squared_Magnitude(J[a]) ? G[a] = 1 : Set_XY(J[a], 0, 0);
        else if (1 == G[a]) {
        c.set(J[a]);
        var g = 0.5 * Get_Unitary_Vector(c);
        for (d = 1; 6 > d; d++)
            if (b = I[(C[a].y + 0.5 + c.y * d << 9) + Math.floor(C[a].x + 0.5 + c.x * d)], D[b] == vc) G[b] = 1, J[b].x = 0.98 * J[a].x, J[b].y = 0.98 * J[a].y;
            else break;
        for (d = 1; 8 > d; d += 2)
            if (b = I[H[a] + vg[d]], D[b] == vc && 1 != G[b]) {
                G[b] = 1;
                var m = ed(8);
                J[b].x = wg[m] * g + 0.1 * J[a].x;
                J[b].y = xg[m] * g + 0.1 * J[a].y
            }
        1 > g ? L(a, ec, 0, s[ec]) : L(a, cc, 0, s[cc])
    } else {
        if (2 <= G[a]) {
            if (2 == G[a])
                for (d = 1; 8 >
                    d; d += 2) b = I[H[a] + vg[d]], D[b] == vc && 0 == G[b] && L(b, vc, 2, s[nc]);
            G[a]++;
            22 < G[a] && L(a, vc, 0, s[vc])
        }
    } else if (D[a] == wc) {
        if (1 == G[a]) return Lf(0.02) && (G[a] = 0, Scale_Vect(J[a], -1)), 0;
        0 == Id[a] ? (Set_XY(c, P[R[H[a]]], Q[R[H[a]]]), c.add(J[a]), Mg(a, c)) : Ug(a, c);
        Get_Unitary_Vector(J[a]);
        b = I[(~~C[a].y + 0.5 + J[a].y << 9) + Math.floor(~~C[a].x + 0.5 + J[a].x)];
        l < b && (Lf(0.5) ? Set_XY(J[a], J[a].y, -J[a].x) : Set_XY(J[a], -J[a].y, J[a].x));
        e = ed(8);
        b = I[H[a] + vg[e]];
        if (p <= b)
            if (2 == X[D[b]]) 0.3 >= U[H[a]] * wg[e] + V[H[a]] * xg[e] && Kg(a, b);
            else {
                if (D[b] == Sb || D[b] == jc || D[b] == xc) return L(b, wc, 0, s[wc]), J[b].set(J[a]),
                    qd(a), 1;
                D[b] == Tb ? G[a] = 1 : 3 == X[D[b]] && L(a, r, 0, s[r])
            }
        Set_XY(c, 0, 0);
        var n = m = 0,
            t = 0,
            u = 0;
        b = Pe(Math.floor(C[a].x + 4 * J[a].x), 8, 503);
        d = Pe(Math.floor(C[a].y + 4 * J[a].y), 8, 287);
        f = (d << 9) + b;
        for (d = 0; 101 > d; d++) e = f + Fg[d], b = I[e], b <= l || (D[b] == wc ? (c.x += J[b].x, c.y += J[b].y, m++) : D[b] != Tb && D[b] != Sb && D[b] != jc && D[b] != xc && (n += e & 511, t += e >> 9, u++));
        0 < m && Scale_Vect(c, 1 / m);
        J[a].x = 0.5 * (J[a].x + c.x);
        J[a].y = 0.5 * (J[a].y + c.y);
        0 < u && (n = n / u - C[a].x, t = t / u - C[a].y, b = J[a].y * n - J[a].x * t, 0 > b ? Set_XY(c, J[a].y, -J[a].x) : Set_XY(c, -J[a].y, J[a].x), J[a].x = 0.9 * J[a].x + 0.1 * c.x, J[a].y = 0.9 * J[a].y + 0.1 *
            c.y);
        J[a].x += bh(-0.1, 0.1);
        J[a].y += bh(-0.1, 0.1)
    } else if (D[a] == xc)
        if (m = G[a] >> 8, g = G[a] & 255, 0 == m) {
            if (0 == Id[a]) {
                Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
                b = ah(0.5);
                c.x += U[H[a]] * b;
                c.y += V[H[a]] * b;
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
                Mg(a, c)
            } else Ug(a, c);
            e = ed(8);
            b = I[H[a] + vg[e]];
            2 == X[D[b]] ? (0 == g && (g = D[b], E[a] = 0 | ~s[g]), G[a] = 256 | g) : 3 == X[D[b]] && L(a, r, 0, s[r])
        } else {
            Get_Unitary_Vector(J[a]);
            b = I[(C[a].y + J[a].y << 9) + Math.floor(C[a].x + J[a].x)];
            2 != X[D[b]] && (Lf(0.5) ? Set_XY(J[a], J[a].y, -J[a].x) : Set_XY(J[a], -J[a].y, J[a].x));
            Scale_Vect(J[a], 0.8);
            I[H[a]] = Ib;
            c.x = C[a].x + J[a].x;
            c.y = C[a].y;
            b = I[(c.y << 9) + ~~c.x];
            b <= l ? C[a].x = c.x : 2 == X[D[b]] && (Kg(a, b), C[a].set(c), D[b] != g && L(b, g, 0, s[g]));
            c.x = C[a].x;
            c.y = C[a].y + J[a].y;
            b = I[(c.y << 9) + ~~c.x];
            b <= l ? C[a].y = c.y : 2 == X[D[b]] && (Kg(a, b), C[a].set(c), D[b] != g && L(b, g, 0, s[g]));
            H[a] = (C[a].y << 9) + ~~C[a].x;
            I[H[a]] = a;
            Set_XY(c, 0, 0);
            u = t = n = m = 0;
            b = Pe(Math.floor(C[a].x + 0.5 + 4 * J[a].x), 8, 503);
            d = Pe(Math.floor(C[a].y + 0.5 + 4 * J[a].y), 8, 287);
            f = (d << 9) + b;
            for (d = 0; 101 > d; d++)
                if (e = f + Fg[d], b = I[e], 2 != X[D[b]] || D[b] != g) D[b] == xc && G[a] == G[b] ? (c.x += J[b].x, c.y +=
                    J[b].y, m++) : (n += e & 511, t += e >> 9, u++);
            0 < m && Scale_Vect(c, 1 / m);
            J[a].x = 0.5 * (J[a].x + c.x);
            J[a].y = 0.5 * (J[a].y + c.y);
            0 < u && (n = n / u - C[a].x, t = t / u - C[a].y, b = J[a].y * n - J[a].x * t, 0 > b ? Set_XY(c, J[a].y, -J[a].x) : Set_XY(c, -J[a].y, J[a].x), J[a].x = 0.8 * J[a].x + 0.2 * c.x, J[a].y = 0.8 * J[a].y + 0.2 * c.y);
            J[a].x += bh(-0.1, 0.1);
            J[a].y += bh(-0.1, 0.1);
            e = ed(8);
            b = I[H[a] + vg[e]];
            b <= l ? G[a] = 0 | g : 3 == X[D[b]] && L(a, r, 0, s[r])
        }
    else if (D[a] == yc)
        if (0 == G[a]) {
            if (0 == Id[a]) {
                I[H[a]] = Ib;
                Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
                f = (C[a].y + V[H[a]] << 9) + Math.floor(C[a].x + U[H[a]]);
                D[I[f]] >= Nb ? (f = (C[a].y + U[H[a]] <<
                    9) + Math.floor(C[a].x - V[H[a]]), I[f] <= l && (b = bh(0.1, 0.2), J[a].x -= V[H[a]] * b, J[a].y += U[H[a]] * b), f = (C[a].y - U[H[a]] << 9) + Math.floor(C[a].x + V[H[a]]), I[f] <= l && (b = bh(0.1, 0.2), J[a].x += V[H[a]] * b, J[a].y -= U[H[a]] * b), Lf(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (b = ah(1.5), c.x += U[H[a]] * b, c.y += V[H[a]] * b);
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
                0 == V[H[a]] ? Mg(a, c) : Qg(a, c)
            } else Ug(a, c);
            e = ed(8);
            b = I[H[a] + vg[e]];
            (1 == X[D[b]] && D[b] != yc || 2 == X[D[b]]) && -0.3 <= U[H[a]] * wg[e] + V[H[a]] * xg[e] && Kg(a, b)
        } else {
            e =
                ed(4);
            b = I[H[a] + sg[e]];
            D[b] == Vb ? L(b, q, 0, s[q]) : D[b] == $b && 256 > G[b] && (G[b] += 256);
            m = G[a] - 1;
            for (d = 0; 4 > d; d++)
                if (2 != d)
                    if (b = I[H[a] + sg[m + d & 3]], D[b] == yc) {
                        0 == G[b] ? (Kg(a, b), G[a] = (m + d & 3) + 1) : L(a, yc, 0, s[yc]);
                        break
                    } else if (D[b] == oc) {
                L(b, oc, (m + d & 3) + 1, s[nc]);
                L(a, yc, 0, s[yc]);
                break
            } else D[b] == vc && 0 == G[b] ? L(b, vc, 2, s[nc]) : D[b] == Ic && 0 == G[b] && (G[b] = 1);
            4 == d && (I[H[a] + sg[m]] <= l && Ad(~~C[a].x + tg[m], ~~C[a].y + ug[m], nc, m << 12), L(a, yc, 0, s[yc]))
        }
    else if (D[a] == zc) {
        if (0 == Id[a]) {
            if (Lf(0.15)) return qd(a), 1;
            J[a].x += 0.1 * P[R[H[a]]];
            J[a].y +=
                0.1 * Q[R[H[a]]];
            J[a].x += 0.02 * U[H[a]];
            J[a].y += 0.02 * V[H[a]];
            if (Jb <= I[H[a] + 1] || Jb <= I[H[a] + 2]) J[a].x -= bh(0.3, 0.6);
            if (Jb <= I[H[a] - 1] || Jb <= I[H[a] - 2]) J[a].x += bh(0.3, 0.6);
            if (Jb <= I[H[a] + h] || Jb <= I[H[a] + (h << 2)]) J[a].y -= bh(0.3, 0.6);
            if (Jb <= I[H[a] - h] || Jb <= I[H[a] - (h << 2)]) J[a].y += bh(0.3, 0.6);
            Scale_Vect(J[a], 0.98);
            c.set(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        e = ed(20);
        b = I[H[a] + Ag[e]];
        if (D[b] == Rb) L(b, r, 0, s[r]);
        else if (D[b] == q || D[b] == uc || D[b] == mc) return qd(a), 1
    } else if (D[a] == Ac)
        if (0 != Id[a] && Ug(a, c), 256 > G[a])
            if (e = ed(8), b = I[H[a] + vg[e]], 3 ==
                X[D[b]] && D[b] != zc) G[a] += 256;
            else if (D[b] == q || D[b] == uc) L(a, Ub, 0, s[Ub]);
    else {
        if (D[b] == ac || D[b] == ic || D[b] == mc) {
            G[a] = D[b];
            D[b] == ac && (E[a] = 6697762);
            D[b] == ic && (E[a] = 4478242);
            D[b] == mc && (E[a] = 6706500);
            for (d = 0; 8 > d; d++) g = I[H[a] + vg[d]], D[g] == Ac && 0 == G[g] && (G[g] = D[b], D[b] == ac && (E[g] = 5583650), D[b] == ic && (E[g] = 4473890), D[b] == mc && (E[g] = 5588019));
            L(b, gc, 0, s[D[b]])
        }
    } else {
        if (G[a] += 256, 768 <= G[a]) {
            b = G[a] & 255;
            g = zc;
            m = 0;
            b == ac ? (g = r, m = 0) : b == ic ? (g = ic, m = 0) : b == mc && (g = gc, m = 10);
            I[H[a] - 1] <= l && Ad(~~C[a].x - 1, ~~C[a].y, g, m);
            I[H[a] + 1] <=
                l && Ad(~~C[a].x + 1, ~~C[a].y, g, m);
            I[H[a] - h] <= l && Ad(~~C[a].x, ~~C[a].y - 1, g, m);
            I[H[a] + h] <= l && Ad(~~C[a].x, ~~C[a].y + 1, g, m);
            for (d = 0; 8 > d; d++) b = I[H[a] + vg[d]], p <= b && (D[b] == Ac && 256 > G[b] ? G[b] += 256 : D[b] == $b && 256 > G[b] ? G[b] += 256 : D[b] == ac ? G[b] = 1 : D[b] == bc ? G[b] = 1 : D[b] == ic ? G[b] = 1 : D[b] == lc && (G[b] = 1));
            L(a, g, m, s[g])
        }
    } else if (D[a] == Bc) {
        if (0 == Id[a]) {
            Set_XY(c, P[R[H[a]]], Q[R[H[a]]]);
            b = ah(-0.15);
            c.x += U[H[a]] * b;
            c.y += V[H[a]] * b;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) Scale_Vect(J[a], 0.9), c.add(J[a]);
            Mg(a, c)
        } else Ug(a, c);
        e = ed(4);
        b = I[H[a] + sg[e]];
        1 == X[D[b]] || 2 == X[D[b]] ? 0.3 >= U[H[a]] * tg[e] + V[H[a]] * ug[e] && Kg(a, b) : D[b] == Bc ? (J[a].x += bh(-0.3, 0.3), J[a].y += bh(-0.3, 0.3)) : D[b] == Tb ? L(a, q, 0, s[q]) : D[b] == Vb ? L(a, Wb, 0, s[Wb]) : D[b] == bc ? L(a, q, 0, s[q]) : D[b] == kc ? L(a, q, 0, s[q]) : D[b] == oc ? L(a, nc, (e + 2 & 3) << 12, s[nc]) : D[b] == sc ? L(a, q, 0, s[q]) : D[b] == Ac ? L(a, q, 0, s[q]) : b == Jb && L(a, q, 0, s[q])
    } else if (D[a] == Cc)
        if (0 != Id[a] && Ug(a, c), E[a] == s[Cc]) {
            if (e = ed(4), b = I[H[a] + sg[e]], 2 == X[D[b]] || D[b] == fc || D[b] == lc || D[b] == yc || D[b] == Bc) L(a, Cc, e + 2 & 3, s[D[b]]), L(b, gc, 0, s[D[b]])
        } else {
            m =
                G[a] & 3;
            for (d = 0; 4 > d; d++)
                if (2 != d && (b = I[H[a] + sg[m + d & 3]], D[b] == Cc)) {
                    E[b] == s[Cc] ? (Kg(a, b), G[a] = m + d & 3) : E[a] = s[Cc];
                    break
                }
            if (4 == d) {
                if (I[H[a] + (sg[m] << 1)] <= l && !(1E3 > lf - pd))
                    for (d = 0; d < s.length; d++)
                        if (E[a] == s[d]) {
                            Ad(~~C[a].x + (tg[m] << 1), ~~C[a].y + (ug[m] << 1), d, 0);
                            break
                        }
                E[a] = s[Cc]
            }
        }
    return 0
}
window.fff = $g;

function $g(a, c) {
    var b, d, e, f, g, m, n, t, u;
    if (D[a] == Ic)
        if (0 != Id[a] && Ug(a, c), 0 == G[a]) {
            u = E[a] >> 16 & 255;
            n = E[a] >> 8 & 255;
            var F = E[a] & 255;
            e = 1;
            for (d = 0; 8 > d; d++) b = I[H[a] + vg[d]], D[b] != qc && D[b] != nc && p <= b && (u += E[b] >> 16 & 255, n += E[b] >> 8 & 255, F += E[b] & 255, e++);
            1 < e && (E[a] = Math.floor(u / e) << 16 | Math.floor(n / e) << 8 | Math.floor(F / e))
        } else if (20 <= G[a]) u = Math.floor(8 * (E[a] >> 16 & 255) / 9), n = Math.floor(8 * (E[a] >> 8 & 255) / 9), F = Math.floor(8 * (E[a] & 255) / 9), E[a] = u << 16 | n << 8 | F, G[a]++, 30 <= G[a] && (G[a] = 0);
    else {
        if (1 <= G[a]) {
            if (1 == G[a])
                for (d = 0; 8 > d; d++) b = I[H[a] + vg[d]], D[b] == Ic && 0 == G[b] && (G[b] = 1);
            u = E[a] >> 16 &
                255;
            n = E[a] >> 8 & 255;
            F = E[a] & 255;
            255 > u && 255 > n && 255 > F && (u = Math.floor(9 * u / 8) + 1, 255 < u && (u = 255), n = Math.floor(9 * n / 8) + 1, 255 < n && (n = 255), F = Math.floor(9 * F / 8) + 1, 255 < F && (F = 255), E[a] = u << 16 | n << 8 | F);
            G[a]++
        }
    } else if (D[a] == Jc)
        if (0 == Id[a] ? (Set_XY(c, P[R[H[a]]], Q[R[H[a]]]), J[a].x += 0.05 * U[H[a]], J[a].y += 0.05 * V[H[a]], (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) && Scale_Vect(J[a], 0.95), c.add(J[a]), Mg(a, c)) : Ug(a, c), 0 == G[a]) e = ed(8), b = I[H[a] + vg[e]], 3 == X[D[b]] && (G[a] = 1);
        else {
            if (2 <= G[a]) {
                if (50 > ++G[a] || Lf(0.95)) return 0;
                qd(a);
                return 1
            }
            if (1 == G[a]) {
                u = 3;
                e = ~~C[a].x;
                b = ~~C[a].y;
                d = If(e - u, 8);
                n = If(b - u, 8);
                f = Rf(e + u, 503);
                t = Rf(b + u, 287);
                u = e + bh(-0.5, 0.5);
                F = b + bh(-0.5, 0.5);
                Set_XY(c, 0, 0);
                e = 0;
                for (m = n; m <= t; m++)
                    for (g = d; g <= f; g++) b = I[(m << 9) + g], Jb <= b && (c.x += u - g, c.y += F - m, p <= b && e++);
                Get_Unitary_Vector(c);
                Scale_Vect(c, Math.floor(e / 2) + 4);
                e = -1;
                for (m = n; m <= t; m++)
                    for (g = d; g <= f; g++) b = I[(m << 9) + g], p <= b && D[b] != Yb && !(D[b] == Jc && 1 < G[b]) && (u = bh(-1, 1), J[b].x += c.x + c.y * u, J[b].y += c.y - c.x * u, -1 == e ? L(b, Jc, 2, E[b]) : (u = E[e] >> 16 & 255, u += E[b] >> 16 & 255, u >>= 1, n = E[e] >> 8 & 255, n += E[b] >> 8 & 255, n >>= 1, F = E[e] & 255, F += E[b] & 255, F >>= 1, L(b, Jc, 2, u << 16 | n << 8 | F), e =
                        Fd(0, 0, e, b, 0), -1 != e && (jg[e] = 4)), e = b);
                G[a] = 2
            }
        }
    else if (D[a] == Kc) {
        0 != Id[a] && Ug(a, c);
        2 <= G[a] && G[a] >> 10 != (bf & 1) && (G[a] &= 1);
        t = G[a] >> 2 & 255;
        G[a] &= 1;
        g = 8;
        for (d = 0; d < g; d++) 0 != (t & 1 << d) || (e = 0 == G[a] ? d : 2 - d & 7, b = I[H[a] + vg[e]], b < p || D[b] == Kc || D[b] == Yb || D[b] == qc || (f = 0 == G[a] ? e + 1 & 7 : e - 1 & 7, u = I[H[a] + vg[f]], 0 == (e & 1) && D[u] == Kc)) || (f = 0 == G[a] ? e - 1 & 7 : e + 1 & 7, u = I[H[a] + vg[f]], u <= l && (Lg(b, C[b].x + yg[f] - yg[e], C[b].y + zg[f] - zg[e]), u = I[H[a] + vg[f] + vg[f] - vg[e]], D[u] == Kc && (2 <= G[u] && G[u] >> 10 != (bf & 1) && (G[u] &= 1), G[u] = 0 == (e & 1) ? (bf & 1) << 10 | G[u] & 1020 |
            1 << (d + 1 & 7) + 2 | 2 | G[u] : (bf & 1) << 10 | G[u] & 1020 | 1 << (d + 2 & 7) + 2 | 2 | G[u]), 1 == (e & 1) && (f = 0 == G[a] ? e - 2 & 7 : e + 2 & 7, u = I[H[a] + vg[f]], D[u] == Kc && (2 <= G[u] && G[u] >> 10 != (bf & 1) && (G[u] &= 1), G[u] |= (bf & 1) << 10 | G[u] & 1020 | 1 << d + 2 | 2)), 0 == d && (g = 7)));
        E[a] = 0 == G[a] ? 6702131 : 3359829
    }
    return 0
}
var id = 10,
    kd = 20,
    ld = 30,
    md = 40,
    fd = 0,
    we = 50,
    gd = 11,
    y = Array(we * gd);
for (da = 0; da < we * gd; da++) y[da] = new Vector2D;
var Y = Array(we * gd);
for (da = 0; da < we * gd; da++) Y[da] = new Vector2D;
var xe = new Int32Array(we * gd),
    z = new Int32Array(we),
    ye = new Int32Array(we),
    jd = new Int32Array(we),
    ch = Array(we);
for (da = 0; da < we; da++) ch[da] = new Vector2D;
var ze = new Int32Array(we),
    Ae = new Uint8Array(we),
    dh = [0, 0],
    eh = [0, 0],
    fh = [0, 0],
    gh = [0, 0],
    hh = [0, 0],
    ih = [0, 0, 0.5, 0.5, 0.5, 0.5, 0.8, 1, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.8, 0.5, 0.5, 0.8, 0.5, 0.5, 1, 0.5, 0.8, 0.5, 0, 1, 1, 0, 0.5, 0.5, 0, 0.8, 0.5, 0.5, 0.8, 0.9, 0.1, 0.1, 1, 0.5, 0.5, 1, 0.5, 0, 0, 0, 0, 0, 0.5, 0.5, 0.2],
    jh = [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function yd(a, c, b, d) {
    if (fd != we) {
        var e, f;
        if (b == Dc || b == Ec) {
            for (e = f = 0; e < fd; e++) z[e] != id && z[e] != kd || f++;
            if (2 <= f || 0 != d && 0 == jh[d]) return;
            e = b == Dc ? 0 : 1;
            gh[e] = 48;
            hh[e] = 0
        }
        f = fd * gd;
        for (e = 0; e < gd; e++, f++) b == Hc ? Set_XY(y[f], a, c) : 1 == e ? Set_XY(y[f], a, c) : Set_XY(y[f], a + ah(4), c + ah(4)), Y[f].set(y[f]), xe[f] = 0;
        b == Dc ? z[fd] = id : b == Ec ? z[fd] = kd : b == Fc ? z[fd] = ld : b == Hc && (z[fd] = md);
        ye[fd] = 0;
        jd[fd] = d;
        Set_XY(ch[fd], 0, 0);
        ze[fd] = 0;
        Ae[fd] = 0;
        fd++
    }
}

function hd(a) {
    if (0 != fd) {
        fd--;
        lg(1, a);
        for (var c = a * gd, b = fd * gd, d = 0; d < gd; d++, c++, b++) y[c].set(y[b]), Y[c].set(Y[b]), xe[c] = xe[b];
        z[a] = z[fd];
        ye[a] = ye[fd];
        jd[a] = jd[fd];
        ch[a].set(ch[fd]);
        ze[a] = ze[fd];
        Ae[a] = Ae[fd];
        mg(1, fd, a)
    }
}

function Dd(a) {
    var c, b;
    for (c = 0; c < fd; c++) {
        b = c * gd;
        if (z[c] == id || z[c] == kd) b = (Y[b + 1].y << 9) + ~~Y[b + 1].x;
        else if (z[c] == ld || z[c] == ld + 1) b = (Y[b + 1].y << 9) + ~~Y[b + 1].x;
        else continue;
        if (b == a) return c
    }
    return -1
}

function kh(a, c, b, d) {
    var e = y[a].x - Y[a].x,
        f = y[a].y - Y[a].y;
    Y[a].set(y[a]);
    null == c ? (c = (y[a].y << 9) + ~~y[a].x, e += U[c] * b, f += V[c] * b) : (e += c.x * b, f += c.y * b);
    y[a].x += e * d;
    y[a].y += f * d
}

function lh(a, c, b, d, e) {
    var f = new Vector2D;
    Ye(f, y[c], y[a]);
    var g = Get_Unitary_Vector(f);
    0 != g && (b -= g, d *= b, e *= b, y[a].x -= f.x * d, y[a].y -= f.y * d, y[c].x += f.x * e, y[c].y += f.y * e)
}

function mh(a, c, b, d, e) {
    var f = new Vector2D;
    Ye(f, y[a], Y[a]);
    y[a].set(Y[a]);
    if (0 != b) {
        var g = (y[a].y >> 2 << 7) + (y[a].x >> 2);
        f.x += P[g] * b;
        f.y += Q[g] * b
    }
    0 == e ? (b = Get_Magnitude(f) + 1, 8 <= b ? (Scale_Vect(f, 3.8 / b), b = 2) : 4 <= b ? (Scale_Vect(f, 0.5), b = 2) : b = 1) : (b = Math.floor(Get_Magnitude(f) / 3) + 1, Scale_Vect(f, 1 / b));
    xe[a] = 0;
    if (1 == d) Scale_Vect(f, b), y[a].add(f), y[a].x = Pe(y[a].x, 4, 507), y[a].y = Pe(y[a].y, 4, 291);
    else {
        d = new Vector2D;
        e = new Vector2D;
        null == c ? (g = (y[a].y << 9) + ~~y[a].x, Set_XY(e, U[g], V[g])) : e.set(c);
        c = e.x * f.x + e.y * f.y;
        Scale_Vect(e, c);
        d.set(f);
        d.sub(e);
        for (var m, n, g = 0; g < b; g++) {
            m = y[a].x + e.x;
            n = y[a].y + e.y;
            if (4 > m || 508 <= m || 4 >
                n || 292 <= n) {
                xe[a] = -5;
                return
            }
            f = (n << 9) + ~~m;
            I[f] <= l ? Set_XY(y[a], m, n) : I[f] <= Jb ? (Scale_Vect(d, 0.5), xe[a] = I[f]) : (0 > c ? Set_XY(y[a], m, n) : (Scale_Vect(d, ih[D[I[f]]]), 2 == X[D[I[f]]] ? Set_XY(y[a], m, n) : D[I[f]] == Kc && (m = ~~m - ~~y[a].x, n = ~~n - ~~y[a].y, 0 == G[I[f]] ? (0 == m && 1 == n && (d.x -= 1), -1 == m && 0 == n && (d.y -= 1), 0 == m && -1 == n && (d.x += 1), 1 == m && 0 == n && (d.y += 1)) : (0 == m && 1 == n && (d.x += 1), -1 == m && 0 == n && (d.y += 1), 0 == m && -1 == n && (d.x -= 1), 1 == m && 0 == n && (d.y -= 1)))), xe[a] = D[I[f]])
        }
        for (g = 0; g < b; g++) {
            m = y[a].x + d.x;
            n = y[a].y;
            if (4 > m || 508 <= m || 4 > n || 292 <= n) {
                xe[a] = -5;
                break
            }
            f = (n << 9) + ~~m;
            I[f] <=
                l ? Set_XY(y[a], m, n) : (2 == X[D[I[f]]] && Set_XY(y[a], m, n), xe[a] = D[I[f]]);
            m = y[a].x;
            n = y[a].y + d.y;
            if (4 > m || 508 <= m || 4 > n || 292 <= n) {
                xe[a] = -5;
                break
            }
            f = (n << 9) + ~~m;
            I[f] <= l ? Set_XY(y[a], m, n) : (2 == X[D[I[f]]] && Set_XY(y[a], m, n), xe[a] = D[I[f]])
        }
    }
}

function nh(a, c) {
    for (var b = 0; a < c; a++) {
        if (-5 == xe[a]) return -5;
        xe[a] == r && -1 < b ? b = -1 : xe[a] == fc && -4 < b ? b = -4 : xe[a] == kc && -1 < b ? b = -1 : xe[a] == nc && -3 < b ? b = -3 : xe[a] == qc && -2 < b ? b = -2 : xe[a] == rc && -1 < b ? b = -1 : xe[a] == zc && -1 < b ? b = -1 : 0 != xe[a] && 0 == b && (b = 1)
    }
    return b
}

function oh(a, c, b) {
    if (!Flag_1 && 0 == Xa) {
        var d = new Vector2D,
            e, f;
        if (0 == ze[a]) {
            if (47 == ea && Me || 47 == fa && Ne) {
                e = 400;
                for (var g = c; g < b; g++) d.x = ia - Y[g].x, d.y = ja - Y[g].y, f = Get_Squared_Magnitude(d), f < e && (e = f, ze[a] = g - c + 1)
            }
        } else 47 == ea && Ve || 47 == fa && We ? (y[c + ze[a] - 1].x += 0.1 * (ia - y[c + ze[a] - 1].x), y[c + ze[a] - 1].y += 0.1 * (ja - y[c + ze[a] - 1].y)) : ze[a] = 0
    }
}
window.fff = ff;

function ff() {
    var a;
    for (a = 0; a < fd; a++) z[a] <= id + 3 ? ph(a) : z[a] <= kd + 3 ? ph(a) : qh(a)
}

function ph(a) {
    var c, b, d, e, f, g = new Vector2D,
        m = new Vector2D,
        n = new Vector2D;
    b = a * gd;
    if (z[a] == id || z[a] == kd) {
        var t = z[a] == id ? 0 : 1,
            u = z[a] == id ? Rd[37] : Rd[65] | Rd[97],
            F = z[a] == id ? Rd[39] : Rd[68] | Rd[100],
            M = z[a] == id ? Rd[38] : Rd[87] | Rd[119],
            $ = z[a] == id ? Rd[40] : Rd[83] | Rd[115];
        ye[a]++;
        d = (Y[b + 4].y << 9) + ~~Y[b + 4].x;
        e = (Y[b + 5].y << 9) + ~~Y[b + 5].x;
        f = I[(~~Y[b + 4].y + 0.5 + V[d] << 9) + Math.floor(~~Y[b + 4].x + 0.5 + U[d])] > l ? 1 : 0;
        var Ca = I[(~~Y[b + 5].y + 0.5 + V[e] << 9) + Math.floor(~~Y[b + 5].x + 0.5 + U[e])] > l ? 1 : 0;
        0 == f && (f = I[d] > l ? 1 : 0);
        0 == Ca && (Ca = I[e] > l ? 1 : 0);
        g.x = U[d] + U[e];
        g.y = V[d] + V[e];
        Get_Unitary_Vector(g);
        m.set(g);
        n.set(g);
        Rotate_Clockwise(m);
        if ($ && jd[a] == wc)
            for (c = 0; 6 > c; c++) kh(b + c, n, 0.01, 0.997);
        else $ && jd[a] == Vb || (kh(b + 0, n, -0.2, 0.995), kh(b + 1, n, -0.1, 0.995), kh(b + 2, n, 0, 0.995), kh(b + 3, n, 0, 0.995), kh(b + 4, n, 0.3, 0.995), kh(b + 5, n, 0.3, 0.995));
        oh(a, b, b + 6);
        y[b].add(ch[a]);
        Scale_Vect(ch[a], 0.5);
        1 < dh[t] ? dh[t]-- : 0 < dh[t] && (1 == f || 1 == Ca) && dh[t]--;
        0 == dh[t] ? F ? (dh[t] = 15, g.x = y[b + 5].x - y[b + 4].x, g.y = y[b + 5].y - y[b + 4].y, c = g.x * m.x + g.y * m.y, 0 < c ? (y[b + 2].x += 3.2 * V[d] + 3 * -U[d] * 0.8, y[b + 2].y += 3.2 * -U[d] + 3 * -V[d] * 0.8) : (y[b + 3].x += 3.2 * V[e] + 3 * -U[e] * 0.8, y[b + 3].y += 3.2 * -U[e] +
            3 * -V[e] * 0.8), fh[t] = 1) : u && (dh[t] = 15, g.x = y[b + 5].x - y[b + 4].x, g.y = y[b + 5].y - y[b + 4].y, c = g.x * m.x + g.y * m.y, 0 > c ? (y[b + 2].x += 3.2 * -V[d] + 3 * -U[d] * 0.8, y[b + 2].y += 3.2 * U[d] + 3 * -V[d] * 0.8) : (y[b + 3].x += 3.2 * -V[e] + 3 * -U[e] * 0.8, y[b + 3].y += 3.2 * U[e] + 3 * -V[e] * 0.8), fh[t] = 0) : u ? (g.x = y[b + 1].x - Y[b + 1].x, g.y = y[b + 1].y - Y[b + 1].y, c = g.x * m.x + g.y * m.y, 0 < c && (y[b + 1].x -= 0.2 * m.x, y[b + 1].y -= 0.2 * m.y), fh[t] = 0) : F && (g.x = y[b + 1].x - Y[b + 1].x, g.y = y[b + 1].y - Y[b + 1].y, c = g.x * m.x + g.y * m.y, 0 > c && (y[b + 1].x += 0.2 * m.x, y[b + 1].y += 0.2 * m.y), fh[t] = 1);
        1 < eh[t] && eh[t]--;
        0 < eh[t] &&
            (1 == f || 1 == Ca) && eh[t]--;
        0 == eh[t] && M && (eh[t] = 50, y[b + 4].x -= 6 * n.x, y[b + 4].y -= 6 * n.y, y[b + 5].x -= 6 * n.x, y[b + 5].y -= 6 * n.y);
        $ && jd[a] == Vb || (d = 0.5, lh(b + 0, b + 1, 4, d, d), lh(b + 1, b + 2, 4, d, d), lh(b + 1, b + 3, 4, d, d), lh(b + 2, b + 4, 5, d, d), lh(b + 3, b + 5, 5, d, d), lh(b + 2, b + 3, 5, 0.1, 0.1));
        d = 0.1;
        for (c = 0; 4 > c; c++) mh(b + c, n, d, 1, 0 < ze[a] ? 1 : 0);
        for (c = 4; 6 > c; c++) mh(b + c, n, d, 0, 0 < ze[a] ? 1 : 0);
        if (!$)
            for (f = -1; 2 > f; f++)
                for (e = -1; 2 > e; e++) d = I[(Y[b + 0].y + f << 9) + (~~Y[b + 0].x + e)], 1 == jh[D[d]] && (jd[a] = D[d]);
        M && (u || F) || !$ || 0 == jd[a] || (e = ~~y[b + 0].x, f = ~~y[b + 0].y, jd[a] == ic && (e +=
            m.x * (0 == fh[t] ? 0 : -0) + 8 * n.x, f += m.y * (0 == fh[t] ? 0 : -0) + 8 * n.y, y[b + 0].x += m.x * (0 == fh[t] ? -0.5 : 0.5) + -1 * n.x, y[b + 0].y += m.y * (0 == fh[t] ? -0.5 : 0.5) + -1 * n.y), e = Pe(e, 8, 503), f = Pe(f, 8, 287), jd[a] == Mb ? (d = (f >> 2 << 7) + (e >> 2), 0 == x[d] && (P[d] += m.x * (0 == fh[t] ? -1 : 1), Q[d] += m.y * (0 == fh[t] ? -1 : 1))) : jd[a] != Vb && jd[a] != wc && I[f * h + e] == Ib && (d = Ad(e, f, jd[a], 0), 0 <= d && (jd[a] == r ? (J[d].x = m.x * (0 == fh[t] ? -7 : 7) + 2.4 * n.x, J[d].y = m.y * (0 == fh[t] ? -7 : 7) + 2.4 * n.y, G[d] = 2) : jd[a] == Xb ? (J[d].x = m.x * (0 == fh[t] ? -20 : 20) + 20 * n.x, J[d].y = m.y * (0 == fh[t] ? -20 : 20) + 20 * n.y) : jd[a] ==
            ic ? (J[d].x = m.x * (0 == fh[t] ? 20 : -20), J[d].y = m.y * (0 == fh[t] ? 20 : -20)) : jd[a] == nc ? G[d] = 0 == fh[t] ? (Math.floor(4 * -Jf(n) / TWO_PI - 0.5) & 3) << 12 : (Math.floor(4 * -Jf(n) / TWO_PI - 2.5) & 3) << 12 : jd[a] == qc ? G[d] = 0 == fh[t] ? (Math.floor(8 * Jf(n) / TWO_PI + 6.5) & 7) + 1 : (Math.floor(8 * Jf(n) / TWO_PI + 2.5) & 7) + 1 : (J[d].x = m.x * (0 == fh[t] ? -20 : 20) + bh(-1, 1), J[d].y = m.y * (0 == fh[t] ? -20 : 20) + bh(-1, 1)))));
        if (1 == xa)
            for (m = 4; 5 >= m; m++) {
                if (f = e = 0, 8 > y[b + m].x ? (e = 502, f = ~~Y[b + m].y) : 504 <= y[b + m].x ? (e = 10, f = ~~Y[b + m].y) : 8 > y[b + m].y ? (e = ~~Y[b + m].x, f = 286) : 288 <= y[b + m].y && (e = ~~Y[b + m].x, f = 10), 0 != e + f)
                    if (d = (f << 9) + e, I[d] <= l || 2 == X[D[I[d]]]) {
                        lg(1,
                            a);
                        Ye(g, y[b + m], Y[b + m]);
                        Get_Unitary_Vector(g);
                        for (c = 0; 5 >= c; c++) y[b + c].x = e + g.x + bh(-0.1, 0.1), y[b + c].y = f + g.y + bh(-0.1, 0.1), Set_XY(Y[b + c], e, f), xe[b + c] = 0;
                        break
                    } else y[b + m].set(Y[b + m]), xe[b + m] = Nb, 0 < eh[t] && eh[t]--, 0 < dh[t] && dh[t]--
            } else -5 == nh(b, b + 6) && (z[a] = 0 == t ? id + 2 : kd + 2);
        0 < hh[t] && hh[t]--;
        b = nh(b, b + 6);
        0 > b && (gh[t] += b, hh[t] = 25);
        0 >= gh[t] && (z[a] = 0 == t ? id + 2 : kd + 2)
    } else if (z[a] == id + 2 || z[a] == kd + 2) y[b + 10].set(y[b + 5]), Y[b + 10].set(Y[b + 5]), y[b + 9].set(y[b + 4]), Y[b + 9].set(Y[b + 4]), y[b + 8].set(y[b + 3]), Y[b + 8].set(Y[b + 3]), y[b + 7].set(y[b + 3]), Y[b + 7].set(Y[b +
        3]), y[b + 6].set(y[b + 2]), Y[b + 6].set(Y[b + 2]), y[b + 5].set(y[b + 2]), Y[b + 5].set(Y[b + 2]), y[b + 4].set(y[b + 1]), Y[b + 4].set(Y[b + 1]), y[b + 3].set(y[b + 1]), Y[b + 3].set(Y[b + 1]), y[b + 2].set(y[b + 1]), Y[b + 2].set(Y[b + 1]), y[b + 1].set(y[b + 0]), Y[b + 1].set(Y[b + 0]), y[b + 0].set(y[b + 0]), Y[b + 0].set(Y[b + 0]), ch[a].y -= 1, ye[a] = 0, z[a]++;
    else if (z[a] == id + 3 || z[a] == kd + 3) {
        ye[a]++;
        for (c = 0; 11 > c; c++) kh(b + c, null, 0.1, 0.999), y[b + c].add(ch[a]);
        Scale_Vect(ch[a], 0.5);
        d = 0.5;
        t = (150 - ye[a]) / 150;
        lh(b + 1, b + 2, 4 * t, d, d);
        lh(b + 3, b + 5, 4 * t, d, d);
        lh(b + 4, b + 7, 4 * t, d, d);
        lh(b + 6, b +
            9, 5 * t, d, d);
        lh(b + 8, b + 10, 5 * t, d, d);
        d = 0.1;
        for (c = 0; 11 > c; c++) mh(b + c, null, d, 0, 0);
        150 < ye[a] && hd(a--)
    }
}
window.fff = qh;

function qh(a) {
    var c, b, d, e, f, g = new Vector2D;
    f = new Vector2D;
    e = new Vector2D;
    b = a * gd;
    if (z[a] == ld || z[a] == ld + 1) {
        ye[a]++;
        d = (Y[b + 4].y << 9) + ~~Y[b + 4].x;
        c = (Y[b + 5].y << 9) + ~~Y[b + 5].x;
        g.x = U[d] + U[c];
        g.y = V[d] + V[c];
        Get_Unitary_Vector(g);
        f.set(g);
        e.set(g);
        Rotate_Clockwise(f);
        z[a] == ld ? (kh(b + 0, e, -0.2, 0.995), kh(b + 1, e, -0.1, 0.995), kh(b + 2, e, 0, 0.995), kh(b + 3, e, 0, 0.995), kh(b + 4, e, 0.3, 0.995), kh(b + 5, e, 0.3, 0.995)) : (kh(b + 0, e, 0.1, 0.995), kh(b + 1, e, 0.1, 0.995), kh(b + 2, e, 0.1, 0.995), kh(b + 3, e, 0.1, 0.995), kh(b + 4, e, 0.1, 0.995), kh(b + 5, e, 0.1, 0.995));
        oh(a, b, b + 6);
        y[b].add(ch[a]);
        Scale_Vect(ch[a], 0.5);
        if (z[a] == ld) {
            g.x = y[b + 5].x - y[b + 4].x;
            g.y = y[b + 5].y - y[b + 4].y;
            f = g.x * f.x + g.y * f.y;
            if (0 != xe[b + 4] && 0 != xe[b + 5]) {
                var m = ed(100);
                5 > m ? 0 < f ? (y[b + 4].x += 4 * V[d] + 4 * -U[d], y[b + 4].y += 4 * -U[d] + 4 * -V[d]) : (y[b + 5].x += 4 * V[c] + 4 * -U[c], y[b + 5].y += 4 * -U[c] + 4 * -V[c]) : 10 > m && (0 > f ? (y[b + 4].x += 4 * -V[d] + 4 * -U[d], y[b + 4].y += 4 * U[d] + 4 * -V[d]) : (y[b + 5].x += 4 * -V[c] + 4 * -U[c], y[b + 5].y += 4 * U[c] + 4 * -V[c]))
            } else 0 != xe[b + 4] ? Lf(0.02) && (f = bh(-4, 4), y[b + 4].x += V[d] * f + 4 * -U[d], y[b + 4].y += -U[d] * f + 4 * -V[d]) : 0 != xe[b + 5] && Lf(0.02) && (f = bh(-4, 4), y[b + 5].x += V[c] * f + 4 * -U[c], y[b +
                5].y += -U[c] * f + 4 * -V[c]);
            for (c = 0; c < fd; c++) a == c || z[c] != ld && z[c] != ld + 1 && z[c] != id && z[c] != kd || (d = c * gd, f = Get_Module(y[b + 4].x - y[d].x), m = Get_Module(y[b + 4].y - y[d].y), 4 >= f && 4 >= m && (ch[c].x += 1 * (y[b + 4].x - Y[b + 4].x), ch[c].y += 2 * (y[b + 4].y - Y[b + 4].y), z[c] == ld && (z[c] = ld + 1), ye[c] = 0, z[c] == id && (gh[0] -= 8, hh[0] = 25), z[c] == kd && (gh[1] -= 8, hh[1] = 25)), f = Get_Module(y[b + 5].x - y[d].x), m = Get_Module(y[b + 5].y - y[d].y), 4 >= f && 4 >= m && (ch[c].x += 1 * (y[b + 5].x - Y[b + 5].x), ch[c].y += 2 * (y[b + 5].y - Y[b + 5].y), z[c] == ld && (z[c] = ld + 1), ye[c] = 0, z[c] == id && (gh[0] -= 8, hh[0] = 25), z[c] == kd && (gh[1] -=
                8, hh[1] = 25)))
        } else 10 < ye[a] && (0 != xe[b + 4] || 0 != xe[b + 5]) && Lf(0.1) && (z[a] = ld, ye[a] = 0);
        f = 0.5;
        lh(b + 0, b + 1, 4, f, f);
        lh(b + 1, b + 2, 4, f, f);
        lh(b + 1, b + 3, 4, f, f);
        lh(b + 2, b + 4, 5, f, f);
        lh(b + 3, b + 5, 5, f, f);
        lh(b + 2, b + 3, 5, 0.1, 0.1);
        d = 0.1;
        for (c = 0; 4 > c; c++) mh(b + c, e, d, 1, 0 < ze[a] ? 1 : 0);
        for (c = 4; 6 > c; c++) mh(b + c, e, d, 0, 0 < ze[a] ? 1 : 0);
        z[a] == ld && (0 != nh(b, b + 6) ? ye[a] = 0 : 50 < ye[a] && (z[a] = ld + 1));
        if (1 == xa)
            for (c = 4; 5 >= c; c++) {
                if (f = e = 0, 8 > y[b + c].x ? (e = 502, f = ~~Y[b + c].y) : 504 <= y[b + c].x ? (e = 10, f = ~~Y[b + c].y) : 8 > y[b + c].y ? (e = ~~Y[b + c].x, f = 286) : 288 <= y[b + c].y && (e = ~~Y[b +
                        c].x, f = 10), 0 != e + f)
                    if (d = (f << 9) + e, I[d] <= l || 2 == X[D[I[d]]]) {
                        lg(1, a);
                        Ye(g, y[b + c], Y[b + c]);
                        Get_Unitary_Vector(g);
                        for (c = 0; 5 >= c; c++) y[b + c].x = e + g.x + bh(-0.1, 0.1), y[b + c].y = f + g.y + bh(-0.1, 0.1), Set_XY(Y[b + c], e, f), xe[b + c] = 0;
                        break
                    } else y[b + c].set(Y[b + c]), xe[b + c] = Nb
            } else -5 == nh(b, b + 6) && (z[a] = ld + 2);
        0 > nh(b, b + 6) && (z[a] = ld + 2)
    } else if (z[a] == ld + 2) y[b + 10].set(y[b + 5]), Y[b + 10].set(Y[b + 5]), y[b + 9].set(y[b + 4]), Y[b + 9].set(Y[b + 4]), y[b + 8].set(y[b + 3]), Y[b + 8].set(Y[b + 3]), y[b + 7].set(y[b + 3]), Y[b + 7].set(Y[b + 3]), y[b + 6].set(y[b + 2]), Y[b + 6].set(Y[b + 2]), y[b + 5].set(y[b +
        2]), Y[b + 5].set(Y[b + 2]), y[b + 4].set(y[b + 1]), Y[b + 4].set(Y[b + 1]), y[b + 3].set(y[b + 1]), Y[b + 3].set(Y[b + 1]), y[b + 2].set(y[b + 1]), Y[b + 2].set(Y[b + 1]), y[b + 1].set(y[b + 0]), Y[b + 1].set(Y[b + 0]), y[b + 0].set(y[b + 0]), Y[b + 0].set(Y[b + 0]), ch[a].y -= 1, ye[a] = 0, z[a] = ld + 3;
    else if (z[a] == ld + 3) {
        ye[a]++;
        for (c = 0; 11 > c; c++) kh(b + c, null, 0.1, 0.999), y[b + c].add(ch[a]);
        Scale_Vect(ch[a], 0.5);
        f = 0.5;
        g = (150 - ye[a]) / 150;
        lh(b + 1, b + 2, 4 * g, f, f);
        lh(b + 3, b + 5, 4 * g, f, f);
        lh(b + 4, b + 7, 4 * g, f, f);
        lh(b + 6, b + 9, 5 * g, f, f);
        lh(b + 8, b + 10, 5 * g, f, f);
        d = 0.1;
        for (c = 0; 11 > c; c++) mh(b + c, null,
            d, 0, 0);
        150 < ye[a] && hd(a--)
    } else if (z[a] == md)
        if (0 == xe[b]) {
            for (c = 0; c < fd; c++)
                if (!(y[b].x + 8 < y[c * gd].x || y[c * gd].x < y[b].x - 4 || y[b].y + 8 < y[c * gd].y || y[c * gd].y < y[b].y - 4))
                    if (z[c] == id || z[c] == kd) {
                        for (g = 0; g < fd; g++) z[g] == md && xe[g * gd] == id && (xe[g * gd] = 0);
                        xe[b] = id;
                        jd[a] = jd[c]
                    } else z[c] == ld && (xe[b] = z[c], jd[a] = jd[c]);
            for (c = 0; c < nd; c++) 0 == A[c] || y[b].x + 8 < B[c].x || B[c].x < y[b].x - 4 || y[b].y + 8 < B[c].y || B[c].y < y[b].y - 4 || (xe[b] = Kb, jd[a] = A[c])
        } else if (e = ~~y[b + 0].x, f = ~~y[b + 0].y, xe[b] == id) {
        if (Lf(0.1)) {
            d = Dc;
            for (c = 0; c < fd; c++) z[c] == id &&
                (d = Ec);
            yd(e, f, d, jd[a])
        }
    } else xe[b] == ld ? Lf(0.01) && yd(e, f, Fc, 0) : xe[b] == Kb && Lf(0.01) && zd(e + 2, f + 2, jd[a])
}
window.fff = Tf;

function Tf() {
    var a, c, b, d, e, f = [-1023, -1022, -510, 2, 514, 1026, 1025, 1024, 1023, 1022, 510, -2, -514, -1026, -1025, -1024],
        g = [-1023, -510, 2, 514, 1025, 1024, 1023, 510, -2, -514, -1025, -1024],
        m = [-511, 1, 513, 512, 511, -1, -513, -512],
        n = [1, 512, -1, -512];
    e = [];
    var t = 16769198,
        u = 16777215,
        F = 52224,
        M = 10027008;
    14 == qa && (F = u = t = 0, M = 13421772);
    for (b = a = 0; a < fd; a++, b += gd) {
        if (z[a] <= kd + 3) {
            if (z[a] != id + 3 && z[a] != kd + 3) kf(y[b + 1].x, y[b + 1].y, y[b + 2].x, y[b + 2].y, u), kf(y[b + 1].x, y[b + 1].y, y[b + 3].x, y[b + 3].y, u), kf(y[b + 2].x, y[b + 2].y, y[b + 4].x, y[b + 4].y, u), kf(y[b +
                3].x, y[b + 3].y, y[b + 5].x, y[b + 5].y, u), e = z[a] <= id + 3 ? f : g;
            else {
                kf(y[b + 3].x, y[b + 3].y, y[b + 5].x, y[b + 5].y, u);
                if (140 < ye[a]) continue;
                kf(y[b + 4].x, y[b + 4].y, y[b + 7].x, y[b + 7].y, u);
                if (135 < ye[a]) continue;
                kf(y[b + 6].x, y[b + 6].y, y[b + 9].x, y[b + 9].y, u);
                if (130 < ye[a]) continue;
                kf(y[b + 8].x, y[b + 8].y, y[b + 10].x, y[b + 10].y, u);
                if (125 < ye[a]) continue;
                e = z[a] <= id + 3 ? m : n
            }
            d = 0 == s[jd[a]] ? t : s[jd[a]];
            14 == qa && (d = 0);
            var $ = 0,
                Ca = 0;
            z[a] == id && ($ = gh[0], Ca = hh[0]);
            z[a] == kd && ($ = gh[1], Ca = hh[1]);
            var Ob = e.length;
            for (c = 0; c < Ob; c++) {
                var Zb = (y[b].y << 9) + ~~y[b].x +
                    e[c];
                ue[Zb] && (v[Zb] = 0 < Ca ? Ob - Math.floor($ * Ob / 48) <= c ? F : M : v[Zb] == d ? 0 : d)
            }
            if (12 == qa)
                for (c = Math.floor(Pe(y[b + 0].x, 8, 503)), $ = Math.floor(Pe(y[b + 0].y, 8, 283)), e = $ - 4; e <= $ + 4; e += 4)
                    for (d = c - 4; d <= c + 4; d += 4) Db[(e << 9) + d] = 536870911
        } else if (z[a] <= ld + 2) kf(y[b + 0].x, y[b + 0].y, y[b + 1].x, y[b + 1].y, t), kf(y[b + 1].x, y[b + 1].y, y[b + 2].x, y[b + 2].y, u), kf(y[b + 1].x, y[b + 1].y, y[b + 3].x, y[b + 3].y, u), kf(y[b + 2].x, y[b + 2].y, y[b + 4].x, y[b + 4].y, u), kf(y[b + 3].x, y[b + 3].y, y[b + 5].x, y[b + 5].y, u), ne(y[b + 0].x - 1, y[b + 0].y - 1, 3, 3, t);
        else if (z[a] <= ld + 3) {
            kf(y[b + 1].x, y[b + 1].y, y[b + 2].x, y[b + 2].y,
                u);
            if (145 < ye[a]) continue;
            kf(y[b + 3].x, y[b + 3].y, y[b + 5].x, y[b + 5].y, u);
            if (140 < ye[a]) continue;
            kf(y[b + 4].x, y[b + 4].y, y[b + 7].x, y[b + 7].y, u);
            if (135 < ye[a]) continue;
            kf(y[b + 6].x, y[b + 6].y, y[b + 9].x, y[b + 9].y, u);
            if (130 < ye[a]) continue;
            kf(y[b + 8].x, y[b + 8].y, y[b + 10].x, y[b + 10].y, u);
            if (125 < ye[a]) continue;
            ne(y[b + 0].x - 1, y[b + 0].y - 1, 2, 2, t)
        } else z[a] <= md && (d = 9465872, 14 == qa && (d = 0), xe[b] == id ? (kf(y[b].x, y[b].y, y[b].x, y[b].y + 3, d), kf(y[b].x, y[b].y, y[b].x + 2, y[b].y, d), kf(y[b].x, y[b].y + 2, y[b].x + 2, y[b].y + 2, d), kf(y[b].x + 3, y[b].y, y[b].x +
            3, y[b].y + 2, d)) : xe[b] == ld ? (kf(y[b].x, y[b].y, y[b].x, y[b].y + 3, d), kf(y[b].x, y[b].y, y[b].x + 3, y[b].y, d), kf(y[b].x, y[b].y + 2, y[b].x + 2, y[b].y + 2, d)) : xe[b] == Kb ? (kf(y[b].x + 1, y[b].y, y[b].x + 2, y[b].y, d), kf(y[b].x, y[b].y + 1, y[b].x, y[b].y + 2, d), kf(y[b].x + 3, y[b].y + 1, y[b].x + 3, y[b].y + 2, d), kf(y[b].x + 1, y[b].y + 3, y[b].x + 2, y[b].y + 3, d)) : ne(y[b].x, y[b].y, 4, 4, d));
        if (z[a] <= ld + 3 && 13 == qa)
            for (c = 0; 6 > c; c++) d = Math.floor(Pe(y[b + c].x, 8, 503)), e = Math.floor(Pe(y[b + c].y, 8, 287)), Db[(e << 9) + d] = 3E3
    }
}
var nd = 50,
    B = Array(nd);
for (da = 0; da < nd; da++) B[da] = new Vector2D;
var W = Array(nd);
for (da = 0; da < nd; da++) W[da] = new Vector2D;
var A = new Int32Array(nd),
    S = new Int32Array(nd),
    Be = new Int32Array(nd),
    Ce = new Uint8Array(nd),
    rh;

function zd(a, c, b) {
    for (var d = 0; d < nd; d++)
        if (0 == A[d]) {
            Set_XY(B[d], a + 0.5, c + 0.5);
            Set_XY(W[d], 0, 0);
            A[d] = b;
            S[d] = 0;
            Be[d] = 0;
            Ce[d] = 0;
            break
        }
}

function od(a) {
    A[a] = 0;
    lg(2, a)
}

function Ed(a) {
    var c, b;
    for (c = 0; c < nd; c++)
        if (0 != A[c] && (b = (B[c].y << 9) + ~~B[c].x, b == a)) return c;
    return -1
}
var Of = [-h - 1, -h, -h + 1, -1, 0, 1, h - 1, h, h + 1, 2 * -h - 1, 2 * -h, 2 * -h + 1, 2 * h - 1, 2 * h, 2 * h + 1, -2 - h, -2, -2 + h, 2 - h, 2, 2 + h, 3 * -h - 1, 3 * -h, 3 * -h + 1, 3 * h - 1, 3 * h, 3 * h + 1, -3 - h, -3, -3 + h, 3 - h, 3, 3 + h, -2 - 2 * h, 2 - 2 * h, -2 + 2 * h, 2 + 2 * h],
    sh = [-0.7, 0, 0.7, -1, 0, 1, -0.7, 0, 0.7, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.7, 0.7, -0.7, 0.7],
    th = [-0.7, -1, -0.7, 0, 0, 0, 0.7, 1, 0.7, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.7, -0.7, 0.7, 0.7],
    uh = [-1,
        0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -2, 2, -2, 2
    ],
    vh = [-1, -1, -1, 0, 0, 0, 1, 1, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -1, 0, 1, -1, 0, 1, -2, -2, 2, 2],
    wh = [0, 0.1, 0, 0, 0, 0.1, 0.1, -0.03, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.1, 0.1, 0.1, -0.01, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.05, 0.1, 0.2, 0.1, 0.1, -0.02, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1],
    xh = [0, 0, 0, 0, 0, 0.5, 0.4, 0.5, 0.5, 0.4, 0.4, 0.3, 0.4, 0.3, 0.3, 0.3, 0, 0.2, 0.2, 0.3, 0.1, 0, 0, 0.5, 0.3, 0.5, 0.3, 0.5, 0.4, 0, 0, 0.1, 0, 0.4,
        0.4, 0.5, 0.4, 0.2, 0.5, 0.5, 0, 0.5, 0.2, 0.5, 0, 0, 0, 0, 0, 0, 0.2, 0.1, 0
    ],
    yh = [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1];
window.fff = gf;

function gf() {
    var a, c, b, d, e = new Vector2D;
    for (a = 0; a < nd; a++)
        if (0 != A[a])
            if (0 == yh[A[a]]) od(a);
            else {
                b = (B[a].y << 9) + ~~B[a].x;
                for (c = 0; 21 > c; c++) I[b + Of[c]] == Kb && (I[b + Of[c]] = Ib);
                var f = U[b] * wh[A[a]],
                    g = V[b] * wh[A[a]];
                W[a].x += f;
                W[a].y += g;
                var m = xh[A[a]];
                if (0 != m) {
                    var n = (B[a].y >> 2 << 7) + (B[a].x >> 2);
                    W[a].x += P[n] * m;
                    W[a].y += Q[n] * m;
                    100 < Get_Squared_Magnitude(W[a]) && Scale_Vect(W[a], 0.9 + 0.1 * (1 - m))
                }
                n = a;
                if (0 == Be[n]) {
                    if (47 == ea && Me || 47 == fa && Ne) {
                        var m = ia - B[n].x,
                            t = ja - B[n].y;
                        400 > m * m + t * t && (Be[n] = 1)
                    }
                } else 47 == ea && Ve || 47 == fa && We ? (W[n].x += 0.05 * (ia - B[n].x), W[n].y += 0.05 *
                    (ja - B[n].y), Scale_Vect(W[n], 0.9)) : Be[n] = 0;
                for (m = 0; m < fd; m++)
                    if (z[m] == ld || z[m] == ld + 1 || z[m] == id || z[m] == kd)
                        for (n = m * gd, t = 4; 5 >= t; t++) {
                            var u = Get_Module(y[n + t].y - B[a].y);
                            9 >= Get_Module(y[n + t].x - B[a].x) && 9 >= u && (W[a].x += 0.1 * (y[n + t].x - Y[n + t].x), W[a].y += 0.2 * (y[n + t].y - Y[n + t].y))
                        }
                rh = n = 0;
                for (var m = Math.floor(Get_Magnitude(W[a]) / 2) + 1, t = 1 / m, F, M, u = 0; u < m; u++) {
                    F = B[a].x + W[a].x * t;
                    M = B[a].y + W[a].y * t;
                    if (4 > F || h - 4 <= F || 4 > M || 292 <= M) {
                        od(a);
                        break
                    }
                    1 == xa && (8 > F ? (I[(M << 9) + Math.floor(F + 496)] <= l ? (B[a].x += 496, W[a].x *= 0.8, lg(2, a)) : W[a].x *= -0.8, F = B[a].x + W[a].x * t) : 504 <= F && (I[(M << 9) + Math.floor(F - 496)] <=
                        l ? (B[a].x -= 496, W[a].x *= 0.8, lg(2, a)) : W[a].x *= -0.8, F = B[a].x + W[a].x * t), 8 > M ? (I[(M + 280 << 9) + ~~F] <= l ? (B[a].y += 280, W[a].y *= 0.8, lg(2, a)) : W[a].y *= -0.8, M = B[a].y + W[a].y * t) : 288 <= M && (I[(M - 280 << 9) + ~~F] <= l ? (B[a].y -= 280, W[a].y *= 0.5, lg(2, a)) : W[a].y *= -0.8, M = B[a].y + W[a].y * t));
                    if (4 > F || h - 4 <= F || 4 > M || 292 <= M) {
                        od(a);
                        break
                    }
                    b = (M << 9) + ~~F;
                    d = 0;
                    Set_XY(e, 0, 0);
                    for (c = 0; 37 > c; c++) {
                        var $ = I[b + Of[c]];
                        $ <= l || (n = D[$], 1 == Ah(a, c, n, $) || 2 == X[n] && 2 == X[A[a]] && A[a] != n || 2 == X[n] && 2 != X[A[a]] || 5 == X[n] && 5 != X[A[a]] || n == r || n == nc || (n == Kc && (0 == G[$] ? (22 == c && (e.x +=
                            1), 25 == c && (e.x -= 1), 28 == c && (e.y -= 1), 31 == c && (e.y += 1)) : (22 == c && (e.x -= 1), 25 == c && (e.x += 1), 28 == c && (e.y += 1), 31 == c && (e.y -= 1))), e.x -= sh[c], e.y -= th[c], d++))
                    }
                    0 == d ? (B[a].x = F, B[a].y = M) : (Get_Unitary_Vector(e), W[a].x -= f, W[a].y -= g, c = 0.999 * Get_Magnitude(W[a]), b = e.x * W[a].x + e.y * W[a].y, 0 > b && (Scale_Vect(e, -b), W[a].add(e), Scale_Vect(W[a], 0.9), Scale_Vect(e, 0.1), W[a].add(e), Get_Unitary_Vector(W[a]), Scale_Vect(W[a], c)), B[a].x += W[a].x * t, B[a].y += W[a].y * t, W[a].x += f, W[a].y += g);
                    if (4 > B[a].x || h - 4 <= B[a].x || 4 > B[a].y || 292 <= B[a].y) {
                        od(a);
                        break
                    }
                    b = (B[a].y << 9) + ~~B[a].x;
                    d = 0;
                    Set_XY(e, 0, 0);
                    for (c = 0; 21 > c; c++) $ = I[b + Of[c]],
                        $ <= l || 2 == X[D[$]] && 2 == X[A[a]] && A[a] != D[$] || 2 == X[D[$]] && 2 != X[A[a]] || 5 == X[D[$]] && 5 != X[A[a]] || D[$] == qc && 2 == X[A[a]] || D[$] == qc && A[a] == yc || D[$] == r || D[$] == nc || (e.x -= sh[c], e.y -= th[c], d++);
                    0 != d && (Get_Unitary_Vector(e), B[a].add(e))
                }
                if (4 > B[a].x || h - 4 <= B[a].x || 4 > B[a].y || 292 <= B[a].y) od(a);
                else if (Bh(a, n), 0 != A[a])
                    for (0 != rh && (A[a] = rh, S[a] = 0), b = (B[a].y << 9) + ~~B[a].x, c = 0; 21 > c; c++) I[b + Of[c]] <= l && (I[b + Of[c]] = Kb)
            }
}
window.fff = Ah;

function Ah(a, c, b, d) {
    if (A[a] != Rb)
        if (A[a] == q)
            if (b == r) qd(d);
            else if (b == Tb) Gg(d, Sb);
    else if (b == Vb) rh = Vb;
    else if (b == Wb) rh = Wb;
    else if (b == cc) Gg(d, dc);
    else {
        if (b == fc) return 1;
        if (b == kc) qd(d);
        else if (b == oc) Lf(0.1) && Gg(d, Rb);
        else {
            if (b == qc) return 1;
            b == tc ? (20 <= ++S[a] && (rh = uc), qd(d)) : b == zc ? qd(d) : b == Ac && Gg(d, Ub)
        }
    } else if (A[a] == Vb) b == q ? Gg(d, Vb) : b == Vb ? S[a] = 0 : b == Wb ? S[a] = 0 : b == r ? 20 <= ++S[a] && (rh = q) : b == fc ? rh = q : b == kc ? 20 <= ++S[a] && (rh = q) : b == qc ? 20 <= ++S[a] && (rh = q) : b == zc && 20 <= ++S[a] && (rh = q);
    else if (A[a] == Wb) b == q ? Gg(d, Wb) : b ==
        r ? rh = q : b == fc ? rh = q : b == kc ? rh = q : b == qc ? rh = q : b == zc && (rh = q);
    else if (A[a] == uc)
        if (b == q) S[a] = 0;
        else if (b == Sb) Gg(d, Rb);
    else if (b == Tb) Gg(d, Rb);
    else if (b == oc) Gg(d, Rb);
    else if (b == sc) Gg(d, Rb);
    else if (b == Ac) Gg(d, Ub);
    else if (b == r) 20 <= ++S[a] && (rh = tc), qd(d);
    else if (b == fc) rh = tc;
    else if (b == kc) 20 <= ++S[a] && (rh = tc), qd(d);
    else {
        if (b == qc) return 20 <= ++S[a] && (rh = tc), 1;
        b == zc && (20 <= ++S[a] && (rh = tc), qd(d))
    } else if (A[a] == tc)
        if (b == q) rh = uc;
        else {
            if (b == fc) return 1
        }
    else if (A[a] == r) b == Rb ? Gg(d, r) : b == Sb ? Gg(d, r) : b == Tb ? Gg(d, r) : b == Ub ? Gg(d,
        r) : b == Vb ? Gg(d, q) : b == Wb ? Gg(d, q) : b == $b ? D[d] == $b && 256 > G[d] && (G[d] += 256) : b == ac ? Gg(d, r) : b == bc ? Gg(d, r) : b == ic ? Gg(d, r) : b == jc ? Gg(d, r) : b == lc ? Gg(d, r) : b == sc ? Gg(d, r) : b == wc ? Gg(d, r) : b == xc ? Gg(d, r) : b == Ac && Gg(d, r);
    else if (A[a] == Sb) b == Rb || b == cc || b == sc ? 1 == S[a] ? rh = Tb : Gg(d, Sb) : b == q && (S[a] = 1);
    else if (A[a] == Tb) b == Sb ? G[d] = 1 : b == ac && (S[a] = 1);
    else if (A[a] == ac) {
        if (b == fc) return 1;
        if (b == mc) qd(d);
        else {
            if (b == qc) return 1;
            b == Ac && L(d, Ac, ac, 5583650)
        }
    } else if (A[a] == mc)
        if (b == Vb) rh = Vb;
        else if (b == ac) qd(d);
    else {
        if (b == fc) return 1;
        if (b == kc) qd(d);
        else {
            if (b == qc) return 1;
            b == zc ? qd(d) : b == Ac && L(d, Ac, mc, 5588019)
        }
    } else if (A[a] == Yb) {
        if (0 == S[a] && d >= p && (S[a] = b), b == qc) return 1
    } else if (A[a] == hc) 0 == S[a] && d >= p ? S[a] = b : 0 != S[a] && d >= p && L(d, S[a], 0, s[S[a]]);
    else if (A[a] == ic) b == Ac && L(d, Ac, ic, 4473890);
    else if (A[a] == rc) {
        if (0 == pg[b] && b != Yb || qd(d), b == qc) return 1
    } else if (A[a] == wc) b != Sb && b != jc && b != xc || qd(d), b == Tb && Scale_Vect(W[a], 0.9);
    else if (A[a] == nc) b == uc ? L(d, nc, 0, s[nc]) : b == oc ? (0 == uh[c] && 0 < vh[c] && L(d, oc, 1, s[nc]), 0 > uh[c] && 0 == vh[c] && L(d, oc, 2, s[nc]), 0 == uh[c] && 0 > vh[c] && L(d, oc,
        3, s[nc]), 0 < uh[c] && 0 == vh[c] && L(d, oc, 4, s[nc])) : b == yc ? (0 == uh[c] && 0 < vh[c] && L(d, yc, 1, s[nc]), 0 > uh[c] && 0 == vh[c] && L(d, yc, 2, s[nc]), 0 == uh[c] && 0 > vh[c] && L(d, yc, 3, s[nc]), 0 < uh[c] && 0 == vh[c] && L(d, yc, 4, s[nc])) : b == Ic && 0 == G[d] && (G[d] = 1);
    else if (A[a] == cc) b == q ? rh = dc : b == fc && (rh = fc);
    else if (A[a] == dc)
        if (b == r) 20 <= ++S[a] && (rh = cc), qd(d);
        else if (b == fc) rh = cc;
    else if (b == kc) 20 <= ++S[a] && (rh = cc);
    else {
        if (b == qc) return 20 <= ++S[a] && (rh = cc), 1;
        b == zc && (20 <= ++S[a] && (rh = cc), qd(d))
    } else if (A[a] == ec)
        if (b == ec) 10 < Get_Squared_Magnitude(W[a]) && (b = ~~B[a].x + ed(5) -
            2, d = ~~B[a].y + ed(5) - 2, a = I[(d << 9) + b], a <= l && Ad(b, d, zc, 0));
        else {
            if (b == zc) return 1
        }
    else if (A[a] == fc) b == q ? (20 <= ++S[a] && (rh = oc), L(d, gc, 10, s[gc])) : b == mc ? (20 <= ++S[a] && (rh = vc), L(d, gc, 10, s[gc])) : b == uc ? (20 <= ++S[a] && (rh = ec), L(d, tc, 0, s[tc])) : b == dc ? (20 <= ++S[a] && (rh = cc), L(d, cc, 0, s[cc])) : b == fc && (S[a] = 0), b == Rb ? L(d, r, 0, s[r]) : b == Sb ? L(d, r, 0, s[r]) : b == Tb ? L(d, r, 0, s[r]) : b == Ub ? L(d, r, 0, s[r]) : b == Vb ? L(d, q, 0, s[q]) : b == Wb ? L(d, q, 0, s[q]) : b == Xb ? L(d, r, 0, s[r]) : b == $b ? D[d] == $b && 256 > G[d] && (G[d] += 256) : b == ac ? L(d, r, 0, s[r]) : b == bc ? L(d, r, 0, s[r]) :
        b == ic ? L(d, r, 0, s[r]) : b == jc ? L(d, r, 0, s[r]) : b == lc ? L(d, r, 0, s[r]) : b == sc ? L(d, r, 0, s[r]) : b == wc ? L(d, r, 0, s[r]) : b == xc ? L(d, r, 0, s[r]) : b == Ac && L(d, r, 0, s[r]);
    else if (A[a] == oc)
        if (b == q) S[a] = 0;
        else if (b == fc) 20 <= ++S[a] && (rh = fc);
    else if (b == oc) 10 < Get_Squared_Magnitude(W[a]) && (b = ~~B[a].x + ed(5) - 2, d = ~~B[a].y + ed(5) - 2, a = I[(d << 9) + b], a <= l && Ad(b, d, zc, 0));
    else {
        if (b == qc || b == zc) return 1
    } else if (A[a] == vc)
        if (b == q) S[a] = 0;
        else if (b == fc) 20 <= ++S[a] && (rh = fc);
    else {
        if (b == qc) return 1
    } else if (A[a] == kc) b == Rb ? L(d, r, 0, s[r]) : b == Sb ? L(d, r, 0, s[r]) : b == Tb ? L(d, kc, 0, s[kc]) :
        b == Ub ? L(d, r, 0, s[r]) : b == Vb ? L(d, q, 0, s[q]) : b == Wb ? L(d, q, 0, s[q]) : b == Xb ? L(d, r, 0, s[r]) : b == $b ? D[d] == $b && 256 > G[d] && (G[d] += 256) : b == ac ? L(d, r, 0, s[r]) : b == bc ? L(d, r, 0, s[r]) : b == ic ? L(d, r, 0, s[r]) : b == jc ? L(d, r, 0, s[r]) : b == lc ? L(d, r, 0, s[r]) : b == sc ? L(d, r, 0, s[r]) : b == wc ? L(d, r, 0, s[r]) : b == xc ? L(d, r, 0, s[r]) : b == Ac ? L(d, r, 0, s[r]) : b == Bc && L(d, q, 0, s[q]);
    else if (A[a] == Ac) b == ac ? S[a] = ac : b == ic ? S[a] = ic : b == mc && (S[a] = mc);
    else if (A[a] == Bc)
        if (b == Tb) rh = q;
        else if (b == Vb) rh = Wb;
    else if (b == bc) rh = q;
    else if (b == kc) rh = q;
    else if (b == oc) rh = nc;
    else if (b ==
        sc) rh = q;
    else if (b == Ac) rh = q;
    else {
        if (b == qc) return 1
    } else if (A[a] == Cc) {
        if (0 == S[a]) b == q ? S[a] = q : b == ac ? S[a] = ac : b == dc ? S[a] = dc : b == fc ? S[a] = fc : b == ic ? S[a] = ic : b == lc ? S[a] = lc : b == mc ? S[a] = mc : b == rc ? S[a] = rc : b == uc ? S[a] = uc : b == yc ? S[a] = yc : b == Bc && (S[a] = Bc);
        else {
            c = S[a] & 255;
            var e = S[a] >> 8;
            b == c && (S[a] = e + 1 << 8 | c, qd(d))
        }
        if (b == fc || b == qc) return 1
    } else if (A[a] == Xb) b == Xb && (J[d].x += sh[c], J[d].y += th[c]);
    else if (A[a] == jc) 4 == X[b] && b != Yb && L(d, jc, 0, s[jc]);
    else if (A[a] == qc)
        if (b == oc || b == yc) b = (B[a].y << 9) + ~~B[a].x, 21 <= c && 23 >= c && I[b + Of[c + 3]] <=
            l && Ad(~~B[a].x + uh[c + 3], ~~B[a].y + vh[c + 3], qc, 7), 24 <= c && 26 >= c && I[b + Of[c - 3]] <= l && Ad(~~B[a].x + uh[c - 3], ~~B[a].y + vh[c - 3], qc, 3), 27 <= c && 29 >= c && I[b + Of[c + 3]] <= l && Ad(~~B[a].x + uh[c + 3], ~~B[a].y + vh[c + 3], qc, 1), 30 <= c && 32 >= c && I[b + Of[c - 3]] <= l && Ad(~~B[a].x + uh[c - 3], ~~B[a].y + vh[c - 3], qc, 5);
        else if (b == Vb) L(d, q, 0, s[q]);
    else {
        if (b == vc) return 1
    } else if (A[a] == sc) b == Sb ? G[d] = 2 : b != cc && b != ec && b != Cc || L(d, sc, 0, s[sc]);
    else if (A[a] == yc)
        if (b == q) S[a] = 0;
        else if (b == fc) 20 <= ++S[a] && (rh = fc);
    else if (b == nc) 21 <= c && 23 >= c && (G[d] = 8192 | G[d] & 4095),
        24 <= c && 26 >= c && (G[d] = 0 | G[d] & 4095), 27 <= c && 29 >= c && (G[d] = 4096 | G[d] & 4095), 30 <= c && 32 >= c && (G[d] = 12288 | G[d] & 4095);
    else {
        if (b == qc) return 21 <= c && 23 >= c && (G[d] = G[d] & 65520 | 3), 24 <= c && 26 >= c && (G[d] = G[d] & 65520 | 7), 27 <= c && 29 >= c && (G[d] = G[d] & 65520 | 5), 30 <= c && 32 >= c && (G[d] = G[d] & 65520 | 1), 33 == c && (G[d] = G[d] & 65520 | 4), 34 == c && (G[d] = G[d] & 65520 | 2), 35 == c && (G[d] = G[d] & 65520 | 6), 36 == c && (G[d] = G[d] & 65520 | 8), 1
    } else if (A[a] == zc) {
        if (b == zc) return 1;
        0 != X[b] && 2 < Get_Squared_Magnitude(W[a]) && (b = ~~B[a].x + ed(2), d = ~~B[a].y, 0 > W[a].x && (b += 2), 0 < W[a].x && (b -= 3), a = I[(d <<
            9) + b], a <= l && Ad(b, d, zc, 0))
    } else if (A[a] == Ic)
        if (b != nc && b != oc && b != yc || 0 == S[a]) {
            if (b == qc) return 0 != S[a] && (E[d] = S[a]), 1;
            b == Ic ? 0 != S[a] && (E[d] = S[a]) : d >= p && (S[a] = s[b])
        } else 0 != G[d] && (b = S[a] >> 16 & 255, d = S[a] >> 8 & 255, c = S[a] & 255, 384 > b + d + c && (b = Math.floor(9 * b / 7 + 1), 255 < b && (b = 255), d = Math.floor(9 * d / 7 + 1), 255 < d && (d = 255), c = Math.floor(9 * c / 7 + 1), 255 < c && (c = 255), S[a] = b << 16 | d << 8 | c));
    else if (A[a] == Kc && 0 != X[b] && b != Kc && b != Yb && b != qc) {
        a = 8;
        b == Xb && (a = 1);
        if (b == pc || b == Jc) a = 4;
        if (b == ic || b == mc) a = 16;
        9 <= c && 11 >= c && (J[d].y = a);
        21 <= c && 23 >= c && (J[d].y = a);
        12 <= c && 14 >= c && (J[d].y = -a);
        24 <= c && 26 >= c && (J[d].y = -a);
        15 <= c && 17 >= c && (J[d].x = a);
        27 <= c && 29 >= c && (J[d].x = a);
        18 <= c && 20 >= c && (J[d].x = -a);
        30 <= c && 32 >= c && (J[d].x = -a)
    }
    return 0
}
window.fff = Bh;

function Bh(a, c) {
    var b, d, e = new Vector2D;
    d = (B[a].y << 9) + ~~B[a].x;
    A[a] == Rb ? 2 == X[c] ? Z(a, d, 0, Rb, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : 3 == X[c] && Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : A[a] == q ? c != fc && c != nc && c != rc || Z(a, d, 0, q, 0, 0, 0, 0) : A[a] == Vb ? (b = Get_Squared_Magnitude(W[a]), (c == nc || c == rc || (c == Jb || c == ec || c == oc || c == pc || c == Ic) && 25 < b) && Z(a, d, 0, Wb, 0, W[a].x, W[a].y, 0.1 * -b)) : A[a] == Wb ? (b = Get_Squared_Magnitude(W[a]), (c == nc || c == rc || (c == Jb || c == ec || c == oc || c == pc || c == Ic) && 25 < b) && Z(a, d, 0, Wb, 0, W[a].x, W[a].y, 0)) : A[a] == uc ? c != nc && c != rc || Z(a, d, 0, uc, 0, 0, 0, 0) : A[a] == tc ? c != fc && c != nc &&
        c != rc || Z(a, d, 0, tc, 0, 0, 0, 0) : A[a] == r && (c != q && c != dc && c != mc && c != uc && c != rc || Z(a, d, 0, r, 0, 0, 0, 0));
    A[a] == Sb && (c == rc ? Z(a, d, 0, Sb, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : c != zc && 3 == X[c] && Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5));
    if (A[a] == Tb) c == kc ? Z(a, d, 0, kc, 0, 0, 0, 0) : c == rc ? Z(a, d, 0, Tb, 0, 0, 0, 0) : c == nc ? Z(a, d, 0, Rb, 0, 0, 0, 1) : c != zc && (3 == X[c] && 1 == S[a] ? Z(a, d, 0, Tb, 0, 0, 0, 0) : 3 == X[c] && Z(a, d, 0, r, 0, 0, 0, 0));
    else if (A[a] == Ub)
        if (2 == X[c]) Z(a, d, 0, Ub, 0, 0, 0, 0);
        else {
            if (3 == X[c]) {
                for (b = 0; 37 > b; b++)
                    if (I[d + Of[b]] <= l) {
                        var f = Ad(~~B[a].x + uh[b], ~~B[a].y +
                            vh[b], r, 2);
                        if (0 < f) {
                            var g = ah(4);
                            J[f].x += W[a].x * g + sh[b] * g;
                            J[f].y += W[a].y * g + th[b] * g
                        }
                    }
                od(a)
            }
        }
    else if (A[a] == ac)
        if (3 == X[c]) {
            for (b = 9; 21 > b; b++) I[d + Of[b]] <= l && Lf(0.5) && Ad(~~B[a].x + uh[b], ~~B[a].y + vh[b], r, 0);
            Lf(0.01) && Z(a, d, 0, ac, 0, 0, 0, 0)
        } else c == rc && Z(a, d, 0, ac, 0, 0, 0, 0);
    else if (A[a] == mc) c != fc && c != nc && c != rc || Z(a, d, 0, mc, 0, 0, 0, 0);
    else if (A[a] == Mb) d = (B[a].y >> 2 << 7) + (B[a].x >> 2), Set_XY(e, W[a].x, W[a].y), Get_Unitary_Vector(e), P[d] += e.x, Q[d] += e.y;
    else if (A[a] == Yb) {
        if (0 != S[a] && !(1E3 > lf - pd)) {
            b = ~~B[a].x;
            g = ~~B[a].y;
            if (1 == X[S[a]] || S[a] == fc || S[a] ==
                Tb || S[a] == Vb || S[a] == sc || S[a] == Ac || S[a] == Ic) b = Math.floor(B[a].x + 4 * U[d]), g = Math.floor(B[a].y + 4 * V[d]);
            else if (S[a] == r || S[a] == lc) b = Math.floor(B[a].x - 4 * U[d]), g = Math.floor(B[a].y - 4 * V[d]);
            else if (S[a] == zc || S[a] == kc) e.set(W[a]), Get_Unitary_Vector(e), b = Math.floor(B[a].x - 4 * e.x), g = Math.floor(B[a].y - 4 * e.y);
            d = 0;
            S[a] == qc && (d = 128);
            I[(g << 9) + b] <= l && Ad(b, g, S[a], d)
        }
    } else if (A[a] == bc || A[a] == ic)
        if (3 == X[c]) {
            d = 8;
            for (var m = ~~B[a].x, n = ~~B[a].y, t = If(m - d, 8), f = If(n - d, 8), u = Rf(m + d, 503), F = Rf(n + d, 287), M, g = f; g <= F; g++)
                for (b = t; b <= u; b++) d * d < (b - m) * (b - m) + (g - n) * (g - n) || (f = (g + n >> 1 << 9) + (b + m >> 1), 1 <= x[R[f]] ||
                    (M = I[(g << 9) + b], M >= p && (D[M] == ec && L(M, cc, 0, s[cc]), J[M].x += 2 * (b - m), J[M].y += 2 * (g - n)), M <= l && A[a] == ic && Ad(b, g, r, 0)));
            m = Pe(m, 12, 499);
            n = Pe(n, 12, 283);
            d = (n >> 2 << 7) + (m >> 2);
            m = 5;
            0 == x[f = d - w - 1] && (P[f] -= 0.4 * m, Q[f] -= 0.4 * m);
            0 == x[f = d - w] && (Q[f] -= 0.5 * m);
            0 == x[f = d - w + 1] && (P[f] += 0.4 * m, Q[f] -= 0.4 * m);
            0 == x[f = d - 1] && (P[f] -= 0.5 * m);
            0 == x[f = d + 1] && (P[f] += 0.5 * m);
            0 == x[f = d + w - 1] && (P[f] -= 0.4 * m, Q[f] += 0.4 * m);
            0 == x[f = d + w] && (Q[f] += 0.5 * m);
            0 == x[f = d + w + 1] && (P[f] += 0.4 * m, Q[f] += 0.4 * m);
            od(a)
        } else c == rc && Z(a, d, 0, A[a], 0, 0, 0, 0);
    else if (A[a] == lc) 3 == X[c] ?
        (Z(a, d, 0, lc, 0, 0, 0, 1), 2 > S[a] && (S[a]++, A[a] = lc)) : c == rc && Z(a, d, 0, lc, 0, 0, 0, 0);
    else if (A[a] == pc) {
        if (0 < X[c] && c != pc) {
            d = 8;
            m = ~~B[a].x;
            n = ~~B[a].y;
            t = If(m - d, 8);
            f = If(n - d, 8);
            u = Rf(m + d, 503);
            F = Rf(n + d, 287);
            Set_XY(e, 0, 0);
            for (g = f; g <= F; g++)
                for (b = t; b <= u; b++) d * d < (b - m) * (b - m) + (g - n) * (g - n) || (M = I[(g << 9) + b], M >= p && (e.x += m - b, e.y += n - g));
            Get_Unitary_Vector(e);
            for (g = f; g <= F; g++)
                for (b = t; b <= u; b++) d * d < (b - m) * (b - m) + (g - n) * (g - n) || (f = (g + n >> 1 << 9) + (b + m >> 1), 1 <= x[R[f]] || (M = I[(g << 9) + b], M >= p && (D[M] == pc && 0 != G[M] || L(M, pc, D[M], s[pc]), J[M].x += 0.5 * e.x + 0.5 * (m - b), J[M].y +=
                    0.5 * e.y + 0.5 * (n - g))));
            od(a)
        }
    } else if (A[a] == wc) 3 == X[c] ? Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : c == rc && Z(a, d, 0, wc, 0, 0, 0, 0);
    else if (A[a] == xc) 3 == X[c] ? Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : 2 != X[c] && c != wc || Z(a, d, 0, xc, 0, 0, 0, 0);
    else if (A[a] == cc) c != nc && c != rc || Z(a, d, 0, cc, 0, 0, 0, 0);
    else if (A[a] == dc) c != nc && c != rc || Z(a, d, 0, dc, 0, 0, 0, 0);
    else if (A[a] == ec) b = Get_Squared_Magnitude(W[a]), (c == Jb || c == oc || c == pc || c == Ic) && 45 < b ? A[a] = cc : c == rc && Z(a, d, 0, ec, 0, 0, 0, 0);
    else if (A[a] == oc) c == uc ? Z(a, d, 1, Rb, 0, 0, 0, 0) : c == nc ? Z(a, d, 2, oc, 0, 0, 0, 0) : c == qc ? Z(a, d, 1,
        oc, 0, 0, 0, 0) : c == rc && Z(a, d, 0, oc, 0, 0, 0, 0);
    else if (A[a] == vc) b = Get_Squared_Magnitude(W[a]), (c == Jb || c == ec || c == oc || c == pc) && 25 < b ? Z(a, d, 0, ec, 0, 0, 0, 0.05 * b) : c == nc ? Z(a, d, 1, vc, 0, 0, 0, 0) : c == qc ? Z(a, d, 2, vc, 0, 0, 0, 0) : c == rc && Z(a, d, 0, vc, 0, 0, 0, 0);
    else if (A[a] == kc) c == q && Z(a, d, 0, kc, 0, 0, 0, 0), c == dc ? Z(a, d, 0, kc, 0, 0, 0, 0) : c == mc ? Z(a, d, 0, kc, 0, 0, 0, 0) : c == uc ? Z(a, d, 0, kc, 0, 0, 0, 0) : c == nc ? Z(a, d, 0, r, 0, 0, 0, 0) : c == rc && Z(a, d, 0, kc, 0, 0, 0, 0);
    else if (A[a] == Ac) 3 == X[c] ? S[a] == ac ? Z(a, d, 2, r, 0, 0, 0, 0) : S[a] == ic ? Z(a, d, 0, ic, 0, 0, 0, 1) : S[a] == mc ? Z(a, d, 0, gc, 10, 0, 0, 1) : Z(a, d, 0, zc,
        0, 0, 0, 0) : c == q ? Z(a, d, 0, Ub, 0, 0, 0, 0) : c == uc ? Z(a, d, 0, Ub, 0, 0, 0, 0) : c == rc && Z(a, d, 0, Ac, 0, 0, 0, 0);
    else if (A[a] == Bc) c == rc && Z(a, d, 0, Bc, 0, 0, 0, 0);
    else if (A[a] == Cc) 0 == S[a] || 1E3 > lf - pd || (e.set(W[a]), Get_Unitary_Vector(e), Scale_Vect(e, 4), b = Math.floor(B[a].x - e.x), g = Math.floor(B[a].y - e.y), M = I[(g << 9) + b], M <= l && (m = S[a] & 255, e = S[a] >> 8, 0 < e && (Ad(b, g, m, 0), S[a] = e - 1 << 8 | m)));
    else if (A[a] == Xb) c == nc ? Z(a, d, 0, Xb, 0, 0, 0, 1) : c == qc ? Z(a, d, 0, Xb, 0, 0, 0, 2) : c != zc && (3 == X[c] ? Z(a, d, 0, r, 0, 0, 0, 0) : c == rc && Z(a, d, 0, Xb, 0, 0, 0, 2));
    else if (A[a] == $b)
        if (0 == S[a]) 3 == X[c] ? (W[a].x -= 5 * U[d], W[a].y -= 5 * V[d],
            S[a] = 1) : c == rc && Z(a, d, 0, $b, 0, 0, 0, 0);
        else {
            if (S[a]++, 50 < S[a]) {
                if (!(1E3 > lf - pd))
                    for (e = ed(6), 0 == e ? e = 16711680 | ed(256) << 8 : 1 == e ? e = 65280 | ed(256) << 16 : 2 == e ? e = 65280 | ed(256) : 3 == e ? e = 255 | ed(256) << 8 : 4 == e ? e = 255 | ed(256) << 16 : 5 == e && (e = 16711680 | ed(256)), b = 9; 37 > b; b++) I[d + Of[b]] <= l && (g = Ad(~~B[a].x + uh[b], ~~B[a].y + vh[b], r, 2), 0 < g && (J[g].x += 5 * sh[b], J[g].y += 5 * th[b], E[g] = e));
                od(a)
            }
        }
    else A[a] == jc ? 3 == X[c] ? Z(a, d, 0, r, 0, 0, 0, 0) : c == rc && Z(a, d, 0, jc, 0, 0, 0, 0) : A[a] == qc ? c == rc && Z(a, d, 0, qc, 0, 0, 0, 0) : A[a] == sc ? c == uc ? Z(a, d, 0, Rb, 0, 0, 0, 0) : c == nc ? Z(a,
        d, 0, sc, 0, 0, 0, 0) : c != zc && (3 == X[c] ? Z(a, d, 0, r, 0, 0, 0, 0) : c == rc && Z(a, d, 0, sc, 0, 0, 0, 0)) : A[a] == yc ? c == rc && Z(a, d, 0, yc, 0, 0, 0, 0) : A[a] == zc ? c == q ? Z(a, d, 2, zc, 0, 0, 0, 0) : c == mc ? Z(a, d, 2, zc, 0, 0, 0, 0) : c == uc ? Z(a, d, 2, zc, 0, 0, 0, 0) : c == nc ? Z(a, d, 2, zc, 0, 0, 0, 0) : c == rc && Z(a, d, 2, zc, 0, 0, 0, 0) : A[a] == Jc ? 0 != X[c] && (b = I[d - 2 * h - 2], g = I[d - 2 * h + 2], e = I[d + 2 * h + 2], d = I[d + 2 * h - 2], b <= l && (b = Ad(~~B[a].x - 2, ~~B[a].y - 2, c, 0)), g <= l && (g = Ad(~~B[a].x + 2, ~~B[a].y - 2, c, 0)), e <= l && (e = Ad(~~B[a].x + 2, ~~B[a].y + 2, c, 0)), d <= l && (d = Ad(~~B[a].x - 2, ~~B[a].y + 2, c, 0)), 0 < b && J[b].set(W[a]),
        0 < g && J[g].set(W[a]), 0 < e && J[e].set(W[a]), 0 < d && J[d].set(W[a]), p <= b && p <= g && Fd(0, 0, b, g, 0), p <= g && p <= e && Fd(0, 0, g, e, 0), p <= e && p <= d && Fd(0, 0, e, d, 0), p <= d && p <= b && Fd(0, 0, d, b, 0), p <= b && p <= e && Fd(0, 0, b, e, 5), p <= g && p <= d && Fd(0, 0, g, d, 5), od(a)) : A[a] == Kc && c == rc && Z(a, d, 2, Kc, 0, 0, 0, 0)
}

function Z(a, c, b, d, e, f, g, m) {
    if (0 == b) {
        for (b = 9; 21 > b; b++) {
            var n = I[c + Of[b]];
            n <= l && (n = Ad(~~B[a].x + uh[b], ~~B[a].y + vh[b], d, e), 0 < n && (J[n].x += f + sh[b] * m, J[n].y += g + th[b] * m))
        }
        od(a)
    } else if (1 == b || 2 == b) {
        for (b = 1 == b ? 9 : 0; 21 > b; b++) n = I[c + Of[b]], n <= l ? Ad(~~B[a].x + uh[b], ~~B[a].y + vh[b], d, e) : n >= p && L(n, d, e, s[d]);
        od(a)
    }
}
window.fff = Uf;

function Uf() {
    var a, c, b, d;
    for (a = 0; a < nd; a++)
        if (0 != A[a]) {
            d = s[A[a]];
            A[a] == Ic && 0 != S[a] && (d = S[a]);
            14 == qa && (d = 0);
            b = (B[a].y << 9) + ~~B[a].x;
            for (c = 9; 21 > c; c++) v[b + Of[c]] = v[b + Of[c]] == d ? 0 : d;
            if (288 > B[a].y)
                if (12 == qa) {
                    if (A[a] == r || A[a] == fc || A[a] == kc || A[a] == nc || A[a] == qc || A[a] == zc) Db[b] = 255E3
                } else 13 == qa && (Db[b] = 2 * Rc[A[a]])
        }
}
var Canvas_Context = HTML_Canvas.getContext("2d"),
    Dh = Canvas_Context.createImageData(h, ba),
    $d = new Uint8Array(Dh.data.buffer);
window.fff = Gh;

function Gh(a, c, b, d, e, f, g) {
    try {
        HTML_Canvas = document.getElementById("cv"), Canvas_Context = HTML_Canvas.getContext("2d"), Canvas_Context.putImageData(a, c, b, d, e, f, g)
    } catch (m) {}
}
window.fff = Md;

function Md(a) {
    try {
        window.console.log(a)
    } catch (c) {}
}
window.Init = Ld;

var Ih = 0,
    v = new Int32Array(h * ba);

function pe() {
    if (AnimationFrame) {
        AnimationFrame(pe);
        Lh++;
        Time_1 = Date.now();
        var a = Math.floor(60 * (Time_1 - Time_2) / 1E3 + 0.5);
        if (0 > a || 60 <= a) pf = Lh, Lh = 0, mf = Conter_1, Conter_1 = 0, of = Math.floor((2 * of +Ph) / 3), Ph = 0, Time_2 = Time_1, a = 0;
        else if (a == Qh) return;
        Conter_1++;
        Qh = a
    }
    Me = false == Ve && true == Rh;
    Te = true == Ve && false == Rh;
    Ne = false == We && true == Sh;
    Ue = true == We && false == Sh;
    Ve = Rh;
    We = Sh;
    Ie = !(Te | Ve | Ue | We);
    Oe = Te ? 1 : Ue ? -1 : 0;
    Pf = Le;
    Qf = He;
    Le = Th;
    He = Uh;
    for (a = 0; 256 > a; a++) Pd[a] = Qd[a], Qd[a] = false, Td[a] = false == Sd[a] && true == Rd[a], Ud[a] = true == Sd[a] && false == Rd[a], Sd[a] = Rd[a];
    Yd = Yd + Math.floor(1024 * Math.random()) & 1023;
    Rnd_Odd = Math.floor(512 * Math.random()) | 1;
    Fe();
    var c, b = 11 == Ih ?
        h * ba : 0;
    for (c = a = 0; a < b; a++) $d[c++] = v[a] >> 16 & 255, $d[c++] = v[a] >> 8 & 255, $d[c++] = v[a] & 255, c++;
    Gh(Dh, -8, -8, 8, 8, h - 16, ba - 8);
    AnimationFrame ? Ph += Date.now() - Time_1 : setTimeout(pe, ie())
}
var Ge = 1;

function ae() {
    if (location.hostname.length != "dan-ball.jp".length) return true;
    for (Ge = 0; Ih < location.hostname.length; Ih++)
        if (location.hostname[Ih] != "dan-ball.jp"[Ih]) return true;
    return false
}
var AnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
    Lh = 0,
    pf = 0,
    Qh = 0,
    Conter_1 = 0,
    mf = 0,
    Ph = 0,
    of = 0,
    Time_Delta = 20,
    Time_1 = Date.now(),
    Time_2 = Time_1,
    Time_3 = Time_1 + Time_Delta,
    Time_4 = Time_1,
    bf = 0;

function ie() {
    Time_1 = Date.now();
    var a = Pe(Time_3 - Time_1, 5, Time_Delta);
    Conter_1++;
    Ph += a;
    Time_3 += Time_Delta;
    if (Time_1 + a >= Time_4 || Time_1 < Time_2) of = of +Ph >> 1, Ph = 0, mf = Conter_1, Conter_1 = 0, Time_3 = Time_1 + Time_Delta, Time_4 = Time_1 + 1E3;
    Time_2 = Time_1;
    return a
}
var be = 0;

class Image_2D {
    constructor() {
        this.c = 0;
        this.file = "";
        this.o = this.d = this.k = this.f = this.j = this.a = this.shift = this.h = this.b = 0;
    }//COMEBACK
    m(fileName) {
        if(this.file != fileName){
            be++;
            this.file = fileName;
            this.c = new Image;
            this.c.src = "./data/" + fileName + "?8.3";
            delete this.a;
            this.j = this.a = 0;
        }
    }
}

function ge(a, c, b) {
    a.b = c;
    a.h = b;
    for (c = a.shift = 0; 16 > c; c++) 1 << c == a.b && (a.shift = c);
    a.a = new Int32Array(a.b * a.h)
}

function qf(a, c) {
    Hf(a, c, "sans-serif", 0, 14)
}

function Hf(a, c, b, d, e) {
    0 == a.j && (a.j = 1, ge(a, h, 128), a.k = document.createElement("canvas"), a.k.width = a.b, a.k.height = a.h, a.d = a.k.getContext("2d"));
    var f = c + b + d + e;
    if (a.o != f) {
        a.o = f;
        a.d.fillStyle = "#000000";
        a.d.fillRect(0, 0, a.b, a.h);
        f = "";
        0 != (d & 2) && (f += "italic ");
        0 != (d & 1) && (f += "bold ");
        f = f + (e + "px ") + b;
        a.d.font = f;
        a.d.fillStyle = "#ffffff";
        a.d.fillText(c, 0, e);
        b = a.d.getImageData(0, 0, a.b, a.h).data;
        c = 0;
        for (d = b.length; c < d; c += 4) a.a[c >> 2] = 1 <= b[c + 0] ? 16777215 : -1;
        for (c = b = a.f = 0; b < a.h; b++)
            for (d = 0; d < a.b; d++, c++) 16777215 == a.a[c] && a.f <= d &&
                (a.f = d + 1)
    }
}
var Yh = [
        [0, 2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    ],
    Zh = [
        [0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0
        ],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    ],
    N = new $h;

class $h {
    constructor() {
        this.l = new Image_2D;
        this.i = this.e = this.n = this.g = 0;
    }
    m(fileName, c, b) {
        this.l.m(fileName);
        this.g = c;
        this.n = b;
        this.i = this.e = 0;
    }
}

function O(a, c, b, d, e, f) {
    var g, m, n, t, u, F, M, $ = h - a.g,
        Ca = a.l.b - a.g,
        Ob = -1 < e ? 16777215 : 1,
        Zb = -1 < f ? 0 : 1,
        ub = d.length;
    for (g = 0; g < ub; g++, c += a.g + a.e)
        if (u = d.charCodeAt(g) - 32, 0 != u) {
            96 <= u && (u = 31);
            0 != a.i && (c -= Yh[a.i - 1][u]);
            F = u * a.g;
            t = b * h + c;
            for (n = 0; n < a.n; n++, t += $, F += Ca)
                for (m = 0; m < a.g; m++, t++, F++) M = a.l.a[F], M == Ob ? v[t] = e : M == Zb && (v[t] = f);
            0 != a.i && (c -= Zh[a.i - 1][u])
        }
    a.e = 0;
    a.i = 0
}

function sf(a, c, b, d) {
    var e = N;
    a -= b.length * (e.g + e.e) - e.e >> 1;
    c -= e.n >> 1;
    O(e, a, c, b, d, 0)
}

function oe(a, c, b, d, e, f) {
    var g = N;
    g.e = f;
    O(g, a, c, b, d, e);
    g.e = 0
}
var ai = 0;

function kf(a, c, b, d, e) {
    var f = ~~b - ~~a,
        g = ~~d - ~~c,
        m = If(If(Get_Module(f), Get_Module(g)), 1),
        f = Math.floor((f << 8) / m),
        g = Math.floor((g << 8) / m);
    a = (a << 8) + 127;
    c = (c << 8) + 127;
    for (var n = 0; n <= m; n++, a += f, c += g) b = a >> 8, d = c >> 8, 0 > b || h <= b || 0 > d || ba <= d || (v[(d << 9) + b] = e)
}

function uf(a, c, b, d) {
    var e = 18;
    b--;
    e--;
    kf(a, c, a + b, c, d);
    kf(a, c + e, a + b, c + e, d);
    kf(a, c, a, c + e, d);
    kf(a + b, c, a + b, c + e, d)
}

function ne(a, c, b, d, e) {
    var f;
    b = a + b > h ? h : ~~(a + b);
    d = c + d > ba ? ba : ~~(c + d);
    a = 0 > a ? 0 : ~~a;
    c = (0 > c ? 0 : ~~c) * h + a;
    f = h - (b - a);
    b = c + b - a;
    d *= h;
    if (0 == ai)
        for (; c < d; c += f, b += h)
            for (; c < b; c++) v[c] = e;
    else
        for (; c < d; c += f, b += h)
            for (; c < b; c++) {
                a = v[c];
                var g = e >> 24 & 255,
                    m = ai,
                    n = void 0,
                    t = 0,
                    u = 0,
                    n = 0;
                1 == m ? (n = a >> 16 & 255, t = (((e >> 16 & 255) - n) * g >> 8) + n, n = a >> 8 & 255, u = (((e >> 8 & 255) - n) * g >> 8) + n, n = a & 255, n = (((e & 255) - n) * g >> 8) + n) : 2 == m ? (t = ((e >> 16 & 255) * g >> 8) + (a >> 16 & 255), 255 < t && (t = 255), u = ((e >> 8 & 255) * g >> 8) + (a >> 8 & 255), 255 < u && (u = 255), n = ((e & 255) * g >> 8) + (a & 255), 255 < n &&
                    (n = 255)) : 3 == m ? (t = (a >> 16 & 255) - ((e >> 16 & 255) * g >> 8), 0 > t && (t = 0), u = (a >> 8 & 255) - ((e >> 8 & 255) * g >> 8), 0 > u && (u = 0), n = (a & 255) - ((e & 255) * g >> 8), 0 > n && (n = 0)) : 4 == m ? (t = (e >> 16 & 255) * (a >> 16 & 255) >> 8, u = (e >> 8 & 255) * (a >> 8 & 255) >> 8, n = (e & 255) * (a & 255) >> 8) : 5 == m ? (n = a >> 16 & 255, t = n + ((e >> 16 & 255) * n * g >> 16), 255 < t && (t = 255), n = a >> 8 & 255, u = n + ((e >> 8 & 255) * n * g >> 16), 255 < u && (u = 255), n = a & 255, n += (e & 255) * n * g >> 16, 255 < n && (n = 255)) : 6 == m && (n = a >> 16 & 255, t = n + (g - (2 * n * g >> 8)), n = a >> 8 & 255, u = n + (g - (2 * n * g >> 8)), n = a & 255, n += g - (2 * n * g >> 8));
                v[c] = t << 16 | u << 8 | n
            }
}

function jf(a, c, b, d, e) {
    var f = Eb,
        g = 8,
        m = 496,
        n = 496 >> ra,
        t, u;
    if (0 != m && 0 != c)
        for (n = ~~((n << 8) / m), e = ~~((e << 8) / c), b <<= 8, d <<= 8, 0 > g && (b += n * -g), 0 > a && (d += e * -a), m = g + m > h ? h : ~~(g + m), c = a + c > ba ? ba : ~~(a + c), g = 0 > g ? 0 : ~~g, a = (0 > a ? 0 : ~~a) * h + g, t = h - (m - g), m = a + m - g, c *= h; a < c; a += t, m += h, d += e)
            for (g = ((d >> 8) * f.b << 8) + b; a < m; a++, g += n) u = f.a[g >> 8], v[a] = u
}

function wf(a, c, b, d, e, f, g, m) {
    var n, t, u, F, M;
    f = Math.floor((f << 8) / d);
    g = Math.floor((g << 8) / e);
    t = n = 0;
    0 > c && (n += f * -c);
    0 > b && (t += g * -b);
    d = c + d > h ? h : Math.floor(c + d);
    e = b + e > ba ? ba : Math.floor(b + e);
    c = 0 > c ? 0 : Math.floor(c);
    b = 0 > b ? 0 : Math.floor(b);
    for (var $ = m >> 16 & 255, Ca = m >> 8 & 255, Ob = m & 255, Zb, ub; b < e; b++, t += g)
        for (u = b * h + c, F = ((t >> 8) * a.b << 8) + n, m = c; m < d; m++, u++, F += f) M = a.a[F >> 8], -1 != M && (Zb = $ * (M >> 16 & 255) >> 8, ub = Ca * (M >> 8 & 255) >> 8, M = Ob * (M & 255) >> 8, v[u] = Zb << 16 | ub << 8 | M)
}

function tf(a) {
    var c = qb.f;
    wf(qb, 256 - (c >> 1), a - 8, c, 16, qb.f, 16, 0)
}
var Ze = new Vector2D,
    Me = false,
    Te = false,
    Ve = false,
    Rh = false,
    Ne = false,
    Ue = false,
    We = false,
    Sh = false,
    Ie = false,
    Oe = 0,
    Le = 0,
    He = 0,
    Pf = 0,
    Qf = 0,
    Th = 0,
    Uh = 0;

function Ke(a, c, b, d) {
    return Le < a || a + b <= Le || He < c || c + d <= He ? false : true
}

function bi(a) {
    var c = HTML_Canvas.getBoundingClientRect();
    Th = Math.floor(a.clientX - c.left);
    Uh = Math.floor(a.clientY - c.top)
}
document.onmousemove = bi;
document.onmousedown = function (a) {
    bi(a);
    ci = false;
    if (!(0 > Th || h <= Th || 0 > Uh || ba <= Uh) && (ci = true, 0 == a.button && (Rh = true), 2 == a.button && (Sh = true), ci)) return false
};
document.onmouseup = function (a) {
    bi(a);
    0 == a.button && (Rh = false);
    2 == a.button && (Sh = false)
};
document.oncontextmenu = function () {
    if (ci) return false
};

function di(a) {
    for (var c = 0, b = 0, d = HTML_Canvas; null !== d; d = d.offsetParent) c += d.offsetLeft, b += d.offsetTop;
    a = a.touches;
    Th = Math.floor(a[0].pageX - c);
    Uh = Math.floor(a[0].pageY - b)
}
document.ontouchstart = function (a) {
    di(a);
    ci = Sh = Rh = false;
    if (!(0 > Th || h <= Th || 0 > Uh || ba <= Uh)) return Rh = ci = true, 1 < a.touches.length && (Sh = true), false
};
document.ontouchmove = function (a) {
    di(a);
    if (ci) return false
};
document.ontouchend = function (a) {
    1 > a.touches.length && (Rh = false);
    Sh = false;
    if (ci) return false
};
document.ontouchcancel = function () {
    Sh = Rh = ci = false
};
var Pd = Array(256),
    Qd = Array(256),
    Rd = Array(256),
    Sd = Array(256),
    Td = Array(256),
    Ud = Array(256),
    Vd = Array(256),
    Wd = Array(256);
document.onkeydown = function (a) {
    var c = a.keyCode;
    65 <= c & 90 >= c ? a.shiftKey || (c += 32) : c = a.shiftKey ? Wd[c] : Vd[c];
    0 <= c && 256 > c && (Rd[c] = true, Qd[c] = true);
    if (0 != c && ci) return false
};
document.onkeyup = function (a) {
    var c = a.keyCode;
    65 <= c & 90 >= c ? a.shiftKey || (c += 32) : c = a.shiftKey ? Wd[c] : Vd[c];
    0 <= c && 256 > c && (Rd[c] = false);
    if (0 != c && ci) return false
};
var ci = false;

function vf(a, c) {
    var b = null;
    try {
        b = prompt(a, c)
    } catch (d) {}
    return b
}
var Request_Buffer = Array(100),
    Request_Status = 0,
    Request_Method = "POST",
    rf = "&b=",
    xf = "&c=",
    yf = "&d=",
    zf = "&e=",
    Af = "&f=",
    Bf = "&g=",
    Cf = "&h=";
"&i=";
var Ff = "&j=",
    Gf = "&k=";
"ok";
var ce = "ERROR",
    fi = "=",
    gi = "\n",
    Request_Header = "Content-Type",
    Request_HeaderVal = "application/x-www-form-urlencoded";

function Make_HTTP_Request(Request_URL, Request_Data) {
    var Request_Status = 0;
    //clean buffer
    for (var b = 0; 100 > b; b++)
        Request_Buffer[b] = "";
    try {
        var HTTP_RequestOBJ = new XMLHttpRequest;

        //handle request
        HTTP_RequestOBJ.onreadystatechange = function () {
            if (4 == HTTP_RequestOBJ.readyState)
                if (200 == HTTP_RequestOBJ.status) {
                    var a, b, c = 0,
                        e = HTTP_RequestOBJ.responseText.length;
                    for (a = 0; a < e; a++)
                        if (b = HTTP_RequestOBJ.responseText[a], b == fi) {
                            for (a += 1; a < e; a++) {
                                b = HTTP_RequestOBJ.responseText[a];
                                if (b == gi) break;
                                Request_Buffer[c] += b
                            }
                            c++
                        } else
                            for (; a < e && HTTP_RequestOBJ.responseText[a] != gi; a++);
                    Request_Status = 1
                }
                else{
                    Request_Status = -1
                }
        };
        //open request and send data
        HTTP_RequestOBJ.open(Request_Method, Request_URL, false);
        HTTP_RequestOBJ.setRequestHeader(Request_Header, Request_HeaderVal);
        HTTP_RequestOBJ.send(Request_Data)
    } catch (e) {
        Request_Status = -2
    }
}

class Vector2D {
    constructor() {
        this.y = this.x = 0;
    }
    set(a) {
        this.x = a.x;
        this.y = a.y;
        return this;
    }
    add(a) {
        this.x += a.x;
        this.y += a.y;
        return this;
    }
    sub(a) {
        this.x -= a.x;
        this.y -= a.y;
        return this;
    }
}

function Set_XY(a, c, b) {
    a.x = c;
    a.y = b
}

function Ye(a, c, b) {
    a.x = c.x - b.x;
    a.y = c.y - b.y
}

function Scale_Vect(a, c) {
    a.x *= c;
    a.y *= c
}

function Rotate_Clockwise(a) {
    var c = a.x;
    a.x = a.y;
    a.y = -c
}

function Get_Magnitude(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
}

function Get_Squared_Magnitude(a) {
    return a.x * a.x + a.y * a.y
}

function Get_Unitary_Vector(a) {
    var c = Get_Magnitude(a);
    if (0 == c) return 0;
    a.x /= c;
    a.y /= c;
    return c
}

function Jf(a) {
    var c = Math.acos(a.x / Math.sqrt(a.x * a.x + a.y * a.y));
    0 < a.y && (c = TWO_PI - c);
    return c
}
var Xd = new Float32Array(1024),
    Yd = 0,
    Rnd_Odd = 0;

function ah(a) {
    Yd += Rnd_Odd;
    Yd &= 1023;
    return Xd[Yd] * a
}

function bh(a, c) {
    Yd += Rnd_Odd;
    Yd &= 1023;
    return Xd[Yd] * (c - a) + a
}

function Lf(a) {
    Yd += Rnd_Odd;
    Yd &= 1023;
    return Xd[Yd] < a ? true : false
}

function ed(a) {
    Yd += Rnd_Odd;
    Yd &= 1023;
    return ~~(Xd[Yd] * a)
}
var ONE_PI = 3.1415927,
    TWO_PI = 6.2831855;

function Get_Module(a) {
    return 0 > a ? -a : a
}

function If(a, c) {
    return a > c ? a : c
}

function Rf(a, c) {
    return a < c ? a : c
}

function Pe(a, c, b) {
    return a < c ? c : a > b ? b : a
}

function Je(a, c) {
    return 0 > a ? c : a > c ? 0 : a
}

//function Math.floor(a) {
//    return Math.floor(a)
//};