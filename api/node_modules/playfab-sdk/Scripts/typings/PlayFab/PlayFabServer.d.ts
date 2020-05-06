declare module PlayFabServerModule {
    export interface IPlayFabServer {
        settings: PlayFabModule.IPlayFabSettings;
        // Increments the character's balance of the specified virtual currency by the stated amount
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/addcharactervirtualcurrency
        AddCharacterVirtualCurrency(
            request: PlayFabServerModels.AddCharacterVirtualCurrencyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyCharacterVirtualCurrencyResult> | null,
        ): void;
        // Adds the Friend user to the friendlist of the user with PlayFabId. At least one of
        // FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
        // https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/addfriend
        AddFriend(
            request: PlayFabServerModels.AddFriendRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse> | null,
        ): void;
        // Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
        // ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
        // authentication credentials, as the intent is that it is easily accessible by other players.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/addgenericid
        AddGenericID(
            request: PlayFabServerModels.AddGenericIDRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResult> | null,
        ): void;
        // Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
        // https://docs.microsoft.com/rest/api/playfab/server/playstream/addplayertag
        AddPlayerTag(
            request: PlayFabServerModels.AddPlayerTagRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.AddPlayerTagResult> | null,
        ): void;
        // Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
        // in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small
        // number of players, please see our guide:
        // https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
        // https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/addsharedgroupmembers
        AddSharedGroupMembers(
            request: PlayFabServerModels.AddSharedGroupMembersRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.AddSharedGroupMembersResult> | null,
        ): void;
        // Increments the user's balance of the specified virtual currency by the stated amount
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/adduservirtualcurrency
        AddUserVirtualCurrency(
            request: PlayFabServerModels.AddUserVirtualCurrencyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyUserVirtualCurrencyResult> | null,
        ): void;
        // Validated a client's session ticket, and if successful, returns details for that user
        // https://docs.microsoft.com/rest/api/playfab/server/authentication/authenticatesessionticket
        AuthenticateSessionTicket(
            request: PlayFabServerModels.AuthenticateSessionTicketRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.AuthenticateSessionTicketResult> | null,
        ): void;
        // Awards the specified users the specified Steam achievements
        // https://docs.microsoft.com/rest/api/playfab/server/platform-specific-methods/awardsteamachievement
        AwardSteamAchievement(
            request: PlayFabServerModels.AwardSteamAchievementRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.AwardSteamAchievementResult> | null,
        ): void;
        // Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/banusers
        BanUsers(
            request: PlayFabServerModels.BanUsersRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.BanUsersResult> | null,
        ): void;
        // Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's inventory.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/consumeitem
        ConsumeItem(
            request: PlayFabServerModels.ConsumeItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ConsumeItemResult> | null,
        ): void;
        // Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
        // group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data
        // between a very small number of players, please see our guide:
        // https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
        // https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/createsharedgroup
        CreateSharedGroup(
            request: PlayFabServerModels.CreateSharedGroupRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.CreateSharedGroupResult> | null,
        ): void;
        // Deletes the specific character ID from the specified user.
        // https://docs.microsoft.com/rest/api/playfab/server/characters/deletecharacterfromuser
        DeleteCharacterFromUser(
            request: PlayFabServerModels.DeleteCharacterFromUserRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeleteCharacterFromUserResult> | null,
        ): void;
        // Removes a user's player account from a title and deletes all associated data
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/deleteplayer
        DeletePlayer(
            request: PlayFabServerModels.DeletePlayerRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeletePlayerResult> | null,
        ): void;
        // Deletes push notification template for title
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/deletepushnotificationtemplate
        DeletePushNotificationTemplate(
            request: PlayFabServerModels.DeletePushNotificationTemplateRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeletePushNotificationTemplateResult> | null,
        ): void;
        // Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for
        // sharing data between a very small number of players, please see our guide:
        // https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
        // https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/deletesharedgroup
        DeleteSharedGroup(
            request: PlayFabServerModels.DeleteSharedGroupRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse> | null,
        ): void;
        // Inform the matchmaker that a Game Server Instance is removed.
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/deregistergame
        DeregisterGame(
            request: PlayFabServerModels.DeregisterGameRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeregisterGameResponse> | null,
        ): void;
        // Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would have been
        // added to the player inventory, if the Random Result Table were added via a Bundle or a call to UnlockContainer.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/evaluaterandomresulttable
        EvaluateRandomResultTable(
            request: PlayFabServerModels.EvaluateRandomResultTableRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EvaluateRandomResultTableResult> | null,
        ): void;
        // Executes a CloudScript function, with the 'currentPlayerId' variable set to the specified PlayFabId parameter value.
        // https://docs.microsoft.com/rest/api/playfab/server/server-side-cloud-script/executecloudscript
        ExecuteCloudScript(
            request: PlayFabServerModels.ExecuteCloudScriptServerRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ExecuteCloudScriptResult> | null,
        ): void;
        // Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
        // GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
        // https://docs.microsoft.com/rest/api/playfab/server/playstream/getallsegments
        GetAllSegments(
            request: PlayFabServerModels.GetAllSegmentsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetAllSegmentsResult> | null,
        ): void;
        // Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
        // evaluated with the parent PlayFabId to guarantee uniqueness.
        // https://docs.microsoft.com/rest/api/playfab/server/characters/getalluserscharacters
        GetAllUsersCharacters(
            request: PlayFabServerModels.ListUsersCharactersRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ListUsersCharactersResult> | null,
        ): void;
        // Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getcatalogitems
        GetCatalogItems(
            request: PlayFabServerModels.GetCatalogItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCatalogItemsResult> | null,
        ): void;
        // Retrieves the title-specific custom data for the user which is readable and writable by the client
        // https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterdata
        GetCharacterData(
            request: PlayFabServerModels.GetCharacterDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterDataResult> | null,
        ): void;
        // Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
        // https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterinternaldata
        GetCharacterInternalData(
            request: PlayFabServerModels.GetCharacterDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterDataResult> | null,
        ): void;
        // Retrieves the specified character's current inventory of virtual goods
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getcharacterinventory
        GetCharacterInventory(
            request: PlayFabServerModels.GetCharacterInventoryRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterInventoryResult> | null,
        ): void;
        // Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
        // https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterleaderboard
        GetCharacterLeaderboard(
            request: PlayFabServerModels.GetCharacterLeaderboardRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterLeaderboardResult> | null,
        ): void;
        // Retrieves the title-specific custom data for the user's character which can only be read by the client
        // https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterreadonlydata
        GetCharacterReadOnlyData(
            request: PlayFabServerModels.GetCharacterDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterDataResult> | null,
        ): void;
        // Retrieves the details of all title-specific statistics for the specific character
        // https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterstatistics
        GetCharacterStatistics(
            request: PlayFabServerModels.GetCharacterStatisticsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterStatisticsResult> | null,
        ): void;
        // This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
        // URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
        // content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
        // the query to retrieve the data will fail. See this post for more information:
        // https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
        // please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
        // https://docs.microsoft.com/rest/api/playfab/server/content/getcontentdownloadurl
        GetContentDownloadUrl(
            request: PlayFabServerModels.GetContentDownloadUrlRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetContentDownloadUrlResult> | null,
        ): void;
        // Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the
        // leaderboard
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getfriendleaderboard
        GetFriendLeaderboard(
            request: PlayFabServerModels.GetFriendLeaderboardRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardResult> | null,
        ): void;
        // Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from
        // linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
        // https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/getfriendslist
        GetFriendsList(
            request: PlayFabServerModels.GetFriendsListRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetFriendsListResult> | null,
        ): void;
        // Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboard
        GetLeaderboard(
            request: PlayFabServerModels.GetLeaderboardRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardResult> | null,
        ): void;
        // Retrieves a list of ranked characters for the given statistic, centered on the requested user
        // https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardaroundcharacter
        GetLeaderboardAroundCharacter(
            request: PlayFabServerModels.GetLeaderboardAroundCharacterRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardAroundCharacterResult> | null,
        ): void;
        // Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboardarounduser
        GetLeaderboardAroundUser(
            request: PlayFabServerModels.GetLeaderboardAroundUserRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardAroundUserResult> | null,
        ): void;
        // Retrieves a list of all of the user's characters for the given statistic.
        // https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardforusercharacters
        GetLeaderboardForUserCharacters(
            request: PlayFabServerModels.GetLeaderboardForUsersCharactersRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardForUsersCharactersResult> | null,
        ): void;
        // Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be
        // returned. All parameters default to false.
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercombinedinfo
        GetPlayerCombinedInfo(
            request: PlayFabServerModels.GetPlayerCombinedInfoRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerCombinedInfoResult> | null,
        ): void;
        // Retrieves the player's profile
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayerprofile
        GetPlayerProfile(
            request: PlayFabServerModels.GetPlayerProfileRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerProfileResult> | null,
        ): void;
        // List all segments that a player currently belongs to at this moment in time.
        // https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersegments
        GetPlayerSegments(
            request: PlayFabServerModels.GetPlayersSegmentsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerSegmentsResult> | null,
        ): void;
        // Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
        // the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
        // on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
        // in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being
        // called 30 times in one minute. You will be returned an error if you exceed this threshold.
        // https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersinsegment
        GetPlayersInSegment(
            request: PlayFabServerModels.GetPlayersInSegmentRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayersInSegmentResult> | null,
        ): void;
        // Retrieves the current version and values for the indicated statistics, for the local player.
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatistics
        GetPlayerStatistics(
            request: PlayFabServerModels.GetPlayerStatisticsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerStatisticsResult> | null,
        ): void;
        // Retrieves the information on the available versions of the specified statistic.
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatisticversions
        GetPlayerStatisticVersions(
            request: PlayFabServerModels.GetPlayerStatisticVersionsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerStatisticVersionsResult> | null,
        ): void;
        // Get all tags with a given Namespace (optional) from a player profile.
        // https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayertags
        GetPlayerTags(
            request: PlayFabServerModels.GetPlayerTagsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerTagsResult> | null,
        ): void;
        // Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookids
        GetPlayFabIDsFromFacebookIDs(
            request: PlayFabServerModels.GetPlayFabIDsFromFacebookIDsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromFacebookIDsResult> | null,
        ): void;
        // Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookinstantgamesids
        GetPlayFabIDsFromFacebookInstantGamesIds(
            request: PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsResult> | null,
        ): void;
        // Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
        // service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
        // added to the player account.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromgenericids
        GetPlayFabIDsFromGenericIDs(
            request: PlayFabServerModels.GetPlayFabIDsFromGenericIDsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromGenericIDsResult> | null,
        ): void;
        // Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoswitchdeviceids
        GetPlayFabIDsFromNintendoSwitchDeviceIds(
            request: PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsResult> | null,
        ): void;
        // Retrieves the unique PlayFab identifiers for the given set of PlayStation Network identifiers.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnaccountids
        GetPlayFabIDsFromPSNAccountIDs(
            request: PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsResult> | null,
        ): void;
        // Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
        // IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamids
        GetPlayFabIDsFromSteamIDs(
            request: PlayFabServerModels.GetPlayFabIDsFromSteamIDsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromSteamIDsResult> | null,
        ): void;
        // Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromxboxliveids
        GetPlayFabIDsFromXboxLiveIDs(
            request: PlayFabServerModels.GetPlayFabIDsFromXboxLiveIDsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromXboxLiveIDsResult> | null,
        ): void;
        // Retrieves the key-value store of custom publisher settings
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getpublisherdata
        GetPublisherData(
            request: PlayFabServerModels.GetPublisherDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPublisherDataResult> | null,
        ): void;
        // Retrieves the configuration information for the specified random results tables for the title, including all ItemId
        // values and weights
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getrandomresulttables
        GetRandomResultTables(
            request: PlayFabServerModels.GetRandomResultTablesRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetRandomResultTablesResult> | null,
        ): void;
        // Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getservercustomidsfromplayfabids
        GetServerCustomIDsFromPlayFabIDs(
            request: PlayFabServerModels.GetServerCustomIDsFromPlayFabIDsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetServerCustomIDsFromPlayFabIDsResult> | null,
        ): void;
        // Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all
        // public and private group data. Shared Groups are designed for sharing data between a very small number of players,
        // please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
        // https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/getsharedgroupdata
        GetSharedGroupData(
            request: PlayFabServerModels.GetSharedGroupDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetSharedGroupDataResult> | null,
        ): void;
        // Retrieves the set of items defined for the specified store, including all prices defined, for the specified player
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getstoreitems
        GetStoreItems(
            request: PlayFabServerModels.GetStoreItemsServerRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetStoreItemsResult> | null,
        ): void;
        // Retrieves the current server time
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettime
        GetTime(
            request: PlayFabServerModels.GetTimeRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTimeResult> | null,
        ): void;
        // Retrieves the key-value store of custom title settings
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitledata
        GetTitleData(
            request: PlayFabServerModels.GetTitleDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTitleDataResult> | null,
        ): void;
        // Retrieves the key-value store of custom internal title settings
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitleinternaldata
        GetTitleInternalData(
            request: PlayFabServerModels.GetTitleDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTitleDataResult> | null,
        ): void;
        // Retrieves the title news feed, as configured in the developer portal
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitlenews
        GetTitleNews(
            request: PlayFabServerModels.GetTitleNewsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTitleNewsResult> | null,
        ): void;
        // Retrieves the relevant details for a specified user
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getuseraccountinfo
        GetUserAccountInfo(
            request: PlayFabServerModels.GetUserAccountInfoRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserAccountInfoResult> | null,
        ): void;
        // Gets all bans for a user.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/getuserbans
        GetUserBans(
            request: PlayFabServerModels.GetUserBansRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserBansResult> | null,
        ): void;
        // Retrieves the title-specific custom data for the user which is readable and writable by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserdata
        GetUserData(
            request: PlayFabServerModels.GetUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult> | null,
        ): void;
        // Retrieves the title-specific custom data for the user which cannot be accessed by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserinternaldata
        GetUserInternalData(
            request: PlayFabServerModels.GetUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult> | null,
        ): void;
        // Retrieves the specified user's current inventory of virtual goods
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getuserinventory
        GetUserInventory(
            request: PlayFabServerModels.GetUserInventoryRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserInventoryResult> | null,
        ): void;
        // Retrieves the publisher-specific custom data for the user which is readable and writable by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherdata
        GetUserPublisherData(
            request: PlayFabServerModels.GetUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult> | null,
        ): void;
        // Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherinternaldata
        GetUserPublisherInternalData(
            request: PlayFabServerModels.GetUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult> | null,
        ): void;
        // Retrieves the publisher-specific custom data for the user which can only be read by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherreadonlydata
        GetUserPublisherReadOnlyData(
            request: PlayFabServerModels.GetUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult> | null,
        ): void;
        // Retrieves the title-specific custom data for the user which can only be read by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserreadonlydata
        GetUserReadOnlyData(
            request: PlayFabServerModels.GetUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult> | null,
        ): void;
        // Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
        // with the parent PlayFabId to guarantee uniqueness.
        // https://docs.microsoft.com/rest/api/playfab/server/characters/grantcharactertouser
        GrantCharacterToUser(
            request: PlayFabServerModels.GrantCharacterToUserRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantCharacterToUserResult> | null,
        ): void;
        // Adds the specified items to the specified character's inventory
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstocharacter
        GrantItemsToCharacter(
            request: PlayFabServerModels.GrantItemsToCharacterRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantItemsToCharacterResult> | null,
        ): void;
        // Adds the specified items to the specified user's inventory
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstouser
        GrantItemsToUser(
            request: PlayFabServerModels.GrantItemsToUserRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantItemsToUserResult> | null,
        ): void;
        // Adds the specified items to the specified user inventories
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstousers
        GrantItemsToUsers(
            request: PlayFabServerModels.GrantItemsToUsersRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantItemsToUsersResult> | null,
        ): void;
        // Links the PlayStation Network account associated with the provided access code to the user's PlayFab account
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnaccount
        LinkPSNAccount(
            request: PlayFabServerModels.LinkPSNAccountRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.LinkPSNAccountResult> | null,
        ): void;
        // Links the custom server identifier, generated by the title, to the user's PlayFab account.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/linkservercustomid
        LinkServerCustomId(
            request: PlayFabServerModels.LinkServerCustomIdRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.LinkServerCustomIdResult> | null,
        ): void;
        // Links the Xbox Live account associated with the provided access code to the user's PlayFab account
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxaccount
        LinkXboxAccount(
            request: PlayFabServerModels.LinkXboxAccountRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.LinkXboxAccountResult> | null,
        ): void;
        // Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID
        // and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
        // https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithservercustomid
        LoginWithServerCustomId(
            request: PlayFabServerModels.LoginWithServerCustomIdRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ServerLoginResult> | null,
        ): void;
        // Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can
        // subsequently be used for API calls which require an authenticated user
        // https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxbox
        LoginWithXbox(
            request: PlayFabServerModels.LoginWithXboxRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ServerLoginResult> | null,
        ): void;
        // Signs the user in using an Xbox ID and Sandbox ID, returning a session identifier that can subsequently be used for API
        // calls which require an authenticated user
        // https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxboxid
        LoginWithXboxId(
            request: PlayFabServerModels.LoginWithXboxIdRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ServerLoginResult> | null,
        ): void;
        // Modifies the number of remaining uses of a player's inventory item
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/modifyitemuses
        ModifyItemUses(
            request: PlayFabServerModels.ModifyItemUsesRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyItemUsesResult> | null,
        ): void;
        // Moves an item from a character's inventory into another of the users's character's inventory.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromcharacter
        MoveItemToCharacterFromCharacter(
            request: PlayFabServerModels.MoveItemToCharacterFromCharacterRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.MoveItemToCharacterFromCharacterResult> | null,
        ): void;
        // Moves an item from a user's inventory into their character's inventory.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromuser
        MoveItemToCharacterFromUser(
            request: PlayFabServerModels.MoveItemToCharacterFromUserRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.MoveItemToCharacterFromUserResult> | null,
        ): void;
        // Moves an item from a character's inventory into the owning user's inventory.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtouserfromcharacter
        MoveItemToUserFromCharacter(
            request: PlayFabServerModels.MoveItemToUserFromCharacterRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.MoveItemToUserFromCharacterResult> | null,
        ): void;
        // Informs the PlayFab match-making service that the user specified has left the Game Server Instance
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/notifymatchmakerplayerleft
        NotifyMatchmakerPlayerLeft(
            request: PlayFabServerModels.NotifyMatchmakerPlayerLeftRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.NotifyMatchmakerPlayerLeftResult> | null,
        ): void;
        // Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
        // Economy->Catalogs tab in the PlayFab Game Manager.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/redeemcoupon
        RedeemCoupon(
            request: PlayFabServerModels.RedeemCouponRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RedeemCouponResult> | null,
        ): void;
        // Validates a Game Server session ticket and returns details about the user
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/redeemmatchmakerticket
        RedeemMatchmakerTicket(
            request: PlayFabServerModels.RedeemMatchmakerTicketRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RedeemMatchmakerTicketResult> | null,
        ): void;
        // Set the state of the indicated Game Server Instance. Also update the heartbeat for the instance.
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/refreshgameserverinstanceheartbeat
        RefreshGameServerInstanceHeartbeat(
            request: PlayFabServerModels.RefreshGameServerInstanceHeartbeatRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RefreshGameServerInstanceHeartbeatResult> | null,
        ): void;
        // Inform the matchmaker that a new Game Server Instance is added.
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/registergame
        RegisterGame(
            request: PlayFabServerModels.RegisterGameRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RegisterGameResponse> | null,
        ): void;
        // Removes the specified friend from the the user's friend list
        // https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/removefriend
        RemoveFriend(
            request: PlayFabServerModels.RemoveFriendRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse> | null,
        ): void;
        // Removes the specified generic service identifier from the player's PlayFab account.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/removegenericid
        RemoveGenericID(
            request: PlayFabServerModels.RemoveGenericIDRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResult> | null,
        ): void;
        // Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
        // https://docs.microsoft.com/rest/api/playfab/server/playstream/removeplayertag
        RemovePlayerTag(
            request: PlayFabServerModels.RemovePlayerTagRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RemovePlayerTagResult> | null,
        ): void;
        // Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
        // group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
        // will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
        // guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
        // https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/removesharedgroupmembers
        RemoveSharedGroupMembers(
            request: PlayFabServerModels.RemoveSharedGroupMembersRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RemoveSharedGroupMembersResult> | null,
        ): void;
        // Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service
        // representatives for the title can take action concerning potentially toxic players.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/reportplayer
        ReportPlayer(
            request: PlayFabServerModels.ReportPlayerServerRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ReportPlayerServerResult> | null,
        ): void;
        // Revoke all active bans for a user.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/revokeallbansforuser
        RevokeAllBansForUser(
            request: PlayFabServerModels.RevokeAllBansForUserRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeAllBansForUserResult> | null,
        ): void;
        // Revoke all active bans specified with BanId.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/revokebans
        RevokeBans(
            request: PlayFabServerModels.RevokeBansRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeBansResult> | null,
        ): void;
        // Revokes access to an item in a user's inventory
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitem
        RevokeInventoryItem(
            request: PlayFabServerModels.RevokeInventoryItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeInventoryResult> | null,
        ): void;
        // Revokes access for up to 25 items across multiple users and characters.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitems
        RevokeInventoryItems(
            request: PlayFabServerModels.RevokeInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeInventoryItemsResult> | null,
        ): void;
        // Saves push notification template for title
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/savepushnotificationtemplate
        SavePushNotificationTemplate(
            request: PlayFabServerModels.SavePushNotificationTemplateRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SavePushNotificationTemplateResult> | null,
        ): void;
        // Forces an email to be sent to the registered contact email address for the user's account based on an account recovery
        // email template
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/sendcustomaccountrecoveryemail
        SendCustomAccountRecoveryEmail(
            request: PlayFabServerModels.SendCustomAccountRecoveryEmailRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendCustomAccountRecoveryEmailResult> | null,
        ): void;
        // Sends an email based on an email template to a player's contact email
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/sendemailfromtemplate
        SendEmailFromTemplate(
            request: PlayFabServerModels.SendEmailFromTemplateRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendEmailFromTemplateResult> | null,
        ): void;
        // Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push
        // Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotification
        SendPushNotification(
            request: PlayFabServerModels.SendPushNotificationRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendPushNotificationResult> | null,
        ): void;
        // Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push
        // Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotificationfromtemplate
        SendPushNotificationFromTemplate(
            request: PlayFabServerModels.SendPushNotificationFromTemplateRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendPushNotificationResult> | null,
        ): void;
        // Updates the tag list for a specified user in the friend list of another user
        // https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/setfriendtags
        SetFriendTags(
            request: PlayFabServerModels.SetFriendTagsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse> | null,
        ): void;
        // Sets the custom data of the indicated Game Server Instance
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancedata
        SetGameServerInstanceData(
            request: PlayFabServerModels.SetGameServerInstanceDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetGameServerInstanceDataResult> | null,
        ): void;
        // Set the state of the indicated Game Server Instance.
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancestate
        SetGameServerInstanceState(
            request: PlayFabServerModels.SetGameServerInstanceStateRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetGameServerInstanceStateResult> | null,
        ): void;
        // Set custom tags for the specified Game Server Instance
        // https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancetags
        SetGameServerInstanceTags(
            request: PlayFabServerModels.SetGameServerInstanceTagsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetGameServerInstanceTagsResult> | null,
        ): void;
        // Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
        // secret use the Admin or Server API method SetPlayerSecret.
        // https://docs.microsoft.com/rest/api/playfab/server/authentication/setplayersecret
        SetPlayerSecret(
            request: PlayFabServerModels.SetPlayerSecretRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetPlayerSecretResult> | null,
        ): void;
        // Updates the key-value store of custom publisher settings
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/setpublisherdata
        SetPublisherData(
            request: PlayFabServerModels.SetPublisherDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetPublisherDataResult> | null,
        ): void;
        // Updates the key-value store of custom title settings
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitledata
        SetTitleData(
            request: PlayFabServerModels.SetTitleDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetTitleDataResult> | null,
        ): void;
        // Updates the key-value store of custom title settings
        // https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitleinternaldata
        SetTitleInternalData(
            request: PlayFabServerModels.SetTitleDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetTitleDataResult> | null,
        ): void;
        // Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to make a VC
        // balance negative with this API.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractcharactervirtualcurrency
        SubtractCharacterVirtualCurrency(
            request: PlayFabServerModels.SubtractCharacterVirtualCurrencyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyCharacterVirtualCurrencyResult> | null,
        ): void;
        // Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make a VC
        // balance negative with this API.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractuservirtualcurrency
        SubtractUserVirtualCurrency(
            request: PlayFabServerModels.SubtractUserVirtualCurrencyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyUserVirtualCurrencyResult> | null,
        ): void;
        // Unlinks the related PSN account from the user's PlayFab account
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkpsnaccount
        UnlinkPSNAccount(
            request: PlayFabServerModels.UnlinkPSNAccountRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlinkPSNAccountResult> | null,
        ): void;
        // Unlinks the custom server identifier from the user's PlayFab account.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkservercustomid
        UnlinkServerCustomId(
            request: PlayFabServerModels.UnlinkServerCustomIdRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlinkServerCustomIdResult> | null,
        ): void;
        // Unlinks the related Xbox Live account from the user's PlayFab account
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkxboxaccount
        UnlinkXboxAccount(
            request: PlayFabServerModels.UnlinkXboxAccountRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlinkXboxAccountResult> | null,
        ): void;
        // Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when required), and
        // returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses >
        // 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontainerinstance
        UnlockContainerInstance(
            request: PlayFabServerModels.UnlockContainerInstanceRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlockContainerItemResult> | null,
        ): void;
        // Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary unlocks it
        // using any appropriate key, and returns the contents of the opened container. If the container (and key when relevant)
        // are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of
        // ConsumeItem.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontaineritem
        UnlockContainerItem(
            request: PlayFabServerModels.UnlockContainerItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlockContainerItemResult> | null,
        ): void;
        // Update the avatar URL of the specified player
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/updateavatarurl
        UpdateAvatarUrl(
            request: PlayFabServerModels.UpdateAvatarUrlRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse> | null,
        ): void;
        // Updates information of a list of existing bans specified with Ban Ids.
        // https://docs.microsoft.com/rest/api/playfab/server/account-management/updatebans
        UpdateBans(
            request: PlayFabServerModels.UpdateBansRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateBansResult> | null,
        ): void;
        // Updates the title-specific custom data for the user's character which is readable and writable by the client
        // https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterdata
        UpdateCharacterData(
            request: PlayFabServerModels.UpdateCharacterDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterDataResult> | null,
        ): void;
        // Updates the title-specific custom data for the user's character which cannot be accessed by the client
        // https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterinternaldata
        UpdateCharacterInternalData(
            request: PlayFabServerModels.UpdateCharacterDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterDataResult> | null,
        ): void;
        // Updates the title-specific custom data for the user's character which can only be read by the client
        // https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterreadonlydata
        UpdateCharacterReadOnlyData(
            request: PlayFabServerModels.UpdateCharacterDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterDataResult> | null,
        ): void;
        // Updates the values of the specified title-specific statistics for the specific character
        // https://docs.microsoft.com/rest/api/playfab/server/characters/updatecharacterstatistics
        UpdateCharacterStatistics(
            request: PlayFabServerModels.UpdateCharacterStatisticsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterStatisticsResult> | null,
        ): void;
        // Updates the values of the specified title-specific statistics for the user
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayerstatistics
        UpdatePlayerStatistics(
            request: PlayFabServerModels.UpdatePlayerStatisticsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdatePlayerStatisticsResult> | null,
        ): void;
        // Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
        // or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
        // Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are
        // designed for sharing data between a very small number of players, please see our guide:
        // https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
        // https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/updatesharedgroupdata
        UpdateSharedGroupData(
            request: PlayFabServerModels.UpdateSharedGroupDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateSharedGroupDataResult> | null,
        ): void;
        // Updates the title-specific custom data for the user which is readable and writable by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserdata
        UpdateUserData(
            request: PlayFabServerModels.UpdateUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult> | null,
        ): void;
        // Updates the title-specific custom data for the user which cannot be accessed by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserinternaldata
        UpdateUserInternalData(
            request: PlayFabServerModels.UpdateUserInternalDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult> | null,
        ): void;
        // Updates the key-value pair data tagged to the specified item, which is read-only from the client.
        // https://docs.microsoft.com/rest/api/playfab/server/player-item-management/updateuserinventoryitemcustomdata
        UpdateUserInventoryItemCustomData(
            request: PlayFabServerModels.UpdateUserInventoryItemDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse> | null,
        ): void;
        // Updates the publisher-specific custom data for the user which is readable and writable by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherdata
        UpdateUserPublisherData(
            request: PlayFabServerModels.UpdateUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult> | null,
        ): void;
        // Updates the publisher-specific custom data for the user which cannot be accessed by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherinternaldata
        UpdateUserPublisherInternalData(
            request: PlayFabServerModels.UpdateUserInternalDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult> | null,
        ): void;
        // Updates the publisher-specific custom data for the user which can only be read by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherreadonlydata
        UpdateUserPublisherReadOnlyData(
            request: PlayFabServerModels.UpdateUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult> | null,
        ): void;
        // Updates the title-specific custom data for the user which can only be read by the client
        // https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserreadonlydata
        UpdateUserReadOnlyData(
            request: PlayFabServerModels.UpdateUserDataRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult> | null,
        ): void;
        // Writes a character-based event into PlayStream.
        // https://docs.microsoft.com/rest/api/playfab/server/analytics/writecharacterevent
        WriteCharacterEvent(
            request: PlayFabServerModels.WriteServerCharacterEventRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.WriteEventResponse> | null,
        ): void;
        // Writes a player-based event into PlayStream.
        // https://docs.microsoft.com/rest/api/playfab/server/analytics/writeplayerevent
        WritePlayerEvent(
            request: PlayFabServerModels.WriteServerPlayerEventRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.WriteEventResponse> | null,
        ): void;
        // Writes a title-based event into PlayStream.
        // https://docs.microsoft.com/rest/api/playfab/server/analytics/writetitleevent
        WriteTitleEvent(
            request: PlayFabServerModels.WriteTitleEventRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabServerModels.WriteEventResponse> | null,
        ): void;

    }
}

declare module PlayFabServerModels {
    export interface AdCampaignAttribution {
        // UTC time stamp of attribution
        AttributedAt: string;
        // Attribution campaign identifier
        CampaignId?: string;
        // Attribution network name
        Platform?: string;
    }

    export interface AdCampaignAttributionModel {
        // UTC time stamp of attribution
        AttributedAt: string;
        // Attribution campaign identifier
        CampaignId?: string;
        // Attribution network name
        Platform?: string;
    }

    export interface AddCharacterVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be added to the character balance of the specified virtual currency. Maximum VC balance is Int32
        // (2,147,483,647). Any increase over this value will be discarded.
        Amount: number;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // PlayFab unique identifier of the user whose virtual currency balance is to be incremented.
        PlayFabId: string;
        // Name of the virtual currency which is to be incremented.
        VirtualCurrency: string;
    }

    export interface AddFriendRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Email address of the user being added.
        FriendEmail?: string;
        // The PlayFab identifier of the user being added.
        FriendPlayFabId?: string;
        // Title-specific display name of the user to being added.
        FriendTitleDisplayName?: string;
        // The PlayFab username of the user being added
        FriendUsername?: string;
        // PlayFab identifier of the player to add a new friend.
        PlayFabId: string;
    }

    export interface AddGenericIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Generic service identifier to add to the player account.
        GenericId: GenericServiceId;
        // PlayFabId of the user to link.
        PlayFabId: string;
    }

    export interface AddPlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique tag for player profile.
        TagName: string;
    }

    export interface AddPlayerTagResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface AddSharedGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An array of unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabIds: string[];
        // Unique identifier for the shared group.
        SharedGroupId: string;
    }

    export interface AddSharedGroupMembersResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface AddUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be added to the user balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647).
        // Any increase over this value will be discarded.
        Amount: number;
        // PlayFab unique identifier of the user whose virtual currency balance is to be increased.
        PlayFabId: string;
        // Name of the virtual currency which is to be incremented.
        VirtualCurrency: string;
    }

    export interface AdvancedPushPlatformMsg {
        // The Json the platform should receive.
        Json: string;
        // The platform that should receive the Json.
        Platform: string;
    }

    export interface AuthenticateSessionTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Session ticket as issued by a PlayFab client login API.
        SessionTicket: string;
    }

    export interface AuthenticateSessionTicketResult extends PlayFabModule.IPlayFabResultCommon {
        // Account info for the user whose session ticket was supplied.
        UserInfo?: UserAccountInfo;
    }

    export interface AwardSteamAchievementItem {
        // Unique Steam achievement name.
        AchievementName: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Result of the award attempt (only valid on response, not on request).
        Result: boolean;
    }

    export interface AwardSteamAchievementRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of achievements to grant and the users to whom they are to be granted.
        Achievements: AwardSteamAchievementItem[];
    }

    export interface AwardSteamAchievementResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of achievements granted.
        AchievementResults?: AwardSteamAchievementItem[];
    }

    export interface BanInfo {
        // The active state of this ban. Expired bans may still have this value set to true but they will have no effect.
        Active: boolean;
        // The unique Ban Id associated with this ban.
        BanId?: string;
        // The time when this ban was applied.
        Created?: string;
        // The time when this ban expires. Permanent bans do not have expiration date.
        Expires?: string;
        // The IP address on which the ban was applied. May affect multiple players.
        IPAddress?: string;
        // The MAC address on which the ban was applied. May affect multiple players.
        MACAddress?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // The reason why this ban was applied.
        Reason?: string;
    }

    export interface BanRequest {
        // The duration in hours for the ban. Leave this blank for a permanent ban.
        DurationInHours?: number;
        // IP address to be banned. May affect multiple players.
        IPAddress?: string;
        // MAC address to be banned. May affect multiple players.
        MACAddress?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // The reason for this ban. Maximum 140 characters.
        Reason?: string;
    }

    export interface BanUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // List of ban requests to be applied. Maximum 100.
        Bans: BanRequest[];
    }

    export interface BanUsersResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were applied
        BanData?: BanInfo[];
    }

    export interface CatalogItem {
        // defines the bundle properties for the item - bundles are items which contain other items, including random drop tables
        // and virtual currencies
        Bundle?: CatalogItemBundleInfo;
        // if true, then an item instance of this type can be used to grant a character to a user.
        CanBecomeCharacter: boolean;
        // catalog version for this item
        CatalogVersion?: string;
        // defines the consumable properties (number of uses, timeout) for the item
        Consumable?: CatalogItemConsumableInfo;
        // defines the container properties for the item - what items it contains, including random drop tables and virtual
        // currencies, and what item (if any) is required to open it via the UnlockContainerItem API
        Container?: CatalogItemContainerInfo;
        // game specific custom data
        CustomData?: string;
        // text description of item, to show in-game
        Description?: string;
        // text name for the item, to show in-game
        DisplayName?: string;
        // If the item has IsLImitedEdition set to true, and this is the first time this ItemId has been defined as a limited
        // edition item, this value determines the total number of instances to allocate for the title. Once this limit has been
        // reached, no more instances of this ItemId can be created, and attempts to purchase or grant it will return a Result of
        // false for that ItemId. If the item has already been defined to have a limited edition count, or if this value is less
        // than zero, it will be ignored.
        InitialLimitedEditionCount: number;
        // BETA: If true, then only a fixed number can ever be granted.
        IsLimitedEdition: boolean;
        // if true, then only one item instance of this type will exist and its remaininguses will be incremented instead.
        // RemainingUses will cap out at Int32.Max (2,147,483,647). All subsequent increases will be discarded
        IsStackable: boolean;
        // if true, then an item instance of this type can be traded between players using the trading APIs
        IsTradable: boolean;
        // class to which the item belongs
        ItemClass?: string;
        // unique identifier for this item
        ItemId: string;
        // URL to the item image. For Facebook purchase to display the image on the item purchase page, this must be set to an HTTP
        // URL.
        ItemImageUrl?: string;
        // override prices for this item for specific currencies
        RealCurrencyPrices?: { [key: string]: number };
        // list of item tags
        Tags?: string[];
        // price of this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies)
        VirtualCurrencyPrices?: { [key: string]: number };
    }

    export interface CatalogItemBundleInfo {
        // unique ItemId values for all items which will be added to the player inventory when the bundle is added
        BundledItems?: string[];
        // unique TableId values for all RandomResultTable objects which are part of the bundle (random tables will be resolved and
        // add the relevant items to the player inventory when the bundle is added)
        BundledResultTables?: string[];
        // virtual currency types and balances which will be added to the player inventory when the bundle is added
        BundledVirtualCurrencies?: { [key: string]: number };
    }

    export interface CatalogItemConsumableInfo {
        // number of times this object can be used, after which it will be removed from the player inventory
        UsageCount?: number;
        // duration in seconds for how long the item will remain in the player inventory - once elapsed, the item will be removed
        // (recommended minimum value is 5 seconds, as lower values can cause the item to expire before operations depending on
        // this item's details have completed)
        UsagePeriod?: number;
        // all inventory item instances in the player inventory sharing a non-null UsagePeriodGroup have their UsagePeriod values
        // added together, and share the result - when that period has elapsed, all the items in the group will be removed
        UsagePeriodGroup?: string;
    }

    export interface CatalogItemContainerInfo {
        // unique ItemId values for all items which will be added to the player inventory, once the container has been unlocked
        ItemContents?: string[];
        // ItemId for the catalog item used to unlock the container, if any (if not specified, a call to UnlockContainerItem will
        // open the container, adding the contents to the player inventory and currency balances)
        KeyItemId?: string;
        // unique TableId values for all RandomResultTable objects which are part of the container (once unlocked, random tables
        // will be resolved and add the relevant items to the player inventory)
        ResultTableContents?: string[];
        // virtual currency types and balances which will be added to the player inventory when the container is unlocked
        VirtualCurrencyContents?: { [key: string]: number };
    }

    export interface CharacterInventory {
        // The id of this character.
        CharacterId?: string;
        // The inventory of this character.
        Inventory?: ItemInstance[];
    }

    export interface CharacterLeaderboardEntry {
        // PlayFab unique identifier of the character that belongs to the user for this leaderboard entry.
        CharacterId?: string;
        // Title-specific display name of the character for this leaderboard entry.
        CharacterName?: string;
        // Name of the character class for this entry.
        CharacterType?: string;
        // Title-specific display name of the user for this leaderboard entry.
        DisplayName?: string;
        // PlayFab unique identifier of the user for this leaderboard entry.
        PlayFabId?: string;
        // User's overall position in the leaderboard.
        Position: number;
        // Specific value of the user's statistic.
        StatValue: number;
    }

    export interface CharacterResult {
        // The id for this character on this player.
        CharacterId?: string;
        // The name of this character.
        CharacterName?: string;
        // The type-string that was given to this character on creation.
        CharacterType?: string;
    }

    type CloudScriptRevisionOption = "Live"
        | "Latest"
        | "Specific";

    export interface ConsumeItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Number of uses to consume from the item.
        ConsumeCount: number;
        // Unique instance identifier of the item to be consumed.
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface ConsumeItemResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique instance identifier of the item with uses consumed.
        ItemInstanceId?: string;
        // Number of uses remaining on the item.
        RemainingUses: number;
    }

    export interface ContactEmailInfo {
        // The email address
        EmailAddress?: string;
        // The name of the email info data
        Name?: string;
        // The verification status of the email
        VerificationStatus?: string;
    }

    export interface ContactEmailInfoModel {
        // The email address
        EmailAddress?: string;
        // The name of the email info data
        Name?: string;
        // The verification status of the email
        VerificationStatus?: string;
    }

    type ContinentCode = "AF"
        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA";

    type CountryCode = "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KP"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW";

    export interface CreateSharedGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the shared group (a random identifier will be assigned, if one is not specified).
        SharedGroupId?: string;
    }

    export interface CreateSharedGroupResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier for the shared group.
        SharedGroupId?: string;
    }

    type Currency = "AED"
        | "AFN"
        | "ALL"
        | "AMD"
        | "ANG"
        | "AOA"
        | "ARS"
        | "AUD"
        | "AWG"
        | "AZN"
        | "BAM"
        | "BBD"
        | "BDT"
        | "BGN"
        | "BHD"
        | "BIF"
        | "BMD"
        | "BND"
        | "BOB"
        | "BRL"
        | "BSD"
        | "BTN"
        | "BWP"
        | "BYR"
        | "BZD"
        | "CAD"
        | "CDF"
        | "CHF"
        | "CLP"
        | "CNY"
        | "COP"
        | "CRC"
        | "CUC"
        | "CUP"
        | "CVE"
        | "CZK"
        | "DJF"
        | "DKK"
        | "DOP"
        | "DZD"
        | "EGP"
        | "ERN"
        | "ETB"
        | "EUR"
        | "FJD"
        | "FKP"
        | "GBP"
        | "GEL"
        | "GGP"
        | "GHS"
        | "GIP"
        | "GMD"
        | "GNF"
        | "GTQ"
        | "GYD"
        | "HKD"
        | "HNL"
        | "HRK"
        | "HTG"
        | "HUF"
        | "IDR"
        | "ILS"
        | "IMP"
        | "INR"
        | "IQD"
        | "IRR"
        | "ISK"
        | "JEP"
        | "JMD"
        | "JOD"
        | "JPY"
        | "KES"
        | "KGS"
        | "KHR"
        | "KMF"
        | "KPW"
        | "KRW"
        | "KWD"
        | "KYD"
        | "KZT"
        | "LAK"
        | "LBP"
        | "LKR"
        | "LRD"
        | "LSL"
        | "LYD"
        | "MAD"
        | "MDL"
        | "MGA"
        | "MKD"
        | "MMK"
        | "MNT"
        | "MOP"
        | "MRO"
        | "MUR"
        | "MVR"
        | "MWK"
        | "MXN"
        | "MYR"
        | "MZN"
        | "NAD"
        | "NGN"
        | "NIO"
        | "NOK"
        | "NPR"
        | "NZD"
        | "OMR"
        | "PAB"
        | "PEN"
        | "PGK"
        | "PHP"
        | "PKR"
        | "PLN"
        | "PYG"
        | "QAR"
        | "RON"
        | "RSD"
        | "RUB"
        | "RWF"
        | "SAR"
        | "SBD"
        | "SCR"
        | "SDG"
        | "SEK"
        | "SGD"
        | "SHP"
        | "SLL"
        | "SOS"
        | "SPL"
        | "SRD"
        | "STD"
        | "SVC"
        | "SYP"
        | "SZL"
        | "THB"
        | "TJS"
        | "TMT"
        | "TND"
        | "TOP"
        | "TRY"
        | "TTD"
        | "TVD"
        | "TWD"
        | "TZS"
        | "UAH"
        | "UGX"
        | "USD"
        | "UYU"
        | "UZS"
        | "VEF"
        | "VND"
        | "VUV"
        | "WST"
        | "XAF"
        | "XCD"
        | "XDR"
        | "XOF"
        | "XPF"
        | "YER"
        | "ZAR"
        | "ZMW"
        | "ZWD";

    export interface DeleteCharacterFromUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // If true, the character's inventory will be transferred up to the owning user; otherwise, this request will purge those
        // items.
        SaveCharacterInventory: boolean;
    }

    export interface DeleteCharacterFromUserResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface DeletePlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface DeletePlayerResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface DeletePushNotificationTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Id of the push notification template to be deleted.
        PushNotificationTemplateId: string;
    }

    export interface DeletePushNotificationTemplateResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface DeleteSharedGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the shared group.
        SharedGroupId: string;
    }

    export interface DeregisterGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the Game Server Instance that is being deregistered.
        LobbyId: string;
    }

    export interface DeregisterGameResponse extends PlayFabModule.IPlayFabResultCommon {}

    type EmailVerificationStatus = "Unverified"
        | "Pending"
        | "Confirmed";

    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface EmptyResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
        Type?: string;
    }

    export interface EntityTokenResponse {
        // The entity id and type.
        Entity?: EntityKey;
        // The token used to set X-EntityToken for all entity based API calls.
        EntityToken?: string;
        // The time the token will expire, if it is an expiring token, in UTC.
        TokenExpiration?: string;
    }

    export interface EvaluateRandomResultTableRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to evaluate the Random Result Table. If unspecified, uses
        // default/primary catalog.
        CatalogVersion?: string;
        // The unique identifier of the Random Result Table to use.
        TableId: string;
    }

    export interface EvaluateRandomResultTableResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier for the item returned from the Random Result Table evaluation, for the given catalog.
        ResultItemId?: string;
    }

    export interface ExecuteCloudScriptResult extends PlayFabModule.IPlayFabResultCommon {
        // Number of PlayFab API requests issued by the CloudScript function
        APIRequestsIssued: number;
        // Information about the error, if any, that occurred during execution
        Error?: ScriptExecutionError;
        ExecutionTimeSeconds: number;
        // The name of the function that executed
        FunctionName?: string;
        // The object returned from the CloudScript function, if any
        FunctionResult?: any;
        // Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if
        // the total event size is larger than 350KB.
        FunctionResultTooLarge?: boolean;
        // Number of external HTTP requests issued by the CloudScript function
        HttpRequestsIssued: number;
        // Entries logged during the function execution. These include both entries logged in the function code using log.info()
        // and log.error() and error entries for API and HTTP request failures.
        Logs?: LogStatement[];
        // Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total
        // event size is larger than 350KB after the FunctionResult was removed.
        LogsTooLarge?: boolean;
        MemoryConsumedBytes: number;
        // Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP
        // requests.
        ProcessorTimeSeconds: number;
        // The revision of the CloudScript that executed
        Revision: number;
    }

    export interface ExecuteCloudScriptServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The name of the CloudScript function to execute
        FunctionName: string;
        // Object that is passed in to the function as the first argument
        FunctionParameter?: any;
        // Generate a 'player_executed_cloudscript' PlayStream event containing the results of the function execution and other
        // contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager.
        GeneratePlayStreamEvent?: boolean;
        // The unique user identifier for the player on whose behalf the script is being run
        PlayFabId: string;
        // Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live'
        // executes the current live, published revision, and 'Specific' executes the specified revision. The default value is
        // 'Specific', if the SpeificRevision parameter is specified, otherwise it is 'Live'.
        RevisionSelection?: string;
        // The specivic revision to execute, when RevisionSelection is set to 'Specific'
        SpecificRevision?: number;
    }

    export interface FacebookInstantGamesPlayFabIdPair {
        // Unique Facebook Instant Games identifier for a user.
        FacebookInstantGamesId?: string;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook Instant Games identifier.
        PlayFabId?: string;
    }

    export interface FacebookPlayFabIdPair {
        // Unique Facebook identifier for a user.
        FacebookId?: string;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook identifier.
        PlayFabId?: string;
    }

    export interface FriendInfo {
        // Available Facebook information (if the user and PlayFab friend are also connected in Facebook).
        FacebookInfo?: UserFacebookInfo;
        // PlayFab unique identifier for this friend.
        FriendPlayFabId?: string;
        // Available Game Center information (if the user and PlayFab friend are also connected in Game Center).
        GameCenterInfo?: UserGameCenterInfo;
        // The profile of the user, if requested.
        Profile?: PlayerProfileModel;
        // Available PSN information, if the user and PlayFab friend are both connected to PSN.
        PSNInfo?: UserPsnInfo;
        // Available Steam information (if the user and PlayFab friend are also connected in Steam).
        SteamInfo?: UserSteamInfo;
        // Tags which have been associated with this friend.
        Tags?: string[];
        // Title-specific display name for this friend.
        TitleDisplayName?: string;
        // PlayFab unique username for this friend.
        Username?: string;
        // Available Xbox information, if the user and PlayFab friend are both connected to Xbox Live.
        XboxInfo?: UserXboxInfo;
    }

    type GameInstanceState = "Open"
        | "Closed";

    type GenericErrorCodes = "Success"
        | "UnkownError"
        | "InvalidParams"
        | "AccountNotFound"
        | "AccountBanned"
        | "InvalidUsernameOrPassword"
        | "InvalidTitleId"
        | "InvalidEmailAddress"
        | "EmailAddressNotAvailable"
        | "InvalidUsername"
        | "InvalidPassword"
        | "UsernameNotAvailable"
        | "InvalidSteamTicket"
        | "AccountAlreadyLinked"
        | "LinkedAccountAlreadyClaimed"
        | "InvalidFacebookToken"
        | "AccountNotLinked"
        | "FailedByPaymentProvider"
        | "CouponCodeNotFound"
        | "InvalidContainerItem"
        | "ContainerNotOwned"
        | "KeyNotOwned"
        | "InvalidItemIdInTable"
        | "InvalidReceipt"
        | "ReceiptAlreadyUsed"
        | "ReceiptCancelled"
        | "GameNotFound"
        | "GameModeNotFound"
        | "InvalidGoogleToken"
        | "UserIsNotPartOfDeveloper"
        | "InvalidTitleForDeveloper"
        | "TitleNameConflicts"
        | "UserisNotValid"
        | "ValueAlreadyExists"
        | "BuildNotFound"
        | "PlayerNotInGame"
        | "InvalidTicket"
        | "InvalidDeveloper"
        | "InvalidOrderInfo"
        | "RegistrationIncomplete"
        | "InvalidPlatform"
        | "UnknownError"
        | "SteamApplicationNotOwned"
        | "WrongSteamAccount"
        | "TitleNotActivated"
        | "RegistrationSessionNotFound"
        | "NoSuchMod"
        | "FileNotFound"
        | "DuplicateEmail"
        | "ItemNotFound"
        | "ItemNotOwned"
        | "ItemNotRecycleable"
        | "ItemNotAffordable"
        | "InvalidVirtualCurrency"
        | "WrongVirtualCurrency"
        | "WrongPrice"
        | "NonPositiveValue"
        | "InvalidRegion"
        | "RegionAtCapacity"
        | "ServerFailedToStart"
        | "NameNotAvailable"
        | "InsufficientFunds"
        | "InvalidDeviceID"
        | "InvalidPushNotificationToken"
        | "NoRemainingUses"
        | "InvalidPaymentProvider"
        | "PurchaseInitializationFailure"
        | "DuplicateUsername"
        | "InvalidBuyerInfo"
        | "NoGameModeParamsSet"
        | "BodyTooLarge"
        | "ReservedWordInBody"
        | "InvalidTypeInBody"
        | "InvalidRequest"
        | "ReservedEventName"
        | "InvalidUserStatistics"
        | "NotAuthenticated"
        | "StreamAlreadyExists"
        | "ErrorCreatingStream"
        | "StreamNotFound"
        | "InvalidAccount"
        | "PurchaseDoesNotExist"
        | "InvalidPurchaseTransactionStatus"
        | "APINotEnabledForGameClientAccess"
        | "NoPushNotificationARNForTitle"
        | "BuildAlreadyExists"
        | "BuildPackageDoesNotExist"
        | "CustomAnalyticsEventsNotEnabledForTitle"
        | "InvalidSharedGroupId"
        | "NotAuthorized"
        | "MissingTitleGoogleProperties"
        | "InvalidItemProperties"
        | "InvalidPSNAuthCode"
        | "InvalidItemId"
        | "PushNotEnabledForAccount"
        | "PushServiceError"
        | "ReceiptDoesNotContainInAppItems"
        | "ReceiptContainsMultipleInAppItems"
        | "InvalidBundleID"
        | "JavascriptException"
        | "InvalidSessionTicket"
        | "UnableToConnectToDatabase"
        | "InternalServerError"
        | "InvalidReportDate"
        | "ReportNotAvailable"
        | "DatabaseThroughputExceeded"
        | "InvalidGameTicket"
        | "ExpiredGameTicket"
        | "GameTicketDoesNotMatchLobby"
        | "LinkedDeviceAlreadyClaimed"
        | "DeviceAlreadyLinked"
        | "DeviceNotLinked"
        | "PartialFailure"
        | "PublisherNotSet"
        | "ServiceUnavailable"
        | "VersionNotFound"
        | "RevisionNotFound"
        | "InvalidPublisherId"
        | "DownstreamServiceUnavailable"
        | "APINotIncludedInTitleUsageTier"
        | "DAULimitExceeded"
        | "APIRequestLimitExceeded"
        | "InvalidAPIEndpoint"
        | "BuildNotAvailable"
        | "ConcurrentEditError"
        | "ContentNotFound"
        | "CharacterNotFound"
        | "CloudScriptNotFound"
        | "ContentQuotaExceeded"
        | "InvalidCharacterStatistics"
        | "PhotonNotEnabledForTitle"
        | "PhotonApplicationNotFound"
        | "PhotonApplicationNotAssociatedWithTitle"
        | "InvalidEmailOrPassword"
        | "FacebookAPIError"
        | "InvalidContentType"
        | "KeyLengthExceeded"
        | "DataLengthExceeded"
        | "TooManyKeys"
        | "FreeTierCannotHaveVirtualCurrency"
        | "MissingAmazonSharedKey"
        | "AmazonValidationError"
        | "InvalidPSNIssuerId"
        | "PSNInaccessible"
        | "ExpiredAuthToken"
        | "FailedToGetEntitlements"
        | "FailedToConsumeEntitlement"
        | "TradeAcceptingUserNotAllowed"
        | "TradeInventoryItemIsAssignedToCharacter"
        | "TradeInventoryItemIsBundle"
        | "TradeStatusNotValidForCancelling"
        | "TradeStatusNotValidForAccepting"
        | "TradeDoesNotExist"
        | "TradeCancelled"
        | "TradeAlreadyFilled"
        | "TradeWaitForStatusTimeout"
        | "TradeInventoryItemExpired"
        | "TradeMissingOfferedAndAcceptedItems"
        | "TradeAcceptedItemIsBundle"
        | "TradeAcceptedItemIsStackable"
        | "TradeInventoryItemInvalidStatus"
        | "TradeAcceptedCatalogItemInvalid"
        | "TradeAllowedUsersInvalid"
        | "TradeInventoryItemDoesNotExist"
        | "TradeInventoryItemIsConsumed"
        | "TradeInventoryItemIsStackable"
        | "TradeAcceptedItemsMismatch"
        | "InvalidKongregateToken"
        | "FeatureNotConfiguredForTitle"
        | "NoMatchingCatalogItemForReceipt"
        | "InvalidCurrencyCode"
        | "NoRealMoneyPriceForCatalogItem"
        | "TradeInventoryItemIsNotTradable"
        | "TradeAcceptedCatalogItemIsNotTradable"
        | "UsersAlreadyFriends"
        | "LinkedIdentifierAlreadyClaimed"
        | "CustomIdNotLinked"
        | "TotalDataSizeExceeded"
        | "DeleteKeyConflict"
        | "InvalidXboxLiveToken"
        | "ExpiredXboxLiveToken"
        | "ResettableStatisticVersionRequired"
        | "NotAuthorizedByTitle"
        | "NoPartnerEnabled"
        | "InvalidPartnerResponse"
        | "APINotEnabledForGameServerAccess"
        | "StatisticNotFound"
        | "StatisticNameConflict"
        | "StatisticVersionClosedForWrites"
        | "StatisticVersionInvalid"
        | "APIClientRequestRateLimitExceeded"
        | "InvalidJSONContent"
        | "InvalidDropTable"
        | "StatisticVersionAlreadyIncrementedForScheduledInterval"
        | "StatisticCountLimitExceeded"
        | "StatisticVersionIncrementRateExceeded"
        | "ContainerKeyInvalid"
        | "CloudScriptExecutionTimeLimitExceeded"
        | "NoWritePermissionsForEvent"
        | "CloudScriptFunctionArgumentSizeExceeded"
        | "CloudScriptAPIRequestCountExceeded"
        | "CloudScriptAPIRequestError"
        | "CloudScriptHTTPRequestError"
        | "InsufficientGuildRole"
        | "GuildNotFound"
        | "OverLimit"
        | "EventNotFound"
        | "InvalidEventField"
        | "InvalidEventName"
        | "CatalogNotConfigured"
        | "OperationNotSupportedForPlatform"
        | "SegmentNotFound"
        | "StoreNotFound"
        | "InvalidStatisticName"
        | "TitleNotQualifiedForLimit"
        | "InvalidServiceLimitLevel"
        | "ServiceLimitLevelInTransition"
        | "CouponAlreadyRedeemed"
        | "GameServerBuildSizeLimitExceeded"
        | "GameServerBuildCountLimitExceeded"
        | "VirtualCurrencyCountLimitExceeded"
        | "VirtualCurrencyCodeExists"
        | "TitleNewsItemCountLimitExceeded"
        | "InvalidTwitchToken"
        | "TwitchResponseError"
        | "ProfaneDisplayName"
        | "UserAlreadyAdded"
        | "InvalidVirtualCurrencyCode"
        | "VirtualCurrencyCannotBeDeleted"
        | "IdentifierAlreadyClaimed"
        | "IdentifierNotLinked"
        | "InvalidContinuationToken"
        | "ExpiredContinuationToken"
        | "InvalidSegment"
        | "InvalidSessionId"
        | "SessionLogNotFound"
        | "InvalidSearchTerm"
        | "TwoFactorAuthenticationTokenRequired"
        | "GameServerHostCountLimitExceeded"
        | "PlayerTagCountLimitExceeded"
        | "RequestAlreadyRunning"
        | "ActionGroupNotFound"
        | "MaximumSegmentBulkActionJobsRunning"
        | "NoActionsOnPlayersInSegmentJob"
        | "DuplicateStatisticName"
        | "ScheduledTaskNameConflict"
        | "ScheduledTaskCreateConflict"
        | "InvalidScheduledTaskName"
        | "InvalidTaskSchedule"
        | "SteamNotEnabledForTitle"
        | "LimitNotAnUpgradeOption"
        | "NoSecretKeyEnabledForCloudScript"
        | "TaskNotFound"
        | "TaskInstanceNotFound"
        | "InvalidIdentityProviderId"
        | "MisconfiguredIdentityProvider"
        | "InvalidScheduledTaskType"
        | "BillingInformationRequired"
        | "LimitedEditionItemUnavailable"
        | "InvalidAdPlacementAndReward"
        | "AllAdPlacementViewsAlreadyConsumed"
        | "GoogleOAuthNotConfiguredForTitle"
        | "GoogleOAuthError"
        | "UserNotFriend"
        | "InvalidSignature"
        | "InvalidPublicKey"
        | "GoogleOAuthNoIdTokenIncludedInResponse"
        | "StatisticUpdateInProgress"
        | "LeaderboardVersionNotAvailable"
        | "StatisticAlreadyHasPrizeTable"
        | "PrizeTableHasOverlappingRanks"
        | "PrizeTableHasMissingRanks"
        | "PrizeTableRankStartsAtZero"
        | "InvalidStatistic"
        | "ExpressionParseFailure"
        | "ExpressionInvokeFailure"
        | "ExpressionTooLong"
        | "DataUpdateRateExceeded"
        | "RestrictedEmailDomain"
        | "EncryptionKeyDisabled"
        | "EncryptionKeyMissing"
        | "EncryptionKeyBroken"
        | "NoSharedSecretKeyConfigured"
        | "SecretKeyNotFound"
        | "PlayerSecretAlreadyConfigured"
        | "APIRequestsDisabledForTitle"
        | "InvalidSharedSecretKey"
        | "PrizeTableHasNoRanks"
        | "ProfileDoesNotExist"
        | "ContentS3OriginBucketNotConfigured"
        | "InvalidEnvironmentForReceipt"
        | "EncryptedRequestNotAllowed"
        | "SignedRequestNotAllowed"
        | "RequestViewConstraintParamsNotAllowed"
        | "BadPartnerConfiguration"
        | "XboxBPCertificateFailure"
        | "XboxXASSExchangeFailure"
        | "InvalidEntityId"
        | "StatisticValueAggregationOverflow"
        | "EmailMessageFromAddressIsMissing"
        | "EmailMessageToAddressIsMissing"
        | "SmtpServerAuthenticationError"
        | "SmtpServerLimitExceeded"
        | "SmtpServerInsufficientStorage"
        | "SmtpServerCommunicationError"
        | "SmtpServerGeneralFailure"
        | "EmailClientTimeout"
        | "EmailClientCanceledTask"
        | "EmailTemplateMissing"
        | "InvalidHostForTitleId"
        | "EmailConfirmationTokenDoesNotExist"
        | "EmailConfirmationTokenExpired"
        | "AccountDeleted"
        | "PlayerSecretNotConfigured"
        | "InvalidSignatureTime"
        | "NoContactEmailAddressFound"
        | "InvalidAuthToken"
        | "AuthTokenDoesNotExist"
        | "AuthTokenExpired"
        | "AuthTokenAlreadyUsedToResetPassword"
        | "MembershipNameTooLong"
        | "MembershipNotFound"
        | "GoogleServiceAccountInvalid"
        | "GoogleServiceAccountParseFailure"
        | "EntityTokenMissing"
        | "EntityTokenInvalid"
        | "EntityTokenExpired"
        | "EntityTokenRevoked"
        | "InvalidProductForSubscription"
        | "XboxInaccessible"
        | "SubscriptionAlreadyTaken"
        | "SmtpAddonNotEnabled"
        | "APIConcurrentRequestLimitExceeded"
        | "XboxRejectedXSTSExchangeRequest"
        | "VariableNotDefined"
        | "TemplateVersionNotDefined"
        | "FileTooLarge"
        | "TitleDeleted"
        | "TitleContainsUserAccounts"
        | "TitleDeletionPlayerCleanupFailure"
        | "EntityFileOperationPending"
        | "NoEntityFileOperationPending"
        | "EntityProfileVersionMismatch"
        | "TemplateVersionTooOld"
        | "MembershipDefinitionInUse"
        | "PaymentPageNotConfigured"
        | "FailedLoginAttemptRateLimitExceeded"
        | "EntityBlockedByGroup"
        | "RoleDoesNotExist"
        | "EntityIsAlreadyMember"
        | "DuplicateRoleId"
        | "GroupInvitationNotFound"
        | "GroupApplicationNotFound"
        | "OutstandingInvitationAcceptedInstead"
        | "OutstandingApplicationAcceptedInstead"
        | "RoleIsGroupDefaultMember"
        | "RoleIsGroupAdmin"
        | "RoleNameNotAvailable"
        | "GroupNameNotAvailable"
        | "EmailReportAlreadySent"
        | "EmailReportRecipientBlacklisted"
        | "EventNamespaceNotAllowed"
        | "EventEntityNotAllowed"
        | "InvalidEntityType"
        | "NullTokenResultFromAad"
        | "InvalidTokenResultFromAad"
        | "NoValidCertificateForAad"
        | "InvalidCertificateForAad"
        | "DuplicateDropTableId"
        | "MultiplayerServerError"
        | "MultiplayerServerTooManyRequests"
        | "MultiplayerServerNoContent"
        | "MultiplayerServerBadRequest"
        | "MultiplayerServerUnauthorized"
        | "MultiplayerServerForbidden"
        | "MultiplayerServerNotFound"
        | "MultiplayerServerConflict"
        | "MultiplayerServerInternalServerError"
        | "MultiplayerServerUnavailable"
        | "ExplicitContentDetected"
        | "PIIContentDetected"
        | "InvalidScheduledTaskParameter"
        | "PerEntityEventRateLimitExceeded"
        | "TitleDefaultLanguageNotSet"
        | "EmailTemplateMissingDefaultVersion"
        | "FacebookInstantGamesIdNotLinked"
        | "InvalidFacebookInstantGamesSignature"
        | "FacebookInstantGamesAuthNotConfiguredForTitle"
        | "EntityProfileConstraintValidationFailed"
        | "TelemetryIngestionKeyPending"
        | "TelemetryIngestionKeyNotFound"
        | "StatisticChildNameInvalid"
        | "DataIntegrityError"
        | "VirtualCurrencyCannotBeSetToOlderVersion"
        | "VirtualCurrencyMustBeWithinIntegerRange"
        | "EmailTemplateInvalidSyntax"
        | "EmailTemplateMissingCallback"
        | "PushNotificationTemplateInvalidPayload"
        | "InvalidLocalizedPushNotificationLanguage"
        | "MissingLocalizedPushNotificationMessage"
        | "PushNotificationTemplateMissingPlatformPayload"
        | "PushNotificationTemplatePayloadContainsInvalidJson"
        | "PushNotificationTemplateContainsInvalidIosPayload"
        | "PushNotificationTemplateContainsInvalidAndroidPayload"
        | "PushNotificationTemplateIosPayloadMissingNotificationBody"
        | "PushNotificationTemplateAndroidPayloadMissingNotificationBody"
        | "PushNotificationTemplateNotFound"
        | "PushNotificationTemplateMissingDefaultVersion"
        | "PushNotificationTemplateInvalidSyntax"
        | "PushNotificationTemplateNoCustomPayloadForV1"
        | "NoLeaderboardForStatistic"
        | "TitleNewsMissingDefaultLanguage"
        | "TitleNewsNotFound"
        | "TitleNewsDuplicateLanguage"
        | "TitleNewsMissingTitleOrBody"
        | "TitleNewsInvalidLanguage"
        | "EmailRecipientBlacklisted"
        | "InvalidGameCenterAuthRequest"
        | "GameCenterAuthenticationFailed"
        | "CannotEnablePartiesForTitle"
        | "PartyError"
        | "PartyRequests"
        | "PartyNoContent"
        | "PartyBadRequest"
        | "PartyUnauthorized"
        | "PartyForbidden"
        | "PartyNotFound"
        | "PartyConflict"
        | "PartyInternalServerError"
        | "PartyUnavailable"
        | "PartyTooManyRequests"
        | "PushNotificationTemplateMissingName"
        | "CannotEnableMultiplayerServersForTitle"
        | "WriteAttemptedDuringExport"
        | "MultiplayerServerTitleQuotaCoresExceeded"
        | "AutomationRuleNotFound"
        | "EntityAPIKeyLimitExceeded"
        | "EntityAPIKeyNotFound"
        | "EntityAPIKeyOrSecretInvalid"
        | "EconomyServiceUnavailable"
        | "EconomyServiceInternalError"
        | "QueryRateLimitExceeded"
        | "EntityAPIKeyCreationDisabledForEntity"
        | "ForbiddenByEntityPolicy"
        | "UpdateInventoryRateLimitExceeded"
        | "StudioCreationRateLimited"
        | "StudioCreationInProgress"
        | "DuplicateStudioName"
        | "StudioNotFound"
        | "StudioDeleted"
        | "StudioDeactivated"
        | "StudioActivated"
        | "TitleCreationRateLimited"
        | "TitleCreationInProgress"
        | "DuplicateTitleName"
        | "TitleActivationRateLimited"
        | "TitleActivationInProgress"
        | "TitleDeactivated"
        | "TitleActivated"
        | "CloudScriptAzureFunctionsExecutionTimeLimitExceeded"
        | "CloudScriptAzureFunctionsArgumentSizeExceeded"
        | "CloudScriptAzureFunctionsReturnSizeExceeded"
        | "CloudScriptAzureFunctionsHTTPRequestError"
        | "VirtualCurrencyBetaGetError"
        | "VirtualCurrencyBetaCreateError"
        | "VirtualCurrencyBetaInitialDepositSaveError"
        | "VirtualCurrencyBetaSaveError"
        | "VirtualCurrencyBetaDeleteError"
        | "VirtualCurrencyBetaRestoreError"
        | "VirtualCurrencyBetaSaveConflict"
        | "VirtualCurrencyBetaUpdateError"
        | "InsightsManagementDatabaseNotFound"
        | "InsightsManagementOperationNotFound"
        | "InsightsManagementErrorPendingOperationExists"
        | "InsightsManagementSetPerformanceLevelInvalidParameter"
        | "InsightsManagementSetStorageRetentionInvalidParameter"
        | "InsightsManagementGetStorageUsageInvalidParameter"
        | "InsightsManagementGetOperationStatusInvalidParameter"
        | "DuplicatePurchaseTransactionId"
        | "EvaluationModePlayerCountExceeded"
        | "GetPlayersInSegmentRateLimitExceeded"
        | "CloudScriptFunctionNameSizeExceeded"
        | "InsightsManagementTitleInEvaluationMode"
        | "CloudScriptAzureFunctionsQueueRequestError"
        | "EvaluationModeTitleCountExceeded"
        | "InsightsManagementTitleNotInFlight"
        | "LimitNotFound"
        | "LimitNotAvailableViaAPI"
        | "InsightsManagementSetStorageRetentionBelowMinimum"
        | "InsightsManagementSetStorageRetentionAboveMaximum"
        | "AppleNotEnabledForTitle"
        | "InsightsManagementNewActiveEventExportLimitInvalid"
        | "InsightsManagementSetPerformanceRateLimited"
        | "PartyRequestsThrottledFromRateLimiter"
        | "XboxServiceTooManyRequests"
        | "NintendoSwitchNotEnabledForTitle"
        | "RequestMultiplayerServersThrottledFromRateLimiter"
        | "MatchmakingEntityInvalid"
        | "MatchmakingPlayerAttributesInvalid"
        | "MatchmakingQueueNotFound"
        | "MatchmakingMatchNotFound"
        | "MatchmakingTicketNotFound"
        | "MatchmakingAlreadyJoinedTicket"
        | "MatchmakingTicketAlreadyCompleted"
        | "MatchmakingQueueConfigInvalid"
        | "MatchmakingMemberProfileInvalid"
        | "NintendoSwitchDeviceIdNotLinked"
        | "MatchmakingNotEnabled"
        | "MatchmakingPlayerAttributesTooLarge"
        | "MatchmakingNumberOfPlayersInTicketTooLarge"
        | "MatchmakingAttributeInvalid"
        | "MatchmakingPlayerHasNotJoinedTicket"
        | "MatchmakingRateLimitExceeded"
        | "MatchmakingTicketMembershipLimitExceeded"
        | "MatchmakingUnauthorized"
        | "MatchmakingQueueLimitExceeded"
        | "MatchmakingRequestTypeMismatch"
        | "MatchmakingBadRequest"
        | "TitleConfigNotFound"
        | "TitleConfigUpdateConflict"
        | "TitleConfigSerializationError"
        | "CatalogEntityInvalid"
        | "CatalogTitleIdMissing"
        | "CatalogPlayerIdMissing"
        | "CatalogClientIdentityInvalid"
        | "CatalogOneOrMoreFilesInvalid"
        | "CatalogItemMetadataInvalid"
        | "CatalogItemIdInvalid"
        | "CatalogSearchParameterInvalid"
        | "CatalogFeatureDisabled"
        | "CatalogConfigInvalid"
        | "CatalogUnauthorized"
        | "CatalogItemTypeInvalid"
        | "CatalogBadRequest"
        | "CatalogTooManyRequests"
        | "ExportInvalidStatusUpdate"
        | "ExportInvalidPrefix"
        | "ExportBlobContainerDoesNotExist"
        | "ExportNotFound"
        | "ExportCouldNotUpdate"
        | "ExportInvalidStorageType"
        | "ExportAmazonBucketDoesNotExist"
        | "ExportInvalidBlobStorage"
        | "ExportKustoException"
        | "ExportKustoConnectionFailed"
        | "ExportUnknownError"
        | "ExportCantEditPendingExport"
        | "ExportLimitExports"
        | "ExportLimitEvents"
        | "ExportInvalidPartitionStatusModification"
        | "ExportCouldNotCreate"
        | "ExportNoBackingDatabaseFound"
        | "ExportCouldNotDelete"
        | "ExportCannotDetermineEventQuery"
        | "ExportInvalidQuerySchemaModification"
        | "ExportQuerySchemaMissingRequiredColumns"
        | "ExportCannotParseQuery"
        | "ExportControlCommandsNotAllowed"
        | "ExportQueryMissingTableReference"
        | "TitleNotEnabledForParty"
        | "PartyVersionNotFound"
        | "MultiplayerServerBuildReferencedByMatchmakingQueue"
        | "ExperimentationExperimentStopped"
        | "ExperimentationExperimentRunning"
        | "ExperimentationExperimentNotFound"
        | "ExperimentationExperimentNeverStarted"
        | "ExperimentationExperimentDeleted"
        | "ExperimentationClientTimeout"
        | "ExperimentationInvalidVariantConfiguration"
        | "ExperimentationInvalidVariableConfiguration"
        | "ExperimentInvalidId"
        | "ExperimentationNoScorecard"
        | "ExperimentationTreatmentAssignmentFailed"
        | "ExperimentationTreatmentAssignmentDisabled"
        | "ExperimentationInvalidDuration"
        | "ExperimentationMaxExperimentsReached"
        | "ExperimentationExperimentSchedulingInProgress"
        | "MaxActionDepthExceeded"
        | "TitleNotOnUpdatedPricingPlan"
        | "SnapshotNotFound";

    export interface GenericPlayFabIdPair {
        // Unique generic service identifier for a user.
        GenericId?: GenericServiceId;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the given generic identifier.
        PlayFabId?: string;
    }

    export interface GenericServiceId {
        // Name of the service for which the player has a unique identifier.
        ServiceName: string;
        // Unique identifier of the player in that service.
        UserId: string;
    }

    export interface GetAllSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {}

    export interface GetAllSegmentsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of segments for this title.
        Segments?: GetSegmentResult[];
    }

    export interface GetCatalogItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Which catalog is being requested. If null, uses the default catalog.
        CatalogVersion?: string;
    }

    export interface GetCatalogItemsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items which can be purchased.
        Catalog?: CatalogItem[];
    }

    export interface GetCharacterDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // The version that currently exists according to the caller. The call will return the data for all of the keys if the
        // version in the system is greater than this.
        IfChangedFromDataVersion?: number;
        // Specific keys to search for in the custom user data.
        Keys?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetCharacterDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // User specific data for this title.
        Data?: { [key: string]: UserDataRecord };
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
    }

    export interface GetCharacterInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Used to limit results to only those from a specific catalog version.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetCharacterInventoryResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier of the character for this inventory.
        CharacterId?: string;
        // Array of inventory items belonging to the character.
        Inventory?: ItemInstance[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // Array of virtual currency balance(s) belonging to the character.
        VirtualCurrency?: { [key: string]: number };
        // Array of remaining times and timestamps for virtual currencies.
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };
    }

    export interface GetCharacterLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional character type on which to filter the leaderboard entries.
        CharacterType?: string;
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // First entry in the leaderboard to be retrieved.
        StartPosition: number;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;
    }

    export interface GetCharacterLeaderboardResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered list of leaderboard entries.
        Leaderboard?: CharacterLeaderboardEntry[];
    }

    export interface GetCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier of the character for the statistics.
        CharacterId?: string;
        // Character statistics for the requested user.
        CharacterStatistics?: { [key: string]: number };
        // PlayFab unique identifier of the user whose character statistics are being returned.
        PlayFabId?: string;
    }

    export interface GetContentDownloadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        // HTTP method to fetch item - GET or HEAD. Use HEAD when only fetching metadata. Default is GET.
        HttpMethod?: string;
        // Key of the content item to fetch, usually formatted as a path, e.g. images/a.png
        Key: string;
        // True to download through CDN. CDN provides higher download bandwidth and lower latency. However, if you want the latest,
        // non-cached version of the content during development, set this to false. Default is true.
        ThruCDN?: boolean;
    }

    export interface GetContentDownloadUrlResult extends PlayFabModule.IPlayFabResultCommon {
        // URL for downloading content via HTTP GET or HEAD method. The URL will expire in approximately one hour.
        URL?: string;
    }

    export interface GetFriendLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Indicates whether Facebook friends should be included in the response. Default is true.
        IncludeFacebookFriends?: boolean;
        // Indicates whether Steam service friends should be included in the response. Default is true.
        IncludeSteamFriends?: boolean;
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // The player whose friend leaderboard to get
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: PlayerProfileViewConstraints;
        // Position in the leaderboard to start this listing (defaults to the first entry).
        StartPosition: number;
        // Statistic used to rank friends for this leaderboard.
        StatisticName: string;
        // The version of the leaderboard to get.
        Version?: number;
        // Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab.
        XboxToken?: string;
    }

    export interface GetFriendsListRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Indicates whether Facebook friends should be included in the response. Default is true.
        IncludeFacebookFriends?: boolean;
        // Indicates whether Steam service friends should be included in the response. Default is true.
        IncludeSteamFriends?: boolean;
        // PlayFab identifier of the player whose friend list to get.
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: PlayerProfileViewConstraints;
        // Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab.
        XboxToken?: string;
    }

    export interface GetFriendsListResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of friends found.
        Friends?: FriendInfo[];
    }

    export interface GetLeaderboardAroundCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Optional character type on which to filter the leaderboard entries.
        CharacterType?: string;
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;
    }

    export interface GetLeaderboardAroundCharacterResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered list of leaderboard entries.
        Leaderboard?: CharacterLeaderboardEntry[];
    }

    export interface GetLeaderboardAroundUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: PlayerProfileViewConstraints;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;
        // The version of the leaderboard to get.
        Version?: number;
    }

    export interface GetLeaderboardAroundUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered listing of users and their positions in the requested leaderboard.
        Leaderboard?: PlayerLeaderboardEntry[];
        // The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule.
        NextReset?: string;
        // The version of the leaderboard returned.
        Version: number;
    }

    export interface GetLeaderboardForUsersCharactersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;
    }

    export interface GetLeaderboardForUsersCharactersResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered list of leaderboard entries.
        Leaderboard?: CharacterLeaderboardEntry[];
    }

    export interface GetLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: PlayerProfileViewConstraints;
        // First entry in the leaderboard to be retrieved.
        StartPosition: number;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;
        // The version of the leaderboard to get.
        Version?: number;
    }

    export interface GetLeaderboardResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered listing of users and their positions in the requested leaderboard.
        Leaderboard?: PlayerLeaderboardEntry[];
        // The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule.
        NextReset?: string;
        // The version of the leaderboard returned.
        Version: number;
    }

    export interface GetPlayerCombinedInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Flags for which pieces of info to return for the user.
        InfoRequestParameters: GetPlayerCombinedInfoRequestParams;
        // PlayFabId of the user whose data will be returned
        PlayFabId: string;
    }

    export interface GetPlayerCombinedInfoRequestParams {
        // Whether to get character inventories. Defaults to false.
        GetCharacterInventories: boolean;
        // Whether to get the list of characters. Defaults to false.
        GetCharacterList: boolean;
        // Whether to get player profile. Defaults to false. Has no effect for a new player.
        GetPlayerProfile: boolean;
        // Whether to get player statistics. Defaults to false.
        GetPlayerStatistics: boolean;
        // Whether to get title data. Defaults to false.
        GetTitleData: boolean;
        // Whether to get the player's account Info. Defaults to false
        GetUserAccountInfo: boolean;
        // Whether to get the player's custom data. Defaults to false
        GetUserData: boolean;
        // Whether to get the player's inventory. Defaults to false
        GetUserInventory: boolean;
        // Whether to get the player's read only data. Defaults to false
        GetUserReadOnlyData: boolean;
        // Whether to get the player's virtual currency balances. Defaults to false
        GetUserVirtualCurrency: boolean;
        // Specific statistics to retrieve. Leave null to get all keys. Has no effect if GetPlayerStatistics is false
        PlayerStatisticNames?: string[];
        // Specifies the properties to return from the player profile. Defaults to returning the player's display name.
        ProfileConstraints?: PlayerProfileViewConstraints;
        // Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetTitleData is false
        TitleDataKeys?: string[];
        // Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserData is false
        UserDataKeys?: string[];
        // Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserReadOnlyData is
        // false
        UserReadOnlyDataKeys?: string[];
    }

    export interface GetPlayerCombinedInfoResult extends PlayFabModule.IPlayFabResultCommon {
        // Results for requested info.
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
    }

    export interface GetPlayerCombinedInfoResultPayload {
        // Account information for the user. This is always retrieved.
        AccountInfo?: UserAccountInfo;
        // Inventories for each character for the user.
        CharacterInventories?: CharacterInventory[];
        // List of characters for the user.
        CharacterList?: CharacterResult[];
        // The profile of the players. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
        // exist.
        PlayerProfile?: PlayerProfileModel;
        // List of statistics for this player.
        PlayerStatistics?: StatisticValue[];
        // Title data for this title.
        TitleData?: { [key: string]: string | null };
        // User specific custom data.
        UserData?: { [key: string]: UserDataRecord };
        // The version of the UserData that was returned.
        UserDataVersion: number;
        // Array of inventory items in the user's current inventory.
        UserInventory?: ItemInstance[];
        // User specific read-only data.
        UserReadOnlyData?: { [key: string]: UserDataRecord };
        // The version of the Read-Only UserData that was returned.
        UserReadOnlyDataVersion: number;
        // Dictionary of virtual currency balance(s) belonging to the user.
        UserVirtualCurrency?: { [key: string]: number };
        // Dictionary of remaining times and timestamps for virtual currencies.
        UserVirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };
    }

    export interface GetPlayerProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: PlayerProfileViewConstraints;
    }

    export interface GetPlayerProfileResult extends PlayFabModule.IPlayFabResultCommon {
        // The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
        // exist.
        PlayerProfile?: PlayerProfileModel;
    }

    export interface GetPlayerSegmentsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of segments the requested player currently belongs to.
        Segments?: GetSegmentResult[];
    }

    export interface GetPlayersInSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Continuation token if retrieving subsequent pages of results.
        ContinuationToken?: string;
        // Maximum number of profiles to load. Default is 1,000. Maximum is 10,000.
        MaxBatchSize?: number;
        // Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging
        // results. Default is 300 (5 minutes). Maximum is 1,800 (30 minutes).
        SecondsToLive?: number;
        // Unique identifier for this segment.
        SegmentId: string;
    }

    export interface GetPlayersInSegmentResult extends PlayFabModule.IPlayFabResultCommon {
        // Continuation token to use to retrieve subsequent pages of results. If token returns null there are no more results.
        ContinuationToken?: string;
        // Array of player profiles in this segment.
        PlayerProfiles?: PlayerProfile[];
        // Count of profiles matching this segment.
        ProfilesInSegment: number;
    }

    export interface GetPlayersSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetPlayerStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // user for whom statistics are being requested
        PlayFabId: string;
        // statistics to return
        StatisticNames?: string[];
        // statistics to return, if StatisticNames is not set (only statistics which have a version matching that provided will be
        // returned)
        StatisticNameVersions?: StatisticNameVersion[];
    }

    export interface GetPlayerStatisticsResult extends PlayFabModule.IPlayFabResultCommon {
        // PlayFab unique identifier of the user whose statistics are being returned
        PlayFabId?: string;
        // User statistics for the requested user.
        Statistics?: StatisticValue[];
    }

    export interface GetPlayerStatisticVersionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // unique name of the statistic
        StatisticName?: string;
    }

    export interface GetPlayerStatisticVersionsResult extends PlayFabModule.IPlayFabResultCommon {
        // version change history of the statistic
        StatisticVersions?: PlayerStatisticVersion[];
    }

    export interface GetPlayerTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional namespace to filter results by
        Namespace?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetPlayerTagsResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Canonical tags (including namespace and tag's name) for the requested user
        Tags: string[];
    }

    export interface GetPlayFabIDsFromFacebookIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers.
        FacebookIDs: string[];
    }

    export interface GetPlayFabIDsFromFacebookIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Facebook identifiers to PlayFab identifiers.
        Data?: FacebookPlayFabIdPair[];
    }

    export interface GetPlayFabIDsFromFacebookInstantGamesIdsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers.
        FacebookInstantGamesIds: string[];
    }

    export interface GetPlayFabIDsFromFacebookInstantGamesIdsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Facebook Instant Games identifiers to PlayFab identifiers.
        Data?: FacebookInstantGamesPlayFabIdPair[];
    }

    export interface GetPlayFabIDsFromGenericIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique generic service identifiers for which the title needs to get PlayFab identifiers. Currently limited to a
        // maximum of 10 in a single request.
        GenericIDs: GenericServiceId[];
    }

    export interface GetPlayFabIDsFromGenericIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of generic service identifiers to PlayFab identifiers.
        Data?: GenericPlayFabIdPair[];
    }

    export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers.
        NintendoSwitchDeviceIds: string[];
    }

    export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Nintendo Switch Device identifiers to PlayFab identifiers.
        Data?: NintendoSwitchPlayFabIdPair[];
    }

    export interface GetPlayFabIDsFromPSNAccountIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Id of the PSN issuer environment. If null, defaults to 256 (production)
        IssuerId?: number;
        // Array of unique PlayStation Network identifiers for which the title needs to get PlayFab identifiers.
        PSNAccountIDs: string[];
    }

    export interface GetPlayFabIDsFromPSNAccountIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of PlayStation Network identifiers to PlayFab identifiers.
        Data?: PSNAccountPlayFabIdPair[];
    }

    export interface GetPlayFabIDsFromSteamIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers.
        SteamStringIDs?: string[];
    }

    export interface GetPlayFabIDsFromSteamIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Steam identifiers to PlayFab identifiers.
        Data?: SteamPlayFabIdPair[];
    }

    export interface GetPlayFabIDsFromXboxLiveIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The ID of Xbox Live sandbox.
        Sandbox?: string;
        // Array of unique Xbox Live account identifiers for which the title needs to get PlayFab identifiers.
        XboxLiveAccountIDs: string[];
    }

    export interface GetPlayFabIDsFromXboxLiveIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of PlayStation Network identifiers to PlayFab identifiers.
        Data?: XboxLiveAccountPlayFabIdPair[];
    }

    export interface GetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // array of keys to get back data from the Publisher data blob, set by the admin tools
        Keys: string[];
    }

    export interface GetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon {
        // a dictionary object of key / value pairs
        Data?: { [key: string]: string | null };
    }

    export interface GetRandomResultTablesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to retrieve the Random Result Tables. If unspecified, uses
        // default/primary catalog.
        CatalogVersion?: string;
        // The unique identifier of the Random Result Table to use.
        TableIDs: string[];
    }

    export interface GetRandomResultTablesResult extends PlayFabModule.IPlayFabResultCommon {
        // array of random result tables currently available
        Tables?: { [key: string]: RandomResultTableListing };
    }

    export interface GetSegmentResult {
        // Identifier of the segments AB Test, if it is attached to one.
        ABTestParent?: string;
        // Unique identifier for this segment.
        Id: string;
        // Segment name.
        Name?: string;
    }

    export interface GetServerCustomIDsFromPlayFabIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique PlayFab player identifiers for which the title needs to get server custom identifiers. Cannot contain
        // more than 25 identifiers.
        PlayFabIDs: string[];
    }

    export interface GetServerCustomIDsFromPlayFabIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of server custom player identifiers to PlayFab identifiers.
        Data?: ServerCustomIDPlayFabIDPair[];
    }

    export interface GetSharedGroupDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // If true, return the list of all members of the shared group.
        GetMembers?: boolean;
        // Specific keys to retrieve from the shared group (if not specified, all keys will be returned, while an empty array
        // indicates that no keys should be returned).
        Keys?: string[];
        // Unique identifier for the shared group.
        SharedGroupId: string;
    }

    export interface GetSharedGroupDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Data for the requested keys.
        Data?: { [key: string]: SharedGroupDataRecord };
        // List of PlayFabId identifiers for the members of this group, if requested.
        Members?: string[];
    }

    export interface GetStoreItemsResult extends PlayFabModule.IPlayFabResultCommon {
        // The base catalog that this store is a part of.
        CatalogVersion?: string;
        // Additional data about the store.
        MarketingData?: StoreMarketingModel;
        // How the store was last updated (Admin or a third party).
        Source?: string;
        // Array of items which can be purchased from this store.
        Store?: StoreItem[];
        // The ID of this store.
        StoreId?: string;
    }

    export interface GetStoreItemsServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Catalog version to store items from. Use default catalog version if null
        CatalogVersion?: string;
        // Optional identifier for the player to use in requesting the store information - if used, segment overrides will be
        // applied
        PlayFabId?: string;
        // Unqiue identifier for the store which is being requested
        StoreId: string;
    }

    export interface GetTimeRequest extends PlayFabModule.IPlayFabRequestCommon {}

    export interface GetTimeResult extends PlayFabModule.IPlayFabResultCommon {
        // Current server time when the request was received, in UTC
        Time: string;
    }

    export interface GetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specific keys to search for in the title data (leave null to get all keys)
        Keys?: string[];
    }

    export interface GetTitleDataResult extends PlayFabModule.IPlayFabResultCommon {
        // a dictionary object of key / value pairs
        Data?: { [key: string]: string | null };
    }

    export interface GetTitleNewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Limits the results to the last n entries. Defaults to 10 if not set.
        Count?: number;
    }

    export interface GetTitleNewsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of localized news items.
        News?: TitleNewsItem[];
    }

    export interface GetUserAccountInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetUserAccountInfoResult extends PlayFabModule.IPlayFabResultCommon {
        // Account details for the user whose information was requested.
        UserInfo?: UserAccountInfo;
    }

    export interface GetUserBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetUserBansResult extends PlayFabModule.IPlayFabResultCommon {
        // Information about the bans
        BanData?: BanInfo[];
    }

    export interface GetUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The version that currently exists according to the caller. The call will return the data for all of the keys if the
        // version in the system is greater than this.
        IfChangedFromDataVersion?: number;
        // Specific keys to search for in the custom user data.
        Keys?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetUserDataResult extends PlayFabModule.IPlayFabResultCommon {
        // User specific data for this title.
        Data?: { [key: string]: UserDataRecord };
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;
        // PlayFab unique identifier of the user whose custom data is being returned.
        PlayFabId?: string;
    }

    export interface GetUserInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GetUserInventoryResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of inventory items belonging to the user.
        Inventory?: ItemInstance[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // Array of virtual currency balance(s) belonging to the user.
        VirtualCurrency?: { [key: string]: number };
        // Array of remaining times and timestamps for virtual currencies.
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };
    }

    export interface GrantCharacterToUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Non-unique display name of the character being granted (1-40 characters in length).
        CharacterName: string;
        // Type of the character being granted; statistics can be sliced based on this value.
        CharacterType: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GrantCharacterToUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier tagged to this character.
        CharacterId?: string;
    }

    export interface GrantedItemInstance {
        // Game specific comment associated with this instance when it was added to the user inventory.
        Annotation?: string;
        // Array of unique items that were awarded when this catalog item was purchased.
        BundleContents?: string[];
        // Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
        // container.
        BundleParent?: string;
        // Catalog version for the inventory item, when this instance was created.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
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
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // Timestamp for when this instance was purchased.
        PurchaseDate?: string;
        // Total number of remaining uses, if this is a consumable item.
        RemainingUses?: number;
        // Result of this operation.
        Result: boolean;
        // Currency type for the cost of the catalog item. Not available when granting items.
        UnitCurrency?: string;
        // Cost of the catalog item in the given currency. Not available when granting items.
        UnitPrice: number;
        // The number of uses that were added or removed to this item in this call.
        UsesIncrementedBy?: number;
    }

    export interface GrantItemsToCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // String detailing any additional information concerning this operation.
        Annotation?: string;
        // Catalog version from which items are to be granted.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Array of itemIds to grant to the user.
        ItemIds?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GrantItemsToCharacterResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items granted to users.
        ItemGrantResults?: GrantedItemInstance[];
    }

    export interface GrantItemsToUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // String detailing any additional information concerning this operation.
        Annotation?: string;
        // Catalog version from which items are to be granted.
        CatalogVersion?: string;
        // Array of itemIds to grant to the user.
        ItemIds: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface GrantItemsToUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items granted to users.
        ItemGrantResults?: GrantedItemInstance[];
    }

    export interface GrantItemsToUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Catalog version from which items are to be granted.
        CatalogVersion?: string;
        // Array of items to grant and the users to whom the items are to be granted.
        ItemGrants: ItemGrant[];
    }

    export interface GrantItemsToUsersResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items granted to users.
        ItemGrantResults?: GrantedItemInstance[];
    }

    export interface ItemGrant {
        // String detailing any additional information concerning this operation.
        Annotation?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Unique identifier of the catalog item to be granted to the user.
        ItemId: string;
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
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

    export interface LinkedPlatformAccountModel {
        // Linked account email of the user on the platform, if available
        Email?: string;
        // Authentication platform
        Platform?: string;
        // Unique account identifier of the user on the platform
        PlatformUserId?: string;
        // Linked account username of the user on the platform, if available
        Username?: string;
    }

    export interface LinkPSNAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Authentication code provided by the PlayStation Network.
        AuthCode: string;
        // If another user is already linked to the account, unlink the other user and re-link.
        ForceLink?: boolean;
        // Id of the PSN issuer environment. If null, defaults to 256 (production)
        IssuerId?: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Redirect URI supplied to PSN when requesting an auth code
        RedirectUri: string;
    }

    export interface LinkPSNAccountResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface LinkServerCustomIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        // If another user is already linked to the custom ID, unlink the other user and re-link.
        ForceLink?: boolean;
        // Unique PlayFab identifier.
        PlayFabId: string;
        // Unique server custom identifier for this player.
        ServerCustomId: string;
    }

    export interface LinkServerCustomIdResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface LinkXboxAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        // If another user is already linked to the account, unlink the other user and re-link.
        ForceLink?: boolean;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
        PlayFabId: string;
        // Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", "").
        XboxToken: string;
    }

    export interface LinkXboxAccountResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface ListUsersCharactersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface ListUsersCharactersResult extends PlayFabModule.IPlayFabResultCommon {
        // The requested list of characters.
        Characters?: CharacterResult[];
    }

    export interface LocalizedPushNotificationProperties {
        // Message of the localized push notification template.
        Message?: string;
        // Subject of the localized push notification template.
        Subject?: string;
    }

    export interface LocationModel {
        // City name.
        City?: string;
        // The two-character continent code for this location
        ContinentCode?: string;
        // The two-character ISO 3166-1 country code for the country associated with the location
        CountryCode?: string;
        // Latitude coordinate of the geographic location.
        Latitude?: number;
        // Longitude coordinate of the geographic location.
        Longitude?: number;
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

    export interface LoginWithServerCustomIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Automatically create a PlayFab account if one is not currently linked to this ID.
        CreateAccount?: boolean;
        // Flags for which pieces of info to return for the user.
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        // Player secret that is used to verify API request signatures (Enterprise Only).
        PlayerSecret?: string;
        // The backend server identifier for this player.
        ServerCustomId?: string;
    }

    export interface LoginWithXboxIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Automatically create a PlayFab account if one is not currently linked to this ID.
        CreateAccount?: boolean;
        // Flags for which pieces of info to return for the user.
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        // The id of Xbox Live sandbox.
        Sandbox: string;
        // Unique Xbox identifier for a user
        XboxId: string;
    }

    export interface LoginWithXboxRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Automatically create a PlayFab account if one is not currently linked to this ID.
        CreateAccount?: boolean;
        // Flags for which pieces of info to return for the user.
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        // Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", "").
        XboxToken: string;
    }

    export interface LogStatement {
        // Optional object accompanying the message as contextual information
        Data?: any;
        // 'Debug', 'Info', or 'Error'
        Level?: string;
        Message?: string;
    }

    export interface MembershipModel {
        // Whether this membership is active. That is, whether the MembershipExpiration time has been reached.
        IsActive: boolean;
        // The time this membership expires
        MembershipExpiration: string;
        // The id of the membership
        MembershipId?: string;
        // Membership expirations can be explicitly overridden (via game manager or the admin api). If this membership has been
        // overridden, this will be the new expiration time.
        OverrideExpiration?: string;
        // The list of subscriptions that this player has for this membership
        Subscriptions?: SubscriptionModel[];
    }

    export interface ModifyCharacterVirtualCurrencyResult extends PlayFabModule.IPlayFabResultCommon {
        // Balance of the virtual currency after modification.
        Balance: number;
        // Name of the virtual currency which was modified.
        VirtualCurrency?: string;
    }

    export interface ModifyItemUsesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique instance identifier of the item to be modified.
        ItemInstanceId: string;
        // PlayFab unique identifier of the user whose item is being modified.
        PlayFabId: string;
        // Number of uses to add to the item. Can be negative to remove uses.
        UsesToAdd: number;
    }

    export interface ModifyItemUsesResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique instance identifier of the item with uses consumed.
        ItemInstanceId?: string;
        // Number of uses remaining on the item.
        RemainingUses: number;
    }

    export interface ModifyUserVirtualCurrencyResult extends PlayFabModule.IPlayFabResultCommon {
        // Balance of the virtual currency after modification.
        Balance: number;
        // Amount added or subtracted from the user's virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase
        // over this value will be discarded.
        BalanceChange: number;
        // User currency was subtracted from.
        PlayFabId?: string;
        // Name of the virtual currency which was modified.
        VirtualCurrency?: string;
    }

    export interface MoveItemToCharacterFromCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the character that currently has the item.
        GivingCharacterId: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique identifier of the character that will be receiving the item.
        ReceivingCharacterId: string;
    }

    export interface MoveItemToCharacterFromCharacterResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface MoveItemToCharacterFromUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface MoveItemToCharacterFromUserResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface MoveItemToUserFromCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface MoveItemToUserFromCharacterResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface NintendoSwitchPlayFabIdPair {
        // Unique Nintendo Switch Device identifier for a user.
        NintendoSwitchDeviceId?: string;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier.
        PlayFabId?: string;
    }

    export interface NotifyMatchmakerPlayerLeftRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Instance the user is leaving.
        LobbyId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface NotifyMatchmakerPlayerLeftResult extends PlayFabModule.IPlayFabResultCommon {
        // State of user leaving the Game Server Instance.
        PlayerState?: string;
    }

    type PlayerConnectionState = "Unassigned"
        | "Connecting"
        | "Participating"
        | "Participated";

    export interface PlayerLeaderboardEntry {
        // Title-specific display name of the user for this leaderboard entry.
        DisplayName?: string;
        // PlayFab unique identifier of the user for this leaderboard entry.
        PlayFabId?: string;
        // User's overall position in the leaderboard.
        Position: number;
        // The profile of the user, if requested.
        Profile?: PlayerProfileModel;
        // Specific value of the user's statistic.
        StatValue: number;
    }

    export interface PlayerLinkedAccount {
        // Linked account's email
        Email?: string;
        // Authentication platform
        Platform?: string;
        // Platform user identifier
        PlatformUserId?: string;
        // Linked account's username
        Username?: string;
    }

    export interface PlayerLocation {
        // City of the player's geographic location.
        City?: string;
        // The two-character continent code for this location
        ContinentCode: string;
        // The two-character ISO 3166-1 country code for the country associated with the location
        CountryCode: string;
        // Latitude coordinate of the player's geographic location.
        Latitude?: number;
        // Longitude coordinate of the player's geographic location.
        Longitude?: number;
    }

    export interface PlayerProfile {
        // Array of ad campaigns player has been attributed to
        AdCampaignAttributions?: AdCampaignAttribution[];
        // Image URL of the player's avatar.
        AvatarUrl?: string;
        // Banned until UTC Date. If permanent ban this is set for 20 years after the original ban date.
        BannedUntil?: string;
        // Array of contact email addresses associated with the player
        ContactEmailAddresses?: ContactEmailInfo[];
        // Player record created
        Created?: string;
        // Player Display Name
        DisplayName?: string;
        // Last login
        LastLogin?: string;
        // Array of third party accounts linked to this player
        LinkedAccounts?: PlayerLinkedAccount[];
        // Dictionary of player's locations by type.
        Locations?: { [key: string]: PlayerLocation };
        // Player account origination
        Origination?: string;
        // List of player variants for experimentation
        PlayerExperimentVariants?: string[];
        // PlayFab Player ID
        PlayerId?: string;
        // Array of player statistics
        PlayerStatistics?: PlayerStatistic[];
        // Publisher this player belongs to
        PublisherId?: string;
        // Array of configured push notification end points
        PushNotificationRegistrations?: PushNotificationRegistration[];
        // Dictionary of player's statistics using only the latest version's value
        Statistics?: { [key: string]: number };
        // List of player's tags for segmentation.
        Tags?: string[];
        // Title ID this profile applies to
        TitleId?: string;
        // A sum of player's total purchases in USD across all currencies.
        TotalValueToDateInUSD?: number;
        // Dictionary of player's total purchases by currency.
        ValuesToDate?: { [key: string]: number };
        // Dictionary of player's virtual currency balances
        VirtualCurrencyBalances?: { [key: string]: number };
    }

    export interface PlayerProfileModel {
        // List of advertising campaigns the player has been attributed to
        AdCampaignAttributions?: AdCampaignAttributionModel[];
        // URL of the player's avatar image
        AvatarUrl?: string;
        // If the player is currently banned, the UTC Date when the ban expires
        BannedUntil?: string;
        // List of all contact email info associated with the player account
        ContactEmailAddresses?: ContactEmailInfoModel[];
        // Player record created
        Created?: string;
        // Player display name
        DisplayName?: string;
        // List of experiment variants for the player.
        ExperimentVariants?: string[];
        // UTC time when the player most recently logged in to the title
        LastLogin?: string;
        // List of all authentication systems linked to this player account
        LinkedAccounts?: LinkedPlatformAccountModel[];
        // List of geographic locations from which the player has logged in to the title
        Locations?: LocationModel[];
        // List of memberships for the player, along with whether are expired.
        Memberships?: MembershipModel[];
        // Player account origination
        Origination?: string;
        // PlayFab player account unique identifier
        PlayerId?: string;
        // Publisher this player belongs to
        PublisherId?: string;
        // List of configured end points registered for sending the player push notifications
        PushNotificationRegistrations?: PushNotificationRegistrationModel[];
        // List of leaderboard statistic values for the player
        Statistics?: StatisticModel[];
        // List of player's tags for segmentation
        Tags?: TagModel[];
        // Title ID this player profile applies to
        TitleId?: string;
        // Sum of the player's purchases made with real-money currencies, converted to US dollars equivalent and represented as a
        // whole number of cents (1/100 USD). For example, 999 indicates nine dollars and ninety-nine cents.
        TotalValueToDateInUSD?: number;
        // List of the player's lifetime purchase totals, summed by real-money currency
        ValuesToDate?: ValueToDateModel[];
    }

    export interface PlayerProfileViewConstraints {
        // Whether to show player's avatar URL. Defaults to false
        ShowAvatarUrl: boolean;
        // Whether to show the banned until time. Defaults to false
        ShowBannedUntil: boolean;
        // Whether to show campaign attributions. Defaults to false
        ShowCampaignAttributions: boolean;
        // Whether to show contact email addresses. Defaults to false
        ShowContactEmailAddresses: boolean;
        // Whether to show the created date. Defaults to false
        ShowCreated: boolean;
        // Whether to show the display name. Defaults to false
        ShowDisplayName: boolean;
        // Whether to show player's experiment variants. Defaults to false
        ShowExperimentVariants: boolean;
        // Whether to show the last login time. Defaults to false
        ShowLastLogin: boolean;
        // Whether to show the linked accounts. Defaults to false
        ShowLinkedAccounts: boolean;
        // Whether to show player's locations. Defaults to false
        ShowLocations: boolean;
        // Whether to show player's membership information. Defaults to false
        ShowMemberships: boolean;
        // Whether to show origination. Defaults to false
        ShowOrigination: boolean;
        // Whether to show push notification registrations. Defaults to false
        ShowPushNotificationRegistrations: boolean;
        // Reserved for future development
        ShowStatistics: boolean;
        // Whether to show tags. Defaults to false
        ShowTags: boolean;
        // Whether to show the total value to date in usd. Defaults to false
        ShowTotalValueToDateInUsd: boolean;
        // Whether to show the values to date. Defaults to false
        ShowValuesToDate: boolean;
    }

    export interface PlayerStatistic {
        // Statistic ID
        Id?: string;
        // Statistic name
        Name?: string;
        // Current statistic value
        StatisticValue: number;
        // Statistic version (0 if not a versioned statistic)
        StatisticVersion: number;
    }

    export interface PlayerStatisticVersion {
        // time when the statistic version became active
        ActivationTime: string;
        // time when the statistic version became inactive due to statistic version incrementing
        DeactivationTime?: string;
        // time at which the statistic version was scheduled to become active, based on the configured ResetInterval
        ScheduledActivationTime?: string;
        // time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval
        ScheduledDeactivationTime?: string;
        // name of the statistic when the version became active
        StatisticName?: string;
        // version of the statistic
        Version: number;
    }

    export interface PSNAccountPlayFabIdPair {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation Network identifier.
        PlayFabId?: string;
        // Unique PlayStation Network identifier for a user.
        PSNAccountId?: string;
    }

    export interface PushNotificationPackage {
        // Numerical badge to display on App icon (iOS only)
        Badge: number;
        // This must be a JSON formatted object. For use with developer-created custom Push Notification plugins
        CustomData?: string;
        // Icon file to display with the message (Not supported for iOS)
        Icon?: string;
        // Content of the message (all platforms)
        Message: string;
        // Sound file to play with the message (all platforms)
        Sound?: string;
        // Title/Subject of the message. Not supported for iOS
        Title: string;
    }

    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    export interface PushNotificationRegistration {
        // Notification configured endpoint
        NotificationEndpointARN?: string;
        // Push notification platform
        Platform?: string;
    }

    export interface PushNotificationRegistrationModel {
        // Notification configured endpoint
        NotificationEndpointARN?: string;
        // Push notification platform
        Platform?: string;
    }

    export interface RandomResultTableListing {
        // Catalog version this table is associated with
        CatalogVersion?: string;
        // Child nodes that indicate what kind of drop table item this actually is.
        Nodes: ResultTableNode[];
        // Unique name for this drop table
        TableId: string;
    }

    export interface RedeemCouponRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Catalog version of the coupon.
        CatalogVersion?: string;
        // Optional identifier for the Character that should receive the item. If null, item is added to the player
        CharacterId?: string;
        // Generated coupon code to redeem.
        CouponCode: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface RedeemCouponResult extends PlayFabModule.IPlayFabResultCommon {
        // Items granted to the player as a result of redeeming the coupon.
        GrantedItems?: ItemInstance[];
    }

    export interface RedeemMatchmakerTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance that is asking for validation of the authorization ticket.
        LobbyId: string;
        // Server authorization ticket passed back from a call to Matchmake or StartGame.
        Ticket: string;
    }

    export interface RedeemMatchmakerTicketResult extends PlayFabModule.IPlayFabResultCommon {
        // Error value if the ticket was not validated.
        Error?: string;
        // Boolean indicating whether the ticket was validated by the PlayFab service.
        TicketIsValid: boolean;
        // User account information for the user validated.
        UserInfo?: UserAccountInfo;
    }

    export interface RefreshGameServerInstanceHeartbeatRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance for which the heartbeat is updated.
        LobbyId: string;
    }

    export interface RefreshGameServerInstanceHeartbeatResult extends PlayFabModule.IPlayFabResultCommon {}

    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    export interface RegisterGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the build running on the Game Server Instance.
        Build: string;
        // Game Mode the Game Server instance is running. Note that this must be defined in the Game Modes tab in the PlayFab Game
        // Manager, along with the Build ID (the same Game Mode can be defined for multiple Build IDs).
        GameMode: string;
        // Previous lobby id if re-registering an existing game.
        LobbyId?: string;
        // Region in which the Game Server Instance is running. For matchmaking using non-AWS region names, set this to any AWS
        // region and use Tags (below) to specify your custom region.
        Region: string;
        // IPV4 address of the game server instance.
        ServerIPV4Address?: string;
        // IPV6 address (if any) of the game server instance.
        ServerIPV6Address?: string;
        // Port number for communication with the Game Server Instance.
        ServerPort: string;
        // Public DNS name (if any) of the server
        ServerPublicDNSName?: string;
        // Tags for the Game Server Instance
        Tags?: { [key: string]: string | null };
    }

    export interface RegisterGameResponse extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier generated for the Game Server Instance that is registered. If LobbyId is specified in request and the
        // game still exists in PlayFab, the LobbyId in request is returned. Otherwise a new lobby id will be returned.
        LobbyId?: string;
    }

    export interface RemoveFriendRequest extends PlayFabModule.IPlayFabRequestCommon {
        // PlayFab identifier of the friend account which is to be removed.
        FriendPlayFabId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface RemoveGenericIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Generic service identifier to be removed from the player.
        GenericId: GenericServiceId;
        // PlayFabId of the user to remove.
        PlayFabId: string;
    }

    export interface RemovePlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique tag for player profile.
        TagName: string;
    }

    export interface RemovePlayerTagResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface RemoveSharedGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An array of unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabIds: string[];
        // Unique identifier for the shared group.
        SharedGroupId: string;
    }

    export interface RemoveSharedGroupMembersResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface ReportPlayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional additional comment by reporting player.
        Comment?: string;
        // Unique PlayFab identifier of the reported player.
        ReporteeId: string;
        // PlayFabId of the reporting player.
        ReporterId: string;
    }

    export interface ReportPlayerServerResult extends PlayFabModule.IPlayFabResultCommon {
        // The number of remaining reports which may be filed today by this reporting player.
        SubmissionsRemaining: number;
    }

    export interface ResultTableNode {
        // Either an ItemId, or the TableId of another random result table
        ResultItem: string;
        // Whether this entry in the table is an item or a link to another table
        ResultItemType: string;
        // How likely this is to be rolled - larger numbers add more weight
        Weight: number;
    }

    type ResultTableNodeType = "ItemId"
        | "TableId";

    export interface RevokeAllBansForUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface RevokeAllBansForUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were revoked.
        BanData?: BanInfo[];
    }

    export interface RevokeBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Ids of the bans to be revoked. Maximum 100.
        BanIds: string[];
    }

    export interface RevokeBansResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were revoked
        BanData?: BanInfo[];
    }

    export interface RevokeInventoryItem {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface RevokeInventoryItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface RevokeInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of player items to revoke, between 1 and 25 items.
        Items: RevokeInventoryItem[];
    }

    export interface RevokeInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon {
        // Collection of any errors that occurred during processing.
        Errors?: RevokeItemError[];
    }

    export interface RevokeInventoryResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface RevokeItemError {
        // Specific error that was encountered.
        Error?: string;
        // Item information that failed to be revoked.
        Item?: RevokeInventoryItem;
    }

    export interface SavePushNotificationTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Android JSON for the notification template.
        AndroidPayload?: string;
        // Id of the push notification template.
        Id?: string;
        // IOS JSON for the notification template.
        IOSPayload?: string;
        // Dictionary of localized push notification templates with the language as the key.
        LocalizedPushNotificationTemplates?: { [key: string]: LocalizedPushNotificationProperties };
        // Name of the push notification template.
        Name: string;
    }

    export interface SavePushNotificationTemplateResult extends PlayFabModule.IPlayFabResultCommon {
        // Id of the push notification template that was saved.
        PushNotificationTemplateId?: string;
    }

    export interface ScriptExecutionError {
        // Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded,
        // CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
        Error?: string;
        // Details about the error
        Message?: string;
        // Point during the execution of the script at which the error occurred, if any
        StackTrace?: string;
    }

    export interface SendCustomAccountRecoveryEmailRequest extends PlayFabModule.IPlayFabRequestCommon {
        // User email address attached to their account
        Email?: string;
        // The email template id of the account recovery email template to send.
        EmailTemplateId: string;
        // The user's username requesting an account recovery.
        Username?: string;
    }

    export interface SendCustomAccountRecoveryEmailResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SendEmailFromTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The email template id of the email template to send.
        EmailTemplateId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface SendEmailFromTemplateResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SendPushNotificationFromTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Id of the push notification template.
        PushNotificationTemplateId: string;
        // PlayFabId of the push notification recipient.
        Recipient: string;
    }

    export interface SendPushNotificationRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Allows you to provide precisely formatted json to target devices. This is an advanced feature, allowing you to deliver
        // to custom plugin logic, fields, or functionality not natively supported by PlayFab.
        AdvancedPlatformDelivery?: AdvancedPushPlatformMsg[];
        // Text of message to send.
        Message?: string;
        // Defines all possible push attributes like message, title, icon, etc. Some parameters are device specific - please see
        // the PushNotificationPackage documentation for details.
        Package?: PushNotificationPackage;
        // PlayFabId of the recipient of the push notification.
        Recipient: string;
        // Subject of message to send (may not be displayed in all platforms)
        Subject?: string;
        // Target Platforms that should receive the Message or Package. If omitted, we will send to all available platforms.
        TargetPlatforms?: string[];
    }

    export interface SendPushNotificationResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface ServerCustomIDPlayFabIDPair {
        // Unique PlayFab identifier.
        PlayFabId?: string;
        // Unique server custom identifier for this player.
        ServerCustomId?: string;
    }

    export interface ServerLoginResult extends PlayFabModule.IPlayFabResultCommon {
        // If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and
        // returned.
        EntityToken?: EntityTokenResponse;
        // Results for requested info.
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
        // The time of this user's previous login. If there was no previous login, then it's DateTime.MinValue
        LastLoginTime?: string;
        // True if the account was newly created on this login.
        NewlyCreated: boolean;
        // Player's unique PlayFabId.
        PlayFabId?: string;
        // Unique token authorizing the user and game at the server level, for the current session.
        SessionTicket?: string;
        // Settings specific to this user.
        SettingsForUser?: UserSettings;
        // The experimentation treatments for this user at the time of login.
        TreatmentAssignment?: TreatmentAssignment;
    }

    export interface SetFriendTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // PlayFab identifier of the friend account to which the tag(s) should be applied.
        FriendPlayFabId: string;
        // PlayFab identifier of the player whose friend is to be updated.
        PlayFabId: string;
        // Array of tags to set on the friend account.
        Tags: string[];
    }

    export interface SetGameServerInstanceDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom data to set for the specified game server instance.
        GameServerData: string;
        // Unique identifier of the Game Instance to be updated, in decimal format.
        LobbyId: string;
    }

    export interface SetGameServerInstanceDataResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SetGameServerInstanceStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Instance to be updated, in decimal format.
        LobbyId: string;
        // State to set for the specified game server instance.
        State: string;
    }

    export interface SetGameServerInstanceStateResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SetGameServerInstanceTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance to be updated.
        LobbyId: string;
        // Tags to set for the specified Game Server Instance. Note that this is the complete list of tags to be associated with
        // the Game Server Instance.
        Tags: { [key: string]: string | null };
    }

    export interface SetGameServerInstanceTagsResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SetPlayerSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Player secret that is used to verify API request signatures (Enterprise Only).
        PlayerSecret?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface SetPlayerSecretResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
        // name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
        Key: string;
        // new value to set. Set to null to remove a value
        Value?: string;
    }

    export interface SetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
        // name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
        Key: string;
        // new value to set. Set to null to remove a value
        Value?: string;
    }

    export interface SetTitleDataResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface SharedGroupDataRecord {
        // Timestamp for when this data was last updated.
        LastUpdated: string;
        // PlayFabId of the user to last update this value.
        LastUpdatedBy?: string;
        // Indicates whether this data can be read by all users (public) or only members of the group (private).
        Permission?: string;
        // Data stored for the specified group data key.
        Value?: string;
    }

    type SourceType = "Admin"
        | "BackEnd"
        | "GameClient"
        | "GameServer"
        | "Partner"
        | "Custom"
        | "API";

    export interface StatisticModel {
        // Statistic name
        Name?: string;
        // Statistic value
        Value: number;
        // Statistic version (0 if not a versioned statistic)
        Version: number;
    }

    export interface StatisticNameVersion {
        // unique name of the statistic
        StatisticName: string;
        // the version of the statistic to be returned
        Version: number;
    }

    export interface StatisticUpdate {
        // unique name of the statistic
        StatisticName: string;
        // statistic value for the player
        Value: number;
        // for updates to an existing statistic value for a player, the version of the statistic when it was loaded. Null when
        // setting the statistic value for the first time.
        Version?: number;
    }

    export interface StatisticValue {
        // unique name of the statistic
        StatisticName?: string;
        // statistic value for the player
        Value: number;
        // for updates to an existing statistic value for a player, the version of the statistic when it was loaded
        Version: number;
    }

    export interface SteamPlayFabIdPair {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier.
        PlayFabId?: string;
        // Unique Steam identifier for a user.
        SteamStringId?: string;
    }

    export interface StoreItem {
        // Store specific custom data. The data only exists as part of this store; it is not transferred to item instances
        CustomData?: any;
        // Intended display position for this item. Note that 0 is the first position
        DisplayPosition?: number;
        // Unique identifier of the item as it exists in the catalog - note that this must exactly match the ItemId from the
        // catalog
        ItemId: string;
        // Override prices for this item for specific currencies
        RealCurrencyPrices?: { [key: string]: number };
        // Override prices for this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies)
        VirtualCurrencyPrices?: { [key: string]: number };
    }

    export interface StoreMarketingModel {
        // Tagline for a store.
        Description?: string;
        // Display name of a store as it will appear to users.
        DisplayName?: string;
        // Custom data about a store.
        Metadata?: any;
    }

    export interface SubscriptionModel {
        // When this subscription expires.
        Expiration: string;
        // The time the subscription was orignially purchased
        InitialSubscriptionTime: string;
        // Whether this subscription is currently active. That is, if Expiration > now.
        IsActive: boolean;
        // The status of this subscription, according to the subscription provider.
        Status?: string;
        // The id for this subscription
        SubscriptionId?: string;
        // The item id for this subscription from the primary catalog
        SubscriptionItemId?: string;
        // The provider for this subscription. Apple or Google Play are supported today.
        SubscriptionProvider?: string;
    }

    type SubscriptionProviderStatus = "NoError"
        | "Cancelled"
        | "UnknownError"
        | "BillingError"
        | "ProductUnavailable"
        | "CustomerDidNotAcceptPriceChange"
        | "FreeTrial"
        | "PaymentPending";

    export interface SubtractCharacterVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be subtracted from the user balance of the specified virtual currency.
        Amount: number;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Name of the virtual currency which is to be decremented.
        VirtualCurrency: string;
    }

    export interface SubtractUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be subtracted from the user balance of the specified virtual currency.
        Amount: number;
        // PlayFab unique identifier of the user whose virtual currency balance is to be decreased.
        PlayFabId: string;
        // Name of the virtual currency which is to be decremented.
        VirtualCurrency: string;
    }

    export interface TagModel {
        // Full value of the tag, including namespace
        TagValue?: string;
    }

    type TitleActivationStatus = "None"
        | "ActivatedTitleKey"
        | "PendingSteam"
        | "ActivatedSteam"
        | "RevokedSteam";

    export interface TitleNewsItem {
        // News item body.
        Body?: string;
        // Unique identifier of news item.
        NewsId?: string;
        // Date and time when the news item was posted.
        Timestamp: string;
        // Title of the news item.
        Title?: string;
    }

    export interface TreatmentAssignment {
        // List of the experiment variables.
        Variables?: Variable[];
        // List of the experiment variants.
        Variants?: string[];
    }

    export interface UnlinkPSNAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UnlinkPSNAccountResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface UnlinkServerCustomIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab identifier.
        PlayFabId: string;
        // Unique server custom identifier for this player.
        ServerCustomId: string;
    }

    export interface UnlinkServerCustomIdResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface UnlinkXboxAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
        PlayFabId: string;
        // Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", "").
        XboxToken?: string;
    }

    export interface UnlinkXboxAccountResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface UnlockContainerInstanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to determine container contents. If unspecified, uses catalog
        // associated with the item instance.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // ItemInstanceId of the container to unlock.
        ContainerItemInstanceId: string;
        // ItemInstanceId of the key that will be consumed by unlocking this container. If the container requires a key, this
        // parameter is required.
        KeyItemInstanceId?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UnlockContainerItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to determine container contents. If unspecified, uses default/primary
        // catalog.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Catalog ItemId of the container type to unlock.
        ContainerItemId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UnlockContainerItemResult extends PlayFabModule.IPlayFabResultCommon {
        // Items granted to the player as a result of unlocking the container.
        GrantedItems?: ItemInstance[];
        // Unique instance identifier of the container unlocked.
        UnlockedItemInstanceId?: string;
        // Unique instance identifier of the key used to unlock the container, if applicable.
        UnlockedWithItemInstanceId?: string;
        // Virtual currency granted to the player as a result of unlocking the container.
        VirtualCurrency?: { [key: string]: number };
    }

    export interface UpdateAvatarUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        // URL of the avatar image. If empty, it removes the existing avatar URL.
        ImageUrl: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UpdateBanRequest {
        // The updated active state for the ban. Null for no change.
        Active?: boolean;
        // The id of the ban to be updated.
        BanId: string;
        // The updated expiration date for the ban. Null for no change.
        Expires?: string;
        // The updated IP address for the ban. Null for no change.
        IPAddress?: string;
        // The updated MAC address for the ban. Null for no change.
        MACAddress?: string;
        // Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state.
        Permanent?: boolean;
        // The updated reason for the ban to be updated. Maximum 140 characters. Null for no change.
        Reason?: string;
    }

    export interface UpdateBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        // List of bans to be updated. Maximum 100.
        Bans: UpdateBanRequest[];
    }

    export interface UpdateBansResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were updated
        BanData?: BanInfo[];
    }

    export interface UpdateCharacterDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
        Permission?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UpdateCharacterDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;
    }

    export interface UpdateCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Statistics to be updated with the provided values.
        CharacterStatistics?: { [key: string]: number };
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UpdateCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface UpdatePlayerStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Indicates whether the statistics provided should be set, regardless of the aggregation method set on the statistic.
        // Default is false.
        ForceUpdate?: boolean;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Statistics to be updated with the provided values
        Statistics: StatisticUpdate[];
    }

    export interface UpdatePlayerStatisticsResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface UpdateSharedGroupDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Permission to be applied to all user data keys in this request.
        Permission?: string;
        // Unique identifier for the shared group.
        SharedGroupId: string;
    }

    export interface UpdateSharedGroupDataResult extends PlayFabModule.IPlayFabResultCommon {}

    export interface UpdateUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
        Permission?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UpdateUserDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;
    }

    export interface UpdateUserInternalDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UpdateUserInventoryItemDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
    }

    export interface UserAccountInfo {
        // User Android device information, if an Android device has been linked
        AndroidDeviceInfo?: UserAndroidDeviceInfo;
        // Sign in with Apple account information, if an Apple account has been linked
        AppleAccountInfo?: UserAppleIdInfo;
        // Timestamp indicating when the user account was created
        Created: string;
        // Custom ID information, if a custom ID has been assigned
        CustomIdInfo?: UserCustomIdInfo;
        // User Facebook information, if a Facebook account has been linked
        FacebookInfo?: UserFacebookInfo;
        // Facebook Instant Games account information, if a Facebook Instant Games account has been linked
        FacebookInstantGamesIdInfo?: UserFacebookInstantGamesIdInfo;
        // User Gamecenter information, if a Gamecenter account has been linked
        GameCenterInfo?: UserGameCenterInfo;
        // User Google account information, if a Google account has been linked
        GoogleInfo?: UserGoogleInfo;
        // User iOS device information, if an iOS device has been linked
        IosDeviceInfo?: UserIosDeviceInfo;
        // User Kongregate account information, if a Kongregate account has been linked
        KongregateInfo?: UserKongregateInfo;
        // Nintendo Switch account information, if a Nintendo Switch account has been linked
        NintendoSwitchAccountInfo?: UserNintendoSwitchAccountIdInfo;
        // Nintendo Switch device information, if a Nintendo Switch device has been linked
        NintendoSwitchDeviceIdInfo?: UserNintendoSwitchDeviceIdInfo;
        // OpenID Connect information, if any OpenID Connect accounts have been linked
        OpenIdInfo?: UserOpenIdInfo[];
        // Unique identifier for the user account
        PlayFabId?: string;
        // Personal information for the user which is considered more sensitive
        PrivateInfo?: UserPrivateAccountInfo;
        // User PSN account information, if a PSN account has been linked
        PsnInfo?: UserPsnInfo;
        // User Steam information, if a Steam account has been linked
        SteamInfo?: UserSteamInfo;
        // Title-specific information for the user account
        TitleInfo?: UserTitleInfo;
        // User Twitch account information, if a Twitch account has been linked
        TwitchInfo?: UserTwitchInfo;
        // User account name in the PlayFab service
        Username?: string;
        // Windows Hello account information, if a Windows Hello account has been linked
        WindowsHelloInfo?: UserWindowsHelloInfo;
        // User XBox account information, if a XBox account has been linked
        XboxInfo?: UserXboxInfo;
    }

    export interface UserAndroidDeviceInfo {
        // Android device ID
        AndroidDeviceId?: string;
    }

    export interface UserAppleIdInfo {
        // Apple subject ID
        AppleSubjectId?: string;
    }

    export interface UserCustomIdInfo {
        // Custom ID
        CustomId?: string;
    }

    type UserDataPermission = "Private"
        | "Public";

    export interface UserDataRecord {
        // Timestamp for when this data was last updated.
        LastUpdated: string;
        // Indicates whether this data can be read by all users (public) or only the user (private). This is used for GetUserData
        // requests being made by one player about another player.
        Permission?: string;
        // Data stored for the specified user data key.
        Value?: string;
    }

    export interface UserFacebookInfo {
        // Facebook identifier
        FacebookId?: string;
        // Facebook full name
        FullName?: string;
    }

    export interface UserFacebookInstantGamesIdInfo {
        // Facebook Instant Games ID
        FacebookInstantGamesId?: string;
    }

    export interface UserGameCenterInfo {
        // Gamecenter identifier
        GameCenterId?: string;
    }

    export interface UserGoogleInfo {
        // Email address of the Google account
        GoogleEmail?: string;
        // Gender information of the Google account
        GoogleGender?: string;
        // Google ID
        GoogleId?: string;
        // Locale of the Google account
        GoogleLocale?: string;
        // Name of the Google account user
        GoogleName?: string;
    }

    export interface UserIosDeviceInfo {
        // iOS device ID
        IosDeviceId?: string;
    }

    export interface UserKongregateInfo {
        // Kongregate ID
        KongregateId?: string;
        // Kongregate Username
        KongregateName?: string;
    }

    export interface UserNintendoSwitchAccountIdInfo {
        // Nintendo Switch account subject ID
        NintendoSwitchAccountSubjectId?: string;
    }

    export interface UserNintendoSwitchDeviceIdInfo {
        // Nintendo Switch Device ID
        NintendoSwitchDeviceId?: string;
    }

    export interface UserOpenIdInfo {
        // OpenID Connection ID
        ConnectionId?: string;
        // OpenID Issuer
        Issuer?: string;
        // OpenID Subject
        Subject?: string;
    }

    type UserOrigination = "Organic"
        | "Steam"
        | "Google"
        | "Amazon"
        | "Facebook"
        | "Kongregate"
        | "GamersFirst"
        | "Unknown"
        | "IOS"
        | "LoadTest"
        | "Android"
        | "PSN"
        | "GameCenter"
        | "CustomId"
        | "XboxLive"
        | "Parse"
        | "Twitch"
        | "WindowsHello"
        | "ServerCustomId"
        | "NintendoSwitchDeviceId"
        | "FacebookInstantGamesId"
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount";

    export interface UserPrivateAccountInfo {
        // user email address
        Email?: string;
    }

    export interface UserPsnInfo {
        // PSN account ID
        PsnAccountId?: string;
        // PSN online ID
        PsnOnlineId?: string;
    }

    export interface UserSettings {
        // Boolean for whether this player is eligible for gathering device info.
        GatherDeviceInfo: boolean;
        // Boolean for whether this player should report OnFocus play-time tracking.
        GatherFocusInfo: boolean;
        // Boolean for whether this player is eligible for ad tracking.
        NeedsAttribution: boolean;
    }

    export interface UserSteamInfo {
        // what stage of game ownership the user is listed as being in, from Steam
        SteamActivationStatus?: string;
        // the country in which the player resides, from Steam data
        SteamCountry?: string;
        // currency type set in the user Steam account
        SteamCurrency?: string;
        // Steam identifier
        SteamId?: string;
        // Steam display name
        SteamName?: string;
    }

    export interface UserTitleInfo {
        // URL to the player's avatar.
        AvatarUrl?: string;
        // timestamp indicating when the user was first associated with this game (this can differ significantly from when the user
        // first registered with PlayFab)
        Created: string;
        // name of the user, as it is displayed in-game
        DisplayName?: string;
        // timestamp indicating when the user first signed into this game (this can differ from the Created timestamp, as other
        // events, such as issuing a beta key to the user, can associate the title to the user)
        FirstLogin?: string;
        // boolean indicating whether or not the user is currently banned for a title
        isBanned?: boolean;
        // timestamp for the last user login for this title
        LastLogin?: string;
        // source by which the user first joined the game, if known
        Origination?: string;
        // Title player account entity for this user
        TitlePlayerAccount?: EntityKey;
    }

    export interface UserTwitchInfo {
        // Twitch ID
        TwitchId?: string;
        // Twitch Username
        TwitchUserName?: string;
    }

    export interface UserWindowsHelloInfo {
        // Windows Hello Device Name
        WindowsHelloDeviceName?: string;
        // Windows Hello Public Key Hash
        WindowsHelloPublicKeyHash?: string;
    }

    export interface UserXboxInfo {
        // XBox user ID
        XboxUserId?: string;
    }

    export interface ValueToDateModel {
        // ISO 4217 code of the currency used in the purchases
        Currency?: string;
        // Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and
        // ninety-nine cents when Currency is 'USD')
        TotalValue: number;
        // Total value of the purchases in a string representation of decimal monetary units. For example, '9.99' indicates nine
        // dollars and ninety-nine cents when Currency is 'USD'.
        TotalValueAsDecimal?: string;
    }

    export interface Variable {
        // Name of the variable.
        Name: string;
        // Value of the variable.
        Value?: string;
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

    export interface WriteEventResponse extends PlayFabModule.IPlayFabResultCommon {
        // The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to
        // any particular format.
        EventId?: string;
    }

    export interface WriteServerCharacterEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom event properties. Each property consists of a name (string) and a value (JSON object).
        Body?: { [key: string]: any };
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
        // commonly follows the subject_verb_object pattern (e.g. player_logged_in).
        EventName: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // The time (in UTC) associated with this event. The value defaults to the current time.
        Timestamp?: string;
    }

    export interface WriteServerPlayerEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object).
        Body?: { [key: string]: any };
        // The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
        // commonly follows the subject_verb_object pattern (e.g. player_logged_in).
        EventName: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // The time (in UTC) associated with this event. The value defaults to the current time.
        Timestamp?: string;
    }

    export interface WriteTitleEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom event properties. Each property consists of a name (string) and a value (JSON object).
        Body?: { [key: string]: any };
        // The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
        // commonly follows the subject_verb_object pattern (e.g. player_logged_in).
        EventName: string;
        // The time (in UTC) associated with this event. The value defaults to the current time.
        Timestamp?: string;
    }

    export interface XboxLiveAccountPlayFabIdPair {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
        PlayFabId?: string;
        // Unique Xbox Live identifier for a user.
        XboxLiveAccountId?: string;
    }

}
