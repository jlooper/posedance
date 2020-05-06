declare module PlayFabProfilesModule {
    export interface IPlayFabProfiles {
        settings: PlayFabModule.IPlayFabSettings;
        // Gets the global title access policy
        // https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getglobalpolicy
        GetGlobalPolicy(
            request: PlayFabProfilesModels.GetGlobalPolicyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.GetGlobalPolicyResponse> | null,
        ): void;
        // Retrieves the entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getprofile
        GetProfile(
            request: PlayFabProfilesModels.GetEntityProfileRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.GetEntityProfileResponse> | null,
        ): void;
        // Retrieves the entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getprofiles
        GetProfiles(
            request: PlayFabProfilesModels.GetEntityProfilesRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.GetEntityProfilesResponse> | null,
        ): void;
        // Retrieves the title player accounts associated with the given master player account.
        // https://docs.microsoft.com/rest/api/playfab/profiles/account-management/gettitleplayersfrommasterplayeraccountids
        GetTitlePlayersFromMasterPlayerAccountIds(
            request: PlayFabProfilesModels.GetTitlePlayersFromMasterPlayerAccountIdsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.GetTitlePlayersFromMasterPlayerAccountIdsResponse> | null,
        ): void;
        // Sets the global title access policy
        // https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setglobalpolicy
        SetGlobalPolicy(
            request: PlayFabProfilesModels.SetGlobalPolicyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.SetGlobalPolicyResponse> | null,
        ): void;
        // Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account
        // language, Master Player Account language, and then title default language if the first two aren't set or supported.
        // https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setprofilelanguage
        SetProfileLanguage(
            request: PlayFabProfilesModels.SetProfileLanguageRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.SetProfileLanguageResponse> | null,
        ): void;
        // Sets the profiles access policy
        // https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setprofilepolicy
        SetProfilePolicy(
            request: PlayFabProfilesModels.SetEntityProfilePolicyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.SetEntityProfilePolicyResponse> | null,
        ): void;

    }
}

declare module PlayFabProfilesModels {
    type EffectType = "Allow"
        | "Deny";

    export interface EntityDataObject {
        // Un-escaped JSON object, if DataAsObject is true.
        DataObject?: any;
        // Escaped string JSON body of the object, if DataAsObject is default or false.
        EscapedDataObject?: string;
        // Name of this object.
        ObjectName?: string;
    }

    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
        Type?: string;
    }

    export interface EntityLineage {
        // The Character Id of the associated entity.
        CharacterId?: string;
        // The Group Id of the associated entity.
        GroupId?: string;
        // The Master Player Account Id of the associated entity.
        MasterPlayerAccountId?: string;
        // The Namespace Id of the associated entity.
        NamespaceId?: string;
        // The Title Id of the associated entity.
        TitleId?: string;
        // The Title Player Account Id of the associated entity.
        TitlePlayerAccountId?: string;
    }

    export interface EntityPermissionStatement {
        // The action this statement effects. May be 'Read', 'Write' or '*' for both read and write.
        Action: string;
        // A comment about the statement. Intended solely for bookkeeping and debugging.
        Comment?: string;
        // Additional conditions to be applied for entity resources.
        Condition?: any;
        // The effect this statement will have. It may be either Allow or Deny
        Effect: string;
        // The principal this statement will effect.
        Principal: any;
        // The resource this statements effects. Similar to 'pfrn:data--title![Title ID]/Profile/*'
        Resource: string;
    }

    export interface EntityProfileBody {
        // Avatar URL for the entity.
        AvatarUrl?: string;
        // The creation time of this profile in UTC.
        Created: string;
        // The display name of the entity. This field may serve different purposes for different entity types. i.e.: for a title
        // player account it could represent the display name of the player, whereas on a character it could be character's name.
        DisplayName?: string;
        // The entity id and type.
        Entity?: EntityKey;
        // The chain of responsibility for this entity. Use Lineage.
        EntityChain?: string;
        // The experiment variants of this profile.
        ExperimentVariants?: string[];
        // The files on this profile.
        Files?: { [key: string]: EntityProfileFileMetadata };
        // The language on this profile.
        Language?: string;
        // Leaderboard metadata for the entity.
        LeaderboardMetadata?: string;
        // The lineage of this profile.
        Lineage?: EntityLineage;
        // The objects on this profile.
        Objects?: { [key: string]: EntityDataObject };
        // The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
        // profile, not global statements from titles and namespaces.
        Permissions?: EntityPermissionStatement[];
        // The statistics on this profile.
        Statistics?: { [key: string]: EntityStatisticValue };
        // The version number of the profile in persistent storage at the time of the read. Used for optional optimistic
        // concurrency during update.
        VersionNumber: number;
    }

    export interface EntityProfileFileMetadata {
        // Checksum value for the file
        Checksum?: string;
        // Name of the file
        FileName?: string;
        // Last UTC time the file was modified
        LastModified: string;
        // Storage service's reported byte count
        Size: number;
    }

    export interface EntityStatisticChildValue {
        // Child name value, if child statistic
        ChildName?: string;
        // Child statistic metadata
        Metadata?: string;
        // Child statistic value
        Value: number;
    }

    export interface EntityStatisticValue {
        // Child statistic values
        ChildStatistics?: { [key: string]: EntityStatisticChildValue };
        // Statistic metadata
        Metadata?: string;
        // Statistic name
        Name?: string;
        // Statistic value
        Value?: number;
        // Statistic version
        Version: number;
    }

    export interface GetEntityProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
        // JSON string.
        DataAsObject?: boolean;
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface GetEntityProfileResponse extends PlayFabModule.IPlayFabResultCommon {
        // Entity profile
        Profile?: EntityProfileBody;
    }

    export interface GetEntityProfilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
        // JSON string.
        DataAsObject?: boolean;
        // Entity keys of the profiles to load. Must be between 1 and 25
        Entities: EntityKey[];
    }

    export interface GetEntityProfilesResponse extends PlayFabModule.IPlayFabResultCommon {
        // Entity profiles
        Profiles?: EntityProfileBody[];
    }

    export interface GetGlobalPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {}

    export interface GetGlobalPolicyResponse extends PlayFabModule.IPlayFabResultCommon {
        // The permissions that govern access to all entities under this title or namespace.
        Permissions?: EntityPermissionStatement[];
    }

    export interface GetTitlePlayersFromMasterPlayerAccountIdsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Master player account ids.
        MasterPlayerAccountIds: string[];
        // Id of title to get players from.
        TitleId?: string;
    }

    export interface GetTitlePlayersFromMasterPlayerAccountIdsResponse extends PlayFabModule.IPlayFabResultCommon {
        // Optional id of title to get players from, required if calling using a master_player_account.
        TitleId?: string;
        // Dictionary of master player ids mapped to title player entity keys and id pairs
        TitlePlayerAccounts?: { [key: string]: EntityKey };
    }

    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    export interface SetEntityProfilePolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
        // The statements to include in the access policy.
        Statements?: EntityPermissionStatement[];
    }

    export interface SetEntityProfilePolicyResponse extends PlayFabModule.IPlayFabResultCommon {
        // The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
        // profile, not global statements from titles and namespaces.
        Permissions?: EntityPermissionStatement[];
    }

    export interface SetGlobalPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The permissions that govern access to all entities under this title or namespace.
        Permissions?: EntityPermissionStatement[];
    }

    export interface SetGlobalPolicyResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface SetProfileLanguageRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The expected version of a profile to perform this update on
        ExpectedVersion?: number;
        // The language to set on the given entity. Deletes the profile's language if passed in a null string.
        Language?: string;
    }

    export interface SetProfileLanguageResponse extends PlayFabModule.IPlayFabResultCommon {
        // The type of operation that occured on the profile's language
        OperationResult?: string;
        // The updated version of the profile after the language update
        VersionNumber?: number;
    }

}
