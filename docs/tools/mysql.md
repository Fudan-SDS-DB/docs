# MySQL

> MySQL 是一款开源的关系型数据库管理系统（RDBMS），最初由瑞典 MySQL AB 公司开发，现由 Oracle 公司负责维护和支持。作为全球最流行的数据库之一，MySQL 被广泛应用于 Web 开发、数据分析等众多场景。在本课程的期末项目中，我们将使用 MySQL 作为后端数据库。


## 安装 MySQL

- ~~助教本来想亲自写安装教程，但网上已经有详尽的现成资料，所以……选择开摆 😊~~
- Windows 用户推荐参考：[超级详细的 MySQL 数据库安装指南](https://zhuanlan.zhihu.com/p/37152572)
- macOS 用户推荐参考：[Mac 下 MySQL 的安装步骤](https://zhuanlan.zhihu.com/p/37942063)


## 注意事项

- 推荐使用 [MySQL Installer](https://dev.mysql.com/downloads/installer/) 进行安装。
- 安装 `.msi` 文件时，如果点击没反应，请右键选择“以管理员身份运行”。
  > 因为 MySQL 安装时需要在 C 盘创建目录，没有管理员权限就会卡住。
- MySQL 默认端口是 `3306`。如果你在安装过程中改了端口，一定要记住它！Django 连接数据库时要用。
- 安装过程中设置的 `root` 密码非常重要，请务必妥善保管——之后登录 MySQL 和连接数据库都需要用到。
- 若在 PowerShell 中运行 `mysql` 命令时遇到以下报错，请将 `C:\Program Files\MySQL\MySQL Server 8.0\bin` 目录添加到系统的环境变量中
  ```text
  mysql : 无法将“mysql”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。
  请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
  ```
  > 该报错的原因是 PowerShell 在执行命令时，会从系统的默认路径以及已配置的环境变量 `PATH` 中查找 `mysql`。如果未找到相应路径，则会出现此错误

  :::tip
  使用 Mac 的同学可以思考一下，为什么你们通常不会遇到这个问题呢？

  系统默认的 `PATH` 都包含哪些路径？不妨试着 Google 一下，或者问问某个很会聊天的大模型 😏
  :::
- 有些同学可能会使用 MySQL Workbench 来编写 SQL 脚本，但它在代码补全、报错提示和可视化方面略显笨重。那么，是否有更便捷高效的 [工具](./vscode.md#四-mysql-数据库支持) 呢？