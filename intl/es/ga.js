// Google Analytics functionality

document.addEventListener('DOMContentLoaded', function(event) {
    var timestamp = Date.now();

    logWindowLoad(timestamp);
    logWindowEvents(timestamp);
});

function logWindowLoad(onLoadTimestamp) {
    const EVENT_NAME = 'Window Loaded Timestamp';

    dataLayer.push({
        event: EVENT_NAME,
        windowLoadTimestamp: onLoadTimestamp
    });
}

function logWindowEvents(onLoadTimestamp) {
    const EVENT_NAME = 'Window Focus';

    // When consuming this array, know that onblur/onfocus can sometimes be
    // called several times in a row.
    var focusEvents = [];

    var onBlur = function() {
        focusEvents.push({ onBlur: Date.now() });
        dataLayer.push({
            // prevents weird merging behavior. Kinda messy...
            event: EVENT_NAME + ' Reset',
            focusEvents: undefined
        });
        dataLayer.push({
            event: EVENT_NAME,
            focusEvents: focusEvents
        });
    };

    var onFocus = function() {
        focusEvents.push({ onFocus: Date.now() });
        dataLayer.push({
            // prevents weird merging behavior. Kinda messy...
            event: EVENT_NAME + ' Reset',
            focusEvents: undefined
        });
        dataLayer.push({
            event: EVENT_NAME,
            focusEvents: focusEvents
        });
    };

    // teardown
    var removeListeners = function() {
        window.removeEventListener('blur', onBlur, true);
        window.removeEventListener('focus', onFocus, true);
        window.removeEventListener('beforeunload', removeListeners, true);
    };

    // attach listeners
    window.addEventListener('blur', onBlur, true);
    window.addEventListener('focus', onFocus, true);
    window.addEventListener('beforeunload', removeListeners, true);

    // trigger the inital focus
    onFocus();
}
