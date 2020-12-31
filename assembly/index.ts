// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function payloadGen602(t, site, appid, uuid, seq, cs, sid, vid, pxhd): String {
    console.log(t);
    seq = seq || 0;
    var n = t[0],
        e = n && n.d;
    e && (e.PX96 = site)
    debugger;
    var i = JSON.stringify.apply(null, Array.prototype.slice.call([t])),
        a = ru(rn(i, 50)),
        c = ["payload=" + a, "appId=" + appid, "tag=" + "v6.0.2", "uuid=" + uuid, "ft=" + "179", "seq=" + seq, "en=NTA"];
    cs && c.push("cs=" + cs);
    var s;
    var jasper = z(i, [uuid, "v6.0.2", "179"].join(":"));
    for (var n = "", e = "", r = 0; r < jasper.length; r++) {
        var o = jasper.charCodeAt(r);
        o >= 48 && o <= 57 ? n += jasper[r] : e += o % 10
    }
    var expedia = n + e
    try {
        for (var r = expedia, o = "", flex = 0; flex < r.length; flex += 2)
            o += r[flex];
        s = "" + o;
    } catch (t) {}
    c.push("pc=" + s.replace(/0{3,}[1-9]/, '')); //pc
    sid != undefined && c.push("sid=" + sid); //sid
    vid != undefined  && c.push("vid=" + vid); //vid
    pxhd  != undefined && c.push("pxhd=" + pxhd); //pxhd cookie
    c.push('rsc=' + (seq <= 1 ? seq+1 : seq));

    return c
}

export function payloadGen621(): String {

}


