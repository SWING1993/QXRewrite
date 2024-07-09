/*
AdBlocker 解锁Premium


[rewrite_local]
https://api.adblockpro.app/verify url script-response-body https://raw.githubusercontent.com/SWING1993/QXRewrite/main/AdBuster.js

[MITM]
hostname = api.adblockpro.app
*/

const obj = {
    p: 1,
    a: "",
    i: 1,
    x: 1,
    b: 274,
    r: "",
    c: "6BF1B469",
    s: 1,
    l: 1,
    t: 1,
    e: 1,
    m: 1,
    f: 1,
    v: true
};
$done({
    body: JSON.stringify(obj)
});
