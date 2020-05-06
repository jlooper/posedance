declare module PlayFabAuthenticationModule {
    export interface IPlayFabAuthentication {
        settings: PlayFabModule.IPlayFabSettings;
        // Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
        // Entity Token.
        // https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken
        GetEntityToken(
            request: PlayFabAuthenticationModels.GetEntityTokenRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetEntityTokenResponse> | null,
        ): void;
        // Method for a server to validate a client provided EntityToken. Only callable by the title entity.
        // https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken
        ValidateEntityToken(
            request: PlayFabAuthenticationModels.ValidateEntityTokenRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.ValidateEntityTokenResponse> | null,
        ): void;

    }
}

declare module PlayFabAuthenticationModels {
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

    export interface GetEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface GetEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The token used to set X-EntityToken for all entity based API calls.
        EntityToken?: string;
        // The time the token will expire, if it is an expiring token, in UTC.
        TokenExpiration?: string;
    }

    type LoginIdentityProvider = "Unknown"
        | "PlayFab"
        | "Custom"
        | "GameCenter"
        | "GooglePlay"
        | "Steam"
        | "XBoxLive"
        | "PSN"
        | "Kongregate"
        | "Facebook"
        | "IOSDevice"
        | "AndroidDevice"
        | "Twitch"
        | "WindowsHello"
        | "GameServer"
        | "CustomServer"
        | "NintendoSwitch"
        | "FacebookInstantGames"
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount";

    export interface ValidateEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Client EntityToken
        EntityToken: string;
    }

    export interface ValidateEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The identity provider for this entity, for the given login
        IdentityProvider?: string;
        // The lineage of this profile.
        Lineage?: EntityLineage;
    }

}
