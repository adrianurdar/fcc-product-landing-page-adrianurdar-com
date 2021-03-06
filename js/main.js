!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 3)
}([function(e, t, n) {
    var r;
    /*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, (function(n, o) {
        "use strict";
        var i = []
          , a = n.document
          , s = Object.getPrototypeOf
          , u = i.slice
          , c = i.concat
          , l = i.push
          , f = i.indexOf
          , p = {}
          , d = p.toString
          , h = p.hasOwnProperty
          , g = h.toString
          , v = g.call(Object)
          , y = {}
          , m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
          , b = function(e) {
            return null != e && e === e.window
        }
          , x = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function w(e, t, n) {
            var r, o, i = (n = n || a).createElement("script");
            if (i.text = e,
            t)
                for (r in x)
                    (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }
        function k(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
        }
        var T = function(e, t) {
            return new T.fn.init(e,t)
        }
          , C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function E(e) {
            var t = !!e && "length"in e && e.length
              , n = k(e);
            return !m(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        T.fn = T.prototype = {
            jquery: "3.4.1",
            constructor: T,
            length: 0,
            toArray: function() {
                return u.call(this)
            },
            get: function(e) {
                return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = T.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return T.each(this, e)
            },
            map: function(e) {
                return this.pushStack(T.map(this, (function(t, n) {
                    return e.call(t, n, t)
                }
                )))
            },
            slice: function() {
                return this.pushStack(u.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: i.sort,
            splice: i.splice
        },
        T.extend = T.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
            a = arguments[s] || {},
            s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && (a = this,
            s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        r = e[t],
                        "__proto__" !== t && a !== r && (c && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t],
                        i = o && !Array.isArray(n) ? [] : o || T.isPlainObject(n) ? n : {},
                        o = !1,
                        a[t] = T.extend(c, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        T.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === v)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t) {
                w(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, r = 0;
                if (E(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(C, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (E(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : f.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                    e[o++] = t[r];
                return e.length = o,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                    !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0, a = [];
                if (E(e))
                    for (r = e.length; i < r; i++)
                        null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e)
                        null != (o = t(e[i], i, n)) && a.push(o);
                return c.apply([], a)
            },
            guid: 1,
            support: y
        }),
        "function" == typeof Symbol && (T.fn[Symbol.iterator] = i[Symbol.iterator]),
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            p["[object " + t + "]"] = t.toLowerCase()
        }
        ));
        var N = /*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
        function(e) {
            var t, n, r, o, i, a, s, u, c, l, f, p, d, h, g, v, y, m, b, x = "sizzle" + 1 * new Date, w = e.document, k = 0, T = 0, C = ue(), E = ue(), N = ue(), S = ue(), A = function(e, t) {
                return e === t && (f = !0),
                0
            }, j = {}.hasOwnProperty, D = [], P = D.pop, L = D.push, M = D.push, q = D.slice, O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", _ = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + _ + "*(" + R + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + _ + "*\\]", B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", F = new RegExp(_ + "+","g"), $ = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$","g"), W = new RegExp("^" + _ + "*," + _ + "*"), z = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"), G = new RegExp(_ + "|>"), U = new RegExp(B), X = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)","i"),
                bool: new RegExp("^(?:" + H + ")$","i"),
                needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)","i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)","ig"), ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function() {
                p()
            }, ae = xe((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }
            ), {
                dir: "parentNode",
                next: "legend"
            });
            try {
                M.apply(D = q.call(w.childNodes), w.childNodes),
                D[w.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: D.length ? function(e, t) {
                        L.apply(e, q.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function se(e, t, r, o) {
                var i, s, c, l, f, h, y, m = t && t.ownerDocument, k = t ? t.nodeType : 9;
                if (r = r || [],
                "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k)
                    return r;
                if (!o && ((t ? t.ownerDocument || t : w) !== d && p(t),
                t = t || d,
                g)) {
                    if (11 !== k && (f = Z.exec(e)))
                        if (i = f[1]) {
                            if (9 === k) {
                                if (!(c = t.getElementById(i)))
                                    return r;
                                if (c.id === i)
                                    return r.push(c),
                                    r
                            } else if (m && (c = m.getElementById(i)) && b(t, c) && c.id === i)
                                return r.push(c),
                                r
                        } else {
                            if (f[2])
                                return M.apply(r, t.getElementsByTagName(e)),
                                r;
                            if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return M.apply(r, t.getElementsByClassName(i)),
                                r
                        }
                    if (n.qsa && !S[e + " "] && (!v || !v.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
                        if (y = e,
                        m = t,
                        1 === k && G.test(e)) {
                            for ((l = t.getAttribute("id")) ? l = l.replace(re, oe) : t.setAttribute("id", l = x),
                            s = (h = a(e)).length; s--; )
                                h[s] = "#" + l + " " + be(h[s]);
                            y = h.join(","),
                            m = ee.test(e) && ye(t.parentNode) || t
                        }
                        try {
                            return M.apply(r, m.querySelectorAll(y)),
                            r
                        } catch (t) {
                            S(e, !0)
                        } finally {
                            l === x && t.removeAttribute("id")
                        }
                    }
                }
                return u(e.replace($, "$1"), t, r, o)
            }
            function ue() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    t[n + " "] = o
                }
            }
            function ce(e) {
                return e[x] = !0,
                e
            }
            function le(e) {
                var t = d.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function fe(e, t) {
                for (var n = e.split("|"), o = n.length; o--; )
                    r.attrHandle[n[o]] = t
            }
            function pe(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function de(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function he(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function ge(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function ve(e) {
                return ce((function(t) {
                    return t = +t,
                    ce((function(n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--; )
                            n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    }
                    ))
                }
                ))
            }
            function ye(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = se.support = {},
            i = se.isXML = function(e) {
                var t = e.namespaceURI
                  , n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }
            ,
            p = se.setDocument = function(e) {
                var t, o, a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement,
                g = !i(d),
                w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
                n.attributes = le((function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }
                )),
                n.getElementsByTagName = le((function(e) {
                    return e.appendChild(d.createComment("")),
                    !e.getElementsByTagName("*").length
                }
                )),
                n.getElementsByClassName = K.test(d.getElementsByClassName),
                n.getById = le((function(e) {
                    return h.appendChild(e).id = x,
                    !d.getElementsByName || !d.getElementsByName(x).length
                }
                )),
                n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i];
                            for (o = t.getElementsByName(e),
                            r = 0; i = o[r++]; )
                                if ((n = i.getAttributeNode("id")) && n.value === e)
                                    return [i]
                        }
                        return []
                    }
                }
                ),
                r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], o = 0, i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }
                ,
                r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e)
                }
                ,
                y = [],
                v = [],
                (n.qsa = K.test(d.querySelectorAll)) && (le((function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + _ + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || v.push("\\[" + _ + "*(?:value|" + H + ")"),
                    e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                    e.querySelectorAll(":checked").length || v.push(":checked"),
                    e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
                }
                )),
                le((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && v.push("name" + _ + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                    h.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    v.push(",.*:")
                }
                ))),
                (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
                    n.disconnectedMatch = m.call(e, "*"),
                    m.call(e, "[s!='']:x"),
                    y.push("!=", B)
                }
                )),
                v = v.length && new RegExp(v.join("|")),
                y = y.length && new RegExp(y.join("|")),
                t = K.test(h.compareDocumentPosition),
                b = t || K.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                A = t ? function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && b(w, e) ? -1 : t === d || t.ownerDocument === w && b(w, t) ? 1 : l ? O(l, e) - O(l, t) : 0 : 4 & r ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                    if (!o || !i)
                        return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : l ? O(l, e) - O(l, t) : 0;
                    if (o === i)
                        return pe(e, t);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (n = t; n = n.parentNode; )
                        s.unshift(n);
                    for (; a[r] === s[r]; )
                        r++;
                    return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }
                ,
                d) : d
            }
            ,
            se.matches = function(e, t) {
                return se(e, null, null, t)
            }
            ,
            se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && p(e),
                n.matchesSelector && g && !S[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
                    try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {
                        S(t, !0)
                    }
                return se(t, d, null, [e]).length > 0
            }
            ,
            se.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && p(e),
                b(e, t)
            }
            ,
            se.attr = function(e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var o = r.attrHandle[t.toLowerCase()]
                  , i = o && j.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            se.escape = function(e) {
                return (e + "").replace(re, oe)
            }
            ,
            se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            se.uniqueSort = function(e) {
                var t, r = [], o = 0, i = 0;
                if (f = !n.detectDuplicates,
                l = !n.sortStable && e.slice(0),
                e.sort(A),
                f) {
                    for (; t = e[i++]; )
                        t === e[i] && (o = r.push(i));
                    for (; o--; )
                        e.splice(r[o], 1)
                }
                return l = null,
                e
            }
            ,
            o = se.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += o(t);
                return n
            }
            ,
            (r = se.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && C(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }
                        ))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var o = se.attr(r, e);
                            return null == o ? "!=" === t : !t || (o += "",
                            "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3)
                          , a = "last" !== e.slice(-4)
                          , s = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, u) {
                            var c, l, f, p, d, h, g = i !== a ? "nextSibling" : "previousSibling", v = t.parentNode, y = s && t.nodeName.toLowerCase(), m = !u && !s, b = !1;
                            if (v) {
                                if (i) {
                                    for (; g; ) {
                                        for (p = t; p = p[g]; )
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild],
                                a && m) {
                                    for (b = (d = (c = (l = (f = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2],
                                    p = d && v.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop(); )
                                        if (1 === p.nodeType && ++b && p === t) {
                                            l[e] = [k, d, b];
                                            break
                                        }
                                } else if (m && (b = d = (c = (l = (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === k && c[1]),
                                !1 === b)
                                    for (; (p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (m && ((l = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [k, b]),
                                    p !== t)); )
                                        ;
                                return (b -= o) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                        r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--; )
                                e[r = O(e, i[a])] = !(n[r] = i[a])
                        }
                        )) : function(e) {
                            return o(e, 0, n)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = []
                          , n = []
                          , r = s(e.replace($, "$1"));
                        return r[x] ? ce((function(e, t, n, o) {
                            for (var i, a = r(e, null, o, []), s = e.length; s--; )
                                (i = a[s]) && (e[s] = !(t[s] = i))
                        }
                        )) : function(e, o, i) {
                            return t[0] = e,
                            r(t, null, i, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }
                    )),
                    has: ce((function(e) {
                        return function(t) {
                            return se(e, t).length > 0
                        }
                    }
                    )),
                    contains: ce((function(e) {
                        return e = e.replace(te, ne),
                        function(t) {
                            return (t.textContent || o(t)).indexOf(e) > -1
                        }
                    }
                    )),
                    lang: ce((function(e) {
                        return X.test(e || "") || se.error("unsupported lang: " + e),
                        e = e.replace(te, ne).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }
                    )),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve((function() {
                        return [0]
                    }
                    )),
                    last: ve((function(e, t) {
                        return [t - 1]
                    }
                    )),
                    eq: ve((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }
                    )),
                    even: ve((function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }
                    )),
                    odd: ve((function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }
                    )),
                    lt: ve((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }
                    )),
                    gt: ve((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    }
                    ))
                }
            }).pseudos.nth = r.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                r.pseudos[t] = de(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                r.pseudos[t] = he(t);
            function me() {}
            function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function xe(e, t, n) {
                var r = t.dir
                  , o = t.next
                  , i = o || r
                  , a = n && "parentNode" === i
                  , s = T++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            return e(t, n, o);
                    return !1
                }
                : function(t, n, u) {
                    var c, l, f, p = [k, s];
                    if (u) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || a) && e(t, n, u))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                if (l = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                o && o === t.nodeName.toLowerCase())
                                    t = t[r] || t;
                                else {
                                    if ((c = l[i]) && c[0] === k && c[1] === s)
                                        return p[2] = c[2];
                                    if (l[i] = p,
                                    p[2] = e(t, n, u))
                                        return !0
                                }
                    return !1
                }
            }
            function we(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--; )
                        if (!e[o](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function ke(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
                    (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                    c && t.push(s)));
                return a
            }
            function Te(e, t, n, r, o, i) {
                return r && !r[x] && (r = Te(r)),
                o && !o[x] && (o = Te(o, i)),
                ce((function(i, a, s, u) {
                    var c, l, f, p = [], d = [], h = a.length, g = i || function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                            se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), v = !e || !i && t ? g : ke(g, p, e, s, u), y = n ? o || (i ? e : h || r) ? [] : a : v;
                    if (n && n(v, y, s, u),
                    r)
                        for (c = ke(y, d),
                        r(c, [], s, u),
                        l = c.length; l--; )
                            (f = c[l]) && (y[d[l]] = !(v[d[l]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [],
                                l = y.length; l--; )
                                    (f = y[l]) && c.push(v[l] = f);
                                o(null, y = [], c, u)
                            }
                            for (l = y.length; l--; )
                                (f = y[l]) && (c = o ? O(i, f) : p[l]) > -1 && (i[c] = !(a[c] = f))
                        }
                    } else
                        y = ke(y === a ? y.splice(h, y.length) : y),
                        o ? o(null, a, y, u) : M.apply(a, y)
                }
                ))
            }
            function Ce(e) {
                for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = xe((function(e) {
                    return e === t
                }
                ), s, !0), f = xe((function(e) {
                    return O(t, e) > -1
                }
                ), s, !0), p = [function(e, n, r) {
                    var o = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return t = null,
                    o
                }
                ]; u < i; u++)
                    if (n = r.relative[e[u].type])
                        p = [xe(we(p), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                            for (o = ++u; o < i && !r.relative[e[o].type]; o++)
                                ;
                            return Te(u > 1 && we(p), u > 1 && be(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace($, "$1"), n, u < o && Ce(e.slice(u, o)), o < i && Ce(e = e.slice(o)), o < i && be(e))
                        }
                        p.push(n)
                    }
                return we(p)
            }
            return me.prototype = r.filters = r.pseudos,
            r.setFilters = new me,
            a = se.tokenize = function(e, t) {
                var n, o, i, a, s, u, c, l = E[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                for (s = e,
                u = [],
                c = r.preFilter; s; ) {
                    for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                    u.push(i = [])),
                    n = !1,
                    (o = z.exec(s)) && (n = o.shift(),
                    i.push({
                        value: n,
                        type: o[0].replace($, " ")
                    }),
                    s = s.slice(n.length)),
                    r.filter)
                        !(o = V[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(),
                        i.push({
                            value: n,
                            type: a,
                            matches: o
                        }),
                        s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
            }
            ,
            s = se.compile = function(e, t) {
                var n, o = [], i = [], s = N[e + " "];
                if (!s) {
                    for (t || (t = a(e)),
                    n = t.length; n--; )
                        (s = Ce(t[n]))[x] ? o.push(s) : i.push(s);
                    (s = N(e, function(e, t) {
                        var n = t.length > 0
                          , o = e.length > 0
                          , i = function(i, a, s, u, l) {
                            var f, h, v, y = 0, m = "0", b = i && [], x = [], w = c, T = i || o && r.find.TAG("*", l), C = k += null == w ? 1 : Math.random() || .1, E = T.length;
                            for (l && (c = a === d || a || l); m !== E && null != (f = T[m]); m++) {
                                if (o && f) {
                                    for (h = 0,
                                    a || f.ownerDocument === d || (p(f),
                                    s = !g); v = e[h++]; )
                                        if (v(f, a || d, s)) {
                                            u.push(f);
                                            break
                                        }
                                    l && (k = C)
                                }
                                n && ((f = !v && f) && y--,
                                i && b.push(f))
                            }
                            if (y += m,
                            n && m !== y) {
                                for (h = 0; v = t[h++]; )
                                    v(b, x, a, s);
                                if (i) {
                                    if (y > 0)
                                        for (; m--; )
                                            b[m] || x[m] || (x[m] = P.call(u));
                                    x = ke(x)
                                }
                                M.apply(u, x),
                                l && !i && x.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                            }
                            return l && (k = C,
                            c = w),
                            b
                        };
                        return n ? ce(i) : i
                    }(i, o))).selector = e
                }
                return s
            }
            ,
            u = se.select = function(e, t, n, o) {
                var i, u, c, l, f, p = "function" == typeof e && e, d = !o && a(e = p.selector || e);
                if (n = n || [],
                1 === d.length) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        p && (t = t.parentNode),
                        e = e.slice(u.shift().value.length)
                    }
                    for (i = V.needsContext.test(e) ? 0 : u.length; i-- && (c = u[i],
                    !r.relative[l = c.type]); )
                        if ((f = r.find[l]) && (o = f(c.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                            if (u.splice(i, 1),
                            !(e = o.length && be(u)))
                                return M.apply(n, o),
                                n;
                            break
                        }
                }
                return (p || s(e, d))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = x.split("").sort(A).join("") === x,
            n.detectDuplicates = !!f,
            p(),
            n.sortDetached = le((function(e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
            }
            )),
            le((function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }
            )) || fe("type|href|height|width", (function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }
            )),
            n.attributes && le((function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }
            )) || fe("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }
            )),
            le((function(e) {
                return null == e.getAttribute("disabled")
            }
            )) || fe(H, (function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            )),
            se
        }(n);
        T.find = N,
        T.expr = N.selectors,
        T.expr[":"] = T.expr.pseudos,
        T.uniqueSort = T.unique = N.uniqueSort,
        T.text = N.getText,
        T.isXMLDoc = N.isXML,
        T.contains = N.contains,
        T.escapeSelector = N.escape;
        var S = function(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && T(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , A = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , j = T.expr.match.needsContext;
        function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function L(e, t, n) {
            return m(t) ? T.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            }
            )) : t.nodeType ? T.grep(e, (function(e) {
                return e === t !== n
            }
            )) : "string" != typeof t ? T.grep(e, (function(e) {
                return f.call(t, e) > -1 !== n
            }
            )) : T.filter(t, e, n)
        }
        T.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, (function(e) {
                return 1 === e.nodeType
            }
            )))
        }
        ,
        T.fn.extend({
            find: function(e) {
                var t, n, r = this.length, o = this;
                if ("string" != typeof e)
                    return this.pushStack(T(e).filter((function() {
                        for (t = 0; t < r; t++)
                            if (T.contains(o[t], this))
                                return !0
                    }
                    )));
                for (n = this.pushStack([]),
                t = 0; t < r; t++)
                    T.find(e, o[t], n);
                return r > 1 ? T.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(L(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(L(this, e || [], !0))
            },
            is: function(e) {
                return !!L(this, "string" == typeof e && j.test(e) ? T(e) : e || [], !1).length
            }
        });
        var M, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function(e, t, n) {
            var r, o;
            if (!e)
                return this;
            if (n = n || M,
            "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof T ? t[0] : t,
                    T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)),
                    P.test(r[1]) && T.isPlainObject(t))
                        for (r in t)
                            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = a.getElementById(r[2])) && (this[0] = o,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
        }
        ).prototype = T.fn,
        M = T(a);
        var O = /^(?:parents|prev(?:Until|All))/
          , H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function _(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        T.fn.extend({
            has: function(e) {
                var t = T(e, this)
                  , n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (T.contains(this, t[e]))
                            return !0
                }
                ))
            },
            closest: function(e, t) {
                var n, r = 0, o = this.length, i = [], a = "string" != typeof e && T(e);
                if (!j.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        T.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return S(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return S(e, "parentNode", n)
            },
            next: function(e) {
                return _(e, "nextSibling")
            },
            prev: function(e) {
                return _(e, "previousSibling")
            },
            nextAll: function(e) {
                return S(e, "nextSibling")
            },
            prevAll: function(e) {
                return S(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return S(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return S(e, "previousSibling", n)
            },
            siblings: function(e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return A(e.firstChild)
            },
            contents: function(e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e),
                T.merge([], e.childNodes))
            }
        }, (function(e, t) {
            T.fn[e] = function(n, r) {
                var o = T.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = T.filter(r, o)),
                this.length > 1 && (H[e] || T.uniqueSort(o),
                O.test(e) && o.reverse()),
                this.pushStack(o)
            }
        }
        ));
        var R = /[^\x20\t\r\n\f]+/g;
        function I(e) {
            return e
        }
        function B(e) {
            throw e
        }
        function F(e, t, n, r) {
            var o;
            try {
                e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        T.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return T.each(e.match(R) || [], (function(e, n) {
                    t[n] = !0
                }
                )),
                t
            }(e) : T.extend({}, e);
            var t, n, r, o, i = [], a = [], s = -1, u = function() {
                for (o = o || e.once,
                r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < i.length; )
                        !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                o && (i = n ? [] : "")
            }, c = {
                add: function() {
                    return i && (n && !t && (s = i.length - 1,
                    a.push(n)),
                    function t(n) {
                        T.each(n, (function(n, r) {
                            m(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== k(r) && t(r)
                        }
                        ))
                    }(arguments),
                    n && !t && u()),
                    this
                },
                remove: function() {
                    return T.each(arguments, (function(e, t) {
                        for (var n; (n = T.inArray(t, i, n)) > -1; )
                            i.splice(n, 1),
                            n <= s && s--
                    }
                    )),
                    this
                },
                has: function(e) {
                    return e ? T.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []),
                    this
                },
                disable: function() {
                    return o = a = [],
                    i = n = "",
                    this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return o = a = [],
                    n || t || (i = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                    a.push(n),
                    t || u()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return c
        }
        ,
        T.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
                  , r = "pending"
                  , o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return T.Deferred((function(n) {
                            T.each(t, (function(t, r) {
                                var o = m(e[r[4]]) && e[r[4]];
                                i[r[1]]((function() {
                                    var e = o && o.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                }
                                ))
                            }
                            )),
                            e = null
                        }
                        )).promise()
                    },
                    then: function(e, r, o) {
                        var i = 0;
                        function a(e, t, r, o) {
                            return function() {
                                var s = this
                                  , u = arguments
                                  , c = function() {
                                    var n, c;
                                    if (!(e < i)) {
                                        if ((n = r.apply(s, u)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        m(c) ? o ? c.call(n, a(i, t, I, o), a(i, t, B, o)) : (i++,
                                        c.call(n, a(i, t, I, o), a(i, t, B, o), a(i, t, I, t.notifyWith))) : (r !== I && (s = void 0,
                                        u = [n]),
                                        (o || t.resolveWith)(s, u))
                                    }
                                }
                                  , l = o ? c : function() {
                                    try {
                                        c()
                                    } catch (n) {
                                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, l.stackTrace),
                                        e + 1 >= i && (r !== B && (s = void 0,
                                        u = [n]),
                                        t.rejectWith(s, u))
                                    }
                                }
                                ;
                                e ? l() : (T.Deferred.getStackHook && (l.stackTrace = T.Deferred.getStackHook()),
                                n.setTimeout(l))
                            }
                        }
                        return T.Deferred((function(n) {
                            t[0][3].add(a(0, n, m(o) ? o : I, n.notifyWith)),
                            t[1][3].add(a(0, n, m(e) ? e : I)),
                            t[2][3].add(a(0, n, m(r) ? r : B))
                        }
                        )).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, o) : o
                    }
                }
                  , i = {};
                return T.each(t, (function(e, n) {
                    var a = n[2]
                      , s = n[5];
                    o[n[1]] = a.add,
                    s && a.add((function() {
                        r = s
                    }
                    ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    a.add(n[3].fire),
                    i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments),
                        this
                    }
                    ,
                    i[n[0] + "With"] = a.fireWith
                }
                )),
                o.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , r = Array(n)
                  , o = u.call(arguments)
                  , i = T.Deferred()
                  , a = function(e) {
                    return function(n) {
                        r[e] = this,
                        o[e] = arguments.length > 1 ? u.call(arguments) : n,
                        --t || i.resolveWith(r, o)
                    }
                };
                if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t),
                "pending" === i.state() || m(o[n] && o[n].then)))
                    return i.then();
                for (; n--; )
                    F(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && $.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        T.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }
            ))
        }
        ;
        var W = T.Deferred();
        function z() {
            a.removeEventListener("DOMContentLoaded", z),
            n.removeEventListener("load", z),
            T.ready()
        }
        T.fn.ready = function(e) {
            return W.then(e).catch((function(e) {
                T.readyException(e)
            }
            )),
            this
        }
        ,
        T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0,
                !0 !== e && --T.readyWait > 0 || W.resolveWith(a, [T]))
            }
        }),
        T.ready.then = W.then,
        "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", z),
        n.addEventListener("load", z));
        var G = function(e, t, n, r, o, i, a) {
            var s = 0
              , u = e.length
              , c = null == n;
            if ("object" === k(n))
                for (s in o = !0,
                n)
                    G(e, t, s, n[s], !0, i, a);
            else if (void 0 !== r && (o = !0,
            m(r) || (a = !0),
            c && (a ? (t.call(e, r),
            t = null) : (c = t,
            t = function(e, t, n) {
                return c.call(T(e), n)
            }
            )),
            t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : u ? t(e[0], n) : i
        }
          , U = /^-ms-/
          , X = /-([a-z])/g;
        function V(e, t) {
            return t.toUpperCase()
        }
        function Y(e) {
            return e.replace(U, "ms-").replace(X, V)
        }
        var Q = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function J() {
            this.expando = T.expando + J.uid++
        }
        J.uid = 1,
        J.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t)
                    o[Y(t)] = n;
                else
                    for (r in t)
                        o[Y(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t))in r ? [t] : t.match(R) || []).length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t)
            }
        };
        var K = new J
          , Z = new J
          , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , te = /[A-Z]/g;
        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(te, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        T.extend({
            hasData: function(e) {
                return Z.hasData(e) || K.hasData(e)
            },
            data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function(e, t) {
                Z.remove(e, t)
            },
            _data: function(e, t, n) {
                return K.access(e, t, n)
            },
            _removeData: function(e, t) {
                K.remove(e, t)
            }
        }),
        T.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0], a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Z.get(i),
                    1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)),
                            ne(i, r, o[r]));
                        K.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() {
                    Z.set(this, e)
                }
                )) : G(this, (function(t) {
                    var n;
                    if (i && void 0 === t)
                        return void 0 !== (n = Z.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;
                    this.each((function() {
                        Z.set(this, e, t)
                    }
                    ))
                }
                ), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    Z.remove(this, e)
                }
                ))
            }
        }),
        T.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = K.get(e, t),
                    n && (!r || Array.isArray(n) ? r = K.access(e, t, T.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = T.queue(e, t)
                  , r = n.length
                  , o = n.shift()
                  , i = T._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(),
                r--),
                o && ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                o.call(e, (function() {
                    T.dequeue(e, t)
                }
                ), i)),
                !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: T.Callbacks("once memory").add((function() {
                        K.remove(e, [t + "queue", n])
                    }
                    ))
                })
            }
        }),
        T.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                }
                ))
            },
            dequeue: function(e) {
                return this.each((function() {
                    T.dequeue(this, e)
                }
                ))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, o = T.Deferred(), i = this, a = this.length, s = function() {
                    --r || o.resolveWith(i, [i])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; a--; )
                    (n = K.get(i[a], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(s));
                return s(),
                o.promise(t)
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
          , ie = ["Top", "Right", "Bottom", "Left"]
          , ae = a.documentElement
          , se = function(e) {
            return T.contains(e.ownerDocument, e)
        }
          , ue = {
            composed: !0
        };
        ae.getRootNode && (se = function(e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
        }
        );
        var ce = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === T.css(e, "display")
        }
          , le = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t)
                a[i] = e.style[i],
                e.style[i] = t[i];
            for (i in o = n.apply(e, r || []),
            t)
                e.style[i] = a[i];
            return o
        };
        function fe(e, t, n, r) {
            var o, i, a = 20, s = r ? function() {
                return r.cur()
            }
            : function() {
                return T.css(e, t, "")
            }
            , u = s(), c = n && n[3] || (T.cssNumber[t] ? "" : "px"), l = e.nodeType && (T.cssNumber[t] || "px" !== c && +u) && oe.exec(T.css(e, t));
            if (l && l[3] !== c) {
                for (u /= 2,
                c = c || l[3],
                l = +u || 1; a--; )
                    T.style(e, t, l + c),
                    (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0),
                    l /= i;
                l *= 2,
                T.style(e, t, l + c),
                n = n || []
            }
            return n && (l = +l || +u || 0,
            o = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = c,
            r.start = l,
            r.end = o)),
            o
        }
        var pe = {};
        function de(e) {
            var t, n = e.ownerDocument, r = e.nodeName, o = pe[r];
            return o || (t = n.body.appendChild(n.createElement(r)),
            o = T.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            pe[r] = o,
            o)
        }
        function he(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                (r = e[i]).style && (n = r.style.display,
                t ? ("none" === n && (o[i] = K.get(r, "display") || null,
                o[i] || (r.style.display = "")),
                "" === r.style.display && ce(r) && (o[i] = de(r))) : "none" !== n && (o[i] = "none",
                K.set(r, "display", n)));
            for (i = 0; i < a; i++)
                null != o[i] && (e[i].style.display = o[i]);
            return e
        }
        T.fn.extend({
            show: function() {
                return he(this, !0)
            },
            hide: function() {
                return he(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    ce(this) ? T(this).show() : T(this).hide()
                }
                ))
            }
        });
        var ge = /^(?:checkbox|radio)$/i
          , ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , ye = /^$|^module$|\/(?:java|ecma)script/i
          , me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && D(e, t) ? T.merge([e], n) : n
        }
        function xe(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
        }
        me.optgroup = me.option,
        me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
        me.th = me.td;
        var we, ke, Te = /<|&#?\w+;/;
        function Ce(e, t, n, r, o) {
            for (var i, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((i = e[d]) || 0 === i)
                    if ("object" === k(i))
                        T.merge(p, i.nodeType ? [i] : i);
                    else if (Te.test(i)) {
                        for (a = a || f.appendChild(t.createElement("div")),
                        s = (ve.exec(i) || ["", ""])[1].toLowerCase(),
                        u = me[s] || me._default,
                        a.innerHTML = u[1] + T.htmlPrefilter(i) + u[2],
                        l = u[0]; l--; )
                            a = a.lastChild;
                        T.merge(p, a.childNodes),
                        (a = f.firstChild).textContent = ""
                    } else
                        p.push(t.createTextNode(i));
            for (f.textContent = "",
            d = 0; i = p[d++]; )
                if (r && T.inArray(i, r) > -1)
                    o && o.push(i);
                else if (c = se(i),
                a = be(f.appendChild(i), "script"),
                c && xe(a),
                n)
                    for (l = 0; i = a[l++]; )
                        ye.test(i.type || "") && n.push(i);
            return f
        }
        we = a.createDocumentFragment().appendChild(a.createElement("div")),
        (ke = a.createElement("input")).setAttribute("type", "radio"),
        ke.setAttribute("checked", "checked"),
        ke.setAttribute("name", "t"),
        we.appendChild(ke),
        y.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked,
        we.innerHTML = "<textarea>x</textarea>",
        y.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
        var Ee = /^key/
          , Ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Se = /^([^.]*)(?:\.(.+)|)/;
        function Ae() {
            return !0
        }
        function je() {
            return !1
        }
        function De(e, t) {
            return e === function() {
                try {
                    return a.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }
        function Pe(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                    Pe(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n,
            r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
            r = void 0) : (o = r,
            r = n,
            n = void 0)),
            !1 === o)
                o = je;
            else if (!o)
                return e;
            return 1 === i && (a = o,
            (o = function(e) {
                return T().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = T.guid++)),
            e.each((function() {
                T.event.add(this, t, o, r, n)
            }
            ))
        }
        function Le(e, t, n) {
            n ? (K.set(e, t, !1),
            T.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, o, i = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)
                            (T.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = u.call(arguments),
                        K.set(this, t, i),
                        r = n(this, t),
                        this[t](),
                        i !== (o = K.get(this, t)) || r ? K.set(this, t, !1) : o = {},
                        i !== o)
                            return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            o.value
                    } else
                        i.length && (K.set(this, t, {
                            value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                        }),
                        e.stopImmediatePropagation())
                }
            })) : void 0 === K.get(e, t) && T.event.add(e, t, Ae)
        }
        T.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, u, c, l, f, p, d, h, g, v = K.get(e);
                if (v)
                    for (n.handler && (n = (i = n).handler,
                    o = i.selector),
                    o && T.find.matchesSelector(ae, o),
                    n.guid || (n.guid = T.guid++),
                    (u = v.events) || (u = v.events = {}),
                    (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    c = (t = (t || "").match(R) || [""]).length; c--; )
                        d = g = (s = Se.exec(t[c]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d && (f = T.event.special[d] || {},
                        d = (o ? f.delegateType : f.bindType) || d,
                        f = T.event.special[d] || {},
                        l = T.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && T.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i),
                        (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                        f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                        f.add && (f.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                        o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                        T.event.global[d] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, u, c, l, f, p, d, h, g, v = K.hasData(e) && K.get(e);
                if (v && (u = v.events)) {
                    for (c = (t = (t || "").match(R) || [""]).length; c--; )
                        if (d = g = (s = Se.exec(t[c]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                            for (f = T.event.special[d] || {},
                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = i = p.length; i--; )
                                l = p[i],
                                !o && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(i, 1),
                                l.selector && p.delegateCount--,
                                f.remove && f.remove.call(e, l));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || T.removeEvent(e, d, v.handle),
                            delete u[d])
                        } else
                            for (d in u)
                                T.event.remove(e, d + t[c], n, r, !0);
                    T.isEmptyObject(u) && K.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, a, s = T.event.fix(e), u = new Array(arguments.length), c = (K.get(this, "events") || {})[s.type] || [], l = T.event.special[s.type] || {};
                for (u[0] = s,
                t = 1; t < arguments.length; t++)
                    u[t] = arguments[t];
                if (s.delegateTarget = this,
                !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                    for (a = T.event.handlers.call(this, s, c),
                    t = 0; (o = a[t++]) && !s.isPropagationStopped(); )
                        for (s.currentTarget = o.elem,
                        n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                            s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                            s.data = i.data,
                            void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                            s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s),
                    s.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a, s = [], u = t.delegateCount, c = e.target;
                if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (i = [],
                            a = {},
                            n = 0; n < u; n++)
                                void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? T(o, this).index(c) > -1 : T.find(o, this, null, [c]).length),
                                a[o] && i.push(r);
                            i.length && s.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return c = this,
                u < t.length && s.push({
                    elem: c,
                    handlers: t.slice(u)
                }),
                s
            },
            addProp: function(e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[T.expando] ? e : new T.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click", Ae),
                        !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click"),
                        !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return ge.test(t.type) && t.click && D(t, "input") && K.get(t, "click") || D(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        T.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        T.Event = function(e, t) {
            if (!(this instanceof T.Event))
                return new T.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : je,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && T.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[T.expando] = !0
        }
        ,
        T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: je,
            isPropagationStopped: je,
            isImmediatePropagationStopped: je,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ae,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ae,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ae,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ne.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, T.event.addProp),
        T.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            T.event.special[e] = {
                setup: function() {
                    return Le(this, e, De),
                    !1
                },
                trigger: function() {
                    return Le(this, e),
                    !0
                },
                delegateType: t
            }
        }
        )),
        T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            T.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, o = e.relatedTarget, i = e.handleObj;
                    return o && (o === r || T.contains(r, o)) || (e.type = i.origType,
                    n = i.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }
        )),
        T.fn.extend({
            on: function(e, t, n, r) {
                return Pe(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Pe(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = je),
                this.each((function() {
                    T.event.remove(this, e, n, t)
                }
                ))
            }
        });
        var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , qe = /<script|<style|<link/i
          , Oe = /checked\s*(?:[^=]|=\s*.checked.)/i
          , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function _e(e, t) {
            return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
        }
        function Re(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function Ie(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Be(e, t) {
            var n, r, o, i, a, s, u, c;
            if (1 === t.nodeType) {
                if (K.hasData(e) && (i = K.access(e),
                a = K.set(t, i),
                c = i.events))
                    for (o in delete a.handle,
                    a.events = {},
                    c)
                        for (n = 0,
                        r = c[o].length; n < r; n++)
                            T.event.add(t, o, c[o][n]);
                Z.hasData(e) && (s = Z.access(e),
                u = T.extend({}, s),
                Z.set(t, u))
            }
        }
        function Fe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function $e(e, t, n, r) {
            t = c.apply([], t);
            var o, i, a, s, u, l, f = 0, p = e.length, d = p - 1, h = t[0], g = m(h);
            if (g || p > 1 && "string" == typeof h && !y.checkClone && Oe.test(h))
                return e.each((function(o) {
                    var i = e.eq(o);
                    g && (t[0] = h.call(this, o, i.html())),
                    $e(i, t, n, r)
                }
                ));
            if (p && (i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild,
            1 === o.childNodes.length && (o = i),
            i || r)) {
                for (s = (a = T.map(be(o, "script"), Re)).length; f < p; f++)
                    u = o,
                    f !== d && (u = T.clone(u, !0, !0),
                    s && T.merge(a, be(u, "script"))),
                    n.call(e[f], u, f);
                if (s)
                    for (l = a[a.length - 1].ownerDocument,
                    T.map(a, Ie),
                    f = 0; f < s; f++)
                        u = a[f],
                        ye.test(u.type || "") && !K.access(u, "globalEval") && T.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }) : w(u.textContent.replace(He, ""), u, l))
            }
            return e
        }
        function We(e, t, n) {
            for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
                n || 1 !== r.nodeType || T.cleanData(be(r)),
                r.parentNode && (n && se(r) && xe(be(r, "script")),
                r.parentNode.removeChild(r));
            return e
        }
        T.extend({
            htmlPrefilter: function(e) {
                return e.replace(Me, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0), u = se(e);
                if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                    for (a = be(s),
                    r = 0,
                    o = (i = be(e)).length; r < o; r++)
                        Fe(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || be(e),
                        a = a || be(s),
                        r = 0,
                        o = i.length; r < o; r++)
                            Be(i[r], a[r]);
                    else
                        Be(e, s);
                return (a = be(s, "script")).length > 0 && xe(a, !u && be(e, "script")),
                s
            },
            cleanData: function(e) {
                for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (Q(n)) {
                        if (t = n[K.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                            n[K.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }),
        T.fn.extend({
            detach: function(e) {
                return We(this, e, !0)
            },
            remove: function(e) {
                return We(this, e)
            },
            text: function(e) {
                return G(this, (function(e) {
                    return void 0 === e ? T.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }
                    ))
                }
                ), null, e, arguments.length)
            },
            append: function() {
                return $e(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
                }
                ))
            },
            prepend: function() {
                return $e(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _e(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }
                ))
            },
            before: function() {
                return $e(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }
                ))
            },
            after: function() {
                return $e(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }
                ))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (T.cleanData(be(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map((function() {
                    return T.clone(this, e, t)
                }
                ))
            },
            html: function(e) {
                return G(this, (function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !qe.test(e) && !me[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = T.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }
                ), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return $e(this, arguments, (function(t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 && (T.cleanData(be(this)),
                    n && n.replaceChild(t, this))
                }
                ), e)
            }
        }),
        T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            T.fn[e] = function(e) {
                for (var n, r = [], o = T(e), i = o.length - 1, a = 0; a <= i; a++)
                    n = a === i ? this : this.clone(!0),
                    T(o[a])[t](n),
                    l.apply(r, n.get());
                return this.pushStack(r)
            }
        }
        ));
        var ze = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
          , Ge = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , Ue = new RegExp(ie.join("|"),"i");
        function Xe(e, t, n) {
            var r, o, i, a, s = e.style;
            return (n = n || Ge(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = T.style(e, t)),
            !y.pixelBoxStyles() && ze.test(a) && Ue.test(t) && (r = s.width,
            o = s.minWidth,
            i = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = o,
            s.maxWidth = i)),
            void 0 !== a ? a + "" : a
        }
        function Ve(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (l) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ae.appendChild(c).appendChild(l);
                    var e = n.getComputedStyle(l);
                    r = "1%" !== e.top,
                    u = 12 === t(e.marginLeft),
                    l.style.right = "60%",
                    s = 36 === t(e.right),
                    o = 36 === t(e.width),
                    l.style.position = "absolute",
                    i = 12 === t(l.offsetWidth / 3),
                    ae.removeChild(c),
                    l = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, s, u, c = a.createElement("div"), l = a.createElement("div");
            l.style && (l.style.backgroundClip = "content-box",
            l.cloneNode(!0).style.backgroundClip = "",
            y.clearCloneStyle = "content-box" === l.style.backgroundClip,
            T.extend(y, {
                boxSizingReliable: function() {
                    return e(),
                    o
                },
                pixelBoxStyles: function() {
                    return e(),
                    s
                },
                pixelPosition: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    u
                },
                scrollboxSize: function() {
                    return e(),
                    i
                }
            }))
        }();
        var Ye = ["Webkit", "Moz", "ms"]
          , Qe = a.createElement("div").style
          , Je = {};
        function Ke(e) {
            var t = T.cssProps[e] || Je[e];
            return t || (e in Qe ? e : Je[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                    if ((e = Ye[n] + t)in Qe)
                        return e
            }(e) || e)
        }
        var Ze = /^(none|table(?!-c[ea]).+)/
          , et = /^--/
          , tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function rt(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function ot(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0
              , s = 0
              , u = 0;
            if (n === (r ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === n && (u += T.css(e, n + ie[a], !0, o)),
                r ? ("content" === n && (u -= T.css(e, "padding" + ie[a], !0, o)),
                "margin" !== n && (u -= T.css(e, "border" + ie[a] + "Width", !0, o))) : (u += T.css(e, "padding" + ie[a], !0, o),
                "padding" !== n ? u += T.css(e, "border" + ie[a] + "Width", !0, o) : s += T.css(e, "border" + ie[a] + "Width", !0, o));
            return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0),
            u
        }
        function it(e, t, n) {
            var r = Ge(e)
              , o = (!y.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r)
              , i = o
              , a = Xe(e, t, r)
              , s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (ze.test(a)) {
                if (!n)
                    return a;
                a = "auto"
            }
            return (!y.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, r),
            (i = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + ot(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
        }
        function at(e, t, n, r, o) {
            return new at.prototype.init(e,t,n,r,o)
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Xe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = Y(t), u = et.test(t), c = e.style;
                    if (u || (t = Ke(s)),
                    a = T.cssHooks[t] || T.cssHooks[s],
                    void 0 === n)
                        return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                    "string" === (i = typeof n) && (o = oe.exec(n)) && o[1] && (n = fe(e, t, o),
                    i = "number"),
                    null != n && n == n && ("number" !== i || u || (n += o && o[3] || (T.cssNumber[s] ? "" : "px")),
                    y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = Y(t);
                return et.test(t) || (t = Ke(s)),
                (a = T.cssHooks[t] || T.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = Xe(e, t, r)),
                "normal" === o && t in nt && (o = nt[t]),
                "" === n || n ? (i = parseFloat(o),
                !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }),
        T.each(["height", "width"], (function(e, t) {
            T.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return !Ze.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : le(e, tt, (function() {
                            return it(e, t, r)
                        }
                        ))
                },
                set: function(e, n, r) {
                    var o, i = Ge(e), a = !y.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, i), u = r ? ot(e, t, r, s, i) : 0;
                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ot(e, t, "border", !1, i) - .5)),
                    u && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                    n = T.css(e, t)),
                    rt(0, n, u)
                }
            }
        }
        )),
        T.cssHooks.marginLeft = Ve(y.reliableMarginLeft, (function(e, t) {
            if (t)
                return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }
                ))) + "px"
        }
        )),
        T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            T.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            },
            "margin" !== e && (T.cssHooks[e + t].set = rt)
        }
        )),
        T.fn.extend({
            css: function(e, t) {
                return G(this, (function(e, t, n) {
                    var r, o, i = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Ge(e),
                        o = t.length; a < o; a++)
                            i[t[a]] = T.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                }
                ), e, t, arguments.length > 1)
            }
        }),
        T.Tween = at,
        at.prototype = {
            constructor: at,
            init: function(e, t, n, r, o, i) {
                this.elem = e,
                this.prop = n,
                this.easing = o || T.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = i || (T.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = at.propHooks[this.prop];
                return e && e.get ? e.get(this) : at.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = at.propHooks[this.prop];
                return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : at.propHooks._default.set(this),
                this
            }
        },
        at.prototype.init.prototype = at.prototype,
        at.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        at.propHooks.scrollTop = at.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        T.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        T.fx = at.prototype.init,
        T.fx.step = {};
        var st, ut, ct = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
        function ft() {
            ut && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ft) : n.setTimeout(ft, T.fx.interval),
            T.fx.tick())
        }
        function pt() {
            return n.setTimeout((function() {
                st = void 0
            }
            )),
            st = Date.now()
        }
        function dt(e, t) {
            var n, r = 0, o = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e),
            o
        }
        function ht(e, t, n) {
            for (var r, o = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e))
                    return r
        }
        function gt(e, t, n) {
            var r, o, i = 0, a = gt.prefilters.length, s = T.Deferred().always((function() {
                delete u.elem
            }
            )), u = function() {
                if (o)
                    return !1;
                for (var t = st || pt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++)
                    c.tweens[i].run(r);
                return s.notifyWith(e, [c, r, n]),
                r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]),
                s.resolveWith(e, [c]),
                !1)
            }, c = s.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: st || pt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? c.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < r; n++)
                        c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]),
                    s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                    this
                }
            }), l = c.props;
            for (!function(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (o = t[r = Y(n)],
                    i = e[n],
                    Array.isArray(i) && (o = i[1],
                    i = e[n] = i[0]),
                    n !== r && (e[r] = i,
                    delete e[n]),
                    (a = T.cssHooks[r]) && "expand"in a)
                        for (n in i = a.expand(i),
                        delete e[r],
                        i)
                            n in e || (e[n] = i[n],
                            t[n] = o);
                    else
                        t[r] = o
            }(l, c.opts.specialEasing); i < a; i++)
                if (r = gt.prefilters[i].call(c, e, l, c.opts))
                    return m(r.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                    r;
            return T.map(l, ht, c),
            m(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            T.fx.timer(T.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        T.Animation = T.extend(gt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return fe(n.elem, e, oe.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                m(e) ? (t = e,
                e = ["*"]) : e = e.match(R);
                for (var n, r = 0, o = e.length; r < o; r++)
                    n = e[r],
                    gt.tweeners[n] = gt.tweeners[n] || [],
                    gt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, o, i, a, s, u, c, l, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ce(e), v = K.get(e, "fxshow");
                for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
                ),
                a.unqueued++,
                p.always((function() {
                    p.always((function() {
                        a.unqueued--,
                        T.queue(e, "fx").length || a.empty.fire()
                    }
                    ))
                }
                ))),
                t)
                    if (o = t[r],
                    ct.test(o)) {
                        if (delete t[r],
                        i = i || "toggle" === o,
                        o === (g ? "hide" : "show")) {
                            if ("show" !== o || !v || void 0 === v[r])
                                continue;
                            g = !0
                        }
                        d[r] = v && v[r] || T.style(e, r)
                    }
                if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (c = v && v.display) && (c = K.get(e, "display")),
                    "none" === (l = T.css(e, "display")) && (c ? l = c : (he([e], !0),
                    c = e.style.display || c,
                    l = T.css(e, "display"),
                    he([e]))),
                    ("inline" === l || "inline-block" === l && null != c) && "none" === T.css(e, "float") && (u || (p.done((function() {
                        h.display = c
                    }
                    )),
                    null == c && (l = h.display,
                    c = "none" === l ? "" : l)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    p.always((function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    }
                    ))),
                    u = !1,
                    d)
                        u || (v ? "hidden"in v && (g = v.hidden) : v = K.access(e, "fxshow", {
                            display: c
                        }),
                        i && (v.hidden = !g),
                        g && he([e], !0),
                        p.done((function() {
                            for (r in g || he([e]),
                            K.remove(e, "fxshow"),
                            d)
                                T.style(e, r, d[r])
                        }
                        ))),
                        u = ht(g ? v[r] : 0, r, p),
                        r in v || (v[r] = u.start,
                        g && (u.end = u.start,
                        u.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
            }
        }),
        T.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? T.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                m(r.old) && r.old.call(this),
                r.queue && T.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        T.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = T.isEmptyObject(e)
                  , i = T.speed(t, n, r)
                  , a = function() {
                    var t = gt(this, T.extend({}, e), i);
                    (o || K.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each((function() {
                    var t = !0
                      , o = null != e && e + "queueHooks"
                      , i = T.timers
                      , a = K.get(this);
                    if (o)
                        a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a)
                            a[o] && a[o].stop && lt.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                        i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                        t = !1,
                        i.splice(o, 1));
                    !t && n || T.dequeue(this, e)
                }
                ))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each((function() {
                    var t, n = K.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = T.timers, a = r ? r.length : 0;
                    for (n.finish = !0,
                    T.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = i.length; t--; )
                        i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                        i.splice(t, 1));
                    for (t = 0; t < a; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }
                ))
            }
        }),
        T.each(["toggle", "show", "hide"], (function(e, t) {
            var n = T.fn[t];
            T.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, o)
            }
        }
        )),
        T.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            T.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }
        )),
        T.timers = [],
        T.fx.tick = function() {
            var e, t = 0, n = T.timers;
            for (st = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(),
            st = void 0
        }
        ,
        T.fx.timer = function(e) {
            T.timers.push(e),
            T.fx.start()
        }
        ,
        T.fx.interval = 13,
        T.fx.start = function() {
            ut || (ut = !0,
            ft())
        }
        ,
        T.fx.stop = function() {
            ut = null
        }
        ,
        T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        T.fn.delay = function(e, t) {
            return e = T.fx && T.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, (function(t, r) {
                var o = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(o)
                }
            }
            ))
        }
        ,
        function() {
            var e = a.createElement("input")
              , t = a.createElement("select").appendChild(a.createElement("option"));
            e.type = "checkbox",
            y.checkOn = "" !== e.value,
            y.optSelected = t.selected,
            (e = a.createElement("input")).value = "t",
            e.type = "radio",
            y.radioValue = "t" === e.value
        }();
        var vt, yt = T.expr.attrHandle;
        T.fn.extend({
            attr: function(e, t) {
                return G(this, T.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    T.removeAttr(this, e)
                }
                ))
            }
        }),
        T.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? vt : void 0)),
                    void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && D(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, o = t && t.match(R);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++]; )
                        e.removeAttribute(n)
            }
        }),
        vt = {
            set: function(e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        T.each(T.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = yt[t] || T.find.attr;
            yt[t] = function(e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = yt[a],
                yt[a] = o,
                o = null != n(e, t, r) ? a : null,
                yt[a] = i),
                o
            }
        }
        ));
        var mt = /^(?:input|select|textarea|button)$/i
          , bt = /^(?:a|area)$/i;
        function xt(e) {
            return (e.match(R) || []).join(" ")
        }
        function wt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function kt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
        }
        T.fn.extend({
            prop: function(e, t) {
                return G(this, T.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[T.propFix[e] || e]
                }
                ))
            }
        }),
        T.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t,
                    o = T.propHooks[t]),
                    void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = T.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : mt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        y.optSelected || (T.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            T.propFix[this.toLowerCase()] = this
        }
        )),
        T.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (m(e))
                    return this.each((function(t) {
                        T(this).addClass(e.call(this, t, wt(this)))
                    }
                    ));
                if ((t = kt(e)).length)
                    for (; n = this[u++]; )
                        if (o = wt(n),
                        r = 1 === n.nodeType && " " + xt(o) + " ") {
                            for (a = 0; i = t[a++]; )
                                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = xt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (m(e))
                    return this.each((function(t) {
                        T(this).removeClass(e.call(this, t, wt(this)))
                    }
                    ));
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = kt(e)).length)
                    for (; n = this[u++]; )
                        if (o = wt(n),
                        r = 1 === n.nodeType && " " + xt(o) + " ") {
                            for (a = 0; i = t[a++]; )
                                for (; r.indexOf(" " + i + " ") > -1; )
                                    r = r.replace(" " + i + " ", " ");
                            o !== (s = xt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
                    T(this).toggleClass(e.call(this, n, wt(this), t), t)
                }
                )) : this.each((function() {
                    var t, o, i, a;
                    if (r)
                        for (o = 0,
                        i = T(this),
                        a = kt(e); t = a[o++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || ((t = wt(this)) && K.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                }
                ))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + xt(wt(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var Tt = /\r/g;
        T.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = m(e),
                this.each((function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, (function(e) {
                        return null == e ? "" : e + ""
                    }
                    ))),
                    (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }
                ))) : o ? (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0
            }
        }),
        T.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : xt(T.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                        for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                if (t = T(n).val(),
                                a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = T.makeArray(t), a = o.length; a--; )
                            ((r = o[a]).selected = T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        i
                    }
                }
            }
        }),
        T.each(["radio", "checkbox"], (function() {
            T.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = T.inArray(T(e).val(), t) > -1
                }
            },
            y.checkOn || (T.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }
        )),
        y.focusin = "onfocusin"in n;
        var Ct = /^(?:focusinfocus|focusoutblur)$/
          , Et = function(e) {
            e.stopPropagation()
        };
        T.extend(T.event, {
            trigger: function(e, t, r, o) {
                var i, s, u, c, l, f, p, d, g = [r || a], v = h.call(e, "type") ? e.type : e, y = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = d = u = r = r || a,
                3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(v + T.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."),
                v = y.shift(),
                y.sort()),
                l = v.indexOf(":") < 0 && "on" + v,
                (e = e[T.expando] ? e : new T.Event(v,"object" == typeof e && e)).isTrigger = o ? 2 : 3,
                e.namespace = y.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = r),
                t = null == t ? [e] : T.makeArray(t, [e]),
                p = T.event.special[v] || {},
                o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                    if (!o && !p.noBubble && !b(r)) {
                        for (c = p.delegateType || v,
                        Ct.test(c + v) || (s = s.parentNode); s; s = s.parentNode)
                            g.push(s),
                            u = s;
                        u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n)
                    }
                    for (i = 0; (s = g[i++]) && !e.isPropagationStopped(); )
                        d = s,
                        e.type = i > 1 ? c : p.bindType || v,
                        (f = (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) && f.apply(s, t),
                        (f = l && s[l]) && f.apply && Q(s) && (e.result = f.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = v,
                    o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Q(r) || l && m(r[v]) && !b(r) && ((u = r[l]) && (r[l] = null),
                    T.event.triggered = v,
                    e.isPropagationStopped() && d.addEventListener(v, Et),
                    r[v](),
                    e.isPropagationStopped() && d.removeEventListener(v, Et),
                    T.event.triggered = void 0,
                    u && (r[l] = u)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = T.extend(new T.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                T.event.trigger(r, null, t)
            }
        }),
        T.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    T.event.trigger(e, t, this)
                }
                ))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return T.event.trigger(e, t, n, !0)
            }
        }),
        y.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                T.event.simulate(t, e.target, T.event.fix(e))
            };
            T.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this
                      , o = K.access(r, t);
                    o || r.addEventListener(e, n, !0),
                    K.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this
                      , o = K.access(r, t) - 1;
                    o ? K.access(r, t, o) : (r.removeEventListener(e, n, !0),
                    K.remove(r, t))
                }
            }
        }
        ));
        var Nt = n.location
          , St = Date.now()
          , At = /\?/;
        T.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e),
            t
        }
        ;
        var jt = /\[\]$/
          , Dt = /\r?\n/g
          , Pt = /^(?:submit|button|image|reset|file)$/i
          , Lt = /^(?:input|select|textarea|keygen)/i;
        function Mt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
                T.each(t, (function(t, o) {
                    n || jt.test(e) ? r(e, o) : Mt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                }
                ));
            else if (n || "object" !== k(t))
                r(e, t);
            else
                for (o in t)
                    Mt(e + "[" + o + "]", t[o], n, r)
        }
        T.param = function(e, t) {
            var n, r = [], o = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
                T.each(e, (function() {
                    o(this.name, this.value)
                }
                ));
            else
                for (n in e)
                    Mt(n, e[n], t, o);
            return r.join("&")
        }
        ,
        T.fn.extend({
            serialize: function() {
                return T.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this
                }
                )).filter((function() {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && Lt.test(this.nodeName) && !Pt.test(e) && (this.checked || !ge.test(e))
                }
                )).map((function(e, t) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Dt, "\r\n")
                        }
                    }
                    )) : {
                        name: t.name,
                        value: n.replace(Dt, "\r\n")
                    }
                }
                )).get()
            }
        });
        var qt = /%20/g
          , Ot = /#.*$/
          , Ht = /([?&])_=[^&]*/
          , _t = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Rt = /^(?:GET|HEAD)$/
          , It = /^\/\//
          , Bt = {}
          , Ft = {}
          , $t = "*/".concat("*")
          , Wt = a.createElement("a");
        function zt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, o = 0, i = t.toLowerCase().match(R) || [];
                if (m(n))
                    for (; r = i[o++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function Gt(e, t, n, r) {
            var o = {}
              , i = e === Ft;
            function a(s) {
                var u;
                return o[s] = !0,
                T.each(e[s] || [], (function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                    a(c),
                    !1)
                }
                )),
                u
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }
        function Ut(e, t) {
            var n, r, o = T.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r),
            e
        }
        Wt.href = Nt.href,
        T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Nt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e)
            },
            ajaxPrefilter: zt(Bt),
            ajaxTransport: zt(Ft),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var r, o, i, s, u, c, l, f, p, d, h = T.ajaxSetup({}, t), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? T(g) : T.event, y = T.Deferred(), m = T.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, k = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!s)
                                for (s = {}; t = _t.exec(i); )
                                    s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                        x[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (h.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l)
                                C.always(e[C.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || k;
                        return r && r.abort(t),
                        E(0, t),
                        this
                    }
                };
                if (y.promise(C),
                h.url = ((e || h.url || Nt.href) + "").replace(It, Nt.protocol + "//"),
                h.type = t.method || t.type || h.method || h.type,
                h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""],
                null == h.crossDomain) {
                    c = a.createElement("a");
                    try {
                        c.href = h.url,
                        c.href = c.href,
                        h.crossDomain = Wt.protocol + "//" + Wt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)),
                Gt(Bt, h, t, C),
                l)
                    return C;
                for (p in (f = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !Rt.test(h.type),
                o = h.url.replace(Ot, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length),
                h.data && (h.processData || "string" == typeof h.data) && (o += (At.test(o) ? "&" : "?") + h.data,
                delete h.data),
                !1 === h.cache && (o = o.replace(Ht, "$1"),
                d = (At.test(o) ? "&" : "?") + "_=" + St++ + d),
                h.url = o + d),
                h.ifModified && (T.lastModified[o] && C.setRequestHeader("If-Modified-Since", T.lastModified[o]),
                T.etag[o] && C.setRequestHeader("If-None-Match", T.etag[o])),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && C.setRequestHeader("Content-Type", h.contentType),
                C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]),
                h.headers)
                    C.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || l))
                    return C.abort();
                if (k = "abort",
                m.add(h.complete),
                C.done(h.success),
                C.fail(h.error),
                r = Gt(Ft, h, t, C)) {
                    if (C.readyState = 1,
                    f && v.trigger("ajaxSend", [C, h]),
                    l)
                        return C;
                    h.async && h.timeout > 0 && (u = n.setTimeout((function() {
                        C.abort("timeout")
                    }
                    ), h.timeout));
                    try {
                        l = !1,
                        r.send(x, E)
                    } catch (e) {
                        if (l)
                            throw e;
                        E(-1, e)
                    }
                } else
                    E(-1, "No Transport");
                function E(e, t, a, s) {
                    var c, p, d, x, w, k = t;
                    l || (l = !0,
                    u && n.clearTimeout(u),
                    r = void 0,
                    i = s || "",
                    C.readyState = e > 0 ? 4 : 0,
                    c = e >= 200 && e < 300 || 304 === e,
                    a && (x = function(e, t, n) {
                        for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                            u.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in s)
                                if (s[o] && s[o].test(r)) {
                                    u.unshift(o);
                                    break
                                }
                        if (u[0]in n)
                            i = u[0];
                        else {
                            for (o in n) {
                                if (!u[0] || e.converters[o + " " + u[0]]) {
                                    i = o;
                                    break
                                }
                                a || (a = o)
                            }
                            i = i || a
                        }
                        if (i)
                            return i !== u[0] && u.unshift(i),
                            n[i]
                    }(h, C, a)),
                    x = function(e, t, n, r) {
                        var o, i, a, s, u, c = {}, l = e.dataTypes.slice();
                        if (l[1])
                            for (a in e.converters)
                                c[a.toLowerCase()] = e.converters[a];
                        for (i = l.shift(); i; )
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            u = i,
                            i = l.shift())
                                if ("*" === i)
                                    i = u;
                                else if ("*" !== u && u !== i) {
                                    if (!(a = c[u + " " + i] || c["* " + i]))
                                        for (o in c)
                                            if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                                !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0],
                                                l.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws)
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + i
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, x, C, c),
                    c ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[o] = w),
                    (w = C.getResponseHeader("etag")) && (T.etag[o] = w)),
                    204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state,
                    p = x.data,
                    c = !(d = x.error))) : (d = k,
                    !e && k || (k = "error",
                    e < 0 && (e = 0))),
                    C.status = e,
                    C.statusText = (t || k) + "",
                    c ? y.resolveWith(g, [p, k, C]) : y.rejectWith(g, [C, k, d]),
                    C.statusCode(b),
                    b = void 0,
                    f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : d]),
                    m.fireWith(g, [C, k]),
                    f && (v.trigger("ajaxComplete", [C, h]),
                    --T.active || T.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function(e, t, n) {
                return T.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return T.get(e, void 0, t, "script")
            }
        }),
        T.each(["get", "post"], (function(e, t) {
            T[t] = function(e, n, r, o) {
                return m(n) && (o = o || r,
                r = n,
                n = void 0),
                T.ajax(T.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, T.isPlainObject(e) && e))
            }
        }
        )),
        T._evalUrl = function(e, t) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    T.globalEval(e, t)
                }
            })
        }
        ,
        T.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])),
                t = T(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map((function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }
                )).append(this)),
                this
            },
            wrapInner: function(e) {
                return m(e) ? this.each((function(t) {
                    T(this).wrapInner(e.call(this, t))
                }
                )) : this.each((function() {
                    var t = T(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }
                ))
            },
            wrap: function(e) {
                var t = m(e);
                return this.each((function(n) {
                    T(this).wrapAll(t ? e.call(this, n) : e)
                }
                ))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    T(this).replaceWith(this.childNodes)
                }
                )),
                this
            }
        }),
        T.expr.pseudos.hidden = function(e) {
            return !T.expr.pseudos.visible(e)
        }
        ,
        T.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        T.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Xt = {
            0: 200,
            1223: 204
        }
          , Vt = T.ajaxSettings.xhr();
        y.cors = !!Vt && "withCredentials"in Vt,
        y.ajax = Vt = !!Vt,
        T.ajaxTransport((function(e) {
            var t, r;
            if (y.cors || Vt && !e.crossDomain)
                return {
                    send: function(o, i) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (a in e.xhrFields)
                                s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                        e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                        o)
                            s.setRequestHeader(a, o[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Xt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }
                        ,
                        s.onload = t(),
                        r = s.onerror = s.ontimeout = t("error"),
                        void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout((function() {
                                t && r()
                            }
                            ))
                        }
                        ,
                        t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }
        )),
        T.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        }
        )),
        T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return T.globalEval(e),
                    e
                }
            }
        }),
        T.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }
        )),
        T.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function(r, o) {
                        t = T("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        a.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        }
        ));
        var Yt, Qt = [], Jt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Qt.pop() || T.expando + "_" + St++;
                return this[e] = !0,
                e
            }
        }),
        T.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(Jt, "$1" + o) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                e.converters["script json"] = function() {
                    return a || T.error(o + " was not called"),
                    a[0]
                }
                ,
                e.dataTypes[0] = "json",
                i = n[o],
                n[o] = function() {
                    a = arguments
                }
                ,
                r.always((function() {
                    void 0 === i ? T(n).removeProp(o) : n[o] = i,
                    e[o] && (e.jsonpCallback = t.jsonpCallback,
                    Qt.push(o)),
                    a && m(i) && i(a[0]),
                    a = i = void 0
                }
                )),
                "script"
        }
        )),
        y.createHTMLDocument = ((Yt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Yt.childNodes.length),
        T.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (y.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href,
            t.head.appendChild(r)) : t = a),
            i = !n && [],
            (o = P.exec(e)) ? [t.createElement(o[1])] : (o = Ce([e], t, i),
            i && i.length && T(i).remove(),
            T.merge([], o.childNodes)));
            var r, o, i
        }
        ,
        T.fn.load = function(e, t, n) {
            var r, o, i, a = this, s = e.indexOf(" ");
            return s > -1 && (r = xt(e.slice(s)),
            e = e.slice(0, s)),
            m(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (o = "POST"),
            a.length > 0 && T.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                i = arguments,
                a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
            }
            )).always(n && function(e, t) {
                a.each((function() {
                    n.apply(this, i || [e.responseText, t, e])
                }
                ))
            }
            ),
            this
        }
        ,
        T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            T.fn[t] = function(e) {
                return this.on(t, e)
            }
        }
        )),
        T.expr.pseudos.animated = function(e) {
            return T.grep(T.timers, (function(t) {
                return e === t.elem
            }
            )).length
        }
        ,
        T.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, u, c = T.css(e, "position"), l = T(e), f = {};
                "static" === c && (e.style.position = "relative"),
                s = l.offset(),
                i = T.css(e, "top"),
                u = T.css(e, "left"),
                ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1 ? (a = (r = l.position()).top,
                o = r.left) : (a = parseFloat(i) || 0,
                o = parseFloat(u) || 0),
                m(t) && (t = t.call(e, n, T.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + o),
                "using"in t ? t.using.call(e, f) : l.css(f)
            }
        },
        T.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each((function(t) {
                        T.offset.setOffset(this, e, t)
                    }
                    ));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === T.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0),
                        o.left += T.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - T.css(r, "marginTop", !0),
                        left: t.left - o.left - T.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === T.css(e, "position"); )
                        e = e.offsetParent;
                    return e || ae
                }
                ))
            }
        }),
        T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function(r) {
                return G(this, (function(e, r, o) {
                    var i;
                    if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === o)
                        return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }
                ), e, r, arguments.length)
            }
        }
        )),
        T.each(["top", "left"], (function(e, t) {
            T.cssHooks[t] = Ve(y.pixelPosition, (function(e, n) {
                if (n)
                    return n = Xe(e, t),
                    ze.test(n) ? T(e).position()[t] + "px" : n
            }
            ))
        }
        )),
        T.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            T.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                T.fn[r] = function(o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o)
                      , s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return G(this, (function(t, n, o) {
                        var i;
                        return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                        Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? T.css(t, n, s) : T.style(t, n, o, s)
                    }
                    ), t, a ? o : void 0, a)
                }
            }
            ))
        }
        )),
        T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            T.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }
        )),
        T.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        T.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        T.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            m(e))
                return r = u.call(arguments, 2),
                (o = function() {
                    return e.apply(t || this, r.concat(u.call(arguments)))
                }
                ).guid = e.guid = e.guid || T.guid++,
                o
        }
        ,
        T.holdReady = function(e) {
            e ? T.readyWait++ : T.ready(!0)
        }
        ,
        T.isArray = Array.isArray,
        T.parseJSON = JSON.parse,
        T.nodeName = D,
        T.isFunction = m,
        T.isWindow = b,
        T.camelCase = Y,
        T.type = k,
        T.now = Date.now,
        T.isNumeric = function(e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        void 0 === (r = function() {
            return T
        }
        .apply(t, [])) || (e.exports = r);
        var Kt = n.jQuery
          , Zt = n.$;
        return T.noConflict = function(e) {
            return n.$ === T && (n.$ = Zt),
            e && n.jQuery === T && (n.jQuery = Kt),
            T
        }
        ,
        o || (n.jQuery = n.$ = T),
        T
    }
    ))
}
, function(e, t, n) {
    /*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
    var r;
    r = function() {
        return function(e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var o = t[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(o.exports, o, o.exports, n),
                o.loaded = !0,
                o.exports
            }
            return n.m = e,
            n.c = t,
            n.p = "",
            n(0)
        }([function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , o = n(1)
              , i = n(3)
              , a = function() {
                function e(t, n) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    o.initializer.load(this, n, t),
                    this.begin()
                }
                return r(e, [{
                    key: "toggle",
                    value: function() {
                        this.pause.status ? this.start() : this.stop()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                        this.pause.status = !0,
                        this.options.onStop(this.arrayPos, this))
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.typingComplete || this.pause.status && (this.pause.status = !1,
                        this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                        this.options.onStart(this.arrayPos, this))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.reset(!1),
                        this.options.onDestroy(this)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        clearInterval(this.timeout),
                        this.replaceText(""),
                        this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
                        this.cursor = null),
                        this.strPos = 0,
                        this.arrayPos = 0,
                        this.curLoop = 0,
                        e && (this.insertCursor(),
                        this.options.onReset(this),
                        this.begin())
                    }
                }, {
                    key: "begin",
                    value: function() {
                        var e = this;
                        this.options.onBegin(this),
                        this.typingComplete = !1,
                        this.shuffleStringsIfNeeded(this),
                        this.insertCursor(),
                        this.bindInputFocusEvents && this.bindFocusEvents(),
                        this.timeout = setTimeout((function() {
                            e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                        }
                        ), this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function(e, t) {
                        var n = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                        this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var r = this.humanizer(this.typeSpeed)
                          , o = 1;
                        !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                            t = i.htmlParser.typeHtmlChars(e, t, n);
                            var r = 0
                              , a = e.substr(t);
                            if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                                var s = 1;
                                s += (a = /\d+/.exec(a)[0]).length,
                                r = parseInt(a),
                                n.temporaryPause = !0,
                                n.options.onTypingPaused(n.arrayPos, n),
                                e = e.substring(0, t) + e.substring(t + s),
                                n.toggleBlinking(!0)
                            }
                            if ("`" === a.charAt(0)) {
                                for (; "`" !== e.substr(t + o).charAt(0) && !(t + ++o > e.length); )
                                    ;
                                var u = e.substring(0, t)
                                  , c = e.substring(u.length + 1, t + o)
                                  , l = e.substring(t + o + 1);
                                e = u + c + l,
                                o--
                            }
                            n.timeout = setTimeout((function() {
                                n.toggleBlinking(!1),
                                t >= e.length ? n.doneTyping(e, t) : n.keepTyping(e, t, o),
                                n.temporaryPause && (n.temporaryPause = !1,
                                n.options.onTypingResumed(n.arrayPos, n))
                            }
                            ), r)
                        }
                        ), r) : this.setPauseStatus(e, t, !0)
                    }
                }, {
                    key: "keepTyping",
                    value: function(e, t, n) {
                        0 === t && (this.toggleBlinking(!1),
                        this.options.preStringTyped(this.arrayPos, this)),
                        t += n;
                        var r = e.substr(0, t);
                        this.replaceText(r),
                        this.typewrite(e, t)
                    }
                }, {
                    key: "doneTyping",
                    value: function(e, t) {
                        var n = this;
                        this.options.onStringTyped(this.arrayPos, this),
                        this.toggleBlinking(!0),
                        this.arrayPos === this.strings.length - 1 && (this.complete(),
                        !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                            n.backspace(e, t)
                        }
                        ), this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function(e, t) {
                        var n = this;
                        if (!0 !== this.pause.status) {
                            if (this.fadeOut)
                                return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var r = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout((function() {
                                t = i.htmlParser.backSpaceHtmlChars(e, t, n);
                                var r = e.substr(0, t);
                                if (n.replaceText(r),
                                n.smartBackspace) {
                                    var o = n.strings[n.arrayPos + 1];
                                    o && r === o.substr(0, t) ? n.stopNum = t : n.stopNum = 0
                                }
                                t > n.stopNum ? (t--,
                                n.backspace(e, t)) : t <= n.stopNum && (n.arrayPos++,
                                n.arrayPos === n.strings.length ? (n.arrayPos = 0,
                                n.options.onLastStringBackspaced(),
                                n.shuffleStringsIfNeeded(),
                                n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], t))
                            }
                            ), r)
                        } else
                            this.setPauseStatus(e, t, !0)
                    }
                }, {
                    key: "complete",
                    value: function() {
                        this.options.onComplete(this),
                        this.loop ? this.curLoop++ : this.typingComplete = !0
                    }
                }, {
                    key: "setPauseStatus",
                    value: function(e, t, n) {
                        this.pause.typewrite = n,
                        this.pause.curString = e,
                        this.pause.curStrPos = t
                    }
                }, {
                    key: "toggleBlinking",
                    value: function(e) {
                        this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e,
                        e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                    }
                }, {
                    key: "humanizer",
                    value: function(e) {
                        return Math.round(Math.random() * e / 2) + e
                    }
                }, {
                    key: "shuffleStringsIfNeeded",
                    value: function() {
                        this.shuffle && (this.sequence = this.sequence.sort((function() {
                            return Math.random() - .5
                        }
                        )))
                    }
                }, {
                    key: "initFadeOut",
                    value: function() {
                        var e = this;
                        return this.el.className += " " + this.fadeOutClass,
                        this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                        setTimeout((function() {
                            e.arrayPos++,
                            e.replaceText(""),
                            e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0),
                            e.arrayPos = 0)
                        }
                        ), this.fadeOutDelay)
                    }
                }, {
                    key: "replaceText",
                    value: function(e) {
                        this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                    }
                }, {
                    key: "bindFocusEvents",
                    value: function() {
                        var e = this;
                        this.isInput && (this.el.addEventListener("focus", (function(t) {
                            e.stop()
                        }
                        )),
                        this.el.addEventListener("blur", (function(t) {
                            e.el.value && 0 !== e.el.value.length || e.start()
                        }
                        )))
                    }
                }, {
                    key: "insertCursor",
                    value: function() {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                        this.cursor.className = "typed-cursor",
                        this.cursor.innerHTML = this.cursorChar,
                        this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }
                }]),
                e
            }();
            t.default = a,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            , i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }(), a = n(2), s = (r = a) && r.__esModule ? r : {
                default: r
            }, u = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, [{
                    key: "load",
                    value: function(e, t, n) {
                        if (e.el = "string" == typeof n ? document.querySelector(n) : n,
                        e.options = o({}, s.default, t),
                        e.isInput = "input" === e.el.tagName.toLowerCase(),
                        e.attr = e.options.attr,
                        e.bindInputFocusEvents = e.options.bindInputFocusEvents,
                        e.showCursor = !e.isInput && e.options.showCursor,
                        e.cursorChar = e.options.cursorChar,
                        e.cursorBlinking = !0,
                        e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent,
                        e.contentType = e.options.contentType,
                        e.typeSpeed = e.options.typeSpeed,
                        e.startDelay = e.options.startDelay,
                        e.backSpeed = e.options.backSpeed,
                        e.smartBackspace = e.options.smartBackspace,
                        e.backDelay = e.options.backDelay,
                        e.fadeOut = e.options.fadeOut,
                        e.fadeOutClass = e.options.fadeOutClass,
                        e.fadeOutDelay = e.options.fadeOutDelay,
                        e.isPaused = !1,
                        e.strings = e.options.strings.map((function(e) {
                            return e.trim()
                        }
                        )),
                        "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement,
                        e.stringsElement) {
                            e.strings = [],
                            e.stringsElement.style.display = "none";
                            var r = Array.prototype.slice.apply(e.stringsElement.children)
                              , i = r.length;
                            if (i)
                                for (var a = 0; a < i; a += 1) {
                                    var u = r[a];
                                    e.strings.push(u.innerHTML.trim())
                                }
                        }
                        for (var a in e.strPos = 0,
                        e.arrayPos = 0,
                        e.stopNum = 0,
                        e.loop = e.options.loop,
                        e.loopCount = e.options.loopCount,
                        e.curLoop = 0,
                        e.shuffle = e.options.shuffle,
                        e.sequence = [],
                        e.pause = {
                            status: !1,
                            typewrite: !0,
                            curString: "",
                            curStrPos: 0
                        },
                        e.typingComplete = !1,
                        e.strings)
                            e.sequence[a] = a;
                        e.currentElContent = this.getCurrentElContent(e),
                        e.autoInsertCss = e.options.autoInsertCss,
                        this.appendAnimationCss(e)
                    }
                }, {
                    key: "getCurrentElContent",
                    value: function(e) {
                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                    }
                }, {
                    key: "appendAnimationCss",
                    value: function(e) {
                        if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[data-typed-js-css]")) {
                            var t = document.createElement("style");
                            t.type = "text/css",
                            t.setAttribute("data-typed-js-css", !0);
                            var n = "";
                            e.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                            e.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                            0 !== t.length && (t.innerHTML = n,
                            document.body.appendChild(t))
                        }
                    }
                }]),
                e
            }();
            t.default = u;
            var c = new u;
            t.initializer = c
        }
        , function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: !0,
                shuffle: !1,
                backDelay: 700,
                fadeOut: !1,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: !1,
                loopCount: 1 / 0,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                attr: null,
                bindInputFocusEvents: !1,
                contentType: "html",
                onBegin: function(e) {},
                onComplete: function(e) {},
                preStringTyped: function(e, t) {},
                onStringTyped: function(e, t) {},
                onLastStringBackspaced: function(e) {},
                onTypingPaused: function(e, t) {},
                onTypingResumed: function(e, t) {},
                onReset: function(e) {},
                onStop: function(e, t) {},
                onStart: function(e, t) {},
                onDestroy: function(e) {}
            };
            t.default = n,
            e.exports = t.default
        }
        , function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , r = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, [{
                    key: "typeHtmlChars",
                    value: function(e, t, n) {
                        if ("html" !== n.contentType)
                            return t;
                        var r = e.substr(t).charAt(0);
                        if ("<" === r || "&" === r) {
                            var o = "";
                            for (o = "<" === r ? ">" : ";"; e.substr(t + 1).charAt(0) !== o && !(++t + 1 > e.length); )
                                ;
                            t++
                        }
                        return t
                    }
                }, {
                    key: "backSpaceHtmlChars",
                    value: function(e, t, n) {
                        if ("html" !== n.contentType)
                            return t;
                        var r = e.substr(t).charAt(0);
                        if (">" === r || ";" === r) {
                            var o = "";
                            for (o = ">" === r ? "<" : "&"; e.substr(t - 1).charAt(0) !== o && !(--t < 0); )
                                ;
                            t--
                        }
                        return t
                    }
                }]),
                e
            }();
            t.default = r;
            var o = new r;
            t.htmlParser = o
        }
        ])
    }
    ,
    e.exports = r()
}
, function(e, t, n) {
    /**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
    e.exports = function() {
        "use strict";
        for (var e = function(e, t, n) {
            return void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            e < t ? t : e > n ? n : e
        }, t = {}, n = 0, r = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; n < r.length; n += 1) {
            var o = r[n];
            t["[object " + o + "]"] = o.toLowerCase()
        }
        var i = function(e) {
            return t[Object.prototype.toString.call(e)] || "object"
        }
          , a = Math.PI
          , s = {
            clip_rgb: function(t) {
                t._clipped = !1,
                t._unclipped = t.slice(0);
                for (var n = 0; n <= 3; n++)
                    n < 3 ? ((t[n] < 0 || t[n] > 255) && (t._clipped = !0),
                    t[n] = e(t[n], 0, 255)) : 3 === n && (t[n] = e(t[n], 0, 1));
                return t
            },
            limit: e,
            type: i,
            unpack: function(e, t) {
                return void 0 === t && (t = null),
                e.length >= 3 ? Array.prototype.slice.call(e) : "object" == i(e[0]) && t ? t.split("").filter((function(t) {
                    return void 0 !== e[0][t]
                }
                )).map((function(t) {
                    return e[0][t]
                }
                )) : e[0]
            },
            last: function(e) {
                if (e.length < 2)
                    return null;
                var t = e.length - 1;
                return "string" == i(e[t]) ? e[t].toLowerCase() : null
            },
            PI: a,
            TWOPI: 2 * a,
            PITHIRD: a / 3,
            DEG2RAD: a / 180,
            RAD2DEG: 180 / a
        }
          , u = {
            format: {},
            autodetect: []
        }
          , c = s.last
          , l = s.clip_rgb
          , f = s.type
          , p = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = this;
            if ("object" === f(e[0]) && e[0].constructor && e[0].constructor === this.constructor)
                return e[0];
            var r = c(e)
              , o = !1;
            if (!r) {
                o = !0,
                u.sorted || (u.autodetect = u.autodetect.sort((function(e, t) {
                    return t.p - e.p
                }
                )),
                u.sorted = !0);
                for (var i = 0, a = u.autodetect; i < a.length; i += 1) {
                    var s = a[i];
                    if (r = s.test.apply(s, e))
                        break
                }
            }
            if (!u.format[r])
                throw new Error("unknown format: " + e);
            var p = u.format[r].apply(null, o ? e : e.slice(0, -1));
            n._rgb = l(p),
            3 === n._rgb.length && n._rgb.push(1)
        };
        p.prototype.toString = function() {
            return "function" == f(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
        }
        ;
        var d = p
          , h = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h.Color, [null].concat(e)))
        };
        h.Color = d,
        h.version = "2.1.0";
        var g = h
          , v = s.unpack
          , y = Math.max
          , m = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = v(e, "rgb")
              , r = n[0]
              , o = n[1]
              , i = n[2]
              , a = 1 - y(r /= 255, y(o /= 255, i /= 255))
              , s = a < 1 ? 1 / (1 - a) : 0
              , u = (1 - r - a) * s
              , c = (1 - o - a) * s
              , l = (1 - i - a) * s;
            return [u, c, l, a]
        }
          , b = s.unpack
          , x = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = (e = b(e, "cmyk"))[0]
              , r = e[1]
              , o = e[2]
              , i = e[3]
              , a = e.length > 4 ? e[4] : 1;
            return 1 === i ? [0, 0, 0, a] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - i), r >= 1 ? 0 : 255 * (1 - r) * (1 - i), o >= 1 ? 0 : 255 * (1 - o) * (1 - i), a]
        }
          , w = s.unpack
          , k = s.type;
        d.prototype.cmyk = function() {
            return m(this._rgb)
        }
        ,
        g.cmyk = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["cmyk"])))
        }
        ,
        u.format.cmyk = x,
        u.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (e = w(e, "cmyk"),
                "array" === k(e) && 4 === e.length)
                    return "cmyk"
            }
        });
        var T = s.unpack
          , C = s.last
          , E = function(e) {
            return Math.round(100 * e) / 100
        }
          , N = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = T(e, "hsla")
              , r = C(e) || "lsa";
            return n[0] = E(n[0] || 0),
            n[1] = E(100 * n[1]) + "%",
            n[2] = E(100 * n[2]) + "%",
            "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1,
            r = "hsla") : n.length = 3,
            r + "(" + n.join(",") + ")"
        }
          , S = s.unpack
          , A = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = (e = S(e, "rgba"))[0]
              , r = e[1]
              , o = e[2];
            n /= 255,
            r /= 255,
            o /= 255;
            var i, a, s = Math.min(n, r, o), u = Math.max(n, r, o), c = (u + s) / 2;
            return u === s ? (i = 0,
            a = Number.NaN) : i = c < .5 ? (u - s) / (u + s) : (u - s) / (2 - u - s),
            n == u ? a = (r - o) / (u - s) : r == u ? a = 2 + (o - n) / (u - s) : o == u && (a = 4 + (n - r) / (u - s)),
            (a *= 60) < 0 && (a += 360),
            e.length > 3 && void 0 !== e[3] ? [a, i, c, e[3]] : [a, i, c]
        }
          , j = s.unpack
          , D = s.last
          , P = Math.round
          , L = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = j(e, "rgba")
              , r = D(e) || "rgb";
            return "hsl" == r.substr(0, 3) ? N(A(n), r) : (n[0] = P(n[0]),
            n[1] = P(n[1]),
            n[2] = P(n[2]),
            ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1,
            r = "rgba"),
            r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
        }
          , M = s.unpack
          , q = Math.round
          , O = function() {
            for (var e, t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            var r, o, i, a = (t = M(t, "hsl"))[0], s = t[1], u = t[2];
            if (0 === s)
                r = o = i = 255 * u;
            else {
                var c = [0, 0, 0]
                  , l = [0, 0, 0]
                  , f = u < .5 ? u * (1 + s) : u + s - u * s
                  , p = 2 * u - f
                  , d = a / 360;
                c[0] = d + 1 / 3,
                c[1] = d,
                c[2] = d - 1 / 3;
                for (var h = 0; h < 3; h++)
                    c[h] < 0 && (c[h] += 1),
                    c[h] > 1 && (c[h] -= 1),
                    6 * c[h] < 1 ? l[h] = p + 6 * (f - p) * c[h] : 2 * c[h] < 1 ? l[h] = f : 3 * c[h] < 2 ? l[h] = p + (f - p) * (2 / 3 - c[h]) * 6 : l[h] = p;
                r = (e = [q(255 * l[0]), q(255 * l[1]), q(255 * l[2])])[0],
                o = e[1],
                i = e[2]
            }
            return t.length > 3 ? [r, o, i, t[3]] : [r, o, i, 1]
        }
          , H = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/
          , _ = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/
          , R = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/
          , I = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/
          , B = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/
          , F = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/
          , $ = Math.round
          , W = function(e) {
            var t;
            if (e = e.toLowerCase().trim(),
            u.format.named)
                try {
                    return u.format.named(e)
                } catch (e) {}
            if (t = e.match(H)) {
                for (var n = t.slice(1, 4), r = 0; r < 3; r++)
                    n[r] = +n[r];
                return n[3] = 1,
                n
            }
            if (t = e.match(_)) {
                for (var o = t.slice(1, 5), i = 0; i < 4; i++)
                    o[i] = +o[i];
                return o
            }
            if (t = e.match(R)) {
                for (var a = t.slice(1, 4), s = 0; s < 3; s++)
                    a[s] = $(2.55 * a[s]);
                return a[3] = 1,
                a
            }
            if (t = e.match(I)) {
                for (var c = t.slice(1, 5), l = 0; l < 3; l++)
                    c[l] = $(2.55 * c[l]);
                return c[3] = +c[3],
                c
            }
            if (t = e.match(B)) {
                var f = t.slice(1, 4);
                f[1] *= .01,
                f[2] *= .01;
                var p = O(f);
                return p[3] = 1,
                p
            }
            if (t = e.match(F)) {
                var d = t.slice(1, 4);
                d[1] *= .01,
                d[2] *= .01;
                var h = O(d);
                return h[3] = +t[4],
                h
            }
        };
        W.test = function(e) {
            return H.test(e) || _.test(e) || R.test(e) || I.test(e) || B.test(e) || F.test(e)
        }
        ;
        var z = W
          , G = s.type;
        d.prototype.css = function(e) {
            return L(this._rgb, e)
        }
        ,
        g.css = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["css"])))
        }
        ,
        u.format.css = z,
        u.autodetect.push({
            p: 5,
            test: function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; )
                    t[n] = arguments[n + 1];
                if (!t.length && "string" === G(e) && z.test(e))
                    return "css"
            }
        });
        var U = s.unpack;
        u.format.gl = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = U(e, "rgba");
            return n[0] *= 255,
            n[1] *= 255,
            n[2] *= 255,
            n
        }
        ,
        g.gl = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["gl"])))
        }
        ,
        d.prototype.gl = function() {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
        }
        ;
        var X = s.unpack
          , V = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n, r = X(e, "rgb"), o = r[0], i = r[1], a = r[2], s = Math.min(o, i, a), u = Math.max(o, i, a), c = u - s, l = 100 * c / 255, f = s / (255 - c) * 100;
            return 0 === c ? n = Number.NaN : (o === u && (n = (i - a) / c),
            i === u && (n = 2 + (a - o) / c),
            a === u && (n = 4 + (o - i) / c),
            (n *= 60) < 0 && (n += 360)),
            [n, l, f]
        }
          , Y = s.unpack
          , Q = Math.floor
          , J = function() {
            for (var e, t, n, r, o, i, a = [], s = arguments.length; s--; )
                a[s] = arguments[s];
            var u, c, l, f = (a = Y(a, "hcg"))[0], p = a[1], d = a[2];
            d *= 255;
            var h = 255 * p;
            if (0 === p)
                u = c = l = d;
            else {
                360 === f && (f = 0),
                f > 360 && (f -= 360),
                f < 0 && (f += 360);
                var g = Q(f /= 60)
                  , v = f - g
                  , y = d * (1 - p)
                  , m = y + h * (1 - v)
                  , b = y + h * v
                  , x = y + h;
                switch (g) {
                case 0:
                    u = (e = [x, b, y])[0],
                    c = e[1],
                    l = e[2];
                    break;
                case 1:
                    u = (t = [m, x, y])[0],
                    c = t[1],
                    l = t[2];
                    break;
                case 2:
                    u = (n = [y, x, b])[0],
                    c = n[1],
                    l = n[2];
                    break;
                case 3:
                    u = (r = [y, m, x])[0],
                    c = r[1],
                    l = r[2];
                    break;
                case 4:
                    u = (o = [b, y, x])[0],
                    c = o[1],
                    l = o[2];
                    break;
                case 5:
                    u = (i = [x, y, m])[0],
                    c = i[1],
                    l = i[2]
                }
            }
            return [u, c, l, a.length > 3 ? a[3] : 1]
        }
          , K = s.unpack
          , Z = s.type;
        d.prototype.hcg = function() {
            return V(this._rgb)
        }
        ,
        g.hcg = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["hcg"])))
        }
        ,
        u.format.hcg = J,
        u.autodetect.push({
            p: 1,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (e = K(e, "hcg"),
                "array" === Z(e) && 3 === e.length)
                    return "hcg"
            }
        });
        var ee = s.unpack
          , te = s.last
          , ne = Math.round
          , re = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = ee(e, "rgba")
              , r = n[0]
              , o = n[1]
              , i = n[2]
              , a = n[3]
              , s = te(e) || "auto";
            void 0 === a && (a = 1),
            "auto" === s && (s = a < 1 ? "rgba" : "rgb");
            var u = (r = ne(r)) << 16 | (o = ne(o)) << 8 | (i = ne(i))
              , c = "000000" + u.toString(16);
            c = c.substr(c.length - 6);
            var l = "0" + ne(255 * a).toString(16);
            switch (l = l.substr(l.length - 2),
            s.toLowerCase()) {
            case "rgba":
                return "#" + c + l;
            case "argb":
                return "#" + l + c;
            default:
                return "#" + c
            }
        }
          , oe = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
          , ie = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/
          , ae = function(e) {
            if (e.match(oe)) {
                4 !== e.length && 7 !== e.length || (e = e.substr(1)),
                3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e, 16);
                return [t >> 16, t >> 8 & 255, 255 & t, 1]
            }
            if (e.match(ie)) {
                5 !== e.length && 9 !== e.length || (e = e.substr(1)),
                4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var n = parseInt(e, 16);
                return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
            }
            throw new Error("unknown hex color: " + e)
        }
          , se = s.type;
        d.prototype.hex = function(e) {
            return re(this._rgb, e)
        }
        ,
        g.hex = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["hex"])))
        }
        ,
        u.format.hex = ae,
        u.autodetect.push({
            p: 4,
            test: function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; )
                    t[n] = arguments[n + 1];
                if (!t.length && "string" === se(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
                    return "hex"
            }
        });
        var ue = s.unpack
          , ce = s.TWOPI
          , le = Math.min
          , fe = Math.sqrt
          , pe = Math.acos
          , de = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n, r = ue(e, "rgb"), o = r[0], i = r[1], a = r[2], s = le(o /= 255, i /= 255, a /= 255), u = (o + i + a) / 3, c = u > 0 ? 1 - s / u : 0;
            return 0 === c ? n = NaN : (n = (o - i + (o - a)) / 2,
            n /= fe((o - i) * (o - i) + (o - a) * (i - a)),
            n = pe(n),
            a > i && (n = ce - n),
            n /= ce),
            [360 * n, c, u]
        }
          , he = s.unpack
          , ge = s.limit
          , ve = s.TWOPI
          , ye = s.PITHIRD
          , me = Math.cos
          , be = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n, r, o, i = (e = he(e, "hsi"))[0], a = e[1], s = e[2];
            return isNaN(i) && (i = 0),
            isNaN(a) && (a = 0),
            i > 360 && (i -= 360),
            i < 0 && (i += 360),
            (i /= 360) < 1 / 3 ? r = 1 - ((o = (1 - a) / 3) + (n = (1 + a * me(ve * i) / me(ye - ve * i)) / 3)) : i < 2 / 3 ? o = 1 - ((n = (1 - a) / 3) + (r = (1 + a * me(ve * (i -= 1 / 3)) / me(ye - ve * i)) / 3)) : n = 1 - ((r = (1 - a) / 3) + (o = (1 + a * me(ve * (i -= 2 / 3)) / me(ye - ve * i)) / 3)),
            [255 * (n = ge(s * n * 3)), 255 * (r = ge(s * r * 3)), 255 * (o = ge(s * o * 3)), e.length > 3 ? e[3] : 1]
        }
          , xe = s.unpack
          , we = s.type;
        d.prototype.hsi = function() {
            return de(this._rgb)
        }
        ,
        g.hsi = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["hsi"])))
        }
        ,
        u.format.hsi = be,
        u.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (e = xe(e, "hsi"),
                "array" === we(e) && 3 === e.length)
                    return "hsi"
            }
        });
        var ke = s.unpack
          , Te = s.type;
        d.prototype.hsl = function() {
            return A(this._rgb)
        }
        ,
        g.hsl = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["hsl"])))
        }
        ,
        u.format.hsl = O,
        u.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (e = ke(e, "hsl"),
                "array" === Te(e) && 3 === e.length)
                    return "hsl"
            }
        });
        var Ce = s.unpack
          , Ee = Math.min
          , Ne = Math.max
          , Se = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n, r, o, i = (e = Ce(e, "rgb"))[0], a = e[1], s = e[2], u = Ee(i, a, s), c = Ne(i, a, s), l = c - u;
            return o = c / 255,
            0 === c ? (n = Number.NaN,
            r = 0) : (r = l / c,
            i === c && (n = (a - s) / l),
            a === c && (n = 2 + (s - i) / l),
            s === c && (n = 4 + (i - a) / l),
            (n *= 60) < 0 && (n += 360)),
            [n, r, o]
        }
          , Ae = s.unpack
          , je = Math.floor
          , De = function() {
            for (var e, t, n, r, o, i, a = [], s = arguments.length; s--; )
                a[s] = arguments[s];
            var u, c, l, f = (a = Ae(a, "hsv"))[0], p = a[1], d = a[2];
            if (d *= 255,
            0 === p)
                u = c = l = d;
            else {
                360 === f && (f = 0),
                f > 360 && (f -= 360),
                f < 0 && (f += 360);
                var h = je(f /= 60)
                  , g = f - h
                  , v = d * (1 - p)
                  , y = d * (1 - p * g)
                  , m = d * (1 - p * (1 - g));
                switch (h) {
                case 0:
                    u = (e = [d, m, v])[0],
                    c = e[1],
                    l = e[2];
                    break;
                case 1:
                    u = (t = [y, d, v])[0],
                    c = t[1],
                    l = t[2];
                    break;
                case 2:
                    u = (n = [v, d, m])[0],
                    c = n[1],
                    l = n[2];
                    break;
                case 3:
                    u = (r = [v, y, d])[0],
                    c = r[1],
                    l = r[2];
                    break;
                case 4:
                    u = (o = [m, v, d])[0],
                    c = o[1],
                    l = o[2];
                    break;
                case 5:
                    u = (i = [d, v, y])[0],
                    c = i[1],
                    l = i[2]
                }
            }
            return [u, c, l, a.length > 3 ? a[3] : 1]
        }
          , Pe = s.unpack
          , Le = s.type;
        d.prototype.hsv = function() {
            return Se(this._rgb)
        }
        ,
        g.hsv = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["hsv"])))
        }
        ,
        u.format.hsv = De,
        u.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (e = Pe(e, "hsv"),
                "array" === Le(e) && 3 === e.length)
                    return "hsv"
            }
        });
        var Me = 18
          , qe = .95047
          , Oe = 1
          , He = 1.08883
          , _e = .137931034
          , Re = .206896552
          , Ie = .12841855
          , Be = .008856452
          , Fe = s.unpack
          , $e = Math.pow
          , We = function(e) {
            return (e /= 255) <= .04045 ? e / 12.92 : $e((e + .055) / 1.055, 2.4)
        }
          , ze = function(e) {
            return e > Be ? $e(e, 1 / 3) : e / Ie + _e
        }
          , Ge = function(e, t, n) {
            return e = We(e),
            t = We(t),
            n = We(n),
            [ze((.4124564 * e + .3575761 * t + .1804375 * n) / qe), ze((.2126729 * e + .7151522 * t + .072175 * n) / Oe), ze((.0193339 * e + .119192 * t + .9503041 * n) / He)]
        }
          , Ue = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = Fe(e, "rgb")
              , r = n[0]
              , o = n[1]
              , i = n[2]
              , a = Ge(r, o, i)
              , s = a[0]
              , u = a[1]
              , c = a[2]
              , l = 116 * u - 16;
            return [l < 0 ? 0 : l, 500 * (s - u), 200 * (u - c)]
        }
          , Xe = s.unpack
          , Ve = Math.pow
          , Ye = function(e) {
            return 255 * (e <= .00304 ? 12.92 * e : 1.055 * Ve(e, 1 / 2.4) - .055)
        }
          , Qe = function(e) {
            return e > Re ? e * e * e : Ie * (e - _e)
        }
          , Je = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n, r, o, i = (e = Xe(e, "lab"))[0], a = e[1], s = e[2];
            return r = (i + 16) / 116,
            n = isNaN(a) ? r : r + a / 500,
            o = isNaN(s) ? r : r - s / 200,
            r = Oe * Qe(r),
            n = qe * Qe(n),
            o = He * Qe(o),
            [Ye(3.2404542 * n - 1.5371385 * r - .4985314 * o), Ye(-.969266 * n + 1.8760108 * r + .041556 * o), Ye(.0556434 * n - .2040259 * r + 1.0572252 * o), e.length > 3 ? e[3] : 1]
        }
          , Ke = s.unpack
          , Ze = s.type;
        d.prototype.lab = function() {
            return Ue(this._rgb)
        }
        ,
        g.lab = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["lab"])))
        }
        ,
        u.format.lab = Je,
        u.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (e = Ke(e, "lab"),
                "array" === Ze(e) && 3 === e.length)
                    return "lab"
            }
        });
        var et = s.unpack
          , tt = s.RAD2DEG
          , nt = Math.sqrt
          , rt = Math.atan2
          , ot = Math.round
          , it = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = et(e, "lab")
              , r = n[0]
              , o = n[1]
              , i = n[2]
              , a = nt(o * o + i * i)
              , s = (rt(i, o) * tt + 360) % 360;
            return 0 === ot(1e4 * a) && (s = Number.NaN),
            [r, a, s]
        }
          , at = s.unpack
          , st = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = at(e, "rgb")
              , r = n[0]
              , o = n[1]
              , i = n[2]
              , a = Ue(r, o, i)
              , s = a[0]
              , u = a[1]
              , c = a[2];
            return it(s, u, c)
        }
          , ut = s.unpack
          , ct = s.DEG2RAD
          , lt = Math.sin
          , ft = Math.cos
          , pt = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = ut(e, "lch")
              , r = n[0]
              , o = n[1]
              , i = n[2];
            return isNaN(i) && (i = 0),
            [r, ft(i *= ct) * o, lt(i) * o]
        }
          , dt = s.unpack
          , ht = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = (e = dt(e, "lch"))[0]
              , r = e[1]
              , o = e[2]
              , i = pt(n, r, o)
              , a = i[0]
              , s = i[1]
              , u = i[2]
              , c = Je(a, s, u)
              , l = c[0]
              , f = c[1]
              , p = c[2];
            return [l, f, p, e.length > 3 ? e[3] : 1]
        }
          , gt = s.unpack
          , vt = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = gt(e, "hcl").reverse();
            return ht.apply(void 0, n)
        }
          , yt = s.unpack
          , mt = s.type;
        d.prototype.lch = function() {
            return st(this._rgb)
        }
        ,
        d.prototype.hcl = function() {
            return st(this._rgb).reverse()
        }
        ,
        g.lch = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["lch"])))
        }
        ,
        g.hcl = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["hcl"])))
        }
        ,
        u.format.lch = ht,
        u.format.hcl = vt,
        ["lch", "hcl"].forEach((function(e) {
            return u.autodetect.push({
                p: 2,
                test: function() {
                    for (var t = [], n = arguments.length; n--; )
                        t[n] = arguments[n];
                    if (t = yt(t, e),
                    "array" === mt(t) && 3 === t.length)
                        return e
                }
            })
        }
        ));
        var bt = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflower: "#6495ed",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            laserlemon: "#ffff54",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrod: "#fafad2",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            maroon2: "#7f0000",
            maroon3: "#b03060",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            purple2: "#7f007f",
            purple3: "#a020f0",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        }
          , xt = s.type;
        d.prototype.name = function() {
            for (var e = re(this._rgb, "rgb"), t = 0, n = Object.keys(bt); t < n.length; t += 1) {
                var r = n[t];
                if (bt[r] === e)
                    return r.toLowerCase()
            }
            return e
        }
        ,
        u.format.named = function(e) {
            if (e = e.toLowerCase(),
            bt[e])
                return ae(bt[e]);
            throw new Error("unknown color name: " + e)
        }
        ,
        u.autodetect.push({
            p: 5,
            test: function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; )
                    t[n] = arguments[n + 1];
                if (!t.length && "string" === xt(e) && bt[e.toLowerCase()])
                    return "named"
            }
        });
        var wt = s.unpack
          , kt = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = wt(e, "rgb")
              , r = n[0]
              , o = n[1]
              , i = n[2];
            return (r << 16) + (o << 8) + i
        }
          , Tt = s.type
          , Ct = function(e) {
            if ("number" == Tt(e) && e >= 0 && e <= 16777215)
                return [e >> 16, e >> 8 & 255, 255 & e, 1];
            throw new Error("unknown num color: " + e)
        }
          , Et = s.type;
        d.prototype.num = function() {
            return kt(this._rgb)
        }
        ,
        g.num = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["num"])))
        }
        ,
        u.format.num = Ct,
        u.autodetect.push({
            p: 5,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (1 === e.length && "number" === Et(e[0]) && e[0] >= 0 && e[0] <= 16777215)
                    return "num"
            }
        });
        var Nt = s.unpack
          , St = s.type
          , At = Math.round;
        d.prototype.rgb = function(e) {
            return void 0 === e && (e = !0),
            !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(At)
        }
        ,
        d.prototype.rgba = function(e) {
            return void 0 === e && (e = !0),
            this._rgb.slice(0, 4).map((function(t, n) {
                return n < 3 ? !1 === e ? t : At(t) : t
            }
            ))
        }
        ,
        g.rgb = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["rgb"])))
        }
        ,
        u.format.rgb = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = Nt(e, "rgba");
            return void 0 === n[3] && (n[3] = 1),
            n
        }
        ,
        u.autodetect.push({
            p: 3,
            test: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                if (e = Nt(e, "rgba"),
                "array" === St(e) && (3 === e.length || 4 === e.length && "number" == St(e[3]) && e[3] >= 0 && e[3] <= 1))
                    return "rgb"
            }
        });
        var jt = Math.log
          , Dt = function(e) {
            var t, n, r, o = e / 100;
            return o < 66 ? (t = 255,
            n = -155.25485562709179 - .44596950469579133 * (n = o - 2) + 104.49216199393888 * jt(n),
            r = o < 20 ? 0 : .8274096064007395 * (r = o - 10) - 254.76935184120902 + 115.67994401066147 * jt(r)) : (t = 351.97690566805693 + .114206453784165 * (t = o - 55) - 40.25366309332127 * jt(t),
            n = 325.4494125711974 + .07943456536662342 * (n = o - 50) - 28.0852963507957 * jt(n),
            r = 255),
            [t, n, r, 1]
        }
          , Pt = s.unpack
          , Lt = Math.round
          , Mt = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var n, r = Pt(e, "rgb"), o = r[0], i = r[2], a = 1e3, s = 4e4, u = .4; s - a > u; ) {
                var c = Dt(n = .5 * (s + a));
                c[2] / c[0] >= i / o ? s = n : a = n
            }
            return Lt(n)
        };
        d.prototype.temp = d.prototype.kelvin = d.prototype.temperature = function() {
            return Mt(this._rgb)
        }
        ,
        g.temp = g.kelvin = g.temperature = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["temp"])))
        }
        ,
        u.format.temp = u.format.kelvin = u.format.temperature = Dt;
        var qt = s.type;
        d.prototype.alpha = function(e, t) {
            return void 0 === t && (t = !1),
            void 0 !== e && "number" === qt(e) ? t ? (this._rgb[3] = e,
            this) : new d([this._rgb[0], this._rgb[1], this._rgb[2], e],"rgb") : this._rgb[3]
        }
        ,
        d.prototype.clipped = function() {
            return this._rgb._clipped || !1
        }
        ,
        d.prototype.darken = function(e) {
            void 0 === e && (e = 1);
            var t = this.lab();
            return t[0] -= Me * e,
            new d(t,"lab").alpha(this.alpha(), !0)
        }
        ,
        d.prototype.brighten = function(e) {
            return void 0 === e && (e = 1),
            this.darken(-e)
        }
        ,
        d.prototype.darker = d.prototype.darken,
        d.prototype.brighter = d.prototype.brighten,
        d.prototype.get = function(e) {
            var t = e.split(".")
              , n = t[0]
              , r = t[1]
              , o = this[n]();
            if (r) {
                var i = n.indexOf(r);
                if (i > -1)
                    return o[i];
                throw new Error("unknown channel " + r + " in mode " + n)
            }
            return o
        }
        ;
        var Ot = s.type
          , Ht = Math.pow;
        d.prototype.luminance = function(e) {
            if (void 0 !== e && "number" === Ot(e)) {
                if (0 === e)
                    return new d([0, 0, 0, this._rgb[3]],"rgb");
                if (1 === e)
                    return new d([255, 255, 255, this._rgb[3]],"rgb");
                var t = this.luminance()
                  , n = 20
                  , r = function(t, o) {
                    var i = t.interpolate(o, .5, "rgb")
                      , a = i.luminance();
                    return Math.abs(e - a) < 1e-7 || !n-- ? i : a > e ? r(t, i) : r(i, o)
                }
                  , o = (t > e ? r(new d([0, 0, 0]), this) : r(this, new d([255, 255, 255]))).rgb();
                return new d(o.concat([this._rgb[3]]))
            }
            return _t.apply(void 0, this._rgb.slice(0, 3))
        }
        ;
        var _t = function(e, t, n) {
            return .2126 * (e = Rt(e)) + .7152 * (t = Rt(t)) + .0722 * (n = Rt(n))
        }
          , Rt = function(e) {
            return (e /= 255) <= .03928 ? e / 12.92 : Ht((e + .055) / 1.055, 2.4)
        }
          , It = {}
          , Bt = s.type
          , Ft = function(e, t, n) {
            void 0 === n && (n = .5);
            for (var r = [], o = arguments.length - 3; o-- > 0; )
                r[o] = arguments[o + 3];
            var i = r[0] || "lrgb";
            if (It[i] || r.length || (i = Object.keys(It)[0]),
            !It[i])
                throw new Error("interpolation mode " + i + " is not defined");
            return "object" !== Bt(e) && (e = new d(e)),
            "object" !== Bt(t) && (t = new d(t)),
            It[i](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
        };
        d.prototype.mix = d.prototype.interpolate = function(e, t) {
            void 0 === t && (t = .5);
            for (var n = [], r = arguments.length - 2; r-- > 0; )
                n[r] = arguments[r + 2];
            return Ft.apply(void 0, [this, e, t].concat(n))
        }
        ,
        d.prototype.premultiply = function(e) {
            void 0 === e && (e = !1);
            var t = this._rgb
              , n = t[3];
            return e ? (this._rgb = [t[0] * n, t[1] * n, t[2] * n, n],
            this) : new d([t[0] * n, t[1] * n, t[2] * n, n],"rgb")
        }
        ,
        d.prototype.saturate = function(e) {
            void 0 === e && (e = 1);
            var t = this.lch();
            return t[1] += Me * e,
            t[1] < 0 && (t[1] = 0),
            new d(t,"lch").alpha(this.alpha(), !0)
        }
        ,
        d.prototype.desaturate = function(e) {
            return void 0 === e && (e = 1),
            this.saturate(-e)
        }
        ;
        var $t = s.type;
        d.prototype.set = function(e, t, n) {
            void 0 === n && (n = !1);
            var r = e.split(".")
              , o = r[0]
              , i = r[1]
              , a = this[o]();
            if (i) {
                var s = o.indexOf(i);
                if (s > -1) {
                    if ("string" == $t(t))
                        switch (t.charAt(0)) {
                        case "+":
                        case "-":
                            a[s] += +t;
                            break;
                        case "*":
                            a[s] *= +t.substr(1);
                            break;
                        case "/":
                            a[s] /= +t.substr(1);
                            break;
                        default:
                            a[s] = +t
                        }
                    else {
                        if ("number" !== $t(t))
                            throw new Error("unsupported value for Color.set");
                        a[s] = t
                    }
                    var u = new d(a,o);
                    return n ? (this._rgb = u._rgb,
                    this) : u
                }
                throw new Error("unknown channel " + i + " in mode " + o)
            }
            return a
        }
        ,
        It.rgb = function(e, t, n) {
            var r = e._rgb
              , o = t._rgb;
            return new d(r[0] + n * (o[0] - r[0]),r[1] + n * (o[1] - r[1]),r[2] + n * (o[2] - r[2]),"rgb")
        }
        ;
        var Wt = Math.sqrt
          , zt = Math.pow;
        It.lrgb = function(e, t, n) {
            var r = e._rgb
              , o = r[0]
              , i = r[1]
              , a = r[2]
              , s = t._rgb
              , u = s[0]
              , c = s[1]
              , l = s[2];
            return new d(Wt(zt(o, 2) * (1 - n) + zt(u, 2) * n),Wt(zt(i, 2) * (1 - n) + zt(c, 2) * n),Wt(zt(a, 2) * (1 - n) + zt(l, 2) * n),"rgb")
        }
        ,
        It.lab = function(e, t, n) {
            var r = e.lab()
              , o = t.lab();
            return new d(r[0] + n * (o[0] - r[0]),r[1] + n * (o[1] - r[1]),r[2] + n * (o[2] - r[2]),"lab")
        }
        ;
        var Gt = function(e, t, n, r) {
            var o, i, a, s, u, c, l, f, p, h, g, v;
            return "hsl" === r ? (a = e.hsl(),
            s = t.hsl()) : "hsv" === r ? (a = e.hsv(),
            s = t.hsv()) : "hcg" === r ? (a = e.hcg(),
            s = t.hcg()) : "hsi" === r ? (a = e.hsi(),
            s = t.hsi()) : "lch" !== r && "hcl" !== r || (r = "hcl",
            a = e.hcl(),
            s = t.hcl()),
            "h" === r.substr(0, 1) && (u = (o = a)[0],
            l = o[1],
            p = o[2],
            c = (i = s)[0],
            f = i[1],
            h = i[2]),
            isNaN(u) || isNaN(c) ? isNaN(u) ? isNaN(c) ? v = Number.NaN : (v = c,
            1 != p && 0 != p || "hsv" == r || (g = f)) : (v = u,
            1 != h && 0 != h || "hsv" == r || (g = l)) : v = u + n * (c > u && c - u > 180 ? c - (u + 360) : c < u && u - c > 180 ? c + 360 - u : c - u),
            void 0 === g && (g = l + n * (f - l)),
            new d([v, g, p + n * (h - p)],r)
        }
          , Ut = function(e, t, n) {
            return Gt(e, t, n, "lch")
        };
        It.lch = Ut,
        It.hcl = Ut,
        It.num = function(e, t, n) {
            var r = e.num()
              , o = t.num();
            return new d(r + n * (o - r),"num")
        }
        ,
        It.hcg = function(e, t, n) {
            return Gt(e, t, n, "hcg")
        }
        ,
        It.hsi = function(e, t, n) {
            return Gt(e, t, n, "hsi")
        }
        ,
        It.hsl = function(e, t, n) {
            return Gt(e, t, n, "hsl")
        }
        ,
        It.hsv = function(e, t, n) {
            return Gt(e, t, n, "hsv")
        }
        ;
        var Xt = s.clip_rgb
          , Vt = Math.pow
          , Yt = Math.sqrt
          , Qt = Math.PI
          , Jt = Math.cos
          , Kt = Math.sin
          , Zt = Math.atan2
          , en = function(e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], o = 0; o < e.length; o++) {
                var i = e[o]
                  , a = t[o] / n
                  , s = i._rgb;
                r[0] += Vt(s[0], 2) * a,
                r[1] += Vt(s[1], 2) * a,
                r[2] += Vt(s[2], 2) * a,
                r[3] += s[3] * a
            }
            return r[0] = Yt(r[0]),
            r[1] = Yt(r[1]),
            r[2] = Yt(r[2]),
            r[3] > .9999999 && (r[3] = 1),
            new d(Xt(r))
        }
          , tn = s.type
          , nn = Math.pow
          , rn = function(e) {
            var t = "rgb"
              , n = g("#ccc")
              , r = 0
              , o = [0, 1]
              , i = []
              , a = [0, 0]
              , s = !1
              , u = []
              , c = !1
              , l = 0
              , f = 1
              , p = !1
              , d = {}
              , h = !0
              , v = 1
              , y = function(e) {
                if ((e = e || ["#fff", "#000"]) && "string" === tn(e) && g.brewer && g.brewer[e.toLowerCase()] && (e = g.brewer[e.toLowerCase()]),
                "array" === tn(e)) {
                    1 === e.length && (e = [e[0], e[0]]),
                    e = e.slice(0);
                    for (var t = 0; t < e.length; t++)
                        e[t] = g(e[t]);
                    i.length = 0;
                    for (var n = 0; n < e.length; n++)
                        i.push(n / (e.length - 1))
                }
                return w(),
                u = e
            }
              , m = function(e) {
                return e
            }
              , b = function(e) {
                return e
            }
              , x = function(e, r) {
                var o, c;
                if (null == r && (r = !1),
                isNaN(e) || null === e)
                    return n;
                c = r ? e : s && s.length > 2 ? function(e) {
                    if (null != s) {
                        for (var t = s.length - 1, n = 0; n < t && e >= s[n]; )
                            n++;
                        return n - 1
                    }
                    return 0
                }(e) / (s.length - 2) : f !== l ? (e - l) / (f - l) : 1,
                c = b(c),
                r || (c = m(c)),
                1 !== v && (c = nn(c, v)),
                c = a[0] + c * (1 - a[0] - a[1]),
                c = Math.min(1, Math.max(0, c));
                var p = Math.floor(1e4 * c);
                if (h && d[p])
                    o = d[p];
                else {
                    if ("array" === tn(u))
                        for (var y = 0; y < i.length; y++) {
                            var x = i[y];
                            if (c <= x) {
                                o = u[y];
                                break
                            }
                            if (c >= x && y === i.length - 1) {
                                o = u[y];
                                break
                            }
                            if (c > x && c < i[y + 1]) {
                                c = (c - x) / (i[y + 1] - x),
                                o = g.interpolate(u[y], u[y + 1], c, t);
                                break
                            }
                        }
                    else
                        "function" === tn(u) && (o = u(c));
                    h && (d[p] = o)
                }
                return o
            }
              , w = function() {
                return d = {}
            };
            y(e);
            var k = function(e) {
                var t = g(x(e));
                return c && t[c] ? t[c]() : t
            };
            return k.classes = function(e) {
                if (null != e) {
                    if ("array" === tn(e))
                        s = e,
                        o = [e[0], e[e.length - 1]];
                    else {
                        var t = g.analyze(o);
                        s = 0 === e ? [t.min, t.max] : g.limits(t, "e", e)
                    }
                    return k
                }
                return s
            }
            ,
            k.domain = function(e) {
                if (!arguments.length)
                    return o;
                l = e[0],
                f = e[e.length - 1],
                i = [];
                var t = u.length;
                if (e.length === t && l !== f)
                    for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                        var a = r[n];
                        i.push((a - l) / (f - l))
                    }
                else {
                    for (var s = 0; s < t; s++)
                        i.push(s / (t - 1));
                    if (e.length > 2) {
                        var c = e.map((function(t, n) {
                            return n / (e.length - 1)
                        }
                        ))
                          , p = e.map((function(e) {
                            return (e - l) / (f - l)
                        }
                        ));
                        p.every((function(e, t) {
                            return c[t] === e
                        }
                        )) || (b = function(e) {
                            if (e <= 0 || e >= 1)
                                return e;
                            for (var t = 0; e >= p[t + 1]; )
                                t++;
                            var n = (e - p[t]) / (p[t + 1] - p[t]);
                            return c[t] + n * (c[t + 1] - c[t])
                        }
                        )
                    }
                }
                return o = [l, f],
                k
            }
            ,
            k.mode = function(e) {
                return arguments.length ? (t = e,
                w(),
                k) : t
            }
            ,
            k.range = function(e, t) {
                return y(e),
                k
            }
            ,
            k.out = function(e) {
                return c = e,
                k
            }
            ,
            k.spread = function(e) {
                return arguments.length ? (r = e,
                k) : r
            }
            ,
            k.correctLightness = function(e) {
                return null == e && (e = !0),
                p = e,
                w(),
                m = p ? function(e) {
                    for (var t = x(0, !0).lab()[0], n = x(1, !0).lab()[0], r = t > n, o = x(e, !0).lab()[0], i = t + (n - t) * e, a = o - i, s = 0, u = 1, c = 20; Math.abs(a) > .01 && c-- > 0; )
                        r && (a *= -1),
                        a < 0 ? (s = e,
                        e += .5 * (u - e)) : (u = e,
                        e += .5 * (s - e)),
                        o = x(e, !0).lab()[0],
                        a = o - i;
                    return e
                }
                : function(e) {
                    return e
                }
                ,
                k
            }
            ,
            k.padding = function(e) {
                return null != e ? ("number" === tn(e) && (e = [e, e]),
                a = e,
                k) : a
            }
            ,
            k.colors = function(t, n) {
                arguments.length < 2 && (n = "hex");
                var r = [];
                if (0 === arguments.length)
                    r = u.slice(0);
                else if (1 === t)
                    r = [k(.5)];
                else if (t > 1) {
                    var i = o[0]
                      , a = o[1] - i;
                    r = on(0, t, !1).map((function(e) {
                        return k(i + e / (t - 1) * a)
                    }
                    ))
                } else {
                    e = [];
                    var c = [];
                    if (s && s.length > 2)
                        for (var l = 1, f = s.length, p = 1 <= f; p ? l < f : l > f; p ? l++ : l--)
                            c.push(.5 * (s[l - 1] + s[l]));
                    else
                        c = o;
                    r = c.map((function(e) {
                        return k(e)
                    }
                    ))
                }
                return g[n] && (r = r.map((function(e) {
                    return e[n]()
                }
                ))),
                r
            }
            ,
            k.cache = function(e) {
                return null != e ? (h = e,
                k) : h
            }
            ,
            k.gamma = function(e) {
                return null != e ? (v = e,
                k) : v
            }
            ,
            k.nodata = function(e) {
                return null != e ? (n = g(e),
                k) : n
            }
            ,
            k
        };
        function on(e, t, n) {
            for (var r = [], o = e < t, i = n ? o ? t + 1 : t - 1 : t, a = e; o ? a < i : a > i; o ? a++ : a--)
                r.push(a);
            return r
        }
        var an = function(e) {
            var t, n, r, o, i, a, s;
            if (2 === (e = e.map((function(e) {
                return new d(e)
            }
            ))).length)
                t = e.map((function(e) {
                    return e.lab()
                }
                )),
                i = t[0],
                a = t[1],
                o = function(e) {
                    var t = [0, 1, 2].map((function(t) {
                        return i[t] + e * (a[t] - i[t])
                    }
                    ));
                    return new d(t,"lab")
                }
                ;
            else if (3 === e.length)
                n = e.map((function(e) {
                    return e.lab()
                }
                )),
                i = n[0],
                a = n[1],
                s = n[2],
                o = function(e) {
                    var t = [0, 1, 2].map((function(t) {
                        return (1 - e) * (1 - e) * i[t] + 2 * (1 - e) * e * a[t] + e * e * s[t]
                    }
                    ));
                    return new d(t,"lab")
                }
                ;
            else if (4 === e.length) {
                var u;
                r = e.map((function(e) {
                    return e.lab()
                }
                )),
                i = r[0],
                a = r[1],
                s = r[2],
                u = r[3],
                o = function(e) {
                    var t = [0, 1, 2].map((function(t) {
                        return (1 - e) * (1 - e) * (1 - e) * i[t] + 3 * (1 - e) * (1 - e) * e * a[t] + 3 * (1 - e) * e * e * s[t] + e * e * e * u[t]
                    }
                    ));
                    return new d(t,"lab")
                }
            } else if (5 === e.length) {
                var c = an(e.slice(0, 3))
                  , l = an(e.slice(2, 5));
                o = function(e) {
                    return e < .5 ? c(2 * e) : l(2 * (e - .5))
                }
            }
            return o
        }
          , sn = function(e, t, n) {
            if (!sn[n])
                throw new Error("unknown blend mode " + n);
            return sn[n](e, t)
        }
          , un = function(e) {
            return function(t, n) {
                var r = g(n).rgb()
                  , o = g(t).rgb();
                return g.rgb(e(r, o))
            }
        }
          , cn = function(e) {
            return function(t, n) {
                var r = [];
                return r[0] = e(t[0], n[0]),
                r[1] = e(t[1], n[1]),
                r[2] = e(t[2], n[2]),
                r
            }
        };
        sn.normal = un(cn((function(e) {
            return e
        }
        ))),
        sn.multiply = un(cn((function(e, t) {
            return e * t / 255
        }
        ))),
        sn.screen = un(cn((function(e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255))
        }
        ))),
        sn.overlay = un(cn((function(e, t) {
            return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255))
        }
        ))),
        sn.darken = un(cn((function(e, t) {
            return e > t ? t : e
        }
        ))),
        sn.lighten = un(cn((function(e, t) {
            return e > t ? e : t
        }
        ))),
        sn.dodge = un(cn((function(e, t) {
            return 255 === e ? 255 : (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e
        }
        ))),
        sn.burn = un(cn((function(e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255))
        }
        )));
        for (var ln = sn, fn = s.type, pn = s.clip_rgb, dn = s.TWOPI, hn = Math.pow, gn = Math.sin, vn = Math.cos, yn = Math.floor, mn = Math.random, bn = Math.log, xn = Math.pow, wn = Math.floor, kn = Math.abs, Tn = function(e, t) {
            void 0 === t && (t = null);
            var n = {
                min: Number.MAX_VALUE,
                max: -1 * Number.MAX_VALUE,
                sum: 0,
                values: [],
                count: 0
            };
            return "object" === i(e) && (e = Object.values(e)),
            e.forEach((function(e) {
                t && "object" === i(e) && (e = e[t]),
                null == e || isNaN(e) || (n.values.push(e),
                n.sum += e,
                e < n.min && (n.min = e),
                e > n.max && (n.max = e),
                n.count += 1)
            }
            )),
            n.domain = [n.min, n.max],
            n.limits = function(e, t) {
                return Cn(n, e, t)
            }
            ,
            n
        }, Cn = function(e, t, n) {
            void 0 === t && (t = "equal"),
            void 0 === n && (n = 7),
            "array" == i(e) && (e = Tn(e));
            var r = e.min
              , o = e.max
              , a = e.values.sort((function(e, t) {
                return e - t
            }
            ));
            if (1 === n)
                return [r, o];
            var s = [];
            if ("c" === t.substr(0, 1) && (s.push(r),
            s.push(o)),
            "e" === t.substr(0, 1)) {
                s.push(r);
                for (var u = 1; u < n; u++)
                    s.push(r + u / n * (o - r));
                s.push(o)
            } else if ("l" === t.substr(0, 1)) {
                if (r <= 0)
                    throw new Error("Logarithmic scales are only possible for values > 0");
                var c = Math.LOG10E * bn(r)
                  , l = Math.LOG10E * bn(o);
                s.push(r);
                for (var f = 1; f < n; f++)
                    s.push(xn(10, c + f / n * (l - c)));
                s.push(o)
            } else if ("q" === t.substr(0, 1)) {
                s.push(r);
                for (var p = 1; p < n; p++) {
                    var d = (a.length - 1) * p / n
                      , h = wn(d);
                    if (h === d)
                        s.push(a[h]);
                    else {
                        var g = d - h;
                        s.push(a[h] * (1 - g) + a[h + 1] * g)
                    }
                }
                s.push(o)
            } else if ("k" === t.substr(0, 1)) {
                var v, y = a.length, m = new Array(y), b = new Array(n), x = !0, w = 0, k = null;
                (k = []).push(r);
                for (var T = 1; T < n; T++)
                    k.push(r + T / n * (o - r));
                for (k.push(o); x; ) {
                    for (var C = 0; C < n; C++)
                        b[C] = 0;
                    for (var E = 0; E < y; E++)
                        for (var N = a[E], S = Number.MAX_VALUE, A = void 0, j = 0; j < n; j++) {
                            var D = kn(k[j] - N);
                            D < S && (S = D,
                            A = j),
                            b[A]++,
                            m[E] = A
                        }
                    for (var P = new Array(n), L = 0; L < n; L++)
                        P[L] = null;
                    for (var M = 0; M < y; M++)
                        null === P[v = m[M]] ? P[v] = a[M] : P[v] += a[M];
                    for (var q = 0; q < n; q++)
                        P[q] *= 1 / b[q];
                    x = !1;
                    for (var O = 0; O < n; O++)
                        if (P[O] !== k[O]) {
                            x = !0;
                            break
                        }
                    k = P,
                    ++w > 200 && (x = !1)
                }
                for (var H = {}, _ = 0; _ < n; _++)
                    H[_] = [];
                for (var R = 0; R < y; R++)
                    H[v = m[R]].push(a[R]);
                for (var I = [], B = 0; B < n; B++)
                    I.push(H[B][0]),
                    I.push(H[B][H[B].length - 1]);
                I = I.sort((function(e, t) {
                    return e - t
                }
                )),
                s.push(I[0]);
                for (var F = 1; F < I.length; F += 2) {
                    var $ = I[F];
                    isNaN($) || -1 !== s.indexOf($) || s.push($)
                }
            }
            return s
        }, En = {
            analyze: Tn,
            limits: Cn
        }, Nn = Math.sqrt, Sn = Math.atan2, An = Math.abs, jn = Math.cos, Dn = Math.PI, Pn = {
            cool: function() {
                return rn([g.hsl(180, 1, .9), g.hsl(250, .7, .4)])
            },
            hot: function() {
                return rn(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
            }
        }, Ln = {
            OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
            PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
            BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
            Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
            BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
            YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
            YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
            Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
            RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
            Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
            YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
            Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
            GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
            Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
            YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
            PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
            Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
            PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
            Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
            Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
            RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
            RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
            PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
            PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
            RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
            BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
            RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
            PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
            Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
            Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
            Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
            Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
            Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
            Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
            Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
            Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
        }, Mn = 0, qn = Object.keys(Ln); Mn < qn.length; Mn += 1) {
            var On = qn[Mn];
            Ln[On.toLowerCase()] = Ln[On]
        }
        var Hn = Ln;
        return g.average = function(e, t, n) {
            void 0 === t && (t = "lrgb"),
            void 0 === n && (n = null);
            var r = e.length;
            n || (n = Array.from(new Array(r)).map((function() {
                return 1
            }
            )));
            var o = r / n.reduce((function(e, t) {
                return e + t
            }
            ));
            if (n.forEach((function(e, t) {
                n[t] *= o
            }
            )),
            e = e.map((function(e) {
                return new d(e)
            }
            )),
            "lrgb" === t)
                return en(e, n);
            for (var i = e.shift(), a = i.get(t), s = [], u = 0, c = 0, l = 0; l < a.length; l++)
                if (a[l] = (a[l] || 0) * n[0],
                s.push(isNaN(a[l]) ? 0 : n[0]),
                "h" === t.charAt(l) && !isNaN(a[l])) {
                    var f = a[l] / 180 * Qt;
                    u += Jt(f) * n[0],
                    c += Kt(f) * n[0]
                }
            var p = i.alpha() * n[0];
            e.forEach((function(e, r) {
                var o = e.get(t);
                p += e.alpha() * n[r + 1];
                for (var i = 0; i < a.length; i++)
                    if (!isNaN(o[i]))
                        if (s[i] += n[r + 1],
                        "h" === t.charAt(i)) {
                            var l = o[i] / 180 * Qt;
                            u += Jt(l) * n[r + 1],
                            c += Kt(l) * n[r + 1]
                        } else
                            a[i] += o[i] * n[r + 1]
            }
            ));
            for (var h = 0; h < a.length; h++)
                if ("h" === t.charAt(h)) {
                    for (var g = Zt(c / s[h], u / s[h]) / Qt * 180; g < 0; )
                        g += 360;
                    for (; g >= 360; )
                        g -= 360;
                    a[h] = g
                } else
                    a[h] = a[h] / s[h];
            return p /= r,
            new d(a,t).alpha(p > .99999 ? 1 : p, !0)
        }
        ,
        g.bezier = function(e) {
            var t = an(e);
            return t.scale = function() {
                return rn(t)
            }
            ,
            t
        }
        ,
        g.blend = ln,
        g.cubehelix = function(e, t, n, r, o) {
            void 0 === e && (e = 300),
            void 0 === t && (t = -1.5),
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === o && (o = [0, 1]);
            var i, a = 0;
            "array" === fn(o) ? i = o[1] - o[0] : (i = 0,
            o = [o, o]);
            var s = function(s) {
                var u = dn * ((e + 120) / 360 + t * s)
                  , c = hn(o[0] + i * s, r)
                  , l = (0 !== a ? n[0] + s * a : n) * c * (1 - c) / 2
                  , f = vn(u)
                  , p = gn(u);
                return g(pn([255 * (c + l * (-.14861 * f + 1.78277 * p)), 255 * (c + l * (-.29227 * f - .90649 * p)), 255 * (c + l * (1.97294 * f)), 1]))
            };
            return s.start = function(t) {
                return null == t ? e : (e = t,
                s)
            }
            ,
            s.rotations = function(e) {
                return null == e ? t : (t = e,
                s)
            }
            ,
            s.gamma = function(e) {
                return null == e ? r : (r = e,
                s)
            }
            ,
            s.hue = function(e) {
                return null == e ? n : ("array" === fn(n = e) ? 0 == (a = n[1] - n[0]) && (n = n[1]) : a = 0,
                s)
            }
            ,
            s.lightness = function(e) {
                return null == e ? o : ("array" === fn(e) ? (o = e,
                i = e[1] - e[0]) : (o = [e, e],
                i = 0),
                s)
            }
            ,
            s.scale = function() {
                return g.scale(s)
            }
            ,
            s.hue(n),
            s
        }
        ,
        g.mix = g.interpolate = Ft,
        g.random = function() {
            for (var e = "#", t = 0; t < 6; t++)
                e += "0123456789abcdef".charAt(yn(16 * mn()));
            return new d(e,"hex")
        }
        ,
        g.scale = rn,
        g.analyze = En.analyze,
        g.contrast = function(e, t) {
            e = new d(e),
            t = new d(t);
            var n = e.luminance()
              , r = t.luminance();
            return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
        }
        ,
        g.deltaE = function(e, t, n, r) {
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            e = new d(e),
            t = new d(t);
            for (var o = Array.from(e.lab()), i = o[0], a = o[1], s = o[2], u = Array.from(t.lab()), c = u[0], l = u[1], f = u[2], p = Nn(a * a + s * s), h = Nn(l * l + f * f), g = i < 16 ? .511 : .040975 * i / (1 + .01765 * i), v = .0638 * p / (1 + .0131 * p) + .638, y = p < 1e-6 ? 0 : 180 * Sn(s, a) / Dn; y < 0; )
                y += 360;
            for (; y >= 360; )
                y -= 360;
            var m = y >= 164 && y <= 345 ? .56 + An(.2 * jn(Dn * (y + 168) / 180)) : .36 + An(.4 * jn(Dn * (y + 35) / 180))
              , b = p * p * p * p
              , x = Nn(b / (b + 1900))
              , w = v * (x * m + 1 - x)
              , k = p - h
              , T = a - l
              , C = s - f
              , E = (i - c) / (n * g)
              , N = k / (r * v);
            return Nn(E * E + N * N + (T * T + C * C - k * k) / (w * w))
        }
        ,
        g.distance = function(e, t, n) {
            void 0 === n && (n = "lab"),
            e = new d(e),
            t = new d(t);
            var r = e.get(n)
              , o = t.get(n)
              , i = 0;
            for (var a in r) {
                var s = (r[a] || 0) - (o[a] || 0);
                i += s * s
            }
            return Math.sqrt(i)
        }
        ,
        g.limits = En.limits,
        g.valid = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            try {
                return new (Function.prototype.bind.apply(d, [null].concat(e))),
                !0
            } catch (e) {
                return !1
            }
        }
        ,
        g.scales = Pn,
        g.colors = bt,
        g.brewer = Hn,
        g
    }()
}
, function(e, t, n) {
    n(4),
    e.exports = n(5)
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0)
      , o = n.n(r)
      , i = n(1)
      , a = n.n(i)
      , s = n(2)
      , u = n.n(s);
    window.jQuery = o.a,
    window.$ = o.a,
    o()(document).ready((function() {
        var e, t, n, r, i, s = document.documentElement, c = u.a.scale(["#e699a6", "#e699d2", "#cc99e6", "#9f99e6", "#99bfe6", "#99e6df", "#99e6b3", "#ace699", "#d9e699", "#e6c699"]).colors(1e3), l = 1, f = !0;
        e = function() {
            f ? l < c.length - 1 ? (s.style.setProperty("--color", c[l]),
            l++) : f = !1 : l > 0 ? (s.style.setProperty("--color", c[l]),
            l--) : f = !0
        }
        ,
        t = 10,
        n = window.requestAnimationFrame || function(e, t) {
            window.setTimeout(e, 1e3 / 60)
        }
        ,
        r = (new Date).getTime(),
        (i = {}).value = n((function o() {
            i.value = n(o),
            (new Date).getTime() - r >= t && (e.call(),
            r = (new Date).getTime())
        }
        ));
        new a.a(".js-typer-element",{
            stringsElement: ".js-typer",
            typeSpeed: 60,
            backSpeed: 30,
            loop: !0,
            cursorChar: "_"
        });
        o()("[data-gtm-category]").on("click", (function() {
            !function(e, t, n) {
                ga("send", {
                    hitType: "event",
                    eventCategory: e,
                    eventAction: t,
                    eventLabel: n
                })
            }(o()(this).data("gtm-category"), o()(this).data("gtm-action"), o()(this).data("gtm-label"))
        }
        )),
        console.log("%c ✌", "font-size:10em;")
    }
    ))
}
, function(e, t, n) {}
]);
