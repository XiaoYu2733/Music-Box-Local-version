function windows() {
    window = floaty.window(
        <frame>            
                        <vertical>
                <card cardBackgroundColor="#c0A6D3F2" w="150dp" h="auto" cardCornerRadius="20dp">
                    <vertical gravity="center">
                        <card cardBackgroundColor="#c0A6D312" marginLeft="10" marginRight="10" marginTop="10dp" cardCornerRadius="10dp">
                            <text id="action" text="开始获取" textColor="#000000" textSize="15sp" gravity="center" textStyle='bold' />
                        </card>
                        <card cardBackgroundColor="#c0A6D312" marginTop="10dp" marginLeft="10" marginRight="10" cardCornerRadius="10dp">
                            <text id="tc" text="退出" textColor="#000000" textSize="15sp" gravity="center" textStyle='bold' />
                            
                        </card>
                        <text text="请拿出钢琴点开始获取把钢琴的21个键位从左上角第一个开始按顺序依次点击！" id="tss" textColor="#000000" textSize="13sp" gravity="center" textStyle='bold' />
                    </vertical>
                </card>
                
            </vertical>
            
            
        </frame>
    );
    setInterval(() => {}, 1000);
    var execution = null;

    //记录按键被按下时的触摸坐标
    var x = 0,
        y = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;
    
    

    window.tc.click(() => {
        exit();
    })
    window.action.setOnTouchListener(function(view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN:
                x = event.getRawX();
                y = event.getRawY();
                windowX = window.getX();
                windowY = window.getY();
                downTime = new Date().getTime();
                return true;
            case event.ACTION_MOVE:
                //移动手指时调整悬浮窗位置
                window.setPosition(windowX + (event.getRawX() - x),
                    windowY + (event.getRawY() - y));
                //如果按下的时间超过1.5秒判断为长按，退出脚本
                if (new Date().getTime() - downTime > 1500) {
                    exit();
                }
                return true;
            case event.ACTION_UP:
                //手指弹起时如果偏移很小则判断为点击
                if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                    onClick();
                }
                return true;
        }
        return true;
    });
    
    function onClick() {
        if (window.action.getText() == '开始获取') {
            event.emit("touchable");
            window.action.setText('停止运行');
        } else {
            exit();
            window.action.setText('开始获取');
        }
    }

}

function 球(num) {
    switch (num) {
        case 2:
            toasts("按第一排第2个\n○●○○○○○\n○○○○○○○\n○○○○○○○", 8000)
            break;
        case 3:
            toasts("按第一排第3个\n○○●○○○○\n○○○○○○○\n○○○○○○○", 8000)
            break;
        case 4:
            toasts("按第一排第4个\n○○○●○○○\n○○○○○○○\n○○○○○○○", 8000)
            break;
        case 5:
            toasts("按第一排第5个\n○○○○●○○\n○○○○○○○\n○○○○○○○", 8000)
            break;
        case 6:
            toasts("按第一排第6个\n○○○○○●○\n○○○○○○○\n○○○○○○○", 8000)
            break;
        case 7:
            toasts("按第一排第7个\n○○○○○○●\n○○○○○○○\n○○○○○○○", 8000)
            break;
        case 8:
            toasts("按第二排第1个\n○○○○○○○\n●○○○○○○\n○○○○○○○", 8000)
            break;
        case 9:
            toasts("按第二排第2个\n○○○○○○○\n○●○○○○○\n○○○○○○○", 8000)
            break;
        case 10:
            toasts("按第二排第3个\n○○○○○○○\n○○●○○○○\n○○○○○○○", 8000)
            break;
        case 11:
            toasts("按第二排第4个\n○○○○○○○\n○○○●○○○\n○○○○○○○", 8000)
            break;
        case 12:
            toasts("按二排第5个\n○○○○○○○\n○○○○●○○\n○○○○○○○", 8000)
            break;
        case 13:
            toasts("按第二排第6个\n○○○○○○○\n○○○○○●○\n○○○○○○○", 8000)
            break;
        case 14:
            toasts("按第二排第7个\n○○○○○○○\n○○○○○○●\n○○○○○○○", 8000)
            break;

        case 15:
            toasts("按第三排第1个\n○○○○○○○\n○○○○○○○\n●○○○○○○", 8000)
            break;
        
        case 16:
            toasts("按第三排第2个\n○○○○○○○\n○○○○○○○\n○●○○○○○", 8000)
            break;
        
        case 17:
            toasts("按第三排第3个\n○○○○○○○\n○○○○○○○\n○○●○○○○", 8000)
            break;
        
        case 18:
            toasts("按第三排第4个\n○○○○○○○\n○○○○○○○\n○○○●○○○", 8000)
            break;
        
        
        case 19:
            toasts("按第三排第5个\n○○○○○○○\n○○○○○○○\n○○○○●○○", 8000)
            break;
        
        case 20:
            toasts("按第三排第6个\n○○○○○○○\n○○○○○○○\n○○○○○●○", 8000)
            break;
        
        case 21:
            toasts("按第三排第7个\n○○○○○○○\n○○○○○○○\n○○○○○○●", 8000)
            break;
        
    }
}
// 初始化
windows();

var touchable_state = false;

// 事件监听
var event = events.emitter();
    event.on("touchable", function() {
        // 使用 touchable_state 变量
        touchable_state = !touchable_state;
        x.setTouchable(touchable_state);
        if (touchable_state) {
            toasts("按第一排第1个\n●○○○○○○\n○○○○○○○\n○○○○○○○", 8000);
        } else {
            toasts("⭐已退出⭐");
            exit();
        }
    });
    var num = 1
    var zuobiao = []
    let path = "./21zuobiao.txt"
    var x = floaty.rawWindow(
      <frame alpha="0" id="but" bg="#87CEFA" />
    ),
        touchable_state = false;
    x.setSize(-1, -1);
    x.setTouchable(touchable_state);
    x.but.setOnTouchListener(function (v, e) {
        switch (e.getAction()) {
            case e.ACTION_DOWN:
                toasts(e.getRawX().toFixed(0) + " , " + e.getRawY().toFixed(0));
                zuobiao[num - 1] = [e.getRawX().toFixed(0), e.getRawY().toFixed(0)]
                num = num + 1
                break
            case e.ACTION_MOVE:
                toasts(e.getRawX().toFixed(0) + " , " + e.getRawY().toFixed(0));
                break
            case e.ACTION_UP:
                if (num >= 22) {
    alert("按键坐标获取完毕啦");
    let xy = [];
    for (var i = 0; i < zuobiao.length; i++) {
        xy.push(zuobiao[i][0] + ',' + zuobiao[i][1]);
    }
    // 将坐标格式化为字符串
    let formattedOutput = 'xy=[' + xy.join(',') + ']';
    // 输出格式化后的字符串
    console.log(formattedOutput);
    // 如果需要将结果写入文件，可以使用以下代码
    files.write(path, formattedOutput);
    exit();
}
        }
        return true;
    });
    
    function runControl(stop) {
    let arr = engines.all(),
        me = engines.myEngine(),
        run = true;
    for (i in arr) {
        if (arr[i].getSource().toString() == me.getSource().toString() && arr[i] != me) {
            if (stop != false) arr[i].forceStop();
            run = stop == true;
        }
    }
    if (!run) exit();
}
function toasts(text, time) {
    text = text || null;
    time = time || 5000;
    if (isNaN(time)) return;
    setTimeout(function() {
        events.broadcast.emit("toast", [
            [engines.myEngine(), [text, time]]
        ]);
    }, 0);
}