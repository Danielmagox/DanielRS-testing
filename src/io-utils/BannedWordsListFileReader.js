import fs from "fs";

export class BannedWordsListFileReader {
  read() {
    const bannedWordsFile = fs.readFileSync("./censorlist.txt", "utf-8");
    const bannedWords = bannedWordsFile.trim().split("\n");
    return bannedWords;
  }
}
