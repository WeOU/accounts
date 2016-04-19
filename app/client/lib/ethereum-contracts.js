// The token contract address (Obtained from the Wallet)
token_addr = "0x90C14a5F42a77830aC0e7eB57142e4a47F77B718";
// The token contract JSON interface (Obtained from the Wallet)
Token = web3.eth.contract([ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Emergence", "displayName": "" } ], "type": "function", "displayName": "name" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "1", "displayName": "" } ], "type": "function", "displayName": "decimals" }, { "constant": true, "inputs": [ { "name": "", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "balance Of" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "æ", "displayName": "" } ], "type": "function", "displayName": "symbol" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;to", "template": "elements_input_address" }, { "name": "_amount", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;amount", "template": "elements_input_uint" } ], "name": "transfer", "outputs": [], "type": "function", "displayName": "transfer" }, { "inputs": [ { "name": "_supply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;supply", "template": "elements_input_uint", "value": "1000" }, { "name": "_name", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;name", "template": "elements_input_string", "value": "Emergence" }, { "name": "_symbol", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;symbol", "template": "elements_input_string", "value": "æ" }, { "name": "_decimals", "type": "uint8", "index": 3, "typeShort": "uint", "bits": "8", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;decimals", "template": "elements_input_uint", "value": "1" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" } ]);
TokenInstance = Token.at(token_addr);

Transactions = new Mongo.Collection('transactions');

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
  }
})
