// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//콜백 지옥
// fakeRequestCallback('books.com/page1', function(response) {
//     console.log('IT WORKED!!!');
//     console.log(response);

//     fakeRequestCallback('books.com/page2', function(response) {
//         console.log('IT WORKED AGAIN!!!');
//         console.log(response);
//     }, function(err){
//         console.log('Second ERROR!!!', err);
//     });

// }, function(err){
//     console.log('ERROR!!!', err);
// });

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {        
//         console.log('IT WORKED!!! (page1)');

//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {        
//                 console.log('IT WORKED!!! (page2)');
//             })
//             .catch(() => {
//                 console.log('OH NO, A REQUEST ERROR!!! (page2)');
//             });
//     })
//     .catch(() => {
//         console.log('OH NO, A REQUEST ERROR!!! (page1)');
//     });

//프로미스
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(data => {        
        console.log('IT WORKED!!! (page1)');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(data => {
        console.log('IT WORKED!!! (page2)');
        console.log(data);
    })
    .catch(error => {
        console.log('OH NO, A REQUEST ERROR!!!');
        console.log(error);
    });