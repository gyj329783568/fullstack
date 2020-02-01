# STUDY
## 创建应用
1. nest new server  -- 创建nest
2. cd server
3. nest g app admin -- 创建子应用
4. nest start -w admin -- 启动子项目
5. nest g lib db  --写@libs
6. npm i -s @typegoose/typegoose mongoose @types/mongoose nestjs-typegoose --安装数据库模块
7. npm i -s mongoose @types/mongoose

nest g mo -p admin users 在admin中，创建users模块
nest g co -p admin users 在admin中，创建users控制器