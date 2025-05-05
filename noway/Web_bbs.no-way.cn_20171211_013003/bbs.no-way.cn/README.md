# phpwind Fans

[![phpwind Fans](https://pub.idqqimg.com/wpa/images/group.png)](//shang.qq.com/wpa/qunwpa?idkey=4bdc6869a010f9371c81047847960e9d89ce0585e23308a4f00f99ecb27c48f7)

phpwind Fans版本是原本暂定的phpwind10版本而来。基于官方最新的phpwind9.0.1开发，同步官方所有代码的基础上进行改良和长期维护。
## 关于下载
点击[这里](https://github.com/medz/phpwind/releases)选择最新的版本

## 2017开发计划.md
[2017开发计划](2017开发计划.md)

## 首次安装
1. 将下载下来的文件解压，然后将phpwind-x文件夹下的内容放网站根目录。
2. 访问`http://你的域名/install.php`按照说明进行安装即可。

## 官方版本升级到phpwind fans
1.将下载下来的文件解压，然后将phpwind-x文件夹下的内容覆盖到你现在的phpwind9程序即可。
## 常见问题
*1. 安装时显示：
```
you must set up the project dependencies,run the following commands:
curl -sS https://getcomposer.org/installer | php
php composer.phar install
```
**解释**：你下载的是源码。
**解决方案**:请看上方 关于下载

*2.插件应用zip包在系统后台-插件与模板-应用管理-本地上传后安装失败，而且所有插件应用都安装失败。

**解释**：可能存在服务器zip包解压问题。
**解决方案**：试试解压后直接上传到 网站根目录/src/extensions/下，到系统后台-插件与模板-应用管理-未安装应用-安装。

*3.关于有人(没记住是谁)说的phpwindfans在微软edge上不能输入中文问题。

**解释**:Windows Apps（包括应用商店等）均无法使用第三方输入法(有人说可以用五笔)，只能使用微软拼音（zlzy：刚子啊edge打开了几个搜索引擎，亦不能使用第三方拼音输入。自带输入法？我就呵呵）。[更详细的解释](https://zhidao.baidu.com/question/428868938944151492.html)
**解决方案：推荐用户使用linux或使用第三方浏览器**，或者你可以看下[基本不可能通过服务器端解决的方案](https://zhidao.baidu.com/question/1370573023838300739.html)

*4.环境配置问题

**解释和解决**：环境配置有问题请自行百度或联系服务商解决。

如果你在使用或者升级phpwind fans的时候发现什么问题，请随时提交issues给我们

你也可以加入QQ群：30568679 对升级时或者使用过程中上文没有提到的问题进行交流。

fans版本将会是一个长期维护版本，也会听取用户意见修改。有什么想法👏一点要告诉我们哦。

## 插件快速开发demo请看
[/src/extensions/demo](https://github.com/medz/phpwind/tree/master/src/extensions/demo)
