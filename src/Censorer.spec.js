import { Censorer } from "./Censorer";
import { BannedWordsListFileReader } from "./io-utils/BannedWordsListFileReader";
import { CensoredTextWriterFake } from "./io-utils/CensoredTextWriterFake";
import { TextFileReaderFake } from "./io-utils/TextFileReaderFake";

describe("Censorer", () => {
  it("censors single words", () => {
    const originalText = "You're a nice person and very good";
    const bannedWords = ["nice"];
    const censoredTextWriter = new CensoredTextWriterFake();

    const censorer = new Censorer(
      new TextFileReaderFake(originalText),
      new BannedWordsListFileReader(bannedWords),
      censoredTextWriter,
    );

    censorer.censor();

    expect(censoredTextWriter.censoredText).toEqual(
      "You're a XXXX person and very XXXX",
    );
  });
  it("censors two words", () => {
    const originalText = "You're a nice person and very good";
    const bannedWords = ["nice", "good"];
    const censoredTextWriter = new CensoredTextWriterFake();

    const censorer = new Censorer(
      new TextFileReaderFake(originalText),
      new BannedWordsListFileReader(bannedWords),
      censoredTextWriter,
    );

    censorer.censor();

    expect(censoredTextWriter.censoredText).toEqual(
      "You're a XXXX person and very XXXX",
    );
  });
});
