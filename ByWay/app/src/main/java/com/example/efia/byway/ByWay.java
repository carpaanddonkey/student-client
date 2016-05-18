package com.example.efia.byway;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;


public class ByWay extends Activity  {

    private WebView myWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_by_way);

        myWebView = (WebView) findViewById(R.id.webView);
        myWebView.setWebViewClient(new WebViewClient() {
            public boolean shouldOverrideUrlLoading(WebView view,String url)
            {
                view.loadUrl(url);
                return true;
            }
        });
        WebSettings wSet = myWebView.getSettings();
        wSet.setJavaScriptEnabled(true);//设置在web中调用js
        myWebView.loadUrl("http://web.byway.net.cn/student/hellopage.html");

    }


}
