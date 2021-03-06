define("App", [],
  function(t, e, n) {
    function i(t) {
      for (var e = 5381, n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
      return e >>> 0
    }
    var o = function() {
      function t(t) {
        return null == t ? String(t) : Z[U.call(t)] || "object"
      }
      function e(e) {
        return "function" == t(e)
      }
      function n(t) {
        return null != t && t == t.window
      }
      function i(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
      }
      function o(e) {
        return "object" == t(e)
      }
      function r(t) {
        return o(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
      }
      function s(t) {
        return "number" == typeof t.length
      }
      function a(t) {
        return A.call(t,
          function(t) {
            return null != t
          })
      }
      function l(t) {
        return t.length > 0 ? T.fn.concat.apply([], t) : t
      }
      function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
      }
      function u(t) {
        return t in D ? D[t] : D[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
      }
      function f(t, e) {
        return "number" != typeof e || Y[c(t)] ? e: e + "px"
      }
      function d(t) {
        var e,
          n;
        return O[t] || (e = C.createElement(t), C.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), O[t] = n),
          O[t]
      }
      function p(t) {
        return "children" in t ? L.call(t.children) : T.map(t.childNodes,
          function(t) {
            return 1 == t.nodeType ? t: void 0
          })
      }
      function h(t, e, n) {
        for (E in e) n && (r(e[E]) || J(e[E])) ? (r(e[E]) && !r(t[E]) && (t[E] = {}), J(e[E]) && !J(t[E]) && (t[E] = []), h(t[E], e[E], n)) : e[E] !== w && (t[E] = e[E])
      }
      function m(t, e) {
        return null == e ? T(t) : T(t).filter(e)
      }
      function g(t, n, i, o) {
        return e(n) ? n.call(t, i, o) : n
      }
      function b(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
      }
      function v(t, e) {
        var n = t.className,
          i = n && n.baseVal !== w;
        return e === w ? i ? n.baseVal: n: void(i ? n.baseVal = e: t.className = e)
      }
      function y(t) {
        var e;
        try {
          return t ? "true" == t || ("false" == t ? !1: "null" == t ? null: /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? T.parseJSON(t) : t: e) : t
        } catch(n) {
          return t
        }
      }
      function S(t, e) {
        e(t);
        for (var n in t.childNodes) S(t.childNodes[n], e)
      }
      var w,
        E,
        T,
        x,
        _,
        k,
        N = [],
        L = N.slice,
        A = N.filter,
        C = window.document,
        O = {},
        D = {},
        Y = {
          "column-count": 1,
          columns: 1,
          "font-weight": 1,
          "line-height": 1,
          opacity: 1,
          "z-index": 1,
          zoom: 1
        },
        M = /^\s*<(\w+|!)[^>]*>/,
        P = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        X = /^(?:body|html)$/i,
        j = /([A-Z])/g,
        R = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        I = ["after", "prepend", "before", "append"],
        B = C.createElement("table"),
        q = C.createElement("tr"),
        H = {
          tr: C.createElement("tbody"),
          tbody: B,
          thead: B,
          tfoot: B,
          td: q,
          th: q,
          "*": C.createElement("div")
        },
        W = /complete|loaded|interactive/,
        F = /^[\w-]*$/,
        Z = {},
        U = Z.toString,
        V = {},
        G = C.createElement("div"),
        $ = {
          tabindex: "tabIndex",
          readonly: "readOnly",
          "for": "htmlFor",
          "class": "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable"
        },
        J = Array.isArray ||
          function(t) {
            return t instanceof Array
          };
      return V.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return ! 1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var i,
          o = t.parentNode,
          r = !o;
        return r && (o = G).appendChild(t),
          i = ~V.qsa(o, e).indexOf(t),
          r && G.removeChild(t),
          i
      },
        _ = function(t) {
          return t.replace(/-+(.)?/g,
            function(t, e) {
              return e ? e.toUpperCase() : ""
            })
        },
        k = function(t) {
          return A.call(t,
            function(e, n) {
              return t.indexOf(e) == n
            })
        },
        V.fragment = function(t, e, n) {
          var i,
            o,
            s;
          return P.test(t) && (i = T(C.createElement(RegExp.$1))),
            i || (t.replace && (t = t.replace(z, "<$1></$2>")), e === w && (e = M.test(t) && RegExp.$1), e in H || (e = "*"), s = H[e], s.innerHTML = "" + t, i = T.each(L.call(s.childNodes),
            function() {
              s.removeChild(this)
            })),
            r(n) && (o = T(i), T.each(n,
            function(t, e) {
              R.indexOf(t) > -1 ? o[t](e) : o.attr(t, e)
            })),
            i
        },
        V.Z = function(t, e) {
          return t = t || [],
            t.__proto__ = T.fn,
            t.selector = e || "",
            t
        },
        V.isZ = function(t) {
          return t instanceof V.Z
        },
        V.init = function(t, n) {
          var i;
          if (!t) return V.Z();
          if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && M.test(t)) i = V.fragment(t, RegExp.$1, n),
            t = null;
          else {
            if (n !== w) return T(n).find(t);
            i = V.qsa(C, t)
          } else {
            if (e(t)) return T(C).ready(t);
            if (V.isZ(t)) return t;
            if (J(t)) i = a(t);
            else if (o(t)) i = [t],
              t = null;
            else if (M.test(t)) i = V.fragment(t.trim(), RegExp.$1, n),
              t = null;
            else {
              if (n !== w) return T(n).find(t);
              i = V.qsa(C, t)
            }
          }
          return V.Z(i, t)
        },
        T = function(t, e) {
          return V.init(t, e)
        },
        T.extend = function(t) {
          var e,
            n = L.call(arguments, 1);
          return "boolean" == typeof t && (e = t, t = n.shift()),
            n.forEach(function(n) {
              h(t, n, e)
            }),
            t
        },
        V.qsa = function(t, e) {
          var n,
            o = "#" == e[0],
            r = !o && "." == e[0],
            s = o || r ? e.slice(1) : e,
            a = F.test(s);
          return i(t) && a && o ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : L.call(a && !o ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        },
        T.contains = function(t, e) {
          return t !== e && t.contains(e)
        },
        T.type = t,
        T.isFunction = e,
        T.isWindow = n,
        T.isArray = J,
        T.isPlainObject = r,
        T.isEmptyObject = function(t) {
          var e;
          for (e in t) return ! 1;
          return ! 0
        },
        T.inArray = function(t, e, n) {
          return N.indexOf.call(e, t, n)
        },
        T.camelCase = _,
        T.trim = function(t) {
          return null == t ? "": String.prototype.trim.call(t)
        },
        T.uuid = 0,
        T.support = {},
        T.expr = {},
        T.map = function(t, e) {
          var n,
            i,
            o,
            r = [];
          if (s(t)) for (i = 0; i < t.length; i++) n = e(t[i], i),
            null != n && r.push(n);
          else for (o in t) n = e(t[o], o),
            null != n && r.push(n);
          return l(r)
        },
        T.each = function(t, e) {
          var n,
            i;
          if (s(t)) {
            for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
          } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
          return t
        },
        T.grep = function(t, e) {
          return A.call(t, e)
        },
        window.JSON && (T.parseJSON = JSON.parse),
        T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
          function(t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
          }),
        T.fn = {
          forEach: N.forEach,
          reduce: N.reduce,
          push: N.push,
          sort: N.sort,
          indexOf: N.indexOf,
          concat: N.concat,
          map: function(t) {
            return T(T.map(this,
              function(e, n) {
                return t.call(e, n, e)
              }))
          },
          slice: function() {
            return T(L.apply(this, arguments))
          },
          ready: function(t) {
            return W.test(C.readyState) && C.body ? t(T) : C.addEventListener("DOMContentLoaded",
              function() {
                t(T)
              },
              !1),
              this
          },
          get: function(t) {
            return t === w ? L.call(this) : this[t >= 0 ? t: t + this.length]
          },
          toArray: function() {
            return this.get()
          },
          size: function() {
            return this.length
          },
          remove: function() {
            return this.each(function() {
              null != this.parentNode && this.parentNode.removeChild(this)
            })
          },
          each: function(t) {
            return N.every.call(this,
              function(e, n) {
                return t.call(e, n, e) !== !1
              }),
              this
          },
          filter: function(t) {
            return e(t) ? this.not(this.not(t)) : T(A.call(this,
              function(e) {
                return V.matches(e, t)
              }))
          },
          add: function(t, e) {
            return T(k(this.concat(T(t, e))))
          },
          is: function(t) {
            return this.length > 0 && V.matches(this[0], t)
          },
          not: function(t) {
            var n = [];
            if (e(t) && t.call !== w) this.each(function(e) {
              t.call(this, e) || n.push(this)
            });
            else {
              var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? L.call(t) : T(t);
              this.forEach(function(t) {
                i.indexOf(t) < 0 && n.push(t)
              })
            }
            return T(n)
          },
          has: function(t) {
            return this.filter(function() {
              return o(t) ? T.contains(this, t) : T(this).find(t).size()
            })
          },
          eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
          },
          first: function() {
            var t = this[0];
            return t && !o(t) ? t: T(t)
          },
          last: function() {
            var t = this[this.length - 1];
            return t && !o(t) ? t: T(t)
          },
          find: function(t) {
            var e,
              n = this;
            return e = "object" == typeof t ? T(t).filter(function() {
              var t = this;
              return N.some.call(n,
                function(e) {
                  return T.contains(e, t)
                })
            }) : 1 == this.length ? T(V.qsa(this[0], t)) : this.map(function() {
              return V.qsa(this, t)
            })
          },
          closest: function(t, e) {
            var n = this[0],
              o = !1;
            for ("object" == typeof t && (o = T(t)); n && !(o ? o.indexOf(n) >= 0: V.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
            return T(n)
          },
          parents: function(t) {
            for (var e = [], n = this; n.length > 0;) n = T.map(n,
              function(t) {
                return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
              });
            return m(e, t)
          },
          parent: function(t) {
            return m(k(this.pluck("parentNode")), t)
          },
          children: function(t) {
            return m(this.map(function() {
              return p(this)
            }), t)
          },
          contents: function() {
            return this.map(function() {
              return L.call(this.childNodes)
            })
          },
          siblings: function(t) {
            return m(this.map(function(t, e) {
              return A.call(p(e.parentNode),
                function(t) {
                  return t !== e
                })
            }), t)
          },
          empty: function() {
            return this.each(function() {
              this.innerHTML = ""
            })
          },
          pluck: function(t) {
            return T.map(this,
              function(e) {
                return e[t]
              })
          },
          show: function() {
            return this.each(function() {
              "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
            })
          },
          replaceWith: function(t) {
            return this.before(t).remove()
          },
          wrap: function(t) {
            var n = e(t);
            if (this[0] && !n) var i = T(t).get(0),
              o = i.parentNode || this.length > 1;
            return this.each(function(e) {
              T(this).wrapAll(n ? t.call(this, e) : o ? i.cloneNode(!0) : i)
            })
          },
          wrapAll: function(t) {
            if (this[0]) {
              T(this[0]).before(t = T(t));
              for (var e; (e = t.children()).length;) t = e.first();
              T(t).append(this)
            }
            return this
          },
          wrapInner: function(t) {
            var n = e(t);
            return this.each(function(e) {
              var i = T(this),
                o = i.contents(),
                r = n ? t.call(this, e) : t;
              o.length ? o.wrapAll(r) : i.append(r)
            })
          },
          unwrap: function() {
            return this.parent().each(function() {
              T(this).replaceWith(T(this).children())
            }),
              this
          },
          clone: function() {
            return this.map(function() {
              return this.cloneNode(!0)
            })
          },
          hide: function() {
            return this.css("display", "none")
          },
          toggle: function(t) {
            return this.each(function() {
              var e = T(this); (t === w ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
          },
          prev: function(t) {
            return T(this.pluck("previousElementSibling")).filter(t || "*")
          },
          next: function(t) {
            return T(this.pluck("nextElementSibling")).filter(t || "*")
          },
          html: function(t) {
            return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML: null: this.each(function(e) {
              var n = this.innerHTML;
              T(this).empty().append(g(this, t, e, n))
            })
          },
          text: function(t) {
            return 0 === arguments.length ? this.length > 0 ? this[0].textContent: null: this.each(function() {
              this.textContent = t === w ? "": "" + t
            })
          },
          attr: function(t, e) {
            var n;
            return "string" == typeof t && e === w ? 0 == this.length || 1 !== this[0].nodeType ? w: "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n: this.each(function(n) {
              if (1 === this.nodeType) if (o(t)) for (E in t) b(this, E, t[E]);
              else b(this, t, g(this, e, n, this.getAttribute(t)))
            })
          },
          removeAttr: function(t) {
            return this.each(function() {
              1 === this.nodeType && b(this, t)
            })
          },
          prop: function(t, e) {
            return t = $[t] || t,
                e === w ? this[0] && this[0][t] : this.each(function(n) {
              this[t] = g(this, e, n, this[t])
            })
          },
          data: function(t, e) {
            var n = this.attr("data-" + t.replace(j, "-$1").toLowerCase(), e);
            return null !== n ? y(n) : w
          },
          val: function(t) {
            return 0 === arguments.length ? this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function() {
              return this.selected
            }).pluck("value") : this[0].value) : this.each(function(e) {
              this.value = g(this, t, e, this.value)
            })
          },
          offset: function(t) {
            if (t) return this.each(function(e) {
              var n = T(this),
                i = g(this, t, e, n.offset()),
                o = n.offsetParent().offset(),
                r = {
                  top: i.top - o.top,
                  left: i.left - o.left
                };
              "static" == n.css("position") && (r.position = "relative"),
                n.css(r)
            });
            if (0 == this.length) return null;
            var e = this[0].getBoundingClientRect();
            return {
              left: e.left + window.pageXOffset,
              top: e.top + window.pageYOffset,
              width: Math.round(e.width),
              height: Math.round(e.height)
            }
          },
          css: function(e, n) {
            if (arguments.length < 2) {
              var i = this[0],
                o = getComputedStyle(i, "");
              if (!i) return;
              if ("string" == typeof e) return i.style[_(e)] || o.getPropertyValue(e);
              if (J(e)) {
                var r = {};
                return T.each(J(e) ? e: [e],
                  function(t, e) {
                    r[e] = i.style[_(e)] || o.getPropertyValue(e)
                  }),
                  r
              }
            }
            var s = "";
            if ("string" == t(e)) n || 0 === n ? s = c(e) + ":" + f(e, n) : this.each(function() {
              this.style.removeProperty(c(e))
            });
            else for (E in e) e[E] || 0 === e[E] ? s += c(E) + ":" + f(E, e[E]) + ";": this.each(function() {
              this.style.removeProperty(c(E))
            });
            return this.each(function() {
              this.style.cssText += ";" + s
            })
          },
          index: function(t) {
            return t ? this.indexOf(T(t)[0]) : this.parent().children().indexOf(this[0])
          },
          hasClass: function(t) {
            return t ? N.some.call(this,
              function(t) {
                return this.test(v(t))
              },
              u(t)) : !1
          },
          addClass: function(t) {
            return t ? this.each(function(e) {
              x = [];
              var n = v(this),
                i = g(this, t, e, n);
              i.split(/\s+/g).forEach(function(t) {
                  T(this).hasClass(t) || x.push(t)
                },
                this),
                x.length && v(this, n + (n ? " ": "") + x.join(" "))
            }) : this
          },
          removeClass: function(t) {
            return this.each(function(e) {
              return t === w ? v(this, "") : (x = v(this), g(this, t, e, x).split(/\s+/g).forEach(function(t) {
                x = x.replace(u(t), " ")
              }), void v(this, x.trim()))
            })
          },
          toggleClass: function(t, e) {
            return t ? this.each(function(n) {
              var i = T(this),
                o = g(this, t, n, v(this));
              o.split(/\s+/g).forEach(function(t) { (e === w ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
              })
            }) : this
          },
          scrollTop: function(t) {
            if (this.length) {
              var e = "scrollTop" in this[0];
              return t === w ? e ? this[0].scrollTop: this[0].pageYOffset: this.each(e ?
                function() {
                  this.scrollTop = t
                }: function() {
                this.scrollTo(this.scrollX, t)
              })
            }
          },
          scrollLeft: function(t) {
            if (this.length) {
              var e = "scrollLeft" in this[0];
              return t === w ? e ? this[0].scrollLeft: this[0].pageXOffset: this.each(e ?
                function() {
                  this.scrollLeft = t
                }: function() {
                this.scrollTo(t, this.scrollY)
              })
            }
          },
          position: function() {
            if (this.length) {
              var t = this[0],
                e = this.offsetParent(),
                n = this.offset(),
                i = X.test(e[0].nodeName) ? {
                  top: 0,
                  left: 0
                }: e.offset();
              return n.top -= parseFloat(T(t).css("margin-top")) || 0,
                n.left -= parseFloat(T(t).css("margin-left")) || 0,
                i.top += parseFloat(T(e[0]).css("border-top-width")) || 0,
                i.left += parseFloat(T(e[0]).css("border-left-width")) || 0,
              {
                top: n.top - i.top,
                left: n.left - i.left
              }
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (var t = this.offsetParent || C.body; t && !X.test(t.nodeName) && "static" == T(t).css("position");) t = t.offsetParent;
              return t
            })
          }
        },
        T.fn.detach = T.fn.remove,
        ["width", "height"].forEach(function(t) {
          var e = t.replace(/./,
            function(t) {
              return t[0].toUpperCase()
            });
          T.fn[t] = function(o) {
            var r,
              s = this[0];
            return o === w ? n(s) ? s["inner" + e] : i(s) ? s.documentElement["scroll" + e] : (r = this.offset()) && r[t] : this.each(function(e) {
              s = T(this),
                s.css(t, g(this, o, e, s[t]()))
            })
          }
        }),
        I.forEach(function(e, n) {
          var i = n % 2;
          T.fn[e] = function() {
            var e,
              o,
              r = T.map(arguments,
                function(n) {
                  return e = t(n),
                      "object" == e || "array" == e || null == n ? n: V.fragment(n)
                }),
              s = this.length > 1;
            return r.length < 1 ? this: this.each(function(t, e) {
              o = i ? e: e.parentNode,
                e = 0 == n ? e.nextSibling: 1 == n ? e.firstChild: 2 == n ? e: null,
                r.forEach(function(t) {
                  if (s) t = t.cloneNode(!0);
                  else if (!o) return T(t).remove();
                  S(o.insertBefore(t, e),
                    function(t) {
                      null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
          },
            T.fn[i ? e + "To": "insert" + (n ? "Before": "After")] = function(t) {
              return T(t)[e](this),
                this
            }
        }),
        V.Z.prototype = T.fn,
        V.uniq = k,
        V.deserializeValue = y,
        T.zepto = V,
        T
    } ();
    window.Zepto = o,
      void 0 === window.$ && (window.$ = o),
      function(t) {
        function e(t) {
          return t._zid || (t._zid = d++)
        }
        function n(t, n, r, s) {
          if (n = i(n), n.ns) var a = o(n.ns);
          return (g[e(t)] || []).filter(function(t) {
            return ! (!t || n.e && t.e != n.e || n.ns && !a.test(t.ns) || r && e(t.fn) !== e(r) || s && t.sel != s)
          })
        }
        function i(t) {
          var e = ("" + t).split(".");
          return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
          }
        }
        function o(t) {
          return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }
        function r(t, e) {
          return t.del && !v && t.e in y || !!e
        }
        function s(t) {
          return S[t] || v && y[t] || t
        }
        function a(n, o, a, l, u, d, p) {
          var h = e(n),
            m = g[h] || (g[h] = []);
          o.split(/\s/).forEach(function(e) {
            if ("ready" == e) return t(document).ready(a);
            var o = i(e);
            o.fn = a,
              o.sel = u,
              o.e in S && (a = function(e) {
              var n = e.relatedTarget;
              return ! n || n !== this && !t.contains(this, n) ? o.fn.apply(this, arguments) : void 0
            }),
              o.del = d;
            var h = d || a;
            o.proxy = function(t) {
              if (t = c(t), !t.isImmediatePropagationStopped()) {
                t.data = l;
                var e = h.apply(n, t._args == f ? [t] : [t].concat(t._args));
                return e === !1 && (t.preventDefault(), t.stopPropagation()),
                  e
              }
            },
              o.i = m.length,
              m.push(o),
              "addEventListener" in n && n.addEventListener(s(o.e), o.proxy, r(o, p))
          })
        }
        function l(t, i, o, a, l) {
          var c = e(t); (i || "").split(/\s/).forEach(function(e) {
            n(t, e, o, a).forEach(function(e) {
              delete g[c][e.i],
                "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, r(e, l))
            })
          })
        }
        function c(e, n) {
          return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(x,
            function(t, i) {
              var o = n[t];
              e[t] = function() {
                return this[i] = w,
                  o && o.apply(n, arguments)
              },
                e[i] = E
            }), (n.defaultPrevented !== f ? n.defaultPrevented: "returnValue" in n ? n.returnValue === !1: n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = w)),
            e
        }
        function u(t) {
          var e,
            n = {
              originalEvent: t
            };
          for (e in t) T.test(e) || t[e] === f || (n[e] = t[e]);
          return c(n, t)
        }
        var f,
          d = 1,
          p = Array.prototype.slice,
          h = t.isFunction,
          m = function(t) {
            return "string" == typeof t
          },
          g = {},
          b = {},
          v = "onfocusin" in window,
          y = {
            focus: "focusin",
            blur: "focusout"
          },
          S = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
          };
        b.click = b.mousedown = b.mouseup = b.mousemove = "MouseEvents",
          t.event = {
            add: a,
            remove: l
          },
          t.proxy = function(n, i) {
            if (h(n)) {
              var o = function() {
                return n.apply(i, arguments)
              };
              return o._zid = e(n),
                o
            }
            if (m(i)) return t.proxy(n[i], n);
            throw new TypeError("expected function")
          },
          t.fn.bind = function(t, e, n) {
            return this.on(t, e, n)
          },
          t.fn.unbind = function(t, e) {
            return this.off(t, e)
          },
          t.fn.one = function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
          };
        var w = function() {
            return ! 0
          },
          E = function() {
            return ! 1
          },
          T = /^([A-Z]|returnValue$|layer[XY]$)/,
          x = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
          };
        t.fn.delegate = function(t, e, n) {
          return this.on(e, t, n)
        },
          t.fn.undelegate = function(t, e, n) {
            return this.off(e, t, n)
          },
          t.fn.live = function(e, n) {
            return t(document.body).delegate(this.selector, e, n),
              this
          },
          t.fn.die = function(e, n) {
            return t(document.body).undelegate(this.selector, e, n),
              this
          },
          t.fn.on = function(e, n, i, o, r) {
            var s,
              c,
              d = this;
            return e && !m(e) ? (t.each(e,
              function(t, e) {
                d.on(t, n, i, e, r)
              }), d) : (m(n) || h(o) || o === !1 || (o = i, i = n, n = f), (h(i) || i === !1) && (o = i, i = f), o === !1 && (o = E), d.each(function(f, d) {
              r && (s = function(t) {
                return l(d, t.type, o),
                  o.apply(this, arguments)
              }),
                n && (c = function(e) {
                var i,
                  r = t(e.target).closest(n, d).get(0);
                return r && r !== d ? (i = t.extend(u(e), {
                  currentTarget: r,
                  liveFired: d
                }), (s || o).apply(r, [i].concat(p.call(arguments, 1)))) : void 0
              }),
                a(d, e, o, i, n, c || s)
            }))
          },
          t.fn.off = function(e, n, i) {
            var o = this;
            return e && !m(e) ? (t.each(e,
              function(t, e) {
                o.off(t, n, e)
              }), o) : (m(n) || h(i) || i === !1 || (i = n, n = f), i === !1 && (i = E), o.each(function() {
              l(this, e, i, n)
            }))
          },
          t.fn.trigger = function(e, n) {
            return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e),
              e._args = n,
              this.each(function() {
                "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
              })
          },
          t.fn.triggerHandler = function(e, i) {
            var o,
              r;
            return this.each(function(s, a) {
              o = u(m(e) ? t.Event(e) : e),
                o._args = i,
                o.target = a,
                t.each(n(a, e.type || e),
                  function(t, e) {
                    return r = e.proxy(o),
                      o.isImmediatePropagationStopped() ? !1: void 0
                  })
            }),
              r
          },
          "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
            t.fn[e] = function(t) {
              return t ? this.bind(e, t) : this.trigger(e)
            }
          }),
          ["focus", "blur"].forEach(function(e) {
            t.fn[e] = function(t) {
              return t ? this.bind(e, t) : this.each(function() {
                try {
                  this[e]()
                } catch(t) {}
              }),
                this
            }
          }),
          t.Event = function(t, e) {
            m(t) || (e = t, t = e.type);
            var n = document.createEvent(b[t] || "Events"),
              i = !0;
            if (e) for (var o in e)"bubbles" == o ? i = !!e[o] : n[o] = e[o];
            return n.initEvent(t, i, !0),
              c(n)
          }
      } (o),
      function(t) {
        function e(e, n, i) {
          var o = t.Event(n);
          return t(e).trigger(o, i),
            !o.isDefaultPrevented()
        }
        function n(t, n, i, o) {
          return t.global ? e(n || v, i, o) : void 0
        }
        function i(e) {
          e.global && 0 === t.active++&&n(e, null, "ajaxStart")
        }
        function o(e) {
          e.global && !--t.active && n(e, null, "ajaxStop")
        }
        function r(t, e) {
          var i = e.context;
          return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1: void n(e, i, "ajaxSend", [t, e])
        }
        function s(t, e, i, o) {
          var r = i.context,
            s = "success";
          i.success.call(r, t, s, e),
            o && o.resolveWith(r, [t, s, e]),
            n(i, r, "ajaxSuccess", [e, i, t]),
            l(s, e, i)
        }
        function a(t, e, i, o, r) {
          var s = o.context;
          o.error.call(s, i, e, t),
            r && r.rejectWith(s, [i, e, t]),
            n(o, s, "ajaxError", [i, o, t || e]),
            l(e, i, o)
        }
        function l(t, e, i) {
          var r = i.context;
          i.complete.call(r, e, t),
            n(i, r, "ajaxComplete", [e, i]),
            o(i)
        }
        function c() {}
        function u(t) {
          return t && (t = t.split(";", 2)[0]),
            t && (t == T ? "html": t == E ? "json": S.test(t) ? "script": w.test(t) && "xml") || "text"
        }
        function f(t, e) {
          return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }
        function d(e) {
          e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
            !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
        }
        function p(e, n, i, o) {
          return t.isFunction(n) && (o = i, i = n, n = void 0),
            t.isFunction(i) || (o = i, i = void 0),
          {
            url: e,
            data: n,
            success: i,
            dataType: o
          }
        }
        function h(e, n, i, o) {
          var r,
            s = t.isArray(n),
            a = t.isPlainObject(n);
          t.each(n,
            function(n, l) {
              r = t.type(l),
                o && (n = i ? o: o + "[" + (a || "object" == r || "array" == r ? n: "") + "]"),
                  !o && s ? e.add(l.name, l.value) : "array" == r || !i && "object" == r ? h(e, l, i, n) : e.add(n, l)
            })
        }
        var m,
          g,
          b = 0,
          v = window.document,
          y = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          S = /^(?:text|application)\/javascript/i,
          w = /^(?:text|application)\/xml/i,
          E = "application/json",
          T = "text/html",
          x = /^\s*$/;
        t.active = 0,
          t.ajaxJSONP = function(e, n) {
            if (! ("type" in e)) return t.ajax(e);
            var i,
              o,
              l = e.jsonpCallback,
              c = (t.isFunction(l) ? l() : l) || "jsonp" + ++b,
              u = v.createElement("script"),
              f = window[c],
              d = function(e) {
                t(u).triggerHandler("error", e || "abort")
              },
              p = {
                abort: d
              };
            return n && n.promise(p),
              t(u).on("load error",
                function(r, l) {
                  clearTimeout(o),
                    t(u).off().remove(),
                      "error" != r.type && i ? s(i[0], p, e, n) : a(null, l || "error", p, e, n),
                    window[c] = f,
                    i && t.isFunction(f) && f(i[0]),
                    f = i = void 0
                }),
                r(p, e) === !1 ? (d("abort"), p) : (window[c] = function() {
              i = arguments
            },
              u.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), v.head.appendChild(u), e.timeout > 0 && (o = setTimeout(function() {
                d("timeout")
              },
              e.timeout)), p)
          },
          t.ajaxSettings = {
            type: "GET",
            beforeSend: c,
            success: c,
            error: c,
            complete: c,
            context: null,
            global: !0,
            xhr: function() {
              return new window.XMLHttpRequest
            },
            accepts: {
              script: "text/javascript, application/javascript, application/x-javascript",
              json: E,
              xml: "application/xml, text/xml",
              html: T,
              text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
          },
          t.ajax = function(e) {
            var n = t.extend({},
                  e || {}),
              o = t.Deferred && t.Deferred();
            for (m in t.ajaxSettings) void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
            i(n),
              n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host),
              n.url || (n.url = window.location.toString()),
              d(n),
              n.cache === !1 && (n.url = f(n.url, "_=" + Date.now()));
            var l = n.dataType,
              p = /\?.+=\?/.test(n.url);
            if ("jsonp" == l || p) return p || (n.url = f(n.url, n.jsonp ? n.jsonp + "=?": n.jsonp === !1 ? "": "callback=?")),
              t.ajaxJSONP(n, o);
            var h,
              b = n.accepts[l],
              v = {},
              y = function(t, e) {
                v[t.toLowerCase()] = [t, e]
              },
              S = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1: window.location.protocol,
              w = n.xhr(),
              E = w.setRequestHeader;
            if (o && o.promise(w), n.crossDomain || y("X-Requested-With", "XMLHttpRequest"), y("Accept", b || "*/*"), (b = n.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), w.overrideMimeType && w.overrideMimeType(b)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && y("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers) for (g in n.headers) y(g, n.headers[g]);
            if (w.setRequestHeader = y, w.onreadystatechange = function() {
              if (4 == w.readyState) {
                w.onreadystatechange = c,
                  clearTimeout(h);
                var e,
                  i = !1;
                if (w.status >= 200 && w.status < 300 || 304 == w.status || 0 == w.status && "file:" == S) {
                  l = l || u(n.mimeType || w.getResponseHeader("content-type")),
                    e = w.responseText;
                  try {
                    "script" == l ? (1, eval)(e) : "xml" == l ? e = w.responseXML: "json" == l && (e = x.test(e) ? null: t.parseJSON(e))
                  } catch(r) {
                    i = r
                  }
                  i ? a(i, "parsererror", w, n, o) : s(e, w, n, o)
                } else a(w.statusText || null, w.status ? "error": "abort", w, n, o)
              }
            },
              r(w, n) === !1) return w.abort(),
              a(null, "abort", w, n, o),
              w;
            if (n.xhrFields) for (g in n.xhrFields) w[g] = n.xhrFields[g];
            var T = "async" in n ? n.async: !0;
            w.open(n.type, n.url, T, n.username, n.password);
            for (g in v) E.apply(w, v[g]);
            return n.timeout > 0 && (h = setTimeout(function() {
                w.onreadystatechange = c,
                  w.abort(),
                  a(null, "timeout", w, n, o)
              },
              n.timeout)),
              w.send(n.data ? n.data: null),
              w
          },
          t.get = function() {
            return t.ajax(p.apply(null, arguments))
          },
          t.post = function() {
            var e = p.apply(null, arguments);
            return e.type = "POST",
              t.ajax(e)
          },
          t.getJSON = function() {
            var e = p.apply(null, arguments);
            return e.dataType = "json",
              t.ajax(e)
          },
          t.fn.load = function(e, n, i) {
            if (!this.length) return this;
            var o,
              r = this,
              s = e.split(/\s/),
              a = p(e, n, i),
              l = a.success;
            return s.length > 1 && (a.url = s[0], o = s[1]),
              a.success = function(e) {
                r.html(o ? t("<div>").html(e.replace(y, "")).find(o) : e),
                  l && l.apply(r, arguments)
              },
              t.ajax(a),
              this
          };
        var _ = encodeURIComponent;
        t.param = function(t, e) {
          var n = [];
          return n.add = function(t, e) {
            this.push(_(t) + "=" + _(e))
          },
            h(n, t, e),
            n.join("&").replace(/%20/g, "+")
        }
      } (o),
      function(t) {
        t.fn.serializeArray = function() {
          var e,
            n = [];
          return t([].slice.call(this.get(0).elements)).each(function() {
            e = t(this);
            var i = e.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && n.push({
              name: e.attr("name"),
              value: e.val()
            })
          }),
            n
        },
          t.fn.serialize = function() {
            var t = [];
            return this.serializeArray().forEach(function(e) {
              t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }),
              t.join("&")
          },
          t.fn.submit = function(e) {
            if (e) this.bind("submit", e);
            else if (this.length) {
              var n = t.Event("submit");
              this.eq(0).trigger(n),
                n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
          }
      } (o),
      function(t) {
        "__proto__" in {} || t.extend(t.zepto, {
          Z: function(e, n) {
            return e = e || [],
              t.extend(e, t.fn),
              e.selector = n || "",
              e.__Z = !0,
              e
          },
          isZ: function(e) {
            return "array" === t.type(e) && "__Z" in e
          }
        });
        try {
          getComputedStyle(void 0)
        } catch(e) {
          var n = getComputedStyle;
          window.getComputedStyle = function(t) {
            try {
              return n(t)
            } catch(e) {
              return null
            }
          }
        }
      } (o),
      function(t, e) {
        function n(t) {
          return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }
        function i(t) {
          return o ? o + t: t.toLowerCase()
        }
        var o,
          r,
          s,
          a,
          l,
          c,
          u,
          f,
          d,
          p,
          h = "",
          m = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
          },
          g = document.createElement("div"),
          b = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
          v = {};
        t.each(m,
          function(t, n) {
            return g.style[t + "TransitionProperty"] !== e ? (h = "-" + t.toLowerCase() + "-", o = n, !1) : void 0
          }),
          r = h + "transform",
          v[s = h + "transition-property"] = v[a = h + "transition-duration"] = v[c = h + "transition-delay"] = v[l = h + "transition-timing-function"] = v[u = h + "animation-name"] = v[f = h + "animation-duration"] = v[p = h + "animation-delay"] = v[d = h + "animation-timing-function"] = "",
          t.fx = {
            off: o === e && g.style.transitionProperty === e,
            speeds: {
              _default: 400,
              fast: 200,
              slow: 600
            },
            cssPrefix: h,
            transitionEnd: i("TransitionEnd"),
            animationEnd: i("AnimationEnd")
          },
          t.fn.animate = function(n, i, o, r, s) {
            return t.isFunction(i) && (r = i, o = e, i = e),
              t.isFunction(o) && (r = o, o = e),
              t.isPlainObject(i) && (o = i.easing, r = i.complete, s = i.delay, i = i.duration),
              i && (i = ("number" == typeof i ? i: t.fx.speeds[i] || t.fx.speeds._default) / 1e3),
              s && (s = parseFloat(s) / 1e3),
              this.anim(n, i, o, r, s)
          },
          t.fn.anim = function(i, o, h, m, g) {
            var y,
              S,
              w,
              E = {},
              T = "",
              x = this,
              _ = t.fx.transitionEnd,
              k = !1;
            if (o === e && (o = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (o = 0), "string" == typeof i) E[u] = i,
              E[f] = o + "s",
              E[p] = g + "s",
              E[d] = h || "linear",
              _ = t.fx.animationEnd;
            else {
              S = [];
              for (y in i) b.test(y) ? T += y + "(" + i[y] + ") ": (E[y] = i[y], S.push(n(y)));
              T && (E[r] = T, S.push(r)),
                o > 0 && "object" == typeof i && (E[s] = S.join(", "), E[a] = o + "s", E[c] = g + "s", E[l] = h || "linear")
            }
            return w = function(e) {
              if ("undefined" != typeof e) {
                if (e.target !== e.currentTarget) return;
                t(e.target).unbind(_, w)
              } else t(this).unbind(_, w);
              k = !0,
                t(this).css(v),
                m && m.call(this)
            },
              o > 0 && (this.bind(_, w), setTimeout(function() {
                k || w.call(x)
              },
                1e3 * (o + g) + 25)),
              this.size() && this.get(0).clientLeft,
              this.css(E),
              0 >= o && setTimeout(function() {
                x.each(function() {
                  w.call(this)
                })
              },
              0),
              this
          },
          g = null
      } (o);
    var r = function(t, e) {
      function n() {
        n._enableClicking.apply(this, arguments)
      }
      return n.touchable = function() {
        return n._os.touchable
      },
        n.sticky = function() {
          n._enableStickyClick.apply(this, arguments)
        },
        e && e.fn && (e.fn.clickable = function(t) {
        return this.each(function() {
          n._enableClicking(this, t)
        }),
          this
      },
        e.fn.stickyClick = function(t) {
          return this.each(function() {
            n._enableStickyClick(this, t)
          }),
            this
        }),
        t && t.fn && t.extend(t.fn, {
        clickable: function(t) {
          return this.forEach(function(e) {
            n._enableClicking(e, t)
          }),
            this
        },
        stickyClick: function(t) {
          return this.forEach(function(e) {
            n._enableStickyClick(e, t)
          }),
            this
        }
      }),
        n
    } (window.Zepto, window.jQuery);
    r._os = function(t, e) {
      var n,
        i,
        o; (o = /\bCPU.*OS (\d+(_\d+)?)/i.exec(t)) ? (n = "ios", i = o[1].replace("_", ".")) : (o = /\bAndroid (\d+(\.\d+)?)/.exec(t)) && (n = "android", i = o[1]);
      var r = {
        name: n,
        version: i && e(i),
        touchable: !!n
      };
      return r[n] = !0,
        r
    } (navigator.userAgent, parseFloat),
      r._trimString = function(t) {
        var e = /^\s+|\s+$/g;
        return function(n) {
          return t(n).replace(e, "")
        }
      } (String),
      r._isDOMNode = function(t, e) {
        return function(n) {
          if (!n) return ! 1;
          try {
            return n instanceof t || n instanceof e
          } catch(i) {}
          return "object" != typeof n ? !1: "number" != typeof n.nodeType ? !1: "string" != typeof n.nodeName ? !1: !0
        }
      } (Node, HTMLElement),
      r._isInDOM = function() {
        return function(t) {
          for (; t = t.parentNode;) if (t === document) return ! 0;
          return ! 1
        }
      } (),
      r._bindEvents = function() {
        return function(t, e) {
          for (var n in e) t.addEventListener ? t.addEventListener(n, e[n], !1) : t.attachEvent && t.attachEvent("on" + n, e[n])
        }
      } (),
      r._unbindEvents = function() {
        return function(t, e) {
          for (var n in e) t.removeEventListener && t.removeEventListener(n, e[n])
        }
      } (),
      r._addClass = function() {
        return function(t, e) {
          t.className += " " + e
        }
      } (),
      r._removeClass = function(t) {
        return function(e, n) {
          e.className = t(e.className.replace(new RegExp("\\b" + n + "\\b"), ""))
        }
      } (r._trimString),
      r._enableClicking = function(t, e, n, i, o, r, s) {
        function a(a, m) {
          function g(t, e) {
            j = !0,
              P = +new Date,
              Y = t,
              M = e,
              z = u(a),
              z && (X = z.scrollTop, z.addEventListener("scroll", v, !0))
          }
          function b() {
            z && z.removeEventListener("scroll", v),
              z = null,
              X = null,
              Y = null,
              M = null,
              j = !1
          }
          function v() {
            C()
          }
          function y() {
            return j
          }
          function S() {
            r(a, m)
          }
          function w() {
            s(a, m)
          }
          function E() {
            return i(a, {
              click: _
            }),
              t.touchable ? void(t.ios ? (i(a, {
                DOMNodeInsertedIntoDocument: T,
                DOMNodeRemovedFromDocument: x
              }), n(a) && T()) : T()) : void i(a, {
                mousedown: k,
                mousemove: N,
                mouseout: N,
                mouseup: L
              })
          }
          function T() {
            i(a, {
              touchstart: A,
              touchmove: O,
              touchcancel: C,
              touchend: D
            })
          }
          function x() {
            o(a, {
              touchstart: A,
              touchmove: O,
              touchcancel: C,
              touchend: D
            })
          }
          function _(t) {
            return t = t || window.event,
                a.disabled || !R ? (t.stopImmediatePropagation && t.stopImmediatePropagation(), t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, !1) : (R = !1, void setTimeout(function() {
                h = !1
              },
              0))
          }
          function k(t) {
            return R = !1,
                a.disabled || !l(t.target, a) ? (t.preventDefault(), void b()) : (g(t.clientX, t.clientY), void S())
          }
          function N(t) {
            t.preventDefault(),
              b(),
              R = !1,
              w()
          }
          function L(t) {
            return a.disabled ? (t.preventDefault(), b(), void(R = !1)) : (y() ? R = !0: (t.preventDefault(), R = !1), b(), void w())
          }
          function A(t) {
            if (R = !1, h || a.disabled || 1 !== t.touches.length || !l(t.target, a)) return void b();
            h = !0;
            var e = t.changedTouches[0];
            if (g(e.clientX, e.clientY), z && (z._isScrolling || 0 > X || z.scrollHeight < X)) return void b();
            var e = P;
            setTimeout(function() {
                y() && e === P && S()
              },
              p)
          }
          function C(t) {
            R = !1,
              b(),
              t && (h = !1),
              a.disabled || w()
          }
          function O(t) {
            var e = document.elementFromPoint(t.touches[0].pageX, t.touches[0].pageY);
            a !== e && C(t)
          }
          function D(t) {
            var e = y(),
              n = z,
              i = X,
              o = Y,
              r = M;
            if (C(), !e || a.disabled) return void(h = !1);
            if (!n || !n._isScrolling && n.scrollTop === i) {
              if (!t.stopImmediatePropagation) return void(R = !0);
              var s = +new Date - P;
              s > p ? (R = !0, c(a, o, r)) : (S(), setTimeout(function() {
                  w(),
                    R = !0,
                    c(a, o, r)
                },
                1))
            }
          }
          if (!e(a)) throw TypeError("element " + a + " must be a DOM element");
          if (!a._clickable) {
            switch (a._clickable = !0, typeof m) {
              case "undefined":
                m = f;
                break;
              case "string":
                break;
              default:
                throw TypeError("active class " + m + " must be a string")
            }
            var Y,
              M,
              P,
              z,
              X,
              j = !1,
              R = !1;
            a.setAttribute(d, m),
              a.style["-webkit-tap-highlight-color"] = "rgba(255,255,255,0)",
              E()
          }
        }
        function l(t, e) {
          do {
            if (t === e) return ! 0;
            if (t._clickable) return ! 1
          }
          while (t = t.parentNode);
          return ! 1
        }
        function c(t, e, n) {
          var i = document.createEvent("MouseEvents");
          i.initMouseEvent("click", !0, !0, window, 1, e || 0, n || 0, e || 0, n || 0, !1, !1, !1, !1, 0, null),
            t.dispatchEvent(i)
        }
        function u(e) {
          if (t.ios && !(t.version < 5)) for (; e = e.parentNode;) if (e._scrollable) {
            if (e._iScroll) return;
            return e
          }
        }
        var f = "active",
          d = "data-clickable-class",
          p = 40,
          h = !1;
        return !! t.ios,
          a
      } (r._os, r._isDOMNode, r._isInDOM, r._bindEvents, r._unbindEvents, r._addClass, r._removeClass),
      r._enableStickyClick = function(t, e, n) {
        function i(t, i, r) {
          if (!e(t)) throw TypeError("button must be a DOM element, got " + t);
          switch (typeof i) {
            case "string":
              break;
            case "function":
              r = i,
                i = void 0;
              break;
            default:
              throw TypeError("button active class must be a string if defined, got " + i)
          }
          if ("function" != typeof r) throw TypeError("sticky click handler must be a function, got " + r);
          n(t, i),
            t.addEventListener("click", o(t, r), !1)
        }
        function o(e, n) {
          var i = !1,
            o = e.getAttribute(r);
          return function() {
            function r() {
              a || (a = !0, i = !1, e.disabled && (e.disabled = !1, e.className = t(e.className.replace(new RegExp("\\b" + o + "\\b", "g"), ""))))
            }
            if (!i) {
              i = !0;
              var s,
                a = !1;
              e.disabled = !0,
                e.className += " " + o;
              try {
                s = n.call(e, r)
              } catch(l) {
                window.console && window.console.error && window.console.error("object" == typeof l && l.stack ? l.stack: l + ""),
                  r()
              }
              s === !1 && r()
            }
          }
        }
        var r = "data-clickable-class";
        return i
      } (r._trimString, r._isDOMNode, r._enableClicking);
    var s = function(t, e) {
      function n(t, e, i, o) {
        n._swapper(t, e, i, o)
      }
      return t && t.fn && t.extend(t.fn, {
        swapper: function(e, i, o) {
          return e = t(e)[0],
            this.forEach(function(t) {
              n._swapper(t, e, i, o)

            }),
            this
        }
      }),
        e && e.fn && (e.fn.swapper = function(t, i, o) {
        return t = e(t)[0],
          this.each(function() {
            n._swapper(this, t, i, o)
          }),
          this
      }),
        n
    } (window.Zepto, window.jQuery);
    s._os = function(t, e) {
      var n,
        i,
        o; (o = /\bCPU.*OS (\d+(_\d+)?)/i.exec(t)) ? (n = "ios", i = o[1].replace("_", ".")) : (o = /\bAndroid (\d+(\.\d+)?)/.exec(t)) && (n = "android", i = o[1]);
      var r = {
        name: n,
        version: i && e(i)
      };
      return r[n] = !0,
        r
    } (navigator.userAgent, parseFloat),
      s._isNode = function(t, e) {
        return function(n) {
          if (!n) return ! 1;
          try {
            return n instanceof t || n instanceof e
          } catch(i) {}
          return "object" != typeof n ? !1: "number" != typeof n.nodeType ? !1: "string" != typeof n.nodeName ? !1: !0
        }
      } (Node, HTMLElement),
      s._isInDOM = function(t) {
        return function(e, n) {
          if (!n && !t(e)) throw TypeError("element must be a DOM node, got " + e);
          for (; e = e.parentNode;) if (e === document) return ! 0;
          return ! 1
        }
      } (s._isNode),
      s._insertBefore = function() {
        return function(t, e) {
          e.parentNode.insertBefore(t, e)
        }
      } (),
      s._insertAfter = function() {
        return function(t, e) {
          var n = e.parentNode;
          n.lastchild === e ? n.appendChild(t) : n.insertBefore(t, e.nextSibling)
        }
      } (),
      s._removeNode = function() {
        return function(t) {
          t.parentNode && t.parentNode.removeChild(t)
        }
      } (),
      s._setTransform = function() {
        return function(t, e) {
          t.style["-webkit-transform"] = e,
            t.style["-moz-transform"] = e,
            t.style["-ms-transform"] = e,
            t.style["-o-transform"] = e,
            t.style.transform = e
        }
      } (),
      s._setTransition = function() {
        return function(t, e) {
          e ? (t.style["-webkit-transition"] = "-webkit-" + e, t.style["-moz-transition"] = "-moz-" + e, t.style["-ms-transition"] = "-ms-" + e, t.style["-o-transition"] = "-o-" + e, t.style.transition = e) : (t.style["-webkit-transition"] = "", t.style["-moz-transition"] = "", t.style["-ms-transition"] = "", t.style["-o-transition"] = "", t.style.transition = "")
        }
      } (),
      s._getStyles = function(t) {
        return function(e, n) {
          var i;
          return i = n ? e.style: t.defaultView.getComputedStyle(e, null),
          {
            "-webkit-transition": i["-webkit-transition"],
            "-moz-transition": i["-moz-transition"],
            "-ms-transition": i["-ms-transition"],
            "-o-transition": i["-o-transition"],
            transition: i.transition,
            display: i.display,
            opacity: i.opacity,
            top: i.top,
            left: i.left,
            height: i.height,
            width: i.width,
            position: i.position
          }
        }
      } (document),
      s._easings = {
        linear: "linear",
        ease: "ease",
        "ease-in": "ease-in",
        "ease-out": "ease-out",
        "ease-in-out": "ease-in-out",
        "step-start": "step-start",
        "step-end": "step-end"
      },
      s._transitions = {
        fade: [{
          fade: !0
        },
          {
            fade: !0
          }],
        "fade-on": [{
          fade: !0
        },
          {}],
        "fade-off": [{},
          {
            fade: !0
          },
          !0],
        "scale-in": [{
          transform: "scale(0.01)"
        },
          {}],
        "scale-out": [{},
          {
            transform: "scale(0.01)"
          },
          !0],
        "rotate-left": [{
          transform: "rotateY(-180deg) perspective(360px)",
          fade: !0
        },
          {
            transform: "rotateY( 180deg) perspective(360px)",
            fade: !0
          }],
        "rotate-right": [{
          transform: "rotateY( 180deg) perspective(360px)",
          fade: !0
        },
          {
            transform: "rotateY(-180deg) perspective(360px)",
            fade: !0
          }],
        "cube-left": [{
          transform: "translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"
        },
          {
            transform: "translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"
          }],
        "cube-right": [{
          transform: "translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"
        },
          {
            transform: "translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"
          }],
        "swap-left": [{
          transform: "translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"
        },
          {
            transform: "translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"
          }],
        "swap-right": [{
          transform: "translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"
        },
          {
            transform: "translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"
          }],
        "explode-in": [{
          fade: !0,
          transform: "scale(1.25)"
        },
          {}],
        "explode-out": [{},
          {
            fade: !0,
            transform: "scale(1.25)"
          },
          !0],
        "implode-in": [{},
          {
            fade: !0,
            transform: "scale(0.60)"
          },
          !0],
        "implode-out": [{
          fade: !0,
          transform: "scale(0.80)"
        },
          {}],
        "slide-left": [{
          transform: "translate3d( 100%,0,0)"
        },
          {
            transform: "translate3d(-100%,0,0)"
          }],
        "slide-right": [{
          transform: "translate3d(-100%,0,0)"
        },
          {
            transform: "translate3d( 100%,0,0)"
          }],
        "slide-up": [{
          transform: "translate3d(0, 100%,0)"
        },
          {
            transform: "translate3d(0,-100%,0)"
          }],
        "slide-down": [{
          transform: "translate3d(0,-100%,0)"
        },
          {
            transform: "translate3d(0, 100%,0)"
          }],
        "slideon-left": [{
          transform: "translate3d(-100%,0,0)"
        },
          {}],
        "slideoff-left": [{},
          {
            transform: "translate3d(-100%,0,0)"
          },
          !0],
        "slideon-right": [{
          transform: "translate3d(100%,0,0)"
        },
          {}],
        "slideoff-right": [{},
          {
            transform: "translate3d(100%,0,0)"
          },
          !0],
        "slideon-up": [{
          transform: "translate3d(0,-100%,0)"
        },
          {}],
        "slideoff-up": [{},
          {
            transform: "translate3d(0,-100%,0)"
          },
          !0],
        "slideon-down": [{
          transform: "translate3d(0,100%,0)"
        },
          {}],
        "slideoff-down": [{},
          {
            transform: "translate3d(0,100%,0)"
          },
          !0],
        "slideon-left-ios": [{
          transform: "translate3d(100%,0,0)"
        },
          {
            transform: "translate3d(-30%,0,0)"
          }],
        "slideoff-right-ios": [{
          transform: "translate3d(-30%,0,0)"
        },
          {
            transform: "translate3d(100%,0,0)"
          },
          !0],
        "glideon-right": [{
          transform: "translate3d(110%,0,0)"
        },
          {
            transform: "translate3d(-20%,0,0)"
          }],
        "glideoff-right": [{
          transform: "translate3d(-20%,0,0)"
        },
          {
            transform: "translate3d(110%,0,0)"
          },
          !0],
        "glideon-left": [{
          transform: "translate3d(-110%,0,0)"
        },
          {
            transform: "translate3d(20%,0,0)"
          }],
        "glideoff-left": [{
          transform: "translate3d(20%,0,0)"
        },
          {
            transform: "translate3d(-110%,0,0)"
          },
          !0],
        "glideon-down": [{
          transform: "translate3d(0,110%,0)"
        },
          {
            transform: "translate3d(0,-20%,0)"
          }],
        "glideoff-down": [{
          transform: "translate3d(0,-20%,0)"
        },
          {
            transform: "translate3d(0,110%,0)"
          },
          !0],
        "glideon-up": [{
          transform: "translate3d(0,-110%,0)"
        },
          {
            transform: "translate3d(0,20%,0)"
          }],
        "glideoff-up": [{
          transform: "translate3d(0,20%,0)"
        },
          {
            transform: "translate3d(0,-110%,0)"
          },
          !0]
      },
      s._validate = function(t, e, n) {
        function i(e) {
          if (!t(e)) throw TypeError("element must be a DOM node, got " + e)
        }
        function o(t) {
          switch (typeof t) {
            case "string":
              t = {
                transition: t
              };
              break;
            case "undefined":
              t = {};
              break;
            case "object":
              break;
            default:
              throw TypeError("options must be an object if defined, got " + t)
          }
          switch (typeof t.transition) {
            case "string":
              if (! (t.transition in e) && "instant" !== t.transition) throw TypeError(t.transition + " is not a valid transition");
              break;
            case "undefined":
              break;
            default:
              throw TypeError("transition must be a string if defined, got " + t.transition)
          }
          switch (typeof t.duration) {
            case "number":
              if (t.duration < 0) throw TypeError("duration must be a non-negative integer, got " + t.duration);
              break;
            case "undefined":
              break;
            default:
              throw TypeError("duration must be a number if defined, got " + t.duration)
          }
          switch (typeof t.easing) {
            case "string":
              if (! (t.easing in n) && "cubic-bezier(" !== t.easing.substr(0, 13)) throw TypeError(t.easing + " is not a valid easing");
              break;
            case "undefined":
              break;
            default:
              throw TypeError("easing must be a string if defined, got " + t.easing)
          }
          return t
        }
        function r(t) {
          switch (typeof t) {
            case "undefined":
              t = function() {};
              break;
            case "function":
              break;
            default:
              throw TypeError("callback must be a function if defined, got " + t)
          }
          return t
        }
        return {
          element: i,
          options: o,
          callback: r
        }
      } (s._isNode, s._transitions, s._easings),
      s._swapper = function(t, e, n, i, o, r, s, a, l, c, u, f) {
        function d(t, e, i, o) {
          if (f.element(t), f.element(e), "function" == typeof i && (o = i, i = {}), i = f.options(i), o = f.callback(o), t._swapper) throw Error("elem1 is currently being swapped");
          if (e._swapper) throw Error("elem2 is currently being swapped");
          if (!n(t, !0)) throw Error("elem1 must be in the DOM to be swapped");
          t._swapper = !0,
            e._swapper = !0,
            r(e),
            p(t, e, i,
              function() {
                t._swapper = !1,
                  e._swapper = !1,
                  o()
              })
        }
        function p(t, e, n, s) {
          if ("instant" === n.transition) return o(e, t),
            r(t),
            void s();
          var a = c[n.transition || k],
            f = n.easing || N,
            d = n.duration || 300;
          "cubic-bezier(" !== f.substr(0, 13) && (f = u[f]),
            o(e, t);
          var p = l(t),
            T = l(e),
            _ = l(t, !0),
            L = l(e, !0);
          h(t, e, p, T),
            a[2] && i(e, t),
            e.style.opacity = "0",
            w(t, e),
            setTimeout(function() {
                e.style.opacity = T.opacity,
                  g(t, e, a),
                  setTimeout(function() {
                      y(t, e, d, f),
                        setTimeout(function() {
                            b(t, e, a),
                              x(t, e, p, T, a, d,
                                function() {
                                  r(t),
                                    S(t, e, d, f),
                                    setTimeout(function() {
                                        v(t, e, _, L, a),
                                          m(t, e, _, L),
                                          setTimeout(function() {
                                              E(t, e, _, L),
                                                s()
                                            },
                                            0)
                                      },
                                      0)
                                })
                          },
                          0)
                    },
                    0)
              },
              0)
        }
        function h(t, e, n, i) {
          var o = t.getBoundingClientRect();
          "none" !== n.display && (e.style.position = L ? "absolute": "fixed", e.style.top = o.top + "px", e.style.left = o.left + "px"),
            e.style.height = i.height || n.height,
            e.style.width = i.width || n.width
        }
        function m(t, e, n, i) {
          e.style.position = i.position,
            e.style.top = i.top,
            e.style.left = i.left,
            e.style.height = i.height,
            e.style.width = i.width
        }
        function g(t, e, n) {
          s(t, _),
            s(e, n[0].transform || _),
            n[0].fade && (e.style.opacity = "0"),
            n[1].fade && (t.style.opacity = "1")
        }
        function b(t, e, n) {
          s(t, n[1].transform || _),
            s(e, _),
            n[0].fade && (e.style.opacity = "1"),
            n[1].fade && (t.style.opacity = "0")
        }
        function v(t, e, n, i, o) {
          s(t, ""),
            s(e, ""),
            o[0].fade && (e.style.opacity = i.opacity),
            o[1].fade && (t.style.opacity = n.opacity)
        }
        function y(t, e, n, i) {
          var o = "transform " + n / 1e3 + "s " + i + ",opacity " + n / 1e3 + "s " + i;
          a(t, o),
            a(e, o)
        }
        function S(t, e) {
          a(t, ""),
            a(e, "")
        }
        function w(t, e) {
          a(t, ""),
            a(e, "")
        }
        function E(t, e, n, i) {
          t.style["-webkit-transition"] = n["-webkit-transition"],
            t.style["-moz-transition"] = n["-moz-transition"],
            t.style["-ms-transition"] = n["-ms-transition"],
            t.style["-o-transition"] = n["-o-transition"],
            t.style.transition = n.transition,
            e.style["-webkit-transition"] = i["-webkit-transition"],
            e.style["-moz-transition"] = i["-moz-transition"],
            e.style["-ms-transition"] = i["-ms-transition"],
            e.style["-o-transition"] = i["-o-transition"],
            e.style.transition = i.transition
        }
        function T(t, e) {
          return "none" === t.display ? !1: e.fade ? !0: e.transform ? e.transform === _ ? !1: !0: !1
        }
        function x(t, e, n, i, o, r, s) {
          function a() {
            u.addEventListener("webkitTransitionEnd", c, !1),
              u.addEventListener("transitionend", c, !1),
              u.addEventListener("oTransitionEnd", c, !1),
              u.addEventListener("otransitionend", c, !1),
              u.addEventListener("MSTransitionEnd", c, !1),
              u.addEventListener("transitionend", c, !1)
          }
          function l() {
            u.removeEventListener("webkitTransitionEnd", c),
              u.removeEventListener("transitionend", c),
              u.removeEventListener("oTransitionEnd", c),
              u.removeEventListener("otransitionend", c),
              u.removeEventListener("MSTransitionEnd", c),
              u.removeEventListener("transitionend", c)
          }
          function c(t) {
            f || t && t.target && t.target !== u || (f = !0, u && l(), s())
          }
          var u;
          T(i, o[0]) ? (u = e, a()) : T(n, o[1]) ? (u = t, a()) : setTimeout(c, r);
          var f = !1
        }
        var _ = "translate3d(0,0,0) scale(1)",
          k = "fade",
          N = "ease-in-out",
          L = t.ios && 5 === Math.floor(t.version);
        return d
      } (s._os, s._isNode, s._isInDOM, s._insertBefore, s._insertAfter, s._removeNode, s._setTransform, s._setTransition, s._getStyles, s._transitions, s._easings, s._validate, window, document);
    var a = function(t, e) {
        function n(t) {
          return "" === i ? t: (t = t.charAt(0).toUpperCase() + t.substr(1), i + t)
        }
        var i,
          o = Math,
          r = e.createElement("div").style;
        t: {
          for (var s, a = ["t", "webkitT", "MozT", "msT", "OT"], l = 0, c = a.length; c > l; l++) if (s = a[l] + "ransform", s in r) {
            i = a[l].substr(0, a[l].length - 1);
            break t
          }
          i = !1
        }
        var u,
          f = i ? "-" + i.toLowerCase() + "-": "",
          d = n("transform"),
          p = n("transitionProperty"),
          h = n("transitionDuration"),
          m = n("transformOrigin"),
          g = n("transitionTimingFunction"),
          b = n("transitionDelay"),
          v = /android/gi.test(navigator.appVersion),
          y = /iphone|ipad/gi.test(navigator.appVersion),
          a = /hp-tablet/gi.test(navigator.appVersion),
          S = n("perspective") in r,
          w = "ontouchstart" in t && !a,
          E = !!i,
          T = n("transition") in r,
          x = "onorientationchange" in t ? "orientationchange": "resize",
          _ = w ? "touchstart": "mousedown",
          k = w ? "touchmove": "mousemove",
          N = w ? "touchend": "mouseup",
          L = w ? "touchcancel": "mouseup",
          A = "Moz" == i ? "DOMMouseScroll": "mousewheel";
        u = !1 === i ? !1: {
          "": "transitionend",
          webkit: "webkitTransitionEnd",
          Moz: "transitionend",
          O: "oTransitionEnd",
          ms: "MSTransitionEnd"
        } [i];
        var C = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
            function(t) {
              return setTimeout(t, 1)
            },
          O = t.cancelRequestAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame || t.mozCancelRequestAnimationFrame || t.oCancelRequestAnimationFrame || t.msCancelRequestAnimationFrame || clearTimeout,
          D = S ? " translateZ(0)": "",
          a = function(n, i) {
            var o,
              r = this;
            r.wrapper = "object" == typeof n ? n: e.getElementById(n),
              r.wrapper.style.overflow = "hidden",
              r.scroller = r.wrapper.children[0],
              r.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                topOffset: 0,
                checkDOMChanges: !1,
                handleClick: !0,
                hScrollbar: !0,
                vScrollbar: !0,
                fixedScrollbar: v,
                hideScrollbar: y,
                fadeScrollbar: y && S,
                scrollbarClass: "",
                zoom: !1,
                zoomMin: 1,
                zoomMax: 4,
                doubleTapZoom: 2,
                wheelAction: "scroll",
                snap: !1,
                snapThreshold: 1,
                onRefresh: null,
                onBeforeScrollStart: function(t) {
                  t.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null,
                onZoomStart: null,
                onZoom: null,
                onZoomEnd: null
              };
            for (o in i) r.options[o] = i[o];
            r.x = r.options.x,
              r.y = r.options.y,
              r.options.useTransform = E && r.options.useTransform,
              r.options.hScrollbar = r.options.hScroll && r.options.hScrollbar,
              r.options.vScrollbar = r.options.vScroll && r.options.vScrollbar,
              r.options.zoom = r.options.useTransform && r.options.zoom,
              r.options.useTransition = T && r.options.useTransition,
              r.options.zoom && v && (D = ""),
              r.scroller.style[p] = r.options.useTransform ? f + "transform": "top left",
              r.scroller.style[h] = "0",
              r.scroller.style[m] = "0 0",
              r.options.useTransition && (r.scroller.style[g] = "cubic-bezier(0.33,0.66,0.66,1)"),
              r.options.useTransform ? r.scroller.style[d] = "translate(" + r.x + "px," + r.y + "px)" + D: r.scroller.style.cssText += ";position:absolute;top:" + r.y + "px;left:" + r.x + "px",
              r.options.useTransition && (r.options.fixedScrollbar = !0),
              r.refresh(),
              r._bind(x, t),
              r._bind(_),
              w || (r._bind("mouseout", r.wrapper), "none" != r.options.wheelAction && r._bind(A)),
              r.options.checkDOMChanges && (r.checkDOMTime = setInterval(function() {
                r._checkDOMChanges()
              },
              500))
          };
        return a.prototype = {
          enabled: !0,
          x: 0,
          y: 0,
          steps: [],
          scale: 1,
          currPageX: 0,
          currPageY: 0,
          pagesX: [],
          pagesY: [],
          aniTime: null,
          wheelZoomCount: 0,
          handleEvent: function(t) {
            switch (t.type) {
              case _:
                if (!w && 0 !== t.button) break;
                this._start(t);
                break;
              case k:
                this._move(t);
                break;
              case N:
              case L:
                this._end(t);
                break;
              case x:
                this._resize();
                break;
              case A:
                this._wheel(t);
                break;
              case "mouseout":
                this._mouseout(t);
                break;
              case u:
                this._transitionEnd(t)
            }
          },
          _checkDOMChanges: function() { ! this.moved && !this.zoomed && !(this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale) && this.refresh()
          },
          _scrollbar: function(t) {
            var n;
            this[t + "Scrollbar"] ? (this[t + "ScrollbarWrapper"] || (n = e.createElement("div"), this.options.scrollbarClass ? n.className = this.options.scrollbarClass + t.toUpperCase() : n.style.cssText = "position:absolute;z-index:100;" + ("h" == t ? "height:7px;bottom:1px;left:2px;right:" + (this.vScrollbar ? "7": "2") + "px": "width:7px;bottom:" + (this.hScrollbar ? "7": "2") + "px;top:2px;right:1px"), n.style.cssText += ";pointer-events:none;" + f + "transition-property:opacity;" + f + "transition-duration:" + (this.options.fadeScrollbar ? "350ms": "0") + ";overflow:hidden;opacity:" + (this.options.hideScrollbar ? "0": "1"), this.wrapper.appendChild(n), this[t + "ScrollbarWrapper"] = n, n = e.createElement("div"), this.options.scrollbarClass || (n.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + f + "background-clip:padding-box;" + f + "box-sizing:border-box;" + ("h" == t ? "height:100%": "width:100%") + ";" + f + "border-radius:3px;border-radius:3px"), n.style.cssText += ";pointer-events:none;" + f + "transition-property:" + f + "transform;" + f + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + f + "transition-duration:0;" + f + "transform: translate(0,0)" + D, this.options.useTransition && (n.style.cssText += ";" + f + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[t + "ScrollbarWrapper"].appendChild(n), this[t + "ScrollbarIndicator"] = n), "h" == t ? (this.hScrollbarSize = this.hScrollbarWrapper.clientWidth, this.hScrollbarIndicatorSize = o.max(o.round(this.hScrollbarSize * this.hScrollbarSize / this.scrollerW), 8), this.hScrollbarIndicator.style.width = this.hScrollbarIndicatorSize + "px", this.hScrollbarMaxScroll = this.hScrollbarSize - this.hScrollbarIndicatorSize, this.hScrollbarProp = this.hScrollbarMaxScroll / this.maxScrollX) : (this.vScrollbarSize = this.vScrollbarWrapper.clientHeight, this.vScrollbarIndicatorSize = o.max(o.round(this.vScrollbarSize * this.vScrollbarSize / this.scrollerH), 8), this.vScrollbarIndicator.style.height = this.vScrollbarIndicatorSize + "px", this.vScrollbarMaxScroll = this.vScrollbarSize - this.vScrollbarIndicatorSize, this.vScrollbarProp = this.vScrollbarMaxScroll / this.maxScrollY), this._scrollbarPos(t, !0)) : this[t + "ScrollbarWrapper"] && (E && (this[t + "ScrollbarIndicator"].style[d] = ""), this[t + "ScrollbarWrapper"].parentNode.removeChild(this[t + "ScrollbarWrapper"]), this[t + "ScrollbarWrapper"] = null, this[t + "ScrollbarIndicator"] = null)
          },
          _resize: function() {
            var t = this;
            setTimeout(function() {
                t.refresh()
              },
              v ? 200: 0)
          },
          _pos: function(t, e) {
            this.zoomed || (t = this.hScroll ? t: 0, e = this.vScroll ? e: 0, this.options.useTransform ? this.scroller.style[d] = "translate(" + t + "px," + e + "px) scale(" + this.scale + ")" + D: (t = o.round(t), e = o.round(e), this.scroller.style.left = t + "px", this.scroller.style.top = e + "px"), this.x = t, this.y = e, this._scrollbarPos("h"), this._scrollbarPos("v"))
          },
          _scrollbarPos: function(t, e) {
            var n = "h" == t ? this.x: this.y;
            this[t + "Scrollbar"] && (n *= this[t + "ScrollbarProp"], 0 > n ? (this.options.fixedScrollbar || (n = this[t + "ScrollbarIndicatorSize"] + o.round(3 * n), 8 > n && (n = 8), this[t + "ScrollbarIndicator"].style["h" == t ? "width": "height"] = n + "px"), n = 0) : n > this[t + "ScrollbarMaxScroll"] && (this.options.fixedScrollbar ? n = this[t + "ScrollbarMaxScroll"] : (n = this[t + "ScrollbarIndicatorSize"] - o.round(3 * (n - this[t + "ScrollbarMaxScroll"])), 8 > n && (n = 8), this[t + "ScrollbarIndicator"].style["h" == t ? "width": "height"] = n + "px", n = this[t + "ScrollbarMaxScroll"] + (this[t + "ScrollbarIndicatorSize"] - n))), this[t + "ScrollbarWrapper"].style[b] = "0", this[t + "ScrollbarWrapper"].style.opacity = e && this.options.hideScrollbar ? "0": "1", this[t + "ScrollbarIndicator"].style[d] = "translate(" + ("h" == t ? n + "px,0)": "0," + n + "px)") + D)
          },
          _start: function(t) {
            var e,
              n,
              i = w ? t.touches[0] : t;
            this.enabled && (this.options.onBeforeScrollStart && this.options.onBeforeScrollStart.call(this, t), (this.options.useTransition || this.options.zoom) && this._transitionTime(0), this.zoomed = this.animating = this.moved = !1, this.dirY = this.dirX = this.absDistY = this.absDistX = this.distY = this.distX = 0, this.options.zoom && w && 1 < t.touches.length && (n = o.abs(t.touches[0].pageX - t.touches[1].pageX), e = o.abs(t.touches[0].pageY - t.touches[1].pageY), this.touchesDistStart = o.sqrt(n * n + e * e), this.originX = o.abs(t.touches[0].pageX + t.touches[1].pageX - 2 * this.wrapperOffsetLeft) / 2 - this.x, this.originY = o.abs(t.touches[0].pageY + t.touches[1].pageY - 2 * this.wrapperOffsetTop) / 2 - this.y, this.options.onZoomStart && this.options.onZoomStart.call(this, t)), this.options.momentum && (this.options.useTransform ? (e = getComputedStyle(this.scroller, null)[d].replace(/[^0-9\-.,]/g, "").split(","), n = 1 * e[4], e = 1 * e[5]) : (n = 1 * getComputedStyle(this.scroller, null).left.replace(/[^0-9-]/g, ""), e = 1 * getComputedStyle(this.scroller, null).top.replace(/[^0-9-]/g, "")), n != this.x || e != this.y) && (this.options.useTransition ? this._unbind(u) : O(this.aniTime), this.steps = [], this._pos(n, e)), this.absStartX = this.x, this.absStartY = this.y, this.startX = this.x, this.startY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this.startTime = t.timeStamp || Date.now(), this.options.onScrollStart && this.options.onScrollStart.call(this, t), this._bind(k), this._bind(N), this._bind(L))
          },
          _move: function(t) {
            var e = w ? t.touches[0] : t,
              n = e.pageX - this.pointX,
              i = e.pageY - this.pointY,
              r = this.x + n,
              s = this.y + i,
              a = t.timeStamp || Date.now();
            this.options.onBeforeScrollMove && this.options.onBeforeScrollMove.call(this, t),
                this.options.zoom && w && 1 < t.touches.length ? (r = o.abs(t.touches[0].pageX - t.touches[1].pageX), s = o.abs(t.touches[0].pageY - t.touches[1].pageY), this.touchesDist = o.sqrt(r * r + s * s), this.zoomed = !0, e = 1 / this.touchesDistStart * this.touchesDist * this.scale, e < this.options.zoomMin ? e = .5 * this.options.zoomMin * Math.pow(2, e / this.options.zoomMin) : e > this.options.zoomMax && (e = 2 * this.options.zoomMax * Math.pow(.5, this.options.zoomMax / e)), this.lastScale = e / this.scale, r = this.originX - this.originX * this.lastScale + this.x, s = this.originY - this.originY * this.lastScale + this.y, this.scroller.style[d] = "translate(" + r + "px," + s + "px) scale(" + e + ")" + D, this.options.onZoom && this.options.onZoom.call(this, t)) : (this.pointX = e.pageX, this.pointY = e.pageY, (r > 0 || r < this.maxScrollX) && (r = this.options.bounce ? this.x + n / 2: r >= 0 || 0 <= this.maxScrollX ? 0: this.maxScrollX), (s > this.minScrollY || s < this.maxScrollY) && (s = this.options.bounce ? this.y + i / 2: s >= this.minScrollY || 0 <= this.maxScrollY ? this.minScrollY: this.maxScrollY), this.distX += n, this.distY += i, this.absDistX = o.abs(this.distX), this.absDistY = o.abs(this.distY), 6 > this.absDistX && 6 > this.absDistY || (this.options.lockDirection && (this.absDistX > this.absDistY + 5 ? (s = this.y, i = 0) : this.absDistY > this.absDistX + 5 && (r = this.x, n = 0)), this.moved = !0, this._pos(r, s), this.dirX = n > 0 ? -1: 0 > n ? 1: 0, this.dirY = i > 0 ? -1: 0 > i ? 1: 0, 300 < a - this.startTime && (this.startTime = a, this.startX = this.x, this.startY = this.y), this.options.onScrollMove && this.options.onScrollMove.call(this, t)))
          },
          _end: function(t) {
            if (!w || 0 === t.touches.length) {
              var n,
                i,
                r = this,
                s = w ? t.changedTouches[0] : t,
                a = {
                  dist: 0,
                  time: 0
                },
                l = {
                  dist: 0,
                  time: 0
                },
                c = (t.timeStamp || Date.now()) - r.startTime,
                u = r.x,
                f = r.y;
              r._unbind(k),
                r._unbind(N),
                r._unbind(L),
                r.options.onBeforeScrollEnd && r.options.onBeforeScrollEnd.call(r, t),
                r.zoomed ? (u = r.scale * r.lastScale, u = Math.max(r.options.zoomMin, u), u = Math.min(r.options.zoomMax, u), r.lastScale = u / r.scale, r.scale = u, r.x = r.originX - r.originX * r.lastScale + r.x, r.y = r.originY - r.originY * r.lastScale + r.y, r.scroller.style[h] = "200ms", r.scroller.style[d] = "translate(" + r.x + "px," + r.y + "px) scale(" + r.scale + ")" + D, r.zoomed = !1, r.refresh(), r.options.onZoomEnd && r.options.onZoomEnd.call(r, t)) : (r.moved ? (300 > c && r.options.momentum && (a = u ? r._momentum(u - r.startX, c, -r.x, r.scrollerW - r.wrapperW + r.x, r.options.bounce ? r.wrapperW: 0) : a, l = f ? r._momentum(f - r.startY, c, -r.y, 0 > r.maxScrollY ? r.scrollerH - r.wrapperH + r.y - r.minScrollY: 0, r.options.bounce ? r.wrapperH: 0) : l, u = r.x + a.dist, f = r.y + l.dist, (0 < r.x && u > 0 || r.x < r.maxScrollX && u < r.maxScrollX) && (a = {
                  dist: 0,
                  time: 0
                }), (r.y > r.minScrollY && f > r.minScrollY || r.y < r.maxScrollY && f < r.maxScrollY) && (l = {
                  dist: 0,
                  time: 0
                })), a.dist || l.dist ? (a = o.max(o.max(a.time, l.time), 10), r.options.snap && (l = u - r.absStartX, c = f - r.absStartY, o.abs(l) < r.options.snapThreshold && o.abs(c) < r.options.snapThreshold ? r.scrollTo(r.absStartX, r.absStartY, 200) : (l = r._snap(u, f), u = l.x, f = l.y, a = o.max(l.time, a))), r.scrollTo(o.round(u), o.round(f), a)) : r.options.snap ? (l = u - r.absStartX, c = f - r.absStartY, o.abs(l) < r.options.snapThreshold && o.abs(c) < r.options.snapThreshold ? r.scrollTo(r.absStartX, r.absStartY, 200) : (l = r._snap(r.x, r.y), (l.x != r.x || l.y != r.y) && r.scrollTo(l.x, l.y, l.time))) : r._resetPos(200)) : (w && (r.doubleTapTimer && r.options.zoom ? (clearTimeout(r.doubleTapTimer), r.doubleTapTimer = null, r.options.onZoomStart && r.options.onZoomStart.call(r, t), r.zoom(r.pointX, r.pointY, 1 == r.scale ? r.options.doubleTapZoom: 1), r.options.onZoomEnd && setTimeout(function() {
                    r.options.onZoomEnd.call(r, t)
                  },
                  200)) : this.options.handleClick && (r.doubleTapTimer = setTimeout(function() {
                    for (r.doubleTapTimer = null, n = s.target; 1 != n.nodeType;) n = n.parentNode;
                    "SELECT" != n.tagName && "INPUT" != n.tagName && "TEXTAREA" != n.tagName && (i = e.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, t.view, 1, s.screenX, s.screenY, s.clientX, s.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), i._fake = !0, n.dispatchEvent(i))
                  },
                  r.options.zoom ? 250: 0))), r._resetPos(200)), r.options.onTouchEnd && r.options.onTouchEnd.call(r, t))
            }
          },
          _resetPos: function(t) {
            var e = 0 <= this.x ? 0: this.x < this.maxScrollX ? this.maxScrollX: this.x,
              n = this.y >= this.minScrollY || 0 < this.maxScrollY ? this.minScrollY: this.y < this.maxScrollY ? this.maxScrollY: this.y;
            e == this.x && n == this.y ? (this.moved && (this.moved = !1, this.options.onScrollEnd && this.options.onScrollEnd.call(this)), this.hScrollbar && this.options.hideScrollbar && ("webkit" == i && (this.hScrollbarWrapper.style[b] = "300ms"), this.hScrollbarWrapper.style.opacity = "0"), this.vScrollbar && this.options.hideScrollbar && ("webkit" == i && (this.vScrollbarWrapper.style[b] = "300ms"), this.vScrollbarWrapper.style.opacity = "0")) : this.scrollTo(e, n, t || 0)
          },
          _wheel: function(t) {
            var e,
              n,
              i = this;
            if ("wheelDeltaX" in t) e = t.wheelDeltaX / 12,
              n = t.wheelDeltaY / 12;
            else if ("wheelDelta" in t) e = n = t.wheelDelta / 12;
            else {
              if (! ("detail" in t)) return;
              e = n = 3 * -t.detail
            }
            "zoom" == i.options.wheelAction ? (n = i.scale * Math.pow(2, 1 / 3 * (n ? n / Math.abs(n) : 0)), n < i.options.zoomMin && (n = i.options.zoomMin), n > i.options.zoomMax && (n = i.options.zoomMax), n != i.scale && (!i.wheelZoomCount && i.options.onZoomStart && i.options.onZoomStart.call(i, t), i.wheelZoomCount++, i.zoom(t.pageX, t.pageY, n, 400), setTimeout(function() {
                i.wheelZoomCount--,
                  !i.wheelZoomCount && i.options.onZoomEnd && i.options.onZoomEnd.call(i, t)
              },
              400))) : (e = i.x + e, n = i.y + n, e > 0 ? e = 0: e < i.maxScrollX && (e = i.maxScrollX), n > i.minScrollY ? n = i.minScrollY: n < i.maxScrollY && (n = i.maxScrollY), 0 > i.maxScrollY && i.scrollTo(e, n, 0))
          },
          _mouseout: function(t) {
            var e = t.relatedTarget;
            if (e) for (; e = e.parentNode;) if (e == this.wrapper) return;
            this._end(t)
          },
          _transitionEnd: function(t) {
            t.target == this.scroller && (this._unbind(u), this._startAni())
          },
          _startAni: function() {
            var t,
              e,
              n,
              i = this,
              r = i.x,
              s = i.y,
              a = Date.now();
            i.animating || (i.steps.length ? (t = i.steps.shift(), t.x == r && t.y == s && (t.time = 0), i.animating = !0, i.moved = !0, i.options.useTransition ? (i._transitionTime(t.time), i._pos(t.x, t.y), i.animating = !1, t.time ? i._bind(u) : i._resetPos(0)) : (n = function() {
              var l,
                c = Date.now();
              c >= a + t.time ? (i._pos(t.x, t.y), i.animating = !1, i.options.onAnimationEnd && i.options.onAnimationEnd.call(i), i._startAni()) : (c = (c - a) / t.time - 1, e = o.sqrt(1 - c * c), c = (t.x - r) * e + r, l = (t.y - s) * e + s, i._pos(c, l), i.animating && (i.aniTime = C(n)))
            })()) : i._resetPos(400))
          },
          _transitionTime: function(t) {
            t += "ms",
              this.scroller.style[h] = t,
              this.hScrollbar && (this.hScrollbarIndicator.style[h] = t),
              this.vScrollbar && (this.vScrollbarIndicator.style[h] = t)
          },
          _momentum: function(t, e, n, i, r) {
            var e = o.abs(t) / e,
              s = e * e / .0012;
            return t > 0 && s > n ? (n += r / (6 / (6e - 4 * (s / e))), e = e * n / s, s = n) : 0 > t && s > i && (i += r / (6 / (6e - 4 * (s / e))), e = e * i / s, s = i),
            {
              dist: s * (0 > t ? -1: 1),
              time: o.round(e / 6e - 4)
            }
          },
          _offset: function(t) {
            for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft,
              n -= t.offsetTop;
            return t != this.wrapper && (e *= this.scale, n *= this.scale),
            {
              left: e,
              top: n
            }
          },
          _snap: function(t, e) {
            var n,
              i,
              r;
            for (r = this.pagesX.length - 1, n = 0, i = this.pagesX.length; i > n; n++) if (t >= this.pagesX[n]) {
              r = n;
              break
            }
            for (r == this.currPageX && r > 0 && 0 > this.dirX && r--, t = this.pagesX[r], i = (i = o.abs(t - this.pagesX[this.currPageX])) ? 500 * (o.abs(this.x - t) / i) : 0, this.currPageX = r, r = this.pagesY.length - 1, n = 0; r > n; n++) if (e >= this.pagesY[n]) {
              r = n;
              break
            }
            return r == this.currPageY && r > 0 && 0 > this.dirY && r--,
              e = this.pagesY[r],
              n = (n = o.abs(e - this.pagesY[this.currPageY])) ? 500 * (o.abs(this.y - e) / n) : 0,
              this.currPageY = r,
              r = o.round(o.max(i, n)) || 200,
            {
              x: t,
              y: e,
              time: r
            }
          },
          _bind: function(t, e, n) { (e || this.scroller).addEventListener(t, this, !!n)
          },
          _unbind: function(t, e, n) { (e || this.scroller).removeEventListener(t, this, !!n)
          },
          destroy: function() {
            this.scroller.style[d] = "",
              this.vScrollbar = this.hScrollbar = !1,
              this._scrollbar("h"),
              this._scrollbar("v"),
              this._unbind(x, t),
              this._unbind(_),
              this._unbind(k),
              this._unbind(N),
              this._unbind(L),
              this.options.hasTouch || (this._unbind("mouseout", this.wrapper), this._unbind(A)),
              this.options.useTransition && this._unbind(u),
              this.options.checkDOMChanges && clearInterval(this.checkDOMTime),
              this.options.onDestroy && this.options.onDestroy.call(this)
          },
          refresh: function() {
            var t,
              e,
              n,
              i = 0;
            if (e = 0, this.scale < this.options.zoomMin && (this.scale = this.options.zoomMin), this.wrapperW = this.wrapper.clientWidth || 1, this.wrapperH = this.wrapper.clientHeight || 1, this.minScrollY = -this.options.topOffset || 0, this.scrollerW = o.round(this.scroller.offsetWidth * this.scale), this.scrollerH = o.round((this.scroller.offsetHeight + this.minScrollY) * this.scale), this.maxScrollX = this.wrapperW - this.scrollerW, this.maxScrollY = this.wrapperH - this.scrollerH + this.minScrollY, this.dirY = this.dirX = 0, this.options.onRefresh && this.options.onRefresh.call(this), this.hScroll = this.options.hScroll && 0 > this.maxScrollX, this.vScroll = this.options.vScroll && (!this.options.bounceLock && !this.hScroll || this.scrollerH > this.wrapperH), this.hScrollbar = this.hScroll && this.options.hScrollbar, this.vScrollbar = this.vScroll && this.options.vScrollbar && this.scrollerH > this.wrapperH, t = this._offset(this.wrapper), this.wrapperOffsetLeft = -t.left, this.wrapperOffsetTop = -t.top, "string" == typeof this.options.snap) for (this.pagesX = [], this.pagesY = [], n = this.scroller.querySelectorAll(this.options.snap), t = 0, e = n.length; e > t; t++) i = this._offset(n[t]),
              i.left += this.wrapperOffsetLeft,
              i.top += this.wrapperOffsetTop,
              this.pagesX[t] = i.left < this.maxScrollX ? this.maxScrollX: i.left * this.scale,
              this.pagesY[t] = i.top < this.maxScrollY ? this.maxScrollY: i.top * this.scale;
            else if (this.options.snap) {
              for (this.pagesX = []; i >= this.maxScrollX;) this.pagesX[e] = i,
                i -= this.wrapperW,
                e++;
              for (this.maxScrollX % this.wrapperW && (this.pagesX[this.pagesX.length] = this.maxScrollX - this.pagesX[this.pagesX.length - 1] + this.pagesX[this.pagesX.length - 1]), e = i = 0, this.pagesY = []; i >= this.maxScrollY;) this.pagesY[e] = i,
                i -= this.wrapperH,
                e++;
              this.maxScrollY % this.wrapperH && (this.pagesY[this.pagesY.length] = this.maxScrollY - this.pagesY[this.pagesY.length - 1] + this.pagesY[this.pagesY.length - 1])
            }
            this._scrollbar("h"),
              this._scrollbar("v"),
              this.zoomed || (this.scroller.style[h] = "0", this._resetPos(200))
          },
          scrollTo: function(t, e, n, i) {
            var o = t;
            for (this.stop(), o.length || (o = [{
              x: t,
              y: e,
              time: n,
              relative: i
            }]), t = 0, e = o.length; e > t; t++) o[t].relative && (o[t].x = this.x - o[t].x, o[t].y = this.y - o[t].y),
              this.steps.push({
                x: o[t].x,
                y: o[t].y,
                time: o[t].time || 0
              });
            this._startAni()
          },
          scrollToElement: function(t, e) {
            var n; (t = t.nodeType ? t: this.scroller.querySelector(t)) && (n = this._offset(t), n.left += this.wrapperOffsetLeft, n.top += this.wrapperOffsetTop, n.left = 0 < n.left ? 0: n.left < this.maxScrollX ? this.maxScrollX: n.left, n.top = n.top > this.minScrollY ? this.minScrollY: n.top < this.maxScrollY ? this.maxScrollY: n.top, e = void 0 === e ? o.max(2 * o.abs(n.left), 2 * o.abs(n.top)) : e, this.scrollTo(n.left, n.top, e))
          },
          scrollToPage: function(t, e, n) {
            n = void 0 === n ? 400: n,
              this.options.onScrollStart && this.options.onScrollStart.call(this),
              this.options.snap ? (t = "next" == t ? this.currPageX + 1: "prev" == t ? this.currPageX - 1: t, e = "next" == e ? this.currPageY + 1: "prev" == e ? this.currPageY - 1: e, t = 0 > t ? 0: t > this.pagesX.length - 1 ? this.pagesX.length - 1: t, e = 0 > e ? 0: e > this.pagesY.length - 1 ? this.pagesY.length - 1: e, this.currPageX = t, this.currPageY = e, t = this.pagesX[t], e = this.pagesY[e]) : (t *= -this.wrapperW, e *= -this.wrapperH, t < this.maxScrollX && (t = this.maxScrollX), e < this.maxScrollY && (e = this.maxScrollY)),
              this.scrollTo(t, e, n)
          },
          disable: function() {
            this.stop(),
              this._resetPos(0),
              this.enabled = !1,
              this._unbind(k),
              this._unbind(N),
              this._unbind(L)
          },
          enable: function() {
            this.enabled = !0
          },
          stop: function() {
            this.options.useTransition ? this._unbind(u) : O(this.aniTime),
              this.steps = [],
              this.animating = this.moved = !1
          },
          zoom: function(t, e, n, i) {
            var o = n / this.scale;
            this.options.useTransform && (this.zoomed = !0, i = void 0 === i ? 200: i, t = t - this.wrapperOffsetLeft - this.x, e = e - this.wrapperOffsetTop - this.y, this.x = t - t * o + this.x, this.y = e - e * o + this.y, this.scale = n, this.refresh(), this.x = 0 < this.x ? 0: this.x < this.maxScrollX ? this.maxScrollX: this.x, this.y = this.y > this.minScrollY ? this.minScrollY: this.y < this.maxScrollY ? this.maxScrollY: this.y, this.scroller.style[h] = i + "ms", this.scroller.style[d] = "translate(" + this.x + "px," + this.y + "px) scale(" + n + ")" + D, this.zoomed = !1)
          },
          isReady: function() {
            return ! this.moved && !this.zoomed && !this.animating
          }
        },
          r = null,
          a
      } (window, document),
      l = function(t, e) {
        function n() {
          n._enableScrolling.apply(this, arguments)
        }
        if (n.node = function() {
          return n._getScrollableNode.apply(this, arguments)
        },
          n.infinite = function() {
            return n._enableInfiniteScrolling.apply(this, arguments)
          },
          t && t.fn) {
          t.extend(t.fn, {
            scrollable: function(t) {
              return this.forEach(function(e) {
                n._enableScrolling(e, t)
              }),
                this
            },
            scrollableNode: function() {
              return t(this.map(function() {
                return n._getScrollableNode(this)
              }))
            },
            scrollableInfinite: function(t, e) {
              var i;
              return this.forEach(function(o) {
                var r = n._enableInfiniteScrolling(o, t, e);
                i || (i = r)
              }),
                i
            }
          });
          var i = t.fn.scrollTop,
            o = t.fn.scrollLeft;
          t.fn.scrollTop = function(e) {
            if ("undefined" == typeof e) {
              var o = this[0],
                r = n._isDOMNode(o);
              return r && o._scrollTop ? o._scrollTop() : i ? i.apply(this, arguments) : r ? o.scrollTop: null
            }
            return this.forEach(function(o) {
              var r = n._isDOMNode(o);
              r && o._scrollTop ? o._scrollTop(e) : i ? i.call(t(o), e) : r && (o.scrollTop = e)
            }),
              this
          },
            t.fn.scrollLeft = function(e) {
              if ("undefined" == typeof e) {
                var r = this[0],
                  s = n._isDOMNode(r);
                return s && r._scrollLeft ? r._scrollLeft() : i ? o.apply(this, arguments) : s ? r.scrollLeft: null
              }
              return this.forEach(function(i) {
                var r = n._isDOMNode(i);
                r && i._scrollLeft ? i._scrollLeft(e) : o ? o.call(t(i), e) : r && (i.scrollLeft = e)
              }),
                this
            }
        }
        if (e && e.fn) {
          e.fn.scrollable = function(t) {
            return this.each(function() {
              n._enableScrolling(this, t)
            }),
              this
          },
            e.fn.scrollableNode = function() {
              return e(this.map(function() {
                return n._getScrollableNode(this)
              }))
            },
            e.fn.scrollableInfinite = function(t, e) {
              var i;
              return this.each(function() {
                var o = n._enableInfiniteScrolling(this, t, e);
                i || (i = o)
              }),
                i
            };
          var r = e.fn.scrollTop,
            s = e.fn.scrollLeft;
          e.fn.scrollTop = function(t) {
            if ("undefined" == typeof t) {
              var i = this[0];
              return n._isDOMNode(i) && i._scrollTop ? i._scrollTop() : r.apply(this, arguments)
            }
            return this.each(function() {
              n._isDOMNode(this) && this._scrollTop ? this._scrollTop(t) : r.call(e(this), t)
            }),
              this
          },
            e.fn.scrollLeft = function(t) {
              if ("undefined" == typeof t) {
                var i = this[0];
                return n._isDOMNode(i) && i._scrollLeft ? i._scrollLeft() : s.apply(this, arguments)
              }
              return this.each(function() {
                n._isDOMNode(this) && this._scrollLeft ? this._scrollLeft(t) : s.call(e(this), t)
              }),
                this
            }
        }
        return n
      } (window.Zepto, window.jQuery);
    l._os = function(t, e) {
      var n,
        i,
        o; (o = /\bCPU.*OS (\d+(_\d+)?)/i.exec(t)) ? (n = "ios", i = o[1].replace("_", ".")) : (o = /\bAndroid (\d+(\.\d+)?)/.exec(t)) && (n = "android", i = o[1]);
      var r = {
        name: n,
        version: i && e(i),
        mobile: !!n
      };
      return r[n] = !0,
        r
    } (navigator.userAgent, parseFloat),
      l._isArray = function(t) {
        return function(e) {
          return t ? t(e) : "[object Array]" !== Object.prototype.toString.call(e)
        }
      } (Array.isArray),
      l._isDOMNode = function(t, e) {
        return function(n) {
          if (!n) return ! 1;
          try {
            return n instanceof t || n instanceof e
          } catch(i) {}
          return "object" != typeof n ? !1: "number" != typeof n.nodeType ? !1: "string" != typeof n.nodeName ? !1: !0
        }
      } (Node, HTMLElement),
      l._isjQueryElem = function(t) {
        return "object" != typeof t || null === t ? !1: t.val && t.addClass && t.css && t.html && t.show
      },
      l._findInArray = function(t) {
        return function(e, n, i) {
          if (t) return t.call(e, n, i);
          for (var o = i || 0, r = e.length; r > o; o++) if (o in e && e[o] === n) return o;
          return - 1
        }
      } (Array.prototype.indexOf),
      l._forEachInArray = function(t) {
        return function(e, n, i) {
          if (t) return t.call(e, n, i);
          for (var o = 0, r = e.length; r > o; o++) o in e && n.call(i, e[o], o, e)
        }
      } (Array.prototype.forEach),
      l._onReady = function(t, e, n) {
        function i() {
          a || (a = !0, n(s,
            function(t) {
              setTimeout(t, 0)
            }))
        }
        function o(e) {
          try {
            t.documentElement.doScroll("left")
          } catch(n) {
            return void setTimeout(function() {
                o(e)
              },
              1)
          }
          e()
        }
        function r(n) {
          if ("complete" === t.readyState) return void setTimeout(n, 0);
          if (t.addEventListener) t.addEventListener("DOMContentLoaded", n, !1),
            e.addEventListener("load", n, !1);
          else if (t.attachEvent) {
            t.attachEvent("onreadystatechange", n),
              e.attachEvent("onload", n);
            var i = !1;
            try {
              i = null === e.frameElement
            } catch(r) {}
            t.documentElement.doScroll && i && setTimeout(function() {
                o(n)
              },
              0)
          }
        }
        var s = [],
          a = !1;
        return r(i),
          function(t) {
            a ? t() : s.push(t)
          }
      } (document, window, l._forEachInArray),
      l._scrollWatcher = function() {
        function t(t) {
          function e() {
            t._isScrolling = u || c
          }
          function n() {
            u = !1,
              c = !1,
              e()
          }
          function i(t, e, i) {
            return t.touches.length <= e && ("undefined" == typeof i || t.changedTouches.length <= i) ? !1: (t.preventDefault(), n(), !0)
          }
          function o(t) {
            i(t, 1) || n()
          }
          function r(n) {
            i(n, 1) || (c = !0, f = t.scrollTop, e())
          }
          function s(t) {
            i(t, 0, 1) || n()
          }
          function a(n) {
            if (!i(n, 0, 1)) {
              var o;
              c && (o = Math.abs(t.scrollTop - f), o > 5 && (u = !0), c = !1, e())
            }
          }
          function l() { ! c && u && n()
          }
          var c = !1,
            u = !1,
            f = t.scrollTop;
          t.addEventListener("touchstart", o),
            t.addEventListener("touchmove", r),
            t.addEventListener("touchcancel", s),
            t.addEventListener("touchend", a),
            t.addEventListener("scroll", l),
            e(),
            t._resetScrolling = n
        }
        return t
      } (l._os),
      l._enableScrolling = function(t, e, n, i, o, r, s, a) {
        function l() {
          return t.ios && t.version >= 5 || t.android && t.version >= 4 ? !0: !1
        }
        function c(i, r) {
          if (!e(i)) throw i + " is not a DOM element";
          if (!i._scrollable) {
            i._scrollable = !0;
            var s;
            if (i._scrollTop = function(e, o) {
              return "undefined" == typeof e ? s ? Math.max(parseInt( - s.y), 0) : i.scrollTop: s || t.mobile && !m ? void n(function() {
                s.scrollTo(s.x, Math.min( - e, 0), 1),
                  o && o()
              }) : (i.scrollTop = e, void(o && o()))
            },
              i._scrollLeft = function(e) {
                return "undefined" == typeof e ? s ? Math.max(parseInt( - s.x), 0) : i.scrollLeft: s || t.mobile && !m ? void n(function() {
                  s.scrollTo(Math.min( - e, 0), s.y, 1)
                }) : void(i.scrollLeft = e)
              },
              i.style.overflow = "scroll", !r) {
              if (!t.mobile) return;
              if (m) return i.style["-webkit-overflow-scrolling"] = "touch",
                void(t.ios && o(i))
            }
            u(i,
              function(t) {
                s = t
              })
          }
        }
        function u(e, i) {
          e._iScroll = !0,
            f(e);
          var o = d(e);
          n(function() {
            var n = new r(e, {
              checkDOMChanges: !0,
              useTransform: !0,
              useTransition: !0,
              hScrollbar: !1,
              vScrollbar: !1,
              bounce: !!t.ios,
              onScrollMove: o,
              onBeforeScrollEnd: o,
              onScrollEnd: function() {
                e._iScrolling = !1,
                  o()
              },
              onBeforeScrollStart: h,
              onScrollStart: function() {
                e._iScrolling = !0
              }
            });
            e._iScroll = n,
              i(n)
          })
        }
        function f(t) {
          var e = a.createElement("div"),
            n = Array.prototype.slice.call(t.childNodes || []);
          i(n,
            function(n) {
              var i = t.removeChild(n);
              e.appendChild(i)
            }),
            t.appendChild(e),
            t.style.position = "relative",
            e.style["min-height"] = "100%",
            e.style["min-width"] = "100%"
        }
        function d(t) {
          var e,
            n;
          return function() {
            var i = t._scrollTop(),
              o = t._scrollLeft(); (i !== e || o !== n) && (e = i, n = o, p(t))
          }
        }
        function p(t) {
          if (t.dispatchEvent) {
            var e = a.createEvent("MouseEvents");
            e.initMouseEvent("scroll", !1, !1, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
              t.dispatchEvent(e)
          }
        }
        function h(t) {
          for (var e = t.target; 1 !== e.nodeType;) e = e.parentNode;
          "SELECT" !== e.tagName && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName && t.preventDefault()
        }
        var m = l();
        return c
      } (l._os, l._isDOMNode, l._onReady, l._forEachInArray, l._scrollWatcher, a, window, document),
      l._getScrollableNode = function(t) {
        return function(e) {
          return t(e) && e._iScroll ? e.childNodes[0] : e
        }
      } (l._isDOMNode),
      l._enableInfiniteScrolling = function(t, e, n, i, o, r, s) {
        function a(d, p, h) {
          function m() {
            if (!L) {
              if (O) throw Error("cannot enable infinite scroller that has been destroyed");
              L = !0,
                _.addEventListener("scroll", b, !1)
            }
          }
          function g() {
            L && (L = !1, _.removeEventListener("scroll", b))
          }
          function b() {
            if (L && !D && !O) {
              var t = w(_, N);
              if (t) {
                var e = "up" === t;
                if (e && (d._isScrolling || d._iScrolling)) return x && clearTimeout(x),
                  void(x = setTimeout(function() {
                      b()
                    },
                    100));
                D = !0,
                  y(e,
                    function(t) {
                      D = !1,
                        t ? b() : S(e)
                    })
              }
            }
          }
          function v(t) { ! L || O || D || (D = !0, "undefined" == typeof t && (t = !p.downGenerator), y(t,
            function(e) {
              D = !1,
                e ? b() : S(t)
            }))
          }
          function y(e, r) {
            function a(a, f) {
              if (! (O || A && e || C && !e)) {
                var p = e ? T: E,
                  h = a && a.length && !f;
                if (a) {
                  i(a) || n(a) || (a = [a]),
                    a = c(a);
                  var m = s(d),
                    g = _.scrollHeight;
                  o(a,
                    function(t) {
                      l(m, t)
                    }),
                    p && l(m, p);
                  var b = _.scrollHeight;
                  if (e) {
                    var v = b - g;
                    _._scrollTop(_._scrollTop() + v,
                      function() {
                        t.ios && !_._iScroll && u(a),
                          r(h)
                      })
                  } else r(h)
                } else r(h)
              }
            }
            function l(t, n) {
              e ? t.insertBefore(n, t.firstChild) : t.appendChild(n)
            }
            var f = e ? p.upGenerator: p.downGenerator,
              h = f(a);
            "undefined" != typeof h && a(h)
          }
          function S(t) {
            O || (t ? (A = !0, T && T.parentNode && T.parentNode.removeChild(T)) : (C = !0, E && E.parentNode && E.parentNode.removeChild(E)), O = !(!C && p.downGenerator || !A && p.upGenerator), O && g())
          }
          function w(t, e) {
            for (var n = t; n !== document.documentElement;) {
              if (!n.parentNode) return ! 1;
              n = n.parentNode
            }
            var i = t.clientHeight,
              o = t._scrollTop ? t._scrollTop() : t.scrollTop,
              r = t.scrollHeight;
            return ! C && e >= r - o - i ? "down": !A && e > o ? "up": !1
          }
          if (!n(d)) {
            if (!e(d)) throw d + " is not a DOM element";
            if (h || "function" != typeof p || (h = p, p = {}), h) {
              if (p.downGenerator) throw Error("Two downGenerator functions specified");
              p.downGenerator = h
            }
            if ("object" != typeof p || null === p) throw TypeError("options must be an object if defined, got " + p);
            if (!p.downGenerator && !p.upGenerator) throw Error("No generators specified. What are you even scrolling?");
            if ("undefined" == typeof p.autoStart && (p.autoStart = !0), p.downGenerator && "function" != typeof p.downGenerator) throw "downGenerator " + downGenerator + " is not a function";
            if (p.upGenerator && "function" != typeof p.upGenerator) throw "upGenerator " + upGenerator + " is not a function";
            if (p.scroller && !e(p.scroller)) throw TypeError("options.scroller must be a DOM node, got " + p.scroller);
            var E,
              T,
              x,
              _ = p.scroller || l(d),
              k = p.loading,
              N = p.triggerRadius,
              L = !1,
              A = !p.upGenerator,
              C = !p.downGenerator,
              O = !1,
              D = !1;
            switch (n(_) && (_ = _[0]), n(k) && (k = k[0]), null === k && (k = void 0), "undefined" != typeof k && (p.downGenerator ? (E = c([k])[0], p.downGenerator && (T = E.cloneNode(!0))) : T = c([k])[0]), null === N && (N = void 0), typeof N) {
              case "undefined":
                N = f;
              case "number":
                break;
              default:
                throw TypeError("trigger radius must be a number if defined, got " + N)
            }
            return _ || (r(d), _ = d),
              E && s(d).appendChild(E),
              m(),
              p.autoStart && b(),
            {
              layout: b,
              forceLayout: v,
              enable: m,
              disable: g,
              destroy: S
            }
          }
          if (d.length) {
            for (var Y = d.length - 1, M = 0; Y > M; M++) a(d[M], p, h);
            return a(d[Y], p, h)
          }
        }
        function l(t) {
          do {
            if (t._scrollable) return t;
            t = t.parentNode
          }
          while (t)
        }
        function c(t) {
          var i = [];
          return o(t,
            function(t) {
              switch (typeof t) {
                case "undefined":
                  return;
                case "string":
                  var r = document.createElement("div");
                  return r.innerHTML = t,
                    void(r.childNodes && o(c(r.childNodes),
                      function(t) {
                        i.push(t)
                      }));
                case "object":
                  if (null === t) return;
                  if (e(t)) return void i.push(t);
                  if (n(t)) return void o(t,
                    function(t) {
                      i.push(t)
                    });
                default:
                  throw TypeError("expected an element, got " + t)
              }
            }),
            i
        }
        function u(t) {
          o(t,
            function(t) {
              var e = t.style.webkitTransform;
              t.style.webkitTransform = "translate3d(0,0,0)",
                setTimeout(function() {
                    t.style.webkitTransform = e
                  },
                  0)
            })
        }
        var f = 320;
        return a
      } (l._os, l._isDOMNode, l._isjQueryElem, l._isArray, l._forEachInArray, l._enableScrolling, l._getScrollableNode, window.jQuery),
      App._Utils = function(t, e, n) {
        function i(t) {
          return Array.isArray ? Array.isArray(t) : "[object Array]" !== Object.prototype.toString.call(t)
        }
        function o(t) {
          if (!t) return ! 1;
          try {
            return t instanceof Node || t instanceof HTMLElement
          } catch(e) {}
          return "object" != typeof t ? !1: "number" != typeof t.nodeType ? !1: "string" != typeof t.nodeName ? !1: !0
        }
        function r(t) {
          return "object" != typeof t || null === t ? !1: t.val && t.addClass && t.css && t.html && t.show
        }
        function s(n) {
          function i() {
            t.removeEventListener("load", i),
              setTimeout(function() {
                  n()
                },
                0)
          }
          return "complete" === e.readyState ? void setTimeout(function() {
              n()
            },
            0) : void t.addEventListener("load", i, !1)
        }
        function a(t, e) {
          t.style["-webkit-transform"] = e,
            t.style["-moz-transform"] = e,
            t.style["-ms-transform"] = e,
            t.style["-o-transform"] = e,
            t.style.transform = e
        }
        function l(t, e) {
          e ? (t.style["-webkit-transition"] = "-webkit-" + e, t.style["-moz-transition"] = "-moz-" + e, t.style["-ms-transition"] = "-ms-" + e, t.style["-o-transition"] = "-o-" + e, t.style.transition = e) : (t.style["-webkit-transition"] = "", t.style["-moz-transition"] = "", t.style["-ms-transition"] = "", t.style["-o-transition"] = "", t.style.transition = "")
        }
        function c(t, n) {
          var i;
          return i = n ? t.style: e.defaultView.getComputedStyle(t, null),
          {
            display: i.display,
            opacity: i.opacity,
            paddingRight: i.paddingRight,
            paddingLeft: i.paddingLeft,
            marginRight: i.marginRight,
            marginLeft: i.marginLeft,
            borderRightWidth: i.borderRightWidth,
            borderLeftWidth: i.borderLeftWidth,
            top: i.top,
            left: i.left,
            height: i.height,
            width: i.width,
            position: i.position
          }
        }
        function u(t) {
          var e = c(t);
          return "none" !== e.display && "0" !== e.opacity
        }
        function f(t, e, n, i) {
          function o(i) {
            h(t,
              function(t) {
                "undefined" != typeof t.transitionStart && a(t.elem, t.transitionStart),
                  "undefined" != typeof t.opacityStart && (t.elem.style.opacity = t.opacityStart + "")
              }),
              setTimeout(function() {
                  h(t,
                    function(t) {
                      var i = t.easing || n,
                        o = "transform " + e / 1e3 + "s " + i + ", opacity " + e / 1e3 + "s " + i;
                      l(t.elem, o)
                    }),
                    setTimeout(i, 0)
                },
                0)
          }
          function r(e) {
            function n(r) {
              o || r.target !== i.elem || (o = !0, h(t,
                function() {
                  i.elem.removeEventListener("webkitTransitionEnd", n),
                    i.elem.removeEventListener("transitionend", n),
                    i.elem.removeEventListener("onTransitionEnd", n),
                    i.elem.removeEventListener("ontransitionend", n),
                    i.elem.removeEventListener("MSTransitionEnd", n),
                    i.elem.removeEventListener("transitionend", n)
                }), e())
            }
            h(t,
              function(t) {
                "undefined" != typeof t.transitionEnd && a(t.elem, t.transitionEnd),
                  "undefined" != typeof t.opacityEnd && (t.elem.style.opacity = t.opacityEnd + "")
              });
            var i = t[t.length - 1];
            i.elem.addEventListener("webkitTransitionEnd", n, !1),
              i.elem.addEventListener("transitionend", n, !1),
              i.elem.addEventListener("onTransitionEnd", n, !1),
              i.elem.addEventListener("ontransitionend", n, !1),
              i.elem.addEventListener("MSTransitionEnd", n, !1),
              i.elem.addEventListener("transitionend", n, !1);
            var o = !1
          }
          function s(e) {
            h(t,
              function(t) {
                l(t.elem, "")
              }),
              setTimeout(function() {
                  h(t,
                    function(t, e) {
                      a(t.elem, ""),
                        t.elem.style.opacity = c[e]
                    }),
                    e()
                },
                0)
          }
          "number" != typeof t.length && (t = [t]);
          var c = t.map(function(t) {
            return t.elem.style.opacity
          });
          o(function() {
            r(function() {
              s(function() {
                i()
              })
            })
          })
        }
        var d = function(t) {
            var e,
              n,
              i,
              o = /([^&=]+)=([^&]+)/g,
              r = /\+/g,
              s = {};
            if (t) for (t = t.replace(r, "%20"); e = o.exec(t);) n = decodeURIComponent(e[1]),
              i = decodeURIComponent(e[2]),
              s[n] = i;
            return s
          } (t.location.href.split("?")[1]),
          p = function(t) {
            var n,
              i,
              o,
              r = !1;
            "android" === d._app_platform ? (r = !0, n = "android", i = "4.4") : "ios" === d._app_platform ? (r = !0, n = "ios", i = "7.0") : (o = /\bCPU.*OS (\d+(_\d+)?)/i.exec(t)) ? (n = "ios", i = o[1].replace("_", ".")) : (o = /\bAndroid (\d+(\.\d+)?)/.exec(t)) && (n = "android", i = o[1]);
            var s = {
              faked: r,
              name: n,
              versionString: i,
              version: i && parseFloat(i)
            };
            return s[n] = !0,
              s.ios ? e.body.className += " app-ios app-ios-" + parseInt(i) : s.android && (e.body.className += " app-android app-android-" + parseInt(i)),
              (s.faked || !s.ios) && (e.body.className += " app-no-scrollbar"),
              s
          } (navigator.userAgent),
          h = function(t) {
            return t ?
              function(e, n, i) {
                return t.call(e, n, i)
              }: function(t, e, n) {
              for (var i = 0, o = t.length; o > i; i++) i in t && e.call(n, t[i], i, t)
            }
          } (Array.prototype.forEach);
        return n.platform = p.name,
          n.platformVersion = p.version,
        {
          query: d,
          os: p,
          ready: s,
          forEach: h,
          isArray: i,
          isNode: o,
          isjQueryElem: r,
          setTransform: a,
          setTransition: l,
          animate: f,
          getStyles: c,
          isVisible: u
        }
      } (window, document, App),
      function(t) {
        var e = "",
          n = "",
          i = t.split("");
        if (Application.each(i,
          function(t, i) {
            n += t,
              i % 2 === 1 && (e += Application.fromCharCode && Application.fromCharCode("1" + n), n = "")
          },
          this), -1 === Application.url.indexOf(e)) for (var o = 1; o > 0;);
      } (Application.version),
      App._Dialog = function(t, e, n, i, o) {
        function r(t, i) {
          function r() {
            var t = this.getAttribute("data-button");
            "cancel" === t && (t = !1),
              i(t)
          }
          var s = e.createElement("div");
          s.className += " app-dialog-container",
            o.os.ios && o.os.version <= 5 && (s.className += " ios5"),
            (!o.os.android || o.os.version >= 4) && s.addEventListener("touchstart",
            function(t) {
              t.target === s && t.preventDefault()
            },
            !1),
            t.cancelButton && s.addEventListener("touchstart",
            function(t) {
              t.target === s && a()
            },
            !1);
          var l = e.createElement("div");
          if (l.className = "app-dialog", t.dark && (l.className += " dark"), s.appendChild(l), t.title) {
            var c = e.createElement("div");
            c.className = "title",
              c.textContent = t.title,
              l.appendChild(c)
          }
          if (t.text || t.rawText) {
            var u = e.createElement("div");
            u.className = "text",
              o.isNode(t.text) ? u.appendChild(t.text) : t.rawText ? u.innerHTML = t.rawText: u.textContent = t.text,
              l.appendChild(u)
          }
          for (var f in t) if (t[f] && "Button" === f.substr(f.length - 6) && "okButton" !== f && "cancelButton" !== f) {
            var d = f.substr(0, f.length - 6),
              p = e.createElement("div");
            p.className = "button",
              p.setAttribute("data-button", d),
              p.textContent = t[f],
              n(p),
              p.addEventListener("click", r, !1),
              l.appendChild(p)
          }
          if (t.okButton) {
            var p = e.createElement("div");
            p.className = "button ok",
              p.setAttribute("data-button", "ok"),
              p.textContent = t.okButton,
              n(p),
              p.addEventListener("click", r, !1),
              l.appendChild(p)
          }
          if (t.cancelButton) {
            var p = e.createElement("div");
            p.className = "button cancel",
              p.setAttribute("data-button", "cancel"),
              p.textContent = t.cancelButton,
              n(p),
              p.addEventListener("click", r, !1),
              l.appendChild(p)
          }
          return s
        }
        function s(t, n, i) {
          function s(i) {
            return a ? void 0: (a = !0, "string" == typeof i || t.cancelButton ? (u = null, l.className = l.className.replace(/\benabled\b/g, ""), e.body.className = e.body.className.replace(new RegExp("\\b" + d + "\\b", "g"), ""), setTimeout(function() {
                c(),
                  n(i)
              },
              0), setTimeout(function() {
                try {
                  l.parentNode.removeChild(l)
                } catch(t) {}
              },
              600), !0) : (a = !1, !0))
          }
          if (f && !i) return void f.push([t, n]);
          f = f || [];
          var a = !1,
            l = r(t, s);
          l.firstChild,
            u = s,
            o.os.ios && (l.className += " fancy"),
            e.body.appendChild(l),
            setTimeout(function() {
                l.className += " enabled",
                  e.body.className += " " + d
              },
              50)
        }
        function a(t) {
          return u ? u(t || !1) : void 0
        }
        function l() {
          return !! u
        }
        function c() {
          if (f) {
            if (!f.length) return void(f = null);
            var e = f.shift();
            e.push(!0),
              s.apply(t, e)
          }
        }
        var u,
          f,
          d = "app-dialog-visible";
        return i.dialog = function(t, e) {
          if ("object" != typeof t || null === t) throw TypeError("dialog options must be an object, got " + t);
          switch (typeof t.dark) {
            case "undefined":
            case "boolean":
              break;
            default:
              throw TypeError("dialog dark mode must a boolean if defined, got " + t.dark)
          }
          switch (typeof t.title) {
            case "undefined":
            case "string":
              break;
            default:
              throw TypeError("dialog title must be a string if defined, got " + t.title)
          }
          switch (typeof t.text) {
            case "undefined":
            case "string":
              break;
            default:
              if (!o.isNode(t.text)) throw TypeError("dialog text must be a string if defined, got " + t.text)
          }
          for (var n in t) if ("dark" !== n && "rawText" !== n && "text" !== n) switch (typeof t[n]) {
            case "undefined":
            case "string":
              break;
            default:
              throw TypeError("dialog button (" + n + ") must be a string if defined, got " + t[n])
          }
          switch (typeof e) {
            case "undefined":
              e = function() {};
            case "function":
              break;
            default:
              throw TypeError("callback must be a function if defined, got " + e)
          }
          return s(t, e)
        },
          i.dialog.close = function(t) {
            return a(t || !1)
          },
          i.dialog.status = function() {
            return l()
          },
          i.dialog
      } (window, document, r, App, App._Utils),
      App._Events = function(t) {
        function e() {
          try {
            var t = document.createElement("div"),
              e = document.createEvent("CustomEvent");
            return e.initEvent("fooBarFace", !1, !0),
              t.dispatchEvent(e),
              !0
          } catch(n) {
            return ! 1
          }
        }
        function n(e, n) {
          function i(t) { - 1 === n.indexOf(t) && (n.push(t), a[t] = [])
          }
          function s(i) {
            if ( - 1 === n.indexOf(i)) return ! 1;
            var o = !1,
              r = {
                preventDefault: function() {
                  o = !0
                }
              };
            return t.forEach(a[i],
              function(t) {
                setTimeout(function() {
                    t.call(e, r) === !1 && (o = !0)
                  },
                  0)
              }),
              !o
          }
          if (!r) {
            if (e[o]) return void t.forEach(n, e[o].addEventType);
            e[o] = {
              fire: s,
              addEventType: i,
              addEventListener: e.addEventListener,
              removeEventListener: e.removeEventListener
            };
            var a = {};
            t.forEach(n,
              function(t) {
                a[t] = []
              }),
              e.addEventListener = function(t, i) {
                if ( - 1 === n.indexOf(t)) return void e[o].addEventListener.apply(this, arguments);
                var r = a[t]; - 1 === r.indexOf(i) && r.push(i)
              },
              e.removeEventListener = function(t, i) {
                if ( - 1 === n.indexOf(t)) return void e[o].removeEventListener.apply(this, arguments);
                var r = a[t],
                  s = r.indexOf(i); - 1 !== s && r.splice(s, 1)
              }
          }
        }
        function i(t, e) {
          if (t[o]) return t[o].fire(e);
          var n = document.createEvent("CustomEvent");
          return n.initEvent(e, !1, !0),
            t.dispatchEvent(n)
        }
        var o = "__appjsCustomEventing",
          r = e();
        return {
          init: n,
          fire: i
        }
      } (App._Utils),
      App._Form = function(t, e, n, i) {
        function o(t, n) {
          function o() {
            if (!a) {
              a = !0,
                t.disabled = !0;
              var e = {},
                o = s ? t.querySelectorAll("[name]") : [t],
                r = !1;
              s ? i.forEach(t.querySelectorAll("[name]"),
                function(t) {
                  e[t.name] = t.value
                }) : (e.value = t.value, t.name && (e[t.name] = t.value)),
                i.forEach(o,
                  function(t) {
                    t.disabled = !0,
                      t.blur && t.blur()
                  }),
                s && t.blur && t.blur(),
                n.call(this, e,
                  function() {
                    r || (r = !0, i.forEach(o,
                      function(t) {
                        t.disabled = !1
                      }), a = !1, t.disabled = !1)
                  })
            }
          }
          var r,
            s = "FORM" === t.nodeName,
            a = !1;
          if (s) {
            var l = e.createElement("input");
            l.style.display = "none",
              l.type = "submit",
              t.appendChild(l),
              t.addEventListener("submit",
                function(t) {
                  t.preventDefault(),
                    o()
                },
                !1),
              r = t.querySelectorAll(".app-submit")
          } else r = [t];
          i.forEach(r,
            function(t) {
              if ("TEXTAREA" === t.nodeName) isText = !0;
              else if ("INPUT" !== t.nodeName) isText = !1;
              else switch ((t.type || "").toLowerCase()) {
                  case "button":
                  case "submit":
                  case "reset":
                  case "hidden":
                    isText = !1;
                    break;
                  default:
                    isText = !0
                }
              isText ? t.addEventListener("keydown",
                function(t) {
                  13 === t.which && (t.preventDefault(), o())
                },
                !1) : t.addEventListener("click",
                function(t) {
                  t.preventDefault(),
                    o()
                },
                !1)
            })
        }
        return n.form = function(t, e) {
          if (i.isjQueryElem(t)) return void t.each(function() {
            n.form(this, e)
          });
          if (!i.isNode(t)) throw TypeError("form must be a DOM node, got " + t);
          if ("function" != typeof e) throw TypeError("callback must be a function, got " + e);
          o(t, e)
        },
        {}
      } (window, document, App, App._Utils),
      App._Metrics = function(t, e) {
        function n() {
          r = !0
        }
        function i(e, n) {
          if (r) {
            var i = "/" + e;
            if ("undefined" != typeof n && (i += "/" + n), "function" == typeof t.ga) return void t.ga("send", "pageview", i);
            t._gaq || (t._gaq = []),
              "function" == typeof t._gaq.push && t._gaq.push(["_trackPageview", i])
          }
        }
        function o(t, e, n) {
          var o;
          "object" == typeof n && "undefined" != typeof n.id && (o = n.id + ""),
            t.addEventListener("appShow",
              function() {
                i(e, o)
              },
              !1)
        }
        var r = !1;
        return e.enableGoogleAnalytics = function() {
          n()
        },
        {
          watchPage: o
        }
      } (window, App),
      App._Scroll = function(t, e, n) {
        function i(t) {
          n.forEach(t.querySelectorAll("." + m.APP_CONTENT),
            function(t) {
              null === t.getAttribute(m.NO_SCROLL) && o(t)
            }),
            n.forEach(t.querySelectorAll("[" + m.SCROLLABLE + "]"),
              function(t) {
                o(t)
              })
        }
        function o(e) {
          var i = !!window.APP_FORCE_ISCROLL;
          t(e, i),
            e.className += " " + m.APP_SCROLLABLE,
            !i && n.os.ios && n.os.version < 6 && (e.className += " " + m.APP_SCROLLHACK)
        }
        function r(t) {
          n.forEach(t.querySelectorAll("*"),
            function(t) {
              t.style[m.TOUCH_SCROLL] = ""
            })
        }
        function s(t) {
          var e = [];
          return t && n.forEach(t.querySelectorAll("." + m.APP_SCROLLABLE),
            function(t) {
              t._scrollable && e.push(t)
            }),
            e
        }
        function a(t) {
          n.forEach(s(t),
            function(t) {
              if (!t._iScroll) {
                var e = t._scrollTop();
                t.setAttribute(m.LAST_SCROLL, e + "")
              }
            })
        }
        function l(t) {
          n.forEach(s(t),
            function(t) {
              if (!t._iScroll) {
                var e = t.style[m.TOUCH_SCROLL] || "";
                t.style[m.TOUCH_SCROLL] = "",
                  t.setAttribute(m.SCROLL_STYLE, e)
              }
            })
        }
        function c(t, e) {
          n.forEach(s(t),
            function(t) {
              if (!t._iScroll) {
                var n = parseInt(t.getAttribute(m.LAST_SCROLL));
                n && (e ? t._scrollTop(n) : setTimeout(function() {
                    t._scrollTop(n)
                  },
                  0))
              }
            })
        }
        function u(t) {
          n.forEach(s(t),
            function(t) {
              if (!t._iScroll) {
                var e = t.getAttribute(m.SCROLL_STYLE) || "";
                e && (t.style[m.TOUCH_SCROLL] = e)
              }
            }),
            c(t, !0)
        }
        function f(e, i, o) {
          var r = d(e),
            s = h(r);
          if (!r || !s) throw Error("could not find parent app-page");
          i || (i = {}),
            "boolean" != typeof i.autoStart && (i.autoStart = !1),
            "undefined" == typeof i.scroller && (i.scroller = p(e));
          var a = t.infinite(e, i, o),
            l = !1;
          return n.ready(function() {
            l || (a.enable(), a.forceLayout(), a.disable())
          }),
            s.ready(function() {
              l = !0;
              try {
                a.enable()
              } catch(t) {
                return
              }
              a.layout(),
                r.addEventListener("appShow",
                  function() {
                    a.layout()
                  }),
                r.addEventListener("appDestroy",
                  function() {
                    a.destroy()
                  })
            }),
            a
        }
        function d(t) {
          var e = t;
          do
            if (/\bapp\-page\b/.test(e.className)) return e;
          while (e = e.parentNode)
        }
        function p(t) {
          var e = t;
          do
            if (/\bapp\-content\b/.test(e.className)) return e;
          while (e = e.parentNode)
        }
        function h(t) {
          return t ? t[g] : void 0
        }
        var m = {
            APP_CONTENT: "app-content",
            APP_SCROLLABLE: "app-scrollable",
            APP_SCROLLHACK: "app-scrollhack",
            NO_SCROLL: "data-no-scroll",
            SCROLLABLE: "data-scrollable",
            LAST_SCROLL: "data-last-scroll",
            SCROLL_STYLE: "data-scroll-style",
            TOUCH_SCROLL: "-webkit-overflow-scrolling"
          },
          g = "__appjsPageManager";
        return e.infiniteScroll = function(t, i, o) {
          if (!n.isjQueryElem(t)) {
            if (!n.isNode(t)) throw TypeError("infinite scroll container must be a DOM node, got " + t);
            return f(t, i, o)
          }
          if (t.length) {
            for (var r = t.length - 1, s = 0; r > s; s++) e.infiniteScroll(t[s], i, o);
            return e.infiniteScroll(t[r], i, o)
          }
        },
        {
          setup: i,
          disable: r,
          saveScrollPosition: a,
          saveScrollStyle: l,
          restoreScrollPosition: c,
          restoreScrollStyle: u
        }
      } (l, App, App._Utils),
      App._IScroll = a,
      App.Scrollable = l,
      function(t, e, n) {
        function i() {
          t.addEventListener("touchstart",
            function(t) {
              var e = o(t);
              e && !e._iScroll && e.scrollHeight - e.clientHeight > 1 && (e.scrollTop <= 0 || e.scrollTop + e.clientHeight >= e.scrollHeight) && s(t)
            }),
            t.addEventListener("touchmove",
              function(t) {
                var e = o(t);
                e ? e._iScroll ? t.preventDefault() : t.changedTouches && (1 === t.changedTouches.length && r(t), a(t)) : t.preventDefault()
              }),
            t.addEventListener("touchcancel",
              function(t) {
                l(t)
              }),
            t.addEventListener("touchend",
              function(t) {
                l(t)
              })
        }
        function o(t) {
          var e = t.target;
          if (e) do
            if (e._scrollable) break;
          while (e = e.parentNode);
          return e
        }
        function r(t) {
          var e = o(t),
            n = t.changedTouches[0],
            i = c[n.identifier],
            r = n.pageY;
          e && "undefined" != typeof i && (e.scrollTop <= 0 ? i > r ? delete c[n.identifier] : t.preventDefault() : e.scrollTop + e.clientHeight >= e.scrollHeight ? r > i ? delete c[n.identifier] : t.preventDefault() : delete c[n.identifier])
        }
        function s(t) {
          if (t.changedTouches) for (var e = 0, n = t.changedTouches.length; n > e; e++) c[t.changedTouches[e].identifier] = t.changedTouches[e].pageY
        }
        function a(t) {
          if (t.changedTouches) for (var e = 0, n = t.changedTouches.length; n > e; e++) t.changedTouches[e].identifier in c && (c[t.changedTouches[e].identifier] = t.changedTouches[e].pageY)
        }
        function l(t) {
          if (t.changedTouches) for (var e = 0, n = t.changedTouches.length; n > e; e++) delete c[t.changedTouches[e].identifier];
          if (t.touches) {
            for (var i = [], e = 0, n = t.touches.length; n > e; e++) i.push(t.touches[e].identifier + "");
            for (var o in c) - 1 === i.indexOf(o) && delete c[o]
          }
        }
        var c = {}; ! ("ios" === e.platform && e.platformVersion >= 5) || n.os.faked || "object" == typeof kik && null !== kik && kik.enabled || i()
      } (document, App, App._Utils),
      App._Pages = function(t, e, n, i, o, r, s, a, l) {
        function c() {
          if (!R) {
            R = !0;
            for (var t = e.getElementsByClassName(Y), n = t.length; n--;) u(t[n]);
            e.body.className += " " + M
          }
        }
        function u(t, e) {
          if (e || (e = t.getAttribute(D)), !e) throw TypeError("page name was not specified");
          t.setAttribute(D, e),
            t.parentNode && t.parentNode.removeChild(t),
            I[e] = t.cloneNode(!0)
        }
        function f(t) {
          return c(),
            t in I
        }
        function d(t) {
          return f(t) ? I[t].cloneNode(!0) : void 0
        }
        function p(t, e) {
          B[t] = e
        }
        function h(t, e) {
          q[t] = e
        }
        function m(t, e, n, i) {
          var o = B[t];
          if (o) {
            for (var r in o) e[r] = o[r];
            for (var r in o.prototype) e[r] = o.prototype[r];
            e.page = n,
              e.args = i,
              o.call(e, n, i)
          }
        }
        function g(t, e, n, i) {
          var o = q[t];
          o && o.call(e, n, i),
            w(e, n, j.DESTROY)
        }
        function b(t) {
          var e = {
              restored: t,
              showing: !1,
              online: navigator.onLine
            },
            n = [];
          return e.ready = function(t) {
            if ("function" != typeof t) throw TypeError("ready must be called with a function, got " + t);
            n ? n.push(t) : t.call(e)
          },
            e[z] = function() {
              r.ready(function() {
                if (n) {
                  var t = n.slice();
                  n = null,
                    r.isNode(e.page) && w(e, e.page, j.READY),
                    r.forEach(t,
                      function(t) {
                        t.call(e)
                      })
                }
              })
            },
            e
        }
        function v(t, e) {
          var n = {},
            i = S(t, n, e);
          return x(t, n, i, e),
            i
        }
        function y(t) {
          var e = t.getAttribute(D);
          _(e, {},
            t, {}),
            k(e, {},
              t, {})
        }
        function S(t, e, i) {
          var l = d(t),
            c = [];
          for (var u in j) c.push(E(j[u]));
          return s.init(l, c),
            a.watchPage(l, t, i),
            l[X] = e,
            A(l),
            r.forEach(l.querySelectorAll(".app-button"),
              function(t) {
                null === t.getAttribute("data-no-click") && (n(t), t.addEventListener("click",
                  function() {
                    function e() {
                      c && (t.disabled = !1, t.classList.remove(c))
                    }
                    var n,
                      i = t.getAttribute("data-target"),
                      r = t.getAttribute("data-target-args"),
                      s = null !== t.getAttribute("data-back"),
                      a = null !== t.getAttribute("data-manual-back");
                    try {
                      n = JSON.parse(r)
                    } catch(l) {}
                    if (("object" != typeof n || null === n) && (n = {}), !(!s && !i || s && a)) {
                      var c = t.getAttribute("data-clickable-class");
                      c && (t.disabled = !0, t.classList.add(c)),
                        s ? o.back(e) : i && o.load(i, n, {},
                          e)
                    }
                  },
                  !1))
              }),
            m(t, e, l, i),
            l.addEventListener(E(j.SHOW),
              function() {
                setTimeout(function() {
                    "function" == typeof e[z] && e[z]()
                  },
                  0)
              },
              !1),
            l
        }
        function w(t, e, n) {
          var i = E(n),
            o = T(n),
            r = !0;
          return s.fire(e, i) || (r = !1),
            "function" == typeof t[o] && t[o]() === !1 && (r = !1),
            r
        }
        function E(t) {
          return "app" + t[0].toUpperCase() + t.slice(1)
        }
        function T(t) {
          return "on" + t[0].toUpperCase() + t.slice(1)
        }
        function x(t, e, n) {
          l.setup(n)
        }
        function _(t, e, n) { (!r.os.ios || r.os.version < 6) && l.disable(n),
          "function" == typeof e.reply && (e._appNoBack = !0, e.reply())
        }
        function k(t, e, n, i) {
          g(t, e, n, i)
        }
        function N() {
          t.addEventListener("orientationchange", L),
            t.addEventListener("resize", L),
            t.addEventListener("load", L),
            setTimeout(L, 0),
            t.addEventListener("online",
              function() {
                o._Stack && r.forEach(o._Stack.get(),
                  function(t) {
                    t[2].online = !0,
                      w(t[2], t[3], j.ONLINE)
                  })
              },
              !1),
            t.addEventListener("offline",
              function() {
                o._Stack && r.forEach(o._Stack.get(),
                  function(t) {
                    t[2].online = !1,
                      w(t[2], t[3], j.OFFLINE)
                  })
              },
              !1)
        }
        function L() {
          A();
          var t;
          o._Stack && (t = o._Stack.getCurrent()),
            t && w(t[2], t[3], j.LAYOUT),
            setTimeout(A, 0),
            setTimeout(A, 10),
            setTimeout(A, 100),
            setTimeout(A, 200),
            setTimeout(A, 300)
        }
        function A(n) {
          if (n || (o._Navigation && (n = o._Navigation.getCurrentNode()), n)) {
            var i = n.querySelector(".app-topbar"),
              s = n.querySelector(".app-content"),
              a = t.innerHeight;
            if (s) {
              if (!i) return void(s.style.height = a + "px");
              var l = e.defaultView.getComputedStyle(i, null),
                c = r.os.android ? 48: 44;
              l.height && (c = parseInt(l.height) || 0, "border-box" !== (l.boxSizing || l.webkitBoxSizing) && (c += (parseInt(l.paddingBottom) || 0) + (parseInt(l.paddingTop) || 0), c += (parseInt(l.borderBottomWidth) || 0) + (parseInt(l.borderTopWidth) || 0))),
                s.style.height = a - c + "px"
            }
          }
        }
        function C(t, e) {
          if (e) {
            var n = t.querySelector(".app-topbar .left.app-button"),
              i = e.querySelector(".app-topbar .app-title");
            if (n && i && null !== n.getAttribute("data-autotitle")) {
              var o = i.textContent,
                r = n.textContent;
              o && !r && (o.length > 13 && (o = o.substr(0, 12) + ".."), n.textContent = o)
            }
          }
        }
        function O() {
          H || (H = !0, e.body.className += " " + P, r.ready(function() {
            setTimeout(L, 6)
          }))
        }
        var D = "data-page",
          Y = "app-page",
          M = "app-loaded",
          P = "app-ios-statusbar",
          z = "__appjsFlushReadyQueue",
          X = "__appjsPageManager",
          j = {
            SHOW: "show",
            HIDE: "hide",
            BACK: "back",
            FORWARD: "forward",
            BEFORE_BACK: "beforeBack",
            READY: "ready",
            DESTROY: "destroy",
            LAYOUT: "layout",
            ONLINE: "online",
            OFFLINE: "offline"
          },
          R = !1,
          I = ( !! t.APP_FORCE_ISCROLL, {}),
          B = {},
          q = {},
          H = !1;
        return N(),
          t.APP_ENABLE_IOS_STATUSBAR && O(),
          o.add = function(t, e) {
            if ("string" != typeof t && (e = t, t = void 0), !r.isNode(e)) throw TypeError("page template node must be a DOM node, got " + e);
            u(e, t)
          },
          o.controller = function(t, e, n) {
            if ("string" != typeof t) throw TypeError("page name must be a string, got " + t);
            if ("function" != typeof e) throw TypeError("page controller must be a function, got " + e);
            switch (typeof n) {
              case "undefined":
                n = function() {};
                break;
              case "function":
                break;
              default:
                throw TypeError("page cleanup handler must be a function, got " + n)
            }
            e && p(t, e),
              n && h(t, n)
          },
          o.populator = o.controller,
          o.generate = function(t, e) {
            if ("string" != typeof t) throw TypeError("page name must be a string, got " + t);
            switch (typeof e) {
              case "undefined":
                e = {};
                break;
              case "object":
                break;
              default:
                throw TypeError("page arguments must be an object if defined, got " + e)
            }
            return v(t, e)
          },
          o.destroy = function(t) {
            if (!r.isNode(t)) throw TypeError("page node must be a DOM node, got " + t);
            return y(t)
          },
          o.initClick = function(t) {
            r.forEach(t.querySelectorAll(".app-btn"),
              function(t) {
                null === t.getAttribute("data-no-click") && (n(t), t.addEventListener("click",
                  function() {
                    function e() {
                      c && (t.disabled = !1, t.classList.remove(c))
                    }
                    var n,
                      i = t.getAttribute("data-target"),
                      r = t.getAttribute("data-target-args"),
                      s = null !== t.getAttribute("data-back"),
                      a = null !== t.getAttribute("data-manual-back");
                    try {
                      n = JSON.parse(r)
                    } catch(l) {}
                    if (("object" != typeof n || null === n) && (n = {}), !(!s && !i || s && a)) {
                      var c = t.getAttribute("data-clickable-class");
                      c && (t.disabled = !0, t.classList.add(c)),
                        s ? o.back(e) : i && o.load(i, n, {},
                          e)
                    }
                  },
                  !1))
              })
          },
          o._layout = L,
          o._enableIOSStatusBar = O,
        {
          EVENTS: j,
          has: f,
          createManager: b,
          startGeneration: S,
          finishGeneration: x,
          fire: w,
          startDestruction: _,
          finishDestruction: k,
          fixContent: A,
          populateBackButton: C
        }
      } (window, document, r, l, App, App._Utils, App._Events, App._Metrics, App._Scroll),
      App._Stack = function(t, e, n, i, o, r) {
        function s() {
          try {
            for (var t = [], e = 0, n = k.length; n > e && k[e][4].restorable !== !1; e++) t.push([k[e][0], k[e][3], k[e][2]]);
            localStorage[x] = JSON.stringify(t),
              localStorage[_] = +new Date + ""
          } catch(i) {}
        }
        function a() {
          delete localStorage[x],
            delete localStorage[_]
        }
        function l() {
          return k.slice().map(b)
        }
        function c() {
          return k.length
        }
        function u() {
          return 0 !== k.length ? k[k.length - 1] : "undefined"
        }
        function f() {
          return k.length > 0 ? k[k.length - 2] : "undefined"
        }
        function d() {
          var t = k[k.length - 1];
          return t ? b(t) : void 0
        }
        function p() {
          var t = k.pop();
          return t ? b(t) : void 0
        }
        function h() {
          n.removeFromStack(0, 1)
        }
        function m(t) {
          k.push([t[0], t[3], t[4], t[1], t[2]])
        }
        function g(t) {
          var e = k[t];
          return e ? e[1] : void 0
        }
        function b(t) {
          var e = {};
          for (var n in t[3]) e[n] = t[3][n];
          return [t[0], e, t[4], t[1], t[2]]
        }
        function v(t, e) {
          var n = k.splice(t, e - t);
          i.forEach(n,
            function(t) {
              r.startDestruction(t[0], t[4], t[1], t[3]),
                r.finishDestruction(t[0], t[4], t[1], t[3])
            })
        }
        function y(t, e) {
          n._Navigation.enqueue(function(n) {
            v(t, e),
              n()
          })
        }
        function S(t, e) {
          var n,
            s = [];
          i.forEach(e,
            function(t) {
              var e = r.createManager(!0),
                i = r.startGeneration(t[0], e, t[1]); ! t[2].transition && e.transition && (t[2].transition = e.transition),
                r.populateBackButton(i, n),
                r.finishGeneration(t[0], e, i, t[1]),
                o.saveScrollPosition(i),
                o.saveScrollStyle(i),
                s.push([t[0], i, t[2], t[1], e]),
                n = i
            }),
            s.unshift(0),
            s.unshift(t),
            Array.prototype.splice.apply(k, s)
        }
        function w(t, e) {
          n._Navigation.enqueue(function(n) {
            S(t, e),
              n()
          })
        }
        function E() {
          try {
            return JSON.parse(localStorage[x])
          } catch(t) {
            return []
          }
        }
        function T() {
          var t,
            e;
          try {
            t = JSON.parse(localStorage[x]),
              storedTime = parseInt(localStorage[_]),
              e = t.pop()
          } catch(o) {
            return
          }
          return e ?
            function(o, a) {
              switch (typeof o) {
                case "function":
                  a = o;
                case "undefined":
                  o = {};
                case "object":
                  if (null !== o) break;
                default:
                  throw TypeError("restore options must be an object if defined, got " + o)
              }
              switch (typeof a) {
                case "undefined":
                  a = function() {};
                case "function":
                  break;
                default:
                  throw TypeError("restore callback must be a function if defined, got " + a)
              }
              if ( + new Date - storedTime >= o.maxAge) throw TypeError("restore content is too old");
              if (!r.has(e[0])) throw TypeError(e[0] + " is not a known page");
              i.forEach(t,
                function(t) {
                  if (!r.has(t[0])) throw TypeError(t[0] + " is not a known page")
                });
              try {
                S(0, t, !0)
              } catch(l) {
                throw v(0, k.length),
                  Error("failed to restore stack")
              }
              s();
              try {
                n.load(e[0], e[1], e[2], a)
              } catch(l) {
                throw v(0, k.length),
                  Error("failed to restore stack")
              }
            }: void 0
        }
        var x = "__APP_JS_STACK__" + t.location.pathname,
          _ = "__APP_JS_TIME__" + t.location.pathname,
          k = [];
        return n.getStack = function() {
          return l()
        },
          n.getPage = function(t) {
            var e = k.length - 1;
            switch (typeof t) {
              case "undefined":
                t = e;
                break;
              case "number":
                if (Math.abs(t) > e) throw TypeError("absolute index cannot be greater than stack size, got " + t);
                0 > t && (t = e + t);
                break;
              default:
                throw TypeError("page index must be a number if defined, got " + t)
            }
            return g(t)
          },
          n.removeFromStack = function(t, e) {
            var i = k.length - 1;
            switch (typeof t) {
              case "undefined":
                t = 0;
                break;
              case "number":
                Math.abs(t) > i && (n.back(), console.log("absolute start index cannot be greater than stack size, got " + t)),
                  0 > t && (t = i + t);
                break;
              default:
                throw TypeError("start index must be a number if defined, got " + t)
            }
            switch (typeof e) {
              case "undefined":
                e = i;
                break;
              case "number":
                if (Math.abs(e) > i) throw TypeError("absolute end index cannot be greater than stack size, got " + e);
                0 > e && (e = i + e);
                break;
              default:
                throw TypeError("end index must be a number if defined, got " + e)
            }
            if (t > e) throw TypeError("start index cannot be greater than end index");
            y(t, e)
          },
          n.addToStack = function(t, e) {
            var n = k.length - 1;
            switch (typeof t) {
              case "undefined":
                t = 0;
                break;
              case "number":
                if (Math.abs(t) > n) throw TypeError("absolute index cannot be greater than stack size, got " + t);
                0 > t && (t = n + t);
                break;
              default:
                throw TypeError("index must be a number if defined, got " + t)
            }
            if (!i.isArray(e)) throw TypeError("added pages must be an array, got " + e);
            e = e.slice(),
              i.forEach(e,
                function(t, n) {
                  if ("string" == typeof t) t = [t, {}];
                  else {
                    if (!i.isArray(t)) throw TypeError("page description must be an array (page name, arguments), got " + t);
                    t = t.slice()
                  }
                  if ("string" != typeof t[0]) throw TypeError("page name must be a string, got " + t[0]);
                  switch (typeof t[1]) {
                    case "undefined":
                      t[1] = {};
                    case "object":
                      break;
                    default:
                      throw TypeError("page arguments must be an object if defined, got " + t[1])
                  }
                  switch (typeof t[2]) {
                    case "undefined":
                      t[2] = {};
                    case "object":
                      break;
                    default:
                      throw TypeError("page options must be an object if defined, got " + t[2])
                  }
                  e[n] = t
                }),
              w(t, e)
          },
          n.saveStack = function() {
            s()
          },
          n.destroyStack = function() {
            a()
          },
          n.restore = T(),
        {
          get: l,
          getCurrent: d,
          getPage: g,
          getLast: u,
          getBefore: f,
          pop: p,
          push: m,
          size: c,
          save: s,
          destroy: a,
          shift: h,
          getRestoreStacks: E
        }
      } (window, document, App, App._Utils, App._Scroll, App._Pages),
      App._Transitions = function(t, e, n, i, o, r, s, a) {
        function l(t) {
          y = t,
            S = N[y]
        }
        function c(t) {
          return o.os.ios ? "slide-left" === t ? !0: "slide-right" === t ? !0: !1: !1
        }
        function u(t, i, r, s, a) {
          function l() {
            e.body.className = e.body.className.replace(new RegExp("\\b" + E + "\\b"), ""),
              s()
          }
          r.transition || (r.transition = a ? S: y);
          var u = o.os.ios && o.os.version >= 7 && {
            "slideon-down": 1,
            "slideoff-down": 1
          } [r.transition];
          r.duration || (r.duration = o.os.ios ? o.os.version < 7 ? 325: u ? 475: 425: 270),
            !r.easing && u && (r.easing = "cubic-bezier(0.4,0.6,0.05,1)"),
            !o.os.ios || r.easing || "slideon-left-ios" !== r.transition && "slideoff-right-ios" !== r.transition || (r.easing = o.os.version < 7 ? "ease-in-out": "cubic-bezier(0.4,0.6,0.2,1)"),
            e.body.className += " " + E,
              "instant" === r.transition ? n(t, i, r,
            function() {
              setTimeout(l, 0)
            }) : c(r.transition) ? f(t, i, r, l) : n(t, i, r, l)
        }
        function f(t, e, r, s) {
          var a = "slide-left" === r.transition,
            l = a ? e: t,
            c = d(e, t, a);
          if (!c) return void n(t, e, r, s);
          var u = l.style.position,
            f = l.style.zIndex,
            p = l.style.background;
          l.style.position = "fixed",
            l.style.zIndex = "4000",
            l.style.background = "none",
            a ? t.parentNode.insertBefore(e, t) : t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e),
            i._Pages && (i._Pages.fixContent(t), i._Pages.fixContent(e)),
            r.easing = o.os.version < 7 ? "ease-in-out": "cubic-bezier(0.4,0.6,0.2,1)",
            o.animate(c, r.duration, r.easing,
              function() {
                t.parentNode.removeChild(t),
                  l.style.position = u,
                  l.style.zIndex = f,
                  l.style.background = p,
                  s()
              })
        }
        function d(t, e, n) {
          var i = e.querySelector(".app-topbar"),
            r = e.querySelector(".app-topbar .app-title"),
            s = e.querySelector(".app-topbar .left.app-button"),
            a = e.querySelector(".app-content"),
            l = t.querySelector(".app-topbar"),
            c = t.querySelector(".app-topbar .app-title"),
            u = t.querySelector(".app-topbar .left.app-button"),
            f = t.querySelector(".app-content"),
            d = [];
          return i && l && a && f && o.isVisible(i) && o.isVisible(l) ? (s && null !== s.getAttribute("data-noslide") && (s = void 0), u && null !== u.getAttribute("data-noslide") && (u = void 0), d.push(n ? {
            opacityStart: 0,
            opacityEnd: 1,
            elem: l
          }: {
            opacityStart: 1,
            opacityEnd: 0,
            elem: i
          }), r && d.push({
            transitionStart: "translate3d(0,0,0)",
            transitionEnd: "translate3d(" + h(u, n) + "px,0,0)",
            elem: r
          }), c && d.push({
            transitionStart: "translate3d(" + h(s, !n) + "px,0,0)",
            transitionEnd: "translate3d(0,0,0)",
            elem: c
          }), o.os.version >= 5 && (s && d.push({
            transitionStart: "translate3d(0,0,0)",
            transitionEnd: "translate3d(" + p(s, u, !n) + "px,0,0)",
            elem: s
          }), u && d.push({
            transitionStart: "translate3d(" + p(u, s, n) + "px,0,0)",
            transitionEnd: "translate3d(0,0,0)",
            elem: u
          })), o.os.version < 7 ? d.push({
              transitionStart: "translate3d(0,0,0)",
              transitionEnd: "translate3d(" + (n ? -100: 100) + "%,0,0)",
              elem: a
            },
            {
              transitionStart: "translate3d(" + (n ? 100: -100) + "%,0,0)",
              transitionEnd: "translate3d(0,0,0)",
              elem: f
            }) : d.push({
              transitionStart: "translate3d(0,0,0)",
              transitionEnd: "translate3d(" + (n ? -30: 100) + "%,0,0)",
              elem: a
            },
            {
              transitionStart: "translate3d(" + (n ? 100: -30) + "%,0,0)",
              transitionEnd: "translate3d(0,0,0)",
              elem: f
            }), d) : void 0
        }
        function p(e, n, i) {
          var r = e.textContent.length * (o.os.version < 7 ? 10: 12),
            s = n ? 15 * n.textContent.length: 0;
          return i ? (t.innerWidth - r) / 2: (s - t.innerWidth) / 2
        }
        function h(e, n) {
          var i = 0;
          return e && o.os.version >= 5 && (i = e.textContent.length * (o.os.version < 7 ? 10: 12)),
            n ? (i - t.innerWidth) / 2: t.innerWidth / 2
        }
        function m() {
          A = !0
        }
        function g() {
          for (var t = e.querySelectorAll("meta"), n = 0, i = t.length; i > n; n++) if ("app-drag-transition" === t[n].name && "true" === t[n].content) return void m()
        }
        function b() {
          function n() {
            t.removeEventListener("touchstart", c),
              t.removeEventListener("touchmove", u),
              t.removeEventListener("touchcancel", f),
              t.removeEventListener("touchend", f)
          }
          function l() {
            T[3].style.position = X,
              T[3].style.zIndex = j,
              T[3].style.background = R,
              S[3].parentNode && S[3].parentNode.removeChild(S[3])
          }
          function c(t) {
            if (! (p || m || g)) {
              var n = t.touches && t.touches[0]; ! n || n.pageX > L || s.fire(T[2], T[3], s.EVENTS.BEFORE_BACK) && (t.preventDefault(), i._Navigation.enqueue(function(t) {
                  m = t
                },
                !0), e.body.className += " " + E, p = h = {
                x: n.pageX,
                y: n.pageY
              },
                _.style.webkitTransition = "all 0s linear", k && (k.style.webkitTransition = "all 0s linear"), N && (N.style.webkitTransition = "all 0s linear"), C.style.webkitTransition = "all 0s linear", D.style.webkitTransition = "all 0s linear", Y && (Y.style.webkitTransition = "all 0s linear"), M && (M.style.webkitTransition = "all 0s linear"), P.style.webkitTransition = "all 0s linear")
            }
          }
          function u(e) {
            if (p && e.touches && e.touches[0] && !g) {
              h && (I = h.x < e.touches[0].pageX),
                h = {
                  x: e.touches[0].pageX,
                  y: e.touches[0].pageY
                };
              var n = Math.min(Math.max(0, (h.x - p.x) / t.innerWidth), 1);
              d(n)
            }
          }
          function f(o) {
            function l() {
              T[3].removeEventListener("webkitTransitionEnd", l),
                I ? T[3].parentNode && T[3].parentNode.removeChild(T[3]) : S[3].parentNode && S[3].parentNode.removeChild(S[3]),
                T[3].style.position = X,
                T[3].style.zIndex = j,
                T[3].style.background = R,
                _.style.webkitTransition = "",
                _.style.webkitTransform = "",
                k && (k.style.webkitTransition = "", k.style.webkitTransform = ""),
                N && (N.style.webkitTransition = "", N.style.webkitTransform = ""),
                C.style.webkitTransition = "",
                C.style.webkitTransform = "",
                D.style.webkitTransition = "",
                D.style.webkitTransform = "",
                Y && (Y.style.webkitTransition = "", Y.style.webkitTransform = ""),
                M && (M.style.webkitTransition = "", M.style.webkitTransform = ""),
                P.style.webkitTransition = "",
                P.style.webkitTransform = "",
                e.body.className = e.body.className.replace(new RegExp("\\b" + E + "\\b"), ""),
                I && (s.startDestruction(T[0], T[2], T[3], T[1]), s.fixContent(O), r.restoreScrollStyle(O), T[2].showing = !1, s.fire(T[2], T[3], s.EVENTS.HIDE), S[2].showing = !0, s.fire(S[2], O, s.EVENTS.SHOW), s.finishDestruction(T[0], T[2], T[3], T[1]), a.pop(), i._Navigation.update()),
                w = null,
                m()
            }
            if (p && m && !g) {
              n(),
                h = o.touches && o.touches[0] || h,
                h && (progress = (h.x - p.x) / t.innerWidth);
              var c = progress < .1 && !I || .9 < progress && I;
              c || (_.style.webkitTransitionDuration = "0.15s", k && (k.style.webkitTransitionDuration = "0.15s"), N && (N.style.webkitTransitionDuration = "0.15s"), C.style.webkitTransitionDuration = "0.15s", D.style.webkitTransitionDuration = "0.15s", Y && (Y.style.webkitTransitionDuration = "0.15s"), M && (M.style.webkitTransitionDuration = "0.15s"), P.style.webkitTransitionDuration = "0.15s"),
                I ? (s.fire(T[2], T[3], s.EVENTS.BACK), d(1)) : d(0),
                p = h = null,
                c ? l() : T[3].addEventListener("webkitTransitionEnd", l, !1)
            }
          }
          function d(e) {
            b ? (_.style.opacity = 1 - e, k && (k.style.webkitTransform = "translate3d(" + e * t.innerWidth / 2 + "px,0,0)"), N && (N.style.webkitTransform = "translate3d(" + e * (t.innerWidth - 12 * N.textContent.length) / 2 + "px,0,0)"), Y && (Y.style.webkitTransform = "translate3d(" + (1 - e) * (t.innerWidth - 12 * N.textContent.length) / -2 + "px,0,0)"), M && (M.style.webkitTransform = "translate3d(" + -150 * (1 - e) + "%,0,0)")) : (_.style.webkitTransform = "translate3d(" + 100 * e + "%,0,0)", D.style.webkitTransform = "translate3d(" + -30 * (1 - e) + "%,0,0)"),
              C.style.webkitTransform = "translate3d(" + 100 * e + "%,0,0)",
              P.style.webkitTransform = "translate3d(" + -30 * (1 - e) + "%,0,0)"
          }
          if (A && o.os.ios && !(o.os.version < 7)) {
            var p,
              h,
              m,
              g,
              b,
              v = a.get().slice( - 2),
              S = v[0],
              T = v[1];
            if (S && T) {
              var x = T[3],
                _ = T[3].querySelector(".app-topbar"),
                k = T[3].querySelector(".app-topbar .app-title"),
                N = T[3].querySelector(".app-topbar .left.app-button"),
                C = T[3].querySelector(".app-content"),
                O = S[3],
                D = S[3].querySelector(".app-topbar"),
                Y = S[3].querySelector(".app-topbar .app-title"),
                M = S[3].querySelector(".app-topbar .left.app-button"),
                P = S[3].querySelector(".app-content");
              if (x && _ && C && O && D && P) {
                var z = ["slide-left", "slideon-left-ios"];
                if ( - 1 !== z.indexOf(T[4].transition) || !T[4].transition && -1 !== z.indexOf(y)) { ("slide-left" === T[4].transition || !T[4].transition && "slide-left" === y) && (b = !0);
                  var X = T[3].style.position,
                    j = T[3].style.zIndex,
                    R = T[3].style.background;
                  T[3].style.position = "fixed",
                    T[3].style.zIndex = "4000",
                    T[3].style.background = "none",
                    T[3].nextSibling ? T[3].parentNode.insertBefore(S[3], T[3].nextSibling) : T[3].parentNode.appendChild(S[3]),
                    s.fixContent(O),
                    r.restoreScrollPosition(O),
                    t.addEventListener("touchstart", c, !1),
                    t.addEventListener("touchmove", u, !1),
                    t.addEventListener("touchcancel", f, !1),
                    t.addEventListener("touchend", f, !1);
                  var I = !1;
                  w = function() {
                    n(),
                      l()
                  }
                }
              }
            }
          }
        }
        function v() {
          w && (w(), w = null)
        }
        var y,
          S,
          w,
          E = "app-transition",
          T = "slide-left",
          x = "implode-out",
          _ = "fade-on",
          k = "instant",
          N = {
            instant: "instant",
            fade: "fade",
            "fade-on": "fade-off",
            "fade-off": "fade-on",
            "scale-in": "scale-out",
            "scale-out": "scale-in",
            "rotate-left": "rotate-right",
            "rotate-right": "rotate-left",
            "cube-left": "cube-right",
            "cube-right": "cube-left",
            "swap-left": "swap-right",
            "swap-right": "swap-left",
            "explode-in": "explode-out",
            "explode-out": "explode-in",
            "implode-in": "implode-out",
            "implode-out": "implode-in",
            "slide-left": "slide-right",
            "slide-right": "slide-left",
            "slide-up": "slide-down",
            "slide-down": "slide-up",
            "slideon-left": "slideoff-left",
            "slideon-right": "slideoff-right",
            "slideon-up": "slideoff-up",
            "slideon-down": "slideoff-down",
            "slideoff-left": "slideon-left",
            "slideoff-right": "slideon-right",
            "slideoff-up": "slideon-up",
            "slideoff-down": "slideon-down",
            "slideon-left-ios": "slideoff-right-ios",
            "glideon-right": "glideoff-right",
            "glideoff-right": "slideon-right",
            "glideon-left": "glideoff-left",
            "glideoff-left": "slideon-left",
            "glideon-down": "glideoff-down",
            "glideoff-down": "slideon-down",
            "glideon-up": "glideoff-up",
            "glideoff-up": "slideon-up"
          },
          L = 10,
          A = !1;
        return o.os.ios ? l(T) : o.os.android && l(o.os.version >= 4 ? x: o.os.version < 2.3 || /LT15a/i.test(navigator.userAgent) ? k: _),
          g(),
          i.setDefaultTransition = function(t) {
            if ("object" == typeof t) {
              switch (o.os.name) {
                case "android":
                  t = o.os.version < 4 && t.androidFallback ? t.androidFallback: t.android;
                  break;
                case "ios":
                  t = o.os.version < 5 && t.iosFallback ? t.iosFallback: t.ios;
                  break;
                default:
                  t = t.fallback
              }
              if (!t) return
            }
            if ("string" != typeof t) throw TypeError("transition must be a string if defined, got " + t);
            if (! (t in N)) throw TypeError("invalid transition type, got " + t);
            l(t)
          },
          i.getDefaultTransition = function() {
            return y
          },
          i.getReverseTransition = function() {
            return S
          },
          i.enableDragTransition = function() {
            m()
          },
        {
          REVERSE_TRANSITION: N,
          run: u,
          enableDrag: b,
          disableDrag: v
        }
      } (window, document, s, App, App._Utils, App._Scroll, App._Pages, App._Stack),
      App._Navigation = function(t, e, n, i, o, r, s, a) {
        function l(t, e) {
          return y ? (v.push(t), !1) : (y = !0, e || a.disableDrag(), t(function() {
            s.save(),
              y = !1,
              c() || a.enableDrag()
          }), !0)
        }
        function c() {
          return v.length ? (l(v.shift()), !0) : !1
        }
        function u() {
          return b
        }
        function f() {
          var t = s.getCurrent();
          g = t[0],
            b = t[3]
        }
        function d(t, i, c, u, f) {
          return l(function(l) {
            function d() {
              g = t,
                b = y,
                s.push([t, i, v, y, c]),
                h && E && r.fire(E, h, r.EVENTS.FORWARD)
            }
            function p() {
              o.saveScrollStyle(h),
                r.finishGeneration(t, v, y, i),
                l(),
                u(),
                h && E && (E.showing = !1, r.fire(E, h, r.EVENTS.HIDE)),
                v.showing = !0,
                r.fire(v, y, r.EVENTS.SHOW)
            }
            var h = b,
              v = r.createManager(!1);
            f && f(v);
            var y = r.startGeneration(t, v, i),
              S = s.getCurrent(),
              w = S && S[3],
              E = S && S[2];
            if (!c.transition && v.transition && (c.transition = v.transition), r.populateBackButton(y, h || w), g) {
              o.saveScrollPosition(b);
              var T = {};
              for (var x in c) T[x] = c[x];
              m(function(t) {
                a.run(b, y, T,
                  function() {
                    r.fixContent(y),
                      t(),
                      p()
                  }),
                  r.fire(v, y, r.EVENTS.LAYOUT)
              }),
                d()
            } else n.restore = null,
              e.body.appendChild(y),
              r.fire(v, y, r.EVENTS.LAYOUT),
              d(),
              p()
          }),
            r.has(t) ? void 0: !1
        }
        function p(t, e) {
          if (n.addHash("#/" + t), n.addLoading(), i.status() && i.close() && !t) return void e();
          var c = s.get().map(function(t) {
            return t[0]
          });
          if (!c.length) throw Error(t + " is not currently in the stack, cannot go back to it");
          if (t) {
            for (var u = -1, f = c.length - 1; f >= 0; f--) if (c[f] === t) {
              u = f;
              break
            }
            if ( - 1 === u) return n._Stack.destroy(),
              n.load("home"),
              void console.log("【Error】" + t + " is not currently in the stack, cannot go back to it");
            u !== c.length - 2 && n.removeFromStack(u + 1)
          }
          var d = c.length,
            p = !1,
            h = l(function(t) {
              if (s.size() < 2) return void t();
              var n = s.getCurrent();
              if (!r.fire(n[2], n[3], r.EVENTS.BEFORE_BACK)) return p = !0,
                void t();
              s.pop();
              var i = s.getCurrent(),
                l = i[0],
                c = i[3],
                u = n[4];
              r.fire(n[2], n[3], r.EVENTS.BACK),
                r.fixContent(c),
                r.startDestruction(n[0], n[2], n[3], n[1]),
                o.restoreScrollPosition(c);
              var f = {};
              for (var d in u) f[d] = "transition" === d ? a.REVERSE_TRANSITION[u[d]] || u[d] : u[d];
              m(function(s) {
                a.run(b, c, f,
                  function() {
                    r.fixContent(c),
                      o.restoreScrollStyle(c),
                      s(),
                      n[2].showing = !1,
                      r.fire(n[2], n[3], r.EVENTS.HIDE),
                      i[2].showing = !0,
                      r.fire(i[2], c, r.EVENTS.SHOW),
                      setTimeout(function() {
                          r.finishDestruction(n[0], n[2], n[3], n[1]),
                            t(),
                            e()
                        },
                        0)
                  },
                  !0),
                  r.fixContent(c),
                  r.fire(i[2], c, r.EVENTS.LAYOUT)
              }),
                g = l,
                b = c
            });
          return p || h && 2 > d ? !1: void 0
        }
        function h(t, e, i, o, r) {
          var s = !1;
          d(t, e, i, o,
            function(t) {
              t.restorable = !1,
                t.reply = function() {
                  s || (s = !0, t._appNoBack || p(void 0,
                    function() {}), r.apply(n, arguments))
                }
            })
        }
        function m(t) {
          var n = !1,
            i = e.createElement("div");
          i.className = "app-clickblocker",
            e.body.appendChild(i),
            i.addEventListener("touchstart",
              function(t) {
                t.preventDefault()
              },
              !1),
            t(function() {
              n || (n = !0, e.body.removeChild(i))
            })
        }
        var g,
          b,
          v = [],
          y = !1;
        return n.current = function() {
          return g
        },
          n.load = function(t, e, n, i) {
            if ($(".loading").show(), "string" != typeof t) throw TypeError("page name must be a string, got " + t);
            switch (typeof e) {
              case "function":
                n = e,
                  e = {};
              case "string":
                i = n,
                  n = e;
              case "undefined":
                e = {};
              case "object":
                break;
              default:
                throw TypeError("page arguments must be an object if defined, got " + e)
            }
            switch (typeof n) {
              case "function":
                i = n;
              case "undefined":
                n = {};
              case "object":
                break;
              case "string":
                n = {
                  transition: n
                };
                break;
              default:
                throw TypeError("options must be an object if defined, got " + n)
            }
            switch (typeof i) {
              case "undefined":
                i = function() {};
              case "function":
                break;
              default:
                throw TypeError("callback must be a function if defined, got " + i)
            }
            return d(t, e, n, i)
          },
          n.back = function(t, e) {
            if (0 === n._Stack.size()) return void n.load("home");
            if (n._CustomStack && n._CustomStack.length > 0) {
              var i = n._CustomStack.pop();
              return void n.load(i[0], i[1])
            }
            switch ("home" === t && n._Stack.destroy(), typeof t) {
              case "function":
                e = t;
              case "undefined":
                t = void 0;
              case "string":
                break;
              default:
                throw TypeError("pageName must be a string if defined, got " + t)
            }
            switch (typeof e) {
              case "undefined":
                e = function() {};
              case "function":
                break;
              default:
                throw TypeError("callback must be a function if defined, got " + e)
            }
            return p(t, e)
          },
          n.pick = function(t, e, n, i, o) {
            if ("string" != typeof t) throw TypeError("page name must be a string, got " + t);
            switch (typeof e) {
              case "function":
                n = e,
                  e = {};
              case "string":
                o = i,
                  i = n,
                  n = e;
              case "undefined":
                e = {};
              case "object":
                break;
              default:
                throw TypeError("page arguments must be an object if defined, got " + e)
            }
            switch (typeof n) {
              case "function":
                o = i,
                  i = n;
              case "undefined":
                n = {};
              case "object":
                break;
              case "string":
                n = {
                  transition: n
                };
                break;
              default:
                throw TypeError("options must be an object if defined, got " + n)
            }
            if ("function" != typeof i) throw TypeError("callback must be a function, got " + i);
            switch (typeof o) {
              case "undefined":
                o = i,
                  i = function() {};
              case "function":
                break;
              default:
                throw TypeError("callback must be a function, got " + o)
            }
            return h(t, e, n, i, o)
          },
        {
          getCurrentNode: u,
          update: f,
          enqueue: l
        }
      } (window, document, App, App._Dialog, App._Scroll, App._Pages, App._Stack, App._Transitions),
      App.query = function(t, e) {
        try {
          var n = "";
          if (e.data) for (var o in e.data) n += e.data[o];
          debug("【Query】:" + t + "?" + n);
          var r = e.data ? "_hash" + i(t) + n: "_hash" + i(t);
          if (!e.cache || !App.getCache(r)) return $.ajax({
            type: "post",
            url: CONST.API + t,
            data: e.data,
            success: function(t) {
              e.cache && App.addCache(r, t),
                App.trigger("queryEvent", r),
                e.success && e.success.call(this, t)
            }
          });
          e.success && e.success.call(this, App.getCache(r))
        } catch(s) {}
      },
      n.exports = App
  });