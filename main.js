themeStore();
gameCenter();
market();
smartHome();
wallet();
myOPPO();
store();
music();
videoEditor();
health();
speechAssist();
browser();
community();

// 签到
function signing() {
    var signButtom = text("签到").findOnce();
    while(signButtom != null && !signButtom.clickable()) {
        signButtom = signButtom.parent();
    }

    if (signButtom != null) {
        signButtom.click();
        return true;
    } else {
        toast("找不到签到按钮");
        return false;
    }
}

// 跳过
function skip() {
    var skipBtn = textStartsWith("跳过").findOnce();
    if (skipBtn == null) return;
    while(!skipBtn.clickable()) {
        skipBtn = skipBtn.parent();
    }
    skipBtn.click();
}

// 主题商店
function themeStore() {
    launch("com.heytap.themestore");
    waitForPackage("com.heytap.themestore");
    if(currentActivity() == "com.nearme.themespace.activities.ThemeActivity") {
        skip();
    }
    id("tab_5").findOne().click();
    sleep(400);
    if (signing()) {
        console.log("主题商店签到成功！");
        sleep(1000);
    }
}

// 游戏中心
function gameCenter() {
    launch("com.nearme.gamecenter");
    waitForActivity("com.heytap.cdo.client.ui.activity.MainTabPageActivity");
    skip();
    var mineLab = id("normalLable").className("android.widget.TextView").text("我的").findOne().parent();
    while(!mineLab.clickable()) {
        mineLab = mineLab.parent();
    }
    mineLab.click();
    sleep(400); // lab切换有点卡顿，延迟一下
    if (signing()) {
        console.log("游戏中心签到成功！");
        sleep(1000);
    }
}

// 软件商店
function market() {
    launch("com.heytap.market");
    waitForActivity("com.heytap.cdo.client.ui.activity.MainTabPageActivity");
    skip();
    // 点击我的Tab页
    var mineLab = id("normalLable").className("android.widget.TextView").text("我的").findOne().parent();
    while(!mineLab.clickable()) {
        mineLab = mineLab.parent();
    }
    mineLab.click();
    sleep(200);
    if (signing()) {
        console.log("软件商店签到成功！");
        sleep(1000);
    }
}

// 智能家居
function smartHome() {
    launch("com.heytap.smarthome")
    waitForActivity("com.heytap.smarthome.MainActivity");
    // 点击我的Tab页
    id("tab_me").findOnce().click();
    sleep(800);
    if (signing()) {
        console.log("智能家居签到成功！");
        sleep(1000);
    }
}

// 钱包
function wallet() {
    launch("com.finshell.wallet")
    waitForActivity("com.nearme.wallet.main.WalletIndexActivity");
    // 点击我的Tab页
    id("bottom_tab_layout").findOne().child(4).click();
    sleep(800);
    // 签到
    if (signing()) {
        console.log("钱包签到成功！");
        sleep(1000);
    }
}

// 我的OPPO
function myOPPO() {
    launch("com.oppo.usercenter")
    waitForActivity("com.platform.usercenter.vip.ui.main.VipMainActivity");
    sleep(800);
    if (signing()) {
        console.log("我的OPPO签到成功！");
        sleep(1000);
    }
}

// 欢太商城
function store() {
    launch("com.oppo.store");
    waitForActivity("com.oppo.store.MainActivity");
    sleep(300);
    skip();
    id("bottom_tab").findOne().child(0).child(4).click();
    sleep(800);
    if (signing()) {
        sleep(2000);
        className("android.widget.Button").text("立即签到").findOne().click();
        console.log("欢太商城签到成功！");
        sleep(1000);
    }
}

// OPPO社区
function community() {
    launch("com.oppo.community");
    waitForActivity("com.oppo.community.MainActivity");
    sleep(800);
    id("tabs").findOne().child(4).select();
    sleep(800);
    if (signing()) {
        console.log("OPPO社区签到成功！");
        sleep(1000);
    } else {
        toast("OPPO社区请手动签到");
    }
}

// 音乐
function music() {
    launch("com.heytap.music");
    waitForActivity("com.nearme.music.maintab.ui.MainTabActivity");
    id("main_tab_navigation").findOne().child(0).child(3).click();
    sleep(300);
    if (signing()) {
        console.log("音乐签到成功！");
        sleep(1000);
    }
}

// Soloop即录
function videoEditor() {
    launch("com.coloros.videoeditor");
    waitForActivity("com.coloros.videoeditor.MainActivity");
    id("mine_layout").findOne().click();
    sleep(300);
    if (signing()) {
        console.log("即录签到成功！");
        sleep(1000);
    }
}

// 健康
function health() {
    launch("com.heytap.health");
    waitForActivity("com.heytap.health.main.MainActivity");
    id("app_main_tab").findOne().child(0).child(4).click();
    if (signing()) {
        console.log("健康签到成功！");
        sleep(1000);
    }
}

// 语音助手
function speechAssist() {
    launch("com.heytap.speechassist");
    waitForActivity("com.heytap.speechassist.skillmarket.activity.MarketHomeActivity");
    id("mine").findOne().click();
    sleep(400);
    if (signing()) {
        console.log("语音助手签到成功！");
        back();
    }
}

// 浏览器
function browser() {
    launch("com.heytap.browser");
    waitForActivity("com.android.browser.BrowserActivity");
    id("profile").findOne().click();
    if (signing()) {
        console.log("浏览器签到成功！");
        back();
    }
}