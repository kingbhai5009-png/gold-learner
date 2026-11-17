package com.kingbhai.goldlearner;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getBridge().getWebView().getSettings()
            .setMediaPlaybackRequiresUserGesture(false);
    }

    @Override
    public void onResume() {
        super.onResume();
        if (getBridge() != null) {
            getBridge().getWebView().evaluateJavascript(
                "if(window.goldNatureStart) window.goldNatureStart();", null
            );
        }
    }

    @Override
    public void onPause() {
        if (getBridge() != null) {
            getBridge().getWebView().evaluateJavascript(
                "if(window.goldNaturePause) window.goldNaturePause();", null
            );
        }
        super.onPause();
    }
}
