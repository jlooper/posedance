/// <reference path="../typings/PlayFab/PlayFabCloudScript.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.ExecuteEntityCloudScript = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/ExecuteEntityCloudScript",
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

exports.ExecuteFunction = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/ExecuteFunction",
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

exports.ListFunctions = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/ListFunctions",
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

exports.ListHttpFunctions = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/ListHttpFunctions",
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

exports.ListQueuedFunctions = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/ListQueuedFunctions",
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

exports.PostFunctionResultForEntityTriggeredAction = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/PostFunctionResultForEntityTriggeredAction",
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

exports.PostFunctionResultForFunctionExecution = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/PostFunctionResultForFunctionExecution",
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

exports.PostFunctionResultForPlayerTriggeredAction = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/PostFunctionResultForPlayerTriggeredAction",
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

exports.PostFunctionResultForScheduledTask = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/PostFunctionResultForScheduledTask",
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

exports.RegisterHttpFunction = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/RegisterHttpFunction",
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

exports.RegisterQueuedFunction = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/RegisterQueuedFunction",
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

exports.UnregisterFunction = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/CloudScript/UnregisterFunction",
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

