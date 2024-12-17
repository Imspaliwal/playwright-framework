import { Workbook } from "exceljs";
import { createReadStream } from "fs";
import csv from "csv-parser";
const path = require("path");
const fs = require("fs");

class DataProcessor {
    constructor(filepath, sheetname, expectedValue) {
        this.filepath = filepath;
        this.sheetname = sheetname;
        this.expectedValue = expectedValue;
    }

    async verifyImage() {}

    async verifyFileContent() {
        if (!this.filepath) {
            throw new Error("File path is undefined");
        }
        console.log("file path while verifying for content : " + this.filepath);
        const fileExtension = path.extname(this.filepath).toLowerCase();
        console.log("File Extension : " + fileExtension);
        if (fileExtension === ".xlsx") {
            await this.processExcel();
        } else if (fileExtension == ".csv") {
            await this.processCsv();
        } else {
            throw new Error("Unsupported file type");
        }
    }

    async processExcel() {
        const workbook = new Workbook();
        await workbook.xlsx.readFile(this.filepath);
        const worksheet = workbook.getWorksheet(this.sheetname);
        worksheet.eachRow((row, rowNumber) => {
            row.eachCell((cell, colNumber) => {
                if (cell.value === this.expectedValue) {
                    //console.log(`Row ${rowNumber}, Column ${colNumber}: ${cell.value}`);
                    console.log("Content is verified in the Excel file as Expected " + this.expectedValue);
                }
            });
        });
    }

    async processCsv() {
        return new Promise((resolve, reject) => {
            let valueFound = false;
            createReadStream(this.filepath)
                .pipe(csv())
                .on("data", (row) => {
                    Object.keys(row).forEach((colName) => {
                        if (row[colName] == this.expectedValue) {
                            valueFound = true;
                            console.log("Expected value found in the CSV file." + this.expectedValue);
                        }
                    });
                })
                .on("end", () => {
                    if (!valueFound) {
                        console.log("Expected value not found in the CSV file.");
                    }
                    resolve();
                })
                .on("error", reject);
        });
    }
}

module.exports = DataProcessor;

// Example usage
// const filepathExcel = 'C:\Vscode\playwright-e2net\Downloads\testdata1.csv';
// const sheetname = null;
// const expectedValue = '100'; // or any value you want to check for

// const filepathCsv = 'C:\Vscode\playwright-e2net\Downloads\testdata1.csv';

// const dataProcessorExcel = new DataProcessor(filepathExcel, sheetname, expectedValue);
// dataProcessorExcel.verifyFileContent();

// const dataProcessorCsv = new DataProcessor(filepathCsv, null, expectedValue);
// dataProcessorCsv.verifyFileContent();
