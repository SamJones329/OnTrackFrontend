import initSqlJs from 'sql.js';
import { BASE_PATH } from './Constants';

let SQL: initSqlJs.SqlJsStatic, db, initdone: boolean;

async function initDB() {
  SQL = await initSqlJs();
  let res=await fetch(BASE_PATH + '/CourseInfo.db');
  let arrayBuffer=await res.arrayBuffer();
  let uInt8Array=new Uint8Array(arrayBuffer);
  db=new SQL.Database(uInt8Array);
  initdone = true;
  return initdone
}

function dbReady() {
  return initdone;
}

export { initDB, initdone, db }
export default db