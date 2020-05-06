/// <reference path="Scripts/typings/PlayFab/PlayFab.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabAdmin.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabClient.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabMatchmaker.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabServer.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabAuthentication.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabCloudScript.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabData.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabEvents.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabExperimentation.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabInsights.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabGroups.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabLocalization.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabMultiplayer.d.ts" />
/// <reference path="Scripts/typings/PlayFab/PlayFabProfiles.d.ts" />

export const PlayFab: PlayFabModule.IPlayFab;
export function settings(): PlayFabModule.IPlayFabSettings;
export function settings(value: any): void;
export const PlayFabAdmin: PlayFabAdminModule.IPlayFabAdmin;
export const PlayFabClient: PlayFabClientModule.IPlayFabClient;
export const PlayFabMatchmaker: PlayFabMatchmakerModule.IPlayFabMatchmaker;
export const PlayFabServer: PlayFabServerModule.IPlayFabServer;
export const PlayFabAuthentication: PlayFabAuthenticationModule.IPlayFabAuthentication;
export const PlayFabCloudScript: PlayFabCloudScriptModule.IPlayFabCloudScript;
export const PlayFabData: PlayFabDataModule.IPlayFabData;
export const PlayFabEvents: PlayFabEventsModule.IPlayFabEvents;
export const PlayFabExperimentation: PlayFabExperimentationModule.IPlayFabExperimentation;
export const PlayFabInsights: PlayFabInsightsModule.IPlayFabInsights;
export const PlayFabGroups: PlayFabGroupsModule.IPlayFabGroups;
export const PlayFabLocalization: PlayFabLocalizationModule.IPlayFabLocalization;
export const PlayFabMultiplayer: PlayFabMultiplayerModule.IPlayFabMultiplayer;
export const PlayFabProfiles: PlayFabProfilesModule.IPlayFabProfiles;

