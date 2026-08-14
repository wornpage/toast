//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, ee = () => {};
function h(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function te() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var g = 1024, _ = 2048, v = 4096, ne = 8192, re = 16384, ie = 32768, ae = 1 << 25, oe = 65536, se = 1 << 19, ce = 1 << 20, le = 65536, ue = 1 << 21, de = 1 << 22, fe = 1 << 23, pe = Symbol("$state"), me = Symbol("legacy props"), he = Symbol(""), ge = Symbol("attributes"), _e = Symbol("class"), ve = Symbol("style"), ye = Symbol("text"), be = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), xe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Se() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Ce(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function we() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Te(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ee() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function De() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Oe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function ke() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ae() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function je() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Me() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ne() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Pe(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Fe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var y = !1;
function Ie(e) {
	y = e;
}
var b;
function x(t) {
	if (t === null) throw Pe(), e;
	return b = t;
}
function Le() {
	return x(/* @__PURE__ */ F(b));
}
function Re(t) {
	if (y) {
		if (/* @__PURE__ */ F(b) !== null) throw Pe(), e;
		b = t;
	}
}
function ze(e = 1) {
	if (y) {
		for (var t = e, n = b; t--;) n = /* @__PURE__ */ F(n);
		b = n;
	}
}
function Be(e = !0) {
	for (var t = 0, n = b;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ F(n);
		e && n.remove(), n = i;
	}
}
function Ve(t) {
	if (!t || t.nodeType !== 8) throw Pe(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function He(e) {
	return e === this.v;
}
function Ue(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function We(e) {
	return !Ue(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var S = null;
function Ge(e) {
	S = e;
}
function Ke(e, t = !1, n) {
	S = {
		p: S,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: U,
		l: null
	};
}
function qe(e) {
	var t = S, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) dn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, S = t.p, e ?? {};
}
function Je() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var C = [];
function Ye() {
	var e = C;
	C = [], h(e);
}
function w(e) {
	if (C.length === 0 && !Tt) {
		var t = C;
		queueMicrotask(() => {
			t === C && Ye();
		});
	}
	C.push(e);
}
function Xe() {
	for (; C.length > 0;) Ye();
}
function Ze(e) {
	var t = U;
	if (t === null) return B.f |= fe, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	T(e, t);
}
function T(e, t) {
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
var Qe = ~(_ | v | g);
function E(e, t) {
	e.f = e.f & Qe | t;
}
function $e(e) {
	e.f & 512 || e.deps === null ? E(e, g) : E(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function et(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= le, et(t.deps));
}
function tt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), et(e.deps), E(e, g);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var nt = !1;
function rt(e) {
	var t = nt;
	try {
		return nt = !1, [e(), nt];
	} finally {
		nt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function it(e) {
	var t = B, n = U;
	H(null), W(null);
	try {
		return e();
	} finally {
		H(t), W(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function at(e) {
	let t = 0, n = zt(0), r;
	return () => {
		cn() && (Q(n), gn(() => (t === 0 && (r = Wn(() => e(() => Ut(n)))), t += 1, () => {
			w(() => {
				--t, t === 0 && (r?.(), r = void 0, Ut(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ot = oe | se;
function st(e, t, n, r) {
	new ct(e, t, n, r);
}
var ct = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = y ? b : null;
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
	#h = at(() => (this.#m = zt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = U;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = U.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = vn(() => {
			if (y) {
				let e = this.#t;
				Le();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, ot), y && (this.#e = b);
	}
	#g() {
		try {
			this.#a = L(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		w(r), t && (this.#s = L(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Fe();
				return;
			}
			t = !0, n && Me(), this.#s !== null && wn(this.#s, () => {
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
					T(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = L(() => e(this.#e)), w(() => {
			var e = this.#c = document.createDocumentFragment(), t = P();
			e.append(t), this.#a = this.#S(() => L(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, wn(this.#o, () => {
				this.#o = null;
			}), this.#x(D));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = L(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				On(this.#a, e);
				let t = this.#n.pending;
				this.#o = L(() => t(this.#e));
			} else this.#x(D);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		tt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = U, n = B, r = S;
		W(this.#i), H(this.#i), Ge(this.#i.ctx);
		try {
			return jt.ensure(), e();
		} catch (e) {
			return Ze(e), null;
		} finally {
			W(t), H(n), Ge(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && wn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, w(() => {
			this.#d = !1, this.#m && Vt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		D?.is_fork ? (this.#a && D.skip_effect(this.#a), this.#o && D.skip_effect(this.#o), this.#s && D.skip_effect(this.#s), D.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (R(this.#a), null), this.#o &&= (R(this.#o), null), this.#s &&= (R(this.#s), null), y && (x(this.#t), ze(), x(Be()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return L(() => {
						var r = U;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return T(e, this.#i.parent), null;
				}
			}));
		};
		w(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				T(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => T(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function lt(e, t, n, r) {
	let i = Je() ? pt : gt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = U, c = ut(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				T(e, s);
			}
			dt();
		}
	}
	var d = ft();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ ht(e))).then(u).catch((e) => T(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), dt();
	}) : f();
}
function ut() {
	var e = U, t = B, n = S, r = D;
	return function(i = !0) {
		W(e), H(t), Ge(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function dt(e = !0) {
	W(null), H(null), Ge(null), e && D?.deactivate();
}
function ft() {
	var e = U, t = e.b, n = D, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function pt(e) {
	var n = 2 | _;
	return U !== null && (U.f |= se), {
		ctx: S,
		deps: null,
		effects: null,
		equals: He,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: U,
		ac: null
	};
}
var mt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ht(e, n, r) {
	let i = U;
	i === null && Se();
	var a = void 0, o = zt(t), s = !B, c = /* @__PURE__ */ new Set();
	return hn(() => {
		var t = U, n = te();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== be && n.reject(e);
			}).finally(dt);
		} catch (e) {
			n.reject(e), dt();
		}
		var r = D;
		if (s) {
			if (t.f & 32768) var l = ft();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(mt);
			else for (let e of c.values()) e.reject(mt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== mt && (r.activate(), t ? (o.f |= fe, Vt(o, t)) : (o.f & 8388608 && (o.f ^= fe), Vt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), ln(() => {
		for (let e of c) e.reject(mt);
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
function gt(e) {
	let t = /* @__PURE__ */ pt(e);
	return t.equals = We, t;
}
function _t(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) R(t[n]);
	}
}
function vt(e) {
	var n, r = U, i = e.parent;
	if (!z && i !== null && e.v !== t && i.f & 24576) return Ne(), e.v;
	W(i);
	try {
		e.f &= ~le, _t(e), n = zn(e);
	} finally {
		W(r);
	}
	return n;
}
function yt(e) {
	var t = vt(e);
	if (!e.equals(t) && (e.wv = In(), (!D?.is_fork || e.deps === null) && (D === null ? e.v = t : (D.capture(e, t, !0), Ct?.capture(e, t, !0)), e.deps === null))) {
		E(e, g);
		return;
	}
	z || (O === null ? $e(e) : (cn() || D?.is_fork) && O.set(e, t));
}
function bt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && it(() => {
		t.ac.abort(be), t.ac = null;
	}), t.fn !== null && (t.teardown = ee), Vn(t, 0), bn(t));
}
function xt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Z(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var St = null, D = null, Ct = null, O = null, wt = null, Tt = !1, Et = !1, Dt = null, Ot = null, kt = 0, At = 1, jt = class e {
	id = At++;
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
		St === null ? St = this : (St.#n = this, this.#t = St), St = this;
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
			for (var r of n.d) E(r, _), t(r);
			for (r of n.m) E(r, v), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, kt++ > 1e3 && (this.#x(), Mt());
		for (let e of this.#u) this.#d.delete(e), E(e, _), this.schedule(e);
		for (let e of this.#d) E(e, v), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Dt = [], r = [], i = Ot = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw It(e), this.#h() || this.discard(), t;
		}
		if (D = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Dt = null, Ot = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Ft(e, t);
			i.length > 0 && D.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Ct = this, Nt(r), Nt(n), Ct = null, this.#s?.resolve();
		var s = D;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= g;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= g : i & 4 ? t.push(r) : Ln(r) && (i & 16 && this.#d.add(r), Z(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), E(i, _), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), D = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) tt(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), O?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		D = this;
	}
	deactivate() {
		D = null, O = null;
	}
	flush() {
		try {
			Et = !0, D = this, this.#g();
		} finally {
			kt = 0, wt = null, Dt = null, Ot = null, Et = !1, D = null, O = null, j.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(mt);
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
		this.#m || (this.#m = !0, w(() => {
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
		return (this.#s ??= te()).promise;
	}
	static ensure() {
		if (D === null) {
			let t = D = new e();
			!Et && !Tt && w(() => {
				t.#e || t.flush();
			});
		}
		return D;
	}
	apply() {
		O = null;
	}
	schedule(e) {
		if (wt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Dt !== null && t === U && (B === null || !(B.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= g;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? St = e : t.#t = e, this.linked = !1;
		}
	}
};
function k(e) {
	var t = Tt;
	Tt = !0;
	try {
		var n;
		for (e && (D !== null && !D.is_fork && D.flush(), n = e());;) {
			if (Xe(), D === null) return n;
			D.flush();
		}
	} finally {
		Tt = t;
	}
}
function Mt() {
	try {
		Ee();
	} catch (e) {
		T(e, wt);
	}
}
var A = null;
function Nt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Ln(r) && (A = /* @__PURE__ */ new Set(), Z(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Cn(r), A?.size > 0)) {
				j.clear();
				for (let e of A) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) A.has(n) && (A.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Z(n);
					}
				}
				A.clear();
			}
		}
		A = null;
	}
}
function Pt(e) {
	D.schedule(e);
}
function Ft(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), E(e, g);
		for (var n = e.first; n !== null;) Ft(n, t), n = n.next;
	}
}
function It(e) {
	E(e, g);
	for (var t = e.first; t !== null;) It(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Lt = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Map(), Rt = !1;
function zt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: He,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function M(e, t) {
	let n = zt(e, t);
	return Mn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Bt(e, t = !1, n = !0) {
	let r = zt(e);
	return t || (r.equals = We), r;
}
function N(e, t, n = !1) {
	return B !== null && (!V || B.f & 131072) && Je() && B.f & 4325394 && (G === null || !G.has(e)) && je(), Vt(e, n ? Gt(t) : t, Ot);
}
function Vt(e, t, n = null) {
	if (!e.equals(t)) {
		j.set(e, z ? t : e.v);
		var r = jt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && vt(t), O === null && $e(t);
		}
		e.wv = In(), Wt(e, _, n), Je() && U !== null && U.f & 1024 && !(U.f & 96) && (J === null ? Nn([e]) : J.push(e)), !r.is_fork && Lt.size > 0 && !Rt && Ht();
	}
	return t;
}
function Ht() {
	Rt = !1;
	for (let e of Lt) {
		e.f & 1024 && E(e, v);
		let t;
		try {
			t = Ln(e);
		} catch {
			t = !0;
		}
		t && Z(e);
	}
	Lt.clear();
}
function Ut(e) {
	N(e, e.v + 1);
}
function Wt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Je(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === U)) {
			var l = (c & _) === 0;
			if (l && E(s, t), c & 131072) Lt.add(s);
			else if (c & 2) {
				var u = s;
				O?.delete(u), c & 65536 || (c & 512 && (U === null || !(U.f & 2097152)) && (s.f |= le), Wt(u, v, n));
			} else if (l) {
				var d = s;
				c & 16 && A !== null && A.add(d), n === null ? Pt(d) : n.push(d);
			}
		}
	}
}
function Gt(e) {
	if (typeof e != "object" || !e || pe in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ M(0), s = null, c = X, u = (e) => {
		if (X === c) return e();
		var t = B, n = X;
		H(null), Fn(c);
		var r = e();
		return H(t), Fn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ M(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && ke();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ M(n.value, s);
				return i.set(t, e), e;
			}) : N(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ M(t, s));
					i.set(n, e), Ut(o);
				}
			} else N(r, t), Ut(o);
			return !0;
		},
		get(n, r, a) {
			if (r === pe) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ M(Gt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
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
			if (n === pe) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || U !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ M(a ? Gt(e[n]) : t, s)), i.set(n, r)), Q(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ M(t, s)), i.set(p + "", m)) : N(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ M(void 0, s)), N(d, Gt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var ee = u(() => Gt(r));
				N(d, ee);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, n);
			if (h?.set && h.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var te = i.get("length"), g = Number(n);
					Number.isInteger(g) && g >= te.v && N(te, g + 1);
				}
				Ut(o);
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
			Ae();
		}
	});
}
var Kt, qt, Jt, Yt;
function Xt() {
	if (Kt === void 0) {
		Kt = window, qt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Jt = l(t, "firstChild").get, Yt = l(t, "nextSibling").get, m(e) && (e[_e] = void 0, e[ge] = null, e[ve] = void 0, e.__e = void 0), m(n) && (n[ye] = void 0);
	}
}
function P(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Zt(e) {
	return Jt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function F(e) {
	return Yt.call(e);
}
function Qt(e, t) {
	if (!y) return /* @__PURE__ */ Zt(e);
	var n = /* @__PURE__ */ Zt(b);
	if (n === null) n = b.appendChild(P());
	else if (t && n.nodeType !== 3) {
		var r = P();
		return n?.before(r), x(r), r;
	}
	return t && an(n), x(n), n;
}
function $t(e, t = !1) {
	if (!y) {
		var n = /* @__PURE__ */ Zt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ F(n) : n;
	}
	if (t) {
		if (b?.nodeType !== 3) {
			var r = P();
			return b?.before(r), x(r), r;
		}
		an(b);
	}
	return b;
}
function en(e, t = 1, n = !1) {
	let r = y ? b : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ F(r);
	if (!y) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = P();
			return r === null ? i?.after(a) : r.before(a), x(a), a;
		}
		an(r);
	}
	return x(r), r;
}
function tn(e) {
	e.textContent = "";
}
function nn() {
	return !1;
}
function rn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function an(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function on(e) {
	U === null && (B === null && Te(e), we()), z && Ce(e);
}
function sn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function I(e, t) {
	var n = U;
	n !== null && n.f & 8192 && (e |= ne);
	var r = {
		ctx: S,
		deps: null,
		nodes: null,
		f: e | _ | 512,
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
	D?.register_created_effect(r);
	var i = r;
	if (e & 4) Dt === null ? jt.ensure().schedule(r) : Dt.push(r);
	else if (t !== null) {
		try {
			Z(r);
		} catch (e) {
			throw R(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= oe));
	}
	if (i !== null && (i.parent = n, n !== null && sn(i, n), B !== null && B.f & 2 && !(e & 64))) {
		var a = B;
		(a.effects ??= []).push(i);
	}
	return r;
}
function cn() {
	return B !== null && !V;
}
function ln(e) {
	let t = I(8, null);
	return E(t, g), t.teardown = e, t;
}
function un(e) {
	on("$effect");
	var t = U.f;
	if (!B && t & 32 && S !== null && !S.i) {
		var n = S;
		(n.e ??= []).push(e);
	} else return dn(e);
}
function dn(e) {
	return I(4 | ce, e);
}
function fn(e) {
	jt.ensure();
	let t = I(64 | se, e);
	return () => {
		R(t);
	};
}
function pn(e) {
	jt.ensure();
	let t = I(64 | se, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? wn(t, () => {
			R(t), n(void 0);
		}) : (R(t), n(void 0));
	});
}
function mn(e) {
	return I(4, e);
}
function hn(e) {
	return I(de | se, e);
}
function gn(e, t = 0) {
	return I(8 | t, e);
}
function _n(e, t = [], n = [], r = []) {
	lt(r, t, n, (t) => {
		I(8, () => {
			e(...t.map(Q));
		});
	});
}
function vn(e, t = 0) {
	return I(16 | t, e);
}
function L(e) {
	return I(32 | se, e);
}
function yn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = z, n = B;
		jn(!0), H(null);
		try {
			t.call(null);
		} finally {
			jn(e), H(n);
		}
	}
}
function bn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && it(() => {
			e.abort(be);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : R(n, t), n = r;
	}
}
function xn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || R(t), t = n;
	}
}
function R(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Sn(e.nodes.start, e.nodes.end), n = !0), e.f |= ae, bn(e, t && !n), Vn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	yn(e), e.f ^= ae, e.f |= re;
	var i = e.parent;
	i !== null && i.first !== null && Cn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Sn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ F(e);
		e.remove(), e = n;
	}
}
function Cn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function wn(e, t, n = !0) {
	var r = [];
	Tn(e, r, !0);
	var i = () => {
		n && R(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Tn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ne;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Tn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function En(e) {
	Dn(e, !0);
}
function Dn(e, t) {
	if (e.f & 8192) {
		e.f ^= ne, e.f & 1024 || (E(e, _), jt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Dn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function On(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ F(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var kn = null, An = !1, z = !1;
function jn(e) {
	z = e;
}
var B = null, V = !1;
function H(e) {
	B = e;
}
var U = null;
function W(e) {
	U = e;
}
var G = null;
function Mn(e) {
	B !== null && (G ??= /* @__PURE__ */ new Set()).add(e);
}
var K = null, q = 0, J = null;
function Nn(e) {
	J = e;
}
var Pn = 1, Y = 0, X = Y;
function Fn(e) {
	X = e;
}
function In() {
	return ++Pn;
}
function Ln(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~le), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Ln(a) && yt(a), a.wv > e.wv) return !0;
		}
		t & 512 && O === null && E(e, g);
	}
	return !1;
}
function Rn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(G !== null && G.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Rn(a, t, !1) : t === a && (n ? E(a, _) : a.f & 1024 && E(a, v), Pt(a));
	}
}
function zn(e) {
	var t = K, n = q, r = J, i = B, a = G, o = S, s = V, c = X, l = e.f;
	K = null, q = 0, J = null, B = l & 96 ? null : e, G = null, Ge(e.ctx), V = !1, X = ++Y, e.ac !== null && (it(() => {
		e.ac.abort(be);
	}), e.ac = null);
	try {
		e.f |= ue;
		var u = e.fn, d = u();
		e.f |= ie;
		var f = e.deps, p = D?.is_fork;
		if (K !== null) {
			var m;
			if (p || Vn(e, q), f !== null && q > 0) for (f.length = q + K.length, m = 0; m < K.length; m++) f[q + m] = K[m];
			else e.deps = f = K;
			if (cn() && e.f & 512) for (m = q; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && q < f.length && (Vn(e, q), f.length = q);
		if (Je() && J !== null && !V && f !== null && !(e.f & 6146)) for (m = 0; m < J.length; m++) Rn(J[m], e);
		if (i !== null && i !== e) {
			if (Y++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Y;
			if (t !== null) for (let e of t) e.rv = Y;
			J !== null && (r === null ? r = J : r.push(...J));
		}
		return e.f & 8388608 && (e.f ^= fe), d;
	} catch (e) {
		return Ze(e);
	} finally {
		e.f ^= ue, K = t, q = n, J = r, B = i, G = a, Ge(o), V = s, X = c;
	}
}
function Bn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (K === null || !a.call(K, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~le), c.v !== t && $e(c), c.ac !== null && it(() => {
			c.ac.abort(be), c.ac = null, E(c, _);
		}), bt(c), Vn(c, 0);
	}
}
function Vn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Bn(e, n[r]);
}
function Z(e) {
	var t = e.f;
	if (!(t & 16384)) {
		E(e, g);
		var n = U, r = An;
		U = e, An = !(t & 96);
		try {
			t & 16777232 ? xn(e) : bn(e), yn(e);
			var i = zn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Pn;
		} finally {
			An = r, U = n;
		}
	}
}
function Q(e) {
	var t = !!(e.f & 2);
	if (kn?.add(e), B !== null && !V && !(U !== null && U.f & 16384) && (G === null || !G.has(e))) {
		var n = B.deps;
		if (B.f & 2097152) e.rv < Y && (e.rv = Y, K === null && n !== null && n[q] === e ? q++ : K === null ? K = [e] : K.push(e));
		else {
			B.deps ??= [], a.call(B.deps, e) || B.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [B] : a.call(r, B) || r.push(B);
		}
	}
	if (z && j.has(e)) return j.get(e);
	if (t) {
		var i = e;
		if (z) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Un(i)) && (o = vt(i)), j.set(i, o), o;
		}
		var s = !(i.f & 512) && !V && B !== null && (An || !!(B.f & 512)), c = (i.f & ie) === 0;
		Ln(i) && (s && (i.f |= 512), yt(i)), s && !c && (xt(i), Hn(i));
	}
	if (O?.has(e)) return O.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Hn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (xt(t), Hn(t));
}
function Un(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (j.has(t) || t.f & 2 && Un(t)) return !0;
	return !1;
}
function Wn(e) {
	var t = V;
	try {
		return V = !0, e();
	} finally {
		V = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Gn = Symbol("events"), Kn = /* @__PURE__ */ new Set(), qn = /* @__PURE__ */ new Set();
function Jn(e, t, n) {
	(t[Gn] ??= {})[e] = n;
}
function Yn(e) {
	for (var t = 0; t < e.length; t++) Kn.add(e[t]);
	for (var n of qn) n(e);
}
var Xn = null;
function Zn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Xn = e;
	var o = 0, s = Xn === e && e[Gn];
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
		var d = B, f = U;
		H(null), W(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var ee = a[Gn]?.[r];
					ee != null && (!a.disabled || e.target === a) && ee.call(a, e);
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
			e[Gn] = t, delete e.currentTarget, H(d), W(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Qn = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function $n(e) {
	return Qn?.createHTML(e) ?? e;
}
function er(e) {
	var t = rn("template");
	return t.innerHTML = $n(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function tr(e, t) {
	var n = U;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function nr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (y) return tr(b, null), b;
		i === void 0 && (i = er(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Zt(i)));
		var t = r || qt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Zt(t), s = t.lastChild;
			tr(o, s);
		} else tr(t, t);
		return t;
	};
}
function rr() {
	if (y) return tr(b, null), b;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = P();
	return e.append(t, n), tr(t, n), e;
}
function ir(e, t) {
	if (y) {
		var n = U;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = b), Le();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var ar = ["touchstart", "touchmove"];
function or(e) {
	return ar.includes(e);
}
function sr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ye] ??= e.nodeValue) && (e[ye] = n, e.nodeValue = `${n}`);
}
function cr(e, t) {
	return dr(e, t);
}
function lr(t, n) {
	Xt(), n.intro = n.intro ?? !1;
	let r = n.target, i = y, a = b;
	try {
		for (var o = /* @__PURE__ */ Zt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ F(o);
		if (!o) throw e;
		Ie(!0), x(o);
		let i = dr(t, {
			...n,
			anchor: o
		});
		return Ie(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && De(), Xt(), tn(r), Ie(!1), cr(t, n);
	} finally {
		Ie(i), x(a);
	}
}
var ur = /* @__PURE__ */ new Map();
function dr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	Xt();
	var u = void 0, d = pn(() => {
		var c = r ?? n.appendChild(P());
		st(c, { pending: () => {} }, (n) => {
			Ke({});
			var r = S;
			if (s && (r.c = s), a && (i.$$events = a), y && tr(n, null), u = t(n, i) || {}, y && (U.nodes.end = b, b === null || b.nodeType !== 8 || b.data !== "]")) throw Pe(), e;
			qe();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = or(r);
					for (let e of [n, document]) {
						var a = ur.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), ur.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Zn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(Kn)), qn.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = ur.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, Zn), t.delete(e), t.size === 0 && ur.delete(r)) : t.set(e, i);
			}
			qn.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return fr.set(u, d), u;
}
var fr = /* @__PURE__ */ new WeakMap();
function pr(e, t) {
	let n = fr.get(e);
	return n ? (fr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var mr = class {
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
			if (n) En(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (En(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (R(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						On(r, t), t.append(P()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else R(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), wn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (R(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = D, r = nn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = P();
				i.append(a), this.#n.set(e, {
					effect: L(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, L(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else y && (this.anchor = b), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function hr(e, t, n = !1) {
	var r;
	y && (r = b, Le());
	var i = new mr(e), a = n ? oe : 0;
	function o(e, t) {
		if (y) {
			var n = Ve(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Be();
				x(a), i.anchor = a, Ie(!1), i.ensure(e, t), Ie(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	vn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function gr(e, t) {
	mn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = rn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var _r = [..." 	\n\r\f\xA0\v﻿"];
function vr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || _r.includes(r[o - 1])) && (s === r.length || _r.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function yr(e, t, n, r, i, a) {
	var o = e[_e];
	if (y || o !== n || o === void 0) {
		var s = vr(n, r, a);
		(!y || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[_e] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var br = Symbol("is custom element"), xr = Symbol("is html"), Sr = xe ? "link" : "LINK";
function Cr(e, t, n, r) {
	var i = wr(e);
	y && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Sr) || i[t] !== (i[t] = n) && (t === "loading" && (e[he] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Er(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function wr(e) {
	return e[ge] ??= {
		[br]: e.nodeName.includes("-"),
		[xr]: e.namespaceURI === n
	};
}
var Tr = /* @__PURE__ */ new Map();
function Er(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Tr.get(t);
	if (n) return n;
	Tr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Dr(e, t) {
	return e === t || e?.[pe] === t;
}
function Or(e = {}, t, n, r) {
	var i = S.r, a = U;
	return mn(() => {
		var o, s;
		return gn(() => {
			o = s, s = r?.() || [], Wn(() => {
				Dr(n(...s), e) || (t(e, ...s), o && Dr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Dr(n(...s), e) && t(null, ...s);
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
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ pt(r), Q(u)) : (c && (c = !1, s = o ? Wn(r) : r), s);
	let f;
	if (a) {
		var p = pe in e || me in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, ee = !1;
	a ? [m, ee] = rt(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Oe(t), f(m)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return h;
	if (f) {
		var te = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || te || ee) && f(t ? h() : e), e) : h();
		});
	}
	var g = !1, _ = (n & 1 ? pt : gt)(() => (g = !1, h()));
	a && Q(_);
	var v = U;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(_) : i && a ? Gt(e) : e;
			return N(_, n), g = !0, s !== void 0 && (s = n), e;
		}
		return z && g || v.f & 16384 ? _.v : Q(_);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function kr(e) {
	return new Ar(e);
}
var Ar = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Bt(n, !1, !1);
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
				return r === me || (Q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return N(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? lr : cr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && k(), this.#e = r.$$events;
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
			pr(this.#t);
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
}, jr;
typeof HTMLElement == "function" && (jr = class extends HTMLElement {
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
					let n = rn("slot");
					e !== "default" && (n.name = e), ir(t, n);
				};
			}
			let t = {}, n = Nr(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Mr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = kr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = fn(() => {
				gn(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Mr(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Mr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
function Mr(e, t, n, r) {
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
function Nr(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Pr(e, t, n, r, i, a) {
	let o = class extends jr {
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
				n = Mr(e, n, t), this.$$d[e] = n;
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
//#region src/Toast.svelte
var Fr = /* @__PURE__ */ nr("<div aria-atomic=\"true\"><span class=\"wrn-toast-icon svelte-1w29e1y\" aria-hidden=\"true\"> </span> <span class=\"wrn-toast-text svelte-1w29e1y\"> </span> <button type=\"button\" class=\"wrn-toast-dismiss svelte-1w29e1y\" aria-label=\"Dismiss notification\">&times;</button></div>"), Ir = {
	hash: "svelte-1w29e1y",
	code: "\n	@keyframes svelte-1w29e1y-wrn-toast-enter {\n		from { opacity: 0; transform: translateX(24px); }\n		to { opacity: 1; transform: translateX(0); }\n	}\n\n	@keyframes svelte-1w29e1y-wrn-toast-exit {\n		from { opacity: 1; transform: translateX(0); }\n		to { opacity: 0; transform: translateX(12px); }\n	}.wrn-toast.svelte-1w29e1y {display:flex;align-items:center;gap:8px;background:var(--wrn-toast-bg, var(--cockpit-surface, #fdfbf7));border:1px solid var(--wrn-toast-border, var(--cockpit-border, #e2ddd5));border-radius:var(--wrn-toast-radius, 6px);min-block-size:44px;padding:6px 8px 6px 14px;font-family:var(--wrn-toast-font, inherit);font-size:13px;font-weight:600;color:var(--wrn-toast-text, var(--cockpit-text, #21322b));text-align:start;width:100%;box-sizing:border-box;box-shadow:0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);position:relative;overflow:hidden;\n		animation: svelte-1w29e1y-wrn-toast-enter 220ms ease-out;}.wrn-toast.is-dismissing.svelte-1w29e1y { animation: svelte-1w29e1y-wrn-toast-exit 180ms ease-in forwards;pointer-events:none;}.wrn-toast.is-error.svelte-1w29e1y {border-color:var(--wrn-toast-error-border, var(--cockpit-danger-border, #e74c3c));background:var(--wrn-toast-error-bg, var(--cockpit-danger-bg, #fdf0ef));}.wrn-toast.is-success.svelte-1w29e1y {border-color:var(--wrn-toast-success-border, var(--cockpit-success-border, #27ae60));background:var(--wrn-toast-success-bg, var(--cockpit-success-bg, #edf9f0));}.wrn-toast-icon.svelte-1w29e1y {font-size:14px;line-height:1;flex-shrink:0;}.wrn-toast.is-error.svelte-1w29e1y .wrn-toast-icon:where(.svelte-1w29e1y) {color:var(--wrn-toast-error-text, var(--cockpit-danger-text, #e74c3c));}.wrn-toast.is-success.svelte-1w29e1y .wrn-toast-icon:where(.svelte-1w29e1y) {color:var(--wrn-toast-success-text, var(--cockpit-success-text, #27ae60));}.wrn-toast-text.svelte-1w29e1y {flex:1;min-width:0;line-height:1.3;}.wrn-toast-dismiss.svelte-1w29e1y {display:inline-grid;place-items:center;flex:0 0 auto;inline-size:32px;block-size:32px;margin:0;padding:0;border:0;border-radius:var(--wrn-toast-radius, 6px);background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:18px;line-height:1;}.wrn-toast-dismiss.svelte-1w29e1y:hover {background:var(--wrn-toast-dismiss-hover-bg, var(--cockpit-hover-bg, rgba(0,0,0,0.08)));}.wrn-toast-dismiss.svelte-1w29e1y:focus-visible {outline:2px dashed var(--cockpit-accent, currentColor);outline-offset:1px;}\n\n	@media (pointer: coarse) {.wrn-toast.svelte-1w29e1y {min-block-size:52px;padding-block:4px;}.wrn-toast-dismiss.svelte-1w29e1y {inline-size:44px;block-size:44px;}\n	}\n\n	@media (prefers-reduced-motion: reduce) {.wrn-toast.svelte-1w29e1y,\n		.wrn-toast.is-dismissing.svelte-1w29e1y { animation: none;}\n	}"
};
function Lr(e, t) {
	Ke(t, !0), gr(e, Ir);
	let n = $(t, "message", 7), r = $(t, "kind", 7, "info"), i = $(t, "ondismiss", 7), a = $(t, "duration", 7, 3e3), o = /* @__PURE__ */ M(!0), s = /* @__PURE__ */ M(!1);
	function c() {
		Q(s) || (N(s, !0), setTimeout(() => {
			N(o, !1), i()?.();
		}, 180));
	}
	un(() => {
		if (a() <= 0) return;
		let e = setTimeout(() => c(), a());
		return () => clearTimeout(e);
	});
	var l = {
		get message() {
			return n();
		},
		set message(e) {
			n(e), k();
		},
		get kind() {
			return r();
		},
		set kind(e = "info") {
			r(e), k();
		},
		get ondismiss() {
			return i();
		},
		set ondismiss(e) {
			i(e), k();
		},
		get duration() {
			return a();
		},
		set duration(e = 3e3) {
			a(e), k();
		}
	}, u = rr(), d = $t(u), f = (e) => {
		var t = Fr();
		let i;
		var a = Qt(t), o = Qt(a, !0);
		Re(a);
		var l = en(a, 2), u = Qt(l, !0);
		Re(l);
		var d = en(l, 2);
		Re(t), _n(() => {
			i = yr(t, 1, "wrn-toast svelte-1w29e1y", null, i, {
				"is-error": r() === "error",
				"is-success": r() === "success",
				"is-dismissing": Q(s)
			}), Cr(t, "role", r() === "error" ? "alert" : "status"), Cr(t, "aria-live", r() === "error" ? "assertive" : "polite"), sr(o, r() === "error" ? "✗" : r() === "success" ? "✓" : "→"), sr(u, n());
		}), Jn("click", d, c), ir(e, t);
	};
	return hr(d, (e) => {
		Q(o) && e(f);
	}), ir(e, u), qe(l);
}
Yn(["click"]), Pr(Lr, {
	message: {},
	kind: {},
	ondismiss: {},
	duration: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/ToastElement.svelte
var Rr = /* @__PURE__ */ nr("<div><!></div>");
function zr(e, t) {
	Ke(t, !0);
	let n = $(t, "message", 7, ""), r = $(t, "kind", 7, "info"), i = $(t, "duration", 7, 3e3), a;
	function o(e, t) {
		a?.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0
		}));
	}
	var s = {
		get message() {
			return n();
		},
		set message(e = "") {
			n(e), k();
		},
		get kind() {
			return r();
		},
		set kind(e = "info") {
			r(e), k();
		},
		get duration() {
			return i();
		},
		set duration(e = 3e3) {
			i(e), k();
		}
	}, c = Rr();
	return Lr(Qt(c), {
		get message() {
			return n();
		},
		get kind() {
			return r();
		},
		get duration() {
			return i();
		},
		ondismiss: () => o("worn-dismiss", {})
	}), Re(c), Or(c, (e) => a = e, () => a), ir(e, c), qe(s);
}
customElements.define("worn-toast", Pr(zr, {
	message: {},
	kind: {},
	duration: { type: "Number" }
}, [], []));
//#endregion
export { zr as default };
