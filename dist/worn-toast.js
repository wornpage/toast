//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, h = () => {};
function g(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function _() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var v = 1024, y = 2048, b = 4096, ee = 8192, te = 16384, ne = 32768, re = 1 << 25, ie = 65536, ae = 1 << 19, oe = 1 << 20, se = 65536, ce = 1 << 21, le = 1 << 22, ue = 1 << 23, de = Symbol("$state"), fe = Symbol("legacy props"), pe = Symbol(""), me = Symbol("attributes"), he = Symbol("class"), ge = Symbol("style"), _e = Symbol("text"), ve = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ye = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function be() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function xe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ce(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function we() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Te() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Ee(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function De() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ke() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ae() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function je() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Me(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ne() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var x = !1;
function Pe(e) {
	x = e;
}
var S;
function C(t) {
	if (t === null) throw Me(), e;
	return S = t;
}
function Fe() {
	return C(/* @__PURE__ */ L(S));
}
function Ie(t) {
	if (x) {
		if (/* @__PURE__ */ L(S) !== null) throw Me(), e;
		S = t;
	}
}
function Le(e = 1) {
	if (x) {
		for (var t = e, n = S; t--;) n = /* @__PURE__ */ L(n);
		S = n;
	}
}
function Re(e = !0) {
	for (var t = 0, n = S;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ L(n);
		e && n.remove(), n = i;
	}
}
function ze(t) {
	if (!t || t.nodeType !== 8) throw Me(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Be(e) {
	return e === this.v;
}
function Ve(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function He(e) {
	return !Ve(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var w = null;
function Ue(e) {
	w = e;
}
function We(e, t = !1, n) {
	w = {
		p: w,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: null
	};
}
function Ge(e) {
	var t = w, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) ln(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, w = t.p, e ?? {};
}
function Ke() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var T = [];
function qe() {
	var e = T;
	T = [], g(e);
}
function E(e) {
	if (T.length === 0 && !Ct) {
		var t = T;
		queueMicrotask(() => {
			t === T && qe();
		});
	}
	T.push(e);
}
function Je() {
	for (; T.length > 0;) qe();
}
function Ye(e) {
	var t = G;
	if (t === null) return H.f |= ue, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	D(e, t);
}
function D(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Xe = ~(y | b | v);
function O(e, t) {
	e.f = e.f & Xe | t;
}
function Ze(e) {
	e.f & 512 || e.deps === null ? O(e, v) : O(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Qe(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= se, Qe(t.deps));
}
function $e(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Qe(e.deps), O(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var et = !1;
function tt(e) {
	var t = et;
	try {
		return et = !1, [e(), et];
	} finally {
		et = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function nt(e) {
	var t = H, n = G;
	W(null), K(null);
	try {
		return e();
	} finally {
		W(t), K(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function rt(e) {
	let t = 0, n = Lt(0), r;
	return () => {
		on() && (Q(n), mn(() => (t === 0 && (r = Wn(() => e(() => Vt(n)))), t += 1, () => {
			E(() => {
				--t, t === 0 && (r?.(), r = void 0, Vt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var it = ie | ae;
function at(e, t, n, r) {
	new ot(e, t, n, r);
}
var ot = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = x ? S : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = rt(() => (this.#m = Lt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = gn(() => {
			if (x) {
				let e = this.#t;
				Fe();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, it), x && (this.#e = S);
	}
	#g() {
		try {
			this.#a = z(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		E(r), t && (this.#s = z(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ne();
				return;
			}
			t = !0, n && Ae(), this.#s !== null && Sn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					D(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = z(() => e(this.#e)), E(() => {
			var e = this.#c = document.createDocumentFragment(), t = I();
			e.append(t), this.#a = this.#S(() => z(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Sn(this.#o, () => {
				this.#o = null;
			}), this.#x(k));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = z(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				En(this.#a, e);
				let t = this.#n.pending;
				this.#o = z(() => t(this.#e));
			} else this.#x(k);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		$e(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = G, n = H, r = w;
		K(this.#i), W(this.#i), Ue(this.#i.ctx);
		try {
			return kt.ensure(), e();
		} catch (e) {
			return Ye(e), null;
		} finally {
			K(t), W(n), Ue(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Sn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, E(() => {
			this.#d = !1, this.#m && zt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), x && (C(this.#t), Le(), C(Re()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return z(() => {
						var r = G;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return D(e, this.#i.parent), null;
				}
			}));
		};
		E(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				D(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => D(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function st(e, t, n, r) {
	let i = Ke() ? dt : mt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = G, c = ct(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				D(e, s);
			}
			lt();
		}
	}
	var d = ut();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ pt(e))).then(u).catch((e) => D(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), lt();
	}) : f();
}
function ct() {
	var e = G, t = H, n = w, r = k;
	return function(i = !0) {
		K(e), W(t), Ue(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function lt(e = !0) {
	K(null), W(null), Ue(null), e && k?.deactivate();
}
function ut() {
	var e = G, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function dt(e) {
	var n = 2 | y;
	return G !== null && (G.f |= ae), {
		ctx: w,
		deps: null,
		effects: null,
		equals: Be,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: G,
		ac: null
	};
}
var ft = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function pt(e, n, r) {
	let i = G;
	i === null && be();
	var a = void 0, o = Lt(t), s = !H, c = /* @__PURE__ */ new Set();
	return pn(() => {
		var t = G, n = _();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ve && n.reject(e);
			}).finally(lt);
		} catch (e) {
			n.reject(e), lt();
		}
		var r = k;
		if (s) {
			if (t.f & 32768) var l = ut();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ft);
			else for (let e of c.values()) e.reject(ft);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== ft && (r.activate(), t ? (o.f |= ue, zt(o, t)) : (o.f & 8388608 && (o.f ^= ue), zt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), sn(() => {
		for (let e of c) e.reject(ft);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function mt(e) {
	let t = /* @__PURE__ */ dt(e);
	return t.equals = He, t;
}
function ht(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function gt(e) {
	var n, r = G, i = e.parent;
	if (!V && i !== null && e.v !== t && i.f & 24576) return je(), e.v;
	K(i);
	try {
		e.f &= ~se, ht(e), n = Rn(e);
	} finally {
		K(r);
	}
	return n;
}
function _t(e) {
	var t = gt(e);
	if (!e.equals(t) && (e.wv = Fn(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), xt?.capture(e, t, !0)), e.deps === null))) {
		O(e, v);
		return;
	}
	V || (A === null ? Ze(e) : (on() || k?.is_fork) && A.set(e, t));
}
function vt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && nt(() => {
		t.ac.abort(ve), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Bn(t, 0), vn(t));
}
function yt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Vn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var bt = null, k = null, xt = null, A = null, St = null, Ct = !1, wt = !1, Tt = null, Et = null, Dt = 0, Ot = 1, kt = class e {
	id = Ot++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		bt === null ? bt = this : (bt.#n = this, this.#t = bt), bt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) O(r, y), t(r);
			for (r of n.m) O(r, b), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Dt++ > 1e3 && (this.#x(), At());
		for (let e of this.#u) this.#d.delete(e), O(e, y), this.schedule(e);
		for (let e of this.#d) O(e, b), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Tt = [], r = [], i = Et = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Pt(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Tt = null, Et = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Nt(e, t);
			i.length > 0 && k.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), xt = this, jt(r), jt(n), xt = null, this.#s?.resolve();
		var s = k;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= v;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= v : i & 4 ? t.push(r) : In(r) && (i & 16 && this.#d.add(r), Vn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), O(i, y), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) $e(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), A?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, A = null;
	}
	flush() {
		try {
			wt = !0, k = this, this.#g();
		} finally {
			Dt = 0, St = null, Tt = null, Et = null, wt = !1, k = null, A = null, N.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(ft);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, E(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= _()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!wt && !Ct && E(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		A = null;
	}
	schedule(e) {
		if (St = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Tt !== null && t === G && (H === null || !(H.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= v;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? bt = e : t.#t = e, this.linked = !1;
		}
	}
};
function j(e) {
	var t = Ct;
	Ct = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (Je(), k === null) return n;
			k.flush();
		}
	} finally {
		Ct = t;
	}
}
function At() {
	try {
		we();
	} catch (e) {
		D(e, St);
	}
}
var M = null;
function jt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && In(r) && (M = /* @__PURE__ */ new Set(), Vn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && xn(r), M?.size > 0)) {
				N.clear();
				for (let e of M) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) M.has(n) && (M.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Vn(n);
					}
				}
				M.clear();
			}
		}
		M = null;
	}
}
function Mt(e) {
	k.schedule(e);
}
function Nt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), O(e, v);
		for (var n = e.first; n !== null;) Nt(n, t), n = n.next;
	}
}
function Pt(e) {
	O(e, v);
	for (var t = e.first; t !== null;) Pt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Ft = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), It = !1;
function Lt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Be,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
	let n = Lt(e, t);
	return An(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Rt(e, t = !1, n = !0) {
	let r = Lt(e);
	return t || (r.equals = He), r;
}
function F(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && Ke() && H.f & 4325394 && (q === null || !q.has(e)) && ke(), zt(e, n ? Ut(t) : t, Et);
}
function zt(e, t, n = null) {
	if (!e.equals(t)) {
		N.set(e, V ? t : e.v);
		var r = kt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && gt(t), A === null && Ze(t);
		}
		e.wv = Fn(), Ht(e, y, n), Ke() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? jn([e]) : X.push(e)), !r.is_fork && Ft.size > 0 && !It && Bt();
	}
	return t;
}
function Bt() {
	It = !1;
	for (let e of Ft) {
		e.f & 1024 && O(e, b);
		let t;
		try {
			t = In(e);
		} catch {
			t = !0;
		}
		t && Vn(e);
	}
	Ft.clear();
}
function Vt(e) {
	F(e, e.v + 1);
}
function Ht(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ke(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & y) === 0;
			if (l && O(s, t), c & 131072) Ft.add(s);
			else if (c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (G === null || !(G.f & 2097152)) && (s.f |= se), Ht(u, b, n));
			} else if (l) {
				var d = s;
				c & 16 && M !== null && M.add(d), n === null ? Mt(d) : n.push(d);
			}
		}
	}
}
function Ut(e) {
	if (typeof e != "object" || !e || de in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ P(0), s = null, c = Nn, u = (e) => {
		if (Nn === c) return e();
		var t = H, n = Nn;
		W(null), Pn(c);
		var r = e();
		return W(t), Pn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ P(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && De();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ P(n.value, s);
				return i.set(t, e), e;
			}) : F(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ P(t, s));
					i.set(n, e), Vt(o);
				}
			} else F(r, t), Vt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === de) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ P(Ut(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Q(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Q(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === de) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || G !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ P(a ? Ut(e[n]) : t, s)), i.set(n, r)), Q(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ P(t, s)), i.set(p + "", m)) : F(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ P(void 0, s)), F(d, Ut(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Ut(r));
				F(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && F(_, v + 1);
				}
				Vt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Q(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			Oe();
		}
	});
}
var Wt, Gt, Kt, qt;
function Jt() {
	if (Wt === void 0) {
		Wt = window, Gt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Kt = l(t, "firstChild").get, qt = l(t, "nextSibling").get, m(e) && (e[he] = void 0, e[me] = null, e[ge] = void 0, e.__e = void 0), m(n) && (n[_e] = void 0);
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Yt(e) {
	return Kt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return qt.call(e);
}
function Xt(e, t) {
	if (!x) return /* @__PURE__ */ Yt(e);
	var n = /* @__PURE__ */ Yt(S);
	if (n === null) n = S.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), C(r), r;
	}
	return t && nn(n), C(n), n;
}
function Zt(e, t = !1) {
	if (!x) {
		var n = /* @__PURE__ */ Yt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ L(n) : n;
	}
	if (t) {
		if (S?.nodeType !== 3) {
			var r = I();
			return S?.before(r), C(r), r;
		}
		nn(S);
	}
	return S;
}
function Qt(e, t = 1, n = !1) {
	let r = x ? S : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ L(r);
	if (!x) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), C(a), a;
		}
		nn(r);
	}
	return C(r), r;
}
function $t(e) {
	e.textContent = "";
}
function en() {
	return !1;
}
function tn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function nn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function rn(e) {
	G === null && (H === null && Ce(e), Se()), V && xe(e);
}
function an(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= ee);
	var r = {
		ctx: w,
		deps: null,
		nodes: null,
		f: e | y | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	k?.register_created_effect(r);
	var i = r;
	if (e & 4) Tt === null ? kt.ensure().schedule(r) : Tt.push(r);
	else if (t !== null) {
		try {
			Vn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ie));
	}
	if (i !== null && (i.parent = n, n !== null && an(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function on() {
	return H !== null && !U;
}
function sn(e) {
	let t = R(8, null);
	return O(t, v), t.teardown = e, t;
}
function cn(e) {
	rn("$effect");
	var t = G.f;
	if (!H && t & 32 && w !== null && !w.i) {
		var n = w;
		(n.e ??= []).push(e);
	} else return ln(e);
}
function ln(e) {
	return R(4 | oe, e);
}
function un(e) {
	kt.ensure();
	let t = R(64 | ae, e);
	return () => {
		B(t);
	};
}
function dn(e) {
	kt.ensure();
	let t = R(64 | ae, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Sn(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function fn(e) {
	return R(4, e);
}
function pn(e) {
	return R(le | ae, e);
}
function mn(e, t = 0) {
	return R(8 | t, e);
}
function hn(e, t = [], n = [], r = []) {
	st(r, t, n, (t) => {
		R(8, () => {
			e(...t.map(Q));
		});
	});
}
function gn(e, t = 0) {
	return R(16 | t, e);
}
function z(e) {
	return R(32 | ae, e);
}
function _n(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		kn(!0), W(null);
		try {
			t.call(null);
		} finally {
			kn(e), W(n);
		}
	}
}
function vn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && nt(() => {
			e.abort(ve);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function yn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (bn(e.nodes.start, e.nodes.end), n = !0), e.f |= re, vn(e, t && !n), Bn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	_n(e), e.f ^= re, e.f |= te;
	var i = e.parent;
	i !== null && i.first !== null && xn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function bn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ L(e);
		e.remove(), e = n;
	}
}
function xn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Sn(e, t, n = !0) {
	var r = [];
	Cn(e, r, !0);
	var i = () => {
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Cn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ee;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Cn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function wn(e) {
	Tn(e, !0);
}
function Tn(e, t) {
	if (e.f & 8192) {
		e.f ^= ee, e.f & 1024 || (O(e, y), kt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Tn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function En(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ L(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Dn = null, On = !1, V = !1;
function kn(e) {
	V = e;
}
var H = null, U = !1;
function W(e) {
	H = e;
}
var G = null;
function K(e) {
	G = e;
}
var q = null;
function An(e) {
	H !== null && (q ??= /* @__PURE__ */ new Set()).add(e);
}
var J = null, Y = 0, X = null;
function jn(e) {
	X = e;
}
var Mn = 1, Z = 0, Nn = Z;
function Pn(e) {
	Nn = e;
}
function Fn() {
	return ++Mn;
}
function In(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~se), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (In(a) && _t(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && O(e, v);
	}
	return !1;
}
function Ln(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(q !== null && q.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Ln(a, t, !1) : t === a && (n ? O(a, y) : a.f & 1024 && O(a, b), Mt(a));
	}
}
function Rn(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = w, s = U, c = Nn, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, Ue(e.ctx), U = !1, Nn = ++Z, e.ac !== null && (nt(() => {
		e.ac.abort(ve);
	}), e.ac = null);
	try {
		e.f |= ce;
		var u = e.fn, d = u();
		e.f |= ne;
		var f = e.deps, p = k?.is_fork;
		if (J !== null) {
			var m;
			if (p || Bn(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (on() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (Bn(e, Y), f.length = Y);
		if (Ke() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) Ln(X[m], e);
		if (i !== null && i !== e) {
			if (Z++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Z;
			if (t !== null) for (let e of t) e.rv = Z;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= ue), d;
	} catch (e) {
		return Ye(e);
	} finally {
		e.f ^= ce, J = t, Y = n, X = r, H = i, q = a, Ue(o), U = s, Nn = c;
	}
}
function zn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (J === null || !a.call(J, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~se), c.v !== t && Ze(c), c.ac !== null && nt(() => {
			c.ac.abort(ve), c.ac = null, O(c, y);
		}), vt(c), Bn(c, 0);
	}
}
function Bn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) zn(e, n[r]);
}
function Vn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		O(e, v);
		var n = G, r = On;
		G = e, On = !(t & 96);
		try {
			t & 16777232 ? yn(e) : vn(e), _n(e);
			var i = Rn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Mn;
		} finally {
			On = r, G = n;
		}
	}
}
function Q(e) {
	var t = !!(e.f & 2);
	if (Dn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !q.has(e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < Z && (e.rv = Z, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			H.deps ??= [], a.call(H.deps, e) || H.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : a.call(r, H) || r.push(H);
		}
	}
	if (V && N.has(e)) return N.get(e);
	if (t) {
		var i = e;
		if (V) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Un(i)) && (o = gt(i)), N.set(i, o), o;
		}
		var s = !(i.f & 512) && !U && H !== null && (On || !!(H.f & 512)), c = (i.f & ne) === 0;
		In(i) && (s && (i.f |= 512), _t(i)), s && !c && (yt(i), Hn(i));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Hn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (yt(t), Hn(t));
}
function Un(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (N.has(t) || t.f & 2 && Un(t)) return !0;
	return !1;
}
function Wn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Gn = Symbol("events"), Kn = /* @__PURE__ */ new Set(), qn = /* @__PURE__ */ new Set();
function Jn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || er.call(t, e), !e.cancelBubble) return nt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? E(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Yn(e, t, n, r = {}) {
	var i = Jn(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function Xn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Jn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && sn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Zn(e, t, n) {
	(t[Gn] ??= {})[e] = n;
}
function Qn(e) {
	for (var t = 0; t < e.length; t++) Kn.add(e[t]);
	for (var n of qn) n(e);
}
var $n = null;
function er(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	$n = e;
	var o = 0, s = $n === e && e[Gn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Gn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = H, f = G;
		W(null), K(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Gn]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Gn] = t, delete e.currentTarget, W(d), K(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var tr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function nr(e) {
	return tr?.createHTML(e) ?? e;
}
function rr(e) {
	var t = tn("template");
	return t.innerHTML = nr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ir(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ar(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (x) return ir(S, null), S;
		i === void 0 && (i = rr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Yt(i)));
		var t = r || Gt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Yt(t), s = t.lastChild;
			ir(o, s);
		} else ir(t, t);
		return t;
	};
}
function or() {
	if (x) return ir(S, null), S;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), ir(t, n), e;
}
function sr(e, t) {
	if (x) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = S), Fe();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var cr = ["touchstart", "touchmove"];
function lr(e) {
	return cr.includes(e);
}
function ur(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[_e] ??= e.nodeValue) && (e[_e] = n, e.nodeValue = `${n}`);
}
function dr(e, t) {
	return mr(e, t);
}
function fr(t, n) {
	Jt(), n.intro = n.intro ?? !1;
	let r = n.target, i = x, a = S;
	try {
		for (var o = /* @__PURE__ */ Yt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ L(o);
		if (!o) throw e;
		Pe(!0), C(o);
		let i = mr(t, {
			...n,
			anchor: o
		});
		return Pe(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Te(), Jt(), $t(r), Pe(!1), dr(t, n);
	} finally {
		Pe(i), C(a);
	}
}
var pr = /* @__PURE__ */ new Map();
function mr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	Jt();
	var u = void 0, d = dn(() => {
		var c = r ?? n.appendChild(I());
		at(c, { pending: () => {} }, (n) => {
			We({});
			var r = w;
			if (s && (r.c = s), a && (i.$$events = a), x && ir(n, null), u = t(n, i) || {}, x && (G.nodes.end = S, S === null || S.nodeType !== 8 || S.data !== "]")) throw Me(), e;
			Ge();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = lr(r);
					for (let e of [n, document]) {
						var a = pr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), pr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, er, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(Kn)), qn.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = pr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, er), t.delete(e), t.size === 0 && pr.delete(r)) : t.set(e, i);
			}
			qn.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return hr.set(u, d), u;
}
var hr = /* @__PURE__ */ new WeakMap();
function gr(e, t) {
	let n = hr.get(e);
	return n ? (hr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var _r = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) wn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (wn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (B(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						En(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else B(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Sn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (B(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = en();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = I();
				i.append(a), this.#n.set(e, {
					effect: z(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, z(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else x && (this.anchor = S), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function vr(e, t, n = !1) {
	var r;
	x && (r = S, Fe());
	var i = new _r(e), a = n ? ie : 0;
	function o(e, t) {
		if (x) {
			var n = ze(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Re();
				C(a), i.anchor = a, Pe(!1), i.ensure(e, t), Pe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	gn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function yr(e, t) {
	fn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = tn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var br = [..." 	\n\r\f\xA0\v﻿"];
function xr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || br.includes(r[o - 1])) && (s === r.length || br.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Sr(e, t, n, r, i, a) {
	var o = e[he];
	if (x || o !== n || o === void 0) {
		var s = xr(n, r, a);
		(!x || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[he] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Cr = Symbol("is custom element"), wr = Symbol("is html"), Tr = ye ? "link" : "LINK";
function Er(e, t, n, r) {
	var i = Dr(e);
	x && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Tr) || i[t] !== (i[t] = n) && (t === "loading" && (e[pe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && kr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Dr(e) {
	return e[me] ??= {
		[Cr]: e.nodeName.includes("-"),
		[wr]: e.namespaceURI === n
	};
}
var Or = /* @__PURE__ */ new Map();
function kr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Or.get(t);
	if (n) return n;
	Or.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Ar(e, t) {
	return e === t || e?.[de] === t;
}
function jr(e = {}, t, n, r) {
	var i = w.r, a = G;
	return fn(() => {
		var o, s;
		return mn(() => {
			o = s, s = r?.() || [], Wn(() => {
				Ar(n(...s), e) || (t(e, ...s), o && Ar(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ar(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ dt(r), Q(u)) : (c && (c = !1, s = o ? Wn(r) : r), s);
	let f;
	if (a) {
		var p = de in e || fe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = tt(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Ee(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? dt : mt)(() => (v = !1, g()));
	a && Q(y);
	var b = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(y) : i && a ? Ut(e) : e;
			return F(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return V && v || b.f & 16384 ? y.v : Q(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Mr(e) {
	return new Nr(e);
}
var Nr = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Rt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Q(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === fe || (Q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? fr : dr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && j(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			gr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, Pr;
typeof HTMLElement == "function" && (Pr = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = tn("slot");
					e !== "default" && (n.name = e), sr(t, n);
				};
			}
			let t = {}, n = Ir(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Fr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Mr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = un(() => {
				mn(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Fr(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Fr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Fr(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function Ir(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Lr(e, t, n, r, i, a) {
	let o = class extends Pr {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Fr(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region node_modules/svelte/src/reactivity/reactive-value.js
var Rr = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = rt(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, zr = /\(.+\)/, Br = /* @__PURE__ */ new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), Vr = /*@__PURE__*/ new class extends Rr {
	constructor(e, t) {
		let n = zr.test(e) || e.split(/[\s,]+/).some((e) => Br.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => Yn(r, "change", e));
	}
}("(prefers-reduced-motion: reduce)"), Hr = /* @__PURE__ */ ar("<div aria-atomic=\"true\"><span class=\"wrn-toast-icon svelte-1w29e1y\" aria-hidden=\"true\"> </span> <span class=\"wrn-toast-text svelte-1w29e1y\"> </span> <button type=\"button\" class=\"wrn-toast-dismiss svelte-1w29e1y\">&times;</button></div>"), Ur = {
	hash: "svelte-1w29e1y",
	code: "\n	@keyframes svelte-1w29e1y-wrn-toast-enter {\n		from { opacity: 0; transform: translateX(24px); }\n		to { opacity: 1; transform: translateX(0); }\n	}\n\n	@keyframes svelte-1w29e1y-wrn-toast-exit {\n		from { opacity: 1; transform: translateX(0); }\n		to { opacity: 0; transform: translateX(12px); }\n	}.wrn-toast.svelte-1w29e1y {display:flex;align-items:center;gap:8px;background:var(--wrn-toast-bg, var(--worn-surface, #fdfbf7));border:1px solid var(--wrn-toast-border, var(--worn-border, #e2ddd5));border-radius:var(--wrn-toast-radius, 6px);min-block-size:44px;padding:6px 8px 6px 14px;font-family:var(--wrn-toast-font, inherit);font-size:13px;font-weight:600;color:var(--wrn-toast-text, var(--worn-text, #21322b));text-align:start;width:100%;max-inline-size:100%;min-inline-size:0;box-sizing:border-box;box-shadow:0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);position:relative;overflow:hidden;\n		animation: svelte-1w29e1y-wrn-toast-enter 220ms ease-out;}.wrn-toast.is-dismissing.svelte-1w29e1y { animation: svelte-1w29e1y-wrn-toast-exit 180ms ease-in forwards;pointer-events:none;}.wrn-toast.is-error.svelte-1w29e1y {border-color:var(--wrn-toast-error-border, var(--worn-danger-border, #e74c3c));background:var(--wrn-toast-error-bg, var(--worn-danger-bg, var(--wrn-toast-bg, var(--worn-surface, #fdf0ef))));color:var(--wrn-toast-error-text, var(--worn-danger-text, var(--wrn-toast-text, var(--worn-text, #21322b))));}.wrn-toast.is-success.svelte-1w29e1y {border-color:var(--wrn-toast-success-border, var(--worn-success-border, #27ae60));background:var(--wrn-toast-success-bg, var(--worn-success-bg, var(--wrn-toast-bg, var(--worn-surface, #edf9f0))));color:var(--wrn-toast-success-text, var(--worn-success-text, var(--wrn-toast-text, var(--worn-text, #21322b))));}.wrn-toast-icon.svelte-1w29e1y {font-size:14px;line-height:1;flex-shrink:0;}.wrn-toast-text.svelte-1w29e1y {flex:1;max-inline-size:100%;min-width:0;line-height:1.3;overflow-wrap:anywhere;}.wrn-toast-dismiss.svelte-1w29e1y {display:inline-grid;place-items:center;flex:0 0 auto;inline-size:32px;block-size:32px;margin:0;padding:0;border:0;border-radius:var(--wrn-toast-radius, 6px);background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:18px;line-height:1;}.wrn-toast-dismiss.svelte-1w29e1y:hover {background:var(--wrn-toast-dismiss-hover-bg, var(--worn-hover-bg, rgba(0,0,0,0.08)));}.wrn-toast-dismiss.svelte-1w29e1y:focus-visible {outline:2px dashed var(--wrn-toast-focus, var(--worn-focus, var(--worn-accent, currentColor)));outline-offset:1px;}\n\n	@media (pointer: coarse) {.wrn-toast.svelte-1w29e1y {min-block-size:52px;padding-block:4px;}.wrn-toast-dismiss.svelte-1w29e1y {inline-size:44px;block-size:44px;}\n	}\n\n	@media (prefers-reduced-motion: reduce) {.wrn-toast.svelte-1w29e1y,\n		.wrn-toast.is-dismissing.svelte-1w29e1y { animation: none;}\n	}"
};
function Wr(e, t) {
	We(t, !0), yr(e, Ur);
	let n = $(t, "message", 7), r = $(t, "kind", 7, "info"), i = $(t, "dismissLabel", 7, "Dismiss notification"), a = $(t, "ondismiss", 7), o = $(t, "duration", 7, 3e3), s = /* @__PURE__ */ P(!0), c = /* @__PURE__ */ P(!1), l, u = 0, d = 0, f = 0;
	function p() {
		l !== void 0 && (clearTimeout(l), l = void 0);
	}
	function m() {
		F(s, !1), a()?.();
	}
	function h() {
		if (!Q(c)) {
			if (F(c, !0), p(), Vr.current) {
				m();
				return;
			}
			setTimeout(m, 180);
		}
	}
	function g() {
		if (p(), !(o() <= 0 || f > 0)) {
			if (u <= 0) {
				h();
				return;
			}
			d = Date.now(), l = setTimeout(() => {
				l = void 0, u = 0, h();
			}, u);
		}
	}
	function _() {
		f += 1, l !== void 0 && (p(), u -= Date.now() - d, u = Math.max(0, u));
	}
	function v() {
		f = Math.max(0, f - 1), f === 0 && !Q(c) && g();
	}
	function y(e) {
		e.currentTarget.contains(e.relatedTarget) || v();
	}
	cn(() => (u = o(), g(), p));
	var b = {
		get message() {
			return n();
		},
		set message(e) {
			n(e), j();
		},
		get kind() {
			return r();
		},
		set kind(e = "info") {
			r(e), j();
		},
		get dismissLabel() {
			return i();
		},
		set dismissLabel(e = "Dismiss notification") {
			i(e), j();
		},
		get ondismiss() {
			return a();
		},
		set ondismiss(e) {
			a(e), j();
		},
		get duration() {
			return o();
		},
		set duration(e = 3e3) {
			o(e), j();
		}
	}, ee = or(), te = Zt(ee), ne = (e) => {
		var t = Hr();
		let a;
		var o = Xt(t), s = Xt(o, !0);
		Ie(o);
		var l = Qt(o, 2), u = Xt(l, !0);
		Ie(l);
		var d = Qt(l, 2);
		Ie(t), hn(() => {
			a = Sr(t, 1, "wrn-toast svelte-1w29e1y", null, a, {
				"is-error": r() === "error",
				"is-success": r() === "success",
				"is-dismissing": Q(c)
			}), Er(t, "role", r() === "error" ? "alert" : "status"), Er(t, "aria-live", r() === "error" ? "assertive" : "polite"), ur(s, r() === "error" ? "✗" : r() === "success" ? "✓" : "→"), ur(u, n()), Er(d, "aria-label", i());
		}), Xn("pointerenter", t, _), Xn("pointerleave", t, v), Zn("focusin", t, _), Zn("focusout", t, y), Zn("click", d, h), sr(e, t);
	};
	return vr(te, (e) => {
		Q(s) && e(ne);
	}), sr(e, ee), Ge(b);
}
Qn([
	"focusin",
	"focusout",
	"click"
]), Lr(Wr, {
	message: {},
	kind: {},
	dismissLabel: {},
	ondismiss: {},
	duration: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/ToastElement.svelte
var Gr = /* @__PURE__ */ ar("<div><!></div>");
function Kr(e, t) {
	We(t, !0);
	let n = $(t, "message", 7, ""), r = $(t, "kind", 7, "info"), i = $(t, "dismissLabel", 7, "Dismiss notification"), a = $(t, "duration", 7, 3e3), o;
	function s(e, t) {
		o?.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0
		}));
	}
	var c = {
		get message() {
			return n();
		},
		set message(e = "") {
			n(e), j();
		},
		get kind() {
			return r();
		},
		set kind(e = "info") {
			r(e), j();
		},
		get dismissLabel() {
			return i();
		},
		set dismissLabel(e = "Dismiss notification") {
			i(e), j();
		},
		get duration() {
			return a();
		},
		set duration(e = 3e3) {
			a(e), j();
		}
	}, l = Gr();
	return Wr(Xt(l), {
		get message() {
			return n();
		},
		get kind() {
			return r();
		},
		get dismissLabel() {
			return i();
		},
		get duration() {
			return a();
		},
		ondismiss: () => s("worn-dismiss", {})
	}), Ie(l), jr(l, (e) => o = e, () => o), sr(e, l), Ge(c);
}
customElements.define("worn-toast", Lr(Kr, {
	message: {},
	kind: {},
	dismissLabel: { attribute: "dismiss-label" },
	duration: { type: "Number" }
}, [], []));
//#endregion
export { Kr as default };
