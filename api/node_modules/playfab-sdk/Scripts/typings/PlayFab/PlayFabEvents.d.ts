declare module PlayFabEventsModule {
    export interface IPlayFabEvents {
        settings: PlayFabModule.IPlayFabSettings;
        // Write batches of entity based events to PlayStream. The namespace of the Event must start with 'com.playfab.events.'
        // https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writeevents
        WriteEvents(
            request: PlayFabEventsModels.WriteEventsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEventsModels.WriteEventsResponse> | null,
        ): void;
        // Write batches of entity based events to as Telemetry events (bypass PlayStream). The namespace must be 'custom' or start
        // with 'custom.'
        // https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writetelemetryevents
        WriteTelemetryEvents(
            request: PlayFabEventsModels.WriteEventsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEventsModels.WriteEventsResponse> | null,
        ): void;

    }
}

declare module PlayFabEventsModels {
    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
        Type?: string;
    }

    export interface EventContents {
        // Entity associated with the event. If null, the event will apply to the calling entity.
        Entity?: EntityKey;
        // The namespace in which the event is defined. Allowed namespaces can vary by API.
        EventNamespace: string;
        // The name of this event.
        Name: string;
        // The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
        // the EventId value, which is assigned when the event is received by the server.
        OriginalId?: string;
        // The time (in UTC) associated with this event when it occurred. If specified, this value is stored in the
        // OriginalTimestamp property of the PlayStream event.
        OriginalTimestamp?: string;
        // Arbitrary data associated with the event. Only one of Payload or PayloadJSON is allowed.
        Payload?: any;
        // Arbitrary data associated with the event, represented as a JSON serialized string. Only one of Payload or PayloadJSON is
        // allowed.
        PayloadJSON?: string;
    }

    export interface WriteEventsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Collection of events to write to PlayStream.
        Events: EventContents[];
    }

    export interface WriteEventsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The unique identifiers assigned by the server to the events, in the same order as the events in the request. Only
        // returned if FlushToPlayStream option is true.
        AssignedEventIds?: string[];
    }

}
