import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';

//Lib
const mysql = require('mysql');
const smartcard = require('smartcard');

//Rxjs
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MysqlService {
  private conn: any;

  DatabaseConnection(): Observable<any> {
    return Observable.create(observer => {
      this.conn = mysql.createConnection({
        host: '127.0.0.1d',
        user: 'roots',
        password: '',
        database: 'guide'
      });
      this.conn.connect(function (err, connection) {
        if (err) { observer.error(err); } else {
          observer.next(connection);
          observer.complete();
        }
      });
    });
  }//ทำหน้าที่เชื่อมต่อฐานข้อมูล
  ShowDataBaseName(): Observable<any> {
    return Observable.create(observer => {
      this.conn.query('SELECT * FROM widgets', (error, results, fields) => {
        if (error) {
          observer.error(JSON.stringify(error));
        } else {
          observer.next({ results: results, fields: fields });
        }
        observer.complete();
      });
    });
  }//ทำหน้าที่แสดงชื่อฐานข้อมูล
  Query(sql: string): Observable<any> {
    return Observable.create(observer => {
      this.conn.query(sql, (error, results, fields) => {
        if (error) {
          observer.error(JSON.stringify(error));
        } else {
          observer.next({ results: results, fields: fields });
        }
        observer.complete();
      });
    });
  }//ทำหน้าที่ run คำสั่ง query
  CloseDatabaseConnection() {
    this.conn.end();
  }//ทำหน้าที่ปิดการเชื่อมต่อ



}
