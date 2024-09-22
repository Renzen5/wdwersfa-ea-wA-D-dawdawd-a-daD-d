gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.GDbackgroundObjects1= [];
gdjs.SettingsCode.GDbackgroundObjects2= [];
gdjs.SettingsCode.GDCoinAnimButObjects1= [];
gdjs.SettingsCode.GDCoinAnimButObjects2= [];
gdjs.SettingsCode.GDCoinAnimTEXTObjects1= [];
gdjs.SettingsCode.GDCoinAnimTEXTObjects2= [];
gdjs.SettingsCode.GDdesignObjects1= [];
gdjs.SettingsCode.GDdesignObjects2= [];
gdjs.SettingsCode.GDSettingsTEXTObjects1= [];
gdjs.SettingsCode.GDSettingsTEXTObjects2= [];
gdjs.SettingsCode.GDVibrationButObjects1= [];
gdjs.SettingsCode.GDVibrationButObjects2= [];
gdjs.SettingsCode.GDVibrationTEXTObjects1= [];
gdjs.SettingsCode.GDVibrationTEXTObjects2= [];
gdjs.SettingsCode.GDExitButtonObjects1= [];
gdjs.SettingsCode.GDExitButtonObjects2= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "TimeInGame", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "S_inGame", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.SettingsCode.GDExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDExitButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDExitButtonObjects1[k] = gdjs.SettingsCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDExitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CoinAnimBut"), gdjs.SettingsCode.GDCoinAnimButObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDCoinAnimButObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDCoinAnimButObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDCoinAnimButObjects1[k] = gdjs.SettingsCode.GDCoinAnimButObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDCoinAnimButObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13474228);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CoinAnimSet").setBoolean(true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Settings.CoinAnimSet", runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CoinAnimSet").getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CoinAnimBut"), gdjs.SettingsCode.GDCoinAnimButObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDCoinAnimButObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDCoinAnimButObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDCoinAnimButObjects1[k] = gdjs.SettingsCode.GDCoinAnimButObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDCoinAnimButObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13475420);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CoinAnimSet").setBoolean(false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Settings.CoinAnimSet", runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CoinAnimSet").getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VibrationBut"), gdjs.SettingsCode.GDVibrationButObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDVibrationButObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVibrationButObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDVibrationButObjects1[k] = gdjs.SettingsCode.GDVibrationButObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVibrationButObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13476972);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("VibrationSet").setBoolean(true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Settings.VibrationSet", runtimeScene.getGame().getVariables().getFromIndex(5).getChild("VibrationSet").getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VibrationBut"), gdjs.SettingsCode.GDVibrationButObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDVibrationButObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVibrationButObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDVibrationButObjects1[k] = gdjs.SettingsCode.GDVibrationButObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVibrationButObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13477948);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("VibrationSet").setBoolean(false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Settings.VibrationSet", runtimeScene.getGame().getVariables().getFromIndex(5).getChild("VibrationSet").getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CoinAnimSet"), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinAnimBut"), gdjs.SettingsCode.GDCoinAnimButObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDCoinAnimButObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDCoinAnimButObjects1[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CoinAnimSet"), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinAnimBut"), gdjs.SettingsCode.GDCoinAnimButObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDCoinAnimButObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDCoinAnimButObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("VibrationSet"), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("VibrationBut"), gdjs.SettingsCode.GDVibrationButObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDVibrationButObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVibrationButObjects1[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("VibrationSet"), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("VibrationBut"), gdjs.SettingsCode.GDVibrationButObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDVibrationButObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVibrationButObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDbackgroundObjects1.length = 0;
gdjs.SettingsCode.GDbackgroundObjects2.length = 0;
gdjs.SettingsCode.GDCoinAnimButObjects1.length = 0;
gdjs.SettingsCode.GDCoinAnimButObjects2.length = 0;
gdjs.SettingsCode.GDCoinAnimTEXTObjects1.length = 0;
gdjs.SettingsCode.GDCoinAnimTEXTObjects2.length = 0;
gdjs.SettingsCode.GDdesignObjects1.length = 0;
gdjs.SettingsCode.GDdesignObjects2.length = 0;
gdjs.SettingsCode.GDSettingsTEXTObjects1.length = 0;
gdjs.SettingsCode.GDSettingsTEXTObjects2.length = 0;
gdjs.SettingsCode.GDVibrationButObjects1.length = 0;
gdjs.SettingsCode.GDVibrationButObjects2.length = 0;
gdjs.SettingsCode.GDVibrationTEXTObjects1.length = 0;
gdjs.SettingsCode.GDVibrationTEXTObjects2.length = 0;
gdjs.SettingsCode.GDExitButtonObjects1.length = 0;
gdjs.SettingsCode.GDExitButtonObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
gdjs.SettingsCode.GDbackgroundObjects1.length = 0;
gdjs.SettingsCode.GDbackgroundObjects2.length = 0;
gdjs.SettingsCode.GDCoinAnimButObjects1.length = 0;
gdjs.SettingsCode.GDCoinAnimButObjects2.length = 0;
gdjs.SettingsCode.GDCoinAnimTEXTObjects1.length = 0;
gdjs.SettingsCode.GDCoinAnimTEXTObjects2.length = 0;
gdjs.SettingsCode.GDdesignObjects1.length = 0;
gdjs.SettingsCode.GDdesignObjects2.length = 0;
gdjs.SettingsCode.GDSettingsTEXTObjects1.length = 0;
gdjs.SettingsCode.GDSettingsTEXTObjects2.length = 0;
gdjs.SettingsCode.GDVibrationButObjects1.length = 0;
gdjs.SettingsCode.GDVibrationButObjects2.length = 0;
gdjs.SettingsCode.GDVibrationTEXTObjects1.length = 0;
gdjs.SettingsCode.GDVibrationTEXTObjects2.length = 0;
gdjs.SettingsCode.GDExitButtonObjects1.length = 0;
gdjs.SettingsCode.GDExitButtonObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
