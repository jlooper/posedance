/// <reference path="../typings/PlayFab/PlayFabEvents.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.WriteEvents = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/WriteEvents",
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

exports.WriteTelemetryEvents = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Event/WriteTelemetryEvents",
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

