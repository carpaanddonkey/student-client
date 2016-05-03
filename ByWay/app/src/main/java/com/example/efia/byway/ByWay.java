package com.example.efia.byway;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;


public class ByWay extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
	setContentView(R.layout.activity_by_way);

        WebView myWebView = (WebView) findViewById(R.id.webView);
        WebSettings wSet = myWebView.getSettings();
        wSet.setJavaScriptEnabled(true);

        myWebView.loadUrl("file:///android_asset/hellopage.html");

        
    }
}
