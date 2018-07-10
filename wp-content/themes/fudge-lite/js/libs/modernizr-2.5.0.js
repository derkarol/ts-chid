/* Modernizr 2.5 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
window.Modernizr = function (a, b, c) {
    function C(a) {
	j.cssText = a
    }

    function D(a, b) {
	return C(n.join(a + ";") + (b || ""))
    }

    function E(a, b) {
	return typeof a === b
    }

    function F(a, b) {
	return !!~("" + a).indexOf(b)
    }

    function G(a, b) {
	for (var d in a)
	    if (j[a[d]] !== c)
		return b == "pfx" ? a[d] : !0;
	return !1
    }

    function H(a, b, d) {
	for (var e in a) {
	    var f = b[a[e]];
	    if (f !== c)
		return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
	}
	return !1
    }

    function I(a, b, c) {
	var d = a.charAt(0).toUpperCase() + a.substr(1),
		e = (a + " " + p.join(d + " ") + d).split(" ");
	return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
    }

    function K() {
	e.input = function (c) {
	    for (var d = 0, e = c.length; d < e; d++)
		u[c[d]] = c[d] in k;
	    return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
	}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
	    for (var d = 0, e, f, h, i = a.length; d < i; d++)
		k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : /^color$/.test(f) ? (g.appendChild(k), g.offsetWidth, e = k.value != l, g.removeChild(k)) : e = k.value != l)), t[a[d]] = !!e;
	    return t
	}("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.5",
	    e = {},
	    f = !0,
	    g = b.documentElement,
	    h = "modernizr",
	    i = b.createElement(h),
	    j = i.style,
	    k = b.createElement("input"),
	    l = ":)",
	    m = {}.toString,
	    n = " -webkit- -moz- -o- -ms- ".split(" "),
	    o = "Webkit Moz O ms",
	    p = o.split(" "),
	    q = o.toLowerCase().split(" "),
	    r = {
		svg: "http://www.w3.org/2000/svg"
	    },
    s = {},
	    t = {},
	    u = {},
	    v = [],
	    w, x = function (a, c, d, e) {
		var f, i, j, k = b.createElement("div"),
			l = b.body,
			m = l ? l : b.createElement("body");
		if (parseInt(d, 10))
		    while (d--)
			j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), k.appendChild(j);
		return f = ["&#173;", "<style>", a, "</style>"].join(""), k.id = h, m.innerHTML += f, m.appendChild(k), g.appendChild(m), i = c(k, a), l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m), !!i
	    },
	    y = function (b) {
		var c = a.matchMedia || a.msMatchMedia;
		if (c)
		    return c(b).matches;
		var d;
		return x("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
		    d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
		}), d
	    },
	    z = function () {
		function d(d, e) {
		    e = e || b.createElement(a[d] || "div"), d = "on" + d;
		    var f = d in e;
		    return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
		}
		var a = {
		    select: "input",
		    change: "input",
		    submit: "form",
		    reset: "form",
		    error: "img",
		    load: "img",
		    abort: "img"
		};
		return d
	    }(),
	    A = {}.hasOwnProperty,
	    B;
    !E(A, "undefined") && !E(A.call, "undefined") ? B = function (a, b) {
	return A.call(a, b)
    } : B = function (a, b) {
	return b in a && E(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
	var c = this;
	if (typeof c != "function")
	    throw new TypeError;
	var d = slice.call(arguments, 1),
		e = function () {
		    if (this instanceof e) {
			var a = function () {
			};
			a.prototype = c.prototype;
			var f = new a,
				g = c.apply(f, d.concat(slice.call(arguments)));
			return Object(g) === g ? g : f
		    }
		    return c.apply(b, d.concat(slice.call(arguments)))
		};
	return e
    });
    var J = function (c, d) {
	var f = c.join(""),
		g = d.length;
	x(f, function (c, d) {
	    var f = b.styleSheets[b.styleSheets.length - 1],
		    h = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "",
		    i = c.childNodes,
		    j = {};
	    while (g--)
		j[i[g].id] = i[g];
	    e.touch = "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch || (j.touch && j.touch.offsetTop) === 9, e.csstransforms3d = (j.csstransforms3d && j.csstransforms3d.offsetLeft) === 9 && j.csstransforms3d.offsetHeight === 3, e.generatedcontent = (j.generatedcontent && j.generatedcontent.offsetHeight) >= 1, e.fontface = /src/i.test(h) && h.indexOf(d.split(" ")[0]) === 0
	}, g, d)
    }(['@font-face {font-family:"font";src:url("https://")}', ["@media (", n.join("touch-enabled),("), h, ")", "{#touch{top:9px;position:absolute}}"].join(""), ["@media (", n.join("transform-3d),("), h, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""), ['#generatedcontent:after{content:"', l, '";visibility:hidden}'].join("")], ["fontface", "touch", "csstransforms3d", "generatedcontent"]);
    s.flexbox = function () {
	return I("flexOrder")
    }, s["flexbox-legacy"] = function () {
	return I("boxDirection")
    }, s.canvas = function () {
	var a = b.createElement("canvas");
	return !!a.getContext && !!a.getContext("2d")
    }, s.canvastext = function () {
	return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function")
    }, s.webgl = function () {
	try {
	    var d = b.createElement("canvas"),
		    e;
	    e = !(!a.WebGLRenderingContext || !d.getContext("experimental-webgl") && !d.getContext("webgl")), d = c
	} catch (f) {
	    e = !1
	}
	return e
    }, s.touch = function () {
	return e.touch
    }, s.geolocation = function () {
	return !!navigator.geolocation
    }, s.postmessage = function () {
	return !!a.postMessage
    }, s.websqldatabase = function () {
	return !!a.openDatabase
    }, s.indexedDB = function () {
	return !!I("indexedDB", a)
    }, s.hashchange = function () {
	return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function () {
	return !!a.history && !!history.pushState
    }, s.draganddrop = function () {
	var a = b.createElement("div");
	return "draggable" in a || "ondragstart" in a && "ondrop" in a
    }, s.websockets = function () {
	for (var b = -1, c = p.length; ++b < c; )
	    if (a[p[b] + "WebSocket"])
		return !0;
	return "WebSocket" in a
    }, s.rgba = function () {
	return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
    }, s.hsla = function () {
	return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }, s.multiplebgs = function () {
	return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function () {
	return I("backgroundSize")
    }, s.borderimage = function () {
	return I("borderImage")
    }, s.borderradius = function () {
	return I("borderRadius")
    }, s.boxshadow = function () {
	return I("boxShadow")
    }, s.textshadow = function () {
	return b.createElement("div").style.textShadow === ""
    }, s.opacity = function () {
	return D("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function () {
	return I("animationName")
    }, s.csscolumns = function () {
	return I("columnCount")
    }, s.cssgradients = function () {
	var a = "background-image:",
		b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
		c = "linear-gradient(left top,#9f9, white);";
	return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient")
    }, s.cssreflections = function () {
	return I("boxReflect")
    }, s.csstransforms = function () {
	return !!I("transform")
    }, s.csstransforms3d = function () {
	var a = !!I("perspective");
	return a && "webkitPerspective" in g.style && (a = e.csstransforms3d), a
    }, s.csstransitions = function () {
	return I("transition")
    }, s.fontface = function () {
	return e.fontface
    }, s.generatedcontent = function () {
	return e.generatedcontent
    }, s.video = function () {
	var a = b.createElement("video"),
		c = !1;
	try {
	    if (c = !!a.canPlayType)
		c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
	} catch (d) {
	}
	return c
    }, s.audio = function () {
	var a = b.createElement("audio"),
		c = !1;
	try {
	    if (c = !!a.canPlayType)
		c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
	} catch (d) {
	}
	return c
    }, s.localstorage = function () {
	try {
	    return localStorage.setItem(h, h), localStorage.removeItem(h), !0
	} catch (a) {
	    return !1
	}
    }, s.sessionstorage = function () {
	try {
	    return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
	} catch (a) {
	    return !1
	}
    }, s.webworkers = function () {
	return !!a.Worker
    }, s.applicationcache = function () {
	return !!a.applicationCache
    }, s.svg = function () {
	return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    }, s.inlinesvg = function () {
	var a = b.createElement("div");
	return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }, s.smil = function () {
	return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }, s.svgclippaths = function () {
	return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var L in s)
	B(s, L) && (w = L.toLowerCase(), e[w] = s[L](), v.push((e[w] ? "" : "no-") + w));
    return e.input || K(), e.addTest = function (a, b) {
	if (typeof a == "object")
	    for (var d in a)
		B(a, d) && e.addTest(d, a[d]);
	else {
	    a = a.toLowerCase();
	    if (e[a] !== c)
		return e;
	    b = typeof b == "function" ? b() : b, g.className += " " + (b ? "" : "no-") + a, e[a] = b
	}
	return e
    }, C(""), i = k = null,
	    function (a, b) {
		var c = function (a, c, d) {
		    var e, f, g = b.body || (e = c.insertBefore(b.createElement("body"), c.firstChild));
		    return g.insertBefore(a, g.firstChild), a.hidden = !0, f = (d ? d(a, null) : a.currentStyle).display === "none", g.removeChild(a), e && c.removeChild(e), f
		}(b.createElement("a"), b.documentElement, a.getComputedStyle),
			d = function (a) {
			    return a.innerHTML = "<x-element></x-element>", a.childNodes.length === 1
			}(b.createElement("a")),
			e = Date.call,
			f = "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
			g = a.html5 || {};
		g = {
		    elements: typeof g.elements == "object" ? g.elements : (g.elements || f).split(" "),
		    shivCSS: g.shivCSS !== !1,
		    shivMethods: g.shivMethods !== !1,
		    shivDocument: function (a) {
			if (!d && !a.documentShived) {
			    var b = a.createElement,
				    f = a.createDocumentFragment;
			    for (var h = 0, i = g.elements, j = i.length; h < j; ++h)
				e.call(b, a, i[h]);
			    a.createElement = function (c) {
				var d = e.call(b, a, c);
				return g.shivMethods && d.canHaveChildren && !d.xmlns && !d.tagUrn && g.shivDocument(d.document), d
			    }, a.createDocumentFragment = function () {
				var b = e.call(f, a);
				return g.shivMethods ? g.shivDocument(b) : b
			    }
			}
			var k = a.getElementsByTagName("head")[0];
			if (g.shivCSS && !c && k) {
			    var l = a.createElement("p");
			    l.innerHTML = "x<style>article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}</style>", k.insertBefore(l.lastChild, k.firstChild)
			}
			return a.documentShived = !0, a
		    }
		}, g.type = "default", a.html5 = g, g.shivDocument(b)
	    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = y, e.hasEvent = z, e.testProp = function (a) {
	return G([a])
    }, e.testAllProps = I, e.testStyles = x, e.prefixed = function (a, b, c) {
	return b ? I(a, b, c) : I(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
}(this, this.document),
	function (a, b, c) {
	    function C(a) {
		return !a || a == "loaded" || a == "complete" || a == "uninitialized"
	    }

	    function D(a, c, d, g, h, j) {
		var l = b.createElement("script"),
			m;
		g = g || B.errorTimeout, l.src = a;
		for (i in d)
		    l.setAttribute(i, d[i]);
		c = j ? F : c || k, l.onreadystatechange = l.onload = function () {
		    !m && C(l.readyState) && (m = 1, c(), l.onload = l.onreadystatechange = null)
		}, e(function () {
		    m || (m = 1, c(1))
		}, g), h ? l.onload() : f.parentNode.insertBefore(l, f)
	    }

	    function E(a, c, d, g, h, i) {
		var j = b.createElement("link"),
			l, m;
		g = g || B.errorTimeout, c = i ? F : c || k, j.href = a, j.rel = "stylesheet", j.type = "text/css";
		for (m in d)
		    j.setAttribute(m, d[m]);
		h || (f.parentNode.insertBefore(j, f), e(c, 0))
	    }

	    function F() {
		var a = h.shift();
		j = 1, a ? a.t ? e(function () {
		    (a.t == "c" ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
		}, 0) : (a(), F()) : j = 0
	    }

	    function G(a, c, d, g, i, k, l) {
		function s(b) {
		    if (!p && C(o.readyState)) {
			r.r = p = 1, !j && F(), o.onload = o.onreadystatechange = null;
			if (b) {
			    a == "object" && e(function () {
				n.removeChild(o)
			    }, 50);
			    for (var d in y[c])
				y[c].hasOwnProperty(d) && y[c][d].onload()
			}
		    }
		}
		l = l || B.errorTimeout;
		var o = {},
			p = 0,
			q = 0,
			r = {
			    t: d,
			    s: c,
			    e: i,
			    a: k,
			    x: l
			};
		y[c] === 1 && (q = 1, y[c] = [], o = b.createElement(a)), o.src = o.data = c, o.width = o.height = "0", o.onerror = o.onload = o.onreadystatechange = function () {
		    s.call(this, q)
		}, h.splice(g, 0, r), a == "object" && (q || y[c] === 2 ? (n.insertBefore(o, m ? null : f), e(s, l)) : y[c].push(o))
	    }

	    function H(a, b, c, d, e) {
		return j = 0, b = b || "j", v(a) ? G(b == "c" ? s : r, a, b, this.i++, c, d, e) : (h.splice(this.i++, 0, a), h.length == 1 && F()), this
	    }

	    function I() {
		var a = B;
		return a.loader = {
		    load: H,
		    i: 0
		}, a
	    }
	    var d = b.documentElement,
		    e = a.setTimeout,
		    f = b.getElementsByTagName("script")[0],
		    g = {}.toString,
		    h = [],
		    j = 0,
		    k = function () {
		    },
		    l = "MozAppearance" in d.style,
		    m = l && !!b.createRange().compareNode,
		    n = m ? d : f.parentNode,
		    o = a.opera && g.call(a.opera) == "[object Opera]",
		    p = !!b.attachEvent,
		    q = "webkitAppearance" in d.style,
		    r = l ? "object" : "img",
		    s = p ? "script" : r,
		    t = Array.isArray || function (a) {
			return g.call(a) == "[object Array]"
		    },
		    u = function (a) {
			return Object(a) === a
		    },
		    v = function (a) {
			return typeof a == "string"
		    },
		    w = function (a) {
			return g.call(a) == "[object Function]"
		    },
		    x = [],
		    y = {},
		    z = {
			timeout: function (a, b) {
			    return b.length && (a.timeout = b[0]), a
			}
		    },
	    A, B;
	    B = function (a) {
		function f(a) {
		    var b = a.split("!"),
			    c = x.length,
			    d = b.pop(),
			    e = b.length,
			    f = {
				url: d,
				origUrl: d,
				prefixes: b
			    },
		    g, h, i;
		    for (h = 0; h < e; h++)
			i = b[h].split("="), g = z[i.shift()], g && (f = g(f, i));
		    for (h = 0; h < c; h++)
			f = x[h](f);
		    return f
		}

		function g(a) {
		    return a.split(".").pop().split("?").shift()
		}

		function h(a, b, d, e, h) {
		    var i = f(a),
			    j = i.autoCallback,
			    k = g(i.url);
		    if (i.bypass)
			return;
		    b && (b = w(b) ? b : b[a] || b[e] || b[a.split("/").pop().split("?")[0]] || F);
		    if (i.instead)
			return i.instead(a, b, d, e, h);
		    y[i.url] ? i.noexec = !0 : y[i.url] = 1, d.load(i.url, i.forceCSS || !i.forceJS && "css" == g(i.url) ? "c" : c, i.noexec, i.attrs, i.timeout), (w(b) || w(j)) && d.load(function () {
			I(), b && b(i.origUrl, h, e), j && j(i.origUrl, h, e), y[i.url] = 2
		    })
		}

		function i(a, b) {
		    function m(a, d) {
			if (!a)
			    !d && i();
			else if (v(a))
			    d || (f = function () {
				var a = [].slice.call(arguments);
				g.apply(this, a), i()
			    }), h(a, f, b, 0, c);
			else if (u(a)) {
			    j = function () {
				var b = 0,
					c;
				for (c in a)
				    a.hasOwnProperty(c) && b++;
				return b
			    }();
			    for (l in a)
				a.hasOwnProperty(l) && (!d && !--j && (w(f) ? f = function () {
				    var a = [].slice.call(arguments);
				    g.apply(this, a), i()
				} : f[l] = function (a) {
				    return function () {
					var b = [].slice.call(arguments);
					a.apply(this, b), i()
				    }
				}(g[l])), h(a[l], f, b, l, c))
			}
		    }
		    var c = !!a.test,
			    d = c ? a.yep : a.nope,
			    e = a.load || a.both,
			    f = a.callback || k,
			    g = f,
			    i = a.complete || k,
			    j, l;
		    m(d, !!e), e && m(e)
		}
		var b, d, e = this.yepnope.loader;
		if (v(a))
		    h(a, 0, e, 0);
		else if (t(a))
		    for (b = 0; b < a.length; b++)
			d = a[b], v(d) ? h(d, 0, e, 0) : t(d) ? B(d) : u(d) && i(d, e);
		else
		    u(a) && i(a, e)
	    }, B.addPrefix = function (a, b) {
		z[a] = b
	    }, B.addFilter = function (a) {
		x.push(a)
	    }, B.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
		b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
	    }, 0)), a.yepnope = I(), a.yepnope.executeStack = F, a.yepnope.injectJs = D, a.yepnope.injectCss = E
	}(this, this.document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};