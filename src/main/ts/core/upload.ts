function getQiniuToken(fileExt, callback): any {
  const url =
    "https://api.ebag-test.readboy.com/questionare/v1/upload/token" +
    `?F_file_ext=${fileExt}`;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(JSON.parse(xhr.response));
    }
  };

  xhr.send(null);
}

function getUrl(formdata, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://up-z0.qiniup.com", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(JSON.parse(xhr.response));
    }
  };

  xhr.send(formdata);
}

export function uploadImg(api, editor) {
  const data = api.getData();
  const image = data.fileinput[0];
  const fileExt = image.name.split(".")[1];

  const getToken = (resp) => {
    const token = resp.F_token;

    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("token", token);

    getUrl(formdata, (res) => {
      const img = res.url;
      api.setData({ src: { value: res.url, meta: {} } });
      editor.execCommand(
        "mceInsertContent",
        false,
        `<img src=${img} class="img-t" alt='img-t'/>`
      );
      api.unblock();
      api.close();
    });
  };

  getQiniuToken(fileExt, getToken);
}
