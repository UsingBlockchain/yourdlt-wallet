import {
    AccountInfo,
    AccountNames,
    ChainInfo,
    ChainProperties,
    Currency,
    FinalizedBlock,
    MosaicId,
    MultisigAccountGraphInfo,
    NamespaceId,
    NamespaceName,
    NetworkConfiguration,
    NetworkCurrencies,
    NetworkProperties,
    NetworkType,
    NodeInfo,
    PluginProperties,
    RentalFees,
    StorageInfo,
    TransactionFees,
    UInt64,
} from 'symbol-sdk';
import { NodeIdentityEqualityStrategy } from 'symbol-openapi-typescript-fetch-client';
import { Address } from 'symbol-sdk';
import { AccountType } from 'symbol-sdk';
import { SupplementalPublicKeys } from 'symbol-sdk';
import { networkConfig } from '@/config';

export const OfflineUrl = 'http://mock:3000';

export const OfflineGenerationHash = {
    [NetworkType.TEST_NET]: networkConfig[NetworkType.TEST_NET].networkConfigurationDefaults.generationHash,
    [NetworkType.MAIN_NET]: networkConfig[NetworkType.MAIN_NET].networkConfigurationDefaults.generationHash,
};

export const OfflineTransactionFees = new TransactionFees(84587, 100, 1136363, 0, 0);

export const OfflineNodeInfo = (networkType: NetworkType) =>
    new NodeInfo('pubkey', OfflineGenerationHash[networkType], 3000, networkType, 0, [], 'host', 'name');

export const OfflineNetworkProperties = {
    [NetworkType.TEST_NET]: new NetworkConfiguration(
        new NetworkProperties(
            'public-test',
            NodeIdentityEqualityStrategy.Host,
            '071964D3C040D62DE905EAE978E2119BFC8E70489BFDF45A85B3D7ED5A517AA8',
            OfflineGenerationHash[NetworkType.TEST_NET],
            networkConfig[NetworkType.TEST_NET].networkConfigurationDefaults.epochAdjustment + 's',
        ),
        new ChainProperties(
            true,
            true,
            networkConfig[NetworkType.TEST_NET].networkConfigurationDefaults.currencyMosaicId,
            networkConfig[NetworkType.TEST_NET].networkConfigurationDefaults.harvestingMosaicId,
            networkConfig[NetworkType.TEST_NET].networkConfigurationDefaults.blockGenerationTargetTime + 's',
            "3'000",
            '180',
            '180',
            '5',
            '0',
            '60',
            '100',
            '6h',
            '500ms',
            "7'831'975'436'000'000",
            "9'000'000'000'000'000",
            "9'000'000'000'000'000",
            "10'000'000'000",
            "50'000'000'000'000",
            "3'000'000'000'000",
            '3',
            '28',
            '28280',
            '25',
            '5',
            'TDGY4DD2U4YQQGERFMDQYHPYS6M7LHIF6XUCJ4Q',
            undefined,
            "6'000",
        ),
        new PluginProperties(),
    ),
    [NetworkType.MAIN_NET]: new NetworkConfiguration(
        new NetworkProperties(
            'public',
            NodeIdentityEqualityStrategy.Host,
            '78F0F6FFDE5C130777506FE2A597ADC5E98BD46041ABF775908299FE94BFD5D0',
            OfflineGenerationHash[NetworkType.MAIN_NET],
            networkConfig[NetworkType.MAIN_NET].networkConfigurationDefaults.epochAdjustment + 's',
        ),
        new ChainProperties(
            true,
            true,
            networkConfig[NetworkType.MAIN_NET].networkConfigurationDefaults.currencyMosaicId,
            networkConfig[NetworkType.MAIN_NET].networkConfigurationDefaults.harvestingMosaicId,
            networkConfig[NetworkType.MAIN_NET].networkConfigurationDefaults.blockGenerationTargetTime + 's',
            "3'000",
            '180',
            '720',
            '5',
            '0',
            '60',
            '100',
            '6h',
            '500ms',
            "7'831'975'436'000'000",
            "9'000'000'000'000'000",
            "9'000'000'000'000'000",
            "10'000'000'000",
            "50'000'000'000'000",
            "3'000'000'000'000",
            '3',
            '112',
            '26280',
            '25',
            '5',
            'NAMV77WU2EUFC6FBDFBQCDQARAGUTCRFDN7YLVA',
            undefined,
            "6'000",
        ),
        new PluginProperties(),
    ),
};

export const OfflineChainInfo = new ChainInfo(
    UInt64.fromUint(1),
    UInt64.fromUint(1),
    UInt64.fromUint(1),
    // mainnet nemesis block hash for Symbol
    new FinalizedBlock(UInt64.fromUint(1), 'BEED005B82B22FC32DA6FDF4DFEB7C11BA6A8C5C504EB7B9CCF91B9B2A09E020', 1, 1),
);

export const OfflineAccountInfo = (address: Address) =>
    new AccountInfo(
        0,
        'recordId',
        address,
        UInt64.fromUint(0),
        '0000000000000000000000000000000000000000000000000000000000000000',
        UInt64.fromUint(0),
        AccountType.Unlinked,
        new SupplementalPublicKeys(),
        [],
        [],
        UInt64.fromUint(0),
        UInt64.fromUint(0),
    );

export const OfflineStorageInfo = new StorageInfo(0, 0, 0);

export const OfflineRentalFees = new RentalFees(UInt64.fromUint(1000), UInt64.fromUint(100000), UInt64.fromUint(500000));

export const OfflineAccountNames = (address: Address) => new AccountNames(address, []);

export const OfflineNamespaceNames = (namespaceId: NamespaceId) => new NamespaceName(namespaceId, 'mocknamespace');

export const OfflineMultisigAccountGraphInfo = new MultisigAccountGraphInfo(new Map());

export const OfflineNetworkCurrencies = (networkType: NetworkType): NetworkCurrencies => {
    const publicCurrency = new Currency({
        namespaceId: new NamespaceId('symbol.xym'),
        divisibility: 6,
        transferable: true,
        supplyMutable: false,
        restrictable: false,
        mosaicId: new MosaicId(networkConfig[networkType].networkConfigurationDefaults.currencyMosaicId),
    });
    return new NetworkCurrencies(publicCurrency, publicCurrency);
};
