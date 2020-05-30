outputtemplate := "%j.%c";
input metauml;
beginfig(1);
iClass.foreColor := white;
iAbstractClass.foreColor := white;

EClass.domain(iAbstractClass)("DomainObject")
  ("-id", "#dao:DataAccessObject")
  ("+DomainObject(DataAccessObject)", "+load()", "+save()");

EClass.dao(iAbstractClass)("DataAccessObject")
  ("-connectionString:String")
  ("+DataAccessObject(connectionString:String)", "+create(object:DomainObject)", "+read(object:DomainObject)", "+update(object:DomainObject)", "+delete(object:DomainObject)");

Class.product("Product")
  ("-name:String", "-reviews:List<Review>")
  ("+Product(name:String)", "+addReview(review: Review)");

Class.review("Review")
  ("-text:String", "-rating:int", "-creator:Reviewer", "-ageMonths:int", "-publishedState:PublishedState")
  ("+Review(text:String, rating:int)", "+publish()", "+expire()", "toJSON():String");

Class.published("PublishedState")
  ("+IN_AUDIT", "+PUBLISHED", "+EXPIRED")
  ();
classStereotypes.published("<<enumeration>>");
published.info.iMethodStack.top := 0;
published.info.iMethodStack.bottom := 0;

Class.reviewer("Reviewer")
  ("-userName:String")
  ("+Reviewer()");

Class.translator("Translator")
  ("+Translator()", "+addTranslation(original: Review)")
  ();
translator.info.iMethodStack.top := 0;
translator.info.iMethodStack.bottom := 0;

Class.customer("Customer")
  ("-status:CustomerStatus")
  ("+Customer(userName:String)", "+promote()", "+ban()");

Class.cstatus("CustomerStatus")
  ("+NEWBEE", "+RARE", "+OCCASIONAL", "+PRO", "+GURU", "+INACTIVE", "+BANNED")
  ();
classStereotypes.cstatus("<<enumeration>>");
cstatus.info.iMethodStack.top := 0;
cstatus.info.iMethodStack.bottom := 0;

Class.merchant("Merchant")
  ("-contacts:List<address>", "-sites:List<Site>")
  ("+Merchant()", "+addContact(address:Address)", "+addSite(site:Site)");

Class.address("Address")
  ("-name:String", "+street:String", "+houseNumber:int", "+zipCode:String", "+city:String", "+country:String", "+email:String", "+comment:String")
  ("+Address()", "+letterFormat():String");

Class.site("Site")
  ("-id", "-type:SiteType", "-url:String", "-description:String")
  ("+Site()");
Class.sitetype("SiteType")
  ("+WEBSITE", "+MOBILEAPP")
  ();
classStereotypes.sitetype("<<enumeration>>");
sitetype.info.iMethodStack.top := 0;
sitetype.info.iMethodStack.bottom := 0;

published.e = review.sw + (-30, -20);
leftToRight.top(45)(product, review);
leftToRight(45)(review, reviewer);

leftToRight.top(15)(translator, customer, merchant);
customer.n = reviewer.s + (0, -70);
topToBottom.left(30)(customer, cstatus);

topToBottom(30)(address, merchant);
topToBottom.left(45)(merchant, site);
leftToRight.bottom(20)(site, sitetype);

domain.n = (.5(address.right - product.left), review.top + domain.height + 45);
leftToRight(45)(domain, dao);

drawObjects(domain, dao, product, review, published, reviewer, translator, customer, cstatus, merchant, address, site, sitetype);

link(association)(pathHorizontal(product.e, review.left));
link(association)(published.e--review.sw + (0, +10));
clink(association)(review, reviewer);
clink(inheritance)(customer, reviewer);
link(association)(pathVertical(cstatus.n, customer.bottom));
link(inheritance)(translator.ne + (-20, 0)--reviewer.sw + (15, 0));
clink(inheritance)(merchant, reviewer);
clink(association)(merchant, address);
link(association)(pathVertical(site.n, merchant.bottom));
link(association)(pathHorizontal(sitetype.w, site.right));
link(inheritance)(product.n--domain.sw + (0, 10));
clink(inheritance)(review, domain);
clink(inheritance)(reviewer, domain);
clink(inheritance)(address, domain);
clink(association)(domain, dao);

item(iAssoc)("1")(obj.sw = product.e);
item(iAssoc)("*")(obj.se = (review.left, product.bottom + .5(product.top - product.bottom)));

item(iAssoc)("1")(obj.se = reviewer.w);
item(iAssoc)("*")(obj.sw = review.e);

item(iAssoc)("*")(obj.sw = merchant.n);
item(iAssoc)("1")(obj.nw = address.s);

item(iAssoc)("1")(obj.nw = merchant.s + (-23, 0));
item(iAssoc)("*")(obj.sw = site.n);
endfig;
end;
