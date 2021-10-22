import MobilePhoneModel from '../models/mobile-phone.ts';
import mysqldb from '../database/database.ts';

class dbManage {
  //初始化数据库
  static async init() {
    mysqldb.link([MobilePhoneModel]);
    await mysqldb.sync({ drop: false });
  }
}

export default dbManage;
