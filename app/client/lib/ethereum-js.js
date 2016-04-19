web3.eth.filter('latest').watch(function(e, blockHash) {
    if(!e) {
        web3.eth.getBlock(blockHash, function(e, block){
            Session.set('latestBlock', block);
        });
    }
});

TokenInstance.Transfer({},{fromBlock: 0, toBlock: 'latest'}).watch(function(e, r){
 if(!e) {
    console.log('Transaction! From:'+ r.args.from, r.args.value.toString(10), r.transactionHash);
          // add the transaction to our collection
    Transactions.upsert({_id:'tx_'+ r.transactionHash} ,{
        from: r.args.from,
        to: r.args.to,
        value: r.args.value.toString(10),
        blockNumber: r.blockNumber
    });
  } else {
    console.log('error', e);
  }
})
