outputtemplate := "%j-%c.mps";
input metauml;
input boxes;
beginfig(1);
iClass.foreColor := white;
iInstance.foreColor := white;
iInterface.foreColor := white;

Class.subject("Subject")
  ()
  ("+subscribe()");
subject.info.iAttributeStack.top := 0;
subject.info.iAttributeStack.bottom := 0;
classStereotypes.subject("<<interface>>");

Class.concreteSubject("ConcreteSubject")
  ()
  ("+subscribe()");

Class.observer("Observer")
  ()
  ("+notify()");
observer.info.iAttributeStack.top := 0;
observer.info.iAttributeStack.bottom := 0;
classStereotypes.observer("<<interface>>");

Class.concreteObserverA("ConcreteObserverA")
  ()
  ("+notify()");

Class.concreteObserverB("ConcreteObserverB")
  ()
  ("+notify()");

topToBottom(40)(subject, concreteSubject);
leftToRight(40)(subject, observer);
%observer.s = .5[concreteObserverA.nw, concreteObserverB.ne] + (0, 40);
%topToBottom(40)(observer, concreteObserverA);
observer.sw = concreteObserverA.nw + (0, 40);
leftToRight(20)(concreteObserverA, concreteObserverB);

drawObjects(subject, concreteSubject, observer, concreteObserverA, concreteObserverB);

link(aggregationUni)(observer.w -- subject.e);
link(realization)(concreteSubject.n -- subject.s);
link(realization)(rpathVertical(observer.s, concreteObserverA.top));
link(realization)(pathStepY(concreteObserverB.n, observer.s, 15));

endfig;
end;
