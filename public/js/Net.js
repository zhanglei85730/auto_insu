var __s__1 = "\u006c\u006f\u0063\u0061\u0074\u0069\u006f\u006e";
var __s__2 = "\u0075\u0072\u006c";
var __s__3 = window[__s__1];
var __s__5 = "\u0068\u0072\u0065\u0066";
var _safeprop = {
    s_e: eval,
    //s_h:'window'
    s_wd: "\u0077\u0069\u006e\u0064\u006f\u0077",
    //s_h:'location'
    s_l: "\u006c\u006f\u0063\u0061\u0074\u0069\u006f\u006e",
    //s_h:'href'
    s_h: "\u0068\u0072\u0065\u0066",
    //s_d:'document'
    s_d: "\u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074",
    // s_dih:"innerHTML"
    s_dih: "\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c",
    // s_dih:"innerText"
    s_dit: "\u0069\u006e\u006e\u0065\u0072\u0054\u0065\u0078\u0074",
    // s_dih:"write"
    s_w: "\u0077\u0072\u0069\u0074\u0065",
    getWin: function() {
        return this.s_e("(" + this.s_wd + ")");
    },
    getDoc: function() { return this.getWin()[this.s_d]; },
    write: function(a) { this.getDoc()[this.s_w](a); },
    getHref: function() { return this.getWin()[this.s_l][this.s_h]; },
    setHref: function(a) { this.getWin()[this.s_l][this.s_h] = a; },
    setHtml: function(a, b) { try { a[this.s_dih] = b; } finally { a = null; } },
    setText: function(a, b) {
        try {
            a[this.s_dit] = b;
        } finally { a = null; }
    },
    random: function() { return this.s_e("(\u004d\u0061\u0074\u0068['\u0072\u0061\u006e\u0064\u006f\u006d']())"); }
};

function _web_gu(a, d) {
    if (d == null) { return a; }
    var g = "\u0070\u0061\u0067\u0065"; //'page'
    //获取查询参数
    var c = a.lastIndexOf("?") > -1 ? a.substring(a.lastIndexOf("?")) : "";
    var f = c.indexOf(g + "=");
    if (c == "") {
        a += "?" + g + "=" + d;
    } else {
        if (f == -1) { a += "&" + g + "=" + d; } else {
            var e = c.substring(1).split("&");
            for (var b = 0; b < e.length; b++) { if (e[b].indexOf(g + "=") == 0) { e[b] = g + "=" + d; break; } }
            a = a.substring(0, a.lastIndexOf("?")) + "?" + e.join("&");
        }
    }
    return a;
}
//打开窗口，window.location.href
function _webela_o(a) { window.open(_web_gu(__s__3[__s__5], a)); }

function _webela_g(a) {
    __s__3[__s__5] = _web_gu(__s__3[__s__5], a);
}

function _utf8to16(g) {
    var b, e, a, h;
    var f, d;
    b = "";
    a = g.length;
    e = 0;
    while (e < a) {
        h = g.charCodeAt(e++);
        switch (h >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                b += g.charAt(e - 1);
                break;
            case 12:
            case 13:
                f = g.charCodeAt(e++);
                b += String.fromCharCode(((h & 31) << 6) | (f & 63));
                break;
            case 14:
                f = g.charCodeAt(e++);
                d = g.charCodeAt(e++);
                b += String.fromCharCode(((h & 15) << 12) | ((f & 63) << 6) | ((d & 63) << 0));
                break;
        }
    }
    return b;
}

function base64_2() {
    function e() {
        var g = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
        return g;
    }
    var d = e();
    this.decode = function(q) {
        var n;
        var m;
        var j;
        var g;
        var o = 0;
        var p = q.length;
        var h = a(q);
        var l = 0;
        while (o < p) {
            n = d[(h[o++])];
            if (n == -1) { break; }
            m = d[(h[o++])];
            if (m == -1) { break; }
            h[(l++)] = (n << 2) | ((m & 48) >> 4);
            j = h[(o++)];
            if (j == 61) { h.length = l; return f(h); }
            j = d[(j)];
            if (j == -1) { break; }
            h[(l++)] = ((m & 15) << 4) | ((j & 60) >> 2);
            g = h[(o++)];
            if (g == 61) { h.length = l; return f(h); }
            g = d[(g)];
            if (g == -1) { break; }
            h[(l++)] = ((j & 3) << 6) | g;
        }
        h.length = l;
        return f(h);
    };
    var c = b();

    function b() { var h = new Array(); var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; for (var g = 0; g < 64; g++) { h[g] = j.charCodeAt(g); } return h; }

    function a(m) {
        var l, g, j = [];
        for (var h = 0; h < m.length; h++) {
            l = m.charCodeAt(h);
            g = [];
            do {
                g.push(l & 255);
                l = l >> 8;
            } while (l);
            j = j.concat(g.reverse());
        }
        return j;
    }

    function f(j) { var g = ""; for (var h = 0; h < j.length; h++) { g += String.fromCharCode(parseInt(j[h])); } return g; }
    this.encode = function(m) {
        m = a(m);
        var h = new Array();
        h.length = (2 + m.length - ((m.length + 2) % 3)) * 4 / 3;
        var j = 0;
        var l = m.length % 3;
        var g = m.length - l;
        var o;
        var n = 0;
        while (j < g) {
            o = m[(j++)] << 16 | m[(j++)] << 8 | m[(j++)];
            h[(n++)] = c[(o >>> 18)];
            h[(n++)] = c[(o >>> 12 & 63)];
            h[(n++)] = c[(o >>> 6 & 63)];
            h[(n++)] = c[(o & 63)];
        }
        if (l == 1) {
            o = m[(j)];
            h[(n++)] = c[(o >>> 2)];
            h[(n++)] = c[((o & 3) << 4)];
            h[(n++)] = 61;
            h[(n++)] = 61;
        } else {
            if (l == 2) {
                o = m[(j++)] << 8 | m[(j)];
                h[(n++)] = c[(o >>> 10)];
                h[(n++)] = c[(o >>> 4 & 63)];
                h[(n++)] = c[((o & 15) << 2)];
                h[(n++)] = 61;
            }
        }
        return f(h);
    };
}
var ___b64_2 = new base64_2();

function base64encode(a) { return ___b64_2.encode(a); }

function base64decode(a) { return ___b64_2.decode(a); }
var _docstr = "document";
var _ckstr = "cookie";

function gcook() {
    var b = window[_docstr];
    var a = b[_ckstr];
    return a;
}

function scook(a) {
    var b = window[_docstr];
    b[_ckstr] = a;
}
String.prototype.replaceall = function(d, a) {
    if (d == null) { return this; }
    if (a == null) { a = ""; }
    if (d.length == 1 && d == "\\") { d = "\\\\"; }
    try { return this.replace(new RegExp(d, "gm"), a); } catch (c) {
        if (d == null) { return this; }
        if (a == null) { a = ""; }
        var b = this;
        str = "";
        while (b.indexOf(d) != -1) {
            k = b.indexOf(d);
            b = b.replace(d, a);
            str += b.substr(0, k + a.length);
            b = b.substr(k + a.length);
        }
        str += b;
        return str;
    }
};
var UUID = {
    S4: function() { return (((1 + _safeprop.random()) * 65536) | 0).toString(16).substring(1); },
    randomUUID: function() {
        return (UUID.S4() + UUID.S4() + "-" + UUID.S4() + "-" + UUID.S4() + "-" + UUID.S4() + "-" + UUID.S4() + UUID.S4() + UUID.S4());
    },
    d: new Date().getTime() + "_" + _safeprop.random().toString().replace(".", "_") + "_",
    c: 0,
    cID: function() {++UUID.c; return "cid_" + UUID.d + UUID.c; }
};
var array = function() {
    this.k = UUID.cID();
    this.keys = {};
};
array.prototype.length = 0;
array.prototype.n = "number";
array.prototype.b = "boolean";
array.prototype.s = "string";
array.prototype.nn = "n_";
array.prototype.add = function(d) {
    if (d == null) { return; }
    var b = typeof(d);
    var c = b == this.n || b == this.b || b == this.s;
    var a;
    if (c) { a = this.k + this.nn + d; if (this.keys[a] != null) { return; } } else { a = this.k + this.length; if (d[this.k] > -1) { return; } else { d[this.k] = this.length; } }
    this.keys[a] = d;
    ++this.length;
};
array.prototype.getindex = function(a) {
    return this.getValue(this.keys[a]);
};
array.prototype.getkey = function(e) { if (e == null) { return; } var c = typeof(e); var d = c == this.n || c == this.b || c == this.s; if (d) { var a = this.k + this.nn + e; if (this.keys[a] != null) { return a; } } else { var b = e[this.k]; if (b > -1) { return this.k + b; } } };
array.prototype.contains = function(a) { return this.getkey(a) != null; };
array.prototype.getvalue = function(a) {
    return this.keys[a];
};
array.prototype.remove = function(b) {
    var a = this.getkey(b);
    if (a == null) { return; }
    delete this.keys[a];
    --this.length;
};
array.prototype.clear = function() {
    this.keys = null;
    this.keys = {};
    this.length = 0;
};
if (!window.leapdefaultcallservice) { window.leapdefaultcallservice = "leap"; }
var leapconfig = {
    server: null,
    _rpcurl: null,
    loginHTML: null,
    port: 80,
    host: null,
    portal: "http",
    context: "",
    rpcurl: function() {
        return this._rpcurl;
    },
    resurl: function() { return this.server; },
    rpcservice: window.leapdefaultcallservice,
    defaultCallService: window.leapdefaultcallservice,
    ReturnJSON: true
};
var PublishServerConfig = { RPCURL: null };
PublishServerConfig.getURL = function(a) {
    if (a.indexOf("http://") == 0 || a.indexOf("https://") == 0) { return a; }
    if (this.RPCURL.charAt(this.RPCURL.length - 1) == "/") {
        if (a.charAt(0) == "/") {
            return this.RPCURL + a.substring(1, a.length);
        } else { return this.RPCURL + a; }
    } else { if (a.charAt(0) == "/") { return this.RPCURL + a.substring(1, a.length); } else { return this.RPCURL + "/" + a; } }
};
var leapscripttype = { js: 0, css: 1, template: 2 };
var ___logout = function() {
    if (window.event != null && LEAP != null) { LEAP.stopEvent(window.event); }
    window.history.back();
};
var leaprpcclientasyncactivelist = new array();
var asyncount = 0;
var leaprpcclient = function() {
    this.URL = leapconfig.rpcurl();
    this.Service = leapconfig.rpcservice;
    this.CallService = leapconfig.defaultCallService;
    this.IsReturnJSON = leapconfig.ReturnJSON;
    var c;
    var a;
    this.isSuccess = null;
    this.lastError = null;
    this.lastErrorCode = null;
    this.lastWarring = null;
    this.extendResult = null;
    this.version = null;
    this.initVersion = null;
    this.ID = "";
    this.sid = null;
    this.setvalidatecoode = function(e) {
        if (!e) { return; }
        var g = String.fromCharCode(Math.round(Math.round(_safeprop.random() * 100) / (99 / 25)) + 65);
        g += String.fromCharCode(Math.round(Math.round(_safeprop.random() * 100) / (99 / 25)) + 65);
        g += String.fromCharCode(Math.round(Math.round(_safeprop.random() * 100) / (99 / 25)) + 65);
        g += String.fromCharCode(Math.round(Math.round(_safeprop.random() * 100) / (99 / 25)) + 65);
        var f = UUID.randomUUID();
        while (f.indexOf("-") > -1) { f = f.replace("-", ""); }
        f = f.substring(0, 3) + g.charAt(0) + f.substring(4, 32);
        f = f.substring(0, 7) + g.charAt(1) + f.substring(8, 32);
        f = f.substring(0, 11) + g.charAt(2) + f.substring(12, 32);
        f = f.substring(0, 15) + g.charAt(3) + f.substring(16, 32);
        f = f.toLowerCase();
        e.src = leapconfig.server + "logic/va/_" + f + ".jpg";
        e = null;
        return g.toLowerCase();
    };
    this.getVersion = function() { if (this.initVersion == null) { this.version = window.leapversion; } return this.version; };
    this.getVersionStr = function() {
        var e = this.getVersion();
        if (e == null) { e = ""; } else { e = "?gv=" + this.getVersion(); }
        return e;
    };
    this.getLastWarring = function() { return this.lastWarring; };
    this.getLastExtendResult = function() { return this.extendResult; };
    this.setLastExtendResult = function(e) { this.extendResult = e; };
    this.getLastError = function() {
        var g = this.lastError;
        var e = this.lastErrorCode;
        var h = this.isSuccess;
        this.isSuccess = 1;
        this.lastError = null;
        this.lastErrorCode = null;
        if (g == null && e == null && h == 1) { return; }
        var f = { error: g, code: e, success: h };
        return f;
    };
    this.___buildResult = function(l, j) {
        this.isSuccess = 1;
        this.lastError = null;
        this.lastErrorCode = null;
        if (l == null || l == "" || l == "null") {
            this.isSuccess = 0;
            this.lastError = "request result is null";
            this.lastErrorCode = "-9999";
            return null;
        }
        if (j == null) { j = true; } else {
            var e = null;
            try {
                e = JSON.parse(l);
                if (e != null && e.javaClass) {
                    this.isSuccess = e.isSuccess;
                    this.lastError = e.lastError;
                    this.lastErrorCode = e.lastErrorCode;
                    this.lastWarring = e.lastWarring;
                    this.extendResult = e.extendResult;
                    if (this.isSuccess == 0) { if (this.lastErrorCode == "88888" || this.lastErrorCode == "-1") { setTimeout(___logout, 1000); } return null; }
                    var f = e.result;
                    if (f == null || f == "" || f == "null") { return null; }
                    if (e.dataType != null && e.dataType == 12) { j = false; }
                    if (j) {
                        var i = null;
                        try { i = JSON.parse(f); } catch (g) {}
                        if (i != null) { return i; }
                        return f;
                    } else { return f; }
                }
            } catch (h) {
                this.isSuccess = 0;
                this.lastError = "deserialize server return result error";
                this.lastErrorCode = "-9998";
            }
        }
    };
    this.getsid = function() {
        if (this.sid == null) {
            var f = new Date().getTime();
            var e = XmlHttpHelper.GetTextByPost(leapconfig.rpcurl(), "type=997&_z=" + UUID.S4());
            if (e != null) {
                var h = new Date().getTime();
                this._tickDiff = (h - f) / 2;
                this._endPointTicket = h;
                var g = e.split(":");
                e = g[0];
                this._serverTime = Number(g[1]);
            }
            this.sid = e;
            return this.sid;
        } else { return this.sid; }
    };
    this.setFrameSRC = function(f, e) {
        this.getsid();
        if (f && f.setAttribute) {
            if (e.indexOf("http:") == 0 || e.indexOf("https:") == 0) { f.setAttribute("src", e); } else {
                f.setAttribute("src", leapconfig.server + e);
            }
        }
    };
    this.setsrc = this.setFrameSRC;
    this.setframesrc = this.setFrameSRC;
    this.initsafe = false;
    this.safe = null;
    this.request2 = function(e) {
        if (e.requestGroup != null) { e.requestGroup.add(e); return; } else {
            return this.request(e.name, e.par, this.extendPar, e.callback, e.service, e.callService, e.requestType, e.isreturnjson, e.useGet, e.domain, e.arg);
        }
    };
    this.request = function(A, r, F, l, s, i, f, q, w, p, y) {
        var C = null;
        var g = null;
        if (s == null) { C = this.Service; } else { C = s; }
        if (i == null) { g = this.CallService; } else { g = i; }
        var u = this.IsReturnJSON;
        if (q != null && q != u) { u = q; }
        var n = [];
        if (g != "leap") { n.push("callService=" + g); }
        if (u != true) { n.push("returnJSON=0"); }
        n.push("method=" + A);
        n.push("sid=" + this.getsid());
        n = n.join("&");
        if (window.leapwebsitename) { n += "&_website_=" + window.leapwebsitename; }
        if (F != null) { n += "&extend=" + encodeURIComponent(encodeURIComponent(escape(F))); }
        if (!this.initsafe) {
            this.safe = document.getElementById("safecontrol");
            this.initsafe = true;
        }
        if (this.safe != null) {
            var z = (Math.round(_safeprop.random() * 10000)) + "";
            while (z.length < 4) { z += "0"; }
            n += "&zz=" + (z);
            try { n += this.safe.a(z); } catch (B) {}
        }
        if (f != null && f != 1) { n += "&type=" + f; }
        var h = null;
        var m = 0;
        if (r != null && typeof(r) == "object" && r != "") {
            try {
                var o = [];
                for (var G in r) {
                    if (typeof(r[G]) != "function") {
                        var t = r[G];
                        if (t == null) { o[m] = null; } else {
                            if (typeof(r[G]) != "string") {
                                o[m] = JSON.stringify(t);
                            } else { o[m] = t; }
                        }
                        m++;
                    }
                }
                h = JSON.stringify(o);
            } catch (j) { parexp = null; }
        }
        n += "&parlen=" + m;
        try {
            if (l == null) { var x = null; if (w == true) { x = XmlHttpHelper.GetTextByGet(A); } else { x = XmlHttpHelper.GetTextByPost(leapconfig.rpcurl(), n, h); } if (u) { return this.___buildResult(x, true); } else { return x; } } else {
                ++asyncount;
                var D = asyncount;
                if (w == true) { XmlHttpHelper.GetTextByGet(A, null, null, this.callbackfunction, this, { callback: l, domain: p, args: y, instance: D }); } else { XmlHttpHelper.GetTextByPost(leapconfig.rpcurl(), n, h, this.callbackfunction, this, { callback: l, domain: p, args: y, instance: D }); }
                leaprpcclientasyncactivelist.add(D);
                return D;
            }
        } catch (j) {
            if (l != null) {
                return null;
            }
        }
    };
    this.asynrequest = function(g, h, i, f, e) { return this.request(g, h, i, f, null, null, null, null, null, e); };
    this.callbackfunction = function(i, f) {
        try {
            var e = this.___buildResult(i, true);
            if (f.callback != null) {
                var h = function() {
                    try {
                        var l = f.domain;
                        if (l == null) { l = this; }
                        if (!l.moduleDisposed) { f.callback.call(l, e, f.args); }
                        l = null;
                    } catch (j) { throw j; } finally { l = f = null; }
                };
                setTimeout(h, 1);
            }
        } catch (g) {}
    };
    this.load = function(f) {
        var e = f.charAt(0);
        if (e == "/" || e == "\\") { f = f.substring(1); }
        if (f.indexOf("?") == -1 && this.getVersion() != null) { f += "?gv=" + this.getVersion(); }
        return this.request(leapconfig.resurl() + f, null, null, null, null, null, 2, false, true);
    };
    this.loadjs = function(g, e, f) { return this.loadscript(g, leapscripttype.js, e, f); };
    this.loadcss = function(f, e) { return this.loadscript(f, leapscripttype.css, e); };
    this.loadtl = function(f, e) { return this.loadscript(f, leapscripttype.template, e); };
    this._s = null;
    this._c = null;
    this.loadscript = function(j, s, q, e) {
        var h = j.charAt(0);
        if (h == "/" || h == "\\") { j = j.substring(1); }
        if (j.indexOf("?") == -1 && this.getVersion() != null) { j += "?gv=" + this.getVersion(); }
        if (q == null) { q = document; }
        var t = j;
        if (j.indexOf("?") != -1) { t = j.substring(0, j.indexOf("?")); }
        if (this._s == null) {
            this._s = [];
            var u = q.getElementsByTagName("SCRIPT");
            if (u != null) {
                for (var m = 0; m < u.length; m++) {
                    var f = u[m].getAttribute("path");
                    if (f != null) {
                        if (f.indexOf("?") != -1) { f = f.substring(0, f.indexOf("?")); }
                        this._s.push(f.toLowerCase());
                    }
                    f = null;
                }
            }
        }
        if (this._c == null) {
            this._c = [];
            var o = q.getElementsByTagName("LINK");
            if (o != null) {
                for (var m = 0; m < o.length; m++) {
                    var f = o[m].getAttribute("path");
                    if (f != null) {
                        if (f.indexOf("?") != -1) {
                            f = f.substring(0, f.indexOf("?"));
                        }
                        this._c.push(f.toLowerCase());
                    }
                    f = null;
                }
            }
        }
        if (s == null) { s = leapscripttype.js; }
        if (s == leapscripttype.js) {
            var g = this._s.length;
            var n = t.toLowerCase();
            for (var m = 0; m < g; m++) { if (n == this._s[m]) { return; } }
            this._s.push(n);
        } else {
            if (s == leapscripttype.css) {
                var g = this._c.length;
                var n = t.toLowerCase();
                for (var m = 0; m < g; m++) {
                    if (n == this._c[m]) {
                        return;
                    }
                }
                this._c.push(n);
            }
        }
        var r = this.load(j);
        if (r == null) { return; }
        if (s == leapscripttype.js || s == leapscripttype.css) { b(r, q, s, e, j); } else { try { return r; } finally { r = null; } }
    };
    var b = function(j, g, e, m, l) {
        try {
            if (j != null) {
                var i = g.getElementsByTagName("HEAD").item(0);
                var h;
                if (e == leapscripttype.js) {
                    h = g.createElement("script");
                    h.language = "javascript";
                    h.type = "text/javascript";
                    h.charset = "UTF-8";
                    h.defer = "defer";
                    h.text = j;
                    h.path = l;
                } else {
                    if (e == leapscripttype.css) {
                        var h = g.createElement("link");
                        h.setAttribute("rel", "stylesheet");
                        h.setAttribute("type", "text/css");
                        h.setAttribute("href", leapconfig.server + l);
                        h.text = j;
                        h.path = l;
                    }
                }
                i.appendChild(h);
                j = g = e = m = i = h = null;
                return true;
            }
        } catch (f) {}
    };
    this.___geti1 = function(e) {
        try {
            if (e == null) { return; }
            var j = __s__3[d];
            var f = false;
            for (var g = 0; g < e.length; g++) {
                if (e[g].tagName == "SCRIPT" && e[g].src != null && (e[g].src.indexOf("Base.js") > -1 || e[g].src.indexOf("Net.js") > -1)) {
                    var h = e[g].src;
                    if (h.charAt(0) == "/") {
                        while (j.indexOf("//") > -1) {
                            j = j.replace("//", "_");
                        }
                        j = j.replace("http:_", "http://").replace("https:_", "https://");
                        while (j.lastIndexOf("/") > -1 && j.charAt(j.lastIndexOf("/") - 1) != "/") { j = j.substring(0, j.lastIndexOf("/")); }
                        if (e[g].src.indexOf("Base.js") > -1) { j += h.replace("LEAP/Resource/JavaScript/Base.js", ""); } else {
                            j += h.replace("LEAP/Resource/JavaScript/Base/Net.js", "");
                        }
                    } else {
                        if (h.indexOf("http://") > -1 || h.indexOf("https://") > -1) { if (e[g].src.indexOf("Base.js") > -1) { j = h.replace("LEAP/Resource/JavaScript/Base.js", ""); } else { j = h.replace("LEAP/Resource/JavaScript/Base/Net.js", ""); } } else {
                            var l = 0;
                            while (h.indexOf("../") > -1) {
                                l += 1;
                                h = h.replace("../", "");
                            }
                            while (h.indexOf("./") > -1) {
                                h = h.replace("./", "");
                            }
                            while (j.indexOf("//") > -1) { j = j.replace("//", "@"); }
                            j = j.replace("http:@", "http://").replace("https:@", "https://").substring(0, j.lastIndexOf("/") + 1);
                            if (l > 0) {
                                while (l > 0) {
                                    l--;
                                    j = j.substring(0, j.lastIndexOf("/"));
                                }
                            }
                            j = j + "/" + h;
                            if (e[g].src.indexOf("Base.js") > -1) {
                                if (j.indexOf("LEAP/Resource/JavaScript/Base.js") > -1) {
                                    j = j.replace("LEAP/Resource/JavaScript/Base.js", "");
                                } else { if (j.indexOf("Resource/JavaScript/Base.js") > -1) { j = j.replace("Resource/JavaScript/Base.js", ""); } }
                            } else { j = j.replace("LEAP/Resource/JavaScript/Base/Net.js", ""); }
                        }
                    }
                    return j;
                }
            }
        } finally { e = null; }
    };
    var d = "href";
    this.init = function() {
        if (__s__3[d].toLowerCase().indexOf("/webhelp/") > -1) { return; }
        var l = __s__3[d];
        var h = this.___geti1(document.getElementsByTagName("HEAD").item(0).childNodes);
        if (!h) { h = this.___geti1(document.getElementsByTagName("SCRIPT")); }
        l = h;
        if (l.charAt(l.length - 1) != "/") { l += "/"; }
        var e = l;
        var o = l.indexOf("://");
        var m = l.indexOf("/", o + 3);
        var f = "";
        var j = l.substring(o + 3, m);
        var n = 80;
        var g = l.substring(0, o);
        if (j.indexOf(":") > -1) {
            var i = j.indexOf(":");
            n = Number(j.substring(i + 1));
            j = j.substring(0, i);
        }
        if (l.length > m + 1) {
            f = l.substring(m + 1);
            f = f.substring(0, f.length - 1);
        }
        leapconfig.port = n;
        leapconfig.host = j;
        leapconfig.portal = g;
        leapconfig.context = f;
        leapconfig.server = e;
        leapconfig._rpcurl = e + "LEAP/Service/RPC/RPC.DO";
        PublishServerConfig.RPCURL = e;
        this.getsid();
    };
};
var leapclient = new leaprpcclient();

function XmlHttpHelper() {}
var arr_t = new Array("MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP.2.6", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP", "MSXML.XMLHTTP");
var arr_t_indx = -1;
XmlHttpHelper._getXmlHttpObj = function() {
    var d = null;
    if (window.ActiveXObject) {
        if (arr_t_indx == -1) {
            for (var b = 0; b < arr_t.length; b++) {
                try {
                    d = new ActiveXObject(arr_t[b]);
                    arr_t_indx = b;
                } catch (c) {}
                if (d != null) { break; }
            }
        } else { d = new ActiveXObject(arr_t[arr_t_indx]); }
    }
    if (d == null) { if (window.XMLHttpRequest) { try { d = new XMLHttpRequest(); if (d.overrideMimeType) { d.overrideMimeType("text/xml"); } } catch (a) {} } }
    if (d == null) {
        alert("con not create XMLHTTP object");
        throw (new Error(-1, "con not create XMLHTTP object"));
    }
    return d;
};
XmlHttpHelper.GetTextByPost = function(d, f, c, e, b, a) { return XmlHttpHelper.transmit(d, "POST", f, c, "text", e != null, e, b, a); };
XmlHttpHelper.GetTextByGet = function(d, f, c, e, b, a) { return XmlHttpHelper.transmit(d, "GET", f, c, "text", e != null, e, b, a); };
XmlHttpHelper.processLID = function(a) {
    if (a) {
        try {
            var c = a.getResponseHeader("LID");
            if (c != null && c != "") { window.LEAP_LID = c; }
        } catch (b) {}
    }
    a = null;
};
window.geturl = function(b) {
    if (b != null) {
        if ((!window.LEAP_LID || ((b.indexOf("http://") == 0 || b.indexOf("https://") == 0) && (b.indexOf(leapconfig.server) == -1 || b.toLowerCase().indexOf("login.html") > -1)))) {} else {
            if (b.indexOf(".html") > -1 || b.indexOf(".htm") > -1 || b.endsWith("/")) {
                if (b.indexOf("&lid=") == -1 && b.indexOf("?lid=") == -1) {
                    var a = b.indexOf("?");
                    if (a > -1) { b = b.substring(0, a + 1) + "lid=" + window.LEAP_LID + "&" + b.substring(a + 1); } else { b += "?lid=" + window.LEAP_LID; }
                }
            }
        }
    }
    return b;
};
window._open = window["\u006f\u0070\u0065\u006e"];
window.open = function(c, b, a, f) {
    if (b == undefined) { b = null; }
    if (a == undefined) { a = null; }
    if (f == undefined) { f = null; }
    c = arguments[0] = window.geturl(c);
    try {
        if (window._open.apply) { return window._open.apply(window, arguments); }
        if (b == a && a == f && f == null) { return window._open(c); } else {
            if (b != null && a == f && f == null) { return window._open(c, b); } else {
                if (b != null && a != null && f == null) { return window._open(c, b, a); } else {
                    if (b != null && a != null && f != null) {
                        return window._open(c, b, a, f);
                    } else { if (b == null && a != null) { if (f == null) { return window._open(c, b, a); } else { return window._open(c, b, a, f); } } else { return window._open(c); } }
                }
            }
        }
    } catch (d) { return window._open(c); }
};
window._navigate = window["\u006e\u0061\u0076\u0069\u0067\u0061\u0074\u0065"];
window["\u006e\u0061\u0076\u0069\u0067\u0061\u0074\u0065"] = function(a) {
    a = arguments[0] = window.geturl(a);
    if (window._navigate.apply) { return window._navigate.apply(window, arguments); } else { return window._navigate(url); }
};
window.leap_lid_loadurl = false;
XmlHttpHelper._ua = navigator.userAgent.toLowerCase();
XmlHttpHelper.isChrome = (XmlHttpHelper._ua.indexOf("chrome") != -1);
XmlHttpHelper.isIE = ((XmlHttpHelper._ua.indexOf("msie") != -1) || XmlHttpHelper._ua.indexOf("rv:") != -1) && (XmlHttpHelper._ua.indexOf("opera") == -1) && (XmlHttpHelper._ua.indexOf("webtv") == -1);
XmlHttpHelper.IEVersion = -1;
if (XmlHttpHelper.isIE) {
    var _r = navigator.appVersion.match(/MSIE (\d+\.\d+)/, "");
    if (_r) { try { XmlHttpHelper.IEVersion = Number(_r[1]); } catch (E) {} } else {
        if (navigator.appVersion.indexOf("rv:") > -1) {
            var _r2 = navigator.appVersion.match(/rv:(\d+\.\d+)/, "");
            if (_r2) {
                try {
                    XmlHttpHelper.IEVersion = Number(_r2[1]);
                } catch (E) {}
            }
        } else { if (XmlHttpHelper.name && XmlHttpHelper.name.indexOf("rv:") > -1) { var _r2 = XmlHttpHelper.name.match(/rv:(\d+\.\d+)/, ""); if (_r2) { try { XmlHttpHelper.IEVersion = Number(_r2[1]); } catch (E) {} } } }
    }
}
XmlHttpHelper.transmit = function(f, r, c, b, a, h, g, o, t) {
    var y = null;
    var D = this._getXmlHttpObj();
    try {
        var j = f;
        if (c != null) { j += "?" + c; }
        D.open(r, j, h);
        if (!XmlHttpHelper.isChrome) { D.setRequestHeader("connection", "keep-alive"); }
        if (!window.leap_lid_loadurl) {
            window.leap_lid_loadurl = true;
            var f = __s__3.search != null ? __s__3.search : __s__3.href;
            if (f) {
                var q = f.indexOf("?");
                if (q > -1) {
                    var m = f.substring(q + 1);
                    var z = m.split("&");
                    for (var u = 0; u < z.length; u++) { var w = z[u].split("="); if (w && w.length && w.length > 1) { var C = w[0]; var s = w[1]; if (C == "lid") { window.LEAP_LID = s; break; } } }
                }
            }
        }
        if (window.LEAP_LID) { D.setRequestHeader("LID", window.LEAP_LID); }
        var d = false;
        if (r.toLowerCase() == "post") {
            var p = 0;
            if (b == null || b == "") { b = " "; }
            if (b != null) {
                try {
                    var x = false;
                    if (leapflash.fp != null && leapflash.fp.compress != null && b.length > 1000) {
                        if (!(XmlHttpHelper.isIE && XmlHttpHelper.IEVersion == 8)) {
                            x = true;
                            b = "a=" + leapflash.fp.compress(b);
                            D.setRequestHeader("Data-Type", "2");
                        }
                    }
                    if (!x && b.length > 0) {
                        if (!(XmlHttpHelper.isIE && XmlHttpHelper.IEVersion == 8)) {
                            b = "a=" + base64encode(encodeURIComponent(escape(b)));
                            D.setRequestHeader("Data-Type", "4");
                        } else {
                            b = "a=" + encodeURIComponent(escape(b));
                            D.setRequestHeader("Data-Type", "5");
                        }
                    }
                } catch (v) {}
                D.setRequestHeader("Post-Type", "1");
                p = b.length;
            }
            if (!XmlHttpHelper.isChrome) { D.setRequestHeader("Content-Length", '"' + p + '"'); }
            D.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        } else { if (b != null) { if (c != null) { j += "&requestData=" + b; } else { j = "?requestData=" + b; } } }
        if (window._leap_systemarea) {
            D.setRequestHeader("LSYS-AREA", window._leap_systemarea);
        }
        if (window._leap_systemname) { D.setRequestHeader("LSYS-NAME", window._leap_systemname); }
        if (window._leap_systemcode) { D.setRequestHeader("LSYS-CODE", window._leap_systemcode); }
        if (h) {
            if (t != null && t.instance != null) { y = t.instance; }
            D.onreadystatechange = function() {
                XmlHttpHelper.processLID(D);
                if (D.readyState == 4) {
                    try {
                        if (a != null) {
                            if (a.toLowerCase() == "text") {
                                if (g != null) {
                                    if (o != null) {
                                        if (y == null || (y != null && leaprpcclientasyncactivelist.contains(y))) {
                                            var e = D.responseText;
                                            if (D.getResponseHeader("LENC")) { if (d) { if (e) { e = leapflash.fp.d(e); if (e) { e = decodeURIComponent(e); } } } }
                                            g.call(o, e, t);
                                        } else { g = t = null; }
                                        if (y != null) { leaprpcclientasyncactivelist.remove(y); }
                                    } else {
                                        var e = D.responseText;
                                        if (D.getResponseHeader("LENC")) {
                                            if (d) {
                                                if (e) {
                                                    e = leapflash.fp.d(e);
                                                    if (e) {
                                                        e = decodeURIComponent(e);
                                                    }
                                                }
                                            }
                                        }
                                        g.call(e);
                                    }
                                }
                            } else { if (a.toLowerCase() == "xml") { if (o != null) { if (y == null || (y != null && leaprpcclientasyncactivelist.contains(y))) { g.call(o, D.responseXML, t); } else { g = t = null; } if (y != null) { leaprpcclientasyncactivelist.remove(y); } } else { g.call(D.responseXML); } } }
                        } else {
                            if (o != null) {
                                if (t != null) { g.call(o, null, t); } else {
                                    g.call(o);
                                }
                            } else { g.call(); }
                        }
                    } finally {}
                }
            };
            if (b == null) { b = ""; }
            D.send(b);
        } else {
            if (b == null) { b = ""; }
            D.send(b);
            XmlHttpHelper.processLID(D);
            if (D.status == 200) {
                if (a != null) {
                    if (a.toLowerCase() == "text") {
                        if (D.getResponseHeader("LENC")) {
                            if (d) {
                                var B = D.responseText;
                                if (B) { B = leapflash.fp.d(B); if (B) { B = decodeURIComponent(B); } }
                                return B;
                            }
                        }
                        var n = D.getResponseHeader("ServerTime997");
                        if (n != null && n.length > 0) { return D.responseText + ":" + n; } else { return D.responseText; }
                    } else { if (a.toLowerCase() == "xml") { return D.responseXML; } }
                } else { return null; }
            }
            return null;
        }
    } catch (A) { if (y != null) { leaprpcclientasyncactivelist.remove(y); } } finally { if (D != null) { try {} catch (l) {} } }
};
RegExp.prototype.toJSON = function() { return this.toString(); };
if (!this.JSON) { this.JSON = {}; }(function() {
    function f(n) { return n < 10 ? "0" + n : n; }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) { return this.valueOf(); };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
        rep;

    function quote(string) { escapable.lastIndex = 0; return escapable.test(string) ? '"' + string.replace(escapable, function(a) { var c = meta[a]; return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4); }) + '"' : '"' + string + '"'; }

    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") { value = value.toJSON(key); }
        if (typeof rep === "function") { value = rep.call(holder, key, value); }
        switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) { return "null"; }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) { partial[i] = str(i, value) || "null"; }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === "object") { length = rep.length; for (i = 0; i < length; i += 1) { k = rep[i]; if (typeof k === "string") { v = str(k, value); if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v); } } } } else {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
        }
    }
    var ___i8 = false;
    try {
        ___i8 = (((LEAPBrowser.name.indexOf("msie") != -1) || LEAPBrowser.name.indexOf("rv:") != -1) && (LEAPBrowser.name.indexOf("opera") == -1) && (LEAPBrowser.name.indexOf("webtv") == -1) && navigator.appVersion.match(/MSIE (\d+\.\d+)/, "")[1] == 8);
    } catch (E) {}
    if (typeof JSON.stringify !== "function" || ___i8) {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") { for (i = 0; i < space; i += 1) { indent += " "; } } else { if (typeof space === "string") { indent = space; } }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }
            return str("", { "": value });
        };
    }
    if (typeof JSON.parse !== "function" || ___i8) {
        JSON.parse = function(text, reviver) {
            if (text == null || text == "") { return null; }
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) { value[k] = v; } else { delete value[k]; }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            cx.lastIndex = 0;
            if (cx.test(text)) { text = text.replace(cx, function(a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4); }); }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({ "": j }, "") : j;
            }
            throw new SyntaxError("JSON.parse");
        };
    }
}());
var json_parse = (function() {
    var d, b, a = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" },
        n, l = function(o) { var p = { name: "SyntaxError", message: o, at: d, text: n }; throw p; },
        g = function(o) {
            if (o && o !== b) {
                l("Expected '" + o + "' instead of '" + b + "'");
            }
            b = n.charAt(d);
            d += 1;
            return b;
        },
        f = function() {
            var p, o = "";
            if (b === "-") {
                o = "-";
                g("-");
            }
            while (b >= "0" && b <= "9") {
                o += b;
                g();
            }
            if (b === ".") { o += "."; while (g() && b >= "0" && b <= "9") { o += b; } }
            if (b === "e" || b === "E") {
                o += b;
                g();
                if (b === "-" || b === "+") {
                    o += b;
                    g();
                }
                while (b >= "0" && b <= "9") {
                    o += b;
                    g();
                }
            }
            p = +o;
            if (isNaN(p)) { l("Bad number"); } else {
                return p;
            }
        },
        h = function() {
            var r, q, p = "",
                o;
            if (b === '"') {
                while (g()) {
                    if (b === '"') { g(); return p; } else {
                        if (b === "\\") {
                            g();
                            if (b === "u") {
                                o = 0;
                                for (q = 0; q < 4; q += 1) {
                                    r = parseInt(g(), 16);
                                    if (!isFinite(r)) { break; }
                                    o = o * 16 + r;
                                }
                                p += String.fromCharCode(o);
                            } else { if (typeof a[b] === "string") { p += a[b]; } else { break; } }
                        } else { p += b; }
                    }
                }
            }
            l("Bad string");
        },
        j = function() { while (b && b <= " ") { g(); } },
        c = function() {
            switch (b) {
                case "t":
                    g("t");
                    g("r");
                    g("u");
                    g("e");
                    return true;
                case "f":
                    g("f");
                    g("a");
                    g("l");
                    g("s");
                    g("e");
                    return false;
                case "n":
                    g("n");
                    g("u");
                    g("l");
                    g("l");
                    return null;
            }
            l("Unexpected '" + b + "'");
        },
        m, i = function() {
            var o = [];
            if (b === "[") {
                g("[");
                j();
                if (b === "]") {
                    g("]");
                    return o;
                }
                while (b) {
                    o.push(m());
                    j();
                    if (b === "]") { g("]"); return o; }
                    g(",");
                    j();
                }
            }
            l("Bad array");
        },
        e = function() {
            var p, o = {};
            if (b === "{") {
                g("{");
                j();
                if (b === "}") { g("}"); return o; }
                while (b) {
                    p = h();
                    j();
                    g(":");
                    if (Object.hasOwnProperty.call(o, p)) { l('Duplicate key "' + p + '"'); }
                    o[p] = m();
                    j();
                    if (b === "}") {
                        g("}");
                        return o;
                    }
                    g(",");
                    j();
                }
            }
            l("Bad object");
        };
    m = function() {
        j();
        switch (b) {
            case "{":
                return e();
            case "[":
                return i();
            case '"':
                return h();
            case "-":
                return f();
            default:
                return b >= "0" && b <= "9" ? f() : c();
        }
    };
    return function(r, p) {
        var o;
        n = r;
        d = 0;
        b = " ";
        o = m();
        j();
        if (b) { l("Syntax error"); }
        return typeof p === "function" ? (function q(w, u) {
            var t, s, x = w[u];
            if (x && typeof x === "object") { for (t in x) { if (Object.hasOwnProperty.call(x, t)) { s = q(x, t); if (s !== undefined) { x[t] = s; } else { delete x[t]; } } } }
            return p.call(w, u, x);
        }({ "": o }, "")) : o;
    };
}());
if (this.JSON && !window.ActiveXObject) {
    if (this.JSON.parse && this.json_parse) {
        this.JSON.innerParse = this.JSON.parse;
        this.JSON.parse = function(c, a) {
            if (c != null) {
                try {
                    if (c.length >= 327680) {
                        return json_parse(c, a);
                    } else { return JSON.innerParse(c, a); }
                } catch (b) { return (new Function("", "return " + c))(); }
            }
        };
    }
}

function leap_common_init() { leapclient.init(); }
leap_common_init();
leapclient.ID = UUID.randomUUID().replaceall("-", "");
var leapflash = {};
leapflash.fp = null;
var __lpinite = false;
leapflash.inited = function(a, r) {
    if (__lpinite) {
        return;
    }
    __lpinite = true;
    if (r) { if (!leapflash.hasOwnProperty(r)) { leapflash[r] = []; } }
    if (a) { leapflash[r].push(a); }
    if (r == "leaprpcportal") {
        if (a) {
            leapflash.fp = document.getElementById(a);
            if (leapflash.fp && !leapflash.fp.compress) {
                var n = leapflash.fp.getElementsByTagName("object");
                if (n && n.length) { leapflash.fp = n[0]; }
                n = null;
            }
            if (leapflash.fp.s) { leapflash.fp.s(leapclient.getsid()); }
        }
        if (window._s21) {
            try {
                var o = null;
                if (a) { o = leapflash.fp.uncompress(window._s21); } else { o = base64decode(window._s21); }
                window._s21 = null;
                if (o != null) {
                    var p = o.split(";");
                    var d = p.length;
                    var h = {};
                    window.res_bgimgs = h;
                    for (var m = 0; m < d; m++) {
                        var t = p[m];
                        if (t != null && t.length > 0) {
                            var g = t.split(",");
                            h["I_" + g[0]] = g[1];
                        }
                    }
                }
            } catch (q) {}
        }
        if (window._s10) {
            try {
                var o = null;
                if (a) { o = leapflash.fp.uncompress(window._s10); } else { o = base64decode(window._s10); }
                window._s10 = null;
                if (o != null) {
                    var u = JSON.parse(o);
                    for (var s in u) {
                        if (!s.endsWith("_hashkey")) {
                            var b = u[s + "_hashkey"];
                            if (b != null) {
                                var c = u[s];
                                var d = c.length;
                                var g = new hashtable();
                                for (var f = 0; f < d; f++) { var t = c[f]; if (t[b] != null) { g.add(t[b], t); } }
                                u[s] = g;
                            }
                        }
                    }
                    window.Application = u;
                    u = null;
                }
                o = null;
            } catch (q) {}
        }
    }
};
var _fpinit = function() {
    if (window && window.isleapybsbrowser == true) {} else {
        if (leapflash.fp == null && document.getElementById("leaprpcportal01") == null) {
            var b = '<object id="leaprpcportal01" style="position:absolute;left:-100px;top:-100px;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" align="middle"><param name="movie" value="@pathLEAP/Resource/flash/hp.swf@gv" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="window" /><param name="scale" value="showall" /><param name="menu" value="true" /><param name="devicefont" value="false" /><param name="salign" value="" /><param name="allowScriptAccess" value="sameDomain" /><param name="FlashVars" value="id=leaprpcportal01&type=leaprpcportal"/><!--[if !IE]>--><object type="application/x-shockwave-flash" data="@pathLEAP/Resource/flash/hp.swf" width="1" height="1"><param name="movie" value="@pathLEAP/Resource/flash/hp.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="window" /><param name="scale" value="showall" /><param name="menu" value="true" /><param name="devicefont" value="false" /><param name="salign" value="" /><param name="allowScriptAccess" value="sameDomain" /><param name="FlashVars" value="id=leaprpcportal01&type=leaprpcportal"/><!--<![endif]--><a href="http://www.adobe.com/go/getflash"><img src="' + leapconfig.server + 'LEAP/Resource/flash/get_flash_player.gif" alt="获得 Adobe Flash Player" /></a><!--[if !IE]>--></object><!--<![endif]--></object>';
            b = b.replaceall("@path", leapconfig.server).replaceall("@gv", leapclient.getVersionStr());
            var a = document.createElement("div");
            document.body.appendChild(a);
            a.style.position = "absolute";
            a.style.left = "-100px";
            a.style.top = "-100px";
            a.style.width = "1px";
            a.style.height = "1px";
            a.innerHTML = b;
            a = null;
        }
        window.setTimeout(leapflash.inited, 1000);
    }
};
if (window.attachEvent) { window.attachEvent("onload", _fpinit); } else { window.addEventListener("load", _fpinit); }