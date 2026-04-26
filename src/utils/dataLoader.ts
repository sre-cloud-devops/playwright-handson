import fs from 'fs';
import path from 'path';
import * as csv from 'csv-parse/sync';

export class DataLoader {
  static loadTestData(fileName: string): any {
    const filePath = path.join(__dirname, `${fileName}.json`);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  static loadCSVData(fileName: string): any[] {
    const filePath = path.join(__dirname, `${fileName}.csv`);
    const data = fs.readFileSync(filePath, 'utf-8');
    return csv.parse(data, { columns: true });
  }

  static getLoginCredentials() {
    const data = this.loadTestData('testdata');
    return data.loginCredentials;
  }

  static getCSVCredentials() {
    return this.loadCSVData('testdata');
  }

  static getCredentialByUsername(username: string) {
    const credentials = this.getLoginCredentials();
    return credentials.find((cred: any) => cred.username === username);
  }
}