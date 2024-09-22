gdjs.ProfileCode = {};
gdjs.ProfileCode.localVariables = [];
gdjs.ProfileCode.GDbackgroundObjects1= [];
gdjs.ProfileCode.GDbackgroundObjects2= [];
gdjs.ProfileCode.GDbackgroundObjects3= [];
gdjs.ProfileCode.GDConnectTGTEXTObjects1= [];
gdjs.ProfileCode.GDConnectTGTEXTObjects2= [];
gdjs.ProfileCode.GDConnectTGTEXTObjects3= [];
gdjs.ProfileCode.GDdesignObjects1= [];
gdjs.ProfileCode.GDdesignObjects2= [];
gdjs.ProfileCode.GDdesignObjects3= [];
gdjs.ProfileCode.GDUserInfoTEXTObjects1= [];
gdjs.ProfileCode.GDUserInfoTEXTObjects2= [];
gdjs.ProfileCode.GDUserInfoTEXTObjects3= [];
gdjs.ProfileCode.GDExitButtonObjects1= [];
gdjs.ProfileCode.GDExitButtonObjects2= [];
gdjs.ProfileCode.GDExitButtonObjects3= [];
gdjs.ProfileCode.GDUserInfoTextObjects1= [];
gdjs.ProfileCode.GDUserInfoTextObjects2= [];
gdjs.ProfileCode.GDUserInfoTextObjects3= [];
gdjs.ProfileCode.GDuidTgInputObjects1= [];
gdjs.ProfileCode.GDuidTgInputObjects2= [];
gdjs.ProfileCode.GDuidTgInputObjects3= [];
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1= [];
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2= [];
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects3= [];


gdjs.ProfileCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("uidTgInput"), gdjs.ProfileCode.GDuidTgInputObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects2.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects2[i].getPlaceholder() == "Enter your uid from telegram bot" ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects2[k] = gdjs.ProfileCode.GDuidTgInputObjects2[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InfoConnectTGTEXT"), gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2);
/* Reuse gdjs.ProfileCode.GDuidTgInputObjects2 */
{for(var i = 0, len = gdjs.ProfileCode.GDuidTgInputObjects2.length ;i < len;++i) {
    gdjs.ProfileCode.GDuidTgInputObjects2[i].setReadOnly(false);
}
}{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2[i].getBehavior("Text").setText("We have sent you a confirmation code in our telegram bot, enter it below.");
}
}{for(var i = 0, len = gdjs.ProfileCode.GDuidTgInputObjects2.length ;i < len;++i) {
    gdjs.ProfileCode.GDuidTgInputObjects2[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.ProfileCode.GDuidTgInputObjects2.length ;i < len;++i) {
    gdjs.ProfileCode.GDuidTgInputObjects2[i].setPlaceholder("Enter the confirmation code that we sent you in telegram.");
}
}}

}


};gdjs.ProfileCode.asyncCallback13516540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ProfileCode.localVariables);

{ //Subevents
gdjs.ProfileCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ProfileCode.localVariables.length = 0;
}
gdjs.ProfileCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ProfileCode.localVariables);
for (const obj of gdjs.ProfileCode.GDuidTgInputObjects1) asyncObjectsList.addObject("uidTgInput", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://watbot.ru/api/v1/sendMessage?api_token=9IjQPgwfBaKnjuMMMRWyhnNd3HOnz1wIQTjkYfZKKmsbZxSAnC2PtAMA91Hx&contact_id=" + runtimeScene.getGame().getVariables().getFromIndex(6).getAsString() + "&text=Your confirmation code for connecting telegram: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), "", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.ProfileCode.asyncCallback13516540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ProfileCode.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("UserInfoText"), gdjs.ProfileCode.GDUserInfoTextObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{for(var i = 0, len = gdjs.ProfileCode.GDUserInfoTextObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDUserInfoTextObjects1[i].getBehavior("Text").setText("Balance: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "\n" + "Accumulated Lunaris: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + "\n" + "Taps quantity: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "\n" + "Seconds in game: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InfoConnectTGTEXT"), gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1);
{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.ProfileCode.GDExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDExitButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDExitButtonObjects1[k] = gdjs.ProfileCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDExitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("design"), gdjs.ProfileCode.GDdesignObjects1);
gdjs.copyArray(runtimeScene.getObjects("uidTgInput"), gdjs.ProfileCode.GDuidTgInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDdesignObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDdesignObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDdesignObjects1[k] = gdjs.ProfileCode.GDdesignObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDdesignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects1[k] = gdjs.ProfileCode.GDuidTgInputObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ProfileCode.GDuidTgInputObjects1 */
{for(var i = 0, len = gdjs.ProfileCode.GDuidTgInputObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDuidTgInputObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 0, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("design"), gdjs.ProfileCode.GDdesignObjects1);
gdjs.copyArray(runtimeScene.getObjects("uidTgInput"), gdjs.ProfileCode.GDuidTgInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDdesignObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDdesignObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDdesignObjects1[k] = gdjs.ProfileCode.GDdesignObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDdesignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects1[k] = gdjs.ProfileCode.GDuidTgInputObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects1[i].getPlaceholder() == "Enter your uid from telegram bot" ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects1[k] = gdjs.ProfileCode.GDuidTgInputObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ProfileCode.GDuidTgInputObjects1 */
{for(var i = 0, len = gdjs.ProfileCode.GDuidTgInputObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDuidTgInputObjects1[i].setReadOnly(true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(gdjs.randomInRange(100000, 999999)));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString((( gdjs.ProfileCode.GDuidTgInputObjects1.length === 0 ) ? "" :gdjs.ProfileCode.GDuidTgInputObjects1[0].getBehavior("Text").getText()));
}
{ //Subevents
gdjs.ProfileCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("design"), gdjs.ProfileCode.GDdesignObjects1);
gdjs.copyArray(runtimeScene.getObjects("uidTgInput"), gdjs.ProfileCode.GDuidTgInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDdesignObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDdesignObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDdesignObjects1[k] = gdjs.ProfileCode.GDdesignObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDdesignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects1[i].getPlaceholder() == "Enter the confirmation code that we sent you in telegram." ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects1[k] = gdjs.ProfileCode.GDuidTgInputObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects1[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects1[k] = gdjs.ProfileCode.GDuidTgInputObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "uidTG", runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "TGconnectStatus", runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13521652);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ConnectTGTEXT"), gdjs.ProfileCode.GDConnectTGTEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoConnectTGTEXT"), gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("design"), gdjs.ProfileCode.GDdesignObjects1);
gdjs.copyArray(runtimeScene.getObjects("uidTgInput"), gdjs.ProfileCode.GDuidTgInputObjects1);
{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1[i].getBehavior("Text").setText("Telegram connected.");
}
}{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1[i].setY(1139);
}
}{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1[i].setCharacterSize(50);
}
}{for(var i = 0, len = gdjs.ProfileCode.GDuidTgInputObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDuidTgInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ProfileCode.GDdesignObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDdesignObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ProfileCode.GDConnectTGTEXTObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDConnectTGTEXTObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("design"), gdjs.ProfileCode.GDdesignObjects1);
gdjs.copyArray(runtimeScene.getObjects("uidTgInput"), gdjs.ProfileCode.GDuidTgInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDdesignObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDdesignObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDdesignObjects1[k] = gdjs.ProfileCode.GDdesignObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDdesignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects1[i].getPlaceholder() == "Enter the confirmation code that we sent you in telegram." ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects1[k] = gdjs.ProfileCode.GDuidTgInputObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProfileCode.GDuidTgInputObjects1.length;i<l;++i) {
    if ( gdjs.ProfileCode.GDuidTgInputObjects1[i].getBehavior("Text").getText() != runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.ProfileCode.GDuidTgInputObjects1[k] = gdjs.ProfileCode.GDuidTgInputObjects1[i];
        ++k;
    }
}
gdjs.ProfileCode.GDuidTgInputObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InfoConnectTGTEXT"), gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1);
{for(var i = 0, len = gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length ;i < len;++i) {
    gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1[i].getBehavior("Text").setText("Code is wrong.");
}
}}

}


};

gdjs.ProfileCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ProfileCode.GDbackgroundObjects1.length = 0;
gdjs.ProfileCode.GDbackgroundObjects2.length = 0;
gdjs.ProfileCode.GDbackgroundObjects3.length = 0;
gdjs.ProfileCode.GDConnectTGTEXTObjects1.length = 0;
gdjs.ProfileCode.GDConnectTGTEXTObjects2.length = 0;
gdjs.ProfileCode.GDConnectTGTEXTObjects3.length = 0;
gdjs.ProfileCode.GDdesignObjects1.length = 0;
gdjs.ProfileCode.GDdesignObjects2.length = 0;
gdjs.ProfileCode.GDdesignObjects3.length = 0;
gdjs.ProfileCode.GDUserInfoTEXTObjects1.length = 0;
gdjs.ProfileCode.GDUserInfoTEXTObjects2.length = 0;
gdjs.ProfileCode.GDUserInfoTEXTObjects3.length = 0;
gdjs.ProfileCode.GDExitButtonObjects1.length = 0;
gdjs.ProfileCode.GDExitButtonObjects2.length = 0;
gdjs.ProfileCode.GDExitButtonObjects3.length = 0;
gdjs.ProfileCode.GDUserInfoTextObjects1.length = 0;
gdjs.ProfileCode.GDUserInfoTextObjects2.length = 0;
gdjs.ProfileCode.GDUserInfoTextObjects3.length = 0;
gdjs.ProfileCode.GDuidTgInputObjects1.length = 0;
gdjs.ProfileCode.GDuidTgInputObjects2.length = 0;
gdjs.ProfileCode.GDuidTgInputObjects3.length = 0;
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length = 0;
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2.length = 0;
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects3.length = 0;

gdjs.ProfileCode.eventsList2(runtimeScene);
gdjs.ProfileCode.GDbackgroundObjects1.length = 0;
gdjs.ProfileCode.GDbackgroundObjects2.length = 0;
gdjs.ProfileCode.GDbackgroundObjects3.length = 0;
gdjs.ProfileCode.GDConnectTGTEXTObjects1.length = 0;
gdjs.ProfileCode.GDConnectTGTEXTObjects2.length = 0;
gdjs.ProfileCode.GDConnectTGTEXTObjects3.length = 0;
gdjs.ProfileCode.GDdesignObjects1.length = 0;
gdjs.ProfileCode.GDdesignObjects2.length = 0;
gdjs.ProfileCode.GDdesignObjects3.length = 0;
gdjs.ProfileCode.GDUserInfoTEXTObjects1.length = 0;
gdjs.ProfileCode.GDUserInfoTEXTObjects2.length = 0;
gdjs.ProfileCode.GDUserInfoTEXTObjects3.length = 0;
gdjs.ProfileCode.GDExitButtonObjects1.length = 0;
gdjs.ProfileCode.GDExitButtonObjects2.length = 0;
gdjs.ProfileCode.GDExitButtonObjects3.length = 0;
gdjs.ProfileCode.GDUserInfoTextObjects1.length = 0;
gdjs.ProfileCode.GDUserInfoTextObjects2.length = 0;
gdjs.ProfileCode.GDUserInfoTextObjects3.length = 0;
gdjs.ProfileCode.GDuidTgInputObjects1.length = 0;
gdjs.ProfileCode.GDuidTgInputObjects2.length = 0;
gdjs.ProfileCode.GDuidTgInputObjects3.length = 0;
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects1.length = 0;
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects2.length = 0;
gdjs.ProfileCode.GDInfoConnectTGTEXTObjects3.length = 0;


return;

}

gdjs['ProfileCode'] = gdjs.ProfileCode;
