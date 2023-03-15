import { Database } from 'denodb';

//MySQL连接
const mysqldb = new Database('mysql', {
  host: '10.211.55.58',
  port: 6606,
  database: 'egg_test',
  username: 'root',
  password: 'Admin@123'
});

//导出
export default mysqldb;
