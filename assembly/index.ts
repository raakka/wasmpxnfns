// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function 602_uuid_gen():	String {
      var o = "";
      if (r)
        try {
          for (
            var i = (new Date().getTime() * Math.random() + "")
                .replace(".", ".".charCodeAt())
                .split("")
                .slice(-16),
              a = 0;
            a < i.length;
            a++
          )
            i[a] =
              parseInt(10 * Math.random()) * +i[a] ||
              parseInt(Math.random() * Eu.len);
          o = cn(i, 0, Eu.cipher);
        } catch (t) {}
      var c = (n && e) || 0,
        u = n || [];
      t = t || {};
      var f = void 0 !== t.clockseq ? t.clockseq : Nu,
        s = void 0 !== t.msecs ? t.msecs : m(),
        d = void 0 !== t.nsecs ? t.nsecs : Zu + 1,
        l = s - Wu + (d - Zu) / 1e4;
      if (
        (l < 0 && void 0 === t.clockseq && (f = (f + 1) & 16383),
        (l < 0 || s > Wu) && void 0 === t.nsecs && (d = 0),
        d >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (Wu = s), (Zu = d), (Nu = f), (s += 122192928e5);
      var v = (1e4 * (268435455 & s) + d) % 4294967296;
      (u[c++] = (v >>> 24) & 255),
        (u[c++] = (v >>> 16) & 255),
        (u[c++] = (v >>> 8) & 255),
        (u[c++] = 255 & v);
      var X = ((s / 4294967296) * 1e4) & 268435455;
      (u[c++] = (X >>> 8) & 255),
        (u[c++] = 255 & X),
        (u[c++] = ((X >>> 24) & 15) | 16),
        (u[c++] = (X >>> 16) & 255),
        (u[c++] = (f >>> 8) | 128),
        (u[c++] = 255 & f);
      for (var p = t.node || Ou, h = 0; h < 6; h++) u[c + h] = p[h];
      var P = n || cn(u);
      return o === P ? o : (S("PX505"), P);
}

