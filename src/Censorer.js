export class Censorer {
  constructor(TextFileReader, BannedWordListFileReader, CensoredTextWriter) {
    this.TextFileReader = TextFileReader;
    this.bannedWordListFileReader = BannedWordListFileReader;
    this.CensoredTextWriter = CensoredTextWriter;
  }

  censor() {
    const text = this.TextFileReader.read();
    const bannedWords = this.bannedWordListFileReader.read();

    let censoredText = text;

    for (const bannedWord of bannedWords) {
      censoredText = censoredText.replace(bannedWord, "XXXX");
    }
    this.CensoredTextWriter.write(censoredText);
  }
}
