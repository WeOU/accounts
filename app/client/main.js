import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Session.setDefault("latestBlock", {});
Session.setDefault('account', '0x158663Db1E4cDD3Df1220677371140a0B2068F6D')


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.lastblock.helpers({
  block: ()=>  JSON.stringify(Session.get('latestBlock'), null, 3),
});



Template.account.helpers({
  balance: () => TokenInstance.balanceOf(Session.get('account')).toString(10),
});

Template.account.events({
  "keyup #account": function(event, template){
      console.log(event, template, $('#account').val())
      Session.set('account', $('#account').val())
  }
});


Template.transactions.helpers({
  transaction: () => Transactions.find({}),
});

Template.transactions.events({
  "click #foo": function(event, template){

  }
});
