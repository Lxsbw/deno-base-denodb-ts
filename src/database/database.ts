import { Database } from '../deps.ts';

//MySQL连接
const mysqldb = new Database('mysql', {
  host: '121.37.188.31',
  port: 6606,
  database: 'egg_test',
  username: 'root',
  password: 'Admin@123'
});

//导出
export default mysqldb;
