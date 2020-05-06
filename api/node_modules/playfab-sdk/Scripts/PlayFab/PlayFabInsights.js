/// <reference path="../typings/PlayFab/PlayFabInsights.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.GetDetails = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Insights/GetDetails",
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

exports.GetLimits = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Insights/GetLimits",
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

exports.GetOperationStatus = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Insights/GetOperationStatus",
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

exports.GetPendingOperations = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Insights/GetPendingOperations",
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

exports.SetPerformance = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Insights/SetPerformance",
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

exports.SetStorageRetention = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Insights/SetStorageRetention",
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

