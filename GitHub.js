/*
GitHub Pro

[rewrite_local]
https://api.github.com/graphql url script-response-body https://raw.githubusercontent.com/SWING1993/QXRewrite/main/Github.js

[mitm]
hostname = api.github.com

*/

let obj = JSON.parse($response.body);
if (obj.data && obj.data.viewer) {
  obj.data.viewer.isProPlan = true;
  obj.data.viewer.isEmployee = true;
  obj.data.viewer.hasAppleIapSubscription = true;
  $done({
    body: JSON.stringify(obj)
  });
} else {
  $done({});
}
