# NodeSDK README


## 1. Overview:

Playfab SDK for node.js applications

This SDK includes all PlayFab APIs (Client, Server, Admin) in a single javascript file suitable for using in node.js.


## 2. Prerequisites:

* Users should be very familiar with the topics covered in our [getting started guide](https://playfab.com/docs/getting-started-with-playfab/).

To connect to the PlayFab service, your machine must be running TLS v1.2 or better.
* For Windows, this means Windows 7 and above
* [Official Microsoft Documentation](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380516%28v=vs.85%29.aspx)
* [Support for SSL/TLS protocols on Windows](http://blogs.msdn.com/b/kaushal/archive/2011/10/02/support-for-ssl-tls-protocols-on-windows.aspx)


## 3. Installation:

The following console command will install the PlayFab NodeSDK.  It requires that you have correctly [installed node](https://nodejs.org/en/download/).

```
npm install playfab-sdk
```

3b. Example testing project:
----

The following console command will install the PlayFab NodeSDK example automated-testing project.  It requires that you have correctly [installed node](https://nodejs.org/en/download/).

```
npm install playfab-testing
```

To run the test, you need to create a testTitleData.json file, explained below.  You can place that file in the root of the example beside PlayFabApiTests.ts, or set the full-path location in an environment variable:

```
set PF_TEST_TITLE_DATA_JSON="C:/YOUR_PATH/testTitleData.json";
```

Replace "C:/YOUR_PATH" with the location of your testTitleData.json file.


## 4. testTitleData.json file required for example unit-test-project

This sdk includes an optional example project that is used by PlayFab to verify sdk features are fully functional.

Please read about the testTitleData.json format, and purpose here:
* https://github.com/PlayFab/SDKGenerator/blob/master/JenkinsConsoleUtility/testTitleData.md
See the previous section for how to use this file in the example test project.


## 5. Usage Instructions:

Please read our [Node Getting Started Guide](NodeGettingStarted.md) for step by step instructions on how to set up a Node environment using our PlayFab NodeSDK.

Below an older guide with less detail:

```javascript
var PlayFabClient = require('./Scripts/PlayFab/PlayFabClient.js')

PlayFabClient.settings.titleId = "F00";

PlayFabClient.GetTitleData({Keys : ["Sample"]}, function(error, result)
{
    if(error)
    {
        console.log("Got an error: ",error);
        return;
    }

    console.log("Reply: ",result);
});
```

Use similar steps to gain access to the PlayFabServer, PlayFabAdmin, and PlayFabMatchmaker APIs.  Additionally, you will need to set your developerSecretKey.  For security reasons you must never expose this value to players.

```
PlayFabClient.settings.developerSecretKey = "your secret key";
```

You can find your titleId and developerSecretKey in the Game Manager -> Settings -> Credentials section for your title: https://developer.playfab.com/en-us/studios


## 6. Troubleshooting:

For a complete list of available APIs, check out the [online documentation](http://api.playfab.com/Documentation/).

#### Contact Us
We love to hear from our developer community!
Do you have ideas on how we can make our products and services better?

Our Developer Success Team can assist with answering any questions as well as process any feedback you have about PlayFab services.

[Forums, Support and Knowledge Base](https://community.playfab.com/index.html)


## 7. Copyright and Licensing Information:

  Apache License --
  Version 2.0, January 2004
  http://www.apache.org/licenses/

  Full details available within the LICENSE file.

