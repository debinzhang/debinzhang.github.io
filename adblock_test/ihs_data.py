page = {
  "url": "/files/adblock_beer_whitelist_domain_frames/index.html",
  "compare": "exact",
  "subresources": [
    {
      "resource": {
        "url": "/files/adblock_beer_whitelist_domain_frames/index.html",
      },
      "response": {
        "adBlockFilterId": 1,
        "responseHeaders": lambda actual_value, beer_jobj, sub:
          "Status Line: HTTP/1.0 200 OK" in actual_value
      }
    },
    {
      "resource": {
        "url": "/files/adblock_beer_whitelist_domain_frames/myscript.js",
      },
      "response": {
        "responseHeaders": lambda actual_value, beer_jobj, sub:
          "Status Line: HTTP/1.0 200 OK" in actual_value
      }
    },
    {
      "resource": {
        "url": "/files/adblock_beer_whitelist_domain_frames/pic.png",
      },
      "response": {
        "responseHeaders": lambda actual_value, beer_jobj, sub:
          "Status Line: HTTP/1.0 200 OK" in actual_value
      }
    },
    {
      "resource": {
        "url": "/files/adblock_beer_whitelist_domain_frames/frame.html",
      },
    },
    {
      "resource": {
        "url": "/files/adblock_beer_whitelist_domain_frames/frame1.html",
      },
    }
  ]
}

