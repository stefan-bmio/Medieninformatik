outputtemplate := "%j.%c";
input metauml;
beginfig(1);
iPackage.foreColor := white;

nsx := 0; nsy := 0; nsw := 420; nsh := 150;
draw (nsx, nsy)
      --(nsx + nsw, nsy)
      --(nsx + nsw, nsy + nsh)
      --(nsx, nsy + nsh)
      --cycle;
nslabelw := 170;
nslabelh := 14;
nslabelx := nsx;
nslabely := nsy + nsh - nslabelh;
nsearsize := 7;
draw (nslabelx, nslabely)
      --(nslabelx + nslabelw - nsearsize, nslabely)
      --(nslabelx + nslabelw, nslabely + nsearsize)
      --(nslabelx + nslabelw, nslabely + nslabelh);
picture nspic;
nspic := image (
  boxit.pkg("package" infont "ptmb8r");
  path pbox;
  pbox := bpath(pkg);
  draw ("package" infont "ptmb8r");
  draw ("com.value-aware.webservice" infont "ptmr8r" shifted (pkg.e + (0, -2)));
);
draw nspic shifted (3, nslabely + 4);

Package.product("product")();
Package.user("user")();
Package.model("model")(product, user);
leftToRight(20)(product, user);

Package.review("review")();
Package.translation("translation")();
leftToRight(20)(review, translation);
Package.res("resource")(review, translation);

Package.persistence("persistence")();
Package.cache("cache")();
Package.data("data")(persistence, cache);
leftToRight(20)(persistence, cache);

Package.authent("authentication")();
Package.author("authorization")();
Package.request("requestvalidation")();
Package.valid("validity")(authent, author, request);
leftToRight(20)(authent, author, request);

leftToRight(30)(model, res, data);
model.nw = (nsx + .5nsw - .5(model.width + res.width + data.width + 3 * 20), nsy + nsh - 40);

valid.n = (nsx + .5nsw, nsy + nsh - 40 - model.height - 30);
drawObjects(res, model, data, valid);
endfig;
end;
