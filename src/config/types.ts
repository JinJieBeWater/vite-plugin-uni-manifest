import { PartialDeep } from "type-fest";

export interface NetworkTimeout {
  /**
   * uni.request 超时时间
   * 单位为 ms
   * 默认为 60000
   */
  request?: number;
  /**
   * uni.connectSocket 超时时间
   * 单位为 ms
   * 默认为 60000
   */
  connectSocket?: number;
  /**
   * uni.uploadFile 超时时间
   * 单位为 ms
   * 默认为 60000
   */
  uploadFile?: number;
  /**
   * uni.downloadFile 超时时间
   * 单位为 ms
   * 默认为 60000
   */
  downloadFile?: number;
}

export interface UniStatistics {
  /**
   * 是否开启 uni 统计
   * 默认为 false
   */
  enable: boolean;
  /**
   * uni 统计版本
   * 默认为 1
   */
  version: "1" | "2";
  /**
   * 是否开启统计调试模式
   * 生产阶段务必关闭
   * 默认为 false
   */
  debug: boolean;
  /**
   * 前端数据上报周期
   * 默认为 10
   */
  reportInterval: number;
  /** 采集项配置 */
  collectItems: {
    /**
     * 是否开启推送 PushClientID 的采集
     * 默认为 false
     */
    uniPushClientID: boolean;
  };
}

export interface SimpleUniStatistics extends Pick<UniStatistics, "enable"> {}

export interface AppPlus {
  /** 编译器兼容性配置 */
  compatible: {
    /** 是否忽略运行环境与编译环境不一致的问题 */
    ignoreVersion: boolean;
    /**
     * 运行环境版本号
     * 可以使用英文逗号分割
     */
    runtimeVersion: string;
    /** 编译环境版本号 */
    compilerVersion: string;
  };
  /** 启动界面信息 */
  splashscreen: {
    /**
     * 是否等待首页渲染完毕后再关闭启动界面
     * 默认为 true
     */
    alwaysShowBeforeRender: boolean;
    /**
     * 是否自动关闭启动界面
     * 默认为 true
     */
    autoClose: boolean;
    /**
     * 是否在程序启动界面显示加载
     * 默认为 true
     */
    waiting: boolean;
    /** 是否使用原生提示框 */
    useOriginalMsgbox: boolean;
  };
  /** 重力感应、横竖屏配置 */
  screenOrientation: (
    | "portrait-primary"
    | "portrait-secondary"
    | "landscape-primary"
    | "landscape-secondary"
  )[];
  // TODO: better types
  /** APP 权限模块 */
  modules: Record<string, any>;
  /** APP 发布信息 */
  distribute: {
    // TODO: better types
    /** Android 专用配置 */
    android: Record<string, any>;
    // TODO: better types
    /** iOS 专用配置 */
    ios: Record<string, any>;
    // TODO: better types
    /**
     * SDK 配置
     * 仅打包生效
     */
    sdkConfigs: Record<string, any>;
  };
  /**
   * nvue 编译模式
   * 默认为 weex
   * 建议使用 uni-app
   */
  nvueCompiler: "weex" | "uni-app";
  /**
   * nvue 样式编译模式
   * 默认为 weex
   * 建议使用 uni-app
   */
  nvueStyleCompiler: "weex" | "uni-app";
  /** 运行框架 */
  renderer: "native";
  /**
   * nvue 首页启动模式
   * 默认为 normal
   */
  nvueLaunchMode: "normal" | "fast";
  /** nvue 页面布局初始配置 */
  nvue: {
    /**
     * flex 项目的排列方向
     * 默认为 column
     */
    "flex-direction": "row" | "row-reverse" | "column" | "column-reverse";
  };
  /** uni 统计配置项 */
  uniStatistics: SimpleUniStatistics;
  /** 优化配置 */
  optimization: {
    /**
     * 是否开启分包配置
     * 为 true 时必须设置 app-plus.runmode 为 liberate
     */
    subPackages: boolean;
  };
  /**
   * 运行模式
   * 分包时必须设置 liberate
   */
  runmode: "normal" | "liberate";
  /**
   * 系统 webview 低于指定版本时，会弹出提示，或者下载 x5 内核后继续启动
   * Android 支持
   */
  webView: {
    /**
     * 最小 webview 版本
     * 当低于最小版本要求时，显示弹框提示，点击确定退出应用
     */
    minUserAgentVersion: string;
    /**
     * x5 内核配置
     * 启用 Android X5 Webview 模块后生效
     */
    x5: {
      /**
       * 超时时间
       * 默认为 3000
       */
      timeOut: number;
      /**
       * 是否在非 WiFi 网络环境时弹框询问用户是否确认下载 X5 内核
       * 默认为 false，即不弹框询问
       */
      showTipsWithoutWifi: boolean;
      /**
       * 是否允许用户在非 WiFi 网络时直接下载 X5 内核
       * 默认为 false，此时 showTipsWithoutWifi 为 true 时弹框询问用户，showTipsWithoutWifi 为 false 时不下载
       * true 时不弹框询问用户
       */
      allowDownloadWithoutWiFi: boolean;
    };
  };
  [x: string]: any;
}

export interface ManifestConfig {
  /** 应用名称，安装 APP 后显示的名称 */
  name: string;
  /**
   * 应用标识，由 DCloud 云端分配
   * 更多信息查看 <https://ask.dcloud.net.cn/article/35907>
   */
  appid: string;
  /** 应用描述 */
  description: string;
  /**
   * 当前默认语言
   * 默认为 auto
   */
  locale: string;
  /** 版本名称，在云打包和生成 wgt 资源时使用 */
  versionName: string;
  /** 版本号 */
  versionCode: string;
  /**
   * 是否转换 px 为 rpx
   * 默认为 true
   * 建议使用 false
   */
  transformPx: boolean;
  /** 网络超时时间 */
  networkTimeout: NetworkTimeout;
  /**
   * 是否开启 debug 模式
   * 默认为 false
   */
  debug: boolean;
  /**
   * uni 统计配置
   * 更多信息查看 <https://uniapp.dcloud.net.cn/uni-stat-v1.html> 和 <https://uniapp.dcloud.net.cn/uni-stat-v2.html>
   */
  uniStatistics: UniStatistics;
  /** APP 特有配置 */
  "app-plus": AppPlus;
  h5: any;
  quickapp: any;
  "mp-weixin": any;
  "mp-alipay": any;
  "mp-baidu": any;
  "mp-toutiao": any;
  "mp-lark": any;
  "mp-qq": any;
  "mp-kuaishou": any;
}

export interface UserManifestConfig extends PartialDeep<ManifestConfig> {}
