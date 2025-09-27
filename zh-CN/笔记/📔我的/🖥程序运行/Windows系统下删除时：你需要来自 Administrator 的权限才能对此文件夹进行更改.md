---
tags:
  - 系统操作
comment: true
---

# Windows系统下删除时：你需要来自 Administrator 的权限才能对此文件夹进行更改

本文转自CSDN，提供了一种解决Windows系统中因权限不足而无法删除文件或文件夹的方法。通过创建一个注册表脚本来获取管理员权限，进而成功删除顽固文件。

## 一、你需要来自 Administrator 的权限才能对此文件夹进行更改。

删除某个文件时：文件夹访问被拒绝，你需要来自 Administrator 的权限才能对此文件夹进行更改。  
此处是安装的oracle数据库，把oracle卸载删除时删除不掉。  
![[assets/1.png|文件夹访问被拒绝]]
==（windows获取所有权的脚本，通过注册表删除）==

## 二、解决方法：Windows获取所有权的脚本注册进行删除

### 1、桌面上-新建-文本文档-复制以下代码到文本文档，保存。

![[assets/2.png]]
代码如下：
```bash
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\runas]
@="获取管理员所有权"
"NoWorkingDirectory"=""

[HKEY_CLASSES_ROOT\*\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"

[HKEY_CLASSES_ROOT\exefile\shell\runas2]
@="获取管理员所有权"
"NoWorkingDirectory"=""

[HKEY_CLASSES_ROOT\exefile\shell\runas2\command]
@="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" && icacls \"%1\" /grant administrators:F"

[HKEY_CLASSES_ROOT\Directory\shell\runas]
@="获取管理员所有权"
"NoWorkingDirectory"=""

[HKEY_CLASSES_ROOT\Directory\shell\runas\command]
@="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
"IsolatedCommand"="cmd.exe /c takeown /f \"%1\" /r /d y && icacls \"%1\" /grant administrators:F /t"
```

### 2、重命名为.reg后缀格式的注册表脚本文件

1. 右击-此电脑-打开-查看-勾选文件扩展名  
    ![[assets/3.png]]
2. 将该后缀为.txt文本文件，重命名为：以注册表方式取得管理员所有权，并保存为.reg后缀格式为注册表脚本文件  
    ![[assets/4.png]]

### 3、然后双击运行该文件，将其导入注册表。

是，是，是  
![[assets/5.png]]
![[assets/6.png]]
![[assets/7.png]]
- reg文件补充说明：  
	- reg文件是一种注册表脚本文件，双击REG文件即可将其中的数据导入到注册表中。利用REG文件可以直接对注册表进行任何修改操作，它对注册表的操作可以不受注册表编辑器被禁用的限制，因此功能更为强大、灵活。  
- reg是什么文件?  
	- reg文件是注册表文件，REG文件可以用任何文本文件编辑工具(例如记事本)进行修改。  
 - reg文件如何打开?  
	- reg文件可以用以下步骤打开：开始…运行…输入regedit就可以打开注册表，REG文件的创建是非常简单的，可以通过任何一个文本文件编辑工具来实现。打开记事本，在记事本文件中输入相关内容然后保存为restore.reg，以后你就可以通过双击这个restore.reg来直接解除禁用注册表的限制。

### 4、再次找到该目录，鼠标右键-获取管理员所有权-直接删除。

![[assets/8.png]]
![[assets/9.png]]
然后-删除-成功删除。ok！！！

### 5、如果点击文件-右键-获取管理员所有权-乱码显示，转换为ANSI码

把.reg注册表脚本文件，拖入notepad++编辑器，用notepad++打开，点击编码，转换成ANSI码。Ctrl+S保存。  
然后再次运行该文件，选择要删除的文件，右键，获取管理员所有权，就不会乱码显示了。  
![[assets/10.png]]