/// <reference path="../typings/PlayFab/PlayFabGroups.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.AcceptGroupApplication = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/AcceptGroupApplication",
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

exports.AcceptGroupInvitation = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/AcceptGroupInvitation",
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

exports.AddMembers = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/AddMembers",
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

exports.ApplyToGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ApplyToGroup",
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

exports.BlockEntity = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/BlockEntity",
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

exports.ChangeMemberRole = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ChangeMemberRole",
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

exports.CreateGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/CreateGroup",
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

exports.CreateRole = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/CreateRole",
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

exports.DeleteGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/DeleteGroup",
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

exports.DeleteRole = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/DeleteRole",
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

exports.GetGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/GetGroup",
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

exports.InviteToGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/InviteToGroup",
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

exports.IsMember = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/IsMember",
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

exports.ListGroupApplications = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ListGroupApplications",
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

exports.ListGroupBlocks = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ListGroupBlocks",
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

exports.ListGroupInvitations = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ListGroupInvitations",
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

exports.ListGroupMembers = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ListGroupMembers",
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

exports.ListMembership = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ListMembership",
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

exports.ListMembershipOpportunities = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/ListMembershipOpportunities",
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

exports.RemoveGroupApplication = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/RemoveGroupApplication",
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

exports.RemoveGroupInvitation = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/RemoveGroupInvitation",
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

exports.RemoveMembers = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/RemoveMembers",
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

exports.UnblockEntity = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/UnblockEntity",
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

exports.UpdateGroup = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/UpdateGroup",
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

exports.UpdateRole = function (request, callback) {
    PlayFab.MakeRequest(
        PlayFab.GetServerUrl() + "/Group/UpdateRole",
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

