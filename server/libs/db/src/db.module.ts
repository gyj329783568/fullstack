import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './module/user.module'

// 导入的模型
const modules = TypegooseModule.forFeature([User])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:/topfullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    }),
    modules
  ],
  providers: [DbService],
  exports: [DbService, modules],
})
export class DbModule {}
