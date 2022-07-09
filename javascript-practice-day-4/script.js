const ajax = document.querySelector('.ajax > .row');
const _fetch = document.querySelector('.fetch > .row');

$.ajax({
    url: 'https://reqres.in/api/users/',
    type: 'GET',
})
    .done((data) => {
        data = data.data;
        ajax.innerHTML = data
            .map((item) => {
                return `
                <div class="polaroid col-2">
                    <img src="${item.avatar}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.first_name} ${item.last_name}</h5>
                        <p class="card-text text-center">${item.email}</p>
                    </div>
                </div>`;
            })
            .join('');
    })
    .fail((err) => console.log(err));

fetch('https://reqres.in/api/users?page=2')
    .then((res) => res.json())
    .then((data) => {
        data = data.data;
        _fetch.innerHTML = data
            .map((item) => {
                return `
                <div class="polaroid col-2">
                    <img src="${item.avatar}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.first_name} ${item.last_name}</h5>
                        <p class="card-text text-center">${item.email}</p>
                    </div>
                </div>`;
            })
            .join('');
    });