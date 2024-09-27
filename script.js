function fetchUser() {
    showSpin();
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
        displayUser(data.results[0])
        console.log(data.results[0])
        hideSpin();
    });
}

function displayUser(user) {
    document.body.style.backgroundColor = (user.gender === 'female') ? 'rebeccapurple' : 'steelblue';

    const userPanel = document.querySelector('#user');
    userPanel.innerHTML = `<div class="flex justify-between">
                <div class="flex">
                    <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}"
                        alt="profile picture">
                    <div class="space-y-3">
                        <p class="text-xl"><span class="font-bold">Name: </span>${user.name.first} ${user.name.last}</p>
                        <p class="text-xl"><span class="font-bold">Email: </span>${user.email}</p>
                        <p class="text-xl"><span class="font-bold">Phone: </span>${user.phone}</p>
                        <p class="text-xl"><span class="font-bold">Location: </span>${user.location.city}, ${user.location.state} ${user.location.country}</p>
                        <p class="text-xl"><span class="font-bold">Age: </span>${user.dob.age}</p>
                    </div>
                </div>
            </div>`
}

function showSpin() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpin() {
    document.querySelector('.spinner').style.display = 'none';
}

fetchUser();

document.querySelector("#generate").addEventListener('click', fetchUser);