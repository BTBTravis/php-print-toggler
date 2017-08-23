'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate() {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'php-print-toggler:hide': () => this.hide()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  hide() {
      console.log('Hiding PHP Prints!');
      let editor
      if (editor = atom.workspace.getActiveTextEditor()) {
          var m = {};
          let matches = editor.scan(/(?:\n{1})(\h*print_r\(\[[^\n]+)/g,function (m) {
              console.log({m:m});
              m.replace("\n//" + m.match[1]);
          });
      }
  }

};
