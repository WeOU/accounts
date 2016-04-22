# Token
A simple Ethereum token account WebUI.

The WebUI code is based on meteor and the smart contract on solidity.
The smart contract was developed as a tutorial during a [Copenhagen Meetup](http://www.meetup.com/Copenhagen-Ethereum-Meetup/events/229827178/).

## Installing
You need to install an ethereum client. Geth was used
to develop this app and should work fine. See the instructions on [ethereum.org](https://ethereum.org).

You will also need to install Meteor locally. See the instructions on [meteor.com](https://www.meteor.com/install).


## Running the app locally
To run you need to have a local node running the Ethereum testnet.

    $ geth --fast --testnet --rpc --rpccorsdomain "http://localhost:3000"

Note that it will take a while to scynchronize the blockchain the first time you
run your ethereum client. It's the testnet, so don't send real Ether to your address.

In another console window you can start the webapp

    $ cd app/
    $ meteor

## Making Transactions
In order to make transactions you need to unlock one of your accounts.
You could for instance start geth with one of your account unlocked:

  $ geth --fast --testnet --rpc --rpccorsdomain "http://localhost:3000" --unlock 0x000whateverisyouraccountpublickey

You will then only be able to send transcations from this account address.
If you'r account is locked, you will most likely get an "Error: could not unlock signer account" in your browser console.
