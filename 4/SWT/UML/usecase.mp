outputtemplate := "%j.%c";
input metauml;
beginfig(1);
iUsecase.foreColor := white;
Actor.customer("Customer");
Actor.merchant("Merchant,", "Manufacturer");

Usecase.read("read reviews");
Usecase.rate("rate products");
Usecase.review("write reviews");
Usecase.rewards("earn rewards");
Usecase.provide("show reviews");
Usecase.research("market research");
Usecase.advertise("advertise");

read.w = customer.human.e + (180 - .5(read.right - read.left), 60);
rate.w = customer.human.e + (150 - .5(rate.right - rate.left), 16);
review.w = customer.human.e + (100 - .5(review.right - review.left), -20);
rewards.w = customer.human.e + (50 - .5(rewards.right - rewards.left), -60);
provide.e = merchant.human.w + (-40 + .5(provide.right - provide.left), 55);
research.w = merchant.human.e + (-200 - .5(research.right - research.left), -55);
advertise.w = merchant.human.e + (-100 - .5(advertise.right - advertise.left), -55);

drawObjects(customer, rewards, review, rate, read);

clink(association)(customer.human, rewards);
clink(association)(customer.human, rate);
clink(association)(customer.human, review);
clink(association)(customer.human, read);

merchant.human.e = (400, -20);



drawObjects(research, advertise);



drawObjects(merchant, provide);

clink(association)(merchant.human, provide);

clink(association)(merchant.human, read);
clink(association)(merchant.human, rate);
clink(association)(merchant.human, review);

clink(association)(merchant.human, advertise);
clink(association)(merchant.human, research);
endfig;
end;
