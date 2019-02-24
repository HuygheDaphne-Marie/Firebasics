document.addEventListener('DOMContentLoaded', function(event) {
    const postsElement = document.querySelector('.posts');

    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();
    const posts = db.collection('posts').doc('firstpost');

    // Get a post from the database
    // posts.get()
    //     .then(doc => {
    //         const data = doc.data();
    //         console.log(data);
    //         postsElement.innerHTML += (data.title + '<br>');
    //         postsElement.innerHTML += (data.views + '<br>');
    //     });

    posts.onSnapshot(doc => {
        const data = doc.data();
        console.log(data);
        postsElement.innerHTML += (data.title + '<br>');
        postsElement.innerHTML += (data.views + '<br>');
    })
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(res => {
            const user = res.user;
            document.write(`Hi there ${user.displayName}`);
            console.log(user);
        })
        .catch(err => {console.log(err)})
}