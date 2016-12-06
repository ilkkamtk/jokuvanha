var message = document.querySelector('#message');
var fileInput = document.querySelector('input[type=file]');
var image = document.querySelector('img');

var previewImage = function() {
    var reader = new FileReader();
    reader.addEventListener('load', function(evt) {
        image.src = this.result;
    });
    var file = this.files[0];
    console.log('File type is: ' + file.type);
    reader.readAsDataURL(file);
}

var upload = function(evt) {
    evt.preventDefault();
    message.innerHTML = 'Upload in progress...';
    var input = document.querySelector('input[type="file"]');

    var data = new FormData();
    data.append('fileToUpload', input.files[0]);

    fetch('url/to/server', {
        method: 'POST',
        body: data
    }).then(function(response) {
        return response.json();
    }).then(function(j) {
        console.log(j);
        message.innerHTML = 'Upload complete';
    });
}

document.querySelector('form').addEventListener('submit', upload);
fileInput.addEventListener('change', previewImage);