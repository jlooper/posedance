/// <reference path="../typings/PlayFab/PlayFabProfiles.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.GetGlobalPolicy = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Profile/GetGlobalPolicy",
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

exports.GetProfile = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Profile/GetProfile",
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

exports.GetProfiles = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Profile/GetProfiles",
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

exports.GetTitlePlayersFromMasterPlayerAccountIds = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Profile/GetTitlePlayersFromMasterPlayerAccountIds",
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

exports.SetGlobalPolicy = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Profile/SetGlobalPolicy",
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

exports.SetProfileLanguage = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Profile/SetProfileLanguage",
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

exports.SetProfilePolicy = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Profile/SetProfilePolicy",
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

