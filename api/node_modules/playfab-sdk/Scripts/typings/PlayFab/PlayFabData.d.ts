declare module PlayFabDataModule {
    export interface IPlayFabData {
        settings: PlayFabModule.IPlayFabSettings;
        // Abort pending file uploads to an entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/data/file/abortfileuploads
        AbortFileUploads(
            request: PlayFabDataModels.AbortFileUploadsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabDataModels.AbortFileUploadsResponse> | null,
        ): void;
        // Delete files on an entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/data/file/deletefiles
        DeleteFiles(
            request: PlayFabDataModels.DeleteFilesRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabDataModels.DeleteFilesResponse> | null,
        ): void;
        // Finalize file uploads to an entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/data/file/finalizefileuploads
        FinalizeFileUploads(
            request: PlayFabDataModels.FinalizeFileUploadsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabDataModels.FinalizeFileUploadsResponse> | null,
        ): void;
        // Retrieves file metadata from an entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/data/file/getfiles
        GetFiles(
            request: PlayFabDataModels.GetFilesRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabDataModels.GetFilesResponse> | null,
        ): void;
        // Retrieves objects from an entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/data/object/getobjects
        GetObjects(
            request: PlayFabDataModels.GetObjectsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabDataModels.GetObjectsResponse> | null,
        ): void;
        // Initiates file uploads to an entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/data/file/initiatefileuploads
        InitiateFileUploads(
            request: PlayFabDataModels.InitiateFileUploadsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabDataModels.InitiateFileUploadsResponse> | null,
        ): void;
        // Sets objects on an entity's profile.
        // https://docs.microsoft.com/rest/api/playfab/data/object/setobjects
        SetObjects(
            request: PlayFabDataModels.SetObjectsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabDataModels.SetObjectsResponse> | null,
        ): void;

    }
}

declare module PlayFabDataModels {
    export interface AbortFileUploadsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
        // Names of the files to have their pending uploads aborted.
        FileNames: string[];
        // The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
        // be performed.
        ProfileVersion?: number;
    }

    export interface AbortFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
    }

    export interface DeleteFilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
        // Names of the files to be deleted.
        FileNames: string[];
        // The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
        // be performed.
        ProfileVersion?: number;
    }

    export interface DeleteFilesResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
    }

    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
        Type?: string;
    }

    export interface FinalizeFileUploadsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
        // Names of the files to be finalized. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'
        FileNames: string[];
    }

    export interface FinalizeFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // Collection of metadata for the entity's files
        Metadata?: { [key: string]: GetFileMetadata };
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
    }

    export interface GetFileMetadata {
        // Checksum value for the file
        Checksum?: string;
        // Download URL where the file can be retrieved
        DownloadUrl?: string;
        // Name of the file
        FileName?: string;
        // Last UTC time the file was modified
        LastModified: string;
        // Storage service's reported byte count
        Size: number;
    }

    export interface GetFilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
    }

    export interface GetFilesResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // Collection of metadata for the entity's files
        Metadata?: { [key: string]: GetFileMetadata };
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
    }

    export interface GetObjectsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
        // Determines whether the object will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON
        // object.
        EscapeObject?: boolean;
    }

    export interface GetObjectsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // Requested objects that the calling entity has access to
        Objects?: { [key: string]: ObjectResult };
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
    }

    export interface InitiateFileUploadMetadata {
        // Name of the file.
        FileName?: string;
        // Location the data should be sent to via an HTTP PUT operation.
        UploadUrl?: string;
    }

    export interface InitiateFileUploadsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
        // Names of the files to be set. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'
        FileNames: string[];
        // The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
        // be performed.
        ProfileVersion?: number;
    }

    export interface InitiateFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
        // Collection of file names and upload urls
        UploadDetails?: InitiateFileUploadMetadata[];
    }

    export interface ObjectResult {
        // Un-escaped JSON object, if EscapeObject false or default.
        DataObject?: any;
        // Escaped string JSON body of the object, if EscapeObject is true.
        EscapedDataObject?: string;
        // Name of the object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'
        ObjectName?: string;
    }

    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    export interface SetObject {
        // Body of the object to be saved. If empty and DeleteObject is true object will be deleted if it exists, or no operation
        // will occur if it does not exist. Only one of Object or EscapedDataObject fields may be used.
        DataObject?: any;
        // Flag to indicate that this object should be deleted. Both DataObject and EscapedDataObject must not be set as well.
        DeleteObject?: boolean;
        // Body of the object to be saved as an escaped JSON string. If empty and DeleteObject is true object will be deleted if it
        // exists, or no operation will occur if it does not exist. Only one of DataObject or EscapedDataObject fields may be used.
        EscapedDataObject?: string;
        // Name of object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'.
        ObjectName: string;
    }

    export interface SetObjectInfo {
        // Name of the object
        ObjectName?: string;
        // Optional reason to explain why the operation was the result that it was.
        OperationReason?: string;
        // Indicates which operation was completed, either Created, Updated, Deleted or None.
        SetResult?: string;
    }

    export interface SetObjectsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The entity to perform this action on.
        Entity: EntityKey;
        // Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from
        // GetProfile API, you can ensure that the object set will only be performed if the profile has not been updated by any
        // other clients since the version you last loaded.
        ExpectedProfileVersion?: number;
        // Collection of objects to set on the profile.
        Objects: SetObject[];
    }

    export interface SetObjectsResponse extends PlayFabModule.IPlayFabResultCommon {
        // New version of the entity profile.
        ProfileVersion: number;
        // New version of the entity profile.
        SetResults?: SetObjectInfo[];
    }

}
