/// <reference path="../typings/PlayFab/PlayFabData.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.AbortFileUploads = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/File/AbortFileUploads",
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

exports.DeleteFiles = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/File/DeleteFiles",
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

exports.FinalizeFileUploads = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/File/FinalizeFileUploads",
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

exports.GetFiles = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/File/GetFiles",
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

exports.GetObjects = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Object/GetObjects",
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

exports.InitiateFileUploads = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/File/InitiateFileUploads",
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

exports.SetObjects = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Object/SetObjects",
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

