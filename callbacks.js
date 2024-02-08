function loadScript(src, callback){
    //create a <script> tag and appeed it to the page
    // this causes the script with give src to start loading and run when completed
    let script = document.createElement('script';
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

loadScript('/my/script.js', function() {
    // the call back runs after the script is laoded
    newFunction(); // so now it works
    ...
});
// the code below loadScript
// doesn't wait for the script loading to finish
// ...

function loadScript(src){
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Script load error for ${src}'));

        document.head.append(script);
    });
}

let promise = loadScript("");

promise.then(
    script => alert(`{$script.src} is loaded!` ),
    error => alert(`Error: ${error.message}`)
   );

   promise.then(script => alert('Another hanndler...'));
