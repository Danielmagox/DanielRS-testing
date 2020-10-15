import { BannedWordsListFileReader } from "./BannedWordsListFileReader";

class BannedWordsListFileReaderFake extends BannedWordsListFileReader {
  constructor(bannedWords) {
    super();
    this.text = bannedWords;
  }

  read() {
    return this.bannedWords;
  }
}
