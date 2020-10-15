import { CensoredTextWriter } from "./CensoredTextWriter";

export class CensoredTextWriterFake extends CensoredTextWriter {
  constructor() {
    super();
    this.censoredText = "";
  }
  write(censoredText) {
    this.censoredText = censoredText;
  }
}
