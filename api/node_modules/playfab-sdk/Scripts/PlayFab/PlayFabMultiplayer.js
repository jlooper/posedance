/// <reference path="../typings/PlayFab/PlayFabMultiplayer.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CancelAllMatchmakingTicketsForPlayer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/CancelAllMatchmakingTicketsForPlayer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CancelAllServerBackfillTicketsForPlayer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/CancelAllServerBackfillTicketsForPlayer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CancelMatchmakingTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/CancelMatchmakingTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CancelServerBackfillTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/CancelServerBackfillTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateBuildAlias = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/CreateBuildAlias",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateBuildWithCustomContainer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/CreateBuildWithCustomContainer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateBuildWithManagedContainer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/CreateBuildWithManagedContainer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateMatchmakingTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/CreateMatchmakingTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateRemoteUser = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/CreateRemoteUser",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateServerBackfillTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/CreateServerBackfillTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.CreateServerMatchmakingTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/CreateServerMatchmakingTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteAsset = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/DeleteAsset",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteBuild = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/DeleteBuild",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteBuildAlias = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/DeleteBuildAlias",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteBuildRegion = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/DeleteBuildRegion",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteCertificate = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/DeleteCertificate",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteContainerImageRepository = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/DeleteContainerImageRepository",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.DeleteRemoteUser = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/DeleteRemoteUser",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.EnableMultiplayerServersForTitle = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/EnableMultiplayerServersForTitle",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetAssetUploadUrl = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetAssetUploadUrl",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetBuild = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetBuild",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetBuildAlias = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetBuildAlias",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetContainerRegistryCredentials = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetContainerRegistryCredentials",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetMatch = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/GetMatch",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetMatchmakingTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/GetMatchmakingTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetMultiplayerServerDetails = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetMultiplayerServerDetails",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetMultiplayerServerLogs = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetMultiplayerServerLogs",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetMultiplayerSessionLogsBySessionId = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetMultiplayerSessionLogsBySessionId",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetQueueStatistics = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/GetQueueStatistics",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetRemoteLoginEndpoint = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetRemoteLoginEndpoint",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetServerBackfillTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/GetServerBackfillTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetTitleEnabledForMultiplayerServersStatus = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetTitleEnabledForMultiplayerServersStatus",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.GetTitleMultiplayerServersQuotas = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/GetTitleMultiplayerServersQuotas",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.JoinMatchmakingTicket = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/JoinMatchmakingTicket",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListArchivedMultiplayerServers = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListArchivedMultiplayerServers",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListAssetSummaries = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListAssetSummaries",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListBuildAliases = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListBuildAliases",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListBuildSummaries = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListBuildSummaries",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListCertificateSummaries = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListCertificateSummaries",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListContainerImages = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListContainerImages",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListContainerImageTags = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListContainerImageTags",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListMatchmakingTicketsForPlayer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/ListMatchmakingTicketsForPlayer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListMultiplayerServers = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListMultiplayerServers",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListPartyQosServers = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListPartyQosServers",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

/**
 * @deprecated Please use ListQosServersForTitle instead. 
 */
exports.ListQosServers = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListQosServers",
        request,
        null,
        null,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListQosServersForTitle = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListQosServersForTitle",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListServerBackfillTicketsForPlayer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Match/ListServerBackfillTicketsForPlayer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ListVirtualMachineSummaries = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ListVirtualMachineSummaries",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RequestMultiplayerServer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/RequestMultiplayerServer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.RolloverContainerRegistryCredentials = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/RolloverContainerRegistryCredentials",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ShutdownMultiplayerServer = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/ShutdownMultiplayerServer",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UntagContainerImage = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/UntagContainerImage",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateBuildAlias = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/UpdateBuildAlias",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateBuildRegion = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/UpdateBuildRegion",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UpdateBuildRegions = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/UpdateBuildRegions",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.UploadCertificate = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/MultiplayerServer/UploadCertificate",
        request,
        "X-EntityToken",
        PlayFab._internalSettings.entityToken,
        function (error, result) {
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

