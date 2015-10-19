# PostfixCalculatorTDD


## Configure system and environment variables for the Eclipse Gradle App Engine plugin

Run the following commands with the path to your App Engine SDK installation:

```
$ launchctl setenv APPENGINE_HOME /usr/local/appengine/appengine-java-sdk-1.9.26

$ launchctl setenv appengine.sdk.root /usr/local/appengine/appengine-java-sdk-1.9.26
```

To install dependencies, run:

```
$ npm install
```

If you don't have gulp, install it globally:

```
$ npm install -g gulp
```

To run tests, run:

```
$ gulp test
```
