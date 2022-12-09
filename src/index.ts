import MobilePhoneController from './controller/mobile-phone.ts';
import dbManage from './database/dbManage.ts';
import { Dero } from './deps.ts';
import { DocumentBuilder, swagger } from './deps.ts';
import { validationMetadatasToSchemas } from './deps.ts';

class App extends Dero {
  constructor() {
    super();
    this.use({
      class: [MobilePhoneController]
    });

    // document builder
    const document = new DocumentBuilder()
      .setInfo({
        title: 'Rest APIs for amazing app',
        version: '1.0.0',
        description: 'This is the amazing app'
      })
      // .addServer('http://10.211.55.11:8000')
      .build();

    // serve swagger
    swagger(this, '/api-docs/swagger', document, { validationMetadatasToSchemas });
  }
}

console.log('====================================');
console.log('🚀  Your awesome APP is launching...');
console.log('====================================');

//初始化数据库
await dbManage.init();

await new App().listen(8000, () => {
  console.log('====================================');
  console.log(`✅  http://127.0.0.1:8000`);
  console.log(`✅  http://127.0.0.1:8000/api-docs/swagger`);
  console.log(`✅  Your awesome APP launched development`);
  console.log('====================================');
});
