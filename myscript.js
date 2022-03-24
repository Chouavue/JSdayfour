const photoSlideShow = {
    photoList: ['photo1', 'photo2', 'photo3', 'photo4'],
    currentPhotoIndex: 0,


// console.log(photoSlideShow.photoList)
    function nextPhoto(): {
        if (this.currentPhotoIndex < this.photoSlideShow.photoList.length){
            this.currentPhotoIndex++;
        console.log (this.photoSlideShow.photoList(this.currentPhotoIndex));
}   else {
        console.log("end of slideshow");

}}

// function prevPhoto(){
//     if (this.currentPhotoIndex > 0) {
//         this.currentPhotoIndex--;
//         console.log(this.photoList([this.currentPhotoIndex]));
//     } else {
//         console.log("beginning of slideshow")
//     }
// }

// function getCurrentPhoto(){
//     console.log(this.photoList([this.currentPhotoIndex]))
// }
