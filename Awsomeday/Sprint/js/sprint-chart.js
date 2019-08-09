$( window ).on( "load", function() {
          if (!_config.api.invokeUrl) {
            $('#noApiMessage').show();
        }
    });