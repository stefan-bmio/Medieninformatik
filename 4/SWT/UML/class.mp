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

leftToRight.top(30)(customer, merchant);
customer.nw = reviewer.s + (-customer.width, -70);
topToBottom.right(30)(customer, cstatus);

leftToRight(45)(merchant, address);
topToBottom(45)(merchant, site);
leftToRight.bottom(30)(site, sitetype);

domain.n = (.5(address.right - product.left), review.top + domain.height + 45);
leftToRight(45)(domain, dao);

drawObjects(domain, dao, product, review, published, reviewer, customer, cstatus, merchant, address, site, sitetype);

link(association)(pathHorizontal(product.e, review.left));
link(association)(published.e--review.sw + (0, +10));
clink(association)(review, reviewer);
clink(inheritance)(customer, reviewer);
link(association)(pathVertical(cstatus.n, customer.bottom));
clink(inheritance)(merchant, reviewer);
clink(association)(merchant, address);
clink(association)(merchant, site);
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

item(iAssoc)("*")(obj.sw = merchant.e);
item(iAssoc)("1")(obj.se = address.w);

item(iAssoc)("1")(obj.nw = merchant.s);
item(iAssoc)("*")(obj.sw = site.n);
endfig;
end;
