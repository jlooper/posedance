/// <reference path="../typings/PlayFab/PlayFabAdmin.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.AbortTaskInstance = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/AbortTaskInstance",
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

exports.AddLocalizedNews = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/AddLocalizedNews",
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

exports.AddNews = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/AddNews",
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
        PlayFab.GetServerUrl() + "/Admin/AddPlayerTag",
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

exports.AddServerBuild = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/AddServerBuild",
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
        PlayFab.GetServerUrl() + "/Admin/AddUserVirtualCurrency",
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

exports.AddVirtualCurrencyTypes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/AddVirtualCurrencyTypes",
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
        PlayFab.GetServerUrl() + "/Admin/BanUsers",
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

exports.CheckLimitedEditionItemAvailability = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/CheckLimitedEditionItemAvailability",
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

exports.CreateActionsOnPlayersInSegmentTask = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/CreateActionsOnPlayersInSegmentTask",
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

exports.CreateCloudScriptTask = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/CreateCloudScriptTask",
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

exports.CreateInsightsScheduledScalingTask = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/CreateInsightsScheduledScalingTask",
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

exports.CreateOpenIdConnection = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/CreateOpenIdConnection",
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

exports.CreatePlayerSharedSecret = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/CreatePlayerSharedSecret",
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

exports.CreatePlayerStatisticDefinition = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/CreatePlayerStatisticDefinition",
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

exports.DeleteContent = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/DeleteContent",
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

exports.DeleteMasterPlayerAccount = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/DeleteMasterPlayerAccount",
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

exports.DeleteOpenIdConnection = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/DeleteOpenIdConnection",
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
        PlayFab.GetServerUrl() + "/Admin/DeletePlayer",
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

exports.DeletePlayerSharedSecret = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/DeletePlayerSharedSecret",
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

exports.DeleteStore = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/DeleteStore",
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

exports.DeleteTask = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/DeleteTask",
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

exports.DeleteTitle = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/DeleteTitle",
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

exports.ExportMasterPlayerData = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ExportMasterPlayerData",
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

exports.GetActionsOnPlayersInSegmentTaskInstance = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetActionsOnPlayersInSegmentTaskInstance",
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
        PlayFab.GetServerUrl() + "/Admin/GetAllSegments",
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
        PlayFab.GetServerUrl() + "/Admin/GetCatalogItems",
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

exports.GetCloudScriptRevision = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetCloudScriptRevision",
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

exports.GetCloudScriptTaskInstance = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetCloudScriptTaskInstance",
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

exports.GetCloudScriptVersions = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetCloudScriptVersions",
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

exports.GetContentList = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetContentList",
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

exports.GetContentUploadUrl = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetContentUploadUrl",
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

exports.GetDataReport = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetDataReport",
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

exports.GetMatchmakerGameInfo = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetMatchmakerGameInfo",
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

exports.GetMatchmakerGameModes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetMatchmakerGameModes",
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

exports.GetPlayedTitleList = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetPlayedTitleList",
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

exports.GetPlayerIdFromAuthToken = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetPlayerIdFromAuthToken",
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
        PlayFab.GetServerUrl() + "/Admin/GetPlayerProfile",
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
        PlayFab.GetServerUrl() + "/Admin/GetPlayerSegments",
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

exports.GetPlayerSharedSecrets = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetPlayerSharedSecrets",
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
        PlayFab.GetServerUrl() + "/Admin/GetPlayersInSegment",
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

exports.GetPlayerStatisticDefinitions = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetPlayerStatisticDefinitions",
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
        PlayFab.GetServerUrl() + "/Admin/GetPlayerStatisticVersions",
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
        PlayFab.GetServerUrl() + "/Admin/GetPlayerTags",
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

exports.GetPolicy = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetPolicy",
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
        PlayFab.GetServerUrl() + "/Admin/GetPublisherData",
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
        PlayFab.GetServerUrl() + "/Admin/GetRandomResultTables",
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

exports.GetServerBuildInfo = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetServerBuildInfo",
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

exports.GetServerBuildUploadUrl = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetServerBuildUploadUrl",
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
        PlayFab.GetServerUrl() + "/Admin/GetStoreItems",
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

exports.GetTaskInstances = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetTaskInstances",
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

exports.GetTasks = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/GetTasks",
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
        PlayFab.GetServerUrl() + "/Admin/GetTitleData",
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
        PlayFab.GetServerUrl() + "/Admin/GetTitleInternalData",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserAccountInfo",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserBans",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserData",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserInternalData",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserInventory",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserPublisherData",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserPublisherInternalData",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserPublisherReadOnlyData",
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
        PlayFab.GetServerUrl() + "/Admin/GetUserReadOnlyData",
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
        PlayFab.GetServerUrl() + "/Admin/GrantItemsToUsers",
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

exports.IncrementLimitedEditionItemAvailability = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/IncrementLimitedEditionItemAvailability",
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

exports.IncrementPlayerStatisticVersion = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/IncrementPlayerStatisticVersion",
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

exports.ListOpenIdConnection = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ListOpenIdConnection",
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

exports.ListServerBuilds = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ListServerBuilds",
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

exports.ListVirtualCurrencyTypes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ListVirtualCurrencyTypes",
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

exports.ModifyMatchmakerGameModes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ModifyMatchmakerGameModes",
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

exports.ModifyServerBuild = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ModifyServerBuild",
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

exports.RefundPurchase = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/RefundPurchase",
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
        PlayFab.GetServerUrl() + "/Admin/RemovePlayerTag",
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

exports.RemoveServerBuild = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/RemoveServerBuild",
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

exports.RemoveVirtualCurrencyTypes = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/RemoveVirtualCurrencyTypes",
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

exports.ResetCharacterStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ResetCharacterStatistics",
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

exports.ResetPassword = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ResetPassword",
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

exports.ResetUserStatistics = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ResetUserStatistics",
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

exports.ResolvePurchaseDispute = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/ResolvePurchaseDispute",
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
        PlayFab.GetServerUrl() + "/Admin/RevokeAllBansForUser",
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
        PlayFab.GetServerUrl() + "/Admin/RevokeBans",
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
        PlayFab.GetServerUrl() + "/Admin/RevokeInventoryItem",
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
        PlayFab.GetServerUrl() + "/Admin/RevokeInventoryItems",
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

exports.RunTask = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/RunTask",
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

exports.SendAccountRecoveryEmail = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/SendAccountRecoveryEmail",
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

exports.SetCatalogItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/SetCatalogItems",
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
        PlayFab.GetServerUrl() + "/Admin/SetPlayerSecret",
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

exports.SetPublishedRevision = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/SetPublishedRevision",
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
        PlayFab.GetServerUrl() + "/Admin/SetPublisherData",
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

exports.SetStoreItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/SetStoreItems",
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
        PlayFab.GetServerUrl() + "/Admin/SetTitleData",
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
        PlayFab.GetServerUrl() + "/Admin/SetTitleInternalData",
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

exports.SetupPushNotification = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/SetupPushNotification",
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
        PlayFab.GetServerUrl() + "/Admin/SubtractUserVirtualCurrency",
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
        PlayFab.GetServerUrl() + "/Admin/UpdateBans",
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

exports.UpdateCatalogItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdateCatalogItems",
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

exports.UpdateCloudScript = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdateCloudScript",
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

exports.UpdateOpenIdConnection = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdateOpenIdConnection",
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

exports.UpdatePlayerSharedSecret = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdatePlayerSharedSecret",
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

exports.UpdatePlayerStatisticDefinition = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdatePlayerStatisticDefinition",
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

exports.UpdatePolicy = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdatePolicy",
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

exports.UpdateRandomResultTables = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdateRandomResultTables",
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

exports.UpdateStoreItems = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdateStoreItems",
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

exports.UpdateTask = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdateTask",
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
        PlayFab.GetServerUrl() + "/Admin/UpdateUserData",
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
        PlayFab.GetServerUrl() + "/Admin/UpdateUserInternalData",
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
        PlayFab.GetServerUrl() + "/Admin/UpdateUserPublisherData",
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
        PlayFab.GetServerUrl() + "/Admin/UpdateUserPublisherInternalData",
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
        PlayFab.GetServerUrl() + "/Admin/UpdateUserPublisherReadOnlyData",
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
        PlayFab.GetServerUrl() + "/Admin/UpdateUserReadOnlyData",
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

exports.UpdateUserTitleDisplayName = function (request, callback) {
    if (PlayFab.settings.developerSecretKey == null) {
        throw "Must have PlayFab.settings.DeveloperSecretKey set to call this method";
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Admin/UpdateUserTitleDisplayName",
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

