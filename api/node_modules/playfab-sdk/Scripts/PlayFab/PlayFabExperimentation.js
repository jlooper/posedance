/// <reference path="../typings/PlayFab/PlayFabExperimentation.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CreateExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/CreateExperiment",
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

exports.DeleteExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/DeleteExperiment",
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

exports.GetExperiments = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetExperiments",
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

exports.GetLatestScorecard = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetLatestScorecard",
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

exports.GetTreatmentAssignment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/GetTreatmentAssignment",
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

exports.StartExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/StartExperiment",
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

exports.StopExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/StopExperiment",
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

exports.UpdateExperiment = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Experimentation/UpdateExperiment",
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

