// export async function login({ email, password }) {}

export async function login(email, password) {
    const data = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            email:email,
            password:password
        })
    });

    
    if(data.status === 200){
        const tech = await data.json();
        const token = tech.data.accessToken;
        const name = tech.data.name;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('username', name);
        window.location.replace('../post/index.html')
    } else {
        document.getElementById('error_message_login').textContent = 'Failed to login. Email address or password is wrong. Please try again'
    }

}