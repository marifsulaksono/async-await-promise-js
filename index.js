const token = 12345;

function login(username) {
    console.log("Proses login...")
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username != "arif") failed("Maaf, username salah")
            success({ token, username })
        }, 200)
    })
}

function getUser(token) {
    console.log("Proses getting user...")
    return new Promise((success, failed) => {
        if (!token) failed("Token tidak ditemukan")
        setTimeout(() => {
            success({ userId: "123" })
        }, 400)
    })
}

function getPhotoProfile(userId) {
    console.log("Proses get photo profile...")
    return new Promise((success, failed) => {
        if (!token) failed("User ID tidak ditemukan")
        setTimeout(() => {
            success({ photo: "arif.png" })
        }, 1000)
    })
}

async function userProfile() {
    const { token } = await login("arif");
    const { userId } = await getUser(token);
    const { photo } = await getPhotoProfile(userId);

    console.log("Token : ", token)
    console.log("User ID : ", userId)
    console.log("Photo profile : ", photo)
}

userProfile();