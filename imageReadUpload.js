function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
	
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
		
      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
			var  random=Math.floor((Math.random() * 999999) + 1)
         $("#preview").before('<div class="imagecontain" id="upimg'+random+'"><img src="'+  e.target.result +'" class="add_img_show" title="'+escape(theFile.name)+'"> <a href="javascript:;" onclick="removeFile(\'upimg'+random+'\');" class="remove">X</a></div>');
			$("#preview").show("slow");
			};
      })(f);
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);

function removeFile(incomingTag){
	var imageTag = incomingTag.toString().trim();
	var element = document.getElementById(imageTag);
	element.outerHTML = "";
	delete element;
}
