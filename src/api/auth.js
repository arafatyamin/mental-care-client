export const setAuthToken = async (user) => {



    const currentUser = {
        email: user.email
    }

    fetch(`https://doctor-portal-serrver.vercel.app/jwt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // local storage
            localStorage.setItem('genius-token', data.token);
        })

}