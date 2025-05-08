/**
 * Sepolia testnet environment configuration for Eternum.
 * Extends the common configuration with testnet-specific settings.
 *
 * @module SepoliaEnvironment
 * @see {@link CommonEternumGlobalConfig} for base configuration
 */

import { RealmLevels, ResourcesIds, type Config } from "@bibliothecadao/types";
import { EternumGlobalConfig as CommonEternumGlobalConfig } from "./_shared_";

/**
 * Configuration specific to the Sepolia testnet environment.
 * Overrides specific values from the common configuration while inheriting defaults.
 * Used for testing in a public network environment before mainnet deployment.
 */
// sepolia god mode
export const SepoliaEternumGlobalConfig: Config = {
  ...CommonEternumGlobalConfig,
  tick: {
    ...CommonEternumGlobalConfig.tick,
    // 1 minute
    armiesTickIntervalInSeconds: 60,
  },
  village: {
    ...CommonEternumGlobalConfig.village,
    village_mint_initial_recipient: "0x077b8Ed8356a7C1F0903Fc4bA6E15F9b09CF437ce04f21B2cBf32dC2790183d0",
  },
  troop: {
    ...CommonEternumGlobalConfig.troop,
    limit: {
      ...CommonEternumGlobalConfig.troop.limit,
      mercenariesTroopLowerBound: 100,
      mercenariesTroopUpperBound: 200,
    },
    stamina: {
      ...CommonEternumGlobalConfig.troop.stamina,
      staminaTravelFishCost: 0,
      staminaTravelWheatCost: 0,
      staminaExploreFishCost: 0,
      staminaExploreWheatCost: 0,
    },
  },
  exploration: {
    ...CommonEternumGlobalConfig.exploration,
    shardsMinesWinProbability: 1,
    shardsMinesFailProbability: 11,
    agentFindProbability: 1,
    agentFindFailProbability: 6,
    questFindProbability: 19,
    questFindFailProbability: 1,
  },
  season: {
    ...CommonEternumGlobalConfig.season,
    bridgeCloseAfterEndSeconds: 60 * 60 * 1, // 1 hour after season end

    startSettlingAfterSeconds: 1, // 2 hours
    startMainAfterSeconds: 2, // 3 hours
  },
  battle: {
    ...CommonEternumGlobalConfig.battle,
    graceTickCount: 4, // 4 ticks depending on armiesTickIntervalInSeconds
  },
  realmUpgradeCosts: {
    ...CommonEternumGlobalConfig.realmUpgradeCosts,
    [RealmLevels.Settlement]: [],
    [RealmLevels.City]: [
      { resource: ResourcesIds.Wheat, amount: 1 },
      { resource: ResourcesIds.Fish, amount: 1 },
    ],
    [RealmLevels.Kingdom]: [
      { resource: ResourcesIds.ColdIron, amount: 1 },
      { resource: ResourcesIds.Hartwood, amount: 1 },
      { resource: ResourcesIds.Diamonds, amount: 1 },
      { resource: ResourcesIds.Sapphire, amount: 1 },
      { resource: ResourcesIds.DeepCrystal, amount: 1 },
      { resource: ResourcesIds.Wheat, amount: 1 },
      { resource: ResourcesIds.Fish, amount: 1 },
    ],
    [RealmLevels.Empire]: [
      { resource: ResourcesIds.AlchemicalSilver, amount: 1 },
      { resource: ResourcesIds.Adamantine, amount: 1 },
      { resource: ResourcesIds.Mithral, amount: 1 },
      { resource: ResourcesIds.Dragonhide, amount: 1 },
      { resource: ResourcesIds.Wheat, amount: 1 },
      { resource: ResourcesIds.Fish, amount: 1 },
    ],
  },
  questGames: [
    {
      address: "0x25dd1faa4f94d1ddd523d7db4697c10a34a09d7b55b4758995a070fd9d61498",
      levels: [
        { target_score: 26, settings_id: 1, time_limit: 86400 },
        { target_score: 51, settings_id: 2, time_limit: 86400 },
        { target_score: 51, settings_id: 3, time_limit: 86400 },
        { target_score: 51, settings_id: 4, time_limit: 86400 },
        { target_score: 101, settings_id: 9, time_limit: 86400 },
      ],
      overwrite: true,
    },
  ],
};

console.log("Welcome to Sepolia!");

export default SepoliaEternumGlobalConfig;
