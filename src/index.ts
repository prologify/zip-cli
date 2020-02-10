import {Command, flags} from '@oclif/command';
import * as AdmZip from 'adm-zip';

class ZipCli extends Command {
  static description = 'zip-cli';

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    input: flags.string({char: 'i', required: true}),
    output: flags.string({char: 'o', required: true}),
  };

  async run() {
    const {flags} = this.parse(ZipCli);
    const {input, output} = flags;

    const zip = new AdmZip();

    zip.addLocalFolder(input);
    zip.writeZip(output);
  }
}

export = ZipCli;
