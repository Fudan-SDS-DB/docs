# MySQL

> MySQL 是一个开源的关系型数据库管理系统（RDBMS），最初由瑞典 MySQL AB 公司开发，现由 Oracle 公司维护和支持。MySQL 是全球最受欢迎的数据库之一，广泛应用于 Web 应用、数据分析等多个领域。在期末项目中，我们将使用 MySQL 作为后端数据库。

## 安装 MySQL
- ~~助教本来想自己写一份的，但是看到网上有现成的详细教程，遂开摆😊~~
- Windows 用户可以参考 [超级详细的 MySQL 数据库安装指南](https://zhuanlan.zhihu.com/p/37152572)
- macOS 用户可以参考 [Mac 下 MySQL 的安装步骤](https://zhuanlan.zhihu.com/p/37942063)

## 注意事项
- 推荐下载 [MySQL Installer](https://dev.mysql.com/downloads/installer/) 进行安装。
- 在运行 `.msi` 安装程序时，如果没有响应，请尝试右键点击并选择“以管理员身份运行”。
  > 原因是 MySQL 需要管理员权限才能在 C 盘下创建目录。
- MySQL 默认使用端口号 3306。如果在安装过程中设置了其他端口号，请务必记录下来。后续在使用 Django 连接 MySQL 数据库时，需要提供端口号。
- 请妥善记住 MySQL 安装过程中设置的 `root` 密码，该密码在启动 MySQL 服务器及连接数据库时都需要使用。
- 若在 PowerShell 中运行 `mysql` 命令时遇到以下报错，请将 `C:\Program Files\MySQL\MySQL Server 8.0\bin` 目录添加到系统的环境变量中
  ```text
  mysql : 无法将“mysql”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。
  请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
  ```
  > 该报错的原因是 PowerShell 在执行命令时，会从系统的默认路径以及已配置的环境变量 `PATH` 中查找 mysql。如果未找到相应路径，则会出现此错误。

  :::tip
  使用 Mac 的同学可以思考一下，为什么你们通常不会遇到这个问题呢？

  系统的默认路径又有哪些呢？可以试着 Google 一下或问问大语言模型
  :::
- 不少同学可能会使用 MySQL Workbench 编写 SQL 脚本，但它在代码自动补全、错误提示和可视化等方面的支持相对较弱。那么，是否有更便捷高效的 [工具](./vscode.md#四-mysql-数据库支持) 呢？