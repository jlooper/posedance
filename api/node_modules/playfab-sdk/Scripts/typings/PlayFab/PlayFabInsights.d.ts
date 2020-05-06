declare module PlayFabInsightsModule {
    export interface IPlayFabInsights {
        settings: PlayFabModule.IPlayFabSettings;
        // Gets the current values for the Insights performance and data storage retention, list of pending operations, and the
        // performance and data storage retention limits.
        // https://docs.microsoft.com/rest/api/playfab/insights/analytics/getdetails
        GetDetails(
            request: PlayFabInsightsModels.InsightsEmptyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabInsightsModels.InsightsGetDetailsResponse> | null,
        ): void;
        // Retrieves the range of allowed values for performance and data storage retention values as well as the submeter details
        // for each performance level.
        // https://docs.microsoft.com/rest/api/playfab/insights/analytics/getlimits
        GetLimits(
            request: PlayFabInsightsModels.InsightsEmptyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabInsightsModels.InsightsGetLimitsResponse> | null,
        ): void;
        // Gets the status of a SetPerformance or SetStorageRetention operation.
        // https://docs.microsoft.com/rest/api/playfab/insights/analytics/getoperationstatus
        GetOperationStatus(
            request: PlayFabInsightsModels.InsightsGetOperationStatusRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabInsightsModels.InsightsGetOperationStatusResponse> | null,
        ): void;
        // Gets a list of pending SetPerformance and/or SetStorageRetention operations for the title.
        // https://docs.microsoft.com/rest/api/playfab/insights/analytics/getpendingoperations
        GetPendingOperations(
            request: PlayFabInsightsModels.InsightsGetPendingOperationsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabInsightsModels.InsightsGetPendingOperationsResponse> | null,
        ): void;
        // Sets the Insights performance level value for the title.
        // https://docs.microsoft.com/rest/api/playfab/insights/analytics/setperformance
        SetPerformance(
            request: PlayFabInsightsModels.InsightsSetPerformanceRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabInsightsModels.InsightsOperationResponse> | null,
        ): void;
        // Sets the Insights data storage retention days value for the title.
        // https://docs.microsoft.com/rest/api/playfab/insights/analytics/setstorageretention
        SetStorageRetention(
            request: PlayFabInsightsModels.InsightsSetStorageRetentionRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabInsightsModels.InsightsOperationResponse> | null,
        ): void;

    }
}

declare module PlayFabInsightsModels {
    export interface InsightsEmptyRequest extends PlayFabModule.IPlayFabRequestCommon {}

    export interface InsightsGetDetailsResponse extends PlayFabModule.IPlayFabResultCommon {
        // Amount of data (in MB) currently used by Insights.
        DataUsageMb: number;
        // Details of any error that occurred while retrieving Insights details.
        ErrorMessage?: string;
        // Allowed range of values for performance level and data storage retention.
        Limits?: InsightsGetLimitsResponse;
        // List of pending Insights operations for the title.
        PendingOperations?: InsightsGetOperationStatusResponse[];
        // Current Insights performance level setting.
        PerformanceLevel: number;
        // Current Insights data storage retention value in days.
        RetentionDays: number;
    }

    export interface InsightsGetLimitsResponse extends PlayFabModule.IPlayFabResultCommon {
        // Default Insights performance level.
        DefaultPerformanceLevel: number;
        // Default Insights data storage retention days.
        DefaultStorageRetentionDays: number;
        // Maximum allowed data storage retention days.
        StorageMaxRetentionDays: number;
        // Minimum allowed data storage retention days.
        StorageMinRetentionDays: number;
        // List of Insights submeter limits for the allowed performance levels.
        SubMeters?: InsightsPerformanceLevel[];
    }

    export interface InsightsGetOperationStatusRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Id of the Insights operation.
        OperationId?: string;
    }

    export interface InsightsGetOperationStatusResponse extends PlayFabModule.IPlayFabResultCommon {
        // Optional message related to the operation details.
        Message?: string;
        // Time the operation was completed.
        OperationCompletedTime: string;
        // Id of the Insights operation.
        OperationId?: string;
        // Time the operation status was last updated.
        OperationLastUpdated: string;
        // Time the operation started.
        OperationStartedTime: string;
        // The type of operation, SetPerformance or SetStorageRetention.
        OperationType?: string;
        // The value requested for the operation.
        OperationValue: number;
        // Current status of the operation.
        Status?: string;
    }

    export interface InsightsGetPendingOperationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The type of pending operations requested, or blank for all operation types.
        OperationType?: string;
    }

    export interface InsightsGetPendingOperationsResponse extends PlayFabModule.IPlayFabResultCommon {
        // List of pending Insights operations.
        PendingOperations?: InsightsGetOperationStatusResponse[];
    }

    export interface InsightsOperationResponse extends PlayFabModule.IPlayFabResultCommon {
        // Optional message related to the operation details.
        Message?: string;
        // Id of the Insights operation.
        OperationId?: string;
        // The type of operation, SetPerformance or SetStorageRetention.
        OperationType?: string;
    }

    export interface InsightsPerformanceLevel {
        // Number of allowed active event exports.
        ActiveEventExports: number;
        // Maximum cache size.
        CacheSizeMB: number;
        // Maximum number of concurrent queries.
        Concurrency: number;
        // Number of Insights credits consumed per minute.
        CreditsPerMinute: number;
        // Maximum events per second.
        EventsPerSecond: number;
        // Performance level.
        Level: number;
        // Maximum amount of memory allowed per query.
        MaxMemoryPerQueryMB: number;
        // Amount of compute power allocated for queries and operations.
        VirtualCpuCores: number;
    }

    export interface InsightsSetPerformanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The Insights performance level to apply to the title.
        PerformanceLevel: number;
    }

    export interface InsightsSetStorageRetentionRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The Insights data storage retention value (in days) to apply to the title.
        RetentionDays: number;
    }

}
