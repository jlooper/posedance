/// <reference path="../typings/PlayFab/PlayFabAuthentication.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.GetEntityToken = function (request, callback) {
    var authKey = "";
    var authValue = "";
    if (PlayFab._internalSettings.sessionTicket) {
        authKey = "X-Authorization";
        authValue = PlayFab._internalSettings.sessionTicket;
    } else if (PlayFab.settings.developerSecretKey) {
        authKey = "X-SecretKey";
        authValue = PlayFab.settings.developerSecretKey;
    } else if (PlayFab._internalSettings.entityToken) {
        authKey = "X-EntityToken";
        authValue = PlayFab._internalSettings.entityToken;
    }
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Authentication/GetEntityToken",
        request,
        authKey,
        authValue,
        function (error, result) {
            if (result != null && result.data != null) {
                PlayFab._internalSettings.entityToken = result.data.hasOwnProperty("EntityToken") ? result.data.EntityToken : PlayFab._internalSettings.entityToken;
            }
            if (callback != null) {
                callback(error, result);
            }
        },
    );
};

exports.ValidateEntityToken = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Authentication/ValidateEntityToken",
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

