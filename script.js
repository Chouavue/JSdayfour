// const users = [
//     {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
//     {id: 3283, firstName: 'Elijah', lastName: 'Hawkins', logins: 3, isPremiumMember: true},
//     {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
//     {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
//     {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
//     {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
//     {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
//     {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false},
// ];

// const userNameJose = users.find(users => users.firstName == 'Jose');
// console.log(userNameJose);

// const premiumMember = users.filter(users => users.isPremiumMember = 'true');
// console.log(premiumMember)

// const usersLastName = users.map(users => users.lastName);
// console.log(userslastname);

// const login = users.filter(users => users.logins >= 10)
// console.log(login);

// const loginNames = login.map(user=> user.firstName + user.lastName)
// console.log(loginNames);

// const totalLogin = users.reduce((total, item) => item.logins + total, 0)
// console.log (totalLogin);


const photoSlideShow = {
    photoList: ['photo1', 'photo2', 'photo3', 'photo4'],
    currentPhotoIndex: 0,
    nextphoto: function(){
            if (this.currentPhotoIndex < this.photoList.length){
                this.currentPhotoIndex ++;
                return(this.photoList[this.currentPhotoIndex]);
            } else {
                return console.log("end of slideshow");
        }
    },
    prevPhoto: function(){
            if (this.currentPhotoIndex > 0){
                this.currentPhotoIndex --;
                return(this.photoList[this.currentPhotoIndex]);
            } else {
                return("beginning of slideshow")
            }
    },
    getCurrentPhoto: function(){
        return (this.photoList[this.currentPhotoIndex]);
    }
}

console.log(photoSlideShow.nextphoto());
console.log(photoSlideShow.nextphoto());
console.log(photoSlideShow.nextphoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.getCurrentPhoto());