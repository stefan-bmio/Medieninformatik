input metauml;
beginfig(1);
iActivity.foreColor := white;
iInstance.foreColor := white;

Begin.start;
Activity.writereview("Write product review");
Activity.rate("Rate product");
Instance.review("review:Review")
  ("publishedState: IN_AUDIT");
Branch.audit;
Activity.publish("Publish review");
Branch.ageloop;
Activity.discard("Discard review");
Activity.report("Report creator");
FlowFinal.flowfinal;
Instance.pubreview("review:Review")
  ("publishedState: PUBLISHED");
Branch.age;
Activity.expire("Expire review");
Instance.expreview("review:Review")
  ("publishedState: EXPIRED");
End.endnode;

topToBottom(20)(start, writereview, rate, review, audit);
topToBottom(40)(audit, discard);
topToBottom(20)(discard, report, flowfinal);
leftToRight(50)(audit, publish);
leftToRight(20)(publish, ageloop, pubreview);
topToBottom(20)(pubreview, age);
leftToRight(90)(age, expire);
leftToRight(20)(expire, expreview);
topToBottom(20)(expreview, endnode);

drawObjects(start, writereview, rate, review, audit, publish, discard, report, flowfinal, ageloop, pubreview, age, expire, expreview, endnode);

clink(transition)(start, writereview);
clink(transition)(writereview, rate);
clink(transition)(rate, review);
clink(transition)(review, audit);
clink(transition)(audit, publish);
clink(transition)(audit, discard);
clink(transition)(discard, report);
clink(transition)(report, flowfinal);
clink(transition)(publish, ageloop);
clink(transition)(ageloop, pubreview);
clink(transition)(pubreview, age);
pair loopstep;
loopstep := (age.c + (-(age.left - ageloop.left), 0));
link(transition)(pathCut(age, ageloop) (age.w--loopstep--ageloop.s));
clink(transition)(age, expire);
clink(transition)(expire, expreview);
clink(transition)(expreview, endnode);

item.confirm(iAssoc)("[confirmed]")(confirm.s = .45[audit.e, publish.w]);
item.reject(iAssoc)("[rejected]")(reject.sw = .5[audit.s, discard.n]);
item.uptodate(iAssoc)("[review.ageMonths <= 12]")(uptodate.s = .5[loopstep, age.w]);
item.outdated(iAssoc)("[review.ageMonths > 12]")(outdated.s = .45[age.e, expire.w]);
endfig;
end;
