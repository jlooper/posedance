/// <reference path="../typings/PlayFab/PlayFabServer.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.AddCharacterVirtualCurrency = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AddCharacterVirtualCurrency",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.AddFriend = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AddFriend",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.AddGenericID = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AddGenericID",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.AddPlayerTag = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AddPlayerTag",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.AddSharedGroupMembers = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AddSharedGroupMembers",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.AddUserVirtualCurrency = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AddUserVirtualCurrency",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.AuthenticateSessionTicket = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AuthenticateSessionTicket",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.AwardSteamAchievement = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/AwardSteamAchievement",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.BanUsers = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/BanUsers",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ConsumeItem = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/ConsumeItem",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateSharedGroup = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/CreateSharedGroup",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteCharacterFromUser = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/DeleteCharacterFromUser",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeletePlayer = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/DeletePlayer",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeletePushNotificationTemplate = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/DeletePushNotificationTemplate",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteSharedGroup = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/DeleteSharedGroup",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeregisterGame = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/DeregisterGame",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.EvaluateRandomResultTable = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/EvaluateRandomResultTable",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ExecuteCloudScript = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/ExecuteCloudScript",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetAllSegments = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetAllSegments",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetAllUsersCharacters = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetAllUsersCharacters",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCatalogItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetCatalogItems",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCharacterData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetCharacterData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCharacterInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetCharacterInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCharacterInventory = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetCharacterInventory",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCharacterLeaderboard = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetCharacterLeaderboard",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCharacterReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetCharacterReadOnlyData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetCharacterStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetCharacterStatistics",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetContentDownloadUrl = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetContentDownloadUrl",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetFriendLeaderboard = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetFriendLeaderboard",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetFriendsList = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetFriendsList",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetLeaderboard = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetLeaderboard",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetLeaderboardAroundCharacter = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetLeaderboardAroundCharacter",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetLeaderboardAroundUser = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetLeaderboardAroundUser",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetLeaderboardForUserCharacters = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetLeaderboardForUserCharacters",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayerCombinedInfo = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayerCombinedInfo",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayerProfile = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayerProfile",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayerSegments = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayerSegments",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayersInSegment = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayersInSegment",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayerStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayerStatistics",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayerStatisticVersions = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayerStatisticVersions",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayerTags = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayerTags",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayFabIDsFromFacebookIDs = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayFabIDsFromFacebookIDs",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayFabIDsFromFacebookInstantGamesIds = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayFabIDsFromFacebookInstantGamesIds",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayFabIDsFromGenericIDs = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayFabIDsFromGenericIDs",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayFabIDsFromNintendoSwitchDeviceIds = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayFabIDsFromNintendoSwitchDeviceIds",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayFabIDsFromPSNAccountIDs = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayFabIDsFromPSNAccountIDs",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayFabIDsFromSteamIDs = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayFabIDsFromSteamIDs",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPlayFabIDsFromXboxLiveIDs = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPlayFabIDsFromXboxLiveIDs",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetPublisherData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetRandomResultTables = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetRandomResultTables",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetServerCustomIDsFromPlayFabIDs = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetServerCustomIDsFromPlayFabIDs",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetSharedGroupData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetSharedGroupData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetStoreItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetStoreItems",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetTime = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetTime",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetTitleData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetTitleData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetTitleInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetTitleInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetTitleNews = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetTitleNews",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserAccountInfo = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserAccountInfo",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserBans = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserBans",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserInventory = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserInventory",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserPublisherData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserPublisherInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserPublisherInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserPublisherReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserPublisherReadOnlyData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetUserReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GetUserReadOnlyData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GrantCharacterToUser = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GrantCharacterToUser",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GrantItemsToCharacter = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GrantItemsToCharacter",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GrantItemsToUser = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GrantItemsToUser",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GrantItemsToUsers = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/GrantItemsToUsers",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.LinkPSNAccount = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/LinkPSNAccount",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.LinkServerCustomId = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/LinkServerCustomId",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.LinkXboxAccount = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/LinkXboxAccount",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.LoginWithServerCustomId = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/LoginWithServerCustomId",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.LoginWithXbox = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/LoginWithXbox",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.LoginWithXboxId = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/LoginWithXboxId",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ModifyItemUses = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/ModifyItemUses",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.MoveItemToCharacterFromCharacter = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/MoveItemToCharacterFromCharacter",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.MoveItemToCharacterFromUser = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/MoveItemToCharacterFromUser",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.MoveItemToUserFromCharacter = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/MoveItemToUserFromCharacter",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.NotifyMatchmakerPlayerLeft = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/NotifyMatchmakerPlayerLeft",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RedeemCoupon = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RedeemCoupon",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RedeemMatchmakerTicket = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RedeemMatchmakerTicket",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RefreshGameServerInstanceHeartbeat = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RefreshGameServerInstanceHeartbeat",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RegisterGame = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RegisterGame",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RemoveFriend = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RemoveFriend",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RemoveGenericID = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RemoveGenericID",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RemovePlayerTag = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RemovePlayerTag",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RemoveSharedGroupMembers = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RemoveSharedGroupMembers",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ReportPlayer = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/ReportPlayer",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RevokeAllBansForUser = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RevokeAllBansForUser",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RevokeBans = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RevokeBans",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RevokeInventoryItem = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RevokeInventoryItem",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RevokeInventoryItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/RevokeInventoryItems",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SavePushNotificationTemplate = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SavePushNotificationTemplate",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SendCustomAccountRecoveryEmail = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SendCustomAccountRecoveryEmail",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SendEmailFromTemplate = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SendEmailFromTemplate",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SendPushNotification = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SendPushNotification",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SendPushNotificationFromTemplate = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SendPushNotificationFromTemplate",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetFriendTags = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetFriendTags",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetGameServerInstanceData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetGameServerInstanceData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetGameServerInstanceState = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetGameServerInstanceState",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetGameServerInstanceTags = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetGameServerInstanceTags",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetPlayerSecret = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetPlayerSecret",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetPublisherData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetTitleData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetTitleData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SetTitleInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SetTitleInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SubtractCharacterVirtualCurrency = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SubtractCharacterVirtualCurrency",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.SubtractUserVirtualCurrency = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/SubtractUserVirtualCurrency",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UnlinkPSNAccount = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UnlinkPSNAccount",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UnlinkServerCustomId = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UnlinkServerCustomId",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UnlinkXboxAccount = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UnlinkXboxAccount",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UnlockContainerInstance = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UnlockContainerInstance",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UnlockContainerItem = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UnlockContainerItem",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateAvatarUrl = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateAvatarUrl",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateBans = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateBans",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateCharacterData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateCharacterData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateCharacterInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateCharacterInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateCharacterReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateCharacterReadOnlyData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateCharacterStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateCharacterStatistics",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdatePlayerStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdatePlayerStatistics",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateSharedGroupData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateSharedGroupData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateUserData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateUserData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateUserInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateUserInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateUserInventoryItemCustomData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateUserInventoryItemCustomData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateUserPublisherData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateUserPublisherData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateUserPublisherInternalData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateUserPublisherInternalData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateUserPublisherReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateUserPublisherReadOnlyData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateUserReadOnlyData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/UpdateUserReadOnlyData",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.WriteCharacterEvent = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/WriteCharacterEvent",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.WritePlayerEvent = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/WritePlayerEvent",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.WriteTitleEvent = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Server/WriteTitleEvent",
        request,
        "X-SecretKey",
        PlayFab.settings.developerSecretKey,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

