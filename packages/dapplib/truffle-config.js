require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note shift protect good credit fun ten'; 
let testAccounts = [
"0x7a6b91919a3177d643efac8c11bdce680f7fc402a79441298e159329ff6cea0b",
"0x09f7bd586948e3bc9ec59b3ad74f730053404fbb9138f1f98379f28fcedf15df",
"0x379ed9c287be8c54693d522f58aaad9a915d3fc096714167d8f625bcd0af8b2f",
"0x42b9bc18411dbfac85915fba6c199dee1a1a9f621a4ce5cf54e796fb77f6af1f",
"0x18f8fbea18bad89daf060adcf8e924084da8a874c7e743dd71e27233198ff707",
"0x669c09cbdf2e21049c8fbc0a66c21e38871f52491c6bd13a3e62befff18463bc",
"0xa01e5ace57c8aaf0fe7adbad83bb74942fa05ed9c18f392928b167c418cbed36",
"0x190a623973ef6c107171ad410b86a0e396b369eeffd1d3e183a9811cbea5ab22",
"0x77dc9a27d75c46fb9f5fb66bb728aa2b511748dd94bbcdd76b7c56328a2566fe",
"0x7ae503e2ffc322f8191728bdfce13cccffe29500da1276cff7fe87c4eb693c10"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


