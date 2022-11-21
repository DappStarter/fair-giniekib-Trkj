require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food isolate rescue pitch pulp harvest bag army giggle'; 
let testAccounts = [
"0x9d13e76a8b14d6f8103141ef2972458bca9151da2ae17832697723b45a5240b6",
"0xd13a1499c5a2ea0f4d4760c70a1a51d3708abc5fc6cc9ddd266a48b57ef5d3e4",
"0x379e851b97804680bcceca54b4c3d7d081a8063a2fda8369f86c853f0370475b",
"0xf47b51ea367ff790e463b25f59fabeaefdb9781fd992880ba5d1b531312a51ef",
"0x9ca0a65c67947514be21d91c941540ca7880fd6077c2262350045095f8b42a92",
"0x44e5a8553ecfe67729038d5b168bb505d02768f9935db6cceba2483e6411f16d",
"0xe0176ea99fef3e5634f8e7e58226b6481909f8ef4d37e3445dbb5f46a7c171ab",
"0x4f215376b71f4cdd947b4bd16fb63c4717aefebb390ad9b78f40663e0000892e",
"0x8e02b2d2944ac81cfd6bfad459ef1e56ba582767eb56fc037f22a2c503f2c0cc",
"0x5f202b91463aac84ffc526cf6c0523f300ecb319f06c59f1983c9e59724ed1ae"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

