# TinyMCE 图片上传插件使用说明

本插件特色:

- 界面简洁，相较于官方插件，取消了多 tab 模式, 取消了宽高设置文本框

- 交互流畅，图片上传等待时间加了 loading

- 默认上传本地文件，减少选择

## 一、配置

下载本项目到本地，core/upload 函数修改,要修改的地方如下:

### 1、修改获取七牛接口

```ts
function getQiniuToken(fileExt, callback): any {
  const url = "<获取 token 接口>";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(JSON.parse(xhr.response));
    }
  };

  xhr.send(null);
}
```

### 2、修改七牛上传地址

```ts
function getUrl(formdata, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", <七牛上传地址>, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(JSON.parse(xhr.response));
    }
  };

  xhr.send(formdata);
}
```

## 二、编译

### 1、预览

(1) 开启热更新: `yarn start`

(2) 预览插件:  浏览器打开 demo/html/index.html，即可看到插件效果

### 2、编译

(1) 执行 `yarn build --force`，这里用了 force，因为有些 tslint 问题，懒得理了

(2) 编译完之后会看到生成了 dist/image-t 目录，说明编译完成了

## 三、使用

### 1、拷贝插件

复制 image-t 文件到 tinymce/plugins 目录下

### 2、配置插件

```js
{
  plugins: "image-t",
  toolbar: "image-t",
}
```

完成以上配置即可愉快的使用这个插件啦


issue:

下一步准备再写一个更灵活点的，思路已经有了，实现也不难，得空再写

