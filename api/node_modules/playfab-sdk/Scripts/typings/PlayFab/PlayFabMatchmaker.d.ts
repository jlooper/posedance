declare module PlayFabMatchmakerModule {
    export interface IPlayFabMatchmaker {
        settings: PlayFabModule.IPlayFabSettings;
        // Validates a user with the PlayFab service
        // https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/authuser
        AuthUser(
            request: PlayFabMatchmakerModels.AuthUserRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.AuthUserResponse> | null,
        ): void;
        // Informs the PlayFab game server hosting service that the indicated user has joined the Game Server Instance specified
        // https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/playerjoined
        PlayerJoined(
            request: PlayFabMatchmakerModels.PlayerJoinedRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.PlayerJoinedResponse> | null,
        ): void;
        // Informs the PlayFab game server hosting service that the indicated user has left the Game Server Instance specified
        // https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/playerleft
        PlayerLeft(
            request: PlayFabMatchmakerModels.PlayerLeftRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.PlayerLeftResponse> | null,
        ): void;
        // Instructs the PlayFab game server hosting service to instantiate a new Game Server Instance
        // https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/startgame
        StartGame(
            request: PlayFabMatchmakerModels.StartGameRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.StartGameResponse> | null,
        ): void;
        // Retrieves the relevant details for a specified user, which the external match-making service can then use to compute
        // effective matches
        // https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/userinfo
        UserInfo(
            request: PlayFabMatchmakerModels.UserInfoRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.UserInfoResponse> | null,
        ): void;

    }
}

declare module PlayFabMatchmakerModels {
    export interface AuthUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Session Ticket provided by the client.
        AuthorizationTicket: string;
    }

    export interface AuthUserResponse extends PlayFabModule.IPlayFabResultCommon {
        // Boolean indicating if the user has been authorized to use the external match-making service.
        Authorized: boolean;
        // PlayFab unique identifier of the account that has been authorized.
        PlayFabId?: string;
    }

    export interface ItemInstance {
        // Game specific comment associated with this instance when it was added to the user inventory.
        Annotation?: string;
        // Array of unique items that were awarded when this catalog item was purchased.
        BundleContents?: string[];
        // Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
        // container.
        BundleParent?: string;
        // Catalog version for the inventory item, when this instance was created.
        CatalogVersion?: string;
        // A set of custom key-value pairs on the instance of the inventory item, which is not to be confused with the catalog
        // item's custom data.
        CustomData?: { [key: string]: string | null };
        // CatalogItem.DisplayName at the time this item was purchased.
        DisplayName?: string;
        // Timestamp for when this instance will expire.
        Expiration?: string;
        // Class name for the inventory item, as defined in the catalog.
        ItemClass?: string;
        // Unique identifier for the inventory item, as defined in the catalog.
        ItemId?: string;
        // Unique item identifier for this specific instance of the item.
        ItemInstanceId?: string;
        // Timestamp for when this instance was purchased.
        PurchaseDate?: string;
        // Total number of remaining uses, if this is a consumable item.
        RemainingUses?: number;
        // Currency type for the cost of the catalog item. Not available when granting items.
        UnitCurrency?: string;
        // Cost of the catalog item in the given currency. Not available when granting items.
        UnitPrice: number;
        // The number of uses that were added or removed to this item in this call.
        UsesIncrementedBy?: number;
    }

    export interface PlayerJoinedRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance the user is joining. This must be a Game Server Instance started with the
        // Matchmaker/StartGame API.
        LobbyId: string;
        // PlayFab unique identifier for the player joining.
        PlayFabId: string;
    }

    export interface PlayerJoinedResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface PlayerLeftRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance the user is leaving. This must be a Game Server Instance started with the
        // Matchmaker/StartGame API.
        LobbyId: string;
        // PlayFab unique identifier for the player leaving.
        PlayFabId: string;
    }

    export interface PlayerLeftResponse extends PlayFabModule.IPlayFabResultCommon {}

    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    export interface StartGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the previously uploaded build executable which is to be started.
        Build: string;
        // Custom command line argument when starting game server process.
        CustomCommandLineData?: string;
        // HTTP endpoint URL for receiving game status events, if using an external matchmaker. When the game ends, PlayFab will
        // make a POST request to this URL with the X-SecretKey header set to the value of the game's secret and an
        // application/json body of { "EventName": "game_ended", "GameID": "<gameid>" }.
        ExternalMatchmakerEventEndpoint: string;
        // Game mode for this Game Server Instance.
        GameMode: string;
        // Region with which to associate the server, for filtering.
        Region: string;
    }

    export interface StartGameResponse extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier for the game/lobby in the new Game Server Instance.
        GameID?: string;
        // IPV4 address of the server
        ServerIPV4Address?: string;
        // IPV6 address of the new Game Server Instance.
        ServerIPV6Address?: string;
        // Port number for communication with the Game Server Instance.
        ServerPort: number;
        // Public DNS name (if any) of the server
        ServerPublicDNSName?: string;
    }

    export interface UserInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Minimum catalog version for which data is requested (filters the results to only contain inventory items which have a
        // catalog version of this or higher).
        MinCatalogVersion: number;
        // PlayFab unique identifier of the user whose information is being requested.
        PlayFabId: string;
    }

    export interface UserInfoResponse extends PlayFabModule.IPlayFabResultCommon {
        // Array of inventory items in the user's current inventory.
        Inventory?: ItemInstance[];
        // Boolean indicating whether the user is a developer.
        IsDeveloper: boolean;
        // PlayFab unique identifier of the user whose information was requested.
        PlayFabId?: string;
        // Steam unique identifier, if the user has an associated Steam account.
        SteamId?: string;
        // Title specific display name, if set.
        TitleDisplayName?: string;
        // PlayFab unique user name.
        Username?: string;
        // Array of virtual currency balance(s) belonging to the user.
        VirtualCurrency?: { [key: string]: number };
        // Array of remaining times and timestamps for virtual currencies.
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };
    }

    export interface VirtualCurrencyRechargeTime {
        // Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value
        // through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen
        // below this value.
        RechargeMax: number;
        // Server timestamp in UTC indicating the next time the virtual currency will be incremented.
        RechargeTime: string;
        // Time remaining (in seconds) before the next recharge increment of the virtual currency.
        SecondsToRecharge: number;
    }

}
