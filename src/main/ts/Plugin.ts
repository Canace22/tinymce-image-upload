import { uploadImg } from "./core/upload";

declare const tinymce: any;

const dialog = (editor) => {
  return {
    title: "上传图片",
    body: {
      type: "panel",
      items: [
        {
          type: "dropzone",
          name: "fileinput",
          label: "",
        },
      ],
    },
    buttons: [],
    onChange(api) {
      api.block("上传中……");
      uploadImg(api, editor);
    },
  };
};

const setup = (editor) => {
  editor.ui.registry.addButton("image-t", {
    icon: "image",
    tooltip: "image-t",
    onAction: () => {
      // tslint:disable-next-line:no-console
      const dialogConfig = dialog(editor);
      editor.windowManager.open(dialogConfig);
    },
  });
};

export default () => {
  tinymce.PluginManager.add("image-t", setup);
};
