package com.example.efia.byway;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;


public class ByWay extends Activity  {

    private WebView myWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_by_way);

        myWebView = (WebView) findViewById(R.id.webView);
        WebSettings wSet = myWebView.getSettings();
        wSet.setJavaScriptEnabled(true);//设置在web中调用js

        myWebView.loadUrl("file:///android_asset/hellopage.html");

    }


}
