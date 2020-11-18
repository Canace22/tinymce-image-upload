declare const tinymce: any;

const setup = (editor, url) => {
  editor.ui.registry.addButton('image', {
    text: 'image button',
    onAction: () => {
      // tslint:disable-next-line:no-console
      editor.setContent('<p>content added from image</p>');
    }
  });
};

export default () => {
  tinymce.PluginManager.add('image', setup);
};
